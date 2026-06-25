(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Vd=!1;var ad=Array.isArray,Hp=Array.prototype.indexOf,sd=Array.from,Eh=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,wh=Object.getOwnPropertyDescriptors,Gp=Object.prototype,Vp=Array.prototype,od=Object.getPrototypeOf,Wd=Object.isExtensible;function Kr(n){return typeof n=="function"}const on=()=>{};function Wp(n){return n()}function oo(n){for(var e=0;e<n.length;e++)n[e]()}const Qn=2,Th=4,Ro=8,Co=16,Di=32,da=64,lo=128,Dn=256,co=512,_n=1024,mi=2048,ir=4096,Ri=8192,Po=16384,Ah=32768,ua=65536,Xp=1<<17,$p=1<<19,Rh=1<<20,Wl=1<<21,Zi=Symbol("$state"),Ch=Symbol("legacy props"),qp=Symbol("");let uo=[];function Yp(){var n=uo;uo=[],oo(n)}function ts(n){uo.length===0&&queueMicrotask(Yp),uo.push(n)}function Ph(n){return n===this.v}function Ih(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function ld(n){return!Ih(n,this.v)}function jp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Kp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Zp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Jp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qp(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function em(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ha=!1,im=!1;function rm(){ha=!0}const cd=1,dd=2,Lh=4,am=8,sm=16,om=1,lm=2,cm=4,dm=8,um=16,hm=1,fm=2,pm=4,Dh=1,mm=2,En=Symbol(),vm="http://www.w3.org/1999/xhtml",gm="http://www.w3.org/2000/svg";function Nh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let It=null;function Xd(n){It=n}function Lt(n,e=!1,t){var i=It={p:It,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};ha&&!e&&(It.l={s:null,u:null,r1:[],r2:qa(!1)}),ud(()=>{i.d=!0})}function Dt(n){const e=It;if(e!==null){const s=e.e;if(s!==null){var t=yt,i=At;e.e=null;try{for(var r=0;r<s.length;r++){var a=s[r];vi(a.effect),Vn(a.reaction),Fo(a.fn)}}finally{vi(t),Vn(i)}}It=e.p,e.m=!0}return{}}function Io(){return!ha||It!==null&&It.l===null}function xr(n){if(typeof n!="object"||n===null||Zi in n)return n;const e=od(n);if(e!==Gp&&e!==Vp)return n;var t=new Map,i=ad(n),r=Bi(0),a=At,s=o=>{var l=At;Vn(a);var c=o();return Vn(l),c};return i&&t.set("length",Bi(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&em();var d=t.get(l);return d===void 0?(d=s(()=>Bi(c.value)),t.set(l,d)):Oe(d,s(()=>xr(c.value))),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0)l in o&&(t.set(l,s(()=>Bi(En))),tl(r));else{if(i&&typeof l=="string"){var d=t.get("length"),h=Number(l);Number.isInteger(h)&&h<d.v&&Oe(d,h)}Oe(c,En),tl(r)}return!0},get(o,l,c){var p;if(l===Zi)return n;var d=t.get(l),h=l in o;if(d===void 0&&(!h||(p=Ki(o,l))!=null&&p.writable)&&(d=s(()=>Bi(xr(h?o[l]:En))),t.set(l,d)),d!==void 0){var u=I(d);return u===En?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=I(d))}else if(c===void 0){var h=t.get(l),u=h==null?void 0:h.v;if(h!==void 0&&u!==En)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===Zi)return!0;var c=t.get(l),d=c!==void 0&&c.v!==En||Reflect.has(o,l);if(c!==void 0||yt!==null&&(!d||(u=Ki(o,l))!=null&&u.writable)){c===void 0&&(c=s(()=>Bi(d?xr(o[l]):En)),t.set(l,c));var h=I(c);if(h===En)return!1}return d},set(o,l,c,d){var y;var h=t.get(l),u=l in o;if(i&&l==="length")for(var p=c;p<h.v;p+=1){var v=t.get(p+"");v!==void 0?Oe(v,En):p in o&&(v=s(()=>Bi(En)),t.set(p+"",v))}h===void 0?(!u||(y=Ki(o,l))!=null&&y.writable)&&(h=s(()=>Bi(void 0)),Oe(h,s(()=>xr(c))),t.set(l,h)):(u=h.v!==En,Oe(h,s(()=>xr(c))));var g=Reflect.getOwnPropertyDescriptor(o,l);if(g!=null&&g.set&&g.set.call(d,c),!u){if(i&&typeof l=="string"){var m=t.get("length"),f=Number(l);Number.isInteger(f)&&f>=m.v&&Oe(m,f+1)}tl(r)}return!0},ownKeys(o){I(r);var l=Reflect.ownKeys(o).filter(h=>{var u=t.get(h);return u===void 0||u.v!==En});for(var[c,d]of t)d.v!==En&&!(c in o)&&l.push(c);return l},setPrototypeOf(){tm()}})}function tl(n,e=1){Oe(n,n.v+e)}function Xa(n){var e=Qn|mi,t=At!==null&&(At.f&Qn)!==0?At:null;return yt===null||t!==null&&(t.f&Dn)!==0?e|=Dn:yt.f|=Rh,{ctx:It,deps:null,effects:null,equals:Ph,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??yt}}function Et(n){const e=Xa(n);return e.equals=ld,e}function Uh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)gi(e[t])}}function xm(n){for(var e=n.parent;e!==null;){if((e.f&Qn)===0)return e;e=e.parent}return null}function Fh(n){var e,t=yt;vi(xm(n));try{Uh(n),e=Xh(n)}finally{vi(t)}return e}function Oh(n){var e=Fh(n),t=(qi||(n.f&Dn)!==0)&&n.deps!==null?ir:_n;Wn(n,t),n.equals(e)||(n.v=e,n.wv=Vh())}const $a=new Map;function qa(n,e){var t={f:0,v:n,reactions:null,equals:Ph,rv:0,wv:0};return t}function Bi(n,e){const t=qa(n);return Sm(t),t}function pt(n,e=!1){var i;const t=qa(n);return e||(t.equals=ld),ha&&It!==null&&It.l!==null&&((i=It.l).s??(i.s=[])).push(t),t}function Oe(n,e,t=!1){At!==null&&!li&&Io()&&(At.f&(Qn|Co))!==0&&!(gn!=null&&gn.includes(n))&&nm();let i=t?xr(e):e;return Xl(n,i)}function Xl(n,e){if(!n.equals(e)){var t=n.v;is?$a.set(n,e):$a.set(n,t),n.v=e,(n.f&Qn)!==0&&((n.f&mi)!==0&&Fh(n),Wn(n,(n.f&Dn)===0?_n:ir)),n.wv=Vh(),Bh(n,mi),Io()&&yt!==null&&(yt.f&_n)!==0&&(yt.f&(Di|da))===0&&(Bn===null?Mm([n]):Bn.push(n))}return e}function Bh(n,e){var t=n.reactions;if(t!==null)for(var i=Io(),r=t.length,a=0;a<r;a++){var s=t[a],o=s.f;(o&mi)===0&&(!i&&s===yt||(Wn(s,e),(o&(_n|Dn))!==0&&((o&Qn)!==0?Bh(s,ir):Uo(s))))}}let _m=!1;var $d,kh,zh,Hh;function bm(){if($d===void 0){$d=window,kh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;zh=Ki(e,"firstChild").get,Hh=Ki(e,"nextSibling").get,Wd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Wd(t)&&(t.__t=void 0)}}function ns(n=""){return document.createTextNode(n)}function In(n){return zh.call(n)}function Lo(n){return Hh.call(n)}function x(n,e){return In(n)}function Gn(n,e){{var t=In(n);return t instanceof Comment&&t.data===""?Lo(t):t}}function R(n,e=1,t=!1){let i=n;for(;e--;)i=Lo(i);return i}function ym(n){n.textContent=""}let Ys=!1,$l=!1,ho=null,Er=!1,is=!1;function qd(n){is=n}let js=[];let At=null,li=!1;function Vn(n){At=n}let yt=null;function vi(n){yt=n}let gn=null;function Sm(n){At!==null&&At.f&Wl&&(gn===null?gn=[n]:gn.push(n))}let pn=null,Pn=0,Bn=null;function Mm(n){Bn=n}let Gh=1,fo=0,qi=!1;function Vh(){return++Gh}function fa(n){var h;var e=n.f;if((e&mi)!==0)return!0;if((e&ir)!==0){var t=n.deps,i=(e&Dn)!==0;if(t!==null){var r,a,s=(e&co)!==0,o=i&&yt!==null&&!qi,l=t.length;if(s||o){var c=n,d=c.parent;for(r=0;r<l;r++)a=t[r],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(c)))&&(a.reactions??(a.reactions=[])).push(c);s&&(c.f^=co),o&&d!==null&&(d.f&Dn)===0&&(c.f^=Dn)}for(r=0;r<l;r++)if(a=t[r],fa(a)&&Oh(a),a.wv>n.wv)return!0}(!i||yt!==null&&!qi)&&Wn(n,_n)}return!1}function Em(n,e){for(var t=e;t!==null;){if((t.f&lo)!==0)try{t.fn(n);return}catch{t.f^=lo}t=t.parent}throw Ys=!1,n}function Yd(n){return(n.f&Po)===0&&(n.parent===null||(n.parent.f&lo)===0)}function Do(n,e,t,i){if(Ys){if(t===null&&(Ys=!1),Yd(e))throw n;return}if(t!==null&&(Ys=!0),Em(n,e),Yd(e))throw n}function Wh(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var a=i[r];gn!=null&&gn.includes(n)||((a.f&Qn)!==0?Wh(a,e,!1):e===a&&(t?Wn(a,mi):(a.f&_n)!==0&&Wn(a,ir),Uo(a)))}}function Xh(n){var p;var e=pn,t=Pn,i=Bn,r=At,a=qi,s=gn,o=It,l=li,c=n.f;pn=null,Pn=0,Bn=null,qi=(c&Dn)!==0&&(li||!Er||At===null),At=(c&(Di|da))===0?n:null,gn=null,Xd(n.ctx),li=!1,fo++,n.f|=Wl;try{var d=(0,n.fn)(),h=n.deps;if(pn!==null){var u;if(po(n,Pn),h!==null&&Pn>0)for(h.length=Pn+pn.length,u=0;u<pn.length;u++)h[Pn+u]=pn[u];else n.deps=h=pn;if(!qi)for(u=Pn;u<h.length;u++)((p=h[u]).reactions??(p.reactions=[])).push(n)}else h!==null&&Pn<h.length&&(po(n,Pn),h.length=Pn);if(Io()&&Bn!==null&&!li&&h!==null&&(n.f&(Qn|ir|mi))===0)for(u=0;u<Bn.length;u++)Wh(Bn[u],n);return r!==null&&r!==n&&(fo++,Bn!==null&&(i===null?i=Bn:i.push(...Bn))),d}finally{pn=e,Pn=t,Bn=i,At=r,qi=a,gn=s,Xd(o),li=l,n.f^=Wl}}function wm(n,e){let t=e.reactions;if(t!==null){var i=Hp.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&Qn)!==0&&(pn===null||!pn.includes(e))&&(Wn(e,ir),(e.f&(Dn|co))===0&&(e.f^=co),Uh(e),po(e,0))}function po(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)wm(n,t[i])}function No(n){var e=n.f;if((e&Po)===0){Wn(n,_n);var t=yt,i=It,r=Er;yt=n,Er=!0;try{(e&Co)!==0?Nm(n):Yh(n),qh(n);var a=Xh(n);n.teardown=typeof a=="function"?a:null,n.wv=Gh;var s=n.deps,o;Vd&&im&&n.f&mi}catch(l){Do(l,n,t,i||n.ctx)}finally{Er=r,yt=t}}}function Tm(){try{Jp()}catch(n){if(ho!==null)Do(n,ho,null);else throw n}}function Am(){var n=Er;try{var e=0;for(Er=!0;js.length>0;){e++>1e3&&Tm();var t=js,i=t.length;js=[];for(var r=0;r<i;r++){var a=Cm(t[r]);Rm(a)}$a.clear()}}finally{$l=!1,Er=n,ho=null}}function Rm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Po|Ri))===0)try{fa(i)&&(No(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Kh(i):i.fn=null))}catch(r){Do(r,i,null,i.ctx)}}}function Uo(n){$l||($l=!0,queueMicrotask(Am));for(var e=ho=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(da|Di))!==0){if((t&_n)===0)return;e.f^=_n}}js.push(e)}function Cm(n){for(var e=[],t=n;t!==null;){var i=t.f,r=(i&(Di|da))!==0,a=r&&(i&_n)!==0;if(!a&&(i&Ri)===0){if((i&Th)!==0)e.push(t);else if(r)t.f^=_n;else try{fa(t)&&No(t)}catch(l){Do(l,t,null,t.ctx)}var s=t.first;if(s!==null){t=s;continue}}var o=t.parent;for(t=t.next;t===null&&o!==null;)t=o.next,o=o.parent}return e}function I(n){var e=n.f,t=(e&Qn)!==0;if(At!==null&&!li){if(!(gn!=null&&gn.includes(n))){var i=At.deps;n.rv<fo&&(n.rv=fo,pn===null&&i!==null&&i[Pn]===n?Pn++:pn===null?pn=[n]:(!qi||!pn.includes(n))&&pn.push(n))}}else if(t&&n.deps===null&&n.effects===null){var r=n,a=r.parent;a!==null&&(a.f&Dn)===0&&(r.f^=Dn)}return t&&(r=n,fa(r)&&Oh(r)),is&&$a.has(n)?$a.get(n):n.v}function Ii(n){var e=li;try{return li=!0,n()}finally{li=e}}const Pm=-7169;function Wn(n,e){n.f=n.f&Pm|e}function mo(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Zi in n)ql(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Zi in t&&ql(t)}}}function ql(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{ql(n[i],e)}catch{}const t=od(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=wh(t);for(let r in i){const a=i[r].get;if(a)try{a.call(n)}catch{}}}}}function $h(n){yt===null&&At===null&&Zp(),At!==null&&(At.f&Dn)!==0&&yt===null&&Kp(),is&&jp()}function Im(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function pa(n,e,t,i=!0){var r=yt,a={ctx:It,deps:null,nodes_start:null,nodes_end:null,f:n|mi,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(t)try{No(a),a.f|=Ah}catch(l){throw gi(a),l}else e!==null&&Uo(a);var s=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Rh|lo))===0;if(!s&&i&&(r!==null&&Im(a,r),At!==null&&(At.f&Qn)!==0)){var o=At;(o.effects??(o.effects=[])).push(a)}return a}function ud(n){const e=pa(Ro,null,!1);return Wn(e,_n),e.teardown=n,e}function Yl(n){$h();var e=yt!==null&&(yt.f&Di)!==0&&It!==null&&!It.m;if(e){var t=It;(t.e??(t.e=[])).push({fn:n,effect:yt,reaction:At})}else{var i=Fo(n);return i}}function Lm(n){return $h(),Oo(n)}function Dm(n){const e=pa(da,n,!0);return(t={})=>new Promise(i=>{t.outro?Ya(e,()=>{gi(e),i(void 0)}):(gi(e),i(void 0))})}function Fo(n){return pa(Th,n,!1)}function Qi(n,e){var t=It,i={effect:null,ran:!1};t.l.r1.push(i),i.effect=Oo(()=>{n(),!i.ran&&(i.ran=!0,Oe(t.l.r2,!0),Ii(e))})}function ma(){var n=It;Oo(()=>{if(I(n.l.r2)){for(var e of n.l.r1){var t=e.effect;(t.f&_n)!==0&&Wn(t,ir),fa(t)&&No(t),e.ran=!1}n.l.r2.v=!1}})}function Oo(n){return pa(Ro,n,!0)}function je(n,e=[],t=Xa){const i=e.map(t);return rs(()=>n(...i.map(I)))}function rs(n,e=0){return pa(Ro|Co|e,n,!0)}function Tr(n,e=!0){return pa(Ro|Di,n,!0,e)}function qh(n){var e=n.teardown;if(e!==null){const t=is,i=At;qd(!0),Vn(null);try{e.call(null)}finally{qd(t),Vn(i)}}}function Yh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;(t.f&da)!==0?t.parent=null:gi(t,e),t=i}}function Nm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Di)===0&&gi(e),e=t}}function gi(n,e=!0){var t=!1;(e||(n.f&$p)!==0)&&n.nodes_start!==null&&(jh(n.nodes_start,n.nodes_end),t=!0),Yh(n,e&&!t),po(n,0),Wn(n,Po);var i=n.transitions;if(i!==null)for(const a of i)a.stop();qh(n);var r=n.parent;r!==null&&r.first!==null&&Kh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function jh(n,e){for(;n!==null;){var t=n===e?null:Lo(n);n.remove(),n=t}}function Kh(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Ya(n,e){var t=[];hd(n,t,!0),Zh(t,()=>{gi(n),e&&e()})}function Zh(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function hd(n,e,t){if((n.f&Ri)===0){if(n.f^=Ri,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&e.push(s);for(var i=n.first;i!==null;){var r=i.next,a=(i.f&ua)!==0||(i.f&Di)!==0;hd(i,e,a?t:!1),i=r}}}function ja(n){Jh(n,!0)}function Jh(n,e){if((n.f&Ri)!==0){n.f^=Ri,(n.f&_n)===0&&(n.f^=_n),fa(n)&&(Wn(n,mi),Uo(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ua)!==0||(t.f&Di)!==0;Jh(t,r?e:!1),t=i}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&a.in()}}function Um(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Fm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Om(n){return Fm.includes(n)}const Bm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function km(n){return n=n.toLowerCase(),Bm[n]??n}const zm=["touchstart","touchmove"];function Hm(n){return zm.includes(n)}function Gm(n,e){if(e){const t=document.body;n.autofocus=!0,ts(()=>{document.activeElement===t&&n.focus()})}}function Qh(n){var e=At,t=yt;Vn(null),vi(null);try{return n()}finally{Vn(e),vi(t)}}const ef=new Set,jl=new Set;function tf(n,e,t,i={}){function r(a){if(i.capture||ka.call(e,a),!a.cancelBubble)return Qh(()=>t==null?void 0:t.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ts(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Vt(n,e,t,i,r){var a={capture:i,passive:r},s=tf(n,e,t,a);(e===document.body||e===window||e===document)&&ud(()=>{e.removeEventListener(n,s,a)})}function Vm(n){for(var e=0;e<n.length;e++)ef.add(n[e]);for(var t of jl)t(n)}function ka(n){var y;var e=this,t=e.ownerDocument,i=n.type,r=((y=n.composedPath)==null?void 0:y.call(n))||[],a=r[0]||n.target,s=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(s=l)}if(a=r[s]||n.target,a!==e){Eh(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=At,h=yt;Vn(null),vi(null);try{for(var u,p=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+i];if(g!=null&&(!a.disabled||n.target===a))if(ad(g)){var[m,...f]=g;m.apply(a,[n,...f])}else g.call(a,n)}catch(_){u?p.push(_):u=_}if(n.cancelBubble||v===e||v===null)break;a=v}if(u){for(let _ of p)queueMicrotask(()=>{throw _});throw u}}finally{n.__root=e,delete n.currentTarget,Vn(d),vi(h)}}}function fd(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function er(n,e){var t=yt;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function Pe(n,e){var t=(e&Dh)!==0,i=(e&mm)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=fd(a?n:"<!>"+n),t||(r=In(r)));var s=i||kh?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=In(s),l=s.lastChild;er(o,l)}else er(s,s);return s}}function va(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&Dh)!==0,a=`<${t}>${i?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=fd(a),l=In(o);if(r)for(s=document.createDocumentFragment();In(l);)s.appendChild(In(l));else s=In(l)}var c=s.cloneNode(!0);if(r){var d=In(c),h=c.lastChild;er(d,h)}else er(c,c);return c}}function Ci(n=""){{var e=ns(n+"");return er(e,e),e}}function ga(){var n=document.createDocumentFragment(),e=document.createComment(""),t=ns();return n.append(e,t),er(e,t),n}function ue(n,e){n!==null&&n.before(e)}let vo=!0;function jd(n){vo=n}function k(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Wm(n,e){return Xm(n,e)}const Nr=new Map;function Xm(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:s=!0}){bm();var o=new Set,l=h=>{for(var u=0;u<h.length;u++){var p=h[u];if(!o.has(p)){o.add(p);var v=Hm(p);e.addEventListener(p,ka,{passive:v});var g=Nr.get(p);g===void 0?(document.addEventListener(p,ka,{passive:v}),Nr.set(p,1)):Nr.set(p,g+1)}}};l(sd(ef)),jl.add(l);var c=void 0,d=Dm(()=>{var h=t??e.appendChild(ns());return Tr(()=>{if(a){Lt({});var u=It;u.c=a}r&&(i.$$events=r),vo=s,c=n(h,i)||{},vo=!0,a&&Dt()}),()=>{var v;for(var u of o){e.removeEventListener(u,ka);var p=Nr.get(u);--p===0?(document.removeEventListener(u,ka),Nr.delete(u)):Nr.set(u,p)}jl.delete(l),h!==t&&((v=h.parentNode)==null||v.removeChild(h))}});return $m.set(c,d),c}let $m=new WeakMap;function dt(n,e,[t,i]=[0,0]){var r=n,a=null,s=null,o=En,l=t>0?ua:0,c=!1;const d=(u,p=!0)=>{c=!0,h(p,u)},h=(u,p)=>{o!==(o=u)&&(o?(a?ja(a):p&&(a=Tr(()=>p(r))),s&&Ya(s,()=>{s=null})):(s?ja(s):p&&(s=Tr(()=>p(r,[t+1,i]))),a&&Ya(a,()=>{a=null})))};rs(()=>{c=!1,e(d),c||h(null,null)},l)}let wr=null;function Kd(n){wr=n}function Qt(n,e){return e}function qm(n,e,t,i){for(var r=[],a=e.length,s=0;s<a;s++)hd(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;ym(l),l.append(t),i.clear(),Xi(n,e[0].prev,e[a-1].next)}Zh(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(i.delete(d.k),Xi(n,d.prev,d.next)),gi(d.e,!o)}})}function Wt(n,e,t,i,r,a=null){var s=n,o={flags:e,items:new Map,first:null},l=(e&Lh)!==0;if(l){var c=n;s=c.appendChild(ns())}var d=null,h=!1,u=Et(()=>{var p=t();return ad(p)?p:p==null?[]:sd(p)});rs(()=>{var p=I(u),v=p.length;h&&v===0||(h=v===0,Ym(p,o,s,r,e,i,t),a!==null&&(v===0?d?ja(d):d=Tr(()=>a(s)):d!==null&&Ya(d,()=>{d=null})),I(u))})}function Ym(n,e,t,i,r,a,s){var $,z,W,G;var o=(r&am)!==0,l=(r&(cd|dd))!==0,c=n.length,d=e.items,h=e.first,u=h,p,v=null,g,m=[],f=[],y,_,E,S;if(o)for(S=0;S<c;S+=1)y=n[S],_=a(y,S),E=d.get(_),E!==void 0&&(($=E.a)==null||$.measure(),(g??(g=new Set)).add(E));for(S=0;S<c;S+=1){if(y=n[S],_=a(y,S),E=d.get(_),E===void 0){var T=u?u.e.nodes_start:t;v=Km(T,e,v,v===null?e.first:v.next,y,_,S,i,r,s),d.set(_,v),m=[],f=[],u=v.next;continue}if(l&&jm(E,y,S,r),(E.e.f&Ri)!==0&&(ja(E.e),o&&((z=E.a)==null||z.unfix(),(g??(g=new Set)).delete(E))),E!==u){if(p!==void 0&&p.has(E)){if(m.length<f.length){var A=f[0],D;v=A.prev;var M=m[0],w=m[m.length-1];for(D=0;D<m.length;D+=1)Zd(m[D],A,t);for(D=0;D<f.length;D+=1)p.delete(f[D]);Xi(e,M.prev,w.next),Xi(e,v,M),Xi(e,w,A),u=A,v=w,S-=1,m=[],f=[]}else p.delete(E),Zd(E,u,t),Xi(e,E.prev,E.next),Xi(e,E,v===null?e.first:v.next),Xi(e,v,E),v=E;continue}for(m=[],f=[];u!==null&&u.k!==_;)(u.e.f&Ri)===0&&(p??(p=new Set)).add(u),f.push(u),u=u.next;if(u===null)continue;E=u}m.push(E),v=E,u=E.next}if(u!==null||p!==void 0){for(var P=p===void 0?[]:sd(p);u!==null;)(u.e.f&Ri)===0&&P.push(u),u=u.next;var N=P.length;if(N>0){var B=(r&Lh)!==0&&c===0?t:null;if(o){for(S=0;S<N;S+=1)(W=P[S].a)==null||W.measure();for(S=0;S<N;S+=1)(G=P[S].a)==null||G.fix()}qm(e,P,B,d)}}o&&ts(()=>{var Z;if(g!==void 0)for(E of g)(Z=E.a)==null||Z.apply()}),yt.first=e.first&&e.first.e,yt.last=v&&v.e}function jm(n,e,t,i){(i&cd)!==0&&Xl(n.v,e),(i&dd)!==0?Xl(n.i,t):n.i=t}function Km(n,e,t,i,r,a,s,o,l,c){var d=wr,h=(l&cd)!==0,u=(l&sm)===0,p=h?u?pt(r):qa(r):r,v=(l&dd)===0?s:qa(s),g={i:v,v:p,k:a,a:null,e:null,prev:t,next:i};wr=g;try{return g.e=Tr(()=>o(n,p,v,c),_m),g.e.prev=t&&t.e,g.e.next=i&&i.e,t===null?e.first=g:(t.next=g,t.e.next=g.e),i!==null&&(i.prev=g,i.e.prev=g.e),g}finally{wr=d}}function Zd(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=n.e.nodes_start;a!==i;){var s=Lo(a);r.before(a),a=s}}function Xi(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ln(n,e,t=!1,i=!1,r=!1){var a=n,s="";je(()=>{var o=yt;if(s!==(s=e()??"")&&(o.nodes_start!==null&&(jh(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),s!=="")){var l=s+"";t?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var c=fd(l);if((t||i)&&(c=In(c)),er(In(c),c.lastChild),t||i)for(;In(c);)a.before(In(c));else a.before(c)}})}function nf(n,e,...t){var i=n,r=on,a;rs(()=>{r!==(r=e())&&(a&&(gi(a),a=null),a=Tr(()=>r(i,...t)))},ua)}function Zm(n,e,t,i,r,a){var s,o,l=null,c=n,d,h=wr;rs(()=>{const u=e()||null;var p=gm;if(u!==s){var v=wr;Kd(h),d&&(u===null?Ya(d,()=>{d=null,o=null}):u===o?ja(d):(gi(d),jd(!1))),u&&u!==o&&(d=Tr(()=>{if(l=document.createElementNS(p,u),er(l,l),i){var g=l.appendChild(ns());i(l,g)}yt.nodes_end=l,c.before(l)})),s=u,s&&(o=s),jd(!0),Kd(v)}},ua)}function rf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=rf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Jm(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=rf(n))&&(i&&(i+=" "),i+=e);return i}function mn(n){return typeof n=="object"?Jm(n):n??""}const Jd=[...` 	
\r\f \v\uFEFF`];function Qm(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var o=s+a;(s===0||Jd.includes(i[s-1]))&&(o===i.length||Jd.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function Qd(n,e=!1){var t=e?" !important;":";",i="";for(var r in n){var a=n[r];a!=null&&a!==""&&(i+=" "+r+": "+a+t)}return i}function nl(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function e0(n,e){if(e){var t="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(nl)),r&&l.push(...Object.keys(r).map(nl));var c=0,d=-1;const g=n.length;for(var h=0;h<g;h++){var u=n[h];if(o?u==="/"&&n[h-1]==="*"&&(o=!1):a?a===u&&(a=!1):u==="/"&&n[h+1]==="*"?o=!0:u==='"'||u==="'"?a=u:u==="("?s++:u===")"&&s--,!o&&a===!1&&s===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===g-1){if(d!==-1){var p=nl(n.substring(c,d).trim());if(!l.includes(p)){u!==";"&&h++;var v=n.substring(c,h).trim();t+=" "+v+";"}}c=h+1,d=-1}}}}return i&&(t+=Qd(i)),r&&(t+=Qd(r,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function Ne(n,e,t,i,r,a){var s=n.__className;if(s!==t||s===void 0){var o=Qm(t,i,a);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n.__className=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function il(n,e={},t,i){for(var r in t){var a=t[r];e[r]!==a&&(t[r]==null?n.style.removeProperty(r):n.style.setProperty(r,a,i))}}function ui(n,e,t,i){var r=n.__style;if(r!==e){var a=e0(e,i);a==null?n.removeAttribute("style"):n.style.cssText=a,n.__style=e}else i&&(Array.isArray(i)?(il(n,t==null?void 0:t[0],i[0]),il(n,t==null?void 0:t[1],i[1],"important")):il(n,t,i));return i}const Ca=Symbol("class"),Pa=Symbol("style"),af=Symbol("is custom element"),sf=Symbol("is html");function t0(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function xe(n,e,t,i){var r=of(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[qp]=t),t==null?n.removeAttribute(e):typeof t!="string"&&lf(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function eu(n,e,t,i,r=!1){var a=of(n),s=a[af],o=!a[sf],l=e||{},c=n.tagName==="OPTION";for(var d in e)d in t||(t[d]=null);t.class?t.class=mn(t.class):t[Ca]&&(t.class=null),t[Pa]&&(t.style??(t.style=null));var h=lf(n);for(const _ in t){let E=t[_];if(c&&_==="value"&&E==null){n.value=n.__value="",l[_]=E;continue}if(_==="class"){var u=n.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(n,u,E,i,e==null?void 0:e[Ca],t[Ca]),l[_]=E,l[Ca]=t[Ca];continue}if(_==="style"){ui(n,E,e==null?void 0:e[Pa],t[Pa]),l[_]=E,l[Pa]=t[Pa];continue}var p=l[_];if(E!==p){l[_]=E;var v=_[0]+_[1];if(v!=="$$")if(v==="on"){const S={},T="$$"+_;let A=_.slice(2);var g=Om(A);if(Um(A)&&(A=A.slice(0,-7),S.capture=!0),!g&&p){if(E!=null)continue;n.removeEventListener(A,l[T],S),l[T]=null}if(E!=null)if(g)n[`__${A}`]=E,Vm([A]);else{let D=function(M){l[_].call(this,M)};var y=D;l[T]=tf(A,n,D,S)}else g&&(n[`__${A}`]=void 0)}else if(_==="style")xe(n,_,E);else if(_==="autofocus")Gm(n,!!E);else if(!s&&(_==="__value"||_==="value"&&E!=null))n.value=n.__value=E;else if(_==="selected"&&c)t0(n,E);else{var m=_;o||(m=km(m));var f=m==="defaultValue"||m==="defaultChecked";if(E==null&&!s&&!f)if(a[_]=null,m==="value"||m==="checked"){let S=n;const T=e===void 0;if(m==="value"){let A=S.defaultValue;S.removeAttribute(m),S.defaultValue=A,S.value=S.__value=T?A:null}else{let A=S.defaultChecked;S.removeAttribute(m),S.defaultChecked=A,S.checked=T?A:!1}}else n.removeAttribute(_);else f||h.includes(m)&&(s||typeof E!="string")?n[m]=E:typeof E!="function"&&xe(n,m,E)}}}return l}function of(n){return n.__attributes??(n.__attributes={[af]:n.nodeName.includes("-"),[sf]:n.namespaceURI===vm})}var tu=new Map;function lf(n){var e=tu.get(n.nodeName);if(e)return e;tu.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=wh(i);for(var a in t)t[a].set&&e.push(a);i=od(i)}return e}const n0=()=>performance.now(),Ti={tick:n=>requestAnimationFrame(n),now:()=>n0(),tasks:new Set};function cf(){const n=Ti.now();Ti.tasks.forEach(e=>{e.c(n)||(Ti.tasks.delete(e),e.f())}),Ti.tasks.size!==0&&Ti.tick(cf)}function i0(n){let e;return Ti.tasks.size===0&&Ti.tick(cf),{promise:new Promise(t=>{Ti.tasks.add(e={c:n,f:t})}),abort(){Ti.tasks.delete(e)}}}function ws(n,e){Qh(()=>{n.dispatchEvent(new CustomEvent(e))})}function r0(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function nu(n){const e={},t=n.split(";");for(const i of t){const[r,a]=i.split(":");if(!r||a===void 0)break;const s=r0(r.trim());e[s]=a.trim()}return e}const a0=n=>n;function s0(n,e,t){var i=wr,r,a,s,o=null;i.a??(i.a={element:n,measure(){r=this.element.getBoundingClientRect()},apply(){if(s==null||s.abort(),a=this.element.getBoundingClientRect(),r.left!==a.left||r.right!==a.right||r.top!==a.top||r.bottom!==a.bottom){const l=e()(this.element,{from:r,to:a},t==null?void 0:t());s=go(this.element,l,void 0,1,()=>{s==null||s.abort(),s=void 0})}},fix(){if(!n.getAnimations().length){var{position:l,width:c,height:d}=getComputedStyle(n);if(l!=="absolute"&&l!=="fixed"){var h=n.style;o={position:h.position,width:h.width,height:h.height,transform:h.transform},h.position="absolute",h.width=c,h.height=d;var u=n.getBoundingClientRect();if(r.left!==u.left||r.top!==u.top){var p=`translate(${r.left-u.left}px, ${r.top-u.top}px)`;h.transform=h.transform?`${h.transform} ${p}`:p}}}},unfix(){if(o){var l=n.style;l.position=o.position,l.width=o.width,l.height=o.height,l.transform=o.transform}}}),i.a.element=n}function Jt(n,e,t,i){var r=(n&hm)!==0,a=(n&fm)!==0,s=r&&a,o=(n&pm)!==0,l=s?"both":r?"in":"out",c,d=e.inert,h=e.style.overflow,u,p;function v(){var _=At,E=yt;Vn(null),vi(null);try{return c??(c=t()(e,(i==null?void 0:i())??{},{direction:l}))}finally{Vn(_),vi(E)}}var g={is_global:o,in(){var _;if(e.inert=d,!r){p==null||p.abort(),(_=p==null?void 0:p.reset)==null||_.call(p);return}a||u==null||u.abort(),ws(e,"introstart"),u=go(e,v(),p,1,()=>{ws(e,"introend"),u==null||u.abort(),u=c=void 0,e.style.overflow=h})},out(_){if(!a){_==null||_(),c=void 0;return}e.inert=!0,ws(e,"outrostart"),p=go(e,v(),u,0,()=>{ws(e,"outroend"),_==null||_()})},stop:()=>{u==null||u.abort(),p==null||p.abort()}},m=yt;if((m.transitions??(m.transitions=[])).push(g),r&&vo){var f=o;if(!f){for(var y=m.parent;y&&(y.f&ua)!==0;)for(;(y=y.parent)&&(y.f&Co)===0;);f=!y||(y.f&Ah)!==0}f&&Fo(()=>{Ii(()=>g.in())})}}function go(n,e,t,i,r){var a=i===1;if(Kr(e)){var s,o=!1;return ts(()=>{if(!o){var m=e({direction:a?"in":"out"});s=go(n,m,t,i,r)}}),{abort:()=>{o=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r(),{abort:on,deactivate:on,reset:on,t:()=>i};const{delay:l=0,css:c,tick:d,easing:h=a0}=e;var u=[];if(a&&t===void 0&&(d&&d(0,1),c)){var p=nu(c(0,1));u.push(p,p)}var v=()=>1-i,g=n.animate(u,{duration:l});return g.onfinish=()=>{var m=(t==null?void 0:t.t())??1-i;t==null||t.abort();var f=i-m,y=e.duration*Math.abs(f),_=[];if(y>0){var E=!1;if(c)for(var S=Math.ceil(y/16.666666666666668),T=0;T<=S;T+=1){var A=m+f*h(T/S),D=nu(c(A,1-A));_.push(D),E||(E=D.overflow==="hidden")}E&&(n.style.overflow="hidden"),v=()=>{var M=g.currentTime;return m+f*h(M/y)},d&&i0(()=>{if(g.playState!=="running")return!1;var M=v();return d(M,1-M),!0})}g=n.animate(_,{duration:y,fill:"forwards"}),g.onfinish=()=>{v=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=on)},deactivate:()=>{r=on},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>v()}}function iu(n,e){return n===e||(n==null?void 0:n[Zi])===e}function Qr(n={},e,t,i){return Fo(()=>{var r,a;return Oo(()=>{r=a,a=[],Ii(()=>{n!==t(...a)&&(e(n,...a),r&&iu(t(...r),n)&&e(null,...r))})}),()=>{ts(()=>{a&&iu(t(...a),n)&&e(null,...a)})}}),n}function Gt(n=!1){const e=It,t=e.l.u;if(!t)return;let i=()=>mo(e.s);if(n){let r=0,a={};const s=Xa(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&r++,r});i=()=>I(s)}t.b.length&&Lm(()=>{ru(e,i),oo(t.b)}),Yl(()=>{const r=Ii(()=>t.m.map(Wp));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&Yl(()=>{ru(e,i),oo(t.a)})}function ru(n,e){if(n.l.s)for(const t of n.l.s)I(t);e()}let Ts=!1,Kl=Symbol();function dn(n,e,t){const i=t[e]??(t[e]={store:null,source:pt(void 0),unsubscribe:on});if(i.store!==n&&!(Kl in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=on;else{var r=!0;i.unsubscribe=pd(n,a=>{r?i.source.v=a:Oe(i.source,a)}),r=!1}return n&&Kl in t?p0(n):I(i.source)}function o0(n,e){return n.set(e),e}function bn(){const n={};function e(){ud(()=>{for(var t in n)n[t].unsubscribe();Eh(n,Kl,{enumerable:!1,value:!0})})}return[n,e]}function l0(n){var e=Ts;try{return Ts=!1,[n(),Ts]}finally{Ts=e}}const c0={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function df(n,e,t){return new Proxy({props:n,exclude:e},c0)}const d0={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Kr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];Kr(r)&&(r=r());const a=Ki(r,e);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Kr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=Ki(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===Zi||e===Ch)return!1;for(let t of n.props)if(Kr(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props){Kr(t)&&(t=t());for(const i in t)e.includes(i)||e.push(i)}return e}};function u0(...n){return new Proxy({props:n},d0)}function au(n){var e;return((e=n.ctx)==null?void 0:e.d)??!1}function _r(n,e,t,i){var T;var r=(t&om)!==0,a=!ha||(t&lm)!==0,s=(t&dm)!==0,o=(t&um)!==0,l=!1,c;s?[c,l]=l0(()=>n[e]):c=n[e];var d=Zi in n||Ch in n,h=s&&(((T=Ki(n,e))==null?void 0:T.set)??(d&&e in n&&(A=>n[e]=A)))||void 0,u=i,p=!0,v=!1,g=()=>(v=!0,p&&(p=!1,o?u=Ii(i):u=i),u);c===void 0&&i!==void 0&&(h&&a&&Qp(),c=g(),h&&h(c));var m;if(a)m=()=>{var A=n[e];return A===void 0?g():(p=!0,v=!1,A)};else{var f=(r?Xa:Et)(()=>n[e]);f.f|=Xp,m=()=>{var A=I(f);return A!==void 0&&(u=void 0),A===void 0?u:A}}if((t&cm)===0)return m;if(h){var y=n.$$legacy;return function(A,D){return arguments.length>0?((!a||!D||y||l)&&h(D?m():A),A):m()}}var _=!1,E=pt(c),S=Xa(()=>{var A=m(),D=I(E);return _?(_=!1,D):E.v=A});return s&&I(S),r||(S.equals=ld),function(A,D){if(arguments.length>0){const M=D?I(S):a&&s?xr(A):A;if(!S.equals(M)){if(_=!0,Oe(E,M),v&&u!==void 0&&(u=M),au(S))return A;Ii(()=>I(S))}return A}return au(S)?S.v:I(S)}}function ti(n){It===null&&Nh(),ha&&It.l!==null?h0(It).m.push(n):Yl(()=>{const e=Ii(n);if(typeof e=="function")return e})}function uf(n){It===null&&Nh(),ti(()=>()=>Ii(n))}function h0(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}function pd(n,e,t){if(n==null)return e(void 0),t&&t(void 0),on;const i=Ii(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const Ur=[];function f0(n,e){return{subscribe:as(n,e).subscribe}}function as(n,e=on){let t=null;const i=new Set;function r(o){if(Ih(n,o)&&(n=o,t)){const l=!Ur.length;for(const c of i)c[1](),Ur.push(c,n);if(l){for(let c=0;c<Ur.length;c+=2)Ur[c][0](Ur[c+1]);Ur.length=0}}}function a(o){r(o(n))}function s(o,l=on){const c=[o,l];return i.add(c),i.size===1&&(t=e(r,a)||on),o(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:a,subscribe:s}}function xa(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return f0(t,(s,o)=>{let l=!1;const c=[];let d=0,h=on;const u=()=>{if(d)return;h();const v=e(i?c[0]:c,s,o);a?s(v):h=typeof v=="function"?v:on},p=r.map((v,g)=>pd(v,m=>{c[g]=m,d&=~(1<<g),l&&u()},()=>{d|=1<<g}));return l=!0,u(),function(){oo(p),h(),l=!1}})}function p0(n){let e;return pd(n,t=>e=t)(),e}function m0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rl,su;function v0(){if(su)return rl;su=1;var n=function(y){return e(y)&&!t(y)};function e(f){return!!f&&typeof f=="object"}function t(f){var y=Object.prototype.toString.call(f);return y==="[object RegExp]"||y==="[object Date]"||a(f)}var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103;function a(f){return f.$$typeof===r}function s(f){return Array.isArray(f)?[]:{}}function o(f,y){return y.clone!==!1&&y.isMergeableObject(f)?g(s(f),f,y):f}function l(f,y,_){return f.concat(y).map(function(E){return o(E,_)})}function c(f,y){if(!y.customMerge)return g;var _=y.customMerge(f);return typeof _=="function"?_:g}function d(f){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(f).filter(function(y){return Object.propertyIsEnumerable.call(f,y)}):[]}function h(f){return Object.keys(f).concat(d(f))}function u(f,y){try{return y in f}catch{return!1}}function p(f,y){return u(f,y)&&!(Object.hasOwnProperty.call(f,y)&&Object.propertyIsEnumerable.call(f,y))}function v(f,y,_){var E={};return _.isMergeableObject(f)&&h(f).forEach(function(S){E[S]=o(f[S],_)}),h(y).forEach(function(S){p(f,S)||(u(f,S)&&_.isMergeableObject(y[S])?E[S]=c(S,_)(f[S],y[S],_):E[S]=o(y[S],_))}),E}function g(f,y,_){_=_||{},_.arrayMerge=_.arrayMerge||l,_.isMergeableObject=_.isMergeableObject||n,_.cloneUnlessOtherwiseSpecified=o;var E=Array.isArray(y),S=Array.isArray(f),T=E===S;return T?E?_.arrayMerge(f,y,_):v(f,y,_):o(y,_)}g.all=function(y,_){if(!Array.isArray(y))throw new Error("first argument should be an array");return y.reduce(function(E,S){return g(E,S,_)},{})};var m=g;return rl=m,rl}var g0=v0();const x0=m0(g0);var Zl=function(n,e){return Zl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Zl(n,e)};function Bo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Zl(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _t=function(){return _t=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_t.apply(this,arguments)};function _0(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function al(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}function sl(n,e){var t=e&&e.cache?e.cache:T0,i=e&&e.serializer?e.serializer:E0,r=e&&e.strategy?e.strategy:S0;return r(n,{cache:t,serializer:i})}function b0(n){return n==null||typeof n=="number"||typeof n=="boolean"}function y0(n,e,t,i){var r=b0(i)?i:t(i),a=e.get(r);return typeof a>"u"&&(a=n.call(this,i),e.set(r,a)),a}function hf(n,e,t){var i=Array.prototype.slice.call(arguments,3),r=t(i),a=e.get(r);return typeof a>"u"&&(a=n.apply(this,i),e.set(r,a)),a}function ff(n,e,t,i,r){return t.bind(e,n,i,r)}function S0(n,e){var t=n.length===1?y0:hf;return ff(n,this,t,e.cache.create(),e.serializer)}function M0(n,e){return ff(n,this,hf,e.cache.create(),e.serializer)}var E0=function(){return JSON.stringify(arguments)},w0=function(){function n(){this.cache=Object.create(null)}return n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t},n}(),T0={create:function(){return new w0}},ol={variadic:M0},ft;(function(n){n[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ft||(ft={}));var Bt;(function(n){n[n.literal=0]="literal",n[n.argument=1]="argument",n[n.number=2]="number",n[n.date=3]="date",n[n.time=4]="time",n[n.select=5]="select",n[n.plural=6]="plural",n[n.pound=7]="pound",n[n.tag=8]="tag"})(Bt||(Bt={}));var ea;(function(n){n[n.number=0]="number",n[n.dateTime=1]="dateTime"})(ea||(ea={}));function ou(n){return n.type===Bt.literal}function A0(n){return n.type===Bt.argument}function pf(n){return n.type===Bt.number}function mf(n){return n.type===Bt.date}function vf(n){return n.type===Bt.time}function gf(n){return n.type===Bt.select}function xf(n){return n.type===Bt.plural}function R0(n){return n.type===Bt.pound}function _f(n){return n.type===Bt.tag}function bf(n){return!!(n&&typeof n=="object"&&n.type===ea.number)}function Jl(n){return!!(n&&typeof n=="object"&&n.type===ea.dateTime)}var yf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,C0=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function P0(n){var e={};return n.replace(C0,function(t){var i=t.length;switch(t[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var I0=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function L0(n){if(n.length===0)throw new Error("Number skeleton cannot be empty");for(var e=n.split(I0).filter(function(u){return u.length>0}),t=[],i=0,r=e;i<r.length;i++){var a=r[i],s=a.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var o=s[0],l=s.slice(1),c=0,d=l;c<d.length;c++){var h=d[c];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function D0(n){return n.replace(/^(.*?)-/,"")}var lu=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Sf=/^(@+)?(\+|#+)?[rs]?$/g,N0=/(\*)(0+)|(#+)(0+)|(0+)/g,Mf=/^(0+)$/;function cu(n){var e={};return n[n.length-1]==="r"?e.roundingPriority="morePrecision":n[n.length-1]==="s"&&(e.roundingPriority="lessPrecision"),n.replace(Sf,function(t,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function Ef(n){switch(n){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function U0(n){var e;if(n[0]==="E"&&n[1]==="E"?(e={notation:"engineering"},n=n.slice(2)):n[0]==="E"&&(e={notation:"scientific"},n=n.slice(1)),e){var t=n.slice(0,2);if(t==="+!"?(e.signDisplay="always",n=n.slice(2)):t==="+?"&&(e.signDisplay="exceptZero",n=n.slice(2)),!Mf.test(n))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=n.length}return e}function du(n){var e={},t=Ef(n);return t||e}function F0(n){for(var e={},t=0,i=n;t<i.length;t++){var r=i[t];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=D0(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=_t(_t(_t({},e),{notation:"scientific"}),r.options.reduce(function(l,c){return _t(_t({},l),du(c))},{}));continue;case"engineering":e=_t(_t(_t({},e),{notation:"engineering"}),r.options.reduce(function(l,c){return _t(_t({},l),du(c))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(N0,function(l,c,d,h,u,p){if(c)e.minimumIntegerDigits=d.length;else{if(h&&u)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Mf.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(lu.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(lu,function(l,c,d,h,u,p){return d==="*"?e.minimumFractionDigits=c.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:u&&p?(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length+p.length):(e.minimumFractionDigits=c.length,e.maximumFractionDigits=c.length),""});var a=r.options[0];a==="w"?e=_t(_t({},e),{trailingZeroDisplay:"stripIfInteger"}):a&&(e=_t(_t({},e),cu(a)));continue}if(Sf.test(r.stem)){e=_t(_t({},e),cu(r.stem));continue}var s=Ef(r.stem);s&&(e=_t(_t({},e),s));var o=U0(r.stem);o&&(e=_t(_t({},e),o))}return e}var As={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function O0(n,e){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);if(r==="j"){for(var a=0;i+1<n.length&&n.charAt(i+1)===r;)a++,i++;var s=1+(a&1),o=a<2?1:3+(a>>1),l="a",c=B0(e);for((c=="H"||c=="k")&&(o=0);o-- >0;)t+=l;for(;s-- >0;)t=c+t}else r==="J"?t+="H":t+=r}return t}function B0(n){var e=n.hourCycle;if(e===void 0&&n.hourCycles&&n.hourCycles.length&&(e=n.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=n.language,i;t!=="root"&&(i=n.maximize().region);var r=As[i||""]||As[t||""]||As["".concat(t,"-001")]||As["001"];return r[0]}var ll,k0=new RegExp("^".concat(yf.source,"*")),z0=new RegExp("".concat(yf.source,"*$"));function vt(n,e){return{start:n,end:e}}var H0=!!String.prototype.startsWith&&"_a".startsWith("a",1),G0=!!String.fromCodePoint,V0=!!Object.fromEntries,W0=!!String.prototype.codePointAt,X0=!!String.prototype.trimStart,$0=!!String.prototype.trimEnd,q0=!!Number.isSafeInteger,Y0=q0?Number.isSafeInteger:function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n&&Math.abs(n)<=9007199254740991},Ql=!0;try{var j0=Tf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ql=((ll=j0.exec("a"))===null||ll===void 0?void 0:ll[0])==="a"}catch{Ql=!1}var uu=H0?function(e,t,i){return e.startsWith(t,i)}:function(e,t,i){return e.slice(i,i+t.length)===t},ec=G0?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i="",r=e.length,a=0,s;r>a;){if(s=e[a++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},hu=V0?Object.fromEntries:function(e){for(var t={},i=0,r=e;i<r.length;i++){var a=r[i],s=a[0],o=a[1];t[s]=o}return t},wf=W0?function(e,t){return e.codePointAt(t)}:function(e,t){var i=e.length;if(!(t<0||t>=i)){var r=e.charCodeAt(t),a;return r<55296||r>56319||t+1===i||(a=e.charCodeAt(t+1))<56320||a>57343?r:(r-55296<<10)+(a-56320)+65536}},K0=X0?function(e){return e.trimStart()}:function(e){return e.replace(k0,"")},Z0=$0?function(e){return e.trimEnd()}:function(e){return e.replace(z0,"")};function Tf(n,e){return new RegExp(n,e)}var tc;if(Ql){var fu=Tf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");tc=function(e,t){var i;fu.lastIndex=t;var r=fu.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else tc=function(e,t){for(var i=[];;){var r=wf(e,t);if(r===void 0||Af(r)||tv(r))break;i.push(r),t+=r>=65536?2:1}return ec.apply(void 0,i)};var J0=function(){function n(e,t){t===void 0&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return n.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},n.prototype.parseMessage=function(e,t,i){for(var r=[];!this.isEOF();){var a=this.char();if(a===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(a===125&&e>0)break;if(a===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),r.push({type:Bt.pound,location:vt(o,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(ft.UNMATCHED_CLOSING_TAG,vt(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&nc(this.peek()||0)){var s=this.parseTag(e,t);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,t);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},n.prototype.parseTag=function(e,t){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Bt.literal,value:"<".concat(r,"/>"),location:vt(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0);if(a.err)return a;var s=a.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!nc(this.char()))return this.error(ft.INVALID_TAG,vt(o,this.clonePosition()));var l=this.clonePosition(),c=this.parseTagName();return r!==c?this.error(ft.UNMATCHED_CLOSING_TAG,vt(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Bt.tag,value:r,children:s,location:vt(i,this.clonePosition())},err:null}:this.error(ft.INVALID_TAG,vt(o,this.clonePosition())))}else return this.error(ft.UNCLOSED_TAG,vt(i,this.clonePosition()))}else return this.error(ft.INVALID_TAG,vt(i,this.clonePosition()))},n.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&ev(this.char());)this.bump();return this.message.slice(e,this.offset())},n.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),r="";;){var a=this.tryParseQuote(t);if(a){r+=a;continue}var s=this.tryParseUnquoted(e,t);if(s){r+=s;continue}var o=this.tryParseLeftAngleBracket();if(o){r+=o;continue}break}var l=vt(i,this.clonePosition());return{val:{type:Bt.literal,value:r,location:l},err:null}},n.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Q0(this.peek()||0))?(this.bump(),"<"):null},n.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(i);this.bump()}return ec.apply(void 0,t)},n.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(t==="plural"||t==="selectordinal")||i===125&&e>0?null:(this.bump(),ec(i))},n.prototype.parseArgument=function(e,t){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ft.EXPECT_ARGUMENT_CLOSING_BRACE,vt(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ft.EMPTY_ARGUMENT,vt(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(ft.MALFORMED_ARGUMENT,vt(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ft.EXPECT_ARGUMENT_CLOSING_BRACE,vt(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Bt.argument,value:r,location:vt(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ft.EXPECT_ARGUMENT_CLOSING_BRACE,vt(i,this.clonePosition())):this.parseArgumentOptions(e,t,r,i);default:return this.error(ft.MALFORMED_ARGUMENT,vt(i,this.clonePosition()))}},n.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),i=tc(this.message,t),r=t+i.length;this.bumpTo(r);var a=this.clonePosition(),s=vt(e,a);return{value:i,location:s}},n.prototype.parseArgumentOptions=function(e,t,i,r){var a,s=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(ft.EXPECT_ARGUMENT_TYPE,vt(s,l));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var u=Z0(h.val);if(u.length===0)return this.error(ft.EXPECT_ARGUMENT_STYLE,vt(this.clonePosition(),this.clonePosition()));var p=vt(d,this.clonePosition());c={style:u,styleLocation:p}}var v=this.tryParseArgumentClose(r);if(v.err)return v;var g=vt(r,this.clonePosition());if(c&&uu(c==null?void 0:c.style,"::",0)){var m=K0(c.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(m,c.styleLocation);return h.err?h:{val:{type:Bt.number,value:i,location:g,style:h.val},err:null}}else{if(m.length===0)return this.error(ft.EXPECT_DATE_TIME_SKELETON,g);var f=m;this.locale&&(f=O0(m,this.locale));var u={type:ea.dateTime,pattern:f,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?P0(f):{}},y=o==="date"?Bt.date:Bt.time;return{val:{type:y,value:i,location:g,style:u},err:null}}}return{val:{type:o==="number"?Bt.number:o==="date"?Bt.date:Bt.time,value:i,location:g,style:(a=c==null?void 0:c.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var _=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ft.EXPECT_SELECT_ARGUMENT_OPTIONS,vt(_,_t({},_)));this.bumpSpace();var E=this.parseIdentifierIfPossible(),S=0;if(o!=="select"&&E.value==="offset"){if(!this.bumpIf(":"))return this.error(ft.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,vt(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ft.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ft.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),E=this.parseIdentifierIfPossible(),S=h.val}var T=this.tryParsePluralOrSelectOptions(e,o,t,E);if(T.err)return T;var v=this.tryParseArgumentClose(r);if(v.err)return v;var A=vt(r,this.clonePosition());return o==="select"?{val:{type:Bt.select,value:i,options:hu(T.val),location:A},err:null}:{val:{type:Bt.plural,value:i,options:hu(T.val),offset:S,pluralType:o==="plural"?"cardinal":"ordinal",location:A},err:null}}default:return this.error(ft.INVALID_ARGUMENT_TYPE,vt(s,l))}},n.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(ft.EXPECT_ARGUMENT_CLOSING_BRACE,vt(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},n.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ft.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,vt(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},n.prototype.parseNumberSkeletonFromString=function(e,t){var i=[];try{i=L0(e)}catch{return this.error(ft.INVALID_NUMBER_SKELETON,t)}return{val:{type:ea.number,tokens:i,location:t,parsedOptions:this.shouldParseSkeletons?F0(i):{}},err:null}},n.prototype.tryParsePluralOrSelectOptions=function(e,t,i,r){for(var a,s=!1,o=[],l=new Set,c=r.value,d=r.location;;){if(c.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var u=this.tryParseDecimalInteger(ft.EXPECT_PLURAL_ARGUMENT_SELECTOR,ft.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;d=vt(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}else break}if(l.has(c))return this.error(t==="select"?ft.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ft.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);c==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ft.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ft.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,vt(this.clonePosition(),this.clonePosition()));var v=this.parseMessage(e+1,t,i);if(v.err)return v;var g=this.tryParseArgumentClose(p);if(g.err)return g;o.push([c,{value:v.val,location:vt(p,this.clonePosition())}]),l.add(c),this.bumpSpace(),a=this.parseIdentifierIfPossible(),c=a.value,d=a.location}return o.length===0?this.error(t==="select"?ft.EXPECT_SELECT_ARGUMENT_SELECTOR:ft.EXPECT_PLURAL_ARGUMENT_SELECTOR,vt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(ft.MISSING_OTHER_CLAUSE,vt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},n.prototype.tryParseDecimalInteger=function(e,t){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var a=!1,s=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)a=!0,s=s*10+(o-48),this.bump();else break}var l=vt(r,this.clonePosition());return a?(s*=i,Y0(s)?{val:s,err:null}:this.error(t,l)):this.error(e,l)},n.prototype.offset=function(){return this.position.offset},n.prototype.isEOF=function(){return this.offset()===this.message.length},n.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},n.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=wf(this.message,e);if(t===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},n.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},n.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},n.prototype.bumpIf=function(e){if(uu(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},n.prototype.bumpUntil=function(e){var t=this.offset(),i=this.message.indexOf(e,t);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},n.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},n.prototype.bumpSpace=function(){for(;!this.isEOF()&&Af(this.char());)this.bump()},n.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),i=this.message.charCodeAt(t+(e>=65536?2:1));return i??null},n}();function nc(n){return n>=97&&n<=122||n>=65&&n<=90}function Q0(n){return nc(n)||n===47}function ev(n){return n===45||n===46||n>=48&&n<=57||n===95||n>=97&&n<=122||n>=65&&n<=90||n==183||n>=192&&n<=214||n>=216&&n<=246||n>=248&&n<=893||n>=895&&n<=8191||n>=8204&&n<=8205||n>=8255&&n<=8256||n>=8304&&n<=8591||n>=11264&&n<=12271||n>=12289&&n<=55295||n>=63744&&n<=64975||n>=65008&&n<=65533||n>=65536&&n<=983039}function Af(n){return n>=9&&n<=13||n===32||n===133||n>=8206&&n<=8207||n===8232||n===8233}function tv(n){return n>=33&&n<=35||n===36||n>=37&&n<=39||n===40||n===41||n===42||n===43||n===44||n===45||n>=46&&n<=47||n>=58&&n<=59||n>=60&&n<=62||n>=63&&n<=64||n===91||n===92||n===93||n===94||n===96||n===123||n===124||n===125||n===126||n===161||n>=162&&n<=165||n===166||n===167||n===169||n===171||n===172||n===174||n===176||n===177||n===182||n===187||n===191||n===215||n===247||n>=8208&&n<=8213||n>=8214&&n<=8215||n===8216||n===8217||n===8218||n>=8219&&n<=8220||n===8221||n===8222||n===8223||n>=8224&&n<=8231||n>=8240&&n<=8248||n===8249||n===8250||n>=8251&&n<=8254||n>=8257&&n<=8259||n===8260||n===8261||n===8262||n>=8263&&n<=8273||n===8274||n===8275||n>=8277&&n<=8286||n>=8592&&n<=8596||n>=8597&&n<=8601||n>=8602&&n<=8603||n>=8604&&n<=8607||n===8608||n>=8609&&n<=8610||n===8611||n>=8612&&n<=8613||n===8614||n>=8615&&n<=8621||n===8622||n>=8623&&n<=8653||n>=8654&&n<=8655||n>=8656&&n<=8657||n===8658||n===8659||n===8660||n>=8661&&n<=8691||n>=8692&&n<=8959||n>=8960&&n<=8967||n===8968||n===8969||n===8970||n===8971||n>=8972&&n<=8991||n>=8992&&n<=8993||n>=8994&&n<=9e3||n===9001||n===9002||n>=9003&&n<=9083||n===9084||n>=9085&&n<=9114||n>=9115&&n<=9139||n>=9140&&n<=9179||n>=9180&&n<=9185||n>=9186&&n<=9254||n>=9255&&n<=9279||n>=9280&&n<=9290||n>=9291&&n<=9311||n>=9472&&n<=9654||n===9655||n>=9656&&n<=9664||n===9665||n>=9666&&n<=9719||n>=9720&&n<=9727||n>=9728&&n<=9838||n===9839||n>=9840&&n<=10087||n===10088||n===10089||n===10090||n===10091||n===10092||n===10093||n===10094||n===10095||n===10096||n===10097||n===10098||n===10099||n===10100||n===10101||n>=10132&&n<=10175||n>=10176&&n<=10180||n===10181||n===10182||n>=10183&&n<=10213||n===10214||n===10215||n===10216||n===10217||n===10218||n===10219||n===10220||n===10221||n===10222||n===10223||n>=10224&&n<=10239||n>=10240&&n<=10495||n>=10496&&n<=10626||n===10627||n===10628||n===10629||n===10630||n===10631||n===10632||n===10633||n===10634||n===10635||n===10636||n===10637||n===10638||n===10639||n===10640||n===10641||n===10642||n===10643||n===10644||n===10645||n===10646||n===10647||n===10648||n>=10649&&n<=10711||n===10712||n===10713||n===10714||n===10715||n>=10716&&n<=10747||n===10748||n===10749||n>=10750&&n<=11007||n>=11008&&n<=11055||n>=11056&&n<=11076||n>=11077&&n<=11078||n>=11079&&n<=11084||n>=11085&&n<=11123||n>=11124&&n<=11125||n>=11126&&n<=11157||n===11158||n>=11159&&n<=11263||n>=11776&&n<=11777||n===11778||n===11779||n===11780||n===11781||n>=11782&&n<=11784||n===11785||n===11786||n===11787||n===11788||n===11789||n>=11790&&n<=11798||n===11799||n>=11800&&n<=11801||n===11802||n===11803||n===11804||n===11805||n>=11806&&n<=11807||n===11808||n===11809||n===11810||n===11811||n===11812||n===11813||n===11814||n===11815||n===11816||n===11817||n>=11818&&n<=11822||n===11823||n>=11824&&n<=11833||n>=11834&&n<=11835||n>=11836&&n<=11839||n===11840||n===11841||n===11842||n>=11843&&n<=11855||n>=11856&&n<=11857||n===11858||n>=11859&&n<=11903||n>=12289&&n<=12291||n===12296||n===12297||n===12298||n===12299||n===12300||n===12301||n===12302||n===12303||n===12304||n===12305||n>=12306&&n<=12307||n===12308||n===12309||n===12310||n===12311||n===12312||n===12313||n===12314||n===12315||n===12316||n===12317||n>=12318&&n<=12319||n===12320||n===12336||n===64830||n===64831||n>=65093&&n<=65094}function ic(n){n.forEach(function(e){if(delete e.location,gf(e)||xf(e))for(var t in e.options)delete e.options[t].location,ic(e.options[t].value);else pf(e)&&bf(e.style)||(mf(e)||vf(e))&&Jl(e.style)?delete e.style.location:_f(e)&&ic(e.children)})}function nv(n,e){e===void 0&&(e={}),e=_t({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var t=new J0(n,e).parse();if(t.err){var i=SyntaxError(ft[t.err.kind]);throw i.location=t.err.location,i.originalMessage=t.err.message,i}return e!=null&&e.captureLocation||ic(t.val),t.val}var ta;(function(n){n.MISSING_VALUE="MISSING_VALUE",n.INVALID_VALUE="INVALID_VALUE",n.MISSING_INTL_API="MISSING_INTL_API"})(ta||(ta={}));var ko=function(n){Bo(e,n);function e(t,i,r){var a=n.call(this,t)||this;return a.code=i,a.originalMessage=r,a}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),pu=function(n){Bo(e,n);function e(t,i,r,a){return n.call(this,'Invalid values for "'.concat(t,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),ta.INVALID_VALUE,a)||this}return e}(ko),iv=function(n){Bo(e,n);function e(t,i,r){return n.call(this,'Value for "'.concat(t,'" must be of type ').concat(i),ta.INVALID_VALUE,r)||this}return e}(ko),rv=function(n){Bo(e,n);function e(t,i){return n.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(i,'"'),ta.MISSING_VALUE,i)||this}return e}(ko),fn;(function(n){n[n.literal=0]="literal",n[n.object=1]="object"})(fn||(fn={}));function av(n){return n.length<2?n:n.reduce(function(e,t){var i=e[e.length-1];return!i||i.type!==fn.literal||t.type!==fn.literal?e.push(t):i.value+=t.value,e},[])}function sv(n){return typeof n=="function"}function Ks(n,e,t,i,r,a,s){if(n.length===1&&ou(n[0]))return[{type:fn.literal,value:n[0].value}];for(var o=[],l=0,c=n;l<c.length;l++){var d=c[l];if(ou(d)){o.push({type:fn.literal,value:d.value});continue}if(R0(d)){typeof a=="number"&&o.push({type:fn.literal,value:t.getNumberFormat(e).format(a)});continue}var h=d.value;if(!(r&&h in r))throw new rv(h,s);var u=r[h];if(A0(d)){(!u||typeof u=="string"||typeof u=="number")&&(u=typeof u=="string"||typeof u=="number"?String(u):""),o.push({type:typeof u=="string"?fn.literal:fn.object,value:u});continue}if(mf(d)){var p=typeof d.style=="string"?i.date[d.style]:Jl(d.style)?d.style.parsedOptions:void 0;o.push({type:fn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(vf(d)){var p=typeof d.style=="string"?i.time[d.style]:Jl(d.style)?d.style.parsedOptions:i.time.medium;o.push({type:fn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(pf(d)){var p=typeof d.style=="string"?i.number[d.style]:bf(d.style)?d.style.parsedOptions:void 0;p&&p.scale&&(u=u*(p.scale||1)),o.push({type:fn.literal,value:t.getNumberFormat(e,p).format(u)});continue}if(_f(d)){var v=d.children,g=d.value,m=r[g];if(!sv(m))throw new iv(g,"function",s);var f=Ks(v,e,t,i,r,a),y=m(f.map(function(S){return S.value}));Array.isArray(y)||(y=[y]),o.push.apply(o,y.map(function(S){return{type:typeof S=="string"?fn.literal:fn.object,value:S}}))}if(gf(d)){var _=d.options[u]||d.options.other;if(!_)throw new pu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Ks(_.value,e,t,i,r));continue}if(xf(d)){var _=d.options["=".concat(u)];if(!_){if(!Intl.PluralRules)throw new ko(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ta.MISSING_INTL_API,s);var E=t.getPluralRules(e,{type:d.pluralType}).select(u-(d.offset||0));_=d.options[E]||d.options.other}if(!_)throw new pu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Ks(_.value,e,t,i,r,u-(d.offset||0)));continue}}return av(o)}function ov(n,e){return e?_t(_t(_t({},n||{}),e||{}),Object.keys(n).reduce(function(t,i){return t[i]=_t(_t({},n[i]),e[i]||{}),t},{})):n}function lv(n,e){return e?Object.keys(n).reduce(function(t,i){return t[i]=ov(n[i],e[i]),t},_t({},n)):n}function cl(n){return{create:function(){return{get:function(e){return n[e]},set:function(e,t){n[e]=t}}}}}function cv(n){return n===void 0&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:sl(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,al([void 0],t,!1)))},{cache:cl(n.number),strategy:ol.variadic}),getDateTimeFormat:sl(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,al([void 0],t,!1)))},{cache:cl(n.dateTime),strategy:ol.variadic}),getPluralRules:sl(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,al([void 0],t,!1)))},{cache:cl(n.pluralRules),strategy:ol.variadic})}}var Rf=function(){function n(e,t,i,r){t===void 0&&(t=n.defaultLocale);var a=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var c=a.formatToParts(l);if(c.length===1)return c[0].value;var d=c.reduce(function(h,u){return!h.length||u.type!==fn.literal||typeof h[h.length-1]!="string"?h.push(u.value):h[h.length-1]+=u.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ks(a.ast,a.locales,a.formatters,a.formats,l,void 0,a.message)},this.resolvedOptions=function(){var l;return{locale:((l=a.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},this.locales=t,this.resolvedLocale=n.resolveLocale(t),typeof e=="string"){if(this.message=e,!n.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var o=_0(s,["formatters"]);this.ast=n.__parse(e,_t(_t({},o),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=lv(n.formats,i),this.formatters=r&&r.formatters||cv(this.formatterCache)}return Object.defineProperty(n,"defaultLocale",{get:function(){return n.memoizedDefaultLocale||(n.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),n.memoizedDefaultLocale},enumerable:!1,configurable:!0}),n.memoizedDefaultLocale=null,n.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},n.__parse=nv,n.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},n}();function dv(n,e){if(e==null)return;if(e in n)return n[e];const t=e.split(".");let i=n;for(let r=0;r<t.length;r++)if(typeof i=="object"){if(r>0){const a=t.slice(r,t.length).join(".");if(a in i){i=i[a];break}}i=i[t[r]]}else i=void 0;return i}const Yi={},uv=(n,e,t)=>t&&(e in Yi||(Yi[e]={}),n in Yi[e]||(Yi[e][n]=t),t),Cf=(n,e)=>{if(e==null)return;if(e in Yi&&n in Yi[e])return Yi[e][n];const t=os(e);for(let i=0;i<t.length;i++){const r=t[i],a=fv(r,n);if(a)return uv(n,e,a)}};let md;const ss=as({});function hv(n){return md[n]||null}function Pf(n){return n in md}function fv(n,e){if(!Pf(n))return null;const t=hv(n);return dv(t,e)}function pv(n){if(n==null)return;const e=os(n);for(let t=0;t<e.length;t++){const i=e[t];if(Pf(i))return i}}function Ni(n,...e){delete Yi[n],ss.update(t=>(t[n]=x0.all([t[n]||{},...e]),t))}xa([ss],([n])=>Object.keys(n));ss.subscribe(n=>md=n);const Zs={};function mv(n,e){Zs[n].delete(e),Zs[n].size===0&&delete Zs[n]}function If(n){return Zs[n]}function vv(n){return os(n).map(e=>{const t=If(e);return[e,t?[...t]:[]]}).filter(([,e])=>e.length>0)}function xo(n){return n==null?!1:os(n).some(e=>{var t;return(t=If(e))==null?void 0:t.size})}function gv(n,e){return Promise.all(e.map(i=>(mv(n,i),i().then(r=>r.default||r)))).then(i=>Ni(n,...i))}const Ia={};function Lf(n){if(!xo(n))return n in Ia?Ia[n]:Promise.resolve();const e=vv(n);return Ia[n]=Promise.all(e.map(([t,i])=>gv(t,i))).then(()=>{if(xo(n))return Lf(n);delete Ia[n]}),Ia[n]}var mu=Object.getOwnPropertySymbols,xv=Object.prototype.hasOwnProperty,_v=Object.prototype.propertyIsEnumerable,bv=(n,e)=>{var t={};for(var i in n)xv.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&mu)for(var i of mu(n))e.indexOf(i)<0&&_v.call(n,i)&&(t[i]=n[i]);return t};const yv={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};function Sv({locale:n,id:e}){console.warn(`[svelte-i18n] The message "${e}" was not found in "${os(n).join('", "')}".${xo(rr())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)}const Mv={fallbackLocale:null,loadingDelay:200,formats:yv,warnOnMissingMessages:!0,handleMissingMessage:void 0,ignoreTag:!0},za=Mv;function na(){return za}function Ev(n){const e=n,{formats:t}=e,i=bv(e,["formats"]);let r=n.fallbackLocale;if(n.initialLocale)try{Rf.resolveLocale(n.initialLocale)&&(r=n.initialLocale)}catch{console.warn(`[svelte-i18n] The initial locale "${n.initialLocale}" is not a valid locale.`)}return i.warnOnMissingMessages&&(delete i.warnOnMissingMessages,i.handleMissingMessage==null?i.handleMissingMessage=Sv:console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),Object.assign(za,i,{initialLocale:r}),t&&("number"in t&&Object.assign(za.formats.number,t.number),"date"in t&&Object.assign(za.formats.date,t.date),"time"in t&&Object.assign(za.formats.time,t.time)),tr.set(r)}const dl=as(!1);var wv=Object.defineProperty,Tv=Object.defineProperties,Av=Object.getOwnPropertyDescriptors,vu=Object.getOwnPropertySymbols,Rv=Object.prototype.hasOwnProperty,Cv=Object.prototype.propertyIsEnumerable,gu=(n,e,t)=>e in n?wv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pv=(n,e)=>{for(var t in e||(e={}))Rv.call(e,t)&&gu(n,t,e[t]);if(vu)for(var t of vu(e))Cv.call(e,t)&&gu(n,t,e[t]);return n},Iv=(n,e)=>Tv(n,Av(e));let rc;const _o=as(null);function xu(n){return n.split("-").map((e,t,i)=>i.slice(0,t+1).join("-")).reverse()}function os(n,e=na().fallbackLocale){const t=xu(n);return e?[...new Set([...t,...xu(e)])]:t}function rr(){return rc??void 0}_o.subscribe(n=>{rc=n??void 0,typeof window<"u"&&n!=null&&document.documentElement.setAttribute("lang",n)});const Lv=n=>{if(n&&pv(n)&&xo(n)){const{loadingDelay:e}=na();let t;return typeof window<"u"&&rr()!=null&&e?t=window.setTimeout(()=>dl.set(!0),e):dl.set(!0),Lf(n).then(()=>{_o.set(n)}).finally(()=>{clearTimeout(t),dl.set(!1)})}return _o.set(n)},tr=Iv(Pv({},_o),{set:Lv}),zo=n=>{const e=Object.create(null);return i=>{const r=JSON.stringify(i);return r in e?e[r]:e[r]=n(i)}};var Dv=Object.defineProperty,bo=Object.getOwnPropertySymbols,Df=Object.prototype.hasOwnProperty,Nf=Object.prototype.propertyIsEnumerable,_u=(n,e,t)=>e in n?Dv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,vd=(n,e)=>{for(var t in e||(e={}))Df.call(e,t)&&_u(n,t,e[t]);if(bo)for(var t of bo(e))Nf.call(e,t)&&_u(n,t,e[t]);return n},_a=(n,e)=>{var t={};for(var i in n)Df.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&bo)for(var i of bo(n))e.indexOf(i)<0&&Nf.call(n,i)&&(t[i]=n[i]);return t};const Ka=(n,e)=>{const{formats:t}=na();if(n in t&&e in t[n])return t[n][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${n} format.`)},Nv=zo(n=>{var e=n,{locale:t,format:i}=e,r=_a(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return i&&(r=Ka("number",i)),new Intl.NumberFormat(t,r)}),Uv=zo(n=>{var e=n,{locale:t,format:i}=e,r=_a(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return i?r=Ka("date",i):Object.keys(r).length===0&&(r=Ka("date","short")),new Intl.DateTimeFormat(t,r)}),Fv=zo(n=>{var e=n,{locale:t,format:i}=e,r=_a(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return i?r=Ka("time",i):Object.keys(r).length===0&&(r=Ka("time","short")),new Intl.DateTimeFormat(t,r)}),Ov=(n={})=>{var e=n,{locale:t=rr()}=e,i=_a(e,["locale"]);return Nv(vd({locale:t},i))},Bv=(n={})=>{var e=n,{locale:t=rr()}=e,i=_a(e,["locale"]);return Uv(vd({locale:t},i))},kv=(n={})=>{var e=n,{locale:t=rr()}=e,i=_a(e,["locale"]);return Fv(vd({locale:t},i))},zv=zo((n,e=rr())=>new Rf(n,e,na().formats,{ignoreTag:na().ignoreTag})),Hv=(n,e={})=>{var t,i,r,a;let s=e;typeof n=="object"&&(s=n,n=s.id);const{values:o,locale:l=rr(),default:c}=s;if(l==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let d=Cf(n,l);if(!d)d=(a=(r=(i=(t=na()).handleMissingMessage)==null?void 0:i.call(t,{locale:l,id:n,defaultValue:c}))!=null?r:c)!=null?a:n;else if(typeof d!="string")return console.warn(`[svelte-i18n] Message with id "${n}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),d;if(!o)return d;let h=d;try{h=zv(d,l).format(o)}catch(u){u instanceof Error&&console.warn(`[svelte-i18n] Message "${n}" has syntax error:`,u.message)}return h},Gv=(n,e)=>kv(e).format(n),Vv=(n,e)=>Bv(e).format(n),Wv=(n,e)=>Ov(e).format(n),Xv=(n,e=rr())=>Cf(n,e),Xn=xa([tr,ss],()=>Hv);xa([tr],()=>Gv);xa([tr],()=>Vv);xa([tr],()=>Wv);xa([tr,ss],()=>Xv);const $v={common:{change_language:"Change language to {name}",loading:"LOADING..."},nav:{reports:"[ REPORTS ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"OPERATIONAL REPORTS",nav_week:"WEEK",generated_label:"GENERATED",page_title:"Trading Desk",methodology_label:"METHODOLOGY",indicators_label:"INDICATORS",font_decrease:"A−",font_increase:"A+",warning_title:"Data validity:",warning_text:"Revalidate all prices, moving averages, and oscillators at the weekly open before arming any order. This report is a risk-defined decision framework — not a forecast or guarantee of results. Only trade on a <strong>closed bar</strong> of the relevant screen.",priority_title:"Monitoring Queue · by Priority",scoreboard_title:"Bias Scoreboard · Triple Screen",role_primary:"PRIMARY",role_macro:"MACRO",impulse_red:"● RED",impulse_green:"● GREEN",impulse_blue_red:"◑ BLUE → RED",zone_neutral_up:"Neutral rising",zone_rising_overbought:"Rising → overbought",zone_overbought:"Overbought",zone_low_k_below_d:"Low, K < D",zone_rising:"Rising",zone_oversold:"Oversold",btc_note:"Pending impulse confirmation. Conditional short.",xau_note:"Short maturing. Stochastic at resistance.",sp_note:"Await pullback to 7,369. No buying overbought.",bovespa_note:"Cleanest trend. Both screens aligned.",usdbrl_note:"Sell bounce near 5.11 (weekly EMA underside).",brent_note:"Do not sell oversold. Await bounce to 101.",playbook_title:"BTC/USD — Primary Playbook",tide_label:"TIDE (WEEKLY)",wave_label:"WAVE (DAILY)",tide_text:'Price <span class="text-white">75,708.00</span> below MME(17) <span class="text-rose-400">76,533.35</span>. MACD histogram positive but decelerating — new weekly bar lower than previous (lower high). Impulse <span class="text-amber-400">blue in transition</span>; turns red when histogram confirms weekly close.',wave_text:'Price below descending MME. Stochastic %K <span class="text-[#4CC9F0]">42.08</span> / %D <span class="text-[#4CC9F0]">28.63</span>, rising (upper band 89.03). Counter-trend bounce in progress — <strong class="text-white">not yet overbought</strong>. Conviction scales to FULL after red weekly close.',trigger_label:"TRIGGER",action_label:"ACTION",stop_label:"STOP",sc_a_name:"SELL THE BOUNCE",sc_a_condition:"Price retraces to zone 76,533–76,606 + 1h stochastic overbought and turning + breaks prior 15m low",sc_a_target_label:"SUPPORT",sc_b_name:"CONTINUATION SELL",sc_b_condition:"Close below 73,936 + rejected retest from below + breaks prior 15m low",sc_b_target_label:"PARTIAL → RUNNER",sc_c_label:"NO TRADE",sc_c_text:'Condition: tide turns non-bearish <strong>or</strong> reclaim/close above 76,533. Action: <span class="text-[#00F0FF]/60">CancelSetups</span> — pull pending orders, remain ARMED with no entries.',sc_a_invalidation:"Close above 76,533",sc_b_invalidation:"Recovers and closes back above 73,936",macro_implication_title:"MACRO IMPLICATION",macro_implication_text:'The bearish BTC bias lacks broad macro risk-off support (strong S&P is the counterweight). Treat the short as a <strong class="text-white">correction within trend</strong>, not the start of a macro bear: modest targets, heightened vigilance on invalidation by reclaim.',risk_title:"Risk Management · Non-Negotiable Rules",rule_2pct_id:"2%",rule_2pct_title:"THE 2% RULE",rule_2pct_body:"Never risk more than 2% of account per trade. Define the stop first; size the position from the stop.",rule_6pct_id:"6%",rule_6pct_title:"THE 6% RULE",rule_6pct_body:"If monthly losses reach 6% of account, close all operations until month-end.",rule_conv_id:"CONV",rule_conv_title:"CONVICTION & SIZE",rule_conv_body:"HALF = half size (unconfirmed weekly impulse). FULL = full size (confirmed weekly impulse).",rule_hier_id:"HIER",rule_hier_title:"SCREEN HIERARCHY",rule_hier_body:"Never trade against the tide. Long only where tide is bullish. Stop defined at entry — non-negotiable.",legend_armed:"active permission; awaiting trigger",legend_standby:"no permission; do not trade",legend_in_position:"open position (runtime)",legend_full:"confirmed weekly impulse · full size",legend_half:"week in transition · half size",zone_label:"ZONE"},hero:{status:"SYSTEMS OPERATIONAL",title:"NEXUS QUANT",subtitle:"Proprietary Quantitative Research & Automated Decision Systems.",cta:"[ VIEW PHILOSOPHY ]",cta_ark:"[ ARK STREAMS PRESENTATION ]"},philosophy:{title:">_ MISSION DIRECTIVE",hero_text:'We approach financial markets as <span class="text-white font-medium">complex physical systems</span>. By bridging <span class="text-white font-medium">stochastic research</span> with <span class="text-white font-medium">deterministic software engineering</span>, we build decision engines that thrive in chaos.',p1:{title:"Precision",text:"We prioritize data integrity and correctness over raw speculative speed."},p2:{title:"Automation",text:"Removing human cognitive bias from critical execution workflows."},p3:{title:"Resilience",text:"Systems designed to maintain 99.9% uptime in adversarial environments."}},stack:{title:">_ ARCHITECTURE",card1:{title:"QUANTITATIVE ANALYSIS",text:"Rapid hypothesis testing, statistical modeling, and backtesting using the Python data science ecosystem."},card2:{title:"PRODUCTION RUNTIME",text:"Our proprietary event-driven intelligence platform. Built in Go and powered by NATS JetStream to ensure ultra-low latency, native persistence, and seamless scalability."},card3:{title:"IMMUTABLE LEDGER",text:"Full traceability of every decision state. We utilize time-travel database capabilities for rigorous post-trade auditing."}},evolution:{title:">_ SYSTEM EVOLUTION",phase1:{period:"2023 - 2025",name:"Phase 1: Functional Foundation",tech:"Clojure / JVM / Polylith",description:"Focus on mathematical correctness, immutable data structures, and REPL-driven development. Proved the viability of our Bill Williams-based strategy logic."},phase2:{period:"2026 - Present",name:"Phase 2: Hybrid Ecosystem",tech:"Go / NATS JetStream / Wails",description:"Expansion to a high-concurrency, low-latency hybrid architecture. Integrating Go for production edge nodes while maintaining Clojure for strategy modeling, unified by a persistent NATS event bus."}},metrics:{title:":: SYSTEM STATUS ::",header:{component:"COMPONENT",status:"STATUS",latency:"LATENCY",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONNECTED",running:"RUNNING",guarded:"GUARDED",synced:"SYNCED"},ago:"{n}s ago"},footer:{rights:"© {year} Nexus Quant. All rights reserved.",location:"Rio de Janeiro, BR // Global Operations"},presentation:{title:"Tech Interview",subtitle:"Quantitative Trading Engine in Clojure",section1:{title:"Project Overview",text:"Ark Engine is a quantitative trading engine built in Clojure, following a Polylith architecture for modularity and testability. It operates in the Crypto/Binance domain using a Functional, Event-Driven, and Asynchronous paradigm."},section2:{title:"Architecture Deep Dive",subtitle:"Polylith: Bases, Components, Projects",intro:"The system is structured into Bases (cli-runner), Components (orchestrator, strategy-engine, connector, temporal-db), and Projects. This decoupling ensures the strategy engine is pure logic, knowing nothing about Binance, enabling REPL-Driven Development.",part1:{title:"Orchestrator (The Brain)",intro:"Coordinates data, strategy, and execution. It manages the main application loop using core.async and recursion."},part2:{title:"Strategy Engine (The Logic)",intro:"Pure functions taking immutable data (Candles) and returning results (Signals) with no side effects. Extremely testable."},part3:{title:"Connector (The Hands)",intro:"Handles side effects: talking to exchanges (Binance) to execute orders based on the strategy's decisions."}},section3:{title:"Code Walkthrough",role:"Mental Model",subtitle:"Tick -> Fetch -> Compute -> Decide -> Act -> Recur",subtitle2:"A non-blocking event loop that wakes up on candle close, processes data purely, executes side effects, and recurs with new state.",intro:"1. Tick: Time boundaries trigger wake-up. 2. Fetch: Pull history from Temporal DB. 3. Compute: Run indicators (TA4J) via pure functions.",intro2:"4. Decide: Logic determines buy/sell. 5. Act: Connector executes order. 6. Recur: New position state passed to next loop iteration.",step1:{title:"Orchestrator",what:"The coordinator. Manages the lifecycle and state recursion.",parallel:"Like a Conductor ensuring all instruments play in time."},step2:{title:"Strategy Engine",what:"The pure logic. Calculates indicators and signals.",magic:"Referential Transparency: Same input always equals same output.",parallel:"Like a Calculator: 2+2 is always 4, regardless of the weather."},step3:{title:"Connector",what:"The side-effect handler. Executes trades.",parallel:"The hands that actually move the chips on the table."},bitemporality:{title:"State Management (Recursion)",intro:"We avoid global atoms for the main loop state.",trading:"State exists only on the stack via (loop [state init] ... (recur new-state)).",healthcare:"This ensures the state lifecycle is tightly bound to the process.",conclusion:"Data consistency is maintained through immutability. Each iteration creates a fresh state map derived from the previous one, without mutation."},demo:{instruction:'Click "INJECT VOLATILITY" to see the engine handle load:',step1:"The Orchestrator maintains the loop.",step2:"The Strategy computes signals purely.",step3:"The Connector executes safely.",conclusion:"This architecture allows us to test the Strategy in isolation using just data maps, without mocking complex exchange APIs."}},section4:{title:"Libraries & Talking Points",subtitle:"Key Tech Stack & Interview Answers",text:"Core technologies and standard responses for technical questions.",headers:["KEY LIBRARY / CONCEPT","ROLE / APPLICATION"],rows:{source:{fintech:{title:"core.async",detail:"(Concurrency)"},healthcare:{title:"CSP (Communicating Sequential Processes)",detail:"(Non-blocking management of the main loop)"}},norm:{fintech:{title:"Tick",detail:"(Time)"},healthcare:{title:"Better Time Intepretation",detail:"(Superior to Java 8 Date/Time for intervals)"}},audit:{fintech:{title:"Carmine",detail:"(Redis)"},healthcare:{title:"Hot State / Pub-Sub",detail:"(Telemetry and fast persistence)"}},decision:{fintech:{title:"Polylith",detail:"(Architecture)"},healthcare:{title:"Monorepo Tooling",detail:"(Enforces strict component isolation)"}}},closing:"Why Clojure? Data processing fits naturally with immutable maps. REPL allows interactive debugging against real market data."},section5:{title:"READY FOR QUESTIONS",text:"Ready to discuss Architecture, Concurrency, or Strategy Implementation details."}},arkStreams:{title:"Ark Streams",subtitle:"Real-time trading intelligence. Every event durable. Every decision replayable.",section1:{title:"The Problem",text:"Most trading tools are stateless: they poll an API, compute an indicator, and forget. Ark Streams publishes every candle, every indicator update, every signal as a durable NATS event — making the entire pipeline replayable from day one.",cap1:"Watch live strategy decisions form in real time, timeframe by timeframe",cap2:"Replay historical market sessions through the same engine that runs live",cap3:"Run grid searches over strategy parameters against stored data",cap4:"Observe macro context (WTI, DXY, SP500, IBOV) alongside crypto price action"},section2:{title:"NATS JetStream — The Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Every component is fully decoupled. Collectors publish raw candles. The FractalEngine enriches them with indicators. Strategies consume the enriched stream and emit signals. Nothing talks directly — everything flows through NATS subjects.",part1:{title:"Data Ingestion",intro:"Bitget WebSocket (OHLCV, liquidations, private positions), Binance (funding rate, OI), Yahoo Finance REST — polling WTI, BRENT, SP500, DXY, IBOV, USDBRL every hour."},part2:{title:"Processing Pipeline",intro:"FractalEngine runs one instance per symbol × timeframe. Publishes AnalyzedEvent to market.analyzed.* and writes the latest snapshot to KV: MARKET_STATE."},part3:{title:"Persistent Streams",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (last 50 transitions)."}},section3:{title:"FractalEngine — The Analytical Core",role:"Bill Williams Indicator Suite",subtitle:"Raw Candle → Enriched AnalyzedEvent → market.analyzed.*",subtitle2:"One engine instance per symbol × timeframe. Warms up from REST history before subscribing to the live stream — indicators are fully converged before any strategy sees data.",step1:{title:"Collectors",what:"Ingest raw OHLCV from Bitget, Binance, and Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Compute the full Bill Williams suite. Publish AnalyzedEvent to NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Subscribe to market.analyzed.*. Emit TradeSignal to signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — The Strategy",subtitle:"All 6 entry filters must pass simultaneously before a signal is emitted",headers:["FILTER","LONG","SHORT"],rows:{runtime:{fintech:{title:"Alligator Transition",detail:"Bias just turned Bullish"},healthcare:{title:"Alligator Transition",detail:"Bias just turned Bearish"}},messaging:{fintech:{title:"Alligator Spread",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Alligator Spread",detail:"Same"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"BB width > 50th pct (300 bars)"},healthcare:{title:"BB Squeeze Gate",detail:"Same"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, accelerating (green bar)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, accelerating (red bar)"}}},closing:"Exit: 2×ATR(14) TP/SL · Alligator trend reversal · Teeth touch (2-bar debounce) · PaperBroker with pyramiding, MFE/MAE, FixedFractionalRM"},section5:{title:"GROWTH PATH",text:"Symbol-agnostic by design — every new collector auto-feeds all downstream consumers via wildcard NATS subscriptions."},footer:{memory:"Events: Durable",latency:"Latency: Ultra-Low",stack:"Stack: Go + NATS"},conclusion:`Every candle matters.
Every signal survives.
Built to scale.`}},qv={common:{change_language:"Alterar idioma para {name}",loading:"CARREGANDO..."},nav:{reports:"[ RELATÓRIOS ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"RELATÓRIOS OPERACIONAIS",nav_week:"SEMANA",generated_label:"GERADO",page_title:"Mesa de Operações",methodology_label:"METODOLOGIA",indicators_label:"INDICADORES",font_decrease:"A−",font_increase:"A+",warning_title:"Validade dos dados:",warning_text:"Revalidar todos os preços, médias e osciladores na abertura semanal antes de armar qualquer ordem. Este relatório é um framework de decisão com risco definido — não previsão nem garantia de resultado. Somente operar em <strong>barra fechada</strong> do screen relevante.",priority_title:"Fila de Monitoramento · por Prioridade",scoreboard_title:"Scoreboard de Viés · Triple Screen",role_primary:"PRIMÁRIO",role_macro:"MACRO",impulse_red:"● VERMELHO",impulse_green:"● VERDE",impulse_blue_red:"◑ AZUL → VERMELHO",zone_neutral_up:"Neutro subindo",zone_rising_overbought:"Subindo → sobrecompra",zone_overbought:"Sobrecomprado",zone_low_k_below_d:"Baixo, K < D",zone_rising:"Subindo",zone_oversold:"Sobrevendido",btc_note:"Impulso pendente confirmação. Short condicional.",xau_note:"Short amadurecendo. Estocástico na resistência.",sp_note:"Aguardar pullback a 7.369. Não comprar sobrecompra.",bovespa_note:"Tendência mais limpa. Duas telas alinhadas.",usdbrl_note:"Vender repique perto de 5,11 (EMA semanal underside).",brent_note:"Não vender sobrevendido. Aguardar repique a 101.",playbook_title:"BTC/USD — Playbook Primário",tide_label:"MARÉ (SEMANAL)",wave_label:"ONDA (DIÁRIO)",tide_text:'Preço <span class="text-white">75.708,00</span> abaixo da MME(17) <span class="text-rose-400">76.533,35</span>. Histograma MACD positivo porém desacelerando — barra semanal nova menor que a anterior (topo mais baixo). Impulso <span class="text-amber-400">azul em transição</span>; vira vermelho quando histograma confirmar fechamento semanal.',wave_text:'Preço abaixo da MME descendente. Estocástico %K <span class="text-[#4CC9F0]">42,08</span> / %D <span class="text-[#4CC9F0]">28,63</span>, subindo (banda sup. 89,03). Repique contra-tendência em curso — <strong class="text-white">ainda não sobrecomprado</strong>. Convicção escala para FULL após fechamento semanal vermelho.',trigger_label:"GATILHO",action_label:"AÇÃO",stop_label:"STOP",sc_a_name:"VENDA NO REPIQUE",sc_a_condition:"Preço repica à zona 76.533–76.606 + estocástico 1h sobrecomprado e virando + rompe mínima 15m",sc_a_target_label:"SUPORTE",sc_b_name:"VENDA NA CONTINUAÇÃO",sc_b_condition:"Fechamento abaixo de 73.936 + reteste por baixo rejeitado + rompe mínima 15m",sc_b_target_label:"PARCIAL → RUNNER",sc_c_label:"SEM TRADE",sc_c_text:'Condição: maré deixa de ser baixista <strong>ou</strong> reclaim/fechamento acima de 76.533. Ação: <span class="text-[#00F0FF]/60">CancelSetups</span> — puxar ordens pendentes, seguir ARMED sem entradas.',sc_a_invalidation:"Fechamento acima de 76.533",sc_b_invalidation:"Recompõe e fecha de volta acima de 73.936",macro_implication_title:"IMPLICAÇÃO MACRO",macro_implication_text:'O viés vendedor do BTC não tem risk-off macro amplo por trás (S&P forte é o contrapeso). Tratar o short como <strong class="text-white">correção dentro de tendência</strong>, não início de bear macro: alvos mais modestos, vigilância redobrada na invalidação por reclaim.',risk_title:"Gestão de Risco · Regras Não-Negociáveis",rule_2pct_id:"2%",rule_2pct_title:"REGRA DOS 2%",rule_2pct_body:"Nunca arriscar mais que 2% da conta por trade. Definir o stop primeiro; dimensionar a posição pelo stop.",rule_6pct_id:"6%",rule_6pct_title:"REGRA DOS 6%",rule_6pct_body:"Se as perdas do mês atingirem 6% da conta, encerrar o operacional até virar o mês.",rule_conv_id:"CONV",rule_conv_title:"CONVICÇÃO & TAMANHO",rule_conv_body:"HALF = meia mão (impulso não confirmado). FULL = mão cheia (impulso semanal confirmado).",rule_hier_id:"HIER",rule_hier_title:"HIERARQUIA DE TELAS",rule_hier_body:"Nunca operar contra a maré. Long somente onde a maré é de alta. Stop definido na entrada — não-negociável.",legend_armed:"permissão ativa; aguardando gatilho",legend_standby:"sem permissão; não operar",legend_in_position:"posição aberta (runtime)",legend_full:"impulso semanal confirmado · mão cheia",legend_half:"semana em transição · meia mão",zone_label:"ZONA"},hero:{status:"SISTEMAS OPERACIONAIS",title:"NEXUS QUANT",subtitle:"Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.",cta:"[ VER FILOSOFIA ]",cta_ark:"[ APRESENTAÇÃO ARK STREAMS ]"},philosophy:{title:">_ DIRETRIZ DA MISSÃO",hero_text:'Abordamos os mercados financeiros como <span class="text-white font-medium">sistemas físicos complexos</span>. Ao unir <span class="text-white font-medium">pesquisa estocástica</span> com <span class="text-white font-medium">engenharia de software determinística</span>, construímos motores de decisão que prosperam no caos.',p1:{title:"Precisão",text:"Priorizamos a integridade e correção dos dados em vez da velocidade especulativa bruta."},p2:{title:"Automação",text:"Removendo o viés cognitivo humano dos fluxos críticos de execução."},p3:{title:"Resiliência",text:"Sistemas projetados para manter 99,9% de disponibilidade em ambientes adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISE QUANTITATIVA",text:"Teste rápido de hipóteses, modelagem estatística e backtesting usando o ecossistema de ciência de dados Python."},card2:{title:"RUNTIME DE PRODUÇÃO",text:"Nossa plataforma proprietária de inteligência orientada a eventos. Construída em Go e movida por NATS JetStream para garantir latência ultra-baixa, persistência nativa e escalabilidade contínua."},card3:{title:"LEDGER IMUTÁVEL",text:"Rastreabilidade total de cada estado de decisão. Utilizamos recursos de banco de dados de viagem no tempo para auditoria pós-trade rigorosa."}},evolution:{title:">_ EVOLUÇÃO DO SISTEMA",phase1:{period:"2023 - 2025",name:"Fase 1: Fundação Funcional",tech:"Clojure / JVM / Polylith",description:"Foco em corretude matemática, estruturas de dados imutáveis e desenvolvimento orientado a REPL. Provou a viabilidade da nossa lógica de estratégia baseada em Bill Williams."},phase2:{period:"2026 - Present",name:"Fase 2: Ecossistema Híbrido",tech:"Go / NATS JetStream / Wails",description:"Expansão para uma arquitetura híbrida de alta concorrência e baixa latência. Integração de Go para nós de borda em produção, mantendo Clojure para modelagem de estratégias, unificados por um barramento NATS persistente."}},metrics:{title:":: STATUS DO SISTEMA ::",header:{component:"COMPONENTE",status:"STATUS",latency:"LATÊNCIA",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONECTADO",running:"EXECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"{n}s atrás"},footer:{rights:"© {year} Nexus Quant. Todos os direitos reservados.",location:"Rio de Janeiro, BR // Operações Globais"},arkStreams:{title:"Ark Streams",subtitle:"Inteligência de trading em tempo real. Todo evento durável. Toda decisão reproduzível.",section1:{title:"O Problema",text:"A maioria das ferramentas de trading é stateless: consultam uma API, calculam um indicador e esquecem. O Ark Streams publica cada candle, cada atualização de indicador, cada sinal como um evento durável no NATS — tornando o pipeline inteiramente reproduzível desde o primeiro dia.",cap1:"Acompanhe decisões da estratégia se formando em tempo real, timeframe por timeframe",cap2:"Reproduza sessões históricas pelo mesmo engine que roda ao vivo",cap3:"Execute grid searches sobre parâmetros da estratégia contra dados armazenados",cap4:"Observe contexto macro (WTI, DXY, SP500, IBOV) ao lado do price action crypto"},section2:{title:"NATS JetStream — O Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Cada componente é totalmente desacoplado. Collectors publicam candles brutos. O FractalEngine os enriquece com indicadores. Estratégias consomem o stream enriquecido e emitem sinais. Nada se fala diretamente — tudo flui por subjects NATS.",part1:{title:"Ingestão de Dados",intro:"Bitget WebSocket (OHLCV, liquidações, posições privadas), Binance (funding rate, OI), Yahoo Finance REST — polling de WTI, BRENT, SP500, DXY, IBOV, USDBRL a cada hora."},part2:{title:"Pipeline de Processamento",intro:"FractalEngine roda uma instância por símbolo × timeframe. Publica AnalyzedEvent em market.analyzed.* e escreve o snapshot mais recente em KV: MARKET_STATE."},part3:{title:"Streams Persistentes",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (últimas 50 transições)."}},section3:{title:"FractalEngine — O Núcleo Analítico",role:"Suite de Indicadores Bill Williams",subtitle:"Candle Bruto → AnalyzedEvent Enriquecido → market.analyzed.*",subtitle2:"Uma instância por símbolo × timeframe. Aquece via REST antes de assinar o stream ao vivo — indicadores totalmente convergidos antes de qualquer estratégia ver dados.",step1:{title:"Collectors",what:"Ingestão de OHLCV bruto via Bitget, Binance e Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Calcula a suite completa Bill Williams. Publica AnalyzedEvent no NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Assina market.analyzed.*. Emite TradeSignal em signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — A Estratégia",subtitle:"Todos os 6 filtros de entrada devem passar simultaneamente antes de um sinal ser emitido",headers:["FILTRO","LONG","SHORT"],rows:{runtime:{fintech:{title:"Transição Alligator",detail:"Bias acabou de virar Bullish"},healthcare:{title:"Transição Alligator",detail:"Bias acabou de virar Bearish"}},messaging:{fintech:{title:"Spread Alligator",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Spread Alligator",detail:"Mesmo"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"Largura BB > percentil 50 (300 barras)"},healthcare:{title:"BB Squeeze Gate",detail:"Mesmo"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, acelerando (barra verde)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, acelerando (barra vermelha)"}}},closing:"Saída: 2×ATR(14) TP/SL · Reversão de tendência Alligator · Toque nos dentes (debounce 2 barras) · PaperBroker com pirâmide, MFE/MAE, FixedFractionalRM"},section5:{title:"PLANO DE CRESCIMENTO",text:"Agnóstico a símbolo por design — cada novo collector alimenta automaticamente todos os consumidores downstream via assinaturas wildcard no NATS."},footer:{memory:"Eventos: Duráveis",latency:"Latência: Ultra-Baixa",stack:"Stack: Go + NATS"},conclusion:`Todo candle importa.
Todo sinal sobrevive.
Construído para escalar.`}},Yv={common:{change_language:"Cambiar idioma a {name}",loading:"CARGANDO..."},hero:{status:"SISTEMAS OPERATIVOS",title:"NEXUS QUANT",subtitle:"Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.",cta:"[ VER FILOSOFÍA ]"},philosophy:{title:">_ DIRECTRIZ DE MISIÓN",hero_text:'Abordamos los mercados financieros como <span class="text-white font-medium">sistemas físicos complexes</span>. Al unir <span class="text-white font-medium">investigación estocástica</span> con <span class="text-white font-medium">ingeniería de software determinística</span>, construimos motores de decisión que prosperan en el caos.',p1:{title:"Precisión",text:"Priorizamos la integridad y corrección de los datos sobre la velocidad especulativa bruta."},p2:{title:"Automatización",text:"Eliminando el sesgo cognitivo humano de los flujos de ejecución críticos."},p3:{title:"Resiliencia",text:"Sistemas diseñados para mantener un 99,9% de disponibilidad en entornos adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISIS CUANTITATIVO",text:"Pruebas rápidas de hipótesis, modelado estadístico y backtesting utilizando el ecosistema de ciencia de datos de Python."},card2:{title:"RUNTIME DE PRODUCCIÓN",text:"Nuestro motor de ejecución patentado. Basado en principios de programación funcional para garantizar la seguridad de concurrencia y la tolerancia a fallos."},card3:{title:"LIBRO INMUTABLE",text:"Trazabilidad completa de cada estado de decisión. Utilizamos capacidades de base de datos de viaje en el tiempo para una auditoría post-negociación rigurosa."}},metrics:{title:":: ESTADO DEL SISTEMA ::",header:{component:"COMPONENTE",status:"ESTADO",latency:"LATENCIA",heartbeat:"LATIDO"},status_labels:{connected:"CONECTADO",running:"EJECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"hace {n}s"},footer:{rights:"© {year} Nexus Quant. Todos los derechos reservados.",location:"Río de Janeiro, BR // Operaciones Globales"}},jv={common:{change_language:"Сменить язык на {name}",loading:"ЗАГРУЗКА..."},hero:{status:"СИСТЕМЫ РАБОТАЮТ",title:"NEXUS QUANT",subtitle:"Собственные количественные исследования и автоматизированные системы принятия решений.",cta:"[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]"},philosophy:{title:">_ ДИРЕКТИВА МИССИИ",hero_text:'Мы рассматриваем финансовые рынки как <span class="text-white font-medium">сложные физические системы</span>. Объединяя <span class="text-white font-medium">стохастические исследования</span> с <span class="text-white font-medium">детерминированной программной инженерией</span>, мы создаем механизмы принятия решений, процветающие в хаосе.',p1:{title:"Точность",text:"Мы ставим целостность и корректность данных выше грубой спекулятивной скорости."},p2:{title:"Автоматизация",text:"Исключение человеческого когнитивного искажения из критически важных рабочих процессов исполнения."},p3:{title:"Устойчивость",text:"Системы, разработанные для поддержания 99,9% времени безотказной работы в агрессивных средах."}},stack:{title:">_ АРХИТЕКТУРА",card1:{title:"КОЛИЧЕСТВЕННЫЙ АНАЛИЗ",text:"Быстрое тестирование гипотез, статистическое моделирование и бэктестинг с использованием экосистемы науки о данных Python."},card2:{title:"ПРОИЗВОДСТВЕННАЯ СРЕДА",text:"Наш собственный механизм исполнения. Построен на принципах функционального программирования для обеспечения безопасности параллелизма и отказоустойчивости."},card3:{title:"НЕИЗМЕНЯЕМЫЙ РЕЕСТР",text:"Полная прослеживаемость каждого состояния принятия решения. Мы используем возможности баз данных с путешествием во времени для строгого аудита после сделок."}},metrics:{title:":: СОСТОЯНИЕ СИСТЕМЫ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАДЕРЖКА",heartbeat:"СЕРДЦЕБИЕНИЕ"},status_labels:{connected:"ПОДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХРАНЯЕТСЯ",synced:"СИНХРОНИЗИРОВАНО"},ago:"{n}с назад"},footer:{rights:"© {year} Nexus Quant. Все права защищены.",location:"Рио-де-Жанейро, БР // Глобальные операции"}},Kv={common:{change_language:"Змінити мову на {name}",loading:"ЗАВАНТАЖЕННЯ..."},hero:{status:"СИСТЕМИ ПРАЦЮЮТЬ",title:"NEXUS QUANT",subtitle:"Власні кількісні дослідження та автоматизовані системи прийняття рішень.",cta:"[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]"},philosophy:{title:">_ ДИРЕКТИВА МІСІЇ",hero_text:'Ми розглядаємо фінансові ринки як <span class="text-white font-medium">складні фізичні системи</span>. Поєднуючи <span class="text-white font-medium">стохастичні дослідження</span> з <span class="text-white font-medium">детермінованою програмною інженерією</span>, ми створюємо механізми прийняття рішень, що процвітають у хаосі.',p1:{title:"Точність",text:"Ми ставимо цілісність і коректність даних вище грубої спекулятивної швидкості."},p2:{title:"Автоматизація",text:"Виключення людського когнітивного упередження з критично важливих робочих процесів виконання."},p3:{title:"Стійкість",text:"Системи, розроблені для підтримки 99,9% часу безвідмовної роботи в агресивних середовищах."}},stack:{title:">_ АРХІТЕКТУРА",card1:{title:"КІЛЬКІСНИЙ АНАЛІЗ",text:"Швидке тестування гіпотез, статистичне моделювання та бектестування з використанням екосистеми науки про дані Python."},card2:{title:"ВИРОБНИЧЕ СЕРЕДОВИЩЕ",text:"Наш власний механізм виконання. Побудований на принципах функціонального програмування для забезпечення безпеки паралелізму та відмовостійкості."},card3:{title:"НЕЗМІННИЙ РЕЄСТР",text:"Повна простежуваність кожного стану прийняття рішення. Ми використовуємо можливості баз даних з подорожжю в часі для суворого аудиту після угод."}},metrics:{title:":: СТАН СИСТЕМИ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАТРИМКА",heartbeat:"СЕРЦЕБИТТЯ"},status_labels:{connected:"ПІДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХОРОНЯЄТЬСЯ",synced:"СИНХРОНІЗОВАНО"},ago:"{n}с тому"},footer:{rights:"© {year} Nexus Quant. Всі права захищені.",location:"Ріо-де-Жанейро, БР // Глобальні операції"}},Zv={common:{change_language:"更改语言为 {name}",loading:"加载中..."},hero:{status:"系统运行正常",title:"NEXUS QUANT",subtitle:"专有定量研究和自动决策系统。",cta:"[ 查看理念 ]"},philosophy:{title:">_ 任务指令",hero_text:'我们将金融市场视为<span class="text-white font-medium">复杂的物理系统</span>。通过将<span class="text-white font-medium">随机研究</span>与<span class="text-white font-medium">确定性软件工程</span>相结合，我们构建了在混乱中蓬勃发展的决策引擎。',p1:{title:"精确性",text:"我们优先考虑数据的完整性和正确性，而不是单纯的投机速度。"},p2:{title:"自动化",text:"从关键执行工作流中消除人类认知偏差。"},p3:{title:"弹性",text:"旨在在对抗性环境中保持 99.9% 正常运行时间的系统。"}},stack:{title:">_ 架构",card1:{title:"定量分析",text:"使用 Python 数据科学生态系统进行快速假设检验、统计建模和回测。"},card2:{title:"生产运行环境",text:"我们的专有执行引擎。建立在函数式编程原则之上，以确保并发安全和容错能力。"},card3:{title:"不可变账本",text:"每个决策状态的完全可追溯性。我们利用时间旅行数据库功能进行严格的交易后审计。"}},metrics:{title:":: 系统状态 ::",header:{component:"组件",status:"状态",latency:"延迟",heartbeat:"心跳"},status_labels:{connected:"已连接",running:"运行中",guarded:"受保护",synced:"已同步"},ago:"{n}秒前"},footer:{rights:"© {year} Nexus Quant. 保留所有权利。",location:"里约热内卢, 巴西 // 全球运营"}},Jv={common:{change_language:"言語を{name}に変更",loading:"読み込み中..."},hero:{status:"システム稼働中",title:"NEXUS QUANT",subtitle:"独自の定量的研究および自動意思決定システム。",cta:"[ 哲学を見る ]"},philosophy:{title:">_ ミッション指令",hero_text:'私たちは金融市場を<span class="text-white font-medium">複雑な物理システム</span>として捉えています。<span class="text-white font-medium">確率的研究</span>と<span class="text-white font-medium">決定論的ソフトウェア工学</span>を融合させることで、混沌の中で繁栄する意思決定エンジンを構築します。',p1:{title:"精度",text:"私たちは、単なる投機的な速度よりもデータの整合性と正確性を優先します。"},p2:{title:"自動化",text:"重要な実行ワークフローから人間の認知的バイアスを排除します。"},p3:{title:"回復力",text:"敵対的な環境でも99.9%の稼働率を維持するように設計されたシステム。"}},stack:{title:">_ アーキテクチャ",card1:{title:"定量的分析",text:"Pythonデータサイエンスエコシステムを使用した迅速な仮説検証、統計モデリング、およびバックテスト。"},card2:{title:"本番ランタイム",text:"当社独自の実行エンジン。並行性の安全性とフォールトトレランスを確保するために、関数型プログラミングの原則に基づいて構築されています。"},card3:{title:"不変台帳",text:"すべての意思決定状態の完全な追跡可能性。厳格な取引後監査のためにタイムトラベルデータベース機能を利用しています。"}},metrics:{title:":: システムステータス ::",header:{component:"コンポーネント",status:"ステータス",latency:"レイテンシ",heartbeat:"ハートビート"},status_labels:{connected:"接続済み",running:"実行中",guarded:"保護中",synced:"同期済み"},ago:"{n}秒前"},footer:{rights:"© {year} Nexus Quant. 全著作権所有。",location:"リオデジャネイロ, ブラジル // グローバルオペレーション"}},Qv={common:{change_language:"Sprache ändern zu {name}",loading:"LÄDT..."},hero:{status:"SYSTEME BETRIEBSBEREIT",title:"NEXUS QUANT",subtitle:"Proprietäre quantitative Forschung & automatisierte Entscheidungssysteme.",cta:"[ PHILOSOPHIE ANSEHEN ]"},philosophy:{title:">_ MISSIONSDIREKTIVE",hero_text:'Wir betrachten Finanzmärkte als <span class="text-white font-medium">komplexe physikalische Systeme</span>. Durch die Verbindung von <span class="text-white font-medium">stochastischer Forschung</span> mit <span class="text-white font-medium">deterministischer Softwareentwicklung</span> bauen wir Entscheidungsmaschinen, die im Chaos gedeihen.',p1:{title:"Präzision",text:"Wir priorisieren Datenintegrität und Korrektheit gegenüber roher spekulativer Geschwindigkeit."},p2:{title:"Automatisierung",text:"Entfernung menschlicher kognitiver Verzerrungen aus kritischen Ausführungsabläufen."},p3:{title:"Resilienz",text:"Systeme, die entwickelt wurden, um in feindlichen Umgebungen eine Verfügbarkeit von 99,9% aufrechtzuerhalten."}},stack:{title:">_ ARCHITEKTUR",card1:{title:"QUANTITATIVE ANALYSE",text:"Schnelles Testen von Hypothesen, statistische Modellierung und Backtesting unter Verwendung des Python-Data-Science-Ökosystems."},card2:{title:"PRODUKTIONS-LAUFZEITUMGEBUNG",text:"Unsere proprietäre Ausführungs-Engine. Aufgebaut auf Prinzipien der funktionalen Programmierung zur Gewährleistung von Nebenläufigkeitssicherheit und Fehlertoleranz."},card3:{title:"UNVERÄNDERLICHES HAUPTBUCH",text:"Vollständige Rückverfolgbarkeit jedes Entscheidungszustands. Wir nutzen Zeitreise-Datenbankfunktionen für rigorose Nachhandelsprüfungen."}},metrics:{title:":: SYSTEMSTATUS ::",header:{component:"KOMPONENTE",status:"STATUS",latency:"LATENZ",heartbeat:"HEARTBEAT"},status_labels:{connected:"VERBUNDEN",running:"LÄUFT",guarded:"GESCHÜTZT",synced:"SYNCHRONISIERT"},ago:"vor {n}s"},footer:{rights:"© {year} Nexus Quant. Alle Rechte vorbehalten.",location:"Rio de Janeiro, BR // Globale Operationen"}};Ni("en",$v);Ni("pt",qv);Ni("es",Yv);Ni("ru",jv);Ni("uk",Kv);Ni("zh",Zv);Ni("ja",Jv);Ni("de",Qv);const ul=["en","pt"];function eg(){if(typeof window>"u")return"en";try{const e=localStorage.getItem("preferred-locale");if(e&&ul.includes(e))return e}catch{}const n=navigator.languages||[navigator.language];for(const e of n){if(!e)continue;if(ul.includes(e))return e;const t=e.split("-")[0];if(ul.includes(t))return t}return"en"}Ev({fallbackLocale:"en",initialLocale:eg()});const tg="5";var Mh;typeof window<"u"&&((Mh=window.__svelte??(window.__svelte={})).v??(Mh.v=new Set)).add(tg);rm();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="182",ng=0,bu=1,ig=2,Js=1,rg=2,Ha=3,nr=0,wn=1,zn=2,hi=0,Zr=1,ac=2,yu=3,Su=4,ag=5,br=100,sg=101,og=102,lg=103,cg=104,dg=200,ug=201,hg=202,fg=203,sc=204,oc=205,pg=206,mg=207,vg=208,gg=209,xg=210,_g=211,bg=212,yg=213,Sg=214,lc=0,cc=1,dc=2,ia=3,uc=4,hc=5,fc=6,pc=7,xd=0,Mg=1,Eg=2,fi=0,Uf=1,Ff=2,Of=3,Bf=4,kf=5,zf=6,Hf=7,Gf=300,Ar=301,ra=302,mc=303,vc=304,Ho=306,gc=1e3,Ai=1001,xc=1002,tn=1003,wg=1004,Rs=1005,cn=1006,hl=1007,Sr=1008,Ln=1009,Vf=1010,Wf=1011,Za=1012,_d=1013,xi=1014,ci=1015,Nn=1016,bd=1017,yd=1018,Ja=1020,Xf=35902,$f=35899,qf=1021,Yf=1022,Jn=1023,Li=1026,Mr=1027,jf=1028,Sd=1029,aa=1030,Md=1031,Ed=1033,Qs=33776,eo=33777,to=33778,no=33779,_c=35840,bc=35841,yc=35842,Sc=35843,Mc=36196,Ec=37492,wc=37496,Tc=37488,Ac=37489,Rc=37490,Cc=37491,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Fc=37814,Oc=37815,Bc=37816,kc=37817,zc=37818,Hc=37819,Gc=37820,Vc=37821,Wc=36492,Xc=36494,$c=36495,qc=36283,Yc=36284,jc=36285,Kc=36286,Tg=3200,wd=0,Ag=1,$i="",kn="srgb",sa="srgb-linear",yo="linear",Tt="srgb",Fr=7680,Mu=519,Rg=512,Cg=513,Pg=514,Td=515,Ig=516,Lg=517,Ad=518,Dg=519,Eu=35044,wu="300 es",di=2e3,So=2001;function Kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ng(){const n=Mo("canvas");return n.style.display="block",n}const Tu={};function Au(...n){const e="THREE."+n.shift();console.log(e,...n)}function it(...n){const e="THREE."+n.shift();console.warn(e,...n)}function gt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Qa(...n){const e=n.join(" ");e in Tu||(Tu[e]=!0,it(...n))}function Ug(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class ba{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Zc=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Fg(n,e){return(n%e+e)%e}function pl(n,e,t){return(1-t)*n+t*e}function La(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=a[s+0],p=a[s+1],v=a[s+2],g=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==u||c!==p||d!==v){let m=l*u+c*p+d*v+h*g;m<0&&(u=-u,p=-p,v=-v,g=-g,m=-m);let f=1-o;if(m<.9995){const y=Math.acos(m),_=Math.sin(y);f=Math.sin(f*y)/_,o=Math.sin(o*y)/_,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+g*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+g*o;const y=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=y,c*=y,d*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=a[s],u=a[s+1],p=a[s+2],v=a[s+3];return e[t]=o*v+d*h+l*p-c*u,e[t+1]=l*v+d*u+c*h-o*p,e[t+2]=c*v+d*p+o*u-l*h,e[t+3]=d*v-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(a/2),u=l(i/2),p=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*d,this.y=i+l*d+o*c-a*h,this.z=r+l*h+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new V,Ru=new cs;class st{constructor(e,t,i,r,a,s,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],g=r[0],m=r[3],f=r[6],y=r[1],_=r[4],E=r[7],S=r[2],T=r[5],A=r[8];return a[0]=s*g+o*y+l*S,a[3]=s*m+o*_+l*T,a[6]=s*f+o*E+l*A,a[1]=c*g+d*y+h*S,a[4]=c*m+d*_+h*T,a[7]=c*f+d*E+h*A,a[2]=u*g+p*y+v*S,a[5]=u*m+p*_+v*T,a[8]=u*f+p*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*a,p=c*a-s*l,v=t*h+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(r*c-d*i)*g,e[2]=(o*i-r*s)*g,e[3]=u*g,e[4]=(d*t-r*l)*g,e[5]=(r*a-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vl.makeScale(e,t)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new st,Cu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Og(){const n={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Tt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sa]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),n}const xt=Og();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Or;class Bg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=Mo("canvas")),Or.width=e.width,Or.height=e.height;const r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kg=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(gl(r[s].image)):a.push(gl(r[s]))}else a=gl(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let zg=0;const xl=new V;class xn extends ba{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Ai,r=Ai,a=cn,s=Sr,o=Jn,l=Ln,c=xn.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ls(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Gf;xn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,E=(p+1)/2,S=(f+1)/2,T=(d+u)/4,A=(h+g)/4,D=(v+m)/4;return _>E&&_>S?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=T/i,a=A/i):E>S?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=T/r,a=D/r):S<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(S),i=A/a,r=D/a),this.set(i,r,a,t),this}let y=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-g)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends ba{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new xn(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Hg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zf extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gg extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(a,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Ps.subVectors(this.max,Da),Br.subVectors(e.a,Da),kr.subVectors(e.b,Da),zr.subVectors(e.c,Da),ki.subVectors(kr,Br),zi.subVectors(zr,kr),ur.subVectors(Br,zr);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-ur.z,ur.y,ki.z,0,-ki.x,zi.z,0,-zi.x,ur.z,0,-ur.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-ur.y,ur.x,0];return!_l(t,Br,kr,zr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,Br,kr,zr,Ps))?!1:(Is.crossVectors(ki,zi),t=[Is.x,Is.y,Is.z],_l(t,Br,kr,zr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],Yn=new V,Cs=new ds,Br=new V,kr=new V,zr=new V,ki=new V,zi=new V,ur=new V,Da=new V,Ps=new V,Is=new V,hr=new V;function _l(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){hr.fromArray(n,a);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Vg=new ds,Na=new V,bl=new V;class Cd{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(bl)),this.expandByPoint(Na.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new V,yl=new V,Ls=new V,Hi=new V,Sl=new V,Ds=new V,Ml=new V;class Jf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yl.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(yl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ls),o=Hi.dot(this.direction),l=-Hi.dot(Ls),c=Hi.lengthSq(),d=Math.abs(1-s*s);let h,u,p,v;if(d>0)if(h=s*l-o,u=s*o-l,v=a*d,h>=0)if(u>=-v)if(u<=v){const g=1/d;h*=g,u*=g,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yl).addScaledVector(Ls,u),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,a){Sl.subVectors(t,e),Ds.subVectors(i,e),Ml.crossVectors(Sl,Ds);let s=this.direction.dot(Ml),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(Hi,Ds));if(l<0)return null;const c=o*this.direction.dot(Sl.cross(Hi));if(c<0||l+c>s)return null;const d=-o*Hi.dot(Ml);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m)}set(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=s*d,p=s*h,v=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=v+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,v=c*d,g=c*h;t[0]=u+g*o,t[4]=v*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*d,t[9]=-o,t[2]=p*o-v,t[6]=g+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,v=c*d,g=c*h;t[0]=u-g*o,t[4]=-s*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*d,t[9]=g-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,v=o*d,g=o*h;t[0]=l*d,t[4]=v*c-p,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=g-u*h,t[8]=v*h+p,t[1]=h,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+v,t[10]=u-g*h}else if(e.order==="XZY"){const u=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=s*d,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Xg)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(i,Rn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(i,Rn)),Gi.normalize(),Ns.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=Ns.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=Ns.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=Ns.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],g=i[6],m=i[10],f=i[14],y=i[3],_=i[7],E=i[11],S=i[15],T=r[0],A=r[4],D=r[8],M=r[12],w=r[1],P=r[5],N=r[9],B=r[13],$=r[2],z=r[6],W=r[10],G=r[14],Z=r[3],se=r[7],ie=r[11],le=r[15];return a[0]=s*T+o*w+l*$+c*Z,a[4]=s*A+o*P+l*z+c*se,a[8]=s*D+o*N+l*W+c*ie,a[12]=s*M+o*B+l*G+c*le,a[1]=d*T+h*w+u*$+p*Z,a[5]=d*A+h*P+u*z+p*se,a[9]=d*D+h*N+u*W+p*ie,a[13]=d*M+h*B+u*G+p*le,a[2]=v*T+g*w+m*$+f*Z,a[6]=v*A+g*P+m*z+f*se,a[10]=v*D+g*N+m*W+f*ie,a[14]=v*M+g*B+m*G+f*le,a[3]=y*T+_*w+E*$+S*Z,a[7]=y*A+_*P+E*z+S*se,a[11]=y*D+_*N+E*W+S*ie,a[15]=y*M+_*B+E*G+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15],y=l*p-c*u,_=o*p-c*h,E=o*u-l*h,S=s*p-c*d,T=s*u-l*d,A=s*h-o*d;return t*(g*y-m*_+f*E)-i*(v*y-m*S+f*T)+r*(v*_-g*S+f*A)-a*(v*E-g*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],y=h*m*c-g*u*c+g*l*p-o*m*p-h*l*f+o*u*f,_=v*u*c-d*m*c-v*l*p+s*m*p+d*l*f-s*u*f,E=d*g*c-v*h*c+v*o*p-s*g*p-d*o*f+s*h*f,S=v*h*l-d*g*l-v*o*u+s*g*u+d*o*m-s*h*m,T=t*y+i*_+r*E+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(g*u*a-h*m*a-g*r*p+i*m*p+h*r*f-i*u*f)*A,e[2]=(o*m*a-g*l*a+g*r*c-i*m*c-o*r*f+i*l*f)*A,e[3]=(h*l*a-o*u*a-h*r*c+i*u*c+o*r*p-i*l*p)*A,e[4]=_*A,e[5]=(d*m*a-v*u*a+v*r*p-t*m*p-d*r*f+t*u*f)*A,e[6]=(v*l*a-s*m*a-v*r*c+t*m*c+s*r*f-t*l*f)*A,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*p+t*l*p)*A,e[8]=E*A,e[9]=(v*h*a-d*g*a-v*i*p+t*g*p+d*i*f-t*h*f)*A,e[10]=(s*g*a-v*o*a+v*i*c-t*g*c-s*i*f+t*o*f)*A,e[11]=(d*o*a-s*h*a-d*i*c+t*h*c+s*i*p-t*o*p)*A,e[12]=S*A,e[13]=(d*g*r-v*h*r+v*i*u-t*g*u-d*i*m+t*h*m)*A,e[14]=(v*o*r-s*g*r-v*i*l+t*g*l+s*i*m-t*o*m)*A,e[15]=(s*h*r-d*o*r+d*i*l-t*h*l-s*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,h=o+o,u=a*c,p=a*d,v=a*h,g=s*d,m=s*h,f=o*h,y=l*c,_=l*d,E=l*h,S=i.x,T=i.y,A=i.z;return r[0]=(1-(g+f))*S,r[1]=(p+E)*S,r[2]=(v-_)*S,r[3]=0,r[4]=(p-E)*T,r[5]=(1-(u+f))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(v+_)*A,r[9]=(m-y)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=Hr.set(r[0],r[1],r[2]).length();const s=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),jn.copy(this);const c=1/a,d=1/s,h=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=di,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let v,g;if(l)v=a/(s-a),g=s*a/(s-a);else if(o===di)v=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===So)v=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=di,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,g;if(l)v=1/(s-a),g=s/(s-a);else if(o===di)v=-2/(s-a),g=-(s+a)/(s-a);else if(o===So)v=-1/(s-a),g=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new V,jn=new kt,Wg=new V(0,0,0),Xg=new V(1,1,1),Gi=new V,Ns=new V,Rn=new V,Iu=new kt,Lu=new cs;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const Du=new V,Gr=new cs,Mi=new kt,Us=new V,Ua=new V,qg=new V,Yg=new cs,Nu=new V(1,0,0),Uu=new V(0,1,0),Fu=new V(0,0,1),Ou={type:"added"},jg={type:"removed"},Vr={type:"childadded",child:null},El={type:"childremoved",child:null};class An extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new V,t=new ei,i=new cs,r=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new st}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Us.copy(e):Us.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ua,Us,this.up):Mi.lookAt(Us,Ua,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new V(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new V,Ei=new V,wl=new V,wi=new V,Wr=new V,Xr=new V,Bu=new V,Tl=new V,Al=new V,Rl=new V,Cl=new Ht,Pl=new Ht,Il=new Ht;class Zn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Kn.subVectors(r,t),Ei.subVectors(i,t),wl.subVectors(e,t);const s=Kn.dot(Kn),o=Kn.dot(Ei),l=Kn.dot(wl),c=Ei.dot(Ei),d=Ei.dot(wl),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(s*d-o*l)*u;return a.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Cl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Cl,a.x),s.addScaledVector(Pl,a.y),s.addScaledVector(Il,a.z),s}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Ei.subVectors(e,t),Kn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Wr.subVectors(r,i),Xr.subVectors(a,i),Tl.subVectors(e,i);const l=Wr.dot(Tl),c=Xr.dot(Tl);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,r);const d=Wr.dot(Al),h=Xr.dot(Al);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Wr,s);Rl.subVectors(e,a);const p=Wr.dot(Rl),v=Xr.dot(Rl);if(v>=0&&p<=v)return t.copy(a);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Xr,o);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return Bu.subVectors(a,r),o=(h-d)/(h-d+(p-v)),t.copy(r).addScaledVector(Bu,o);const f=1/(m+g+u);return s=g*f,o=u*f,t.copy(i).addScaledVector(Wr,s).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=Fg(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ll(s,a,e+1/3),this.g=Ll(s,a,e),this.b=Ll(s,a,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=kn){function i(a){a!==void 0&&parseFloat(a)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const i=Qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return xt.workingToColorSpace(sn.copy(this),e),Math.round(ut(sn.r*255,0,255))*65536+Math.round(ut(sn.g*255,0,255))*256+Math.round(ut(sn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,a=sn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=kn){xt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Fs);const i=pl(Vi.h,Fs.h,t),r=pl(Vi.s,Fs.s,t),a=pl(Vi.l,Fs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=Qf;let Kg=0;class ya extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Zr,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=oc,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==oc&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oa extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new V,Os=new $e;let Zg=0;class pi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=La(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=La(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=La(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=La(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=La(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}}class ep extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tp extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jg=0;const On=new kt,Dl=new An,$r=new V,Cn=new ds,Fa=new ds,Zt=new V;class Un extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?tp:ep)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Cn.min,Fa.min),Cn.expandByPoint(Zt),Zt.addVectors(Cn.max,Fa.max),Cn.expandByPoint(Zt)):(Cn.expandByPoint(Fa.min),Cn.expandByPoint(Fa.max))}Cn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Zt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Zt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Zt.add($r)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new V,l[D]=new V;const c=new V,d=new V,h=new V,u=new $e,p=new $e,v=new $e,g=new V,m=new V;function f(D,M,w){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,w),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,M),v.fromBufferAttribute(a,w),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(P),o[D].add(g),o[M].add(g),o[w].add(g),l[D].add(m),l[M].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,M=y.length;D<M;++D){const w=y[D],P=w.start,N=w.count;for(let B=P,$=P+N;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new V,E=new V,S=new V,T=new V;function A(D){S.fromBufferAttribute(r,D),T.copy(S);const M=o[D];_.copy(M),_.sub(S.multiplyScalar(S.dot(M))).normalize(),E.crossVectors(T,M);const P=E.dot(l[D])<0?-1:1;s.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,M=y.length;D<M;++D){const w=y[D],P=w.start,N=w.count;for(let B=P,$=P+N;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new V,a=new V,s=new V,o=new V,l=new V,c=new V,d=new V,h=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new pi(u,d,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ku=new kt,fr=new Jf,Bs=new Cd,zu=new V,ks=new V,zs=new V,Hs=new V,Nl=new V,Gs=new V,Hu=new V,Vs=new V;class nn extends An{constructor(e=new Un,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Gs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Nl.fromBufferAttribute(h,e),s?Gs.addScaledVector(Nl,d):Gs.addScaledVector(Nl.sub(t),d))}t.add(Gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(a),fr.copy(e.ray).recast(e.near),!(Bs.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Bs,zu)===null||fr.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(ku.copy(a).invert(),fr.copy(e.ray).applyMatrix4(ku),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,S=_;E<S;E+=3){const T=o.getX(E),A=o.getX(E+1),D=o.getX(E+2);r=Ws(this,f,e,i,c,d,h,T,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=o.getX(m),_=o.getX(m+1),E=o.getX(m+2);r=Ws(this,s,e,i,c,d,h,y,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,S=_;E<S;E+=3){const T=E,A=E+1,D=E+2;r=Ws(this,f,e,i,c,d,h,T,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=m,_=m+1,E=m+2;r=Ws(this,s,e,i,c,d,h,y,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Qg(n,e,t,i,r,a,s,o){let l;if(e.side===wn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===nr,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:n}}function Ws(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,ks),n.getVertexPosition(l,zs),n.getVertexPosition(c,Hs);const d=Qg(n,e,t,i,ks,zs,Hs,Hu);if(d){const h=new V;Zn.getBarycoord(Hu,ks,zs,Hs,h),r&&(d.uv=Zn.getInterpolatedAttribute(r,o,l,c,h,new $e)),a&&(d.uv1=Zn.getInterpolatedAttribute(a,o,l,c,h,new $e)),s&&(d.normal=Zn.getInterpolatedAttribute(s,o,l,c,h,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new V,materialIndex:0};Zn.getNormal(ks,zs,Hs,u.normal),d.face=u,d.barycoord=h}return d}class Sa extends Un{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,t,e,s,a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(h,2));function v(g,m,f,y,_,E,S,T,A,D,M){const w=E/A,P=S/D,N=E/2,B=S/2,$=T/2,z=A+1,W=D+1;let G=0,Z=0;const se=new V;for(let ie=0;ie<W;ie++){const le=ie*P-B;for(let Ae=0;Ae<z;Ae++){const Ie=Ae*w-N;se[g]=Ie*y,se[m]=le*_,se[f]=$,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[f]=T>0?1:-1,d.push(se.x,se.y,se.z),h.push(Ae/A),h.push(1-ie/D),G+=1}}for(let ie=0;ie<D;ie++)for(let le=0;le<A;le++){const Ae=u+le+z*ie,Ie=u+le+z*(ie+1),We=u+(le+1)+z*(ie+1),Ze=u+(le+1)+z*ie;l.push(Ae,Ie,Ze),l.push(Ie,We,Ze),Z+=6}o.addGroup(p,Z,M),p+=Z,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const r in i)e[r]=i[r]}return e}function ex(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Eo={clone:la,merge:hn};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ip extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new V,Gu=new $e,Vu=new $e;class vn extends ip{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zc*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Vu),t.subVectors(Vu,Gu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class ix extends An{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(qr,Yr,e,t);r.layers=this.layers,this.add(r);const a=new vn(qr,Yr,e,t);a.layers=this.layers,this.add(a);const s=new vn(qr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new vn(qr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new vn(qr,Yr,e,t);l.layers=this.layers,this.add(l);const c=new vn(qr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class rp extends xn{constructor(e=[],t=Ar,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sa(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:hi});a.uniforms.tEquirect.value=t;const s=new nn(r,a),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=cn),new ix(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class Ga extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Id extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ax extends xn{constructor(e=null,t=1,i=1,r,a,s,o,l,c=tn,d=tn,h,u){super(null,s,o,l,c,d,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new V,sx=new V,ox=new st;class gr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fl.subVectors(i,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),r=this.coplanarPoint(Fl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Cd,lx=new $e(.5,.5),Xs=new V;class Ld{constructor(e=new gr,t=new gr,i=new gr,r=new gr,a=new gr,s=new gr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],p=a[7],v=a[8],g=a[9],m=a[10],f=a[11],y=a[12],_=a[13],E=a[14],S=a[15];if(r[0].setComponents(c-s,p-d,f-v,S-y).normalize(),r[1].setComponents(c+s,p+d,f+v,S+y).normalize(),r[2].setComponents(c+o,p+h,f+g,S+_).normalize(),r[3].setComponents(c-o,p-h,f-g,S-_).normalize(),i)r[4].setComponents(l,u,m,E).normalize(),r[5].setComponents(c-l,p-u,f-m,S-E).normalize();else if(r[4].setComponents(c-l,p-u,f-m,S-E).normalize(),t===di)r[5].setComponents(c+l,p+u,f+m,S+E).normalize();else if(t===So)r[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const t=lx.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class es extends xn{constructor(e,t,i=xi,r,a,s,o=tn,l=tn,c,d=Li,h=1){if(d!==Li&&d!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cx extends es{constructor(e,t=xi,i=Ar,r,a,s=tn,o=tn,l,c=Li){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sp extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class us extends Un{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),d(),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(a.slice(),3)),this.setAttribute("uv",new $t(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new V,E=new V,S=new V;for(let T=0;T<t.length;T+=3)p(t[T+0],_),p(t[T+1],E),p(t[T+2],S),l(_,E,S,y)}function l(y,_,E,S){const T=S+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const M=y.clone().lerp(E,D/T),w=_.clone().lerp(E,D/T),P=T-D;for(let N=0;N<=P;N++)N===0&&D===T?A[D][N]=M:A[D][N]=M.clone().lerp(w,N/P)}for(let D=0;D<T;D++)for(let M=0;M<2*(T-D)-1;M++){const w=Math.floor(M/2);M%2===0?(u(A[D][w+1]),u(A[D+1][w]),u(A[D][w])):(u(A[D][w+1]),u(A[D+1][w+1]),u(A[D+1][w]))}}function c(y){const _=new V;for(let E=0;E<a.length;E+=3)_.x=a[E+0],_.y=a[E+1],_.z=a[E+2],_.normalize().multiplyScalar(y),a[E+0]=_.x,a[E+1]=_.y,a[E+2]=_.z}function d(){const y=new V;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];const E=m(y)/2/Math.PI+.5,S=f(y)/Math.PI+.5;s.push(E,1-S)}v(),h()}function h(){for(let y=0;y<s.length;y+=6){const _=s[y+0],E=s[y+2],S=s[y+4],T=Math.max(_,E,S),A=Math.min(_,E,S);T>.9&&A<.1&&(_<.2&&(s[y+0]+=1),E<.2&&(s[y+2]+=1),S<.2&&(s[y+4]+=1))}}function u(y){a.push(y.x,y.y,y.z)}function p(y,_){const E=y*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function v(){const y=new V,_=new V,E=new V,S=new V,T=new $e,A=new $e,D=new $e;for(let M=0,w=0;M<a.length;M+=9,w+=6){y.set(a[M+0],a[M+1],a[M+2]),_.set(a[M+3],a[M+4],a[M+5]),E.set(a[M+6],a[M+7],a[M+8]),T.set(s[w+0],s[w+1]),A.set(s[w+2],s[w+3]),D.set(s[w+4],s[w+5]),S.copy(y).add(_).add(E).divideScalar(3);const P=m(S);g(T,w+0,y,P),g(A,w+2,_,P),g(D,w+4,E,P)}}function g(y,_,E,S){S<0&&y.x===1&&(s[_]=y.x-1),E.x===0&&E.z===0&&(s[_]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.vertices,e.indices,e.radius,e.detail)}}class Dd extends us{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dd(e.radius,e.detail)}}class Nd extends us{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class hs extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<d;f++){const y=f*u-s;for(let _=0;_<c;_++){const E=_*h-a;v.push(E,-y,0),g.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const _=y+c*f,E=y+c*(f+1),S=y+1+c*(f+1),T=y+1+c*f;p.push(_,E,T),p.push(E,S,T)}this.setIndex(p),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ud extends us{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ud(e.radius,e.detail)}}class wo extends Un{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new V,h=new V,u=new V;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const g=v/r*a,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const g=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,y=(r+1)*p+v;s.push(g,m,y),s.push(m,f,y)}this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fd extends Un{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],d=[],h=new V,u=new V,p=new V,v=new V,g=new V,m=new V,f=new V;for(let _=0;_<=i;++_){const E=_/i*a*Math.PI*2;y(E,a,s,e,p),y(E+.01,a,s,e,v),m.subVectors(v,p),f.addVectors(v,p),g.crossVectors(m,f),f.crossVectors(g,m),g.normalize(),f.normalize();for(let S=0;S<=r;++S){const T=S/r*Math.PI*2,A=-t*Math.cos(T),D=t*Math.sin(T);h.x=p.x+(A*f.x+D*g.x),h.y=p.y+(A*f.y+D*g.y),h.z=p.z+(A*f.z+D*g.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),c.push(u.x,u.y,u.z),d.push(_/i),d.push(S/r)}}for(let _=1;_<=i;_++)for(let E=1;E<=r;E++){const S=(r+1)*(_-1)+(E-1),T=(r+1)*_+(E-1),A=(r+1)*_+E,D=(r+1)*(_-1)+E;o.push(S,T,D),o.push(T,A,D)}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(d,2));function y(_,E,S,T,A){const D=Math.cos(_),M=Math.sin(_),w=S/E*_,P=Math.cos(w);A.x=T*(2+P)*.5*D,A.y=T*(2+P)*M*.5,A.z=T*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class dx extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ux extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends ux{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wu extends ya{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fx extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class px extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class op extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ol=new kt,Xu=new V,$u=new V;class mx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vx extends mx{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class To extends op{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Od extends ip{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lp extends op{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gx extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const qu=new kt;class xx{constructor(e,t,i=0,r=1/0){this.ray=new Jf(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(e,t=!0,i=[]){return Jc(e,this,i,t),i.sort(Yu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Jc(e[r],this,i,t);return i.sort(Yu),i}}function Yu(n,e){return n.distance-e.distance}function Jc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Jc(a[s],e,t,!0)}}function ju(n,e,t,i){const r=_x(i);switch(t){case qf:return n*e;case jf:return n*e/r.components*r.byteLength;case Sd:return n*e/r.components*r.byteLength;case aa:return n*e*2/r.components*r.byteLength;case Md:return n*e*2/r.components*r.byteLength;case Yf:return n*e*3/r.components*r.byteLength;case Jn:return n*e*4/r.components*r.byteLength;case Ed:return n*e*4/r.components*r.byteLength;case Qs:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:case Sc:return Math.max(n,16)*Math.max(e,8)/4;case _c:case yc:return Math.max(n,8)*Math.max(e,8)/2;case Mc:case Ec:case Tc:case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wc:case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _x(n){switch(n){case Ln:case Vf:return{byteLength:1,components:1};case Za:case Wf:case Nn:return{byteLength:2,components:1};case bd:case yd:return{byteLength:2,components:4};case xi:case _d:case ci:return{byteLength:4,components:1};case Xf:case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cp(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function bx(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,h[u]=g)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const g=h[p];n.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
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
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h_=`uniform bool receiveShadow;
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
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,__=`uniform sampler2D dfgLUT;
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
}`,b_=`
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P_=`#if defined( USE_POINTS_UV )
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
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
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
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,Ab=`#if DEPTH_PACKING == 3200
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
}`,Rb=`#define DISTANCE
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
}`,Cb=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`uniform float scale;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Fb=`#define LAMBERT
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
}`,Ob=`#define LAMBERT
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
}`,Bb=`#define MATCAP
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
}`,kb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,Gb=`#define PHONG
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
}`,Vb=`#define PHONG
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
}`,Wb=`#define STANDARD
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
}`,Xb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,qb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Kb=`#include <common>
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
}`,Zb=`uniform vec3 color;
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
}`,Jb=`uniform float rotation;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:yx,alphahash_pars_fragment:Sx,alphamap_fragment:Mx,alphamap_pars_fragment:Ex,alphatest_fragment:wx,alphatest_pars_fragment:Tx,aomap_fragment:Ax,aomap_pars_fragment:Rx,batching_pars_vertex:Cx,batching_vertex:Px,begin_vertex:Ix,beginnormal_vertex:Lx,bsdfs:Dx,iridescence_fragment:Nx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:kx,color_fragment:zx,color_pars_fragment:Hx,color_pars_vertex:Gx,color_vertex:Vx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:$x,displacementmap_pars_vertex:qx,displacementmap_vertex:Yx,emissivemap_fragment:jx,emissivemap_pars_fragment:Kx,colorspace_fragment:Zx,colorspace_pars_fragment:Jx,envmap_fragment:Qx,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:f_,envmap_vertex:i_,fog_vertex:r_,fog_pars_vertex:a_,fog_fragment:s_,fog_pars_fragment:o_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:u_,lights_pars_begin:h_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:v_,lights_phong_pars_fragment:g_,lights_physical_fragment:x_,lights_physical_pars_fragment:__,lights_fragment_begin:b_,lights_fragment_maps:y_,lights_fragment_end:S_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:T_,map_fragment:A_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:P_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:L_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:F_,morphtarget_vertex:O_,normal_fragment_begin:B_,normal_fragment_maps:k_,normal_pars_fragment:z_,normal_pars_vertex:H_,normal_vertex:G_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:q_,opaque_fragment:Y_,packing:j_,premultiplied_alpha_fragment:K_,project_vertex:Z_,dithering_fragment:J_,dithering_pars_fragment:Q_,roughnessmap_fragment:eb,roughnessmap_pars_fragment:tb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:rb,shadowmask_pars_fragment:ab,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:db,specularmap_pars_fragment:ub,tonemapping_fragment:hb,tonemapping_pars_fragment:fb,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:vb,uv_pars_vertex:gb,uv_vertex:xb,worldpos_vertex:_b,background_vert:bb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:wb,depth_vert:Tb,depth_frag:Ab,distance_vert:Rb,distance_frag:Cb,equirect_vert:Pb,equirect_frag:Ib,linedashed_vert:Lb,linedashed_frag:Db,meshbasic_vert:Nb,meshbasic_frag:Ub,meshlambert_vert:Fb,meshlambert_frag:Ob,meshmatcap_vert:Bb,meshmatcap_frag:kb,meshnormal_vert:zb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Vb,meshphysical_vert:Wb,meshphysical_frag:Xb,meshtoon_vert:$b,meshtoon_frag:qb,points_vert:Yb,points_frag:jb,shadow_vert:Kb,shadow_frag:Zb,sprite_vert:Jb,sprite_frag:Qb},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},oi={basic:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:hn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:hn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:hn([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:hn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:hn([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:hn([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:hn([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:hn([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const $s={r:0,b:0,g:0},mr=new ei,ey=new kt;function ty(n,e,t,i,r,a,s){const o=new et(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function v(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function g(_){let E=!1;const S=v(_);S===null?f(o,l):S&&S.isColor&&(f(S,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,E){const S=v(E);S&&(S.isCubeTexture||S.mapping===Ho)?(d===void 0&&(d=new nn(new Sa(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:la(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),mr.copy(E.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(mr)),d.material.toneMapped=xt.getTransfer(S.colorSpace)!==Tt,(h!==S||u!==S.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=S,u=S.version,p=n.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new nn(new hs(2,2),new rn({name:"BackgroundMaterial",uniforms:la(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xt.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,E){_.getRGB($s,np(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,E,s)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:g,addToRenderList:m,dispose:y}}function ny(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(w,P,N,B,$){let z=!1;const W=h(B,N,P);a!==W&&(a=W,c(a.object)),z=p(w,B,N,$),z&&v(w,B,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,E(w,P,N,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function h(w,P,N){const B=N.wireframe===!0;let $=i[w.id];$===void 0&&($={},i[w.id]=$);let z=$[P.id];z===void 0&&(z={},$[P.id]=z);let W=z[B];return W===void 0&&(W=u(l()),z[B]=W),W}function u(w){const P=[],N=[],B=[];for(let $=0;$<t;$++)P[$]=0,N[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,P,N,B){const $=a.attributes,z=P.attributes;let W=0;const G=N.getAttributes();for(const Z in G)if(G[Z].location>=0){const ie=$[Z];let le=z[Z];if(le===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;W++}return a.attributesNum!==W||a.index!==B}function v(w,P,N,B){const $={},z=P.attributes;let W=0;const G=N.getAttributes();for(const Z in G)if(G[Z].location>=0){let ie=z[Z];ie===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),$[Z]=le,W++}a.attributes=$,a.attributesNum=W,a.index=B}function g(){const w=a.newAttributes;for(let P=0,N=w.length;P<N;P++)w[P]=0}function m(w){f(w,0)}function f(w,P){const N=a.newAttributes,B=a.enabledAttributes,$=a.attributeDivisors;N[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),$[w]!==P&&(n.vertexAttribDivisor(w,P),$[w]=P)}function y(){const w=a.newAttributes,P=a.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==w[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function _(w,P,N,B,$,z,W){W===!0?n.vertexAttribIPointer(w,P,N,$,z):n.vertexAttribPointer(w,P,N,B,$,z)}function E(w,P,N,B){g();const $=B.attributes,z=N.getAttributes(),W=P.defaultAttributeValues;for(const G in z){const Z=z[G];if(Z.location>=0){let se=$[G];if(se===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const ie=se.normalized,le=se.itemSize,Ae=e.get(se);if(Ae===void 0)continue;const Ie=Ae.buffer,We=Ae.type,Ze=Ae.bytesPerElement,J=We===n.INT||We===n.UNSIGNED_INT||se.gpuType===_d;if(se.isInterleavedBufferAttribute){const ne=se.data,pe=ne.stride,ke=se.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)f(Z.location+ge,ne.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<Z.locationSize;ge++)m(Z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ge=0;ge<Z.locationSize;ge++)_(Z.location+ge,le/Z.locationSize,We,ie,pe*Ze,(ke+le/Z.locationSize*ge)*Ze,J)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<Z.locationSize;ne++)f(Z.location+ne,se.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<Z.locationSize;ne++)m(Z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ne=0;ne<Z.locationSize;ne++)_(Z.location+ne,le/Z.locationSize,We,ie,le*Ze,le/Z.locationSize*ne*Ze,J)}}else if(W!==void 0){const ie=W[G];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Z.location,ie);break;case 3:n.vertexAttrib3fv(Z.location,ie);break;case 4:n.vertexAttrib4fv(Z.location,ie);break;default:n.vertexAttrib1fv(Z.location,ie)}}}}y()}function S(){D();for(const w in i){const P=i[w];for(const N in P){const B=P[N];for(const $ in B)d(B[$].object),delete B[$];delete P[N]}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const N in P){const B=P[N];for(const $ in B)d(B[$].object),delete B[$];delete P[N]}delete i[w.id]}function A(w){for(const P in i){const N=i[P];if(N[w.id]===void 0)continue;const B=N[w.id];for(const $ in B)d(B[$].object),delete B[$];delete N[w.id]}}function D(){M(),s=!0,a!==r&&(a=r,c(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function iy(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];t.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],d[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let v=0;for(let g=0;g<h;g++)v+=d[g]*u[g];t.update(v,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ry(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(it("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:E,maxSamples:S,samples:T}}function ay(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new gr,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||a&&!m)a?d(null):c();else{const y=a?0:i,_=y*4;let E=f.clippingState||null;l.value=E,E=d(v,u,_,p);for(let S=0;S!==_;++S)E[S]=t[S];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==g;++_,E+=4)s.copy(h[_]).applyMatrix4(y,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function sy(n){let e=new WeakMap;function t(s,o){return o===mc?s.mapping=Ar:o===vc&&(s.mapping=ra),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===mc||o===vc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ap(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ji=4,Ku=[.125,.215,.35,.446,.526,.582],yr=20,oy=256,Oa=new Od,Zu=new et;let Bl=null,kl=0,zl=0,Hl=!1;const ly=new V;class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=ly}=a;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,zl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Nn,format:Jn,colorSpace:sa,depthBuffer:!1},r=Qu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cy(a)),this._blurMaterial=uy(a,e,t),this._ggxMaterial=dy(a,e,t)}return r}_compileMaterial(e){const t=new nn(new Un,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r,a){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Zu),h.toneMapping=fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Sa,new oa({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(Zu),f=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[_],a.y,a.z)):E===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[_]));const S=this._cubeSize;jr(r,E*S,_>2?S:0,S,S),h.setRenderTarget(r),f&&h.render(g,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ar||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,g=this._sizeLods[i],m=3*g*(i>v-ji?i-v+ji:0),f=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,jr(a,m,f,3*g,2*g),r.setRenderTarget(a),r.render(o,Oa),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,jr(e,m,f,3*g,2*g),r.setRenderTarget(e),r.render(o,Oa)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*yr-1),g=a/v,m=isFinite(a)?1+Math.floor(d*g):yr;m>yr&&it(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const f=[];let y=0;for(let A=0;A<yr;++A){const D=A/g,M=Math.exp(-D*D/2);f.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const E=this._sizeLods[r],S=3*E*(r>_-ji?r-_+ji:0),T=4*(this._cubeSize-E);jr(t,S,T,3*E,2*E),l.setRenderTarget(t),l.render(h,Oa)}}function cy(n){const e=[],t=[],i=[];let r=n;const a=n-ji+1+Ku.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-ji?l=Ku[s-n+ji-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,g=3,m=2,f=1,y=new Float32Array(g*v*p),_=new Float32Array(m*v*p),E=new Float32Array(f*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,D=T>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(M,g*v*T),_.set(u,m*v*T);const w=[T,T,T,T,T,T];E.set(w,f*v*T)}const S=new Un;S.setAttribute("position",new pi(y,g)),S.setAttribute("uv",new pi(_,m)),S.setAttribute("faceIndex",new pi(E,f)),i.push(new nn(S,null)),r>ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qu(n,e,t){const i=new Tn(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dy(n,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function uy(n,e,t){const i=new Float32Array(yr),r=new V(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function eh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function th(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function hy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mc||l===vc,d=l===Ar||l===ra;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ju(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new Ju(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function fy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qa("WebGLRenderer: "+i+" extension not supported."),r}}}function py(n,e,t,i){const r={},a=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete r[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let _=0,E=y.length;_<E;_+=3){const S=y[_+0],T=y[_+1],A=y[_+2];u.push(S,T,T,A,A,S)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,E=y.length/3-1;_<E;_+=3){const S=_+0,T=_+1,A=_+2;u.push(S,T,T,A,A,S)}}else return;const m=new(Kf(u)?tp:ep)(u,1);m.version=g;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function my(n,e,t){let i;function r(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){n.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,v){v!==0&&(n.drawElementsInstanced(i,p,a,u*s,v),t.update(p,i,v))}function d(u,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,i,1)}function h(u,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,g,0,v);let f=0;for(let y=0;y<v;y++)f+=p[y]*g[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:gt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gy(n,e,t){const i=new WeakMap,r=new Ht;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let w=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let S=o.attributes.position.count*E,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*T*4*h),D=new Zf(A,S,T,h);D.type=ci,D.needsUpdate=!0;const M=E*4;for(let P=0;P<h;P++){const N=f[P],B=y[P],$=_[P],z=S*T*4*P;for(let W=0;W<N.count;W++){const G=W*M;v===!0&&(r.fromBufferAttribute(N,W),A[z+G+0]=r.x,A[z+G+1]=r.y,A[z+G+2]=r.z,A[z+G+3]=0),g===!0&&(r.fromBufferAttribute(B,W),A[z+G+4]=r.x,A[z+G+5]=r.y,A[z+G+6]=r.z,A[z+G+7]=0),m===!0&&(r.fromBufferAttribute($,W),A[z+G+8]=r.x,A[z+G+9]=r.y,A[z+G+10]=r.z,A[z+G+11]=$.itemSize===4?r.w:1)}}u={count:h,texture:D,size:new $e(S,T)},i.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function xy(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const _y={[Uf]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[Bf]:"ACES_FILMIC_TONE_MAPPING",[zf]:"AGX_TONE_MAPPING",[Hf]:"NEUTRAL_TONE_MAPPING",[kf]:"CUSTOM_TONE_MAPPING"};function by(n,e,t,i,r){const a=new Tn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new Tn(e,t,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),o=new Un;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const l=new dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new nn(o,l),d=new Od(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,g=null,m=[],f=!1;this.setSize=function(y,_){a.setSize(y,_),s.setSize(y,_);for(let E=0;E<m.length;E++){const S=m[E];S.setSize&&S.setSize(y,_)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const _=a.width,E=a.height;for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(_,E)}},this.begin=function(y,_){if(p||y.toneMapping===fi&&m.length===0)return!1;if(g=_,_!==null){const E=_.width,S=_.height;(a.width!==E||a.height!==S)&&this.setSize(E,S)}return f===!1&&y.setRenderTarget(a),v=y.toneMapping,y.toneMapping=fi,!0},this.hasRenderPass=function(){return f},this.end=function(y,_){y.toneMapping=v,p=!0;let E=a,S=s;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(y,S,E,_),A.needsSwap!==!1)){const D=E;E=S,S=D}}if(h!==y.outputColorSpace||u!==y.toneMapping){h=y.outputColorSpace,u=y.toneMapping,l.defines={},xt.getTransfer(h)===Tt&&(l.defines.SRGB_TRANSFER="");const T=_y[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(c,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const dp=new xn,Qc=new es(1,1),up=new Zf,hp=new Gg,fp=new rp,nh=[],ih=[],rh=new Float32Array(16),ah=new Float32Array(9),sh=new Float32Array(4);function Ma(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=nh[r];if(a===void 0&&(a=new Float32Array(r),nh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;sh.set(i),n.uniformMatrix2fv(this.addr,!1,sh),Kt(t,i)}}function Ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;ah.set(i),n.uniformMatrix3fv(this.addr,!1,ah),Kt(t,i)}}function Ay(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;rh.set(i),n.uniformMatrix4fv(this.addr,!1,rh),Kt(t,i)}}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Ly(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Fy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Qc.compareFunction=t.isReversedDepthBuffer()?Ad:Td,a=Qc):a=dp,t.setTexture2D(e||a,r)}function Oy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hp,r)}function By(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fp,r)}function ky(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||up,r)}function zy(n){switch(n){case 5126:return yy;case 35664:return Sy;case 35665:return My;case 35666:return Ey;case 35674:return wy;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return ky}}function Hy(n,e){n.uniform1fv(this.addr,e)}function Gy(n,e){const t=Ma(e,this.size,2);n.uniform2fv(this.addr,t)}function Vy(n,e){const t=Ma(e,this.size,3);n.uniform3fv(this.addr,t)}function Wy(n,e){const t=Ma(e,this.size,4);n.uniform4fv(this.addr,t)}function Xy(n,e){const t=Ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $y(n,e){const t=Ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qy(n,e){const t=Ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yy(n,e){n.uniform1iv(this.addr,e)}function jy(n,e){n.uniform2iv(this.addr,e)}function Ky(n,e){n.uniform3iv(this.addr,e)}function Zy(n,e){n.uniform4iv(this.addr,e)}function Jy(n,e){n.uniform1uiv(this.addr,e)}function Qy(n,e){n.uniform2uiv(this.addr,e)}function eS(n,e){n.uniform3uiv(this.addr,e)}function tS(n,e){n.uniform4uiv(this.addr,e)}function nS(n,e,t){const i=this.cache,r=e.length,a=Vo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=Qc:s=dp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function iS(n,e,t){const i=this.cache,r=e.length,a=Vo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||hp,a[s])}function rS(n,e,t){const i=this.cache,r=e.length,a=Vo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||fp,a[s])}function aS(n,e,t){const i=this.cache,r=e.length,a=Vo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||up,a[s])}function sS(n){switch(n){case 5126:return Hy;case 35664:return Gy;case 35665:return Vy;case 35666:return Wy;case 35674:return Xy;case 35675:return $y;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return jy;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}}class lS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class cS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function oh(n,e){n.seq.push(e),n.map[e.id]=e}function dS(n,e,t){const i=n.name,r=i.length;for(Gl.lastIndex=0;;){const a=Gl.exec(i),s=Gl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){oh(t,c===void 0?new oS(o,n,e):new lS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new cS(o),oh(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);dS(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uS=37297;let hS=0;function fS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const ch=new st;function pS(n){xt._getMatrix(ch,xt.workingColorSpace,n);const e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+fS(n.getShaderSource(e),o)}else return a}function mS(n,e){const t=pS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vS={[Uf]:"Linear",[Ff]:"Reinhard",[Of]:"Cineon",[Bf]:"ACESFilmic",[zf]:"AgX",[Hf]:"Neutral",[kf]:"Custom"};function gS(n,e){const t=vS[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new V;function xS(){xt.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function bS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Va(n){return n!==""}function uh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(n){return n.replace(SS,ES)}const MS=new Map;function ES(n,e){let t=ot[e];if(t===void 0){const i=MS.get(e);if(i!==void 0)t=ot[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ed(t)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(n){return n.replace(wS,TS)}function TS(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ph(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const AS={[Js]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function RS(n){return AS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CS={[Ar]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function PS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":CS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IS={[ra]:"ENVMAP_MODE_REFRACTION"};function LS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DS={[xd]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[Eg]:"ENVMAP_BLENDING_ADD"};function NS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":DS[n.combine]||"ENVMAP_BLENDING_NONE"}function US(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FS(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=RS(t),c=PS(t),d=LS(t),h=NS(t),u=US(t),p=_S(t),v=bS(a),g=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Va).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Va).join(`
`),f.length>0&&(f+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),f=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?ot.tonemapping_pars_fragment:"",t.toneMapping!==fi?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),s=ed(s),s=uh(s,t),s=hh(s,t),o=ed(o),o=uh(o,t),o=hh(o,t),s=fh(s),o=fh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+s,E=y+f+o,S=lh(r,r.VERTEX_SHADER,_),T=lh(r,r.FRAGMENT_SHADER,E);r.attachShader(g,S),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(S)||"",$=r.getShaderInfoLog(T)||"",z=N.trim(),W=B.trim(),G=$.trim();let Z=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,S,T);else{const ie=dh(r,S,"vertex"),le=dh(r,T,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ie+`
`+le)}else z!==""?it("WebGLProgram: Program Info Log:",z):(W===""||G==="")&&(se=!1);se&&(P.diagnostics={runnable:Z,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(S),r.deleteShader(T),D=new io(r,g),M=yS(r,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,uS)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let OS=0;class BS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kS(e),t.set(e,i)),i}}class kS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function zS(n,e,t,i,r,a,s){const o=new Pd,l=new BS,c=new Set,d=[],h=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,P,N,B){const $=N.fog,z=B.geometry,W=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),Z=G&&G.mapping===Ho?G.image.height:null,se=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=ie!==void 0?ie.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let Ie,We,Ze,J;if(se){const rt=oi[se];Ie=rt.vertexShader,We=rt.fragmentShader}else Ie=M.vertexShader,We=M.fragmentShader,l.update(M),Ze=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const ne=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,Xe=!!M.map,ht=!!M.matcap,Ke=!!G,Je=!!M.aoMap,tt=!!M.lightMap,ze=!!M.bumpMap,ct=!!M.normalMap,U=!!M.displacementMap,De=!!M.emissiveMap,Le=!!M.metalnessMap,we=!!M.roughnessMap,te=M.anisotropy>0,L=M.clearcoat>0,b=M.dispersion>0,F=M.iridescence>0,Y=M.sheen>0,Q=M.transmission>0,j=te&&!!M.anisotropyMap,_e=L&&!!M.clearcoatMap,ce=L&&!!M.clearcoatNormalMap,Ee=L&&!!M.clearcoatRoughnessMap,He=F&&!!M.iridescenceMap,re=F&&!!M.iridescenceThicknessMap,fe=Y&&!!M.sheenColorMap,Me=Y&&!!M.sheenRoughnessMap,Re=!!M.specularMap,he=!!M.specularColorMap,Qe=!!M.specularIntensityMap,O=Q&&!!M.transmissionMap,me=Q&&!!M.thicknessMap,de=!!M.gradientMap,Se=!!M.alphaMap,oe=M.alphaTest>0,ee=!!M.alphaHash,ae=!!M.extensions;let Fe=fi;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const nt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:We,defines:M.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:sa,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:ht,envMap:Ke,envMapMode:Ke&&G.mapping,envMapCubeUVHeight:Z,aoMap:Je,lightMap:tt,bumpMap:ze,normalMap:ct,displacementMap:U,emissiveMap:De,normalMapObjectSpace:ct&&M.normalMapType===Ag,normalMapTangentSpace:ct&&M.normalMapType===wd,metalnessMap:Le,roughnessMap:we,anisotropy:te,anisotropyMap:j,clearcoat:L,clearcoatMap:_e,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:b,iridescence:F,iridescenceMap:He,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Me,specularMap:Re,specularColorMap:he,specularIntensityMap:Qe,transmission:Q,transmissionMap:O,thicknessMap:me,gradientMap:de,opaque:M.transparent===!1&&M.blending===Zr&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:ee,combine:M.combine,mapUv:Xe&&g(M.map.channel),aoMapUv:Je&&g(M.aoMap.channel),lightMapUv:tt&&g(M.lightMap.channel),bumpMapUv:ze&&g(M.bumpMap.channel),normalMapUv:ct&&g(M.normalMap.channel),displacementMapUv:U&&g(M.displacementMap.channel),emissiveMapUv:De&&g(M.emissiveMap.channel),metalnessMapUv:Le&&g(M.metalnessMap.channel),roughnessMapUv:we&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:_e&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(M.sheenRoughnessMap.channel),specularMapUv:Re&&g(M.specularMap.channel),specularColorMapUv:he&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:O&&g(M.transmissionMap.channel),thicknessMapUv:me&&g(M.thicknessMap.channel),alphaMapUv:Se&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ct||te),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Xe||Se),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===Tt,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(w,M),_(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const w=v[M.type];let P;if(w){const N=oi[w];P=Eo.clone(N.uniforms)}else P=M.uniforms;return P}function S(M,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new FS(n,w,M,a),d.push(P),h.set(w,P)),P}function T(M){if(--M.usedTimes===0){const w=d.indexOf(M);d[w]=d[d.length-1],d.pop(),h.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:D}}function HS(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function GS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,u,p,v,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,u,p,v,g,m){const f=s(h,u,p,v,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,u,p,v,g,m){const f=s(h,u,p,v,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||GS),i.length>1&&i.sort(u||mh),r.length>1&&r.sort(u||mh)}function d(){for(let h=e,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function VS(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new vh,n.set(i,[s])):r>=a.length?(s=new vh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function WS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $S=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YS(n){const e=new WS,t=XS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,a=new kt,s=new kt;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,y=0,_=0,E=0,S=0,T=0,A=0;c.sort(qS);for(let M=0,w=c.length;M<w;M++){const P=c[M],N=P.color,B=P.intensity,$=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===aa?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*B,h+=N.g*B,u+=N.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],B);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[g]=W;const G=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,G.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[g]=G.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=z,E++}g++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const G=P.shadow,Z=t.get(P);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[v]=Z,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=W,v++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==E||D.numSpotMaps!==S||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,D.directionalLength=p,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=E,D.numSpotMaps=S,D.numLightProbes=A,i.version=$S++)}function l(c,d){let h=0,u=0,p=0,v=0,g=0;const m=d.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const _=c[f];if(_.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(_.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),s.identity(),a.copy(_.matrixWorld),a.premultiply(m),s.extractRotation(a),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function gh(n){const e=new YS(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function jS(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new gh(n),e.set(r,[o])):a>=s.length?(o=new gh(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
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
}`,JS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],QS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],xh=new kt,Ba=new V,Vl=new V;function e1(n,e,t){let i=new Ld;const r=new $e,a=new $e,s=new Ht,o=new fx,l=new px,c={},d=t.maxTextureSize,h={[nr]:wn,[wn]:nr,[zn]:zn},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:KS,fragmentShader:ZS}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let f=this.type;this.render=function(T,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===rg&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Js);const M=n.getRenderTarget(),w=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&A.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=T.length;$<z;$++){const W=T[$],G=W.shadow;if(G===void 0){it("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Z=G.getFrameExtents();if(r.multiply(Z),a.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/Z.x),r.x=a.x*Z.x,G.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/Z.y),r.y=a.y*Z.y,G.mapSize.y=a.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ha){if(W.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Tn(r.x,r.y,{format:aa,type:Nn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new es(r.x,r.y,ci),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Li,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn}else{W.isPointLight?(G.map=new ap(r.x),G.map.depthTexture=new cx(r.x,xi)):(G.map=new Tn(r.x,r.y),G.map.depthTexture=new es(r.x,r.y,xi)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Li;const ie=n.state.buffers.depth.getReversed();this.type===Js?(G.map.depthTexture.compareFunction=ie?Ad:Td,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn)}G.camera.updateProjectionMatrix()}const se=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<se;ie++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(G.map),n.clear());const le=G.getViewport(ie);s.set(a.x*le.x,a.y*le.y,a.x*le.z,a.y*le.w),N.viewport(s)}if(W.isPointLight){const le=G.camera,Ae=G.matrix,Ie=W.distance||le.far;Ie!==le.far&&(le.far=Ie,le.updateProjectionMatrix()),Ba.setFromMatrixPosition(W.matrixWorld),le.position.copy(Ba),Vl.copy(le.position),Vl.add(JS[ie]),le.up.copy(QS[ie]),le.lookAt(Vl),le.updateMatrixWorld(),Ae.makeTranslation(-Ba.x,-Ba.y,-Ba.z),xh.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xh,le.coordinateSystem,le.reversedDepth)}else G.updateMatrices(W);i=G.getFrustum(),E(A,D,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===Ha&&y(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,P)};function y(T,A){const D=e.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Tn(r.x,r.y,{format:aa,type:Nn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,D,u,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,D,p,g,null)}function _(T,A,D,M){let w=null;const P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)w=P;else if(w=D.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=w.uuid,B=A.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let z=$[B];z===void 0&&(z=w.clone(),$[B]=z,A.addEventListener("dispose",S)),w=z}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Ha?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=n.properties.get(w);N.light=D}return w}function E(T,A,D,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ha)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const B=e.update(T),$=T.material;if(Array.isArray($)){const z=B.groups;for(let W=0,G=z.length;W<G;W++){const Z=z[W],se=$[Z.materialIndex];if(se&&se.visible){const ie=_(T,se,M,w);T.onBeforeShadow(n,T,A,D,B,ie,Z),n.renderBufferDirect(D,null,B,ie,T,Z),T.onAfterShadow(n,T,A,D,B,ie,Z)}}}else if($.visible){const z=_(T,$,M,w);T.onBeforeShadow(n,T,A,D,B,z,null),n.renderBufferDirect(D,null,B,z,T,null),T.onAfterShadow(n,T,A,D,B,z,null)}}const N=T.children;for(let B=0,$=N.length;B<$;B++)E(N[B],A,D,M,w)}function S(T){T.target.removeEventListener("dispose",S);for(const D in c){const M=c[D],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const t1={[lc]:cc,[dc]:fc,[uc]:pc,[ia]:hc,[cc]:lc,[fc]:dc,[pc]:uc,[hc]:ia};function n1(n,e){function t(){let O=!1;const me=new Ht;let de=null;const Se=new Ht(0,0,0,0);return{setMask:function(oe){de!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){O=oe},setClear:function(oe,ee,ae,Fe,nt){nt===!0&&(oe*=Fe,ee*=Fe,ae*=Fe),me.set(oe,ee,ae,Fe),Se.equals(me)===!1&&(n.clearColor(oe,ee,ae,Fe),Se.copy(me))},reset:function(){O=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,me=!1,de=null,Se=null,oe=null;return{setReversed:function(ee){if(me!==ee){const ae=e.get("EXT_clip_control");ee?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),me=ee;const Fe=oe;oe=null,this.setClear(Fe)}},getReversed:function(){return me},setTest:function(ee){ee?ne(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ee){de!==ee&&!O&&(n.depthMask(ee),de=ee)},setFunc:function(ee){if(me&&(ee=t1[ee]),Se!==ee){switch(ee){case lc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case ia:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ee}},setLocked:function(ee){O=ee},setClear:function(ee){oe!==ee&&(me&&(ee=1-ee),n.clearDepth(ee),oe=ee)},reset:function(){O=!1,de=null,Se=null,oe=null,me=!1}}}function r(){let O=!1,me=null,de=null,Se=null,oe=null,ee=null,ae=null,Fe=null,nt=null;return{setTest:function(rt){O||(rt?ne(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!O&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,Nt,qt){(de!==rt||Se!==Nt||oe!==qt)&&(n.stencilFunc(rt,Nt,qt),de=rt,Se=Nt,oe=qt)},setOp:function(rt,Nt,qt){(ee!==rt||ae!==Nt||Fe!==qt)&&(n.stencilOp(rt,Nt,qt),ee=rt,ae=Nt,Fe=qt)},setLocked:function(rt){O=rt},setClear:function(rt){nt!==rt&&(n.clearStencil(rt),nt=rt)},reset:function(){O=!1,me=null,de=null,Se=null,oe=null,ee=null,ae=null,Fe=null,nt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,y=null,_=null,E=null,S=null,T=null,A=new et(0,0,0),D=0,M=!1,w=null,P=null,N=null,B=null,$=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=G>=2);let se=null,ie={};const le=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Ie=new Ht().fromArray(le),We=new Ht().fromArray(Ae);function Ze(O,me,de,Se){const oe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(O,ee),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<de;ae++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(me+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ee}const J={};J[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),s.setFunc(ia),ze(!1),ct(bu),ne(n.CULL_FACE),Je(hi);function ne(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function pe(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function ke(O,me){return h[O]!==me?(n.bindFramebuffer(O,me),h[O]=me,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function ge(O,me){let de=p,Se=!1;if(O){de=u.get(me),de===void 0&&(de=[],u.set(me,de));const oe=O.textures;if(de.length!==oe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ae=oe.length;ee<ae;ee++)de[ee]=n.COLOR_ATTACHMENT0+ee;de.length=oe.length,Se=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Se=!0);Se&&n.drawBuffers(de)}function Xe(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const ht={[br]:n.FUNC_ADD,[sg]:n.FUNC_SUBTRACT,[og]:n.FUNC_REVERSE_SUBTRACT};ht[lg]=n.MIN,ht[cg]=n.MAX;const Ke={[dg]:n.ZERO,[ug]:n.ONE,[hg]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[xg]:n.SRC_ALPHA_SATURATE,[vg]:n.DST_COLOR,[pg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[oc]:n.ONE_MINUS_SRC_ALPHA,[gg]:n.ONE_MINUS_DST_COLOR,[mg]:n.ONE_MINUS_DST_ALPHA,[_g]:n.CONSTANT_COLOR,[bg]:n.ONE_MINUS_CONSTANT_COLOR,[yg]:n.CONSTANT_ALPHA,[Sg]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(O,me,de,Se,oe,ee,ae,Fe,nt,rt){if(O===hi){g===!0&&(pe(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),O!==ag){if(O!==m||rt!==M){if((f!==br||E!==br)&&(n.blendEquation(n.FUNC_ADD),f=br,E=br),rt)switch(O){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFunc(n.ONE,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",O);break}else switch(O){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yu:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",O);break}y=null,_=null,S=null,T=null,A.set(0,0,0),D=0,m=O,M=rt}return}oe=oe||me,ee=ee||de,ae=ae||Se,(me!==f||oe!==E)&&(n.blendEquationSeparate(ht[me],ht[oe]),f=me,E=oe),(de!==y||Se!==_||ee!==S||ae!==T)&&(n.blendFuncSeparate(Ke[de],Ke[Se],Ke[ee],Ke[ae]),y=de,_=Se,S=ee,T=ae),(Fe.equals(A)===!1||nt!==D)&&(n.blendColor(Fe.r,Fe.g,Fe.b,nt),A.copy(Fe),D=nt),m=O,M=!1}function tt(O,me){O.side===zn?pe(n.CULL_FACE):ne(n.CULL_FACE);let de=O.side===wn;me&&(de=!de),ze(de),O.blending===Zr&&O.transparent===!1?Je(hi):Je(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){w!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),w=O)}function ct(O){O!==ng?(ne(n.CULL_FACE),O!==P&&(O===bu?n.cullFace(n.BACK):O===ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=O}function U(O){O!==N&&(W&&n.lineWidth(O),N=O)}function De(O,me,de){O?(ne(n.POLYGON_OFFSET_FILL),(B!==me||$!==de)&&(n.polygonOffset(me,de),B=me,$=de)):pe(n.POLYGON_OFFSET_FILL)}function Le(O){O?ne(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function we(O){O===void 0&&(O=n.TEXTURE0+z-1),se!==O&&(n.activeTexture(O),se=O)}function te(O,me,de){de===void 0&&(se===null?de=n.TEXTURE0+z-1:de=se);let Se=ie[de];Se===void 0&&(Se={type:void 0,texture:void 0},ie[de]=Se),(Se.type!==O||Se.texture!==me)&&(se!==de&&(n.activeTexture(de),se=de),n.bindTexture(O,me||J[O]),Se.type=O,Se.texture=me)}function L(){const O=ie[se];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function Y(){try{n.texSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function ce(){try{n.texStorage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function He(){try{n.texImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function re(){try{n.texImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function fe(O){Ie.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ie.copy(O))}function Me(O){We.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),We.copy(O))}function Re(O,me){let de=c.get(me);de===void 0&&(de=new WeakMap,c.set(me,de));let Se=de.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(me,O.name),de.set(O,Se))}function he(O,me){const Se=c.get(me).get(O);l.get(me)!==Se&&(n.uniformBlockBinding(me,Se,O.__bindingPointIndex),l.set(me,Se))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},se=null,ie={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,y=null,_=null,E=null,S=null,T=null,A=new et(0,0,0),D=0,M=!1,w=null,P=null,N=null,B=null,$=null,Ie.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ne,disable:pe,bindFramebuffer:ke,drawBuffers:ge,useProgram:Xe,setBlending:Je,setMaterial:tt,setFlipSided:ze,setCullFace:ct,setLineWidth:U,setPolygonOffset:De,setScissorTest:Le,activeTexture:we,bindTexture:te,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:F,texImage2D:He,texImage3D:re,updateUBOMapping:Re,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:_e,scissor:fe,viewport:Me,reset:Qe}}function i1(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,b){return p?new OffscreenCanvas(L,b):Mo("canvas")}function g(L,b,F){let Y=1;const Q=te(L);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(Y*Q.width),_e=Math.floor(Y*Q.height);h===void 0&&(h=v(j,_e));const ce=b?v(j,_e):h;return ce.width=j,ce.height=_e,ce.getContext("2d").drawImage(L,0,0,j,_e),it("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+_e+")."),ce}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){n.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(L,b,F,Y,Q=!1){if(L!==null){if(n[L]!==void 0)return n[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=b;if(b===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),b===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){const _e=Q?yo:xt.getTransfer(Y);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=_e===Tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(L,b){let F;return L?b===null||b===xi||b===Ja?F=n.DEPTH24_STENCIL8:b===ci?F=n.DEPTH32F_STENCIL8:b===Za&&(F=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xi||b===Ja?F=n.DEPTH_COMPONENT24:b===ci?F=n.DEPTH_COMPONENT32F:b===Za&&(F=n.DEPTH_COMPONENT16),F}function S(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==tn&&L.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function T(L){const b=L.target;b.removeEventListener("dispose",T),D(b),b.isVideoTexture&&d.delete(b)}function A(L){const b=L.target;b.removeEventListener("dispose",A),w(b)}function D(L){const b=i.get(L);if(b.__webglInit===void 0)return;const F=L.source,Y=u.get(F);if(Y){const Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(L),Object.keys(Y).length===0&&u.delete(F)}i.remove(L)}function M(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const F=L.source,Y=u.get(F);delete Y[b.__cacheKey],s.memory.textures--}function w(L){const b=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)n.deleteFramebuffer(b.__webglFramebuffer[Y]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=L.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const j=i.get(F[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(F[Y])}i.remove(L)}let P=0;function N(){P=0}function B(){const L=P;return L>=r.maxTextures&&it("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),P+=1,L}function $(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function z(L,b){const F=i.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const Y=L.image;if(Y===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,L,b);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+b)}function W(L,b){const F=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){J(F,L,b);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+b)}function G(L,b){const F=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){J(F,L,b);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+b)}function Z(L,b){const F=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){ne(F,L,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+b)}const se={[gc]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},ie={[tn]:n.NEAREST,[wg]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},le={[Rg]:n.NEVER,[Dg]:n.ALWAYS,[Cg]:n.LESS,[Td]:n.LEQUAL,[Pg]:n.EQUAL,[Ad]:n.GEQUAL,[Ig]:n.GREATER,[Lg]:n.NOTEQUAL};function Ae(L,b){if(b.type===ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===hl||b.magFilter===Rs||b.magFilter===Sr||b.minFilter===cn||b.minFilter===hl||b.minFilter===Rs||b.minFilter===Sr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,se[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,se[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,se[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ie[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Rs&&b.minFilter!==Sr||b.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(L,b){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",T));const Y=b.source;let Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));const j=$(b);if(j!==L.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[j].usedTimes++;const _e=Q[L.__cacheKey];_e!==void 0&&(Q[L.__cacheKey].usedTimes--,_e.usedTimes===0&&M(b)),L.__cacheKey=j,L.__webglTexture=Q[j].texture}return F}function We(L,b,F){return Math.floor(Math.floor(L/F)/b)}function Ze(L,b,F,Y){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,F,Y,b.data);else{j.sort((re,fe)=>re.start-fe.start);let _e=0;for(let re=1;re<j.length;re++){const fe=j[_e],Me=j[re],Re=fe.start+fe.count,he=We(Me.start,b.width,4),Qe=We(fe.start,b.width,4);Me.start<=Re+1&&he===Qe&&We(Me.start+Me.count-1,b.width,4)===he?fe.count=Math.max(fe.count,Me.start+Me.count-fe.start):(++_e,j[_e]=Me)}j.length=_e+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),He=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let re=0,fe=j.length;re<fe;re++){const Me=j[re],Re=Math.floor(Me.start/4),he=Math.ceil(Me.count/4),Qe=Re%b.width,O=Math.floor(Re/b.width),me=he,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Qe,O,me,de,F,Y,b.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,He)}}function J(L,b,F){let Y=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Ie(L,b),j=b.source;t.bindTexture(Y,L.__webglTexture,n.TEXTURE0+F);const _e=i.get(j);if(j.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const ce=xt.getPrimaries(xt.workingColorSpace),Ee=b.colorSpace===$i?null:xt.getPrimaries(b.colorSpace),He=b.colorSpace===$i||ce===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let re=g(b.image,!1,r.maxTextureSize);re=we(b,re);const fe=a.convert(b.format,b.colorSpace),Me=a.convert(b.type);let Re=_(b.internalFormat,fe,Me,b.colorSpace,b.isVideoTexture);Ae(Y,b);let he;const Qe=b.mipmaps,O=b.isVideoTexture!==!0,me=_e.__version===void 0||Q===!0,de=j.dataReady,Se=S(b,re);if(b.isDepthTexture)Re=E(b.format===Mr,b.type),me&&(O?t.texStorage2D(n.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,fe,Me,null));else if(b.isDataTexture)if(Qe.length>0){O&&me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,Qe[0].width,Qe[0].height);for(let oe=0,ee=Qe.length;oe<ee;oe++)he=Qe[oe],O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,he.width,he.height,fe,Me,he.data):t.texImage2D(n.TEXTURE_2D,oe,Re,he.width,he.height,0,fe,Me,he.data);b.generateMipmaps=!1}else O?(me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,re.width,re.height),de&&Ze(b,re,fe,Me)):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,fe,Me,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Re,Qe[0].width,Qe[0].height,re.depth);for(let oe=0,ee=Qe.length;oe<ee;oe++)if(he=Qe[oe],b.format!==Jn)if(fe!==null)if(O){if(de)if(b.layerUpdates.size>0){const ae=ju(he.width,he.height,b.format,b.type);for(const Fe of b.layerUpdates){const nt=he.data.subarray(Fe*ae/he.data.BYTES_PER_ELEMENT,(Fe+1)*ae/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Fe,he.width,he.height,1,fe,nt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,re.depth,fe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Re,he.width,he.height,re.depth,0,he.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,he.width,he.height,re.depth,fe,Me,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Re,he.width,he.height,re.depth,0,fe,Me,he.data)}else{O&&me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,Qe[0].width,Qe[0].height);for(let oe=0,ee=Qe.length;oe<ee;oe++)he=Qe[oe],b.format!==Jn?fe!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Re,he.width,he.height,0,he.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,he.width,he.height,fe,Me,he.data):t.texImage2D(n.TEXTURE_2D,oe,Re,he.width,he.height,0,fe,Me,he.data)}else if(b.isDataArrayTexture)if(O){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Re,re.width,re.height,re.depth),de)if(b.layerUpdates.size>0){const oe=ju(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const ae=re.data.subarray(ee*oe/re.data.BYTES_PER_ELEMENT,(ee+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,fe,Me,ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Me,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,fe,Me,re.data);else if(b.isData3DTexture)O?(me&&t.texStorage3D(n.TEXTURE_3D,Se,Re,re.width,re.height,re.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Me,re.data)):t.texImage3D(n.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,fe,Me,re.data);else if(b.isFramebufferTexture){if(me)if(O)t.texStorage2D(n.TEXTURE_2D,Se,Re,re.width,re.height);else{let oe=re.width,ee=re.height;for(let ae=0;ae<Se;ae++)t.texImage2D(n.TEXTURE_2D,ae,Re,oe,ee,0,fe,Me,null),oe>>=1,ee>>=1}}else if(Qe.length>0){if(O&&me){const oe=te(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Se,Re,oe.width,oe.height)}for(let oe=0,ee=Qe.length;oe<ee;oe++)he=Qe[oe],O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,fe,Me,he):t.texImage2D(n.TEXTURE_2D,oe,Re,fe,Me,he);b.generateMipmaps=!1}else if(O){if(me){const oe=te(re);t.texStorage2D(n.TEXTURE_2D,Se,Re,oe.width,oe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Me,re)}else t.texImage2D(n.TEXTURE_2D,0,Re,fe,Me,re);m(b)&&f(Y),_e.__version=j.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ne(L,b,F){if(b.image.length!==6)return;const Y=Ie(L,b),Q=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+F);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const _e=xt.getPrimaries(xt.workingColorSpace),ce=b.colorSpace===$i?null:xt.getPrimaries(b.colorSpace),Ee=b.colorSpace===$i||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!He&&!re?fe[ee]=g(b.image[ee],!0,r.maxCubemapSize):fe[ee]=re?b.image[ee].image:b.image[ee],fe[ee]=we(b,fe[ee]);const Me=fe[0],Re=a.convert(b.format,b.colorSpace),he=a.convert(b.type),Qe=_(b.internalFormat,Re,he,b.colorSpace),O=b.isVideoTexture!==!0,me=j.__version===void 0||Y===!0,de=Q.dataReady;let Se=S(b,Me);Ae(n.TEXTURE_CUBE_MAP,b);let oe;if(He){O&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Qe,Me.width,Me.height);for(let ee=0;ee<6;ee++){oe=fe[ee].mipmaps;for(let ae=0;ae<oe.length;ae++){const Fe=oe[ae];b.format!==Jn?Re!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,0,0,Fe.width,Fe.height,Re,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,Qe,Fe.width,Fe.height,0,Fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,0,0,Fe.width,Fe.height,Re,he,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,Qe,Fe.width,Fe.height,0,Re,he,Fe.data)}}}else{if(oe=b.mipmaps,O&&me){oe.length>0&&Se++;const ee=te(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Re,he,fe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,fe[ee].width,fe[ee].height,0,Re,he,fe[ee].data);for(let ae=0;ae<oe.length;ae++){const nt=oe[ae].image[ee].image;O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,0,0,nt.width,nt.height,Re,he,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,Qe,nt.width,nt.height,0,Re,he,nt.data)}}else{O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,he,fe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Re,he,fe[ee]);for(let ae=0;ae<oe.length;ae++){const Fe=oe[ae];O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,0,0,Re,he,Fe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,Qe,Re,he,Fe.image[ee])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pe(L,b,F,Y,Q,j){const _e=a.convert(F.format,F.colorSpace),ce=a.convert(F.type),Ee=_(F.internalFormat,_e,ce,F.colorSpace),He=i.get(b),re=i.get(F);if(re.__renderTarget=b,!He.__hasExternalTextures){const fe=Math.max(1,b.width>>j),Me=Math.max(1,b.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Ee,fe,Me,b.depth,0,_e,ce,null):t.texImage2D(Q,j,Ee,fe,Me,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),De(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,re.__webglTexture,0,U(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,re.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(L,b,F){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer){const Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=E(b.stencilBuffer,Q),_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(b),j,b.width,b.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(b),j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,L)}else{const Y=b.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],_e=a.convert(j.format,j.colorSpace),ce=a.convert(j.type),Ee=_(j.internalFormat,_e,ce,j.colorSpace);De(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(b),Ee,b.width,b.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(b),Ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(L,b,F){const Y=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,b.depthTexture);const He=a.convert(b.depthTexture.format),re=a.convert(b.depthTexture.type);let fe;b.depthTexture.format===Li?fe=n.DEPTH_COMPONENT24:b.depthTexture.format===Mr&&(fe=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,fe,b.width,b.height,0,He,re,null)}}else z(b.depthTexture,0);const j=Q.__webglTexture,_e=U(b),ce=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ee=b.depthTexture.format===Mr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Li)De(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,ce,j,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,ce,j,0);else if(b.depthTexture.format===Mr)De(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,ce,j,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,ce,j,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const b=i.get(L),F=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)ge(b.__webglFramebuffer[Y],L,Y);else{const Y=L.texture.mipmaps;Y&&Y.length>0?ge(b.__webglFramebuffer[0],L,0):ge(b.__webglFramebuffer,L,0)}else if(F){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[Y],L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const Y=L.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(L,b,F){const Y=i.get(L);b!==void 0&&pe(Y.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(L)}function Ke(L){const b=L.texture,F=i.get(L),Y=i.get(b);L.addEventListener("dispose",A);const Q=L.textures,j=L.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=b.version,s.memory.textures++),j){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)F.__webglFramebuffer[ce][Ee]=n.createFramebuffer()}else F.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)F.__webglFramebuffer[ce]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,Ee=Q.length;ce<Ee;ce++){const He=i.get(Q[ce]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),s.memory.textures++)}if(L.samples>0&&De(L)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const Ee=Q[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const He=a.convert(Ee.format,Ee.colorSpace),re=a.convert(Ee.type),fe=_(Ee.internalFormat,He,re,Ee.colorSpace,L.isXRRenderTarget===!0),Me=U(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,fe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)pe(F.__webglFramebuffer[ce][Ee],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else pe(F.__webglFramebuffer[ce],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(b)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ce=0,Ee=Q.length;ce<Ee;ce++){const He=Q[ce],re=i.get(He);let fe=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),Ae(fe,He),pe(F.__webglFramebuffer,L,He,n.COLOR_ATTACHMENT0+ce,fe,0),m(He)&&f(fe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Ae(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)pe(F.__webglFramebuffer[Ee],L,b,n.COLOR_ATTACHMENT0,ce,Ee);else pe(F.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,ce,0);m(b)&&f(ce),t.unbindTexture()}L.depthBuffer&&Xe(L)}function Je(L){const b=L.textures;for(let F=0,Y=b.length;F<Y;F++){const Q=b[F];if(m(Q)){const j=y(L),_e=i.get(Q).__webglTexture;t.bindTexture(j,_e),f(j),t.unbindTexture()}}}const tt=[],ze=[];function ct(L){if(L.samples>0){if(De(L)===!1){const b=L.textures,F=L.width,Y=L.height;let Q=n.COLOR_BUFFER_BIT;const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(L),ce=b.length>1;if(ce)for(let He=0;He<b.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=L.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let He=0;He<b.length;He++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[He]);const re=i.get(b[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,n.NEAREST),l===!0&&(tt.length=0,ze.length=0,tt.push(n.COLOR_ATTACHMENT0+He),L.depthBuffer&&L.resolveDepthBuffer===!1&&(tt.push(j),ze.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let He=0;He<b.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,_e.__webglColorRenderbuffer[He]);const re=i.get(b[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function U(L){return Math.min(r.maxSamples,L.samples)}function De(L){const b=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(L){const b=s.render.frame;d.get(L)!==b&&(d.set(L,b),L.update())}function we(L,b){const F=L.colorSpace,Y=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==sa&&F!==$i&&(xt.getTransfer(F)===Tt?(Y!==Jn||Q!==Ln)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",F)),b}function te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=ht,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function r1(n,e){function t(i,r=$i){let a;const s=xt.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===bd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$f)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===Za)return n.UNSIGNED_SHORT;if(i===_d)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===qf)return n.ALPHA;if(i===Yf)return n.RGB;if(i===Jn)return n.RGBA;if(i===Li)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===jf)return n.RED;if(i===Sd)return n.RED_INTEGER;if(i===aa)return n.RG;if(i===Md)return n.RG_INTEGER;if(i===Ed)return n.RGBA_INTEGER;if(i===Qs||i===eo||i===to||i===no)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_c||i===bc||i===yc||i===Sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_c)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mc||i===Ec)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tc)return a.COMPRESSED_R11_EAC;if(i===Ac)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Rc)return a.COMPRESSED_RG11_EAC;if(i===Cc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Pc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===Xc||i===$c)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Wc)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===jc||i===Kc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
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

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:a1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l1 extends ba{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const g=typeof XRWebGLBinding<"u",m=new o1,f={},y=t.getContextAttributes();let _=null,E=null;const S=[],T=[],A=new $e;let D=null;const M=new vn;M.viewport=new Ht;const w=new vn;w.viewport=new Ht;const P=[M,w],N=new gx;let B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new Ul,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new Ul,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new Ul,S[J]=ne),ne.getHandSpace()};function z(J){const ne=T.indexOf(J.inputSource);if(ne===-1)return;const pe=S[ne];pe!==void 0&&(pe.update(J.inputSource,J.frame,c||s),pe.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",G);for(let J=0;J<S.length;J++){const ne=T[J];ne!==null&&(T[J]=null,S[J].disconnect(ne))}B=null,$=null,m.reset();for(const J in f)delete f[J];e.setRenderTarget(_),p=null,u=null,h=null,r=null,E=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ke=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?Mr:Li,ke=y.stencil?Ja:xi);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Xe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Tn(u.textureWidth,u.textureHeight,{format:Jn,type:Ln,depthTexture:new es(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ne=0;ne<J.removed.length;ne++){const pe=J.removed[ne],ke=T.indexOf(pe);ke>=0&&(T[ke]=null,S[ke].disconnect(pe))}for(let ne=0;ne<J.added.length;ne++){const pe=J.added[ne];let ke=T.indexOf(pe);if(ke===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=T.length){T.push(pe),ke=Xe;break}else if(T[Xe]===null){T[Xe]=pe,ke=Xe;break}if(ke===-1)break}const ge=S[ke];ge&&ge.connect(pe)}}const Z=new V,se=new V;function ie(J,ne,pe){Z.setFromMatrixPosition(ne.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const ke=Z.distanceTo(se),ge=ne.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,ht=ge[14]/(ge[10]-1),Ke=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],tt=(ge[9]-1)/ge[5],ze=(ge[8]-1)/ge[0],ct=(Xe[8]+1)/Xe[0],U=ht*ze,De=ht*ct,Le=ke/(-ze+ct),we=Le*-ze;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(we),J.translateZ(Le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ge[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const te=ht+Le,L=Ke+Le,b=U-we,F=De+(ke-we),Y=Je*Ke/L*te,Q=tt*Ke/L*te;J.projectionMatrix.makePerspective(b,F,Y,Q,te,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,pe=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),N.near=w.near=M.near=ne,N.far=w.far=M.far=pe,(B!==N.near||$!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,$=N.far),N.layers.mask=J.layers.mask|6,M.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const ke=J.parent,ge=N.cameras;le(N,ke);for(let Xe=0;Xe<ge.length;Xe++)le(ge[Xe],ke);ge.length===2?ie(N,M,w):N.projectionMatrix.copy(M.projectionMatrix),Ae(J,N,ke)};function Ae(J,ne,pe){pe===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return f[J]};let Ie=null;function We(J,ne){if(d=ne.getViewerPose(c||s),v=ne,d!==null){const pe=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ke=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,ke=!0);for(let Ke=0;Ke<pe.length;Ke++){const Je=pe[Ke];let tt=null;if(p!==null)tt=p.getViewport(Je);else{const ct=h.getViewSubImage(u,Je);tt=ct.viewport,Ke===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let ze=P[Ke];ze===void 0&&(ze=new vn,ze.layers.enable(Ke),ze.viewport=new Ht,P[Ke]=ze),ze.matrix.fromArray(Je.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Je.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(tt.x,tt.y,tt.width,tt.height),Ke===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ke===!0&&N.cameras.push(ze)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const Ke=h.getDepthInformation(pe[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(ge&&ge.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ke=0;Ke<pe.length;Ke++){const Je=pe[Ke].camera;if(Je){let tt=f[Je];tt||(tt=new sp,f[Je]=tt);const ze=h.getCameraImage(Je);tt.sourceTexture=ze}}}}for(let pe=0;pe<S.length;pe++){const ke=T[pe],ge=S[pe];ke!==null&&ge!==void 0&&ge.update(ke,ne,c||s)}Ie&&Ie(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ze=new cp;Ze.setAnimationLoop(We),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const vr=new ei,c1=new kt;function d1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,np(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(a(m,f),v(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),g(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),_=y.envMap,E=y.envMapRotation;_&&(m.envMap.value=_,vr.copy(E),vr.x*=-1,vr.y*=-1,vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(vr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function u1(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const E=_.program;i.uniformBlockBinding(y,E)}function c(y,_){let E=r[y.id];E===void 0&&(v(y),E=d(y),r[y.id]=E,y.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(y,S);const T=e.render.frame;a[y.id]!==T&&(u(y),a[y.id]=T)}function d(y){const _=h();y.__bindingPointIndex=_;const E=n.createBuffer(),S=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=r[y.id],E=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,A=E.length;T<A;T++){const D=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,w=D.length;M<w;M++){const P=D[M];if(p(P,T,M,S)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let z=0;z<B.length;z++){const W=B[z],G=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,_,E,S){const T=y.value,A=_+"_"+E;if(S[A]===void 0)return typeof T=="number"||typeof T=="boolean"?S[A]=T:S[A]=T.clone(),!0;{const D=S[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return S[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(y){const _=y.uniforms;let E=0;const S=16;for(let A=0,D=_.length;A<D;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,P=M.length;w<P;w++){const N=M[w],B=Array.isArray(N.value)?N.value:[N.value];for(let $=0,z=B.length;$<z;$++){const W=B[$],G=g(W),Z=E%S,se=Z%G.boundary,ie=Z+se;E+=se,ie!==0&&S-ie<G.storage&&(E+=S-ie),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=G.storage}}}const T=E%S;return T>0&&(E+=S-T),y.__size=E,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const E=s.indexOf(_.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}const h1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function f1(){return si===null&&(si=new ax(h1,16,16,aa,Nn),si.name="DFG_LUT",si.minFilter=cn,si.magFilter=cn,si.wrapS=Ai,si.wrapT=Ai,si.generateMipmaps=!1,si.needsUpdate=!0),si}class kd{constructor(e={}){const{canvas:t=Ng(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const g=p,m=new Set([Ed,Md,Sd]),f=new Set([Ln,xi,Za,Ja,bd,yd]),y=new Uint32Array(4),_=new Int32Array(4);let E=null,S=null;const T=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=kn;let P=0,N=0,B=null,$=-1,z=null;const W=new Ht,G=new Ht;let Z=null;const se=new et(0);let ie=0,le=t.width,Ae=t.height,Ie=1,We=null,Ze=null;const J=new Ht(0,0,le,Ae),ne=new Ht(0,0,le,Ae);let pe=!1;const ke=new Ld;let ge=!1,Xe=!1;const ht=new kt,Ke=new V,Je=new Ht,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ct(){return B===null?Ie:1}let U=i;function De(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gd}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),U===null){const H="webgl2";if(U=De(H,C),U===null)throw De(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw gt("WebGLRenderer: "+C.message),C}let Le,we,te,L,b,F,Y,Q,j,_e,ce,Ee,He,re,fe,Me,Re,he,Qe,O,me,de,Se,oe;function ee(){Le=new fy(U),Le.init(),de=new r1(U,Le),we=new ry(U,Le,e,de),te=new n1(U,Le),we.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),L=new vy(U),b=new HS,F=new i1(U,Le,te,b,we,de,L),Y=new sy(M),Q=new hy(M),j=new bx(U),Se=new ny(U,j),_e=new py(U,j,L,Se),ce=new xy(U,_e,j,L),Qe=new gy(U,we,F),Me=new ay(b),Ee=new zS(M,Y,Q,Le,we,Se,Me),He=new d1(M,b),re=new VS,fe=new jS(Le),he=new ty(M,Y,Q,te,ce,v,l),Re=new e1(M,ce,we),oe=new u1(U,L,we,te),O=new iy(U,Le,L),me=new my(U,Le,L),L.programs=Ee.programs,M.capabilities=we,M.extensions=Le,M.properties=b,M.renderLists=re,M.shadowMap=Re,M.state=te,M.info=L}ee(),g!==Ln&&(D=new by(g,t.width,t.height,r,a));const ae=new l1(M,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(C){C!==void 0&&(Ie=C,this.setSize(le,Ae,!1))},this.getSize=function(C){return C.set(le,Ae)},this.setSize=function(C,H,K=!0){if(ae.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}le=C,Ae=H,t.width=Math.floor(C*Ie),t.height=Math.floor(H*Ie),K===!0&&(t.style.width=C+"px",t.style.height=H+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(le*Ie,Ae*Ie).floor()},this.setDrawingBufferSize=function(C,H,K){le=C,Ae=H,Ie=K,t.width=Math.floor(C*K),t.height=Math.floor(H*K),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(g===Ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,H,K,q){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,H,K,q),te.viewport(W.copy(J).multiplyScalar(Ie).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,H,K,q){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,H,K,q),te.scissor(G.copy(ne).multiplyScalar(Ie).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(C){te.setScissorTest(pe=C)},this.setOpaqueSort=function(C){We=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,K=!0){let q=0;if(C){let X=!1;if(B!==null){const ve=B.texture.format;X=m.has(ve)}if(X){const ve=B.texture.type,Te=f.has(ve),be=he.getClearColor(),Ue=he.getClearAlpha(),Be=be.r,qe=be.g,Ge=be.b;Te?(y[0]=Be,y[1]=qe,y[2]=Ge,y[3]=Ue,U.clearBufferuiv(U.COLOR,0,y)):(_[0]=Be,_[1]=qe,_[2]=Ge,_[3]=Ue,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}H&&(q|=U.DEPTH_BUFFER_BIT),K&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),he.dispose(),re.dispose(),fe.dispose(),b.dispose(),Y.dispose(),Q.dispose(),ce.dispose(),Se.dispose(),oe.dispose(),Ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Fn),ae.removeEventListener("sessionend",ri),yn.stop()};function Fe(C){C.preventDefault(),Au("WebGLRenderer: Context Lost."),w=!0}function nt(){Au("WebGLRenderer: Context Restored."),w=!1;const C=L.autoReset,H=Re.enabled,K=Re.autoUpdate,q=Re.needsUpdate,X=Re.type;ee(),L.autoReset=C,Re.enabled=H,Re.autoUpdate=K,Re.needsUpdate=q,Re.type=X}function rt(C){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nt(C){const H=C.target;H.removeEventListener("dispose",Nt),qt(H)}function qt(C){ni(C),b.remove(C)}function ni(C){const H=b.get(C).programs;H!==void 0&&(H.forEach(function(K){Ee.releaseProgram(K)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,K,q,X,ve){H===null&&(H=tt);const Te=X.isMesh&&X.matrixWorld.determinant()<0,be=Wo(C,H,K,q,X);te.setMaterial(q,Te);let Ue=K.index,Be=1;if(q.wireframe===!0){if(Ue=_e.getWireframeAttribute(K),Ue===void 0)return;Be=2}const qe=K.drawRange,Ge=K.attributes.position;let at=qe.start*Be,St=(qe.start+qe.count)*Be;ve!==null&&(at=Math.max(at,ve.start*Be),St=Math.min(St,(ve.start+ve.count)*Be)),Ue!==null?(at=Math.max(at,0),St=Math.min(St,Ue.count)):Ge!=null&&(at=Math.max(at,0),St=Math.min(St,Ge.count));const Ut=St-at;if(Ut<0||Ut===1/0)return;Se.setup(X,q,be,K,Ue);let Ft,wt=O;if(Ue!==null&&(Ft=j.get(Ue),wt=me,wt.setIndex(Ft)),X.isMesh)q.wireframe===!0?(te.setLineWidth(q.wireframeLinewidth*ct()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(X.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*ct()),X.isLineSegments?wt.setMode(U.LINES):X.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else X.isPoints?wt.setMode(U.POINTS):X.isSprite&&wt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ve=X._multiDrawStarts,bt=X._multiDrawCounts,mt=X._multiDrawCount,Ye=Ue?j.get(Ue).bytesPerElement:1,Ce=b.get(q).currentProgram.getUniforms();for(let Mt=0;Mt<mt;Mt++)Ce.setValue(U,"_gl_DrawID",Mt),wt.render(Ve[Mt]/Ye,bt[Mt])}else if(X.isInstancedMesh)wt.renderInstances(at,Ut,X.count);else if(K.isInstancedBufferGeometry){const Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bt=Math.min(K.instanceCount,Ve);wt.renderInstances(at,Ut,bt)}else wt.render(at,Ut)};function $n(C,H,K){C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=wn,C.needsUpdate=!0,Rr(C,H,K),C.side=nr,C.needsUpdate=!0,Rr(C,H,K),C.side=zn):Rr(C,H,K)}this.compile=function(C,H,K=null){K===null&&(K=C),S=fe.get(K),S.init(H),A.push(S),K.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),C!==K&&C.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();const q=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const be=ve[Te];$n(be,K,X),q.add(be)}else $n(ve,K,X),q.add(ve)}),S=A.pop(),q},this.compileAsync=function(C,H,K=null){const q=this.compile(C,H,K);return new Promise(X=>{function ve(){if(q.forEach(function(Te){b.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){X(C);return}setTimeout(ve,10)}Le.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let qn=null;function ii(C){qn&&qn(C)}function Fn(){yn.stop()}function ri(){yn.start()}const yn=new cp;yn.setAnimationLoop(ii),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(C){qn=C,ae.setAnimationLoop(C),C===null?yn.stop():yn.start()},ae.addEventListener("sessionstart",Fn),ae.addEventListener("sessionend",ri),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const K=ae.enabled===!0&&ae.isPresenting===!0,q=D!==null&&(B===null||K)&&D.begin(M,B);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,H,B),S=fe.get(C,A.length),S.init(H),A.push(S),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(ht,di,H.reversedDepth),Xe=this.localClippingEnabled,ge=Me.init(this.clippingPlanes,Xe),E=re.get(C,T.length),E.init(),T.push(E),ae.enabled===!0&&ae.isPresenting===!0){const Te=M.xr.getDepthSensingMesh();Te!==null&&ai(Te,H,-1/0,M.sortObjects)}ai(C,H,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(We,Ze),ze=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ze&&he.addToRenderList(E,C),this.info.render.frame++,ge===!0&&Me.beginShadows();const X=S.state.shadowsArray;if(Re.render(X,C,H),ge===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&D.hasRenderPass())===!1){const Te=E.opaque,be=E.transmissive;if(S.setupLights(),H.isArrayCamera){const Ue=H.cameras;if(be.length>0)for(let Be=0,qe=Ue.length;Be<qe;Be++){const Ge=Ue[Be];sr(Te,be,C,Ge)}ze&&he.render(C);for(let Be=0,qe=Ue.length;Be<qe;Be++){const Ge=Ue[Be];ar(E,C,Ge,Ge.viewport)}}else be.length>0&&sr(Te,be,C,H),ze&&he.render(C),ar(E,C,H)}B!==null&&N===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),q&&D.end(M),C.isScene===!0&&C.onAfterRender(M,C,H),Se.resetDefaultState(),$=-1,z=null,A.pop(),A.length>0?(S=A[A.length-1],ge===!0&&Me.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function ai(C,H,K,q){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){q&&Je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Te=ce.update(C),be=C.material;be.visible&&E.push(C,Te,be,K,Je.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Te=ce.update(C),be=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Je.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Je.copy(Te.boundingSphere.center)),Je.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(be)){const Ue=Te.groups;for(let Be=0,qe=Ue.length;Be<qe;Be++){const Ge=Ue[Be],at=be[Ge.materialIndex];at&&at.visible&&E.push(C,Te,at,K,Je.z,Ge)}}else be.visible&&E.push(C,Te,be,K,Je.z,null)}}const ve=C.children;for(let Te=0,be=ve.length;Te<be;Te++)ai(ve[Te],H,K,q)}function ar(C,H,K,q){const{opaque:X,transmissive:ve,transparent:Te}=C;S.setupLightsView(K),ge===!0&&Me.setGlobalState(M.clippingPlanes,K),q&&te.viewport(W.copy(q)),X.length>0&&Ui(X,H,K),ve.length>0&&Ui(ve,H,K),Te.length>0&&Ui(Te,H,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function sr(C,H,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const at=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Tn(1,1,{generateMipmaps:!0,type:at?Nn:Ln,minFilter:Sr,samples:we.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const ve=S.state.transmissionRenderTarget[q.id],Te=q.viewport||W;ve.setSize(Te.z*M.transmissionResolutionScale,Te.w*M.transmissionResolutionScale);const be=M.getRenderTarget(),Ue=M.getActiveCubeFace(),Be=M.getActiveMipmapLevel();M.setRenderTarget(ve),M.getClearColor(se),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),M.clear(),ze&&he.render(K);const qe=M.toneMapping;M.toneMapping=fi;const Ge=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ge===!0&&Me.setGlobalState(M.clippingPlanes,q),Ui(C,K,q),F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve),Le.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let St=0,Ut=H.length;St<Ut;St++){const Ft=H[St],{object:wt,geometry:Ve,material:bt,group:mt}=Ft;if(bt.side===zn&&wt.layers.test(q.layers)){const Ye=bt.side;bt.side=wn,bt.needsUpdate=!0,ps(wt,K,q,Ve,bt,mt),bt.side=Ye,bt.needsUpdate=!0,at=!0}}at===!0&&(F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve))}M.setRenderTarget(be,Ue,Be),M.setClearColor(se,ie),Ge!==void 0&&(q.viewport=Ge),M.toneMapping=qe}function Ui(C,H,K){const q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ve=C.length;X<ve;X++){const Te=C[X],{object:be,geometry:Ue,group:Be}=Te;let qe=Te.material;qe.allowOverride===!0&&q!==null&&(qe=q),be.layers.test(K.layers)&&ps(be,H,K,Ue,qe,Be)}}function ps(C,H,K,q,X,ve){C.onBeforeRender(M,H,K,q,X,ve),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(M,H,K,q,C,ve),X.transparent===!0&&X.side===zn&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,M.renderBufferDirect(K,H,q,X,C,ve),X.side=nr,X.needsUpdate=!0,M.renderBufferDirect(K,H,q,X,C,ve),X.side=zn):M.renderBufferDirect(K,H,q,X,C,ve),C.onAfterRender(M,H,K,q,X,ve)}function Rr(C,H,K){H.isScene!==!0&&(H=tt);const q=b.get(C),X=S.state.lights,ve=S.state.shadowsArray,Te=X.state.version,be=Ee.getParameters(C,X.state,ve,H,K),Ue=Ee.getProgramCacheKey(be);let Be=q.programs;q.environment=C.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(C.isMeshStandardMaterial?Q:Y).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",Nt),Be=new Map,q.programs=Be);let qe=Be.get(Ue);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Te)return Ea(C,be),qe}else be.uniforms=Ee.getUniforms(C),C.onBeforeCompile(be,M),qe=Ee.acquireProgram(be,Ue),Be.set(Ue,qe),q.uniforms=be.uniforms;const Ge=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),Ea(C,be),q.needsLights=$o(C),q.lightsStateVersion=Te,q.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function ms(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=io.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Ea(C,H){const K=b.get(C);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Wo(C,H,K,q,X){H.isScene!==!0&&(H=tt),F.resetTextureUnits();const ve=H.fog,Te=q.isMeshStandardMaterial?H.environment:null,be=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:sa,Ue=(q.isMeshStandardMaterial?Q:Y).get(q.envMap||Te),Be=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,St=!!K.morphAttributes.color;let Ut=fi;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const Ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,wt=Ft!==void 0?Ft.length:0,Ve=b.get(q),bt=S.state.lights;if(ge===!0&&(Xe===!0||C!==z)){const Ct=C===z&&q.id===$;Me.setState(q,C,Ct)}let mt=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==bt.state.version||Ve.outputColorSpace!==be||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Ue||q.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Me.numPlanes||Ve.numIntersection!==Me.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==qe||Ve.morphTargets!==Ge||Ve.morphNormals!==at||Ve.morphColors!==St||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==wt)&&(mt=!0):(mt=!0,Ve.__version=q.version);let Ye=Ve.currentProgram;mt===!0&&(Ye=Rr(q,H,X));let Ce=!1,Mt=!1,zt=!1;const lt=Ye.getUniforms(),Rt=Ve.uniforms;if(te.useProgram(Ye.program)&&(Ce=!0,Mt=!0,zt=!0),q.id!==$&&($=q.id,Mt=!0),Ce||z!==C){te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",C.projectionMatrix),lt.setValue(U,"viewMatrix",C.matrixWorldInverse);const Pt=lt.map.cameraPosition;Pt!==void 0&&Pt.setValue(U,Ke.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&lt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,Mt=!0,zt=!0)}if(Ve.needsLights&&(bt.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",bt.state.directionalShadowMap,F),bt.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",bt.state.spotShadowMap,F),bt.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",bt.state.pointShadowMap,F)),X.isSkinnedMesh){lt.setOptional(U,X,"bindMatrix"),lt.setOptional(U,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(U,"boneTexture",Ct.boneTexture,F))}X.isBatchedMesh&&(lt.setOptional(U,X,"batchingTexture"),lt.setValue(U,"batchingTexture",X._matricesTexture,F),lt.setOptional(U,X,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",X._indirectTexture,F),lt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",X._colorsTexture,F));const Ot=K.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&Qe.update(X,K,Ye),(Mt||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,lt.setValue(U,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Rt.envMap.value=Ue,Rt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Rt.envMapIntensity.value=H.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=f1()),Mt&&(lt.setValue(U,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&Xo(Rt,zt),ve&&q.fog===!0&&He.refreshFogUniforms(Rt,ve),He.refreshMaterialUniforms(Rt,q,Ie,Ae,S.state.transmissionRenderTarget[C.id]),io.upload(U,ms(Ve),Rt,F)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(io.upload(U,ms(Ve),Rt,F),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&lt.setValue(U,"center",X.center),lt.setValue(U,"modelViewMatrix",X.modelViewMatrix),lt.setValue(U,"normalMatrix",X.normalMatrix),lt.setValue(U,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ct=q.uniformsGroups;for(let Pt=0,Sn=Ct.length;Pt<Sn;Pt++){const en=Ct[Pt];oe.update(en,Ye),oe.bind(en,Ye)}}return Ye}function Xo(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function $o(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,H,K){const q=b.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=H,b.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const K=b.get(C);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const vs=U.createFramebuffer();this.setRenderTarget=function(C,H=0,K=0){B=C,P=H,N=K;let q=null,X=!1,ve=!1;if(C){const be=b.get(C);if(be.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),W.copy(C.viewport),G.copy(C.scissor),Z=C.scissorTest,te.viewport(W),te.scissor(G),te.setScissorTest(Z),$=-1;return}else if(be.__webglFramebuffer===void 0)F.setupRenderTarget(C);else if(be.__hasExternalTextures)F.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&b.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Be=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?q=Be[H][K]:q=Be[H],X=!0):C.samples>0&&F.useMultisampledRTT(C)===!1?q=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?q=Be[K]:q=Be,W.copy(C.viewport),G.copy(C.scissor),Z=C.scissorTest}else W.copy(J).multiplyScalar(Ie).floor(),G.copy(ne).multiplyScalar(Ie).floor(),Z=pe;if(K!==0&&(q=vs),te.bindFramebuffer(U.FRAMEBUFFER,q)&&te.drawBuffers(C,q),te.viewport(W),te.scissor(G),te.setScissorTest(Z),X){const be=b.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,K)}else if(ve){const be=H;for(let Ue=0;Ue<C.textures.length;Ue++){const Be=b.get(C.textures[Ue]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,K,be)}}else if(C!==null&&K!==0){const be=b.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,K)}$=-1},this.readRenderTargetPixels=function(C,H,K,q,X,ve,Te,be=0){if(!(C&&C.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){te.bindFramebuffer(U.FRAMEBUFFER,Ue);try{const Be=C.textures[be],qe=Be.format,Ge=Be.type;if(!we.textureFormatReadable(qe)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ge)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-q&&K>=0&&K<=C.height-X&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(H,K,q,X,de.convert(qe),de.convert(Ge),ve))}finally{const Be=B!==null?b.get(B).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,H,K,q,X,ve,Te,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue)if(H>=0&&H<=C.width-q&&K>=0&&K<=C.height-X){te.bindFramebuffer(U.FRAMEBUFFER,Ue);const Be=C.textures[be],qe=Be.format,Ge=Be.type;if(!we.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(H,K,q,X,de.convert(qe),de.convert(Ge),0);const St=B!==null?b.get(B).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,St);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ug(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer(at),U.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,K=0){const q=Math.pow(2,-K),X=Math.floor(C.image.width*q),ve=Math.floor(C.image.height*q),Te=H!==null?H.x:0,be=H!==null?H.y:0;F.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Te,be,X,ve),te.unbindTexture()};const gs=U.createFramebuffer(),qo=U.createFramebuffer();this.copyTextureToTexture=function(C,H,K=null,q=null,X=0,ve=null){ve===null&&(X!==0?(Qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=X,X=0):ve=0);let Te,be,Ue,Be,qe,Ge,at,St,Ut;const Ft=C.isCompressedTexture?C.mipmaps[ve]:C.image;if(K!==null)Te=K.max.x-K.min.x,be=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,qe=K.min.y,Ge=K.isBox3?K.min.z:0;else{const Ot=Math.pow(2,-X);Te=Math.floor(Ft.width*Ot),be=Math.floor(Ft.height*Ot),C.isDataArrayTexture?Ue=Ft.depth:C.isData3DTexture?Ue=Math.floor(Ft.depth*Ot):Ue=1,Be=0,qe=0,Ge=0}q!==null?(at=q.x,St=q.y,Ut=q.z):(at=0,St=0,Ut=0);const wt=de.convert(H.format),Ve=de.convert(H.type);let bt;H.isData3DTexture?(F.setTexture3D(H,0),bt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(F.setTexture2DArray(H,0),bt=U.TEXTURE_2D_ARRAY):(F.setTexture2D(H,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const mt=U.getParameter(U.UNPACK_ROW_LENGTH),Ye=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ce=U.getParameter(U.UNPACK_SKIP_PIXELS),Mt=U.getParameter(U.UNPACK_SKIP_ROWS),zt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const lt=C.isDataArrayTexture||C.isData3DTexture,Rt=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const Ot=b.get(C),Ct=b.get(H),Pt=b.get(Ot.__renderTarget),Sn=b.get(Ct.__renderTarget);te.bindFramebuffer(U.READ_FRAMEBUFFER,Pt.__webglFramebuffer),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let en=0;en<Ue;en++)lt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(C).__webglTexture,X,Ge+en),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,b.get(H).__webglTexture,ve,Ut+en)),U.blitFramebuffer(Be,qe,Te,be,at,St,Te,be,U.DEPTH_BUFFER_BIT,U.NEAREST);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||b.has(C)){const Ot=b.get(C),Ct=b.get(H);te.bindFramebuffer(U.READ_FRAMEBUFFER,gs),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,qo);for(let Pt=0;Pt<Ue;Pt++)lt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,X,Ge+Pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,X),Rt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,ve,Ut+Pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,ve),X!==0?U.blitFramebuffer(Be,qe,Te,be,at,St,Te,be,U.COLOR_BUFFER_BIT,U.NEAREST):Rt?U.copyTexSubImage3D(bt,ve,at,St,Ut+Pt,Be,qe,Te,be):U.copyTexSubImage2D(bt,ve,at,St,Be,qe,Te,be);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(bt,ve,at,St,Ut,Te,be,Ue,wt,Ve,Ft.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,ve,at,St,Ut,Te,be,Ue,wt,Ft.data):U.texSubImage3D(bt,ve,at,St,Ut,Te,be,Ue,wt,Ve,Ft):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,at,St,Te,be,wt,Ve,Ft.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,at,St,Ft.width,Ft.height,wt,Ft.data):U.texSubImage2D(U.TEXTURE_2D,ve,at,St,Te,be,wt,Ve,Ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ye),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt),ve===0&&H.generateMipmaps&&U.generateMipmap(bt),te.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&F.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?F.setTextureCube(C,0):C.isData3DTexture?F.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?F.setTexture2DArray(C,0):F.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const p1=new Od(-1,1,1,-1,0,1);class m1 extends Un{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const v1=new m1;class pp{constructor(e){this._mesh=new nn(v1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,p1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class g1 extends fs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eo.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _h extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class x1 extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new g1(ro),this.copyPass.material.blending=hi,this.clock=new Bd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(s instanceof _h?i=!0:s instanceof x1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b1 extends fs{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new et}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const y1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ca extends fs{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(a,s,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Tn(a,s,{type:Nn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new Tn(a,s,{type:Nn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),s=Math.round(s/2)}const o=y1;this.highPassUniforms=Eo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new $e(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Eo.clone(ro.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,premultipliedAlpha:!0,blending:ac,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new et,this._oldClearAlpha=1,this._basic=new oa,this._fsQuad=new pp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new $e(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ca.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ca.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ca.BlurDirectionX=new $e(1,0);ca.BlurDirectionY=new $e(0,1);var S1=Pe('<canvas class="fixed inset-0 w-full h-full pointer-events-none z-0" style="background-color: #000000;"></canvas>');function M1(n,e){Lt(e,!1);let t=pt(),i,r,a,s,o,l;const c={void:new et("#000000"),purple:new et("#240046"),cyan:new et("#003F4C")};ti(()=>{if(!I(t)||navigator.webdriver)return;let h=!1,u,p;const v=new xx,g=new $e,m=()=>{!a||!i||!o||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight))},f=y=>{if(!p||!a||!s)return;g.x=y.clientX/window.innerWidth*2-1,g.y=-(y.clientY/window.innerHeight)*2+1,v.setFromCamera(g,a);const _=v.intersectObject(p);if(_.length>0){const E=_[0].uv;E&&(s.uniforms.uHover.value.set(E.x,E.y),s.uniforms.uHoverState.value=1)}else s.uniforms.uHoverState.value=0};return requestAnimationFrame(()=>{if(h)return;r=new Id,r.background=c.void,a=new vn(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(0,-10,10),a.lookAt(0,0,0),i=new kd({canvas:I(t),antialias:!0,alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),u=new hs(60,60,128,128),s=new rn({wireframe:!0,uniforms:{uTime:{value:0},uColorStart:{value:new et("#5a189a")},uColorEnd:{value:new et("#00b4d8")},uHover:{value:new $e(.5,.5)},uHoverState:{value:0}},vertexShader:`
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
          `,transparent:!0,side:zn}),p=new nn(u,s),p.rotation.x=-Math.PI/2-.4,r.add(p);const y=new b1(r,a),_=new ca(new $e(window.innerWidth,window.innerHeight),.2,.5,.2);o=new _1(i),o.addPass(y),o.addPass(_);const E=new Bd,S=()=>{l=requestAnimationFrame(S);const T=E.getElapsedTime();s.uniforms.uTime.value=T;const A=window.scrollY;p&&(p.rotation.x=-Math.PI/2-.4-A*2e-4),o.render()};S(),window.addEventListener("resize",m),window.addEventListener("mousemove",f)}),()=>{h=!0,window.removeEventListener("resize",m),window.removeEventListener("mousemove",f),l&&cancelAnimationFrame(l),u&&u.dispose(),s&&s.dispose(),i&&i.dispose(),o&&o.dispose()}}),Gt();var d=S1();Qr(d,h=>Oe(t,h),()=>I(t)),ue(n,d),Dt()}var E1=Pe("<button> </button>"),w1=Pe('<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs"></div>');function td(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(tr,"$locale",t),a=()=>dn(Xn,"$t",t),s=pt(),o=[{code:"en",name:"English"},{code:"pt",name:"Português"}];let l=_r(e,"only",8,void 0);function c(h){o0(tr,h),localStorage.setItem("preferred-locale",h)}Qi(()=>mo(l()),()=>{Oe(s,l()?o.filter(h=>l().includes(h.code)):o)}),ma(),Gt();var d=w1();Wt(d,5,()=>I(s),Qt,(h,u)=>{var p=E1(),v=x(p);je(g=>{xe(p,"aria-label",g),Ne(p,1,`hover:text-accent transition-colors duration-200 ${I(u).code===r()?"text-accent border-b border-accent active":"text-white/50"}`),k(v,I(u).name)},[()=>a()("common.change_language",{values:{name:I(u).name}})],Et),Vt("click",p,()=>c(I(u).code)),ue(h,p)}),ue(n,d),Dt(),i()}const mp="https://sized-wonder-burner-juice.trycloudflare.com",nd="Quintuple9-Verse7-Outmatch4-Daintily2-Affidavit2",T1=!0,Ji=as({enabled:T1,natsOk:null,streamsOnline:0,streamsTotal:0,engineRunning:!1,btcPrice:0,btcOI:0,btcFunding:0,btcNextFunding:0,btcUpdatedAt:0,recentLiqs:[],latestWhaleLiq:null});let Wa=[],id=[],vp,Ao=!1,rd=!1;function A1(n){return n.replace(/^https/,"wss").replace(/^http/,"ws")}async function bh(){try{const e=await(await fetch(`${mp}/api/health`,{headers:nd?{Authorization:`Bearer ${nd}`}:{}})).json();Ji.update(t=>({...t,natsOk:e.status==="ok",engineRunning:e.status==="ok"}))}catch{Ji.update(n=>({...n,natsOk:!1,engineRunning:!1}))}}function ao(n,e){if(Ao)return;const t=`?token=${encodeURIComponent(nd)}`,i=new WebSocket(`${A1(mp)}${n}${t}`);Wa.push(i),i.onmessage=r=>{try{e(JSON.parse(r.data))}catch{}},i.onclose=()=>{if(Wa=Wa.filter(r=>r!==i),!Ao){const r=setTimeout(()=>ao(n,e),4e3);id.push(r)}}}function R1(){rd||(rd=!0,Ao=!1,ao("/ws/status",n=>{const e=n;Ji.update(t=>{let i=t.streamsOnline;return e.status==="connected"?i++:e.status==="disconnected"&&(i=Math.max(0,i-1)),{...t,streamsOnline:i,streamsTotal:Math.max(t.streamsTotal,i,1)}})}),ao("/ws/market_status",n=>{const e=n;e.symbol==="BTCUSDT"&&Ji.update(t=>({...t,btcPrice:e.mark??0,btcOI:e.oi??0,btcFunding:e.funding??0,btcNextFunding:e.next_funding??0,btcUpdatedAt:Date.now()}))}),ao("/ws/liquidations",n=>{var t;const e=n;(t=e.symbol)!=null&&t.startsWith("BTC")&&Ji.update(i=>{const r=[e,...i.recentLiqs].slice(0,6),a=e.usd_value>=1e4;return{...i,recentLiqs:r,latestWhaleLiq:a?e:i.latestWhaleLiq}})}),bh(),vp=setInterval(bh,3e4))}function C1(){Ao=!0,rd=!1,Wa.forEach(n=>n.close()),Wa=[],id.forEach(clearTimeout),id=[],clearInterval(vp)}var P1=Pe('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]"></span>',1),I1=Pe('<span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>'),L1=Pe('<span class="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>'),D1=Pe('<div class="absolute right-0 mt-3 w-60 origin-top-right rounded-sm border border-white/10 bg-black/90 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-l-2 border-l-accent z-50 text-xs space-y-3"><div class="font-bold text-[9px] text-white/40 tracking-[0.2em] uppercase border-b border-white/5 pb-2">:: TELEMETRY DIAGNOSTICS</div> <div class="space-y-2.5"><div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">NATS Cluster</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Data Streams</span> <span class="font-bold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Ark Engine</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Secure Tunnel</span> <span> </span></div></div> <div class="border-t border-white/5 pt-2 flex items-center justify-between text-[9px] text-white/30 font-mono"><span>HOST: VPS-NEXUS-01</span> <span>v1.2.4</span></div></div>'),N1=Pe('<div class="relative inline-block text-left font-mono pointer-events-auto"><button class="flex items-center gap-2 focus:outline-none cursor-pointer group" aria-label="Toggle telemetry details"><div class="relative flex h-2 w-2"><!></div> <span class="text-xs transition-colors duration-300 text-white/50 group-hover:text-accent font-semibold uppercase tracking-wider"><!></span> <span class="text-[9px] text-white/30 group-hover:text-white/60 transition-transform duration-200 block">▼</span></button> <!></div>');function yh(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Ji,"$telemetry",t);let a=pt(!1),s=pt();function o(){Oe(a,!I(a))}function l(){Oe(a,!1)}function c(p){I(a)&&I(s)&&!I(s).contains(p.target)&&l()}ti(()=>(document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)})),Gt();var d=ga(),h=Gn(d);{var u=p=>{var v=N1(),g=x(v),m=x(g),f=x(m);{var y=P=>{var N=P1();ue(P,N)},_=(P,N)=>{{var B=z=>{var W=I1();ue(z,W)},$=z=>{var W=L1();ue(z,W)};dt(P,z=>{r().natsOk===!1?z(B):z($,!1)},N)}};dt(f,P=>{r().natsOk===!0?P(y):P(_,!1)})}var E=R(m,2),S=x(E);{var T=P=>{var N=Ci("SYSTEMS ACTIVE");ue(P,N)},A=(P,N)=>{{var B=z=>{var W=Ci("OFFLINE");ue(z,W)},$=z=>{var W=Ci("CONNECTING...");ue(z,W)};dt(P,z=>{r().natsOk===!1?z(B):z($,!1)},N)}};dt(S,P=>{r().natsOk===!0?P(T):P(A,!1)})}var D=R(E,2),M=R(g,2);{var w=P=>{var N=D1(),B=R(x(N),2),$=x(B),z=R(x($),2),W=x(z),G=R($,2),Z=R(x(G),2),se=x(Z),ie=R(G,2),le=R(x(ie),2),Ae=x(le),Ie=R(ie,2),We=R(x(Ie),2),Ze=x(We);je(()=>{Ne(z,1,`font-bold ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),k(W,r().natsOk===!0?"ONLINE":r().natsOk===!1?"OFFLINE":"CONNECTING"),k(se,r().streamsOnline>0?`${r().streamsOnline} / ${r().streamsTotal} ACTIVE`:"—"),Ne(le,1,`font-bold ${r().engineRunning?"text-[#00FF94]":"text-white/40"}`),k(Ae,r().engineRunning?"RUNNING":"STANDBY"),Ne(We,1,`font-bold ${r().natsOk!==null?"text-[#00FF94]":"text-white/40"}`),k(Ze,r().natsOk!==null?"ENCRYPTED":"—")}),ue(P,N)};dt(M,P=>{I(a)&&P(w)})}Qr(v,P=>Oe(s,P),()=>I(s)),je(()=>ui(D,`transform: ${I(a)?"rotate(180deg)":"rotate(0)"}`)),Vt("click",g,o),ue(p,v)};dt(h,p=>{r().enabled&&p(u)})}ue(n,d),Dt(),i()}var U1=Pe('<section id="hero" class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"><div class="absolute top-24 md:top-8 left-1/2 -translate-x-1/2 z-20"><!></div> <div class="hidden md:flex absolute top-8 right-8 items-center gap-6 font-mono text-xs"><a href="#/ark-streams" class="text-white/40 hover:text-[#00F0FF] transition-colors duration-300 tracking-widest">[ TECH TALK ]</a> <a href="#/relatorios" class="text-white/40 hover:text-accent transition-colors duration-300 tracking-widest"> </a> <!></div> <div class="md:hidden absolute top-8 z-20"><!></div> <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto"><h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient-nexus leading-none drop-shadow-lg"> </h1> <h2 class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"><!></h2> <div class="flex flex-col md:flex-row gap-4"><button class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-accent tracking-wider"> </span></button> <a href="#/ark-streams" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-[#00F0FF]/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-[#00F0FF] tracking-wider text-center"> </span></a></div></div></section>');function F1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t),a=()=>{var P;(P=document.getElementById("philosophy"))==null||P.scrollIntoView({behavior:"smooth"})};Gt();var s=U1(),o=x(s),l=x(o);td(l,{});var c=R(o,2),d=R(x(c),2),h=x(d),u=R(d,2);yh(u,{});var p=R(c,2),v=x(p);yh(v,{});var g=R(p,2),m=x(g),f=x(m),y=R(m,2),_=x(y);ln(_,()=>r()("hero.subtitle").replace("&","&<br />"));var E=R(y,2),S=x(E),T=R(x(S),2),A=x(T),D=R(S,2),M=R(x(D),2),w=x(M);je((P,N,B,$)=>{k(h,P),k(f,N),k(A,B),k(w,$)},[()=>r()("nav.reports"),()=>r()("hero.title"),()=>r()("hero.cta"),()=>r()("hero.cta_ark")],Et),Vt("click",S,a),ue(n,s),Dt(),i()}var O1=Pe('<section id="philosophy" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start relative z-10"><div class="sticky top-32"><h3 class="text-xl font-mono text-accent mb-2"> </h3> <div class="h-1 w-12 bg-accent/30"></div></div> <div class="space-y-12 bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"><p class="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans"><!></p> <div class="space-y-6 font-mono text-sm md:text-base text-secondary"><div class="flex gap-4"><span class="text-accent">[01]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[02]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[03]</span> <p><strong class="text-white"> </strong> </p></div></div></div></div></section>');function B1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);Gt();var a=O1(),s=x(a),o=x(s),l=x(o),c=x(l),d=R(o,2),h=x(d),u=x(h);ln(u,()=>r()("philosophy.hero_text"));var p=R(h,2),v=x(p),g=R(x(v),2),m=x(g),f=x(m),y=R(m),_=R(v,2),E=R(x(_),2),S=x(E),T=x(S),A=R(S),D=R(_,2),M=R(x(D),2),w=x(M),P=x(w),N=R(w);je((B,$,z,W,G,Z,se)=>{k(c,B),k(f,`${$??""}:`),k(y,` ${z??""}`),k(T,`${W??""}:`),k(A,` ${G??""}`),k(P,`${Z??""}:`),k(N,` ${se??""}`)},[()=>r()("philosophy.title"),()=>r()("philosophy.p1.title"),()=>r()("philosophy.p1.text"),()=>r()("philosophy.p2.title"),()=>r()("philosophy.p2.text"),()=>r()("philosophy.p3.title"),()=>r()("philosophy.p3.text")],Et),ue(n,a),Dt(),i()}var k1=Pe('<section id="stack" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ PYTHON ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Python</span> <span class="border border-white/10 px-2 py-1">Pandas</span> <span class="border border-white/10 px-2 py-1">Freqtrade</span> <span class="border border-white/10 px-2 py-1">SciPy</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ GO / NATS JETSTREAM ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Go</span> <span class="border border-white/10 px-2 py-1">NATS</span> <span class="border border-white/10 px-2 py-1">Wails</span> <span class="border border-white/10 px-2 py-1">Svelte</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ NATS JETSTREAM / KV BUCKETS ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">JetStream</span> <span class="border border-white/10 px-2 py-1">KV Store</span> <span class="border border-white/10 px-2 py-1">Audit Trail</span> <span class="border border-white/10 px-2 py-1">Compliance</span></div></div></div></div></section>');function z1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);Gt();var a=k1(),s=x(a),o=x(s),l=x(o),c=R(o,2),d=x(c),h=R(x(d),2),u=x(h),p=R(h,2),v=x(p),g=R(d,2),m=R(x(g),2),f=x(m),y=R(m,2),_=x(y),E=R(g,2),S=R(x(E),2),T=x(S),A=R(S,2),D=x(A);je((M,w,P,N,B,$,z)=>{k(l,M),k(u,w),k(v,P),k(f,N),k(_,B),k(T,$),k(D,z)},[()=>r()("stack.title"),()=>r()("stack.card1.title"),()=>r()("stack.card1.text"),()=>r()("stack.card2.title"),()=>r()("stack.card2.text"),()=>r()("stack.card3.title"),()=>r()("stack.card3.text")],Et),ue(n,a),Dt(),i()}var H1=Pe('<section id="evolution" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="relative"><div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div> <div class="space-y-12 md:space-y-24"><div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] mb-8 md:mb-0"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 transition-all duration-300 rounded-sm"><div class="font-mono text-accent text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform"></div> <div class="md:w-[45%] hidden md:block"></div></div> <div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] hidden md:block"></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_#00F0FF]"></div> <div class="md:w-[45%]"><div class="bg-black/60 backdrop-blur-md border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/40 transition-all duration-300 rounded-sm"><div class="font-mono text-[#00F0FF] text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div></div></div></div></div></section>');function G1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);Gt();var a=H1(),s=x(a),o=x(s),l=x(o),c=R(o,2),d=R(x(c),2),h=x(d),u=x(h),p=x(u),v=x(p),g=x(v),m=R(v,2),f=x(m),y=R(m,2),_=x(y),E=R(y,2),S=x(E),T=R(h,2),A=R(x(T),4),D=x(A),M=x(D),w=x(M),P=R(M,2),N=x(P),B=R(P,2),$=x(B),z=R(B,2),W=x(z);je((G,Z,se,ie,le,Ae,Ie,We,Ze)=>{k(l,G),k(g,Z),k(f,se),k(_,ie),k(S,le),k(w,Ae),k(N,Ie),k($,We),k(W,Ze)},[()=>r()("evolution.title"),()=>r()("evolution.phase1.period"),()=>r()("evolution.phase1.name"),()=>r()("evolution.phase1.tech"),()=>r()("evolution.phase1.description"),()=>r()("evolution.phase2.period"),()=>r()("evolution.phase2.name"),()=>r()("evolution.phase2.tech"),()=>r()("evolution.phase2.description")],Et),ue(n,a),Dt(),i()}var V1=Pe('<div class="font-mono font-bold text-white tracking-tight" style="font-size: clamp(2rem, 5vw, 3rem)"> </div>'),W1=Pe('<div class="font-mono text-white/20 text-4xl">——————</div>'),X1=Pe('<div class="mt-auto border-t border-white/10 pt-4"><div class="font-mono text-xs text-white/35 tracking-wider">ark-streams · bitget</div></div>'),$1=Pe("<span> </span>"),q1=Pe('<div class="mt-3 border border-white/10 bg-black/40 rounded-sm px-5 py-4"><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-3">BTC LIQUIDAÇÕES RECENTES</div> <div class="flex flex-wrap gap-x-6 gap-y-2"></div></div>'),Y1=Pe('<section id="metrics" class="py-24 px-4 bg-transparent"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: LIVE TELEMETRY</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center gap-2"><div></div> <span> </span></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-3"><div class="md:col-span-2 border border-accent/30 bg-black/80 p-6 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.08)]"><div class="flex items-start justify-between mb-5"><div><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">BTC / USDT · PERPETUAL</div> <!></div> <div class="flex items-center gap-2 pt-1"><div></div> <span class="font-mono text-xs text-white/50 tracking-widest">LIVE</span></div></div> <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-5"><div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Open Interest</div> <div class="font-mono text-base font-semibold text-white/90"> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Funding Rate</div> <div> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Next Funding</div> <div class="font-mono text-base font-semibold text-white/70"> </div></div></div></div> <div class="border border-white/15 bg-black/60 p-6 rounded-sm flex flex-col gap-5"><div class="font-mono text-xs text-white/50 tracking-widest uppercase">SYSTEM</div> <div class="space-y-4"><div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">NATS</span> <span> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">STREAMS</span> <span class="font-mono text-sm font-semibold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">ENGINE</span> <span> </span></div></div> <!></div></div> <!></div></section>');function j1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Ji,"$telemetry",t),a=pt(),s=pt();function o(g){return g.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function l(g){const m=g*100;return`${m>=0?"+":""}${m.toFixed(4)}%`}function c(g){return g>=1e6?`${(g/1e6).toFixed(2)}M`:g>=1e3?`${(g/1e3).toFixed(0)}K`:g.toFixed(0)}function d(g){return g>=1e6?`$${(g/1e6).toFixed(1)}M`:g>=1e3?`$${(g/1e3).toFixed(0)}K`:`$${g.toFixed(0)}`}function h(g){if(!g)return"—";const m=g-Date.now();if(m<=0)return"now";const f=Math.floor(m/36e5),y=Math.floor(m%36e5/6e4);return f>0?`${f}h ${y}m`:`${y}m`}Qi(()=>r(),()=>{Oe(a,r().btcFunding>0)}),Qi(()=>r(),()=>{Oe(s,r().btcUpdatedAt>0&&Date.now()-r().btcUpdatedAt<6e4)}),ma(),Gt();var u=ga(),p=Gn(u);{var v=g=>{var m=Y1(),f=x(m),y=x(f),_=R(x(y),4),E=x(_),S=R(E,2),T=x(S),A=R(y,2),D=x(A),M=x(D),w=x(M),P=R(x(w),2);{var N=we=>{var te=V1(),L=x(te);je(b=>k(L,`$${b??""}`),[()=>o(r().btcPrice)],Et),ue(we,te)},B=we=>{var te=W1();ue(we,te)};dt(P,we=>{r().btcPrice>0?we(N):we(B,!1)})}var $=R(w,2),z=x($),W=R(M,2),G=x(W),Z=R(x(G),2),se=x(Z),ie=R(G,2),le=R(x(ie),2),Ae=x(le),Ie=R(ie,2),We=R(x(Ie),2),Ze=x(We),J=R(D,2),ne=R(x(J),2),pe=x(ne),ke=R(x(pe),2),ge=x(ke),Xe=R(pe,2),ht=R(x(Xe),2),Ke=x(ht),Je=R(Xe,2),tt=R(x(Je),2),ze=x(tt),ct=R(ne,2);{var U=we=>{var te=X1();ue(we,te)};dt(ct,we=>{r().btcUpdatedAt>0&&we(U)})}var De=R(A,2);{var Le=we=>{var te=q1(),L=R(x(te),2);Wt(L,5,()=>r().recentLiqs,Qt,(b,F)=>{var Y=$1(),Q=x(Y);je(j=>{Ne(Y,1,`font-mono text-sm font-semibold ${I(F).side==="buy"||I(F).side==="BUY"?"text-rose-400":"text-emerald-400"}`),k(Q,`${I(F).side==="buy"||I(F).side==="BUY"?"▼":"▲"} ${j??""}`)},[()=>d(I(F).usd_value)],Et),ue(b,Y)}),ue(we,te)};dt(De,we=>{r().recentLiqs.length>0&&we(Le)})}je((we,te,L)=>{Ne(E,1,`w-2 h-2 rounded-full ${r().natsOk===!0?"bg-[#00FF94] animate-pulse":r().natsOk===!1?"bg-rose-400":"bg-white/30"}`),Ne(S,1,`text-sm ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),k(T,r().natsOk===!0?"CONNECTED":r().natsOk===!1?"OFFLINE":"…"),Ne(z,1,`w-2 h-2 rounded-full ${I(s)?"bg-accent animate-pulse":"bg-white/20"}`),k(se,we),Ne(le,1,`font-mono text-base font-semibold ${r().btcFunding!==0?I(a)?"text-rose-400":"text-emerald-400":"text-white/50"}`),k(Ae,te),k(Ze,L),Ne(ke,1,`font-mono text-sm font-bold ${r().natsOk===!0?"text-emerald-400":r().natsOk===!1?"text-rose-400":"text-white/40"}`),k(ge,r().natsOk===!0?"OK":r().natsOk===!1?"FAIL":"—"),k(Ke,r().streamsOnline>0?`${r().streamsOnline}/${r().streamsTotal}`:"—"),Ne(tt,1,`font-mono text-sm font-bold ${r().engineRunning?"text-emerald-400":"text-white/40"}`),k(ze,r().engineRunning?"RUNNING":"—")},[()=>r().btcOI>0?c(r().btcOI):"—",()=>r().btcFunding!==0?l(r().btcFunding):"—",()=>h(r().btcNextFunding)],Et),ue(g,m)};dt(p,g=>{r().enabled&&g(v)})}ue(n,u),Dt(),i()}var K1=Pe('<footer class="py-12 px-4 border-t border-white/5 text-center bg-transparent"><div class="font-mono text-xs text-secondary space-y-6"><div class="flex justify-center gap-8 flex-wrap"><a href="https://linkedin.com/company/nexus-quant" aria-label="LinkedIn" class="hover:text-accent transition-colors duration-300">[ LINKEDIN ]</a> <a href="https://github.com/nexus-quantitative" aria-label="GitHub" class="hover:text-accent transition-colors duration-300">[ GITHUB ]</a> <a href="#/relatorios" aria-label="Relatórios Operacionais" class="hover:text-accent transition-colors duration-300">[ RELATÓRIOS ]</a></div> <div class="h-px w-12 bg-white/10 mx-auto"></div> <div class="opacity-40 font-sans tracking-wide"> <br> </div></div></footer>');function Z1(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t),a=new Date().getFullYear();Gt();var s=K1(),o=x(s),l=R(x(o),4),c=x(l),d=R(c,2);je((h,u)=>{k(c,h),k(d,` ${u??""}`)},[()=>r()("footer.rights",{values:{year:a}}),()=>r()("footer.location")],Et),ue(n,s),Dt(),i()}var J1=va('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-red-500 svelte-1sg11vv"><circle cx="12" cy="12" r="10" class="svelte-1sg11vv"></circle><line x1="15" y1="9" x2="9" y2="15" class="svelte-1sg11vv"></line><line x1="9" y1="9" x2="15" y2="15" class="svelte-1sg11vv"></line></svg>'),Q1=va('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full svelte-1sg11vv"><path d="M11 5L6 9H2v6h4l5 4V5z" class="svelte-1sg11vv"></path><line x1="23" y1="9" x2="17" y2="15" class="svelte-1sg11vv"></line><line x1="17" y1="9" x2="23" y2="15" class="svelte-1sg11vv"></line></svg>'),eM=Pe('<div class="flex items-end gap-0.5 h-3 svelte-1sg11vv"><div class="w-0.5 bg-accent animate-music-bar-1 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-2 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-3 svelte-1sg11vv"></div></div>'),tM=Pe('<div class="fixed top-6 left-6 z-[100] svelte-1sg11vv"><button class="group flex items-center gap-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 hover:border-accent text-accent px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed svelte-1sg11vv"><div class="relative w-5 h-5 flex items-center justify-center svelte-1sg11vv"><!></div> <span class="text-xs font-mono uppercase tracking-widest min-w-[80px] svelte-1sg11vv"><!></span></button></div> <div class="pointer-events-none fixed -top-10 -left-10 opacity-0 w-1 h-1 overflow-hidden svelte-1sg11vv"><div id="youtube-audio-player" class="svelte-1sg11vv"></div></div>',1);function nM(n,e){Lt(e,!1);let t,i=!1,r=pt(!0),a=pt(!1),s=pt("");const o="1RBL51ZE2Ig";ti(()=>{var S;if(window.YT)if(window.YT.Player)l();else{const T=setInterval(()=>{window.YT.Player&&(clearInterval(T),l())},100)}else{const T=document.createElement("script");T.src="https://www.youtube.com/iframe_api";const A=document.getElementsByTagName("script")[0];(S=A.parentNode)==null||S.insertBefore(T,A),window.onYouTubeIframeAPIReady=()=>{l()}}});function l(){try{const S={height:"0",width:"0",videoId:o,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,playlist:o,modestbranding:1,rel:0,showinfo:0,origin:window.location.origin,enablejsapi:1},events:{onReady:T=>{Oe(a,!0),T.target.setVolume(20),T.target.mute()},onStateChange:T=>{T.data===window.YT.PlayerState.PLAYING?i=!0:i=!1},onError:T=>{console.error("YouTube Player Error:",T.data),T.data===150||T.data===101?(Oe(s,"Restricted"),console.warn("Video is not embeddable (Error 150).")):Oe(s,"Error"),Oe(a,!1)}}};t=new window.YT.Player("youtube-audio-player",S)}catch(S){console.error("Failed to initialize YouTube Player:",S)}}function c(){!I(a)||!t||I(s)||(I(r)?(t.setVolume(20),t.unMute(),t.playVideo(),Oe(r,!1)):(t.mute(),t.pauseVideo(),Oe(r,!0)))}Gt();var d=tM(),h=Gn(d),u=x(h),p=x(u),v=x(p);{var g=S=>{var T=J1();ue(S,T)},m=(S,T)=>{{var A=M=>{var w=Q1();ue(M,w)},D=M=>{var w=eM();ue(M,w)};dt(S,M=>{I(r)?M(A):M(D,!1)},T)}};dt(v,S=>{I(s)?S(g):S(m,!1)})}var f=R(p,2),y=x(f);{var _=S=>{var T=Ci();je(()=>k(T,I(s))),ue(S,T)},E=(S,T)=>{{var A=M=>{var w=Ci("Loading...");ue(M,w)},D=M=>{var w=Ci();je(()=>k(w,I(r)?"Audio Off":"Audio On")),ue(M,w)};dt(S,M=>{I(a)?M(D,!1):M(A)},T)}};dt(y,S=>{I(s)?S(_):S(E,!1)})}je(()=>{xe(u,"aria-label",I(s)?"Audio unavailable":I(r)?"Unmute music":"Mute music"),xe(u,"title",I(s)?"Video not embeddable":I(a)?I(r)?"Play Music":"Mute Music":"Loading Player..."),u.disabled=!!I(s)}),Vt("click",u,c),ue(n,d),Dt()}const iM=n=>n;function gp(n){const e=n-1;return e*e*e+1}function Sh(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function Hn(n,{delay:e=0,duration:t=400,easing:i=iM}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:a=>`opacity: ${a*r}`}}function so(n,{delay:e=0,duration:t=400,easing:i=gp,x:r=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,d=l*(1-s),[h,u]=Sh(r),[p,v]=Sh(a);return{delay:e,duration:t,easing:i,css:(g,m)=>`
			transform: ${c} translate(${(1-g)*h}${u}, ${(1-g)*p}${v});
			opacity: ${l-d*m}`}}function xp(n,{delay:e=0,duration:t=400,easing:i=gp,axis:r="y"}={}){const a=getComputedStyle(n),s=+a.opacity,o=r==="y"?"height":"width",l=parseFloat(a[o]),c=r==="y"?["top","bottom"]:["left","right"],d=c.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),h=parseFloat(a[`padding${d[0]}`]),u=parseFloat(a[`padding${d[1]}`]),p=parseFloat(a[`margin${d[0]}`]),v=parseFloat(a[`margin${d[1]}`]),g=parseFloat(a[`border${d[0]}Width`]),m=parseFloat(a[`border${d[1]}Width`]);return{delay:e,duration:t,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};${o}: ${f*l}px;padding-${c[0]}: ${f*h}px;padding-${c[1]}: ${f*u}px;margin-${c[0]}: ${f*p}px;margin-${c[1]}: ${f*v}px;border-${c[0]}-width: ${f*g}px;border-${c[1]}-width: ${f*m}px;min-${o}: 0`}}var rM=Pe(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-orange-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-orange-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 1: BASES (ENTRY POINTS)</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"At the top, we have the Bases. In Polylith, these
                            are the only places that interact with the outside
                            world."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-orange-200">base: integrant:</strong> The brain of our boot process. Declarative formatting
                                using EDN configuration. Handles dependency injection,
                                enabling REPL restarts in milliseconds.</li> <li><strong class="text-orange-200">base: http-api:</strong> Exposes functionality via REST. Thin and dumb—routes
                                requests to components below.</li> <li><strong class="text-orange-200">base: onyx-peer:</strong> The heavy lifter. A background worker consuming
                                events from Datomic logs for async processing.</li></ul></div>`),aM=Pe(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-zinc-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-zinc-300 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 2: INFRASTRUCTURE CORE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"In the middle, we have the Infrastructure Core.
                            These components are domain-agnostic. Whether we
                            were handling Marketplace Inventory (MPMS) or
                            Payment Intelligence (UBLE), this layer remained
                            stable."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-zinc-200">datomic-peer:</strong> Connects to our immutable ledger. Preserves every
                                state change in a timeline for financial and clinical
                                auditability.</li> <li><strong class="text-zinc-200">auth-provider:</strong> Centralized security with interceptors for multiple
                                external actors (VTEX, Gateways).</li> <li><strong class="text-zinc-200">workflow-orch:</strong> 'Sinatra' - A state machine engine for orchestrating
                                multi-step flows like refund authorizations.</li> <li><strong class="text-zinc-200">log-service:</strong> Full observability, sending structured logs to
                                the cloud.</li></ul></div>`),sM=Pe(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-blue-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 3: DOMAIN & INTELLIGENCE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"Finally, at the bottom, we have the Domain Layer.
                            This is where the pivot happened."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-blue-200">payment-gateways:</strong> Normalizes the chaos. Adapters for Cielo, Getnet,
                                Pagar.me converting external formats to internal
                                schemas.</li> <li><strong class="text-blue-200">fraud-analysis:</strong> Enriches data with risk scores via ClearSale and
                                Unico connections.</li> <li><strong class="text-blue-200">oz-visualization:</strong> The 'Last Mile' of Intelligence. Scientific visualizations
                                (Vega-Lite) generated from Clojure data.</li> <li><strong class="text-blue-200">superset-embed:</strong> Real-time Superset dashboards integrated directly
                                into the frontend.</li></ul></div>`),oM=Pe(`<div class="w-full flex flex-col items-center gap-0 font-mono text-sm select-none pointer-events-none p-4"><div class="flex flex-col md:flex-row gap-8 w-full justify-center items-start mb-12 text-zinc-400 max-w-6xl px-4"><div class="flex-1"><p class="hint leading-relaxed svelte-1l6r2c7">Initially, we built MPMS. The domain was E-commerce. We
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
            survive a complete business pivot.</p></div>`);function lM(n,e){Lt(e,!1);let t=pt(!1),i=pt(null);ti(()=>Oe(t,!0)),Gt();var r=ga(),a=Gn(r);{var s=o=>{var l=oM(),c=x(l),d=R(c,2),h=x(d),u=R(h,2),p=R(d,2),v=R(p,4),g=R(x(v),2),m=R(x(g),4);{var f=D=>{var M=rM();Jt(1,M,()=>Hn,()=>({duration:200})),ue(D,M)};dt(m,D=>{I(i)===1&&D(f)})}var y=R(g,2),_=R(x(y),4);{var E=D=>{var M=aM();Jt(1,M,()=>Hn,()=>({duration:200})),ue(D,M)};dt(_,D=>{I(i)===2&&D(E)})}var S=R(y,2),T=R(x(S),4);{var A=D=>{var M=sM();Jt(1,M,()=>Hn,()=>({duration:200})),ue(D,M)};dt(T,D=>{I(i)===3&&D(A)})}Jt(1,c,()=>Hn,()=>({duration:800,delay:200})),Jt(1,h,()=>so,()=>({x:-20,duration:1e3})),Jt(1,u,()=>so,()=>({x:20,duration:1e3,delay:200})),Jt(1,p,()=>Hn,()=>({duration:1e3,delay:500})),Vt("mouseenter",g,()=>Oe(i,1)),Vt("mouseleave",g,()=>Oe(i,null)),Vt("mouseenter",y,()=>Oe(i,2)),Vt("mouseleave",y,()=>Oe(i,null)),Vt("mouseenter",S,()=>Oe(i,3)),Vt("mouseleave",S,()=>Oe(i,null)),Jt(1,v,()=>so,()=>({y:20,duration:1e3,delay:400})),ue(o,l)};dt(a,o=>{I(t)&&o(s)})}ue(n,r),Dt()}var cM=Pe('<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm p-4"><div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></div> <h3 class="text-orange-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-orange-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div> <h3 class="text-purple-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-purple-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent"></div> <h3 class="text-cyan-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-cyan-200/80 italic leading-relaxed"> </div></div></div></div>');function dM(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);Gt();var a=cM(),s=x(a),o=R(x(s),2),l=x(o),c=R(o,2),d=x(c),h=x(d),u=R(s,2),p=R(x(u),2),v=x(p),g=R(p,2),m=x(g),f=x(m),y=R(u,2),_=R(x(y),2),E=x(_),S=R(_,2),T=x(S),A=x(T);je((D,M,w,P,N,B)=>{k(l,D),k(h,M),k(v,w),k(f,P),k(E,N),k(A,B)},[()=>r()("presentation.section2.part1.title"),()=>r()("presentation.section2.part1.intro"),()=>r()("presentation.section2.part2.title"),()=>r()("presentation.section2.part2.intro"),()=>r()("presentation.section2.part3.title"),()=>r()("presentation.section2.part3.intro")],Et),ue(n,a),Dt(),i()}var uM=Pe('<div class="w-full h-[400px] relative rounded-xl overflow-hidden border border-zinc-800 bg-black/20"><canvas class="w-full h-full block"></canvas> <div class="absolute top-4 left-8 text-orange-500 font-mono text-xs tracking-widest pointer-events-none">INPUT: HIGH ENTROPY</div> <div class="absolute top-4 left-1/2 -translate-x-1/2 text-purple-500 font-mono text-xs tracking-widest pointer-events-none">INGESTION LAYER</div> <div class="absolute top-4 right-8 text-cyan-500 font-mono text-xs tracking-widest pointer-events-none">OUTPUT: SIGNAL</div></div>');function hM(n,e){Lt(e,!1);let t=pt(),i=pt(),r,a,s,o;const l=150,c=16729344,d=8788367,h=440020;let u=[],p;ti(()=>{if(!I(i))return;s=new Id;const S=45,T=I(t).clientWidth/I(t).clientHeight,A=.1,D=100;o=new vn(S,T,A,D),o.position.set(0,0,15),o.lookAt(0,0,0),a=new kd({canvas:I(i),alpha:!0,antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(I(t).clientWidth,I(t).clientHeight);const M=new lp(16777215,.5);s.add(M);const w=new To(16777215,1);w.position.set(5,5,5),s.add(w);const P=new To(d,2,10);P.position.set(0,0,0),s.add(P),v(),g();const N=new Bd,B=()=>{r=requestAnimationFrame(B);const z=N.getDelta(),W=N.getElapsedTime();f(W),y(z,W),a.render(s,o)};B();const $=()=>{if(!I(t))return;const z=I(t).clientWidth,W=I(t).clientHeight;o.aspect=z/W,o.updateProjectionMatrix(),a.setSize(z,W)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(r),a.dispose()}});function v(){p=new Ga;const S=new wo(1.5,.05,16,50),T=new oa({color:d,transparent:!0,opacity:.8,wireframe:!0}),A=new nn(S,T);p.add(A);const D=new wo(2.2,.02,16,50),M=new oa({color:4988309,transparent:!0,opacity:.5}),w=new nn(D,M);w.rotation.x=Math.PI/2,p.add(w);const P=new Nd(.8,0),N=new Wu({color:d,flatShading:!0,emissive:3018853}),B=new nn(P,N);p.add(B),s.add(p)}function g(){const S=[new Ud(.2),new Sa(.2,.2,.2),new Dd(.15)],T=new Wu({color:c,flatShading:!0});for(let A=0;A<l;A++){const D=new nn(S[Math.floor(Math.random()*S.length)],T.clone());D.position.set(-15-Math.random()*10,(Math.random()-.5)*6,(Math.random()-.5)*4),m(D),D.position.x=-15-Math.random()*10,s.add(D),u.push({mesh:D,state:"chaos",velocity:new V,rotVelocity:new V,targetScale:1})}}function m(S,T){S.position.set(-10-Math.random()*5,(Math.random()-.5)*6,(Math.random()-.5)*4),S.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),S.material.color.setHex(c),S.material.emissive.setHex(0),S.material.wireframe=!1}function f(S){if(!p)return;p.rotation.y=S*.5,p.rotation.x=Math.sin(S*.3)*.2;const T=1+Math.sin(S*2)*.05;p.scale.set(T,T,T)}function y(S,T){const A=Math.min(1,T/5),D=1+Math.sin(T*.8)*.3,M=3.5*A*D;u.forEach(w=>{const{mesh:P}=w;if(P.rotation.x+=w.rotVelocity.x*S,P.rotation.y+=w.rotVelocity.y*S,P.position.x+=M*S,w.state==="chaos"&&P.position.x>-2)P.position.length()>.5&&P.position.lerp(new V(0,0,0),S*3),P.position.x>-.5&&P.position.x<.5&&(w.state="value",P.material.color.setHex(h),P.material.emissive.setHex(440020),P.rotation.set(0,0,0),w.rotVelocity.set(0,0,0));else if(w.state==="value"){P.position.y=Math.sin(T*2+P.position.x)*1.5*Math.exp(-P.position.x*.05);const N=0;P.position.y+=(N-P.position.y)*S*2,P.position.z+=(0-P.position.z)*S*2}else P.position.y+=Math.sin(T*10+P.id)*.02,w.rotVelocity.set(Math.random(),Math.random(),Math.random());P.position.x>20&&(w.state="chaos",m(P))})}Gt();var _=uM(),E=x(_);Qr(E,S=>Oe(i,S),()=>I(i)),Qr(_,S=>Oe(t,S),()=>I(t)),ue(n,_),Dt()}function fM(n){const e=n-1;return e*e*e+1}var pM=Pe('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),mM=Pe('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-cyan-400 font-mono text-sm uppercase tracking-widest"> </h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li> </li> <li> </li> <li> </li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"> </p></div>'),vM=Pe('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div></div></div>'),gM=Pe('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),xM=Pe("<!> <!>",1),_M=Pe(`<div class="space-y-6"><div class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">💎</div> <div class="flex-1"><h4 class="text-xl font-bold text-purple-300 mb-2">1. Immutability & Data-Driven Design</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-purple-200">The Concept:</strong> The entire system relies on passing immutable maps. There are almost no mutable objects.</p> <div class="bg-black/40 border-l-4 border-purple-500 p-3 mb-3 rounded"><p class="text-sm text-purple-100 italic">"Candles (Map) -> Indicators (Value) -> Signal (Map) -> Order (Map).
                                    State is updated via recur, creating a new state for the next iteration without mutating the old one."</p></div> <p class="text-xs text-gray-400"><strong class="text-purple-300">Code Ref:</strong> Orchestrator Loop.</p></div></div></div> <div class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-cyan-300 mb-2">2. Pure Functions (Referential Transparency)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-cyan-200">The Concept:</strong> The strategy-engine largely consists of pure functions that take data and return a calculated result, with no side effects.</p> <div class="bg-black/40 border-l-4 border-cyan-500 p-3 mb-3 rounded"><p class="text-sm text-cyan-100 italic">"(ema candles period): Takes immutable data, returns a number. No external state is read or modified."</p></div> <p class="text-xs text-gray-400"><strong class="text-cyan-300">Benefit:</strong> Extremely easy to test. You just pass a vector of maps and assert the return value.</p></div></div></div> <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">⚡</div> <div class="flex-1"><h4 class="text-xl font-bold text-orange-300 mb-2">3. Concurrency & Asynchrony (core.async)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-orange-200">The Concept:</strong> CSP (Communicating Sequential Processes). The system "parks" (cheaply sleeps) until a timeout or a stop signal is received.</p> <div class="bg-black/40 border-l-4 border-orange-500 p-3 mb-3 rounded"><p class="text-sm text-orange-100 italic">"The Orchestrator uses core.async to manage the main application loop without blocking threads."</p></div> <p class="text-xs text-gray-400"><strong class="text-orange-300">Code Ref:</strong> com.nexus-quant.ark-engine.orchestrator.core/start!</p></div></div></div> <div class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🔄</div> <div class="flex-1"><h4 class="text-xl font-bold text-green-300 mb-2">4. Recursion for State Management</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-green-200">The Concept:</strong> Instead of wrapping the application state in a global atom, the Orchestrator maintains state on the stack via recursion.</p> <div class="bg-black/40 border-l-4 border-green-500 p-3 mb-3 rounded"><p class="text-sm text-green-100 italic">"(loop [state init] ... (recur new-state)). The 'state' exists only within the lifecycle of the loop."</p></div> <p class="text-xs text-gray-400"><strong class="text-green-300">Why?:</strong> Avoids mutable shared state bugs.</p></div></div></div> <div class="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">☕</div> <div class="flex-1"><h4 class="text-xl font-bold text-indigo-300 mb-2">5. Java Interoperability</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-indigo-200">The Concept:</strong> Clojure's strength is its access to the JVM ecosystem. Ark Engine leverages ta4j for technical analysis.</p> <div class="bg-black/40 border-l-4 border-indigo-500 p-3 mb-3 rounded"><p class="text-sm text-indigo-100 italic">"(-> obj .method args) macros for clean Java calls. Converting Clojure maps (keywords) to Java Objects efficiently."</p></div> <p class="text-xs text-gray-400"><strong class="text-indigo-300">Lib:</strong> ta4j (Technical Analysis for Java).</p></div></div></div></div>`),bM=Pe('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> INJECT VOLATILITY</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-cyan-500 tracking-widest">MODULE: ORCHESTRATOR (BRAIN)</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">core.async / Recur</div></div></div>  <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-orange-500 tracking-widest">MODULE: STRATEGY ENGINE (LOGIC)</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Referential Transparency</div></div></div>  <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-green-500 tracking-widest">MODULE: CONNECTOR</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-green-500/30 flex items-center justify-center bg-green-900/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]"><div class="text-green-400"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-green-400">ORDERS EXECUTED</div> <div class="text-xs text-gray-500 mt-1">Side-Effect Handler</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center"><div>Orchestrator (Loop)</div> <div class="text-orange-400">Strategy (Pure Logic)</div> <div>Connector (Side Effects)</div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Core Clojure & FP Concepts</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Key Concepts: Immutability, Pure Functions, Concurrency, Recursion</p></button> <!></div></div>');function yM(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);let a=pt("safe"),s=pt(!1),o=pt(!0),l=pt(!1),c=pt([]),d=0;const h={brain:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',shield:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',vault:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'};let u;function p(){clearInterval(u),u=setInterval(()=>{const te=d++,b=I(a)==="danger"&&Math.random()>.3?"danger":"safe",F={id:te,type:b,status:"moving",x:0};Oe(c,[...I(c),F]),I(c).length>10&&I(c).shift()},I(a)==="safe"?800:400)}let v;const g=50,m=95;function f(){Oe(c,I(c).map(te=>{if(te.status!=="moving")return te;const L=te.type==="danger"?.4:.2;let b=te.x+L;return b>=g&&b<g+2&&te.type==="danger"?(te.status="blocked",y(),te):(b>=m&&(te.status="success"),{...te,x:b})}).filter(te=>te.status!=="success"&&(te.status!=="blocked"||Math.random()>.05))),v=requestAnimationFrame(f)}function y(){Oe(s,!0),setTimeout(()=>Oe(s,!1),400)}ti(()=>(p(),f(),()=>{clearInterval(u),cancelAnimationFrame(v)})),Qi(()=>I(a),()=>{I(a)&&p()}),ma(),Gt();var _=bM(),E=x(_),S=x(E),T=R(S,2),A=x(T),D=x(A);{var M=te=>{var L=pM();ue(te,L)};dt(D,te=>{I(a)==="danger"&&te(M)})}var w=R(D,2),P=R(E,2);{var N=te=>{var L=mM(),b=x(L),F=x(b),Y=x(F),Q=R(F,2),j=R(b,2),_e=x(j),ce=x(_e),Ee=R(_e,2),He=x(Ee),re=R(Ee,2),fe=x(re),Me=R(j,2),Re=x(Me);je((he,Qe,O,me,de)=>{k(Y,he),k(ce,Qe),k(He,O),k(fe,me),k(Re,de)},[()=>r()("presentation.section3.demo.instruction"),()=>r()("presentation.section3.demo.step1"),()=>r()("presentation.section3.demo.step2"),()=>r()("presentation.section3.demo.step3"),()=>r()("presentation.section3.demo.conclusion")],Et),Vt("click",Q,()=>Oe(o,!1)),Jt(3,L,()=>Hn),ue(te,L)};dt(P,te=>{I(o)&&te(N)})}var B=R(P,2),$=x(B),z=R(x($),4),W=x(z),G=R(W,2),Z=x(G);ln(Z,()=>h.brain);var se=R(z,2),ie=x(se),le=x(ie),Ae=R($,2),Ie=R(x(Ae),2),We=x(Ie),Ze=R(We,2),J=x(Ze),ne=x(J);ln(ne,()=>I(s)?h.lock:h.shield);var pe=R(Ie,2),ke=x(pe),ge=x(ke),Xe=R(Ae,2),ht=R(x(Xe),2),Ke=x(ht),Je=x(Ke);ln(Je,()=>h.vault);var tt=R(Xe,2);Wt(tt,5,()=>I(c),te=>te.id,(te,L)=>{var b=xM(),F=Gn(b);{var Y=_e=>{var ce=vM(),Ee=x(ce);je(()=>{ui(ce,`
                            left: ${I(L).x??""}%; 
                            background-color: ${I(L).type==="danger"?"#ef4444":"#06b6d4"};
                            box-shadow: 0 0 10px ${I(L).type==="danger"?"#ef4444":"#06b6d4"};
                            opacity: ${I(L).status==="blocked"?0:1};
                            transform: scale(${I(L).status==="blocked"?2:1});
                        `),Ne(Ee,1,`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-${I(L).type==="danger"?"red-500":"cyan-500"} opacity-50`)}),ue(_e,ce)};dt(F,_e=>{(I(L).status==="moving"||I(L).status==="blocked")&&_e(Y)})}var Q=R(F,2);{var j=_e=>{var ce=gM();je(()=>ui(ce,`left: ${I(L).x??""}%;`)),ue(_e,ce)};dt(Q,_e=>{I(L).status==="blocked"&&_e(j)})}ue(te,b)});var ze=R(B,4),ct=x(ze),U=x(ct),De=R(x(U),2),Le=R(ct,2);{var we=te=>{var L=_M();Jt(3,L,()=>xp,()=>({duration:400})),ue(te,L)};dt(Le,te=>{I(l)&&te(we)})}je(()=>{Ne(S,1,`px-6 py-2 rounded border transition-all duration-300
            ${I(a)==="safe"?"bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ne(T,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${I(a)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ne(w,1,`relative inline-flex rounded-full h-3 w-3 ${I(a)==="danger"?"bg-red-500":"bg-gray-500"}`),Ne(z,1,`relative z-10 w-32 h-32 rounded-full border-2 ${I(a)==="danger"?"border-red-500/50 animate-pulse":"border-cyan-500/30"} flex items-center justify-center bg-black/50`),Ne(W,1,`absolute inset-0 rounded-full border border-dashed ${I(a)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-cyan-500/20 animate-[spin_10s_linear_infinite]"}`),Ne(G,1,`text-cyan-400 ${I(a)==="danger"?"text-red-500":""}`),Ne(ie,1,`text-lg font-bold ${I(a)==="danger"?"text-red-400":"text-cyan-400"}`),k(le,I(a)==="danger"?"VOLATILITY SPIKE":"ACTIVE LOOP"),Ne(We,1,`absolute -inset-8 rounded-full bg-orange-500/10 blur-xl transition-opacity duration-200
                    ${I(s)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Ne(Ze,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900
                    ${I(s)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-orange-500/30"}`),Ne(J,1,`text-orange-500 transition-transform duration-200 ${I(s)?"scale-90 text-red-500":""}`),Ne(ke,1,`text-lg font-bold ${I(s)?"text-red-400 animate-pulse":"text-orange-400"} transition-colors`),k(ge,I(s)?"COMPUTING INDICATORS":"PURE LOGIC"),Ne(De,0,`w-6 h-6 text-purple-400 transition-transform duration-300 ${I(l)?"rotate-180":""}`)}),Vt("click",S,()=>Oe(a,"safe")),Vt("click",T,()=>Oe(a,"danger")),Vt("click",ct,()=>Oe(l,!I(l))),ue(n,_),Dt(),i()}var SM=Pe('<div class="p-6 text-center text-indigo-300 font-mono text-sm md:text-base tracking-widest uppercase"> </div>'),MM=Pe('<div class="grid grid-cols-2 divide-x divide-white/5 hover:bg-white/5 transition-colors group"><div class="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center text-right md:text-left justify-end md:justify-start"><div class="hidden md:block text-indigo-500/50 group-hover:text-indigo-400 transition-colors"><!></div> <div class="flex-1"><div class="text-gray-200 font-bold text-lg"> </div> <div class="text-gray-500 text-sm font-mono mt-1"> </div></div></div> <div class="p-6 flex flex-col md:flex-row gap-4 items-end md:items-center text-left"><div class="md:hidden text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-2"><!></div> <div class="flex-1"><div class="text-white font-bold text-lg"> </div> <div class="text-indigo-400/80 text-sm font-mono mt-1"> </div></div></div></div>'),EM=Pe('<div class="max-w-6xl w-full space-y-12"><div class="text-center space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider"> </h3> <h4 class="text-2xl md:text-3xl font-bold text-white italic"> </h4> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div></div> <div class="bg-gradient-to-r from-accent/20 to-purple-900/20 border-l-4 border-accent p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-accent/10 mb-12"><p class="text-xl md:text-2xl text-white font-light leading-relaxed italic text-center"> </p></div> <div class="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"><div class="grid grid-cols-2 divide-x divide-white/10 bg-white/5"></div> <div class="divide-y divide-white/5"></div></div></div>');function wM(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t),a=pt(),s=pt();let o=_r(e,"baseKey",8,"presentation");const l={source:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>',norm:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',audit:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',decision:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',runtime:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',messaging:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',ui:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',deployment:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'};Qi(()=>(r(),mo(o())),()=>{Oe(a,r()(`${o()}.section4.headers`))}),Qi(()=>(r(),mo(o())),()=>{Oe(s,r()(`${o()}.section4.rows`))}),ma(),Gt();var c=EM(),d=x(c),h=x(d),u=x(h),p=R(h,2),v=x(p),g=R(d,2),m=x(g),f=x(m),y=R(g,2),_=x(y);Wt(_,5,()=>I(a),Qt,(S,T)=>{var A=SM(),D=x(A);je(()=>k(D,I(T))),ue(S,A)});var E=R(_,2);Wt(E,5,()=>Object.entries(I(s)),Qt,(S,T)=>{let A=()=>I(T)[0],D=()=>I(T)[1];var M=MM(),w=x(M),P=x(w),N=x(P);ln(N,()=>l[A()]);var B=R(P,2),$=x(B),z=x($),W=R($,2),G=x(W),Z=R(w,2),se=x(Z),ie=x(se);ln(ie,()=>l[A()]);var le=R(se,2),Ae=x(le),Ie=x(Ae),We=R(Ae,2),Ze=x(We);je(()=>{k(z,D().fintech.title),k(G,D().fintech.detail),k(Ie,D().healthcare.title),k(Ze,D().healthcare.detail)}),ue(S,M)}),je((S,T,A)=>{k(u,`04 // ${S??""}`),k(v,T),k(f,A)},[()=>r()(`${o()}.section4.title`),()=>r()(`${o()}.section4.subtitle`),()=>r()(`${o()}.section4.closing`)],Et),ue(n,c),Dt(),i()}var TM=Pe('<div class="w-full h-full min-h-[400px] relative"><canvas></canvas> <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-[100px] z-0 transform scale-75 opacity-50"></div></div>');function AM(n,e){Lt(e,!1);let t=pt(),i=pt(),r,a,s,o,l,c,d=new $e(100,100),h=new $e(100,100),u=pt(!1),p={x:0,y:0},v={x:0,y:0},g={x:0,y:0};ti(()=>{m(),S(),window.addEventListener("mousemove",_),window.addEventListener("resize",E),I(t).addEventListener("mousedown",f),I(t).addEventListener("mouseup",y),I(t).addEventListener("mouseleave",y)}),uf(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("mousemove",_),window.removeEventListener("resize",E),I(t)&&(I(t).removeEventListener("mousedown",f),I(t).removeEventListener("mouseup",y),I(t).removeEventListener("mouseleave",y)),r&&r.dispose()});function m(){a=new Id,s=new vn(45,I(t).clientWidth/I(t).clientHeight,.1,1e3),s.position.z=50,r=new kd({canvas:I(i),antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(I(t).clientWidth,I(t).clientHeight),r.setClearColor(0,0);const w=new lp(16777215,.2);a.add(w);const P=new To(16347926,2,100);P.position.set(10,20,30),a.add(P);const N=new To(3900150,2,100);N.position.set(-10,-20,-10),a.add(N);const B=new Fd(10,3,200,32,2,3),$=new oa({color:16347926,wireframe:!0,transparent:!0,opacity:.8,side:zn});l=new nn(B,$),a.add(l);const z=new hx({color:16777215,metalness:.9,roughness:.1,transparent:!0,opacity:0,side:zn,envMapIntensity:1});c=new nn(B,z),a.add(c)}function f(w){Oe(u,!0),p={x:w.clientX,y:w.clientY}}function y(){Oe(u,!1)}function _(w){const P=I(t).getBoundingClientRect();if(h.x=(w.clientX-P.left)/P.width*2-1,h.y=-((w.clientY-P.top)/P.height)*2+1,I(u)){const N={x:w.clientX-p.x,y:w.clientY-p.y};g.x=N.y*.01,g.y=N.x*.01,v.x+=g.x,v.y+=g.y,p={x:w.clientX,y:w.clientY}}}function E(){s.aspect=I(t).clientWidth/I(t).clientHeight,s.updateProjectionMatrix(),r.setSize(I(t).clientWidth,I(t).clientHeight)}function S(){o=requestAnimationFrame(S),T()}function T(){if(d.x+=(h.x-d.x)*.05,d.y+=(h.y-d.y)*.05,I(u))l.rotation.x=v.x,l.rotation.y=v.y,c.rotation.x=v.x,c.rotation.y=v.y;else{const N=Date.now()*5e-4;g.x*=.95,g.y*=.95,v.x+=(N*.2-v.x)*.02,v.y+=(N*.5-v.y)*.02,l.rotation.x=v.x,l.rotation.y=v.y,c.rotation.x=v.x,c.rotation.y=v.y}const w=Math.sqrt(d.x*d.x+d.y*d.y);let P=Math.max(0,1-w/.8);l.material.opacity=.2+(1-P)*.6,c.material.opacity=P,s.position.x+=(d.x*10-s.position.x)*.02,s.position.y+=(d.y*10-s.position.y)*.02,s.lookAt(a.position),r.render(a,s)}Gt();var A=TM(),D=x(A);let M;Qr(D,w=>Oe(i,w),()=>I(i)),Qr(A,w=>Oe(t,w),()=>I(t)),je(w=>M=Ne(D,1,"absolute inset-0 z-10 outline-none",null,M,w),[()=>({"cursor-grab":!I(u),"cursor-grabbing":I(u)})],Et),ue(n,A),Dt()}var RM=Pe(`<div class="w-full relative z-10 pointer-events-auto"><section><div class="max-w-4xl w-full text-center space-y-8"><div class="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm tracking-widest mb-4">CONFIDENTIAL // INTERVIEW CANDIDATE</div> <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500"> </h1> <h2 class="text-2xl md:text-3xl text-gray-400 font-light"> </h2></div></section> <section><div class="max-w-3xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-cyan-500 font-serif">"</div> <h3 class="text-xl text-cyan-400 font-mono mb-4 tracking-wider"> </h3> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div></section> <section class="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden bg-zinc-950"><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-zinc-900 select-none z-0 opacity-30 whitespace-nowrap">BUILDER</h1> <div class="relative z-10 w-full max-w-6xl px-6"><div class="flex items-center gap-4 mb-12 opacity-80"><span class="text-orange-500 font-mono text-sm">02 // THE MINDSET</span> <div class="h-px bg-zinc-800 flex-1"></div></div> <div class="grid md:grid-cols-5 gap-12 items-center"><div class="md:col-span-2 space-y-8 z-20 relative pointer-events-none"><h2 class="text-4xl md:text-5xl font-bold leading-tight text-white">Not just <br> <span class="text-zinc-500 line-through decoration-orange-500/50">executing tasks.</span></h2> <p class="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 bg-zinc-950/50 backdrop-blur-md p-4 rounded-r-lg">Building the <strong class="text-white font-medium">right tools</strong> to solve the problem.</p> <div class="pt-4 pointer-events-auto"><p class="text-sm text-zinc-500 mb-2 font-mono uppercase tracking-widest">The Evidence</p> <p class="text-zinc-400 text-sm max-w-md leading-relaxed">I built this interactive presentation platform from
                            scratch. <br> Why? To demonstrate that I own the entire stack: <span class="text-orange-400">From the complex backend logic represented by
                                the wireframe, to the polished user experience
                                you see materializing.</span></p></div></div> <div class="md:col-span-3 h-[500px] relative"><!> <div class="absolute bottom-4 right-4 text-right pointer-events-none z-30"><span class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950/80 px-2 py-1 rounded">Interactive: Logic to Materialization</span></div></div></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><div class="text-center max-w-3xl space-y-4"><h3 class="text-xl text-purple-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><h3 class="text-lg text-purple-400/50 font-mono tracking-wider w-full text-center">02.b // DEEP DIVE & DATA FLOW</h3> <div class="w-full"><!></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-12"><div class="text-center max-w-4xl mx-auto space-y-6"><h3 class="text-xl text-green-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest mb-2"> </div> <div class="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-green-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><p class="text-lg text-cyan-300 font-medium mb-2"><!></p> <p class="text-sm text-gray-300 leading-relaxed"> </p></div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><!></section> <section><div class="max-w-2xl w-full text-center space-y-8"><h3 class="text-xl text-white font-mono tracking-wider"> </h3> <p class="text-2xl md:text-3xl font-light text-gray-100 leading-snug"> </p> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="https://linkedin.com/in/patrickcmserrano" target="_blank" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">LINKEDIN</a> <a href="https://github.com/patrickcmserrano" target="_blank" class="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded font-bold tracking-wide transition-all">GITHUB</a></div></div></section> <div class="h-12"></div></div>`);function CM(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";Gt();var s=RM(),o=x(s);Ne(o,1,mn(a));var l=x(o),c=R(x(l),2),d=x(c),h=R(c,2),u=x(h),p=R(o,2);Ne(p,1,mn(a));var v=x(p),g=R(x(v),2),m=x(g),f=R(g,2),y=x(f),_=R(p,2),E=R(x(_),2),S=R(x(E),2),T=R(x(S),2),A=x(T);AM(A,{});var D=R(_,2);Ne(D,1,mn(a));var M=x(D),w=x(M),P=x(w),N=x(P),B=R(P,2),$=x(B),z=R(B,2),W=x(z),G=R(w,2),Z=x(G);lM(Z,{});var se=R(D,2);Ne(se,1,mn(a));var ie=x(se),le=R(x(ie),2),Ae=x(le);hM(Ae,{});var Ie=R(le,2),We=x(Ie);dM(We,{});var Ze=R(se,2);Ne(Ze,1,mn(a));var J=x(Ze),ne=x(J),pe=x(ne),ke=x(pe),ge=R(pe,2),Xe=x(ge),ht=R(ge,2),Ke=x(ht),Je=x(Ke);ln(Je,()=>r()("presentation.section3.subtitle"));var tt=R(Ke,2),ze=x(tt),ct=R(ht,2),U=x(ct),De=R(ct,2),Le=x(De),we=R(ne,2),te=x(we);yM(te,{});var L=R(Ze,2);Ne(L,1,mn(a));var b=x(L);wM(b,{});var F=R(L,2);Ne(F,1,mn(a));var Y=x(F),Q=x(Y),j=x(Q),_e=R(Q,2),ce=x(_e);je((Ee,He,re,fe,Me,Re,he,Qe,O,me,de,Se,oe,ee)=>{k(d,Ee),k(u,He),k(m,`01 // ${re??""}`),k(y,fe),k(N,`02 // ${Me??""}`),k($,Re),k(W,he),k(ke,`03 // ${Qe??""}`),k(Xe,O),k(ze,me),k(U,de),k(Le,Se),k(j,oe),k(ce,ee)},[()=>r()("presentation.title"),()=>r()("presentation.subtitle"),()=>r()("presentation.section1.title"),()=>r()("presentation.section1.text"),()=>r()("presentation.section2.title"),()=>r()("presentation.section2.subtitle"),()=>r()("presentation.section2.intro"),()=>r()("presentation.section3.title"),()=>r()("presentation.section3.role"),()=>r()("presentation.section3.subtitle2"),()=>r()("presentation.section3.intro"),()=>r()("presentation.section3.intro2"),()=>r()("presentation.section5.title"),()=>r()("presentation.section5.text")],Et),Jt(1,o,()=>Hn),ue(n,s),Dt(),i()}/**
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
 */const PM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var IM=va("<svg><!><!></svg>");function LM(n,e){Lt(e,!0);const t=_r(e,"color",3,"currentColor"),i=_r(e,"size",3,24),r=_r(e,"strokeWidth",3,2),a=_r(e,"absoluteStrokeWidth",3,!1),s=_r(e,"iconNode",19,()=>[]),o=df(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var l=IM();let c;var d=x(l);Wt(d,17,s,Qt,(u,p)=>{let v=()=>I(p)[0],g=()=>I(p)[1];var m=ga(),f=Gn(m);Zm(f,v,!0,(y,_)=>{let E;je(()=>E=eu(y,E,{...g()}))}),ue(u,m)});var h=R(d);nf(h,()=>e.children??on),je(u=>c=eu(l,c,{...PM,...o,width:i(),height:i(),stroke:t(),"stroke-width":u,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>a()?Number(r())*24/Number(i()):r()]),ue(n,l),Dt()}function DM(n,e){Lt(e,!0);let t=df(e,["$$slots","$$events","$$legacy"]);LM(n,u0({name:"arrow-left"},()=>t,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(r,a)=>{var s=ga(),o=Gn(s);nf(o,()=>e.children??on),ue(r,s)},$$slots:{default:!0}})),Dt()}var NM=va("<path></path><path></path><path></path>",1),UM=va('<circle r="4.5" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle>'),FM=va('<rect rx="6" stroke-width="1"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.30)" font-size="9" font-family="monospace"> </text><line stroke-width="0.8" stroke-dasharray="5 4"></line><!><rect rx="8" stroke-width="1.2"></rect><rect rx="8" fill="none" stroke-width="4" opacity="0.07"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold" letter-spacing="0.3"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.32)" font-size="9" font-family="monospace"><!> </text><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text>',1),OM=Pe('<div class="w-full bg-black/20 border border-white/10 rounded-xl overflow-hidden p-4"><div class="flex items-center justify-between mb-3 px-2"><span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">publishers</span> <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest">nats subject bus</span> <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">subscribers</span></div> <svg viewBox="0 0 845 402" class="w-full" style="height: auto;" xmlns="http://www.w3.org/2000/svg"><defs></defs><!><rect x="338" y="156" width="166" height="18" rx="9" fill="rgba(0,255,148,0.14)" stroke="rgba(0,255,148,0.45)" stroke-width="0.6"></rect><text x="421" y="169" text-anchor="middle" fill="#00FF94" font-size="8.5" font-family="monospace">new symbols auto-picked up</text><line x1="200" x2="645" stroke="rgba(255,255,255,0.07)" stroke-width="0.6"></line><rect x="200" width="195" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="297" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: MARKET_STATE</text><text x="297" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">latest snapshot / sym×tf</text><rect x="410" width="235" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="527" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: STRATEGY_STATE</text><text x="527" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">last 50 state transitions</text></svg></div>');function BM(n){const h=[{y:75,publisher:"Collectors",publisherSub:"Bitget · Binance · Yahoo",subject:"market.kline.<sym>.<tf>",retention:"7 days",wildcard:!1,color:"#f97316",colorDim:"rgba(249,115,22,0.12)",strokeDim:"rgba(249,115,22,0.40)",consumers:["FractalEngine","Nexus Terminal"],pulseBegin:["0s","1.1s"],fanBegin:["1.6s","2.1s"]},{y:193,publisher:"FractalEngine",publisherSub:"1 instance / sym×tf",subject:"market.analyzed.*",retention:"7 days",wildcard:!0,color:"#00FF94",colorDim:"rgba(0,255,148,0.09)",strokeDim:"rgba(0,255,148,0.42)",consumers:["AlligatorTrend","API Server"],pulseBegin:["0.4s","1.5s"],fanBegin:["2.0s","2.5s"]},{y:311,publisher:"AlligatorTrend",publisherSub:"BTCUSDT · XAUUSDT",subject:"signals.trade.<sym>",retention:"30 days",wildcard:!1,color:"#a78bfa",colorDim:"rgba(167,139,250,0.09)",strokeDim:"rgba(167,139,250,0.38)",consumers:["PaperBroker","WebSocket"],pulseBegin:["0.8s","1.9s"],fanBegin:["2.4s","2.9s"]}];function u(P){return`M 158 ${P} L 300 ${P}`}function p(P){return`M 545 ${P} Q 587 ${P} 670 ${P-32}`}function v(P){return`M 545 ${P} Q 587 ${P} 670 ${P+32}`}const g=368;var m=OM(),f=R(x(m),2),y=x(f);Wt(y,5,()=>h,Qt,(P,N,B)=>{var $=NM(),z=Gn($);xe(z,"id",`ps${B}`);var W=R(z);xe(W,"id",`sc1${B}`);var G=R(W);xe(G,"id",`sc2${B}`),je((Z,se,ie)=>{xe(z,"d",Z),xe(W,"d",se),xe(G,"d",ie)},[()=>u(I(N).y),()=>p(I(N).y),()=>v(I(N).y)],Et),ue(P,$)});var _=R(y);Wt(_,1,()=>h,Qt,(P,N,B)=>{var $=FM(),z=Gn($);xe(z,"x",8),xe(z,"width",150),xe(z,"height",54);var W=R(z);xe(W,"x",8+150/2);var G=x(W),Z=R(W);xe(Z,"x",8+150/2);var se=x(Z),ie=R(Z);xe(ie,"x1",158),xe(ie,"x2",300);var le=R(ie);Wt(le,1,()=>I(N).pulseBegin,Qt,(b,F)=>{var Y=UM(),Q=x(Y),j=x(Q);xe(j,"href",`#ps${B}`),je(()=>{xe(Y,"fill",I(N).color),xe(Q,"begin",I(F))}),ue(b,Y)});var Ae=R(le);xe(Ae,"x",300),xe(Ae,"width",245),xe(Ae,"height",60);var Ie=R(Ae);xe(Ie,"x",300),xe(Ie,"width",245),xe(Ie,"height",60);var We=R(Ie);xe(We,"x",300+245/2);var Ze=x(We),J=R(We);xe(J,"x",300+245/2);var ne=x(J);{var pe=b=>{var F=Ci("wildcard ·");ue(b,F)};dt(ne,b=>{I(N).wildcard&&b(pe)})}var ke=R(ne),ge=R(J),Xe=R(ge),ht=R(Xe),Ke=x(ht),Je=x(Ke);xe(Je,"href",`#sc1${B}`);var tt=R(ht),ze=x(tt),ct=x(ze);xe(ct,"href",`#sc2${B}`);var U=R(tt);xe(U,"x",670),xe(U,"width",160),xe(U,"height",34);var De=R(U);xe(De,"x",670+160/2);var Le=x(De),we=R(De);xe(we,"x",670),xe(we,"width",160),xe(we,"height",34);var te=R(we);xe(te,"x",670+160/2);var L=x(te);je((b,F)=>{xe(z,"y",I(N).y-54/2),xe(z,"fill",I(N).colorDim),xe(z,"stroke",I(N).strokeDim),xe(W,"y",I(N).y-7),xe(W,"fill",I(N).color),k(G,I(N).publisher),xe(Z,"y",I(N).y+11),k(se,I(N).publisherSub),xe(ie,"y1",I(N).y),xe(ie,"y2",I(N).y),xe(ie,"stroke",I(N).strokeDim),xe(Ae,"y",I(N).y-60/2),xe(Ae,"fill",I(N).colorDim),xe(Ae,"stroke",I(N).color),xe(Ie,"y",I(N).y-60/2),xe(Ie,"stroke",I(N).color),xe(We,"y",I(N).y-8),xe(We,"fill",I(N).color),k(Ze,I(N).subject),xe(J,"y",I(N).y+11),k(ke,`${I(N).retention??""} retention`),xe(ge,"d",b),xe(ge,"stroke",I(N).strokeDim),xe(Xe,"d",F),xe(Xe,"stroke",I(N).strokeDim),xe(ht,"fill",I(N).color),xe(Ke,"begin",I(N).fanBegin[0]),xe(tt,"fill",I(N).color),xe(ze,"begin",I(N).fanBegin[1]),xe(U,"y",I(N).y-32-34/2),xe(De,"y",I(N).y-32+6),k(Le,I(N).consumers[0]),xe(we,"y",I(N).y+32-34/2),xe(te,"y",I(N).y+32+6),k(L,I(N).consumers[1])},[()=>p(I(N).y),()=>v(I(N).y)],Et),ue(P,$)});var E=R(_,3);xe(E,"y1",g-12),xe(E,"y2",g-12);var S=R(E);xe(S,"y",g);var T=R(S);xe(T,"y",g+11);var A=R(T);xe(A,"y",g+23);var D=R(A);xe(D,"y",g);var M=R(D);xe(M,"y",g+11);var w=R(M);xe(w,"y",g+23),ue(n,m)}var kM=Pe('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),zM=Pe('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-[#00FF94] font-mono text-sm uppercase tracking-widest">Interactive Simulation Guide</h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li>Observe the <strong>Collectors (Go)</strong> ingesting real-time market data via NATS.</li> <li>The <strong>Fractal Engine (Logic)</strong> analyzes incoming streams for unified patterns.</li> <li>Click <strong>VOLATILITY SPIKE</strong> to see how the hybrid ecosystem reacts to turbulence.</li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4">This simulation demonstrates the synergy of the multi-language reactive pipeline.</p></div>'),HM=Pe('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 opacity-50"></div></div>'),GM=Pe('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),VM=Pe("<!> <!>",1),WM=Pe('<div class="space-y-6"><div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🛠️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">1. Hybrid Architecture (Clojure + Go)</h4> <p class="text-sm text-gray-300 mb-3">Using the right tool for each operational constraint, maximizing both developer velocity and system performance.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"A synergistic approach where high-level abstractions meet low-level efficiency."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">2. Strategy Discovery (Clojure)</h4> <p class="text-sm text-gray-300 mb-3">Expressive modeling and REPL-driven research for rapid iteration on complex trading hypotheses.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Leveraging functional programming for robust, verifiable market analysis."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🏎️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">3. Edge Execution (Go)</h4> <p class="text-sm text-gray-300 mb-3">Low-latency performance and high concurrency in production, ensuring split-second execution precision.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Optimized binaries handling massive data throughput with minimal jitter."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🚌</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">4. Universal Data Bus (NATS)</h4> <p class="text-sm text-gray-300 mb-3">Decoupling runtimes through a common event language, enabling seamless communication across the entire stack.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"NATS JetStream provides the backbone for a truly reactive and modular ecosystem."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🌍</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">5. Multi-Language Ecosystem</h4> <p class="text-sm text-gray-300 mb-3">A platform where Clojure, Go, and Python coexist via JetStream, leveraging the best of each language.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Interoperability without compromise, designed for the future of quantitative finance."</p></div></div></div></div></div>'),XM=Pe('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> VOLATILITY SPIKE</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/20 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-[#00FF94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: COLLECTORS</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: FRACTAL ENGINE</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Logic / Indicators</div></div></div> <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: STRATEGY ENGINE</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-[#00FF94]/30 flex items-center justify-center bg-[#00FF94]/5 shadow-[0_0_20px_rgba(0,255,148,0.1)]"><div class="text-[#00FF94]"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-[#00FF94]">EXECUTION SIGNALS</div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-gray-900/50 to-black border border-gray-700 hover:border-[#00FF94]/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Ark Streams Technical Pillars</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Hybrid High-Performance Reactive Trading Infrastructure</p></button> <!></div></div>');function $M(n,e){Lt(e,!1);let t=pt("safe"),i=pt(!1),r=pt(!0),a=pt(!1),s=pt([]),o=0;const l={collectors:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7l8 5 8-5M12 12v7"></path></svg>',fractal:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',strategy:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>'};let c;function d(){clearInterval(c),c=setInterval(()=>{const Le=I(t)==="danger"&&Math.random()>.3?"danger":"safe",we={id:o++,type:Le,status:"moving",x:0};Oe(s,[...I(s),we]),I(s).length>15&&I(s).shift()},I(t)==="safe"?800:400)}let h;const u=50,p=95;function v(){Oe(s,I(s).map(De=>{if(De.status!=="moving")return De;const Le=De.type==="danger"?.6:.3;let we=De.x+Le;return we>=u&&we<u+2&&De.type==="danger"?(De.status="blocked",g(),De):(we>=p&&(De.status="success"),{...De,x:we})}).filter(De=>De.status!=="success"&&(De.status!=="blocked"||Math.random()>.05))),h=requestAnimationFrame(v)}function g(){Oe(i,!0),setTimeout(()=>Oe(i,!1),400)}ti(()=>(d(),v(),()=>{clearInterval(c),cancelAnimationFrame(h)})),Qi(()=>I(t),()=>{I(t)&&d()}),ma(),Gt();var m=XM(),f=x(m),y=x(f),_=R(y,2),E=x(_),S=x(E);{var T=De=>{var Le=kM();ue(De,Le)};dt(S,De=>{I(t)==="danger"&&De(T)})}var A=R(S,2),D=R(f,2);{var M=De=>{var Le=zM(),we=x(Le),te=R(x(we),2);Vt("click",te,()=>Oe(r,!1)),Jt(3,Le,()=>Hn),ue(De,Le)};dt(D,De=>{I(r)&&De(M)})}var w=R(D,2),P=x(w),N=R(x(P),4),B=x(N),$=R(B,2),z=x($);ln(z,()=>l.collectors);var W=R(N,2),G=x(W),Z=x(G),se=R(P,2),ie=R(x(se),2),le=x(ie),Ae=R(le,2),Ie=x(Ae),We=x(Ie);ln(We,()=>I(i)?l.lock:l.fractal);var Ze=R(ie,2),J=x(Ze),ne=x(J),pe=R(se,2),ke=R(x(pe),2),ge=x(ke),Xe=x(ge);ln(Xe,()=>l.strategy);var ht=R(pe,2);Wt(ht,5,()=>I(s),De=>De.id,(De,Le)=>{var we=VM(),te=Gn(we);{var L=Y=>{var Q=HM(),j=x(Q);je(()=>{ui(Q,`
                            left: ${I(Le).x??""}%; 
                            background-color: ${I(Le).type==="danger"?"#ef4444":"#00FF94"};
                            box-shadow: 0 0 10px ${I(Le).type==="danger"?"#ef4444":"#00FF94"};
                            opacity: ${I(Le).status==="blocked"?0:1};
                            transform: scale(${I(Le).status==="blocked"?2:1});
                        `),ui(j,`background: linear-gradient(to right, transparent, ${I(Le).type==="danger"?"#ef4444":"#00FF94"})`)}),ue(Y,Q)};dt(te,Y=>{(I(Le).status==="moving"||I(Le).status==="blocked")&&Y(L)})}var b=R(te,2);{var F=Y=>{var Q=GM();je(()=>ui(Q,`left: ${I(Le).x??""}%;`)),ue(Y,Q)};dt(b,Y=>{I(Le).status==="blocked"&&Y(F)})}ue(De,we)});var Ke=R(w,2),Je=x(Ke),tt=x(Je),ze=R(x(tt),2),ct=R(Je,2);{var U=De=>{var Le=WM();Jt(3,Le,()=>xp,()=>({duration:400})),ue(De,Le)};dt(ct,De=>{I(a)&&De(U)})}je(()=>{Ne(y,1,`px-6 py-2 rounded border transition-all duration-300
            ${I(t)==="safe"?"bg-[#00FF94]/20 border-[#00FF94] text-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ne(_,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${I(t)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ne(A,1,`relative inline-flex rounded-full h-3 w-3 ${I(t)==="danger"?"bg-red-500":"bg-gray-500"}`),Ne(N,1,`relative z-10 w-32 h-32 rounded-full border-2 ${I(t)==="danger"?"border-red-500/50 animate-pulse":"border-[#00FF94]/30"} flex items-center justify-center bg-black/20`),Ne(B,1,`absolute inset-0 rounded-full border border-dashed ${I(t)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-[#00FF94]/20 animate-[spin_10s_linear_infinite]"}`),Ne($,1,`text-[#00FF94] ${I(t)==="danger"?"text-red-500":""}`),Ne(G,1,`text-lg font-bold ${I(t)==="danger"?"text-red-400":"text-[#00FF94]"}`),k(Z,I(t)==="danger"?"VOLATILITY SPIKE":"ACTIVE INGESTION"),Ne(le,1,`absolute -inset-8 rounded-full bg-[#00FF94]/10 blur-xl transition-opacity duration-200
                    ${I(i)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Ne(Ae,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900/40
                    ${I(i)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-[#00FF94]/30"}`),Ne(Ie,1,`text-[#00FF94] transition-transform duration-200 ${I(i)?"scale-90 text-red-500":""}`),Ne(J,1,`text-lg font-bold ${I(i)?"text-red-400 animate-pulse":"text-[#00FF94]"} transition-colors`),k(ne,I(i)?"COMPUTING FRACTALS":"PURE ANALYSIS"),Ne(ze,0,`w-6 h-6 text-[#00FF94] transition-transform duration-300 ${I(a)?"rotate-180":""}`)}),Vt("click",y,()=>Oe(t,"safe")),Vt("click",_,()=>Oe(t,"danger")),Vt("click",Je,()=>Oe(a,!I(a))),ue(n,m),Dt()}var qM=Pe('<div class="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/5"><span class="text-accent font-mono text-lg leading-none mt-0.5">▸</span> <span class="text-gray-300 text-sm"> </span></div>'),YM=Pe('<span class="px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs"> </span>'),jM=Pe('<div class="grid grid-cols-12 text-xs border-b border-white/5 hover:bg-white/5 transition-colors"><div class="col-span-1 p-3 text-center text-gray-600 font-mono"> </div> <div class="col-span-3 p-3 text-gray-300 font-medium"> </div> <div class="col-span-4 p-3 text-accent/90"> </div> <div class="col-span-4 p-3 text-red-400/90"> </div></div>'),KM=Pe('<div class="p-3 border border-red-400/20 rounded-lg bg-red-400/5"><div class="text-red-400 font-mono text-xs font-bold mb-1"> </div> <div class="text-gray-400 text-xs"> </div></div>'),ZM=Pe('<span class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">● LIVE</span>'),JM=Pe('<li class="text-xs text-gray-400 flex items-start gap-2"><span class="text-gray-600 mt-0.5">–</span> </li>'),QM=Pe('<div><div class="flex items-center justify-between"><span class="font-mono text-xs tracking-widest"> </span> <!></div> <h4 class="font-bold text-white text-sm"> </h4> <ul class="space-y-1"></ul></div>'),eE=Pe('<div class="w-full relative z-10 pointer-events-auto text-white"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> </a> <section><div class="max-w-4xl w-full text-center space-y-8"><div class="flex flex-wrap justify-center gap-3 mb-4"><span class="px-3 py-1 border border-accent/40 rounded-full bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Go 1.23</span> <span class="px-3 py-1 border border-blue-400/40 rounded-full bg-blue-400/10 text-blue-400 font-mono text-xs tracking-widest uppercase">NATS JetStream</span> <span class="px-3 py-1 border border-purple-400/40 rounded-full bg-purple-400/10 text-purple-400 font-mono text-xs tracking-widest uppercase">Wails Desktop</span></div> <h1 class="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter">ARK STREAMS</h1> <h2 class="text-xl md:text-2xl text-gray-400 font-light"> </h2> <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"><div class="text-center"><div class="text-2xl font-bold text-accent font-mono">7d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Data</div></div> <div class="text-center border-x border-white/10"><div class="text-2xl font-bold text-accent font-mono">365d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Strategy Audit</div></div> <div class="text-center"><div class="text-2xl font-bold text-accent font-mono">∞</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Replayable</div></div></div></div></section> <section><div class="max-w-3xl w-full space-y-10"><h3 class="text-xl text-accent font-mono tracking-wider uppercase text-center"> </h3> <div class="bg-black/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-accent font-serif">"</div> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-6"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-10"><div class="text-center max-w-4xl mx-auto space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <div class="bg-gradient-to-r from-accent/20 via-purple-900/20 to-accent/20 border border-accent/30 rounded-xl p-5 backdrop-blur-sm"><p class="text-base text-accent font-mono mb-1"> </p> <p class="text-xs text-gray-400"> </p></div></div> <div class="w-full"><!></div> <div class="flex flex-wrap justify-center gap-3"></div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="w-full overflow-hidden border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm"><div class="grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/5 border-b border-white/10"><div class="col-span-1 p-3 text-center">#</div> <div class="col-span-3 p-3">Filter</div> <div class="col-span-4 p-3 text-accent/80">▲ Long</div> <div class="col-span-4 p-3 text-red-400/80">▼ Short</div></div> <!></div> <div class="space-y-2"><div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Exit Conditions — first to trigger wins</div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"></div></div> <div class="p-4 border border-white/10 rounded-lg bg-white/5 text-xs text-gray-400 font-mono"><span class="text-accent">PaperBroker</span> — in-memory matching engine · position pyramiding · MFE/MAE tracking · FixedFractionalRM · used for live paper trading and backtests</div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-2xl w-full text-center space-y-8"><p class="text-3xl md:text-5xl font-mono text-white leading-snug uppercase tracking-tighter"> </p> <div class="flex justify-center gap-8 mt-12 opacity-50 text-xs font-mono tracking-widest uppercase"><span> </span> <span>•</span> <span> </span> <span>•</span> <span> </span></div> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="#/" class="px-8 py-3 bg-accent hover:bg-accent/80 text-black rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">BACK TO HOME</a></div></div></section> <div class="h-12"></div></div>');function tE(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative",s=[{id:"01",label:"Alligator Transition",long:"Bias just turned Bullish",short:"Bias just turned Bearish"},{id:"02",label:"Alligator Spread",long:"Jaw/teeth/lips spread above threshold",short:"Same"},{id:"03",label:"BB Squeeze Gate",long:"BB width above 50th percentile (last 300 bars)",short:"Same"},{id:"04",label:"Awesome Oscillator",long:"AO > 0 and accelerating (green bar)",short:"AO < 0 and accelerating (red bar)"},{id:"05",label:"Gator Mouth",long:"Current mouth wider than previous bar",short:"Same"},{id:"06",label:"Vol + MFI",long:"—",short:"Volume above SMA and MFI in GREEN or FAKE quadrant"}],o=[{label:"Take Profit",detail:"2 × ATR(14) from entry"},{label:"Stop Loss",detail:"2 × ATR(14) on the opposite side"},{label:"Trend Reversal",detail:"Alligator bias flips against position"},{label:"Teeth Touch",detail:"Price touches teeth with 2-bar debounce"}],l=[{phase:"PHASE 1",name:"Single-Node Intelligence",status:"current",items:["Single Go binary, all workers","NATS persists everything","AlligatorTrend on BTCUSDT + XAUUSDT","Nexus Terminal desktop"]},{phase:"PHASE 2",name:"Symbol & Exchange Expansion",status:"next",items:["Symbol-agnostic pipeline","New pair = new collector only","Strategies pick up via market.analyzed.*","Liquidation heatmap (KV price bins)"]},{phase:"PHASE 3",name:"Intelligence Layer",status:"soon",items:["On-chain integration (Aave/Compound)","AI Snapshot API → LLM context","Agentic tools (function-calling)","CoinGlass + global liquidation data"]},{phase:"PHASE 4",name:"Distributed Cluster",status:"later",items:["3-node NATS JetStream cluster","Raft consensus, stream replication","Independent Engine / Strategy / API nodes","Nexus Terminal connects to any node"]}],c={current:"text-accent border-accent bg-accent/10",next:"text-blue-400 border-blue-400/50 bg-blue-400/10",soon:"text-purple-400 border-purple-400/50 bg-purple-400/10",later:"text-gray-500 border-gray-600 bg-gray-500/10"};Gt();var d=eE(),h=x(d),u=x(h);DM(u,{size:16});var p=R(u),v=R(h,2);Ne(v,1,mn(a),"svelte-17y31qk");var g=x(v),m=R(x(g),4),f=x(m),y=R(v,2);Ne(y,1,mn(a),"svelte-17y31qk");var _=x(y),E=x(_),S=x(E),T=R(E,2),A=R(x(T),2),D=x(A),M=R(T,2);Wt(M,4,()=>["arkStreams.section1.cap1","arkStreams.section1.cap2","arkStreams.section1.cap3","arkStreams.section1.cap4"],Qt,(ee,ae)=>{var Fe=qM(),nt=R(x(Fe),2),rt=x(nt);je(Nt=>k(rt,Nt),[()=>r()(ae)],Et),ue(ee,Fe)});var w=R(y,2);Ne(w,1,mn(a),"svelte-17y31qk");var P=x(w),N=x(P),B=x(N),$=x(B),z=R(B,2),W=x(z),G=R(N,2),Z=x(G);BM(Z);var se=R(w,2);Ne(se,1,mn(a),"svelte-17y31qk");var ie=x(se),le=x(ie),Ae=x(le),Ie=x(Ae),We=R(Ae,2),Ze=x(We),J=R(We,2),ne=x(J),pe=x(ne),ke=R(ne,2),ge=x(ke),Xe=R(le,2),ht=x(Xe);$M(ht,{});var Ke=R(Xe,2);Wt(Ke,4,()=>["Alligator (SMMA jaw/teeth/lips)","Awesome Oscillator","Accelerator Oscillator","Market Facilitation Index","Fractal highs/lows"],Qt,(ee,ae)=>{var Fe=YM(),nt=x(Fe);je(()=>k(nt,ae)),ue(ee,Fe)});var Je=R(se,2);Ne(Je,1,mn(a),"svelte-17y31qk");var tt=x(Je),ze=x(tt),ct=x(ze),U=x(ct),De=R(ct,2),Le=x(De),we=R(ze,2),te=R(x(we),2);Wt(te,1,()=>s,Qt,(ee,ae)=>{var Fe=jM(),nt=x(Fe),rt=x(nt),Nt=R(nt,2),qt=x(Nt),ni=R(Nt,2),$n=x(ni),qn=R(ni,2),ii=x(qn);je(()=>{k(rt,I(ae).id),k(qt,I(ae).label),k($n,I(ae).long),k(ii,I(ae).short)}),ue(ee,Fe)});var L=R(we,2),b=R(x(L),2);Wt(b,5,()=>o,Qt,(ee,ae)=>{var Fe=KM(),nt=x(Fe),rt=x(nt),Nt=R(nt,2),qt=x(Nt);je(()=>{k(rt,I(ae).label),k(qt,I(ae).detail)}),ue(ee,Fe)});var F=R(Je,2);Ne(F,1,mn(a),"svelte-17y31qk");var Y=x(F),Q=x(Y),j=x(Q),_e=x(j),ce=R(j,2),Ee=x(ce),He=R(Q,2);Wt(He,5,()=>l,Qt,(ee,ae)=>{var Fe=QM(),nt=x(Fe),rt=x(nt),Nt=x(rt),qt=R(rt,2);{var ni=Fn=>{var ri=ZM();ue(Fn,ri)};dt(qt,Fn=>{I(ae).status==="current"&&Fn(ni)})}var $n=R(nt,2),qn=x($n),ii=R($n,2);Wt(ii,5,()=>I(ae).items,Qt,(Fn,ri)=>{var yn=JM(),ai=R(x(yn));je(()=>k(ai,` ${I(ri)??""}`)),ue(Fn,yn)}),je(()=>{Ne(Fe,1,`p-5 border rounded-xl space-y-3 ${c[I(ae).status]??""} border-opacity-50`),k(Nt,I(ae).phase),k(qn,I(ae).name)}),ue(ee,Fe)});var re=R(F,2);Ne(re,1,mn(a),"svelte-17y31qk");var fe=x(re),Me=x(fe),Re=x(Me),he=R(Me,2),Qe=x(he),O=x(Qe),me=R(Qe,4),de=x(me),Se=R(me,4),oe=x(Se);je((ee,ae,Fe,nt,rt,Nt,qt,ni,$n,qn,ii,Fn,ri,yn,ai,ar,sr,Ui)=>{k(p,` [ ${ee??""} ]`),k(f,ae),k(S,`01 // ${Fe??""}`),k(D,nt),k($,`02 // ${rt??""}`),k(W,Nt),k(Ie,`03 // ${qt??""}`),k(Ze,ni),k(pe,$n),k(ge,qn),k(U,`04 // ${ii??""}`),k(Le,Fn),k(_e,`05 // ${ri??""}`),k(Ee,yn),k(Re,ai),k(O,ar),k(de,sr),k(oe,Ui)},[()=>r()("report.nav_back"),()=>r()("arkStreams.subtitle"),()=>r()("arkStreams.section1.title"),()=>r()("arkStreams.section1.text"),()=>r()("arkStreams.section2.title"),()=>r()("arkStreams.section2.subtitle"),()=>r()("arkStreams.section3.title"),()=>r()("arkStreams.section3.role"),()=>r()("arkStreams.section3.subtitle"),()=>r()("arkStreams.section3.subtitle2"),()=>r()("arkStreams.section4.title"),()=>r()("arkStreams.section4.subtitle"),()=>r()("arkStreams.section5.title"),()=>r()("arkStreams.section5.text"),()=>r()("arkStreams.conclusion"),()=>r()("arkStreams.footer.memory"),()=>r()("arkStreams.footer.latency"),()=>r()("arkStreams.footer.stack")],Et),Jt(1,v,()=>Hn),ue(n,d),Dt(),i()}var nE=Pe('<div class="border border-white/10 bg-white/[0.02] p-3 rounded-sm flex flex-col gap-1 hover:border-white/20 transition-colors"><div class="flex items-center justify-between"><span class="text-white/30" style="font-size: 0.72em"> </span> <span style="font-size: 0.72em"> </span></div> <div class="text-white font-bold" style="font-size: 0.9em"> </div> <div class="text-white/40 leading-snug" style="font-size: 0.72em"> </div></div>'),iE=Pe('<span class="px-1.5 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF]/70 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),rE=Pe('<span class="px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),aE=Pe('<span class="ml-3">ATR: <span class="text-white/40"> </span></span>'),sE=Pe('<div><div class="flex items-start justify-between gap-2"><div><div class="flex items-center gap-2 mb-0.5"><span class="text-white font-bold tracking-tight" style="font-size: 1.1em"> </span> <!></div> <span class="text-white/30" style="font-size: 0.72em"> </span></div> <div class="text-right shrink-0"><div style="font-size: 0.8em"> </div> <div style="font-size: 0.72em"> </div></div></div> <div class="flex items-center justify-between"><div class="flex items-center gap-2"><div></div> <span style="font-size: 0.8em"> </span></div> <span style="font-size: 0.72em"> </span></div> <div><div class="flex justify-between text-white/30 mb-1.5" style="font-size: 0.6em"><span> </span> <span class="text-white font-bold" style="font-size: 1.1em"> </span> <span> </span></div> <div class="relative h-1 bg-white/10 rounded-full overflow-visible"><div></div> <div class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-black"></div></div></div> <div class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-3"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %K</div> <div style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %D</div> <div class="text-white/60" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">MA(17)</div> <div class="text-[#4CC9F0]/70" style="font-size: 0.8em"><!></div></div></div> <div class="text-white/25 tracking-wide -mt-2" style="font-size: 0.6em"> <span> </span> <!></div></div>'),oE=Pe('<div class="border border-white/10 hover:border-rose-500/20 bg-black/60 p-5 rounded-sm flex flex-col gap-4 transition-colors"><div class="flex items-center justify-between"><span class="text-rose-400 font-bold tracking-widest" style="font-size: 0.9em"> </span> <span class="text-white/30 tracking-widest" style="font-size: 0.65em"> </span></div> <div><p class="text-white/30 tracking-widest uppercase mb-2" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.8em"> </p></div> <div class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-rose-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-amber-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-emerald-400 font-bold" style="font-size: 0.8em"> </div></div></div> <div class="text-white/25 border-t border-white/5 pt-3" style="font-size: 0.65em">INVALIDAÇÃO: <span class="text-amber-400/60"> </span></div></div>'),lE=Pe('<div class="border border-white/10 bg-white/[0.01] p-4 rounded-sm"><div class="text-[#00F0FF]/40 tracking-widest mb-2" style="font-size: 0.6em"> </div> <div class="text-white font-bold mb-2" style="font-size: 0.8em"> </div> <p class="text-white/50 leading-relaxed" style="font-size: 0.72em"> </p></div>'),cE=Pe('<div class="min-h-screen bg-black text-white font-mono relative z-10"><header class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10"><div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-3 flex-wrap"><a href="/" class="text-[#00F0FF]/60 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"> </a> <span class="text-white/20">/</span> <span class="text-white text-xs tracking-widest font-bold"> </span> <span class="hidden md:inline text-white/20">/</span> <span class="hidden md:inline text-[#00F0FF]/70 text-xs"> </span></div> <div class="flex items-center gap-3 flex-wrap justify-end"><div class="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-sm"><div class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div> <span class="text-amber-400 text-[10px] tracking-widest font-bold"> </span></div> <span class="hidden lg:inline text-white/30 text-[10px]"> </span> <div class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden" aria-label="Font size controls"><button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Decrease font size"> </button> <span class="text-[10px] text-white/30 px-1 tabular-nums"> </span> <button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Increase font size"> </button></div> <div class="hidden md:block"><!></div></div></div> <div class="md:hidden px-4 pb-2 border-t border-white/5"><!></div></header> <div class="max-w-7xl mx-auto px-4 py-8 space-y-10"><div class="space-y-3"><div class="flex items-baseline gap-3 flex-wrap"><span class="text-[#00F0FF]/40 tracking-[0.3em] uppercase" style="font-size: 0.72em">REL-OP</span> <span class="text-[#00F0FF]/40" style="font-size: 0.72em">·</span> <span class="text-white/20 tracking-widest" style="font-size: 0.72em"> </span></div> <h1 class="font-bold tracking-tight text-white leading-tight" style="font-size: clamp(1.6rem, 3vw + 1rem, 3rem)"> <span class="text-white/30 block md:inline" style="font-size: 0.75em"> </span></h1> <p class="text-[#4CC9F0]/70 max-w-2xl leading-relaxed" style="font-size: 0.9em"> </p> <div class="flex gap-4 flex-wrap text-white/30 tracking-widest pt-1" style="font-size: 0.65em"><span> </span> <span>·</span> <span> </span></div></div> <div class="border border-amber-500/20 bg-amber-500/5 p-4 rounded-sm flex gap-3"><span class="text-amber-400 shrink-0 mt-0.5" style="font-size: 0.8em">⚠</span> <p class="text-amber-400/80 leading-relaxed" style="font-size: 0.8em"><strong class="text-amber-400"> </strong> <!></p></div> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div></section> <section><div class="flex items-center gap-4 mb-4"><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase" style="font-size: 0.65em"> </h2> <div class="flex-1 h-px bg-white/5"></div> <span class="text-rose-400/60 tracking-widest" style="font-size: 0.65em">SHORT · ARMED · HALF</span></div> <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm mb-4 grid md:grid-cols-2 gap-6"><div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div> <div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div></div> <div class="grid md:grid-cols-2 gap-4 mb-4"></div> <div class="border border-white/5 bg-white/[0.01] p-4 rounded-sm flex items-start gap-3"><span class="text-white/30 font-bold shrink-0" style="font-size: 0.8em"> </span> <p class="text-white/50 leading-relaxed" style="font-size: 0.8em"><!></p></div> <div class="mt-4 p-4 border-l-2 border-[#00F0FF]/20 bg-[#00F0FF]/[0.02]"><p class="text-[#00F0FF]/50 uppercase tracking-widest mb-1" style="font-size: 0.65em"> </p> <p class="text-white/60 leading-relaxed" style="font-size: 0.8em"><!></p></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"></div></section> <section class="border-t border-white/5 pt-6"><div class="flex flex-wrap gap-6 text-white/30" style="font-size: 0.65em"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> <span><strong class="text-emerald-400">ARMED</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div> <span><strong class="text-amber-400">STANDBY</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div> <span><strong class="text-[#00F0FF]">IN_POSITION</strong> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">FULL</span> <span> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">HALF</span> <span> </span></div></div> <p class="text-white/15 mt-4" style="font-size: 0.55em"> </p></section></div></div>');function dE(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Xn,"$t",t);let a=pt(14);const s=11,o=20;ti(()=>{document.documentElement.style.scrollSnapType="none",document.documentElement.style.fontSize="16px"}),uf(()=>{document.documentElement.style.scrollSnapType="",document.documentElement.style.fontSize=""});const l={week:"S01",start:"01/06/2026",end:"05/06/2026",generated:"2026-05-31",regime:"RISK-ON ESTREITO",methodology:"Triple Screen (Elder) + Sistema de Impulso",regimeNote:"Apetite a risco concentrado em large-cap US. Commodities e alt-risk corrigindo. Real estruturalmente forte."},c=Ye=>Ye.toFixed(2),d=Ye=>Ye.toFixed(4),h=Ye=>Ye.toLocaleString("pt-BR",{maximumFractionDigits:2}),u=[{symbol:"BTC/USD",labelKey:"btc",roleKey:"role_primary",bias:"SHORT",status:"ARMED",conviction:"HALF",impulse:"blue_to_red",close:75708,ma17:76533.35,stochK:42.08,stochD:28.63,zoneKey:"zone_neutral_up",atr:null,support:73936,resistance:76606.5,priority:3,noteKey:"btc_note",formatFn:h},{symbol:"XAU/USD",labelKey:"xau",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:4529.57,ma17:4576.27,stochK:68.77,stochD:56.19,zoneKey:"zone_rising_overbought",atr:101.35,support:4500,resistance:4632.41,priority:1,noteKey:"xau_note",formatFn:h},{symbol:"S&P 500",labelKey:"sp",roleKey:"role_macro",bias:"LONG",status:"STANDBY",conviction:"FULL",impulse:"green",close:7580.06,ma17:7088.78,stochK:90.88,stochD:90.08,zoneKey:"zone_overbought",atr:68.83,support:7369.23,resistance:7599.38,priority:6,noteKey:"sp_note",formatFn:h},{symbol:"BOVESPA",labelKey:"bovespa",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:173787,ma17:177870.33,stochK:18.94,stochD:34.34,zoneKey:"zone_low_k_below_d",atr:2606.67,support:172686,resistance:180055,priority:2,noteKey:"bovespa_note",formatFn:h},{symbol:"USD/BRL",labelKey:"usdbrl",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"HALF",impulse:"red",close:5.0368,ma17:5.1099,stochK:64.81,stochD:66.89,zoneKey:"zone_rising",atr:null,support:4.995,resistance:5.1099,priority:4,noteKey:"usdbrl_note",formatFn:d},{symbol:"BRENT",labelKey:"brent",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"FULL",impulse:"red",close:93.46,ma17:94.37,stochK:11.51,stochD:13.07,zoneKey:"zone_oversold",atr:5.45,support:92.48,resistance:101.06,priority:5,noteKey:"brent_note",formatFn:c}],p=[...u].sort((Ye,Ce)=>Ye.priority-Ce.priority),v=[{id:"A",nameKey:"sc_a_name",conditionKey:"sc_a_condition",action:"EnterShort",stop:"76.800",target:"73.936",targetKey:"sc_a_target_label",invalidationKey:"sc_a_invalidation"},{id:"B",nameKey:"sc_b_name",conditionKey:"sc_b_condition",action:"EnterShort",stop:"74.100",target:"72.000 → 58.334",targetKey:"sc_b_target_label",invalidationKey:"sc_b_invalidation"}];function g(Ye,Ce,Mt){const zt=Mt-Ce;return zt===0?50:Math.min(100,Math.max(0,(Ye-Ce)/zt*100))}function m(Ye){return Ye==="ARMED"?"text-emerald-400":Ye==="IN_POSITION"?"text-[#00F0FF]":"text-amber-400"}function f(Ye){return Ye==="ARMED"?"shadow-[0_0_8px_rgba(52,211,153,0.4)] border-emerald-500/40":Ye==="IN_POSITION"?"shadow-[0_0_8px_rgba(0,240,255,0.4)] border-[#00F0FF]/40":"shadow-[0_0_6px_rgba(251,191,36,0.2)] border-amber-500/30"}function y(Ye){return Ye==="SHORT"?"text-rose-400":"text-emerald-400"}function _(Ye){return Ye==="red"?"report.impulse_red":Ye==="green"?"report.impulse_green":"report.impulse_blue_red"}function E(Ye){return Ye==="red"?"text-rose-500":Ye==="green"?"text-emerald-400":"text-amber-400"}function S(Ye){return Ye==="zone_overbought"?"text-rose-400":Ye==="zone_oversold"?"text-amber-400":"text-[#4CC9F0]"}const T={btc:"Bitcoin",xau:"Ouro / Gold",sp:"S&P 500",bovespa:"Ibovespa",usdbrl:"Dólar / Real",brent:"Petróleo Brent"};Gt();var A=cE(),D=x(A),M=x(D),w=x(M),P=x(w),N=x(P),B=R(P,4),$=x(B),z=R(B,4),W=x(z),G=R(w,2),Z=x(G),se=R(x(Z),2),ie=x(se),le=R(Z,2),Ae=x(le),Ie=R(le,2),We=x(Ie),Ze=x(We),J=R(We,2),ne=x(J),pe=R(J,2),ke=x(pe),ge=R(Ie,2),Xe=x(ge);td(Xe,{only:["pt","en"]});var ht=R(M,2),Ke=x(ht);td(Ke,{only:["pt","en"]});var Je=R(D,2),tt=x(Je),ze=x(tt),ct=R(x(ze),4),U=x(ct),De=R(ze,2),Le=x(De),we=R(Le),te=x(we),L=R(De,2),b=x(L),F=R(L,2),Y=x(F),Q=x(Y),j=R(Y,4),_e=x(j),ce=R(tt,2),Ee=R(x(ce),2),He=x(Ee),re=x(He),fe=R(He,2);ln(fe,()=>r()("report.warning_text"));var Me=R(ce,2),Re=x(Me),he=x(Re),Qe=R(Re,2);Wt(Qe,5,()=>p,Qt,(Ye,Ce)=>{var Mt=nE(),zt=x(Mt),lt=x(zt),Rt=x(lt),Ot=R(lt,2),Ct=x(Ot),Pt=R(zt,2),Sn=x(Pt),en=R(Pt,2),_i=x(en);je((or,Fi)=>{k(Rt,`#${I(Ce).priority??""}`),Ne(Ot,1,`font-bold ${or??""}`),k(Ct,I(Ce).status),k(Sn,I(Ce).symbol),k(_i,Fi)},[()=>m(I(Ce).status),()=>r()(`report.${I(Ce).noteKey}`)],Et),ue(Ye,Mt)});var O=R(Me,2),me=x(O),de=x(me),Se=R(me,2);Wt(Se,5,()=>u,Qt,(Ye,Ce)=>{var Mt=sE();const zt=Et(()=>g(I(Ce).close,I(Ce).support,I(Ce).resistance));var lt=x(Mt),Rt=x(lt),Ot=x(Rt),Ct=x(Ot),Pt=x(Ct),Sn=R(Ct,2);{var en=Yt=>{var un=iE(),bi=x(un);je(dr=>k(bi,dr),[()=>r()("report.role_primary")],Et),ue(Yt,un)},_i=Yt=>{var un=rE(),bi=x(un);je(dr=>k(bi,dr),[()=>r()("report.role_macro")],Et),ue(Yt,un)};dt(Sn,Yt=>{I(Ce).roleKey==="role_primary"?Yt(en):Yt(_i,!1)})}var or=R(Ot,2),Fi=x(or),Cr=R(Rt,2),Oi=x(Cr),wa=x(Oi),Pr=R(Oi,2),Ta=x(Pr),lr=R(lt,2),cr=x(lr),Ir=x(cr),Lr=R(Ir,2),Aa=x(Lr),Dr=R(cr,2),xs=x(Dr),_s=R(lr,2),bs=x(_s),ys=x(bs),Yo=x(ys),Ss=R(ys,2),jo=x(Ss),Ko=R(Ss,2),Zo=x(Ko),Jo=R(bs,2),Ra=x(Jo),Qo=R(Ra,2),Ms=R(_s,2),Es=x(Ms),zd=R(x(Es),2),_p=x(zd),Hd=R(Es,2),bp=R(x(Hd),2),yp=x(bp),Sp=R(Hd,2),Mp=R(x(Sp),2),Ep=x(Mp);{var wp=Yt=>{var un=Ci();je(bi=>k(un,bi),[()=>I(Ce).formatFn(I(Ce).ma17)],Et),ue(Yt,un)},Tp=Yt=>{var un=Ci("—");ue(Yt,un)};dt(Ep,Yt=>{I(Ce).ma17!==null?Yt(wp):Yt(Tp,!1)})}var Ap=R(Ms,2),Gd=x(Ap),el=R(Gd),Rp=x(el),Cp=R(el,2);{var Pp=Yt=>{var un=aE(),bi=R(x(un)),dr=x(bi);je(()=>k(dr,I(Ce).atr)),ue(Yt,un)};dt(Cp,Yt=>{I(Ce).atr!==null&&Yt(Pp)})}je((Yt,un,bi,dr,Ip,Lp,Dp,Np,Up,Fp,Op,Bp,kp,zp)=>{Ne(Mt,1,`border ${Yt??""} bg-black/80 backdrop-blur p-5 rounded-sm flex flex-col gap-4 hover:bg-white/[0.02] transition-all`),k(Pt,I(Ce).symbol),k(Fi,T[I(Ce).labelKey]),Ne(Oi,1,`font-bold ${un??""} tracking-widest`),k(wa,I(Ce).bias),Ne(Pr,1,`tracking-widest ${I(Ce).conviction==="FULL"?"text-white/70":"text-white/40"}`),k(Ta,I(Ce).conviction),Ne(Ir,1,`w-1.5 h-1.5 rounded-full ${I(Ce).status==="ARMED"?"bg-emerald-400":I(Ce).status==="IN_POSITION"?"bg-[#00F0FF]":"bg-amber-400"} ${I(Ce).status!=="STANDBY"?"animate-pulse":""}`),Ne(Lr,1,`font-bold ${bi??""}`),k(Aa,I(Ce).status),Ne(Dr,1,dr),k(xs,Ip),k(Yo,`SUP ${Lp??""}`),k(jo,Dp),k(Zo,`RES ${Np??""}`),Ne(Ra,1,`absolute top-0 left-0 h-full rounded-full ${I(Ce).bias==="SHORT"?"bg-rose-500/60":"bg-emerald-500/60"}`),ui(Ra,`width: ${I(zt)??""}%`),ui(Qo,`left: calc(${I(zt)??""}% - 4px)`),Ne(zd,1,`font-bold ${Up??""}`),k(_p,Fp),k(yp,Op),k(Gd,`${Bp??""}: `),Ne(el,1,kp),k(Rp,zp)},[()=>f(I(Ce).status),()=>y(I(Ce).bias),()=>m(I(Ce).status),()=>E(I(Ce).impulse),()=>r()(_(I(Ce).impulse)),()=>I(Ce).formatFn(I(Ce).support),()=>I(Ce).formatFn(I(Ce).close),()=>I(Ce).formatFn(I(Ce).resistance),()=>S(I(Ce).zoneKey),()=>I(Ce).stochK.toFixed(1),()=>I(Ce).stochD.toFixed(1),()=>r()("report.zone_label"),()=>S(I(Ce).zoneKey),()=>r()(`report.${I(Ce).zoneKey}`)],Et),ue(Ye,Mt)});var oe=R(O,2),ee=x(oe),ae=x(ee),Fe=x(ae),nt=R(ee,2),rt=x(nt),Nt=x(rt),qt=x(Nt),ni=R(Nt,2),$n=x(ni);ln($n,()=>r()("report.tide_text"));var qn=R(rt,2),ii=x(qn),Fn=x(ii),ri=R(ii,2),yn=x(ri);ln(yn,()=>r()("report.wave_text"));var ai=R(nt,2);Wt(ai,5,()=>v,Qt,(Ye,Ce)=>{var Mt=oE(),zt=x(Mt),lt=x(zt),Rt=x(lt),Ot=R(lt,2),Ct=x(Ot),Pt=R(zt,2),Sn=x(Pt),en=x(Sn),_i=R(Sn,2),or=x(_i),Fi=R(Pt,2),Cr=x(Fi),Oi=x(Cr),wa=x(Oi),Pr=R(Oi,2),Ta=x(Pr),lr=R(Cr,2),cr=x(lr),Ir=x(cr),Lr=R(cr,2),Aa=x(Lr),Dr=R(lr,2),xs=x(Dr),_s=x(xs),bs=R(xs,2),ys=x(bs),Yo=R(Fi,2),Ss=R(x(Yo)),jo=x(Ss);je((Ko,Zo,Jo,Ra,Qo,Ms,Es)=>{k(Rt,`CENÁRIO ${I(Ce).id??""}`),k(Ct,Ko),k(en,Zo),k(or,Jo),k(wa,Ra),k(Ta,I(Ce).action),k(Ir,Qo),k(Aa,I(Ce).stop),k(_s,Ms),k(ys,I(Ce).target),k(jo,Es)},[()=>r()(`report.${I(Ce).nameKey}`),()=>r()("report.trigger_label"),()=>r()(`report.${I(Ce).conditionKey}`),()=>r()("report.action_label"),()=>r()("report.stop_label"),()=>r()(`report.${I(Ce).targetKey}`),()=>r()(`report.${I(Ce).invalidationKey}`)],Et),ue(Ye,Mt)});var ar=R(ai,2),sr=x(ar),Ui=x(sr),ps=R(sr,2),Rr=x(ps);ln(Rr,()=>r()("report.sc_c_text"));var ms=R(ar,2),Ea=x(ms),Wo=x(Ea),Xo=R(Ea,2),$o=x(Xo);ln($o,()=>r()("report.macro_implication_text"));var vs=R(oe,2),gs=x(vs),qo=x(gs),C=R(gs,2);Wt(C,4,()=>["2pct","6pct","conv","hier"],Qt,(Ye,Ce)=>{var Mt=lE(),zt=x(Mt),lt=x(zt),Rt=R(zt,2),Ot=x(Rt),Ct=R(Rt,2),Pt=x(Ct);je((Sn,en,_i)=>{k(lt,Sn),k(Ot,en),k(Pt,_i)},[()=>r()(`report.rule_${Ce}_id`),()=>r()(`report.rule_${Ce}_title`),()=>r()(`report.rule_${Ce}_body`)],Et),ue(Ye,Mt)});var H=R(vs,2),K=x(H),q=x(K),X=R(x(q),2),ve=R(x(X)),Te=R(q,2),be=R(x(Te),2),Ue=R(x(be)),Be=R(Te,2),qe=R(x(Be),2),Ge=R(x(qe)),at=R(Be,2),St=R(x(at),2),Ut=x(St),Ft=R(at,2),wt=R(x(Ft),2),Ve=x(wt),bt=R(K,2),mt=x(bt);je((Ye,Ce,Mt,zt,lt,Rt,Ot,Ct,Pt,Sn,en,_i,or,Fi,Cr,Oi,wa,Pr,Ta,lr,cr,Ir,Lr,Aa,Dr)=>{k(N,Ye),k($,Ce),k(W,`${Mt??""}
          ${l.start} – ${l.end}`),k(ie,l.regime),k(Ae,`${zt??""}
          ${l.generated}`),We.disabled=I(a)<=s,k(Ze,lt),k(ne,I(a)),pe.disabled=I(a)>=o,k(ke,Rt),ui(Je,`font-size: ${I(a)??""}px`),k(U,l.week),k(Le,`${Ot??""} `),k(te,`— ${l.start}–${l.end}`),k(b,l.regimeNote),k(Q,`${Ct??""}: ${l.methodology}`),k(_e,`${Pt??""}: MARÉ MME(17)+MACD · ONDA STOCH(5,3,3) · VOL ATR(14)`),k(re,Sn),k(he,en),k(de,_i),k(Fe,or),k(qt,Fi),k(Fn,Cr),k(Ui,Oi),k(Wo,wa),k(qo,Pr),k(ve,` —
            ${Ta??""}`),k(Ue,` —
            ${lr??""}`),k(Ge,` —
            ${cr??""}`),k(Ut,`— ${Ir??""}`),k(Ve,`— ${Lr??""}`),k(mt,`NEXUS QUANT · REL-OP-${l.week} · ${Aa??""}
        ${l.generated} · ${Dr??""}
        ${l.start}–${l.end} · ${l.methodology}`)},[()=>r()("report.nav_back"),()=>r()("report.nav_title"),()=>r()("report.nav_week"),()=>r()("report.generated_label"),()=>r()("report.font_decrease"),()=>r()("report.font_increase"),()=>r()("report.page_title"),()=>r()("report.methodology_label"),()=>r()("report.indicators_label"),()=>r()("report.warning_title"),()=>r()("report.priority_title"),()=>r()("report.scoreboard_title"),()=>r()("report.playbook_title"),()=>r()("report.tide_label"),()=>r()("report.wave_label"),()=>r()("report.sc_c_label"),()=>r()("report.macro_implication_title"),()=>r()("report.risk_title"),()=>r()("report.legend_armed"),()=>r()("report.legend_standby"),()=>r()("report.legend_in_position"),()=>r()("report.legend_full"),()=>r()("report.legend_half"),()=>r()("report.generated_label"),()=>r()("report.nav_week")],Et),Vt("click",We,()=>Oe(a,Math.max(s,I(a)-1))),Vt("click",pe,()=>Oe(a,Math.min(o,I(a)+1))),Jt(1,A,()=>Hn,()=>({duration:300})),ue(n,A),Dt(),i()}function uE(n,{from:e,to:t},i={}){var{delay:r=0,duration:a=T=>Math.sqrt(T)*120,easing:s=fM}=i,o=getComputedStyle(n),l=o.transform==="none"?"":o.transform,[c,d]=o.transformOrigin.split(" ").map(parseFloat);c/=n.clientWidth,d/=n.clientHeight;var h=hE(n),u=n.clientWidth/t.width/h,p=n.clientHeight/t.height/h,v=e.left+e.width*c,g=e.top+e.height*d,m=t.left+t.width*c,f=t.top+t.height*d,y=(v-m)*u,_=(g-f)*p,E=e.width/t.width,S=e.height/t.height;return{delay:r,duration:typeof a=="function"?a(Math.sqrt(y*y+_*_)):a,easing:s,css:(T,A)=>{var D=A*y,M=A*_,w=T+A*E,P=T+A*S;return`transform: ${l} translate(${D}px, ${M}px) scale(${w}, ${P});`}}}function hE(n){if("currentCSSZoom"in n)return n.currentCSSZoom;for(var e=n,t=1;e!==null;)t*=+getComputedStyle(e).zoom,e=e.parentElement;return t}var fE=Pe('<span class="text-[8px] px-1 py-0.2 bg-white text-black font-bold animate-pulse uppercase rounded-sm">NEW</span>'),pE=Pe('<div><div></div> <div class="pl-2 space-y-1"><div class="flex items-center gap-2"><span> </span> <!></div> <div class="flex items-baseline gap-2"><span class="text-lg font-bold text-white tracking-tight"> </span> <span class="text-white/40 text-[10px]"> </span></div></div> <button class="text-white/20 hover:text-white/60 transition-colors duration-200 p-1 text-xs cursor-pointer focus:outline-none" aria-label="Dismiss alert">✕</button></div>'),mE=Pe('<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[320px] pointer-events-none font-mono" aria-live="polite"><div class="text-[9px] text-white/40 tracking-[0.25em] flex items-center justify-between px-2 uppercase select-none"><span>:: Whale Liquidation Stream</span> <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div> <span>LIVE</span></div></div> <!></div>');function vE(n,e){Lt(e,!1);const[t,i]=bn(),r=()=>dn(Ji,"$telemetry",t);let a=pt([]),s=pt(null);function o(p){return p>=1e6?`$${(p/1e6).toFixed(2)}M`:p>=1e3?`$${(p/1e3).toFixed(0)}K`:`$${p.toFixed(0)}`}function l(p){return p.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})}function c(p){Oe(a,I(a).filter(v=>v.id!==p))}Qi(()=>(r(),I(s),I(a)),()=>{const p=r().latestWhaleLiq;if(p&&p!==I(s)){Oe(s,p);const v={...p,id:Math.random().toString(36).substring(2,9),isNew:!0};Oe(a,[v,...I(a)].slice(0,4));const g=v.id;setTimeout(()=>{Oe(a,I(a).map(m=>m.id===g?{...m,isNew:!1}:m))},1500),setTimeout(()=>{Oe(a,I(a).filter(m=>m.id!==g))},8e3)}}),ma(),Gt();var d=ga(),h=Gn(d);{var u=p=>{var v=mE(),g=x(v),m=R(g,2);Wt(m,9,()=>I(a),f=>f.id,(f,y)=>{var _=pE(),E=x(_),S=R(E,2),T=x(S),A=x(T),D=x(A),M=R(A,2);{var w=G=>{var Z=fE();ue(G,Z)};dt(M,G=>{I(y).isNew&&G(w)})}var P=R(T,2),N=x(P),B=x(N),$=R(N,2),z=x($),W=R(S,2);je((G,Z)=>{Ne(_,1,`pointer-events-auto relative border bg-black/95 p-4 rounded-sm backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-between group transition-all duration-300
          ${I(y).side==="buy"||I(y).side==="BUY"?I(y).isNew?"border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]":"border-rose-950/70 hover:border-rose-800":I(y).isNew?"border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]":"border-emerald-950/70 hover:border-emerald-800"}`),Ne(E,1,`absolute left-0 top-0 bottom-0 w-[3px] 
          ${I(y).side==="buy"||I(y).side==="BUY"?"bg-rose-500":"bg-emerald-500"}`),Ne(A,1,`text-xs font-bold uppercase tracking-wider
              ${I(y).side==="buy"||I(y).side==="BUY"?"text-rose-400":"text-emerald-400"}`),k(D,I(y).side==="buy"||I(y).side==="BUY"?"▼ SHORT LIQUIDATED":"▲ LONG LIQUIDATED"),k(B,G),k(z,`@ $${Z??""}`)},[()=>o(I(y).usd_value),()=>l(I(y).price)],Et),Vt("click",W,()=>c(I(y).id)),s0(_,()=>uE,()=>({duration:300})),Jt(1,_,()=>so,()=>({x:200,opacity:0,duration:400})),Jt(2,_,()=>Hn,()=>({duration:300})),ue(f,_)}),Jt(3,g,()=>Hn),ue(p,v)};dt(h,p=>{I(a).length>0&&p(u)})}ue(n,d),Dt(),i()}var gE=Pe("<!> <!> <!> <!> <!> <!>",1),xE=Pe('<main class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"><!> <!> <!> <!></main>');function _E(n,e){Lt(e,!1);let t=pt(window.location.hash);ti(()=>{R1();const d=()=>Oe(t,window.location.hash);return window.addEventListener("hashchange",d),()=>{window.removeEventListener("hashchange",d),C1()}}),Gt();var i=xE(),r=x(i);M1(r,{});var a=R(r,2);nM(a,{});var s=R(a,2);vE(s,{});var o=R(s,2);{var l=d=>{CM(d,{})},c=(d,h)=>{{var u=v=>{tE(v,{})},p=(v,g)=>{{var m=y=>{dE(y,{})},f=y=>{var _=gE(),E=Gn(_);F1(E,{});var S=R(E,2);B1(S,{});var T=R(S,2);z1(T,{});var A=R(T,2);G1(A,{});var D=R(A,2);j1(D,{});var M=R(D,2);Z1(M,{}),ue(y,_)};dt(v,y=>{I(t)==="#/relatorios"?y(m):y(f,!1)},g)}};dt(d,v=>{I(t)==="#/ark-streams"?v(u):v(p,!1)},h)}};dt(o,d=>{I(t)==="#/presentation"?d(l):d(c,!1)})}ue(n,i),Dt()}Wm(_E,{target:document.getElementById("app")});
