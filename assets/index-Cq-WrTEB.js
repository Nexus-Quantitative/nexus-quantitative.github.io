(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const $d=!1;var od=Array.isArray,$p=Array.prototype.indexOf,ld=Array.from,Th=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Ah=Object.getOwnPropertyDescriptors,Xp=Object.prototype,qp=Array.prototype,cd=Object.getPrototypeOf,Xd=Object.isExtensible;function Qr(n){return typeof n=="function"}const dn=()=>{};function Yp(n){return n()}function lo(n){for(var e=0;e<n.length;e++)n[e]()}const ii=2,Rh=4,Co=8,Po=16,Fi=32,fa=64,co=128,Fn=256,uo=512,Sn=1024,xi=2048,ar=4096,Ii=8192,Io=16384,Ch=32768,pa=65536,jp=1<<17,Kp=1<<19,Ph=1<<20,$l=1<<21,tr=Symbol("$state"),Ih=Symbol("legacy props"),Zp=Symbol("");let ho=[];function Jp(){var n=ho;ho=[],lo(n)}function is(n){ho.length===0&&queueMicrotask(Jp),ho.push(n)}function Lh(n){return n===this.v}function Dh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function dd(n){return!Dh(n,this.v)}function Qp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function em(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tm(n){throw new Error("https://svelte.dev/e/effect_orphan")}function nm(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function im(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function rm(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function am(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ma=!1,om=!1;function lm(){ma=!0}const ud=1,hd=2,Nh=4,cm=8,dm=16,um=1,hm=2,fm=4,pm=8,mm=16,vm=1,gm=2,xm=4,Uh=1,_m=2,Tn=Symbol(),bm="http://www.w3.org/1999/xhtml",ym="http://www.w3.org/2000/svg";function Fh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Dt=null;function qd(n){Dt=n}function Rt(n,e=!1,t){var i=Dt={p:Dt,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};ma&&!e&&(Dt.l={s:null,u:null,r1:[],r2:ja(!1)}),fd(()=>{i.d=!0})}function Ct(n){const e=Dt;if(e!==null){const s=e.e;if(s!==null){var t=St,i=At;e.e=null;try{for(var r=0;r<s.length;r++){var a=s[r];_i(a.effect),Xn(a.reaction),Oo(a.fn)}}finally{_i(t),Xn(i)}}Dt=e.p,e.m=!0}return{}}function Lo(){return!ma||Dt!==null&&Dt.l===null}function Sr(n){if(typeof n!="object"||n===null||tr in n)return n;const e=cd(n);if(e!==Xp&&e!==qp)return n;var t=new Map,i=od(n),r=Hi(0),a=At,s=o=>{var l=At;Xn(a);var c=o();return Xn(l),c};return i&&t.set("length",Hi(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&rm();var d=t.get(l);return d===void 0?(d=s(()=>Hi(c.value)),t.set(l,d)):ge(d,s(()=>Sr(c.value))),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0)l in o&&(t.set(l,s(()=>Hi(Tn))),nl(r));else{if(i&&typeof l=="string"){var d=t.get("length"),h=Number(l);Number.isInteger(h)&&h<d.v&&ge(d,h)}ge(c,Tn),nl(r)}return!0},get(o,l,c){var p;if(l===tr)return n;var d=t.get(l),h=l in o;if(d===void 0&&(!h||(p=er(o,l))!=null&&p.writable)&&(d=s(()=>Hi(Sr(h?o[l]:Tn))),t.set(l,d)),d!==void 0){var u=w(d);return u===Tn?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=w(d))}else if(c===void 0){var h=t.get(l),u=h==null?void 0:h.v;if(h!==void 0&&u!==Tn)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===tr)return!0;var c=t.get(l),d=c!==void 0&&c.v!==Tn||Reflect.has(o,l);if(c!==void 0||St!==null&&(!d||(u=er(o,l))!=null&&u.writable)){c===void 0&&(c=s(()=>Hi(d?Sr(o[l]):Tn)),t.set(l,c));var h=w(c);if(h===Tn)return!1}return d},set(o,l,c,d){var _;var h=t.get(l),u=l in o;if(i&&l==="length")for(var p=c;p<h.v;p+=1){var g=t.get(p+"");g!==void 0?ge(g,Tn):p in o&&(g=s(()=>Hi(Tn)),t.set(p+"",g))}h===void 0?(!u||(_=er(o,l))!=null&&_.writable)&&(h=s(()=>Hi(void 0)),ge(h,s(()=>Sr(c))),t.set(l,h)):(u=h.v!==Tn,ge(h,s(()=>Sr(c))));var x=Reflect.getOwnPropertyDescriptor(o,l);if(x!=null&&x.set&&x.set.call(d,c),!u){if(i&&typeof l=="string"){var m=t.get("length"),f=Number(l);Number.isInteger(f)&&f>=m.v&&ge(m,f+1)}nl(r)}return!0},ownKeys(o){w(r);var l=Reflect.ownKeys(o).filter(h=>{var u=t.get(h);return u===void 0||u.v!==Tn});for(var[c,d]of t)d.v!==Tn&&!(c in o)&&l.push(c);return l},setPrototypeOf(){am()}})}function nl(n,e=1){ge(n,n.v+e)}function qa(n){var e=ii|xi,t=At!==null&&(At.f&ii)!==0?At:null;return St===null||t!==null&&(t.f&Fn)!==0?e|=Fn:St.f|=Ph,{ctx:Dt,deps:null,effects:null,equals:Lh,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??St}}function ht(n){const e=qa(n);return e.equals=dd,e}function Oh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)bi(e[t])}}function Sm(n){for(var e=n.parent;e!==null;){if((e.f&ii)===0)return e;e=e.parent}return null}function Bh(n){var e,t=St;_i(Sm(n));try{Oh(n),e=qh(n)}finally{_i(t)}return e}function kh(n){var e=Bh(n),t=(Zi||(n.f&Fn)!==0)&&n.deps!==null?ar:Sn;qn(n,t),n.equals(e)||(n.v=e,n.wv=$h())}const Ya=new Map;function ja(n,e){var t={f:0,v:n,reactions:null,equals:Lh,rv:0,wv:0};return t}function Hi(n,e){const t=ja(n);return Tm(t),t}function Ke(n,e=!1){var i;const t=ja(n);return e||(t.equals=dd),ma&&Dt!==null&&Dt.l!==null&&((i=Dt.l).s??(i.s=[])).push(t),t}function ge(n,e,t=!1){At!==null&&!ui&&Lo()&&(At.f&(ii|Po))!==0&&!(_n!=null&&_n.includes(n))&&sm();let i=t?Sr(e):e;return Xl(n,i)}function Xl(n,e){if(!n.equals(e)){var t=n.v;as?Ya.set(n,e):Ya.set(n,t),n.v=e,(n.f&ii)!==0&&((n.f&xi)!==0&&Bh(n),qn(n,(n.f&Fn)===0?Sn:ar)),n.wv=$h(),zh(n,xi),Lo()&&St!==null&&(St.f&Sn)!==0&&(St.f&(Fi|fa))===0&&(Vn===null?Am([n]):Vn.push(n))}return e}function zh(n,e){var t=n.reactions;if(t!==null)for(var i=Lo(),r=t.length,a=0;a<r;a++){var s=t[a],o=s.f;(o&xi)===0&&(!i&&s===St||(qn(s,e),(o&(Sn|Fn))!==0&&((o&ii)!==0?zh(s,ar):Fo(s))))}}let Mm=!1;var Yd,Hh,Vh,Gh;function Em(){if(Yd===void 0){Yd=window,Hh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Vh=er(e,"firstChild").get,Gh=er(e,"nextSibling").get,Xd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Xd(t)&&(t.__t=void 0)}}function rs(n=""){return document.createTextNode(n)}function Nn(n){return Vh.call(n)}function Do(n){return Gh.call(n)}function v(n,e){return Nn(n)}function Pn(n,e){{var t=Nn(n);return t instanceof Comment&&t.data===""?Do(t):t}}function A(n,e=1,t=!1){let i=n;for(;e--;)i=Do(i);return i}function wm(n){n.textContent=""}let Ks=!1,ql=!1,fo=null,Ar=!1,as=!1;function jd(n){as=n}let Zs=[];let At=null,ui=!1;function Xn(n){At=n}let St=null;function _i(n){St=n}let _n=null;function Tm(n){At!==null&&At.f&$l&&(_n===null?_n=[n]:_n.push(n))}let vn=null,Dn=0,Vn=null;function Am(n){Vn=n}let Wh=1,po=0,Zi=!1;function $h(){return++Wh}function va(n){var h;var e=n.f;if((e&xi)!==0)return!0;if((e&ar)!==0){var t=n.deps,i=(e&Fn)!==0;if(t!==null){var r,a,s=(e&uo)!==0,o=i&&St!==null&&!Zi,l=t.length;if(s||o){var c=n,d=c.parent;for(r=0;r<l;r++)a=t[r],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(c)))&&(a.reactions??(a.reactions=[])).push(c);s&&(c.f^=uo),o&&d!==null&&(d.f&Fn)===0&&(c.f^=Fn)}for(r=0;r<l;r++)if(a=t[r],va(a)&&kh(a),a.wv>n.wv)return!0}(!i||St!==null&&!Zi)&&qn(n,Sn)}return!1}function Rm(n,e){for(var t=e;t!==null;){if((t.f&co)!==0)try{t.fn(n);return}catch{t.f^=co}t=t.parent}throw Ks=!1,n}function Kd(n){return(n.f&Io)===0&&(n.parent===null||(n.parent.f&co)===0)}function No(n,e,t,i){if(Ks){if(t===null&&(Ks=!1),Kd(e))throw n;return}if(t!==null&&(Ks=!0),Rm(n,e),Kd(e))throw n}function Xh(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var a=i[r];_n!=null&&_n.includes(n)||((a.f&ii)!==0?Xh(a,e,!1):e===a&&(t?qn(a,xi):(a.f&Sn)!==0&&qn(a,ar),Fo(a)))}}function qh(n){var p;var e=vn,t=Dn,i=Vn,r=At,a=Zi,s=_n,o=Dt,l=ui,c=n.f;vn=null,Dn=0,Vn=null,Zi=(c&Fn)!==0&&(ui||!Ar||At===null),At=(c&(Fi|fa))===0?n:null,_n=null,qd(n.ctx),ui=!1,po++,n.f|=$l;try{var d=(0,n.fn)(),h=n.deps;if(vn!==null){var u;if(mo(n,Dn),h!==null&&Dn>0)for(h.length=Dn+vn.length,u=0;u<vn.length;u++)h[Dn+u]=vn[u];else n.deps=h=vn;if(!Zi)for(u=Dn;u<h.length;u++)((p=h[u]).reactions??(p.reactions=[])).push(n)}else h!==null&&Dn<h.length&&(mo(n,Dn),h.length=Dn);if(Lo()&&Vn!==null&&!ui&&h!==null&&(n.f&(ii|ar|xi))===0)for(u=0;u<Vn.length;u++)Xh(Vn[u],n);return r!==null&&r!==n&&(po++,Vn!==null&&(i===null?i=Vn:i.push(...Vn))),d}finally{vn=e,Dn=t,Vn=i,At=r,Zi=a,_n=s,qd(o),ui=l,n.f^=$l}}function Cm(n,e){let t=e.reactions;if(t!==null){var i=$p.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&ii)!==0&&(vn===null||!vn.includes(e))&&(qn(e,ar),(e.f&(Fn|uo))===0&&(e.f^=uo),Oh(e),mo(e,0))}function mo(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Cm(n,t[i])}function Uo(n){var e=n.f;if((e&Io)===0){qn(n,Sn);var t=St,i=Dt,r=Ar;St=n,Ar=!0;try{(e&Po)!==0?Bm(n):Kh(n),jh(n);var a=qh(n);n.teardown=typeof a=="function"?a:null,n.wv=Wh;var s=n.deps,o;$d&&om&&n.f&xi}catch(l){No(l,n,t,i||n.ctx)}finally{Ar=r,St=t}}}function Pm(){try{nm()}catch(n){if(fo!==null)No(n,fo,null);else throw n}}function Im(){var n=Ar;try{var e=0;for(Ar=!0;Zs.length>0;){e++>1e3&&Pm();var t=Zs,i=t.length;Zs=[];for(var r=0;r<i;r++){var a=Dm(t[r]);Lm(a)}Ya.clear()}}finally{ql=!1,Ar=n,fo=null}}function Lm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Io|Ii))===0)try{va(i)&&(Uo(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Jh(i):i.fn=null))}catch(r){No(r,i,null,i.ctx)}}}function Fo(n){ql||(ql=!0,queueMicrotask(Im));for(var e=fo=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(fa|Fi))!==0){if((t&Sn)===0)return;e.f^=Sn}}Zs.push(e)}function Dm(n){for(var e=[],t=n;t!==null;){var i=t.f,r=(i&(Fi|fa))!==0,a=r&&(i&Sn)!==0;if(!a&&(i&Ii)===0){if((i&Rh)!==0)e.push(t);else if(r)t.f^=Sn;else try{va(t)&&Uo(t)}catch(l){No(l,t,null,t.ctx)}var s=t.first;if(s!==null){t=s;continue}}var o=t.parent;for(t=t.next;t===null&&o!==null;)t=o.next,o=o.parent}return e}function w(n){var e=n.f,t=(e&ii)!==0;if(At!==null&&!ui){if(!(_n!=null&&_n.includes(n))){var i=At.deps;n.rv<po&&(n.rv=po,vn===null&&i!==null&&i[Dn]===n?Dn++:vn===null?vn=[n]:(!Zi||!vn.includes(n))&&vn.push(n))}}else if(t&&n.deps===null&&n.effects===null){var r=n,a=r.parent;a!==null&&(a.f&Fn)===0&&(r.f^=Fn)}return t&&(r=n,va(r)&&kh(r)),as&&Ya.has(n)?Ya.get(n):n.v}function Ni(n){var e=ui;try{return ui=!0,n()}finally{ui=e}}const Nm=-7169;function qn(n,e){n.f=n.f&Nm|e}function vo(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(tr in n)Yl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&tr in t&&Yl(t)}}}function Yl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Yl(n[i],e)}catch{}const t=cd(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Ah(t);for(let r in i){const a=i[r].get;if(a)try{a.call(n)}catch{}}}}}function Yh(n){St===null&&At===null&&tm(),At!==null&&(At.f&Fn)!==0&&St===null&&em(),as&&Qp()}function Um(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function ga(n,e,t,i=!0){var r=St,a={ctx:Dt,deps:null,nodes_start:null,nodes_end:null,f:n|xi,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Uo(a),a.f|=Ch}catch(l){throw bi(a),l}else e!==null&&Fo(a);var s=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Ph|co))===0;if(!s&&i&&(r!==null&&Um(a,r),At!==null&&(At.f&ii)!==0)){var o=At;(o.effects??(o.effects=[])).push(a)}return a}function fd(n){const e=ga(Co,null,!1);return qn(e,Sn),e.teardown=n,e}function jl(n){Yh();var e=St!==null&&(St.f&Fi)!==0&&Dt!==null&&!Dt.m;if(e){var t=Dt;(t.e??(t.e=[])).push({fn:n,effect:St,reaction:At})}else{var i=Oo(n);return i}}function Fm(n){return Yh(),Bo(n)}function Om(n){const e=ga(fa,n,!0);return(t={})=>new Promise(i=>{t.outro?Ka(e,()=>{bi(e),i(void 0)}):(bi(e),i(void 0))})}function Oo(n){return ga(Rh,n,!1)}function Kt(n,e){var t=Dt,i={effect:null,ran:!1};t.l.r1.push(i),i.effect=Bo(()=>{n(),!i.ran&&(i.ran=!0,ge(t.l.r2,!0),Ni(e))})}function sr(){var n=Dt;Bo(()=>{if(w(n.l.r2)){for(var e of n.l.r1){var t=e.effect;(t.f&Sn)!==0&&qn(t,ar),va(t)&&Uo(t),e.ran=!1}n.l.r2.v=!1}})}function Bo(n){return ga(Co,n,!0)}function $e(n,e=[],t=qa){const i=e.map(t);return ss(()=>n(...i.map(w)))}function ss(n,e=0){return ga(Co|Po|e,n,!0)}function Cr(n,e=!0){return ga(Co|Fi,n,!0,e)}function jh(n){var e=n.teardown;if(e!==null){const t=as,i=At;jd(!0),Xn(null);try{e.call(null)}finally{jd(t),Xn(i)}}}function Kh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;(t.f&fa)!==0?t.parent=null:bi(t,e),t=i}}function Bm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Fi)===0&&bi(e),e=t}}function bi(n,e=!0){var t=!1;(e||(n.f&Kp)!==0)&&n.nodes_start!==null&&(Zh(n.nodes_start,n.nodes_end),t=!0),Kh(n,e&&!t),mo(n,0),qn(n,Io);var i=n.transitions;if(i!==null)for(const a of i)a.stop();jh(n);var r=n.parent;r!==null&&r.first!==null&&Jh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Zh(n,e){for(;n!==null;){var t=n===e?null:Do(n);n.remove(),n=t}}function Jh(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Ka(n,e){var t=[];pd(n,t,!0),Qh(t,()=>{bi(n),e&&e()})}function Qh(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function pd(n,e,t){if((n.f&Ii)===0){if(n.f^=Ii,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&e.push(s);for(var i=n.first;i!==null;){var r=i.next,a=(i.f&pa)!==0||(i.f&Fi)!==0;pd(i,e,a?t:!1),i=r}}}function Za(n){ef(n,!0)}function ef(n,e){if((n.f&Ii)!==0){n.f^=Ii,(n.f&Sn)===0&&(n.f^=Sn),va(n)&&(qn(n,xi),Fo(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&pa)!==0||(t.f&Fi)!==0;ef(t,r?e:!1),t=i}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&a.in()}}function km(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const zm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Hm(n){return zm.includes(n)}const Vm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Gm(n){return n=n.toLowerCase(),Vm[n]??n}const Wm=["touchstart","touchmove"];function $m(n){return Wm.includes(n)}function Xm(n,e){if(e){const t=document.body;n.autofocus=!0,is(()=>{document.activeElement===t&&n.focus()})}}function tf(n){var e=At,t=St;Xn(null),_i(null);try{return n()}finally{Xn(e),_i(t)}}const nf=new Set,Kl=new Set;function rf(n,e,t,i={}){function r(a){if(i.capture||za.call(e,a),!a.cancelBubble)return tf(()=>t==null?void 0:t.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?is(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Nt(n,e,t,i,r){var a={capture:i,passive:r},s=rf(n,e,t,a);(e===document.body||e===window||e===document)&&fd(()=>{e.removeEventListener(n,s,a)})}function qm(n){for(var e=0;e<n.length;e++)nf.add(n[e]);for(var t of Kl)t(n)}function za(n){var _;var e=this,t=e.ownerDocument,i=n.type,r=((_=n.composedPath)==null?void 0:_.call(n))||[],a=r[0]||n.target,s=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(s=l)}if(a=r[s]||n.target,a!==e){Th(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=At,h=St;Xn(null),_i(null);try{for(var u,p=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var x=a["__"+i];if(x!=null&&(!a.disabled||n.target===a))if(od(x)){var[m,...f]=x;m.apply(a,[n,...f])}else x.call(a,n)}catch(b){u?p.push(b):u=b}if(n.cancelBubble||g===e||g===null)break;a=g}if(u){for(let b of p)queueMicrotask(()=>{throw b});throw u}}finally{n.__root=e,delete n.currentTarget,Xn(d),_i(h)}}}function md(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function nr(n,e){var t=St;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function be(n,e){var t=(e&Uh)!==0,i=(e&_m)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=md(a?n:"<!>"+n),t||(r=Nn(r)));var s=i||Hh?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Nn(s),l=s.lastChild;nr(o,l)}else nr(s,s);return s}}function xa(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&Uh)!==0,a=`<${t}>${i?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=md(a),l=Nn(o);if(r)for(s=document.createDocumentFragment();Nn(l);)s.appendChild(Nn(l));else s=Nn(l)}var c=s.cloneNode(!0);if(r){var d=Nn(c),h=c.lastChild;nr(d,h)}else nr(c,c);return c}}function Li(n=""){{var e=rs(n+"");return nr(e,e),e}}function or(){var n=document.createDocumentFragment(),e=document.createComment(""),t=rs();return n.append(e,t),nr(e,t),n}function se(n,e){n!==null&&n.before(e)}let go=!0;function Zd(n){go=n}function B(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Ym(n,e){return jm(n,e)}const Or=new Map;function jm(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:s=!0}){Em();var o=new Set,l=h=>{for(var u=0;u<h.length;u++){var p=h[u];if(!o.has(p)){o.add(p);var g=$m(p);e.addEventListener(p,za,{passive:g});var x=Or.get(p);x===void 0?(document.addEventListener(p,za,{passive:g}),Or.set(p,1)):Or.set(p,x+1)}}};l(ld(nf)),Kl.add(l);var c=void 0,d=Om(()=>{var h=t??e.appendChild(rs());return Cr(()=>{if(a){Rt({});var u=Dt;u.c=a}r&&(i.$$events=r),go=s,c=n(h,i)||{},go=!0,a&&Ct()}),()=>{var g;for(var u of o){e.removeEventListener(u,za);var p=Or.get(u);--p===0?(document.removeEventListener(u,za),Or.delete(u)):Or.set(u,p)}Kl.delete(l),h!==t&&((g=h.parentNode)==null||g.removeChild(h))}});return Km.set(c,d),c}let Km=new WeakMap;function nt(n,e,[t,i]=[0,0]){var r=n,a=null,s=null,o=Tn,l=t>0?pa:0,c=!1;const d=(u,p=!0)=>{c=!0,h(p,u)},h=(u,p)=>{o!==(o=u)&&(o?(a?Za(a):p&&(a=Cr(()=>p(r))),s&&Ka(s,()=>{s=null})):(s?Za(s):p&&(s=Cr(()=>p(r,[t+1,i]))),a&&Ka(a,()=>{a=null})))};ss(()=>{c=!1,e(d),c||h(null,null)},l)}let Rr=null;function Jd(n){Rr=n}function $t(n,e){return e}function Zm(n,e,t,i){for(var r=[],a=e.length,s=0;s<a;s++)pd(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;wm(l),l.append(t),i.clear(),Yi(n,e[0].prev,e[a-1].next)}Qh(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(i.delete(d.k),Yi(n,d.prev,d.next)),bi(d.e,!o)}})}function zt(n,e,t,i,r,a=null){var s=n,o={flags:e,items:new Map,first:null},l=(e&Nh)!==0;if(l){var c=n;s=c.appendChild(rs())}var d=null,h=!1,u=ht(()=>{var p=t();return od(p)?p:p==null?[]:ld(p)});ss(()=>{var p=w(u),g=p.length;h&&g===0||(h=g===0,Jm(p,o,s,r,e,i,t),a!==null&&(g===0?d?Za(d):d=Cr(()=>a(s)):d!==null&&Ka(d,()=>{d=null})),w(u))})}function Jm(n,e,t,i,r,a,s){var X,z,V,H;var o=(r&cm)!==0,l=(r&(ud|hd))!==0,c=n.length,d=e.items,h=e.first,u=h,p,g=null,x,m=[],f=[],_,b,M,E;if(o)for(E=0;E<c;E+=1)_=n[E],b=a(_,E),M=d.get(b),M!==void 0&&((X=M.a)==null||X.measure(),(x??(x=new Set)).add(M));for(E=0;E<c;E+=1){if(_=n[E],b=a(_,E),M=d.get(b),M===void 0){var R=u?u.e.nodes_start:t;g=e0(R,e,g,g===null?e.first:g.next,_,b,E,i,r,s),d.set(b,g),m=[],f=[],u=g.next;continue}if(l&&Qm(M,_,E,r),(M.e.f&Ii)!==0&&(Za(M.e),o&&((z=M.a)==null||z.unfix(),(x??(x=new Set)).delete(M))),M!==u){if(p!==void 0&&p.has(M)){if(m.length<f.length){var C=f[0],L;g=C.prev;var S=m[0],T=m[m.length-1];for(L=0;L<m.length;L+=1)Qd(m[L],C,t);for(L=0;L<f.length;L+=1)p.delete(f[L]);Yi(e,S.prev,T.next),Yi(e,g,S),Yi(e,T,C),u=C,g=T,E-=1,m=[],f=[]}else p.delete(M),Qd(M,u,t),Yi(e,M.prev,M.next),Yi(e,M,g===null?e.first:g.next),Yi(e,g,M),g=M;continue}for(m=[],f=[];u!==null&&u.k!==b;)(u.e.f&Ii)===0&&(p??(p=new Set)).add(u),f.push(u),u=u.next;if(u===null)continue;M=u}m.push(M),g=M,u=M.next}if(u!==null||p!==void 0){for(var I=p===void 0?[]:ld(p);u!==null;)(u.e.f&Ii)===0&&I.push(u),u=u.next;var N=I.length;if(N>0){var O=(r&Nh)!==0&&c===0?t:null;if(o){for(E=0;E<N;E+=1)(V=I[E].a)==null||V.measure();for(E=0;E<N;E+=1)(H=I[E].a)==null||H.fix()}Zm(e,I,O,d)}}o&&is(()=>{var Q;if(x!==void 0)for(M of x)(Q=M.a)==null||Q.apply()}),St.first=e.first&&e.first.e,St.last=g&&g.e}function Qm(n,e,t,i){(i&ud)!==0&&Xl(n.v,e),(i&hd)!==0?Xl(n.i,t):n.i=t}function e0(n,e,t,i,r,a,s,o,l,c){var d=Rr,h=(l&ud)!==0,u=(l&dm)===0,p=h?u?Ke(r):ja(r):r,g=(l&hd)===0?s:ja(s),x={i:g,v:p,k:a,a:null,e:null,prev:t,next:i};Rr=x;try{return x.e=Cr(()=>o(n,p,g,c),Mm),x.e.prev=t&&t.e,x.e.next=i&&i.e,t===null?e.first=x:(t.next=x,t.e.next=x.e),i!==null&&(i.prev=x,i.e.prev=x.e),x}finally{Rr=d}}function Qd(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=n.e.nodes_start;a!==i;){var s=Do(a);r.before(a),a=s}}function Yi(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function un(n,e,t=!1,i=!1,r=!1){var a=n,s="";$e(()=>{var o=St;if(s!==(s=e()??"")&&(o.nodes_start!==null&&(Zh(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),s!=="")){var l=s+"";t?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var c=md(l);if((t||i)&&(c=Nn(c)),nr(Nn(c),c.lastChild),t||i)for(;Nn(c);)a.before(Nn(c));else a.before(c)}})}function af(n,e,...t){var i=n,r=dn,a;ss(()=>{r!==(r=e())&&(a&&(bi(a),a=null),a=Cr(()=>r(i,...t)))},pa)}function t0(n,e,t,i,r,a){var s,o,l=null,c=n,d,h=Rr;ss(()=>{const u=e()||null;var p=ym;if(u!==s){var g=Rr;Jd(h),d&&(u===null?Ka(d,()=>{d=null,o=null}):u===o?Za(d):(bi(d),Zd(!1))),u&&u!==o&&(d=Cr(()=>{if(l=document.createElementNS(p,u),nr(l,l),i){var x=l.appendChild(rs());i(l,x)}St.nodes_end=l,c.before(l)})),s=u,s&&(o=s),Zd(!0),Jd(g)}},pa)}function sf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=sf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function n0(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=sf(n))&&(i&&(i+=" "),i+=e);return i}function gn(n){return typeof n=="object"?n0(n):n??""}const eu=[...` 	
\r\f \v\uFEFF`];function i0(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var o=s+a;(s===0||eu.includes(i[s-1]))&&(o===i.length||eu.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function tu(n,e=!1){var t=e?" !important;":";",i="";for(var r in n){var a=n[r];a!=null&&a!==""&&(i+=" "+r+": "+a+t)}return i}function il(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function r0(n,e){if(e){var t="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(il)),r&&l.push(...Object.keys(r).map(il));var c=0,d=-1;const x=n.length;for(var h=0;h<x;h++){var u=n[h];if(o?u==="/"&&n[h-1]==="*"&&(o=!1):a?a===u&&(a=!1):u==="/"&&n[h+1]==="*"?o=!0:u==='"'||u==="'"?a=u:u==="("?s++:u===")"&&s--,!o&&a===!1&&s===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===x-1){if(d!==-1){var p=il(n.substring(c,d).trim());if(!l.includes(p)){u!==";"&&h++;var g=n.substring(c,h).trim();t+=" "+g+";"}}c=h+1,d=-1}}}}return i&&(t+=tu(i)),r&&(t+=tu(r,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function Me(n,e,t,i,r,a){var s=n.__className;if(s!==t||s===void 0){var o=i0(t,i,a);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n.__className=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function rl(n,e={},t,i){for(var r in t){var a=t[r];e[r]!==a&&(t[r]==null?n.style.removeProperty(r):n.style.setProperty(r,a,i))}}function bn(n,e,t,i){var r=n.__style;if(r!==e){var a=r0(e,i);a==null?n.removeAttribute("style"):n.style.cssText=a,n.__style=e}else i&&(Array.isArray(i)?(rl(n,t==null?void 0:t[0],i[0]),rl(n,t==null?void 0:t[1],i[1],"important")):rl(n,t,i));return i}const Pa=Symbol("class"),Ia=Symbol("style"),of=Symbol("is custom element"),lf=Symbol("is html");function a0(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ee(n,e,t,i){var r=cf(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[Zp]=t),t==null?n.removeAttribute(e):typeof t!="string"&&df(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function nu(n,e,t,i,r=!1){var a=cf(n),s=a[of],o=!a[lf],l=e||{},c=n.tagName==="OPTION";for(var d in e)d in t||(t[d]=null);t.class?t.class=gn(t.class):t[Pa]&&(t.class=null),t[Ia]&&(t.style??(t.style=null));var h=df(n);for(const b in t){let M=t[b];if(c&&b==="value"&&M==null){n.value=n.__value="",l[b]=M;continue}if(b==="class"){var u=n.namespaceURI==="http://www.w3.org/1999/xhtml";Me(n,u,M,i,e==null?void 0:e[Pa],t[Pa]),l[b]=M,l[Pa]=t[Pa];continue}if(b==="style"){bn(n,M,e==null?void 0:e[Ia],t[Ia]),l[b]=M,l[Ia]=t[Ia];continue}var p=l[b];if(M!==p){l[b]=M;var g=b[0]+b[1];if(g!=="$$")if(g==="on"){const E={},R="$$"+b;let C=b.slice(2);var x=Hm(C);if(km(C)&&(C=C.slice(0,-7),E.capture=!0),!x&&p){if(M!=null)continue;n.removeEventListener(C,l[R],E),l[R]=null}if(M!=null)if(x)n[`__${C}`]=M,qm([C]);else{let L=function(S){l[b].call(this,S)};var _=L;l[R]=rf(C,n,L,E)}else x&&(n[`__${C}`]=void 0)}else if(b==="style")Ee(n,b,M);else if(b==="autofocus")Xm(n,!!M);else if(!s&&(b==="__value"||b==="value"&&M!=null))n.value=n.__value=M;else if(b==="selected"&&c)a0(n,M);else{var m=b;o||(m=Gm(m));var f=m==="defaultValue"||m==="defaultChecked";if(M==null&&!s&&!f)if(a[b]=null,m==="value"||m==="checked"){let E=n;const R=e===void 0;if(m==="value"){let C=E.defaultValue;E.removeAttribute(m),E.defaultValue=C,E.value=E.__value=R?C:null}else{let C=E.defaultChecked;E.removeAttribute(m),E.defaultChecked=C,E.checked=R?C:!1}}else n.removeAttribute(b);else f||h.includes(m)&&(s||typeof M!="string")?n[m]=M:typeof M!="function"&&Ee(n,m,M)}}}return l}function cf(n){return n.__attributes??(n.__attributes={[of]:n.nodeName.includes("-"),[lf]:n.namespaceURI===bm})}var iu=new Map;function df(n){var e=iu.get(n.nodeName);if(e)return e;iu.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=Ah(i);for(var a in t)t[a].set&&e.push(a);i=cd(i)}return e}const s0=()=>performance.now(),Ci={tick:n=>requestAnimationFrame(n),now:()=>s0(),tasks:new Set};function uf(){const n=Ci.now();Ci.tasks.forEach(e=>{e.c(n)||(Ci.tasks.delete(e),e.f())}),Ci.tasks.size!==0&&Ci.tick(uf)}function o0(n){let e;return Ci.tasks.size===0&&Ci.tick(uf),{promise:new Promise(t=>{Ci.tasks.add(e={c:n,f:t})}),abort(){Ci.tasks.delete(e)}}}function As(n,e){tf(()=>{n.dispatchEvent(new CustomEvent(e))})}function l0(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function ru(n){const e={},t=n.split(";");for(const i of t){const[r,a]=i.split(":");if(!r||a===void 0)break;const s=l0(r.trim());e[s]=a.trim()}return e}const c0=n=>n;function d0(n,e,t){var i=Rr,r,a,s,o=null;i.a??(i.a={element:n,measure(){r=this.element.getBoundingClientRect()},apply(){if(s==null||s.abort(),a=this.element.getBoundingClientRect(),r.left!==a.left||r.right!==a.right||r.top!==a.top||r.bottom!==a.bottom){const l=e()(this.element,{from:r,to:a},t==null?void 0:t());s=xo(this.element,l,void 0,1,()=>{s==null||s.abort(),s=void 0})}},fix(){if(!n.getAnimations().length){var{position:l,width:c,height:d}=getComputedStyle(n);if(l!=="absolute"&&l!=="fixed"){var h=n.style;o={position:h.position,width:h.width,height:h.height,transform:h.transform},h.position="absolute",h.width=c,h.height=d;var u=n.getBoundingClientRect();if(r.left!==u.left||r.top!==u.top){var p=`translate(${r.left-u.left}px, ${r.top-u.top}px)`;h.transform=h.transform?`${h.transform} ${p}`:p}}}},unfix(){if(o){var l=n.style;l.position=o.position,l.width=o.width,l.height=o.height,l.transform=o.transform}}}),i.a.element=n}function tn(n,e,t,i){var r=(n&vm)!==0,a=(n&gm)!==0,s=r&&a,o=(n&xm)!==0,l=s?"both":r?"in":"out",c,d=e.inert,h=e.style.overflow,u,p;function g(){var b=At,M=St;Xn(null),_i(null);try{return c??(c=t()(e,(i==null?void 0:i())??{},{direction:l}))}finally{Xn(b),_i(M)}}var x={is_global:o,in(){var b;if(e.inert=d,!r){p==null||p.abort(),(b=p==null?void 0:p.reset)==null||b.call(p);return}a||u==null||u.abort(),As(e,"introstart"),u=xo(e,g(),p,1,()=>{As(e,"introend"),u==null||u.abort(),u=c=void 0,e.style.overflow=h})},out(b){if(!a){b==null||b(),c=void 0;return}e.inert=!0,As(e,"outrostart"),p=xo(e,g(),u,0,()=>{As(e,"outroend"),b==null||b()})},stop:()=>{u==null||u.abort(),p==null||p.abort()}},m=St;if((m.transitions??(m.transitions=[])).push(x),r&&go){var f=o;if(!f){for(var _=m.parent;_&&(_.f&pa)!==0;)for(;(_=_.parent)&&(_.f&Po)===0;);f=!_||(_.f&Ch)!==0}f&&Oo(()=>{Ni(()=>x.in())})}}function xo(n,e,t,i,r){var a=i===1;if(Qr(e)){var s,o=!1;return is(()=>{if(!o){var m=e({direction:a?"in":"out"});s=xo(n,m,t,i,r)}}),{abort:()=>{o=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r(),{abort:dn,deactivate:dn,reset:dn,t:()=>i};const{delay:l=0,css:c,tick:d,easing:h=c0}=e;var u=[];if(a&&t===void 0&&(d&&d(0,1),c)){var p=ru(c(0,1));u.push(p,p)}var g=()=>1-i,x=n.animate(u,{duration:l});return x.onfinish=()=>{var m=(t==null?void 0:t.t())??1-i;t==null||t.abort();var f=i-m,_=e.duration*Math.abs(f),b=[];if(_>0){var M=!1;if(c)for(var E=Math.ceil(_/16.666666666666668),R=0;R<=E;R+=1){var C=m+f*h(R/E),L=ru(c(C,1-C));b.push(L),M||(M=L.overflow==="hidden")}M&&(n.style.overflow="hidden"),g=()=>{var S=x.currentTime;return m+f*h(S/_)},d&&o0(()=>{if(x.playState!=="running")return!1;var S=g();return d(S,1-S),!0})}x=n.animate(b,{duration:_,fill:"forwards"}),x.onfinish=()=>{g=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=dn)},deactivate:()=>{r=dn},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>g()}}function au(n,e){return n===e||(n==null?void 0:n[tr])===e}function na(n={},e,t,i){return Oo(()=>{var r,a;return Bo(()=>{r=a,a=[],Ni(()=>{n!==t(...a)&&(e(n,...a),r&&au(t(...r),n)&&e(null,...r))})}),()=>{is(()=>{a&&au(t(...a),n)&&e(null,...a)})}}),n}function Ht(n=!1){const e=Dt,t=e.l.u;if(!t)return;let i=()=>vo(e.s);if(n){let r=0,a={};const s=qa(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&r++,r});i=()=>w(s)}t.b.length&&Fm(()=>{su(e,i),lo(t.b)}),jl(()=>{const r=Ni(()=>t.m.map(Yp));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&jl(()=>{su(e,i),lo(t.a)})}function su(n,e){if(n.l.s)for(const t of n.l.s)w(t);e()}let Rs=!1,Zl=Symbol();function Zt(n,e,t){const i=t[e]??(t[e]={store:null,source:Ke(void 0),unsubscribe:dn});if(i.store!==n&&!(Zl in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=dn;else{var r=!0;i.unsubscribe=vd(n,a=>{r?i.source.v=a:ge(i.source,a)}),r=!1}return n&&Zl in t?x0(n):w(i.source)}function u0(n,e){return n.set(e),e}function on(){const n={};function e(){fd(()=>{for(var t in n)n[t].unsubscribe();Th(n,Zl,{enumerable:!1,value:!0})})}return[n,e]}function h0(n){var e=Rs;try{return Rs=!1,[n(),Rs]}finally{Rs=e}}const f0={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function hf(n,e,t){return new Proxy({props:n,exclude:e},f0)}const p0={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Qr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];Qr(r)&&(r=r());const a=er(r,e);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Qr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=er(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===tr||e===Ih)return!1;for(let t of n.props)if(Qr(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props){Qr(t)&&(t=t());for(const i in t)e.includes(i)||e.push(i)}return e}};function m0(...n){return new Proxy({props:n},p0)}function ou(n){var e;return((e=n.ctx)==null?void 0:e.d)??!1}function ji(n,e,t,i){var R;var r=(t&um)!==0,a=!ma||(t&hm)!==0,s=(t&pm)!==0,o=(t&mm)!==0,l=!1,c;s?[c,l]=h0(()=>n[e]):c=n[e];var d=tr in n||Ih in n,h=s&&(((R=er(n,e))==null?void 0:R.set)??(d&&e in n&&(C=>n[e]=C)))||void 0,u=i,p=!0,g=!1,x=()=>(g=!0,p&&(p=!1,o?u=Ni(i):u=i),u);c===void 0&&i!==void 0&&(h&&a&&im(),c=x(),h&&h(c));var m;if(a)m=()=>{var C=n[e];return C===void 0?x():(p=!0,g=!1,C)};else{var f=(r?qa:ht)(()=>n[e]);f.f|=jp,m=()=>{var C=w(f);return C!==void 0&&(u=void 0),C===void 0?u:C}}if((t&fm)===0)return m;if(h){var _=n.$$legacy;return function(C,L){return arguments.length>0?((!a||!L||_||l)&&h(L?m():C),C):m()}}var b=!1,M=Ke(c),E=qa(()=>{var C=m(),L=w(M);return b?(b=!1,L):M.v=C});return s&&w(E),r||(E.equals=dd),function(C,L){if(arguments.length>0){const S=L?w(E):a&&s?Sr(C):C;if(!E.equals(S)){if(b=!0,ge(M,S),g&&u!==void 0&&(u=S),ou(E))return C;Ni(()=>w(E))}return C}return ou(E)?E.v:w(E)}}function Yn(n){Dt===null&&Fh(),ma&&Dt.l!==null?v0(Dt).m.push(n):jl(()=>{const e=Ni(n);if(typeof e=="function")return e})}function ff(n){Dt===null&&Fh(),Yn(()=>()=>Ni(n))}function v0(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}function vd(n,e,t){if(n==null)return e(void 0),t&&t(void 0),dn;const i=Ni(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const Br=[];function g0(n,e){return{subscribe:os(n,e).subscribe}}function os(n,e=dn){let t=null;const i=new Set;function r(o){if(Dh(n,o)&&(n=o,t)){const l=!Br.length;for(const c of i)c[1](),Br.push(c,n);if(l){for(let c=0;c<Br.length;c+=2)Br[c][0](Br[c+1]);Br.length=0}}}function a(o){r(o(n))}function s(o,l=dn){const c=[o,l];return i.add(c),i.size===1&&(t=e(r,a)||dn),o(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:a,subscribe:s}}function _a(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return g0(t,(s,o)=>{let l=!1;const c=[];let d=0,h=dn;const u=()=>{if(d)return;h();const g=e(i?c[0]:c,s,o);a?s(g):h=typeof g=="function"?g:dn},p=r.map((g,x)=>vd(g,m=>{c[x]=m,d&=~(1<<x),l&&u()},()=>{d|=1<<x}));return l=!0,u(),function(){lo(p),h(),l=!1}})}function x0(n){let e;return vd(n,t=>e=t)(),e}function _0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var al,lu;function b0(){if(lu)return al;lu=1;var n=function(_){return e(_)&&!t(_)};function e(f){return!!f&&typeof f=="object"}function t(f){var _=Object.prototype.toString.call(f);return _==="[object RegExp]"||_==="[object Date]"||a(f)}var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103;function a(f){return f.$$typeof===r}function s(f){return Array.isArray(f)?[]:{}}function o(f,_){return _.clone!==!1&&_.isMergeableObject(f)?x(s(f),f,_):f}function l(f,_,b){return f.concat(_).map(function(M){return o(M,b)})}function c(f,_){if(!_.customMerge)return x;var b=_.customMerge(f);return typeof b=="function"?b:x}function d(f){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(f).filter(function(_){return Object.propertyIsEnumerable.call(f,_)}):[]}function h(f){return Object.keys(f).concat(d(f))}function u(f,_){try{return _ in f}catch{return!1}}function p(f,_){return u(f,_)&&!(Object.hasOwnProperty.call(f,_)&&Object.propertyIsEnumerable.call(f,_))}function g(f,_,b){var M={};return b.isMergeableObject(f)&&h(f).forEach(function(E){M[E]=o(f[E],b)}),h(_).forEach(function(E){p(f,E)||(u(f,E)&&b.isMergeableObject(_[E])?M[E]=c(E,b)(f[E],_[E],b):M[E]=o(_[E],b))}),M}function x(f,_,b){b=b||{},b.arrayMerge=b.arrayMerge||l,b.isMergeableObject=b.isMergeableObject||n,b.cloneUnlessOtherwiseSpecified=o;var M=Array.isArray(_),E=Array.isArray(f),R=M===E;return R?M?b.arrayMerge(f,_,b):g(f,_,b):o(_,b)}x.all=function(_,b){if(!Array.isArray(_))throw new Error("first argument should be an array");return _.reduce(function(M,E){return x(M,E,b)},{})};var m=x;return al=m,al}var y0=b0();const S0=_0(y0);var Jl=function(n,e){return Jl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Jl(n,e)};function ko(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Jl(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bt=function(){return bt=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},bt.apply(this,arguments)};function M0(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function sl(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}function ol(n,e){var t=e&&e.cache?e.cache:P0,i=e&&e.serializer?e.serializer:R0,r=e&&e.strategy?e.strategy:T0;return r(n,{cache:t,serializer:i})}function E0(n){return n==null||typeof n=="number"||typeof n=="boolean"}function w0(n,e,t,i){var r=E0(i)?i:t(i),a=e.get(r);return typeof a>"u"&&(a=n.call(this,i),e.set(r,a)),a}function pf(n,e,t){var i=Array.prototype.slice.call(arguments,3),r=t(i),a=e.get(r);return typeof a>"u"&&(a=n.apply(this,i),e.set(r,a)),a}function mf(n,e,t,i,r){return t.bind(e,n,i,r)}function T0(n,e){var t=n.length===1?w0:pf;return mf(n,this,t,e.cache.create(),e.serializer)}function A0(n,e){return mf(n,this,pf,e.cache.create(),e.serializer)}var R0=function(){return JSON.stringify(arguments)},C0=function(){function n(){this.cache=Object.create(null)}return n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t},n}(),P0={create:function(){return new C0}},ll={variadic:A0},mt;(function(n){n[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(mt||(mt={}));var kt;(function(n){n[n.literal=0]="literal",n[n.argument=1]="argument",n[n.number=2]="number",n[n.date=3]="date",n[n.time=4]="time",n[n.select=5]="select",n[n.plural=6]="plural",n[n.pound=7]="pound",n[n.tag=8]="tag"})(kt||(kt={}));var ia;(function(n){n[n.number=0]="number",n[n.dateTime=1]="dateTime"})(ia||(ia={}));function cu(n){return n.type===kt.literal}function I0(n){return n.type===kt.argument}function vf(n){return n.type===kt.number}function gf(n){return n.type===kt.date}function xf(n){return n.type===kt.time}function _f(n){return n.type===kt.select}function bf(n){return n.type===kt.plural}function L0(n){return n.type===kt.pound}function yf(n){return n.type===kt.tag}function Sf(n){return!!(n&&typeof n=="object"&&n.type===ia.number)}function Ql(n){return!!(n&&typeof n=="object"&&n.type===ia.dateTime)}var Mf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,D0=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function N0(n){var e={};return n.replace(D0,function(t){var i=t.length;switch(t[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var U0=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function F0(n){if(n.length===0)throw new Error("Number skeleton cannot be empty");for(var e=n.split(U0).filter(function(u){return u.length>0}),t=[],i=0,r=e;i<r.length;i++){var a=r[i],s=a.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var o=s[0],l=s.slice(1),c=0,d=l;c<d.length;c++){var h=d[c];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function O0(n){return n.replace(/^(.*?)-/,"")}var du=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Ef=/^(@+)?(\+|#+)?[rs]?$/g,B0=/(\*)(0+)|(#+)(0+)|(0+)/g,wf=/^(0+)$/;function uu(n){var e={};return n[n.length-1]==="r"?e.roundingPriority="morePrecision":n[n.length-1]==="s"&&(e.roundingPriority="lessPrecision"),n.replace(Ef,function(t,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function Tf(n){switch(n){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function k0(n){var e;if(n[0]==="E"&&n[1]==="E"?(e={notation:"engineering"},n=n.slice(2)):n[0]==="E"&&(e={notation:"scientific"},n=n.slice(1)),e){var t=n.slice(0,2);if(t==="+!"?(e.signDisplay="always",n=n.slice(2)):t==="+?"&&(e.signDisplay="exceptZero",n=n.slice(2)),!wf.test(n))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=n.length}return e}function hu(n){var e={},t=Tf(n);return t||e}function z0(n){for(var e={},t=0,i=n;t<i.length;t++){var r=i[t];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=O0(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=bt(bt(bt({},e),{notation:"scientific"}),r.options.reduce(function(l,c){return bt(bt({},l),hu(c))},{}));continue;case"engineering":e=bt(bt(bt({},e),{notation:"engineering"}),r.options.reduce(function(l,c){return bt(bt({},l),hu(c))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(B0,function(l,c,d,h,u,p){if(c)e.minimumIntegerDigits=d.length;else{if(h&&u)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(wf.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(du.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(du,function(l,c,d,h,u,p){return d==="*"?e.minimumFractionDigits=c.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:u&&p?(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length+p.length):(e.minimumFractionDigits=c.length,e.maximumFractionDigits=c.length),""});var a=r.options[0];a==="w"?e=bt(bt({},e),{trailingZeroDisplay:"stripIfInteger"}):a&&(e=bt(bt({},e),uu(a)));continue}if(Ef.test(r.stem)){e=bt(bt({},e),uu(r.stem));continue}var s=Tf(r.stem);s&&(e=bt(bt({},e),s));var o=k0(r.stem);o&&(e=bt(bt({},e),o))}return e}var Cs={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function H0(n,e){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);if(r==="j"){for(var a=0;i+1<n.length&&n.charAt(i+1)===r;)a++,i++;var s=1+(a&1),o=a<2?1:3+(a>>1),l="a",c=V0(e);for((c=="H"||c=="k")&&(o=0);o-- >0;)t+=l;for(;s-- >0;)t=c+t}else r==="J"?t+="H":t+=r}return t}function V0(n){var e=n.hourCycle;if(e===void 0&&n.hourCycles&&n.hourCycles.length&&(e=n.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=n.language,i;t!=="root"&&(i=n.maximize().region);var r=Cs[i||""]||Cs[t||""]||Cs["".concat(t,"-001")]||Cs["001"];return r[0]}var cl,G0=new RegExp("^".concat(Mf.source,"*")),W0=new RegExp("".concat(Mf.source,"*$"));function gt(n,e){return{start:n,end:e}}var $0=!!String.prototype.startsWith&&"_a".startsWith("a",1),X0=!!String.fromCodePoint,q0=!!Object.fromEntries,Y0=!!String.prototype.codePointAt,j0=!!String.prototype.trimStart,K0=!!String.prototype.trimEnd,Z0=!!Number.isSafeInteger,J0=Z0?Number.isSafeInteger:function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n&&Math.abs(n)<=9007199254740991},ec=!0;try{var Q0=Rf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ec=((cl=Q0.exec("a"))===null||cl===void 0?void 0:cl[0])==="a"}catch{ec=!1}var fu=$0?function(e,t,i){return e.startsWith(t,i)}:function(e,t,i){return e.slice(i,i+t.length)===t},tc=X0?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i="",r=e.length,a=0,s;r>a;){if(s=e[a++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},pu=q0?Object.fromEntries:function(e){for(var t={},i=0,r=e;i<r.length;i++){var a=r[i],s=a[0],o=a[1];t[s]=o}return t},Af=Y0?function(e,t){return e.codePointAt(t)}:function(e,t){var i=e.length;if(!(t<0||t>=i)){var r=e.charCodeAt(t),a;return r<55296||r>56319||t+1===i||(a=e.charCodeAt(t+1))<56320||a>57343?r:(r-55296<<10)+(a-56320)+65536}},ev=j0?function(e){return e.trimStart()}:function(e){return e.replace(G0,"")},tv=K0?function(e){return e.trimEnd()}:function(e){return e.replace(W0,"")};function Rf(n,e){return new RegExp(n,e)}var nc;if(ec){var mu=Rf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");nc=function(e,t){var i;mu.lastIndex=t;var r=mu.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else nc=function(e,t){for(var i=[];;){var r=Af(e,t);if(r===void 0||Cf(r)||av(r))break;i.push(r),t+=r>=65536?2:1}return tc.apply(void 0,i)};var nv=function(){function n(e,t){t===void 0&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return n.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},n.prototype.parseMessage=function(e,t,i){for(var r=[];!this.isEOF();){var a=this.char();if(a===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(a===125&&e>0)break;if(a===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),r.push({type:kt.pound,location:gt(o,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(mt.UNMATCHED_CLOSING_TAG,gt(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&ic(this.peek()||0)){var s=this.parseTag(e,t);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,t);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},n.prototype.parseTag=function(e,t){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:kt.literal,value:"<".concat(r,"/>"),location:gt(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0);if(a.err)return a;var s=a.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ic(this.char()))return this.error(mt.INVALID_TAG,gt(o,this.clonePosition()));var l=this.clonePosition(),c=this.parseTagName();return r!==c?this.error(mt.UNMATCHED_CLOSING_TAG,gt(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:kt.tag,value:r,children:s,location:gt(i,this.clonePosition())},err:null}:this.error(mt.INVALID_TAG,gt(o,this.clonePosition())))}else return this.error(mt.UNCLOSED_TAG,gt(i,this.clonePosition()))}else return this.error(mt.INVALID_TAG,gt(i,this.clonePosition()))},n.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&rv(this.char());)this.bump();return this.message.slice(e,this.offset())},n.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),r="";;){var a=this.tryParseQuote(t);if(a){r+=a;continue}var s=this.tryParseUnquoted(e,t);if(s){r+=s;continue}var o=this.tryParseLeftAngleBracket();if(o){r+=o;continue}break}var l=gt(i,this.clonePosition());return{val:{type:kt.literal,value:r,location:l},err:null}},n.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!iv(this.peek()||0))?(this.bump(),"<"):null},n.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(i);this.bump()}return tc.apply(void 0,t)},n.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(t==="plural"||t==="selectordinal")||i===125&&e>0?null:(this.bump(),tc(i))},n.prototype.parseArgument=function(e,t){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(mt.EMPTY_ARGUMENT,gt(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(mt.MALFORMED_ARGUMENT,gt(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:kt.argument,value:r,location:gt(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition())):this.parseArgumentOptions(e,t,r,i);default:return this.error(mt.MALFORMED_ARGUMENT,gt(i,this.clonePosition()))}},n.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),i=nc(this.message,t),r=t+i.length;this.bumpTo(r);var a=this.clonePosition(),s=gt(e,a);return{value:i,location:s}},n.prototype.parseArgumentOptions=function(e,t,i,r){var a,s=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(mt.EXPECT_ARGUMENT_TYPE,gt(s,l));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var u=tv(h.val);if(u.length===0)return this.error(mt.EXPECT_ARGUMENT_STYLE,gt(this.clonePosition(),this.clonePosition()));var p=gt(d,this.clonePosition());c={style:u,styleLocation:p}}var g=this.tryParseArgumentClose(r);if(g.err)return g;var x=gt(r,this.clonePosition());if(c&&fu(c==null?void 0:c.style,"::",0)){var m=ev(c.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(m,c.styleLocation);return h.err?h:{val:{type:kt.number,value:i,location:x,style:h.val},err:null}}else{if(m.length===0)return this.error(mt.EXPECT_DATE_TIME_SKELETON,x);var f=m;this.locale&&(f=H0(m,this.locale));var u={type:ia.dateTime,pattern:f,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?N0(f):{}},_=o==="date"?kt.date:kt.time;return{val:{type:_,value:i,location:x,style:u},err:null}}}return{val:{type:o==="number"?kt.number:o==="date"?kt.date:kt.time,value:i,location:x,style:(a=c==null?void 0:c.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(mt.EXPECT_SELECT_ARGUMENT_OPTIONS,gt(b,bt({},b)));this.bumpSpace();var M=this.parseIdentifierIfPossible(),E=0;if(o!=="select"&&M.value==="offset"){if(!this.bumpIf(":"))return this.error(mt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,gt(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(mt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,mt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),M=this.parseIdentifierIfPossible(),E=h.val}var R=this.tryParsePluralOrSelectOptions(e,o,t,M);if(R.err)return R;var g=this.tryParseArgumentClose(r);if(g.err)return g;var C=gt(r,this.clonePosition());return o==="select"?{val:{type:kt.select,value:i,options:pu(R.val),location:C},err:null}:{val:{type:kt.plural,value:i,options:pu(R.val),offset:E,pluralType:o==="plural"?"cardinal":"ordinal",location:C},err:null}}default:return this.error(mt.INVALID_ARGUMENT_TYPE,gt(s,l))}},n.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},n.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(mt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,gt(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},n.prototype.parseNumberSkeletonFromString=function(e,t){var i=[];try{i=F0(e)}catch{return this.error(mt.INVALID_NUMBER_SKELETON,t)}return{val:{type:ia.number,tokens:i,location:t,parsedOptions:this.shouldParseSkeletons?z0(i):{}},err:null}},n.prototype.tryParsePluralOrSelectOptions=function(e,t,i,r){for(var a,s=!1,o=[],l=new Set,c=r.value,d=r.location;;){if(c.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var u=this.tryParseDecimalInteger(mt.EXPECT_PLURAL_ARGUMENT_SELECTOR,mt.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;d=gt(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}else break}if(l.has(c))return this.error(t==="select"?mt.DUPLICATE_SELECT_ARGUMENT_SELECTOR:mt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);c==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?mt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:mt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,gt(this.clonePosition(),this.clonePosition()));var g=this.parseMessage(e+1,t,i);if(g.err)return g;var x=this.tryParseArgumentClose(p);if(x.err)return x;o.push([c,{value:g.val,location:gt(p,this.clonePosition())}]),l.add(c),this.bumpSpace(),a=this.parseIdentifierIfPossible(),c=a.value,d=a.location}return o.length===0?this.error(t==="select"?mt.EXPECT_SELECT_ARGUMENT_SELECTOR:mt.EXPECT_PLURAL_ARGUMENT_SELECTOR,gt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(mt.MISSING_OTHER_CLAUSE,gt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},n.prototype.tryParseDecimalInteger=function(e,t){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var a=!1,s=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)a=!0,s=s*10+(o-48),this.bump();else break}var l=gt(r,this.clonePosition());return a?(s*=i,J0(s)?{val:s,err:null}:this.error(t,l)):this.error(e,l)},n.prototype.offset=function(){return this.position.offset},n.prototype.isEOF=function(){return this.offset()===this.message.length},n.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},n.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=Af(this.message,e);if(t===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},n.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},n.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},n.prototype.bumpIf=function(e){if(fu(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},n.prototype.bumpUntil=function(e){var t=this.offset(),i=this.message.indexOf(e,t);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},n.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},n.prototype.bumpSpace=function(){for(;!this.isEOF()&&Cf(this.char());)this.bump()},n.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),i=this.message.charCodeAt(t+(e>=65536?2:1));return i??null},n}();function ic(n){return n>=97&&n<=122||n>=65&&n<=90}function iv(n){return ic(n)||n===47}function rv(n){return n===45||n===46||n>=48&&n<=57||n===95||n>=97&&n<=122||n>=65&&n<=90||n==183||n>=192&&n<=214||n>=216&&n<=246||n>=248&&n<=893||n>=895&&n<=8191||n>=8204&&n<=8205||n>=8255&&n<=8256||n>=8304&&n<=8591||n>=11264&&n<=12271||n>=12289&&n<=55295||n>=63744&&n<=64975||n>=65008&&n<=65533||n>=65536&&n<=983039}function Cf(n){return n>=9&&n<=13||n===32||n===133||n>=8206&&n<=8207||n===8232||n===8233}function av(n){return n>=33&&n<=35||n===36||n>=37&&n<=39||n===40||n===41||n===42||n===43||n===44||n===45||n>=46&&n<=47||n>=58&&n<=59||n>=60&&n<=62||n>=63&&n<=64||n===91||n===92||n===93||n===94||n===96||n===123||n===124||n===125||n===126||n===161||n>=162&&n<=165||n===166||n===167||n===169||n===171||n===172||n===174||n===176||n===177||n===182||n===187||n===191||n===215||n===247||n>=8208&&n<=8213||n>=8214&&n<=8215||n===8216||n===8217||n===8218||n>=8219&&n<=8220||n===8221||n===8222||n===8223||n>=8224&&n<=8231||n>=8240&&n<=8248||n===8249||n===8250||n>=8251&&n<=8254||n>=8257&&n<=8259||n===8260||n===8261||n===8262||n>=8263&&n<=8273||n===8274||n===8275||n>=8277&&n<=8286||n>=8592&&n<=8596||n>=8597&&n<=8601||n>=8602&&n<=8603||n>=8604&&n<=8607||n===8608||n>=8609&&n<=8610||n===8611||n>=8612&&n<=8613||n===8614||n>=8615&&n<=8621||n===8622||n>=8623&&n<=8653||n>=8654&&n<=8655||n>=8656&&n<=8657||n===8658||n===8659||n===8660||n>=8661&&n<=8691||n>=8692&&n<=8959||n>=8960&&n<=8967||n===8968||n===8969||n===8970||n===8971||n>=8972&&n<=8991||n>=8992&&n<=8993||n>=8994&&n<=9e3||n===9001||n===9002||n>=9003&&n<=9083||n===9084||n>=9085&&n<=9114||n>=9115&&n<=9139||n>=9140&&n<=9179||n>=9180&&n<=9185||n>=9186&&n<=9254||n>=9255&&n<=9279||n>=9280&&n<=9290||n>=9291&&n<=9311||n>=9472&&n<=9654||n===9655||n>=9656&&n<=9664||n===9665||n>=9666&&n<=9719||n>=9720&&n<=9727||n>=9728&&n<=9838||n===9839||n>=9840&&n<=10087||n===10088||n===10089||n===10090||n===10091||n===10092||n===10093||n===10094||n===10095||n===10096||n===10097||n===10098||n===10099||n===10100||n===10101||n>=10132&&n<=10175||n>=10176&&n<=10180||n===10181||n===10182||n>=10183&&n<=10213||n===10214||n===10215||n===10216||n===10217||n===10218||n===10219||n===10220||n===10221||n===10222||n===10223||n>=10224&&n<=10239||n>=10240&&n<=10495||n>=10496&&n<=10626||n===10627||n===10628||n===10629||n===10630||n===10631||n===10632||n===10633||n===10634||n===10635||n===10636||n===10637||n===10638||n===10639||n===10640||n===10641||n===10642||n===10643||n===10644||n===10645||n===10646||n===10647||n===10648||n>=10649&&n<=10711||n===10712||n===10713||n===10714||n===10715||n>=10716&&n<=10747||n===10748||n===10749||n>=10750&&n<=11007||n>=11008&&n<=11055||n>=11056&&n<=11076||n>=11077&&n<=11078||n>=11079&&n<=11084||n>=11085&&n<=11123||n>=11124&&n<=11125||n>=11126&&n<=11157||n===11158||n>=11159&&n<=11263||n>=11776&&n<=11777||n===11778||n===11779||n===11780||n===11781||n>=11782&&n<=11784||n===11785||n===11786||n===11787||n===11788||n===11789||n>=11790&&n<=11798||n===11799||n>=11800&&n<=11801||n===11802||n===11803||n===11804||n===11805||n>=11806&&n<=11807||n===11808||n===11809||n===11810||n===11811||n===11812||n===11813||n===11814||n===11815||n===11816||n===11817||n>=11818&&n<=11822||n===11823||n>=11824&&n<=11833||n>=11834&&n<=11835||n>=11836&&n<=11839||n===11840||n===11841||n===11842||n>=11843&&n<=11855||n>=11856&&n<=11857||n===11858||n>=11859&&n<=11903||n>=12289&&n<=12291||n===12296||n===12297||n===12298||n===12299||n===12300||n===12301||n===12302||n===12303||n===12304||n===12305||n>=12306&&n<=12307||n===12308||n===12309||n===12310||n===12311||n===12312||n===12313||n===12314||n===12315||n===12316||n===12317||n>=12318&&n<=12319||n===12320||n===12336||n===64830||n===64831||n>=65093&&n<=65094}function rc(n){n.forEach(function(e){if(delete e.location,_f(e)||bf(e))for(var t in e.options)delete e.options[t].location,rc(e.options[t].value);else vf(e)&&Sf(e.style)||(gf(e)||xf(e))&&Ql(e.style)?delete e.style.location:yf(e)&&rc(e.children)})}function sv(n,e){e===void 0&&(e={}),e=bt({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var t=new nv(n,e).parse();if(t.err){var i=SyntaxError(mt[t.err.kind]);throw i.location=t.err.location,i.originalMessage=t.err.message,i}return e!=null&&e.captureLocation||rc(t.val),t.val}var ra;(function(n){n.MISSING_VALUE="MISSING_VALUE",n.INVALID_VALUE="INVALID_VALUE",n.MISSING_INTL_API="MISSING_INTL_API"})(ra||(ra={}));var zo=function(n){ko(e,n);function e(t,i,r){var a=n.call(this,t)||this;return a.code=i,a.originalMessage=r,a}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),vu=function(n){ko(e,n);function e(t,i,r,a){return n.call(this,'Invalid values for "'.concat(t,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),ra.INVALID_VALUE,a)||this}return e}(zo),ov=function(n){ko(e,n);function e(t,i,r){return n.call(this,'Value for "'.concat(t,'" must be of type ').concat(i),ra.INVALID_VALUE,r)||this}return e}(zo),lv=function(n){ko(e,n);function e(t,i){return n.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(i,'"'),ra.MISSING_VALUE,i)||this}return e}(zo),mn;(function(n){n[n.literal=0]="literal",n[n.object=1]="object"})(mn||(mn={}));function cv(n){return n.length<2?n:n.reduce(function(e,t){var i=e[e.length-1];return!i||i.type!==mn.literal||t.type!==mn.literal?e.push(t):i.value+=t.value,e},[])}function dv(n){return typeof n=="function"}function Js(n,e,t,i,r,a,s){if(n.length===1&&cu(n[0]))return[{type:mn.literal,value:n[0].value}];for(var o=[],l=0,c=n;l<c.length;l++){var d=c[l];if(cu(d)){o.push({type:mn.literal,value:d.value});continue}if(L0(d)){typeof a=="number"&&o.push({type:mn.literal,value:t.getNumberFormat(e).format(a)});continue}var h=d.value;if(!(r&&h in r))throw new lv(h,s);var u=r[h];if(I0(d)){(!u||typeof u=="string"||typeof u=="number")&&(u=typeof u=="string"||typeof u=="number"?String(u):""),o.push({type:typeof u=="string"?mn.literal:mn.object,value:u});continue}if(gf(d)){var p=typeof d.style=="string"?i.date[d.style]:Ql(d.style)?d.style.parsedOptions:void 0;o.push({type:mn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(xf(d)){var p=typeof d.style=="string"?i.time[d.style]:Ql(d.style)?d.style.parsedOptions:i.time.medium;o.push({type:mn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(vf(d)){var p=typeof d.style=="string"?i.number[d.style]:Sf(d.style)?d.style.parsedOptions:void 0;p&&p.scale&&(u=u*(p.scale||1)),o.push({type:mn.literal,value:t.getNumberFormat(e,p).format(u)});continue}if(yf(d)){var g=d.children,x=d.value,m=r[x];if(!dv(m))throw new ov(x,"function",s);var f=Js(g,e,t,i,r,a),_=m(f.map(function(E){return E.value}));Array.isArray(_)||(_=[_]),o.push.apply(o,_.map(function(E){return{type:typeof E=="string"?mn.literal:mn.object,value:E}}))}if(_f(d)){var b=d.options[u]||d.options.other;if(!b)throw new vu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Js(b.value,e,t,i,r));continue}if(bf(d)){var b=d.options["=".concat(u)];if(!b){if(!Intl.PluralRules)throw new zo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ra.MISSING_INTL_API,s);var M=t.getPluralRules(e,{type:d.pluralType}).select(u-(d.offset||0));b=d.options[M]||d.options.other}if(!b)throw new vu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Js(b.value,e,t,i,r,u-(d.offset||0)));continue}}return cv(o)}function uv(n,e){return e?bt(bt(bt({},n||{}),e||{}),Object.keys(n).reduce(function(t,i){return t[i]=bt(bt({},n[i]),e[i]||{}),t},{})):n}function hv(n,e){return e?Object.keys(n).reduce(function(t,i){return t[i]=uv(n[i],e[i]),t},bt({},n)):n}function dl(n){return{create:function(){return{get:function(e){return n[e]},set:function(e,t){n[e]=t}}}}}function fv(n){return n===void 0&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.number),strategy:ll.variadic}),getDateTimeFormat:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.dateTime),strategy:ll.variadic}),getPluralRules:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.pluralRules),strategy:ll.variadic})}}var Pf=function(){function n(e,t,i,r){t===void 0&&(t=n.defaultLocale);var a=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var c=a.formatToParts(l);if(c.length===1)return c[0].value;var d=c.reduce(function(h,u){return!h.length||u.type!==mn.literal||typeof h[h.length-1]!="string"?h.push(u.value):h[h.length-1]+=u.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Js(a.ast,a.locales,a.formatters,a.formats,l,void 0,a.message)},this.resolvedOptions=function(){var l;return{locale:((l=a.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},this.locales=t,this.resolvedLocale=n.resolveLocale(t),typeof e=="string"){if(this.message=e,!n.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var o=M0(s,["formatters"]);this.ast=n.__parse(e,bt(bt({},o),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hv(n.formats,i),this.formatters=r&&r.formatters||fv(this.formatterCache)}return Object.defineProperty(n,"defaultLocale",{get:function(){return n.memoizedDefaultLocale||(n.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),n.memoizedDefaultLocale},enumerable:!1,configurable:!0}),n.memoizedDefaultLocale=null,n.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},n.__parse=sv,n.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},n}();function pv(n,e){if(e==null)return;if(e in n)return n[e];const t=e.split(".");let i=n;for(let r=0;r<t.length;r++)if(typeof i=="object"){if(r>0){const a=t.slice(r,t.length).join(".");if(a in i){i=i[a];break}}i=i[t[r]]}else i=void 0;return i}const Ji={},mv=(n,e,t)=>t&&(e in Ji||(Ji[e]={}),n in Ji[e]||(Ji[e][n]=t),t),If=(n,e)=>{if(e==null)return;if(e in Ji&&n in Ji[e])return Ji[e][n];const t=cs(e);for(let i=0;i<t.length;i++){const r=t[i],a=gv(r,n);if(a)return mv(n,e,a)}};let gd;const ls=os({});function vv(n){return gd[n]||null}function Lf(n){return n in gd}function gv(n,e){if(!Lf(n))return null;const t=vv(n);return pv(t,e)}function xv(n){if(n==null)return;const e=cs(n);for(let t=0;t<e.length;t++){const i=e[t];if(Lf(i))return i}}function Oi(n,...e){delete Ji[n],ls.update(t=>(t[n]=S0.all([t[n]||{},...e]),t))}_a([ls],([n])=>Object.keys(n));ls.subscribe(n=>gd=n);const Qs={};function _v(n,e){Qs[n].delete(e),Qs[n].size===0&&delete Qs[n]}function Df(n){return Qs[n]}function bv(n){return cs(n).map(e=>{const t=Df(e);return[e,t?[...t]:[]]}).filter(([,e])=>e.length>0)}function _o(n){return n==null?!1:cs(n).some(e=>{var t;return(t=Df(e))==null?void 0:t.size})}function yv(n,e){return Promise.all(e.map(i=>(_v(n,i),i().then(r=>r.default||r)))).then(i=>Oi(n,...i))}const La={};function Nf(n){if(!_o(n))return n in La?La[n]:Promise.resolve();const e=bv(n);return La[n]=Promise.all(e.map(([t,i])=>yv(t,i))).then(()=>{if(_o(n))return Nf(n);delete La[n]}),La[n]}var gu=Object.getOwnPropertySymbols,Sv=Object.prototype.hasOwnProperty,Mv=Object.prototype.propertyIsEnumerable,Ev=(n,e)=>{var t={};for(var i in n)Sv.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&gu)for(var i of gu(n))e.indexOf(i)<0&&Mv.call(n,i)&&(t[i]=n[i]);return t};const wv={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};function Tv({locale:n,id:e}){console.warn(`[svelte-i18n] The message "${e}" was not found in "${cs(n).join('", "')}".${_o(lr())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)}const Av={fallbackLocale:null,loadingDelay:200,formats:wv,warnOnMissingMessages:!0,handleMissingMessage:void 0,ignoreTag:!0},Ha=Av;function aa(){return Ha}function Rv(n){const e=n,{formats:t}=e,i=Ev(e,["formats"]);let r=n.fallbackLocale;if(n.initialLocale)try{Pf.resolveLocale(n.initialLocale)&&(r=n.initialLocale)}catch{console.warn(`[svelte-i18n] The initial locale "${n.initialLocale}" is not a valid locale.`)}return i.warnOnMissingMessages&&(delete i.warnOnMissingMessages,i.handleMissingMessage==null?i.handleMissingMessage=Tv:console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),Object.assign(Ha,i,{initialLocale:r}),t&&("number"in t&&Object.assign(Ha.formats.number,t.number),"date"in t&&Object.assign(Ha.formats.date,t.date),"time"in t&&Object.assign(Ha.formats.time,t.time)),ir.set(r)}const ul=os(!1);var Cv=Object.defineProperty,Pv=Object.defineProperties,Iv=Object.getOwnPropertyDescriptors,xu=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,Dv=Object.prototype.propertyIsEnumerable,_u=(n,e,t)=>e in n?Cv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Nv=(n,e)=>{for(var t in e||(e={}))Lv.call(e,t)&&_u(n,t,e[t]);if(xu)for(var t of xu(e))Dv.call(e,t)&&_u(n,t,e[t]);return n},Uv=(n,e)=>Pv(n,Iv(e));let ac;const bo=os(null);function bu(n){return n.split("-").map((e,t,i)=>i.slice(0,t+1).join("-")).reverse()}function cs(n,e=aa().fallbackLocale){const t=bu(n);return e?[...new Set([...t,...bu(e)])]:t}function lr(){return ac??void 0}bo.subscribe(n=>{ac=n??void 0,typeof window<"u"&&n!=null&&document.documentElement.setAttribute("lang",n)});const Fv=n=>{if(n&&xv(n)&&_o(n)){const{loadingDelay:e}=aa();let t;return typeof window<"u"&&lr()!=null&&e?t=window.setTimeout(()=>ul.set(!0),e):ul.set(!0),Nf(n).then(()=>{bo.set(n)}).finally(()=>{clearTimeout(t),ul.set(!1)})}return bo.set(n)},ir=Uv(Nv({},bo),{set:Fv}),Ho=n=>{const e=Object.create(null);return i=>{const r=JSON.stringify(i);return r in e?e[r]:e[r]=n(i)}};var Ov=Object.defineProperty,yo=Object.getOwnPropertySymbols,Uf=Object.prototype.hasOwnProperty,Ff=Object.prototype.propertyIsEnumerable,yu=(n,e,t)=>e in n?Ov(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xd=(n,e)=>{for(var t in e||(e={}))Uf.call(e,t)&&yu(n,t,e[t]);if(yo)for(var t of yo(e))Ff.call(e,t)&&yu(n,t,e[t]);return n},ba=(n,e)=>{var t={};for(var i in n)Uf.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&yo)for(var i of yo(n))e.indexOf(i)<0&&Ff.call(n,i)&&(t[i]=n[i]);return t};const Ja=(n,e)=>{const{formats:t}=aa();if(n in t&&e in t[n])return t[n][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${n} format.`)},Bv=Ho(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return i&&(r=Ja("number",i)),new Intl.NumberFormat(t,r)}),kv=Ho(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return i?r=Ja("date",i):Object.keys(r).length===0&&(r=Ja("date","short")),new Intl.DateTimeFormat(t,r)}),zv=Ho(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return i?r=Ja("time",i):Object.keys(r).length===0&&(r=Ja("time","short")),new Intl.DateTimeFormat(t,r)}),Hv=(n={})=>{var e=n,{locale:t=lr()}=e,i=ba(e,["locale"]);return Bv(xd({locale:t},i))},Vv=(n={})=>{var e=n,{locale:t=lr()}=e,i=ba(e,["locale"]);return kv(xd({locale:t},i))},Gv=(n={})=>{var e=n,{locale:t=lr()}=e,i=ba(e,["locale"]);return zv(xd({locale:t},i))},Wv=Ho((n,e=lr())=>new Pf(n,e,aa().formats,{ignoreTag:aa().ignoreTag})),$v=(n,e={})=>{var t,i,r,a;let s=e;typeof n=="object"&&(s=n,n=s.id);const{values:o,locale:l=lr(),default:c}=s;if(l==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let d=If(n,l);if(!d)d=(a=(r=(i=(t=aa()).handleMissingMessage)==null?void 0:i.call(t,{locale:l,id:n,defaultValue:c}))!=null?r:c)!=null?a:n;else if(typeof d!="string")return console.warn(`[svelte-i18n] Message with id "${n}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),d;if(!o)return d;let h=d;try{h=Wv(d,l).format(o)}catch(u){u instanceof Error&&console.warn(`[svelte-i18n] Message "${n}" has syntax error:`,u.message)}return h},Xv=(n,e)=>Gv(e).format(n),qv=(n,e)=>Vv(e).format(n),Yv=(n,e)=>Hv(e).format(n),jv=(n,e=lr())=>If(n,e),Bn=_a([ir,ls],()=>$v);_a([ir],()=>Xv);_a([ir],()=>qv);_a([ir],()=>Yv);_a([ir,ls],()=>jv);const Kv={common:{change_language:"Change language to {name}",loading:"LOADING..."},nav:{reports:"[ REPORTS ]",terminal:"[ LIVE TERMINAL ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"OPERATIONAL REPORTS",nav_week:"WEEK",generated_label:"GENERATED",page_title:"Trading Desk",methodology_label:"METHODOLOGY",indicators_label:"INDICATORS",font_decrease:"A−",font_increase:"A+",warning_title:"Data validity:",warning_text:"Revalidate all prices, moving averages, and oscillators at the weekly open before arming any order. This report is a risk-defined decision framework — not a forecast or guarantee of results. Only trade on a <strong>closed bar</strong> of the relevant screen.",priority_title:"Monitoring Queue · by Priority",scoreboard_title:"Bias Scoreboard · Triple Screen",role_primary:"PRIMARY",role_macro:"MACRO",impulse_red:"● RED",impulse_green:"● GREEN",impulse_blue_red:"◑ BLUE → RED",zone_neutral_up:"Neutral rising",zone_rising_overbought:"Rising → overbought",zone_overbought:"Overbought",zone_low_k_below_d:"Low, K < D",zone_rising:"Rising",zone_oversold:"Oversold",btc_note:"Pending impulse confirmation. Conditional short.",xau_note:"Short maturing. Stochastic at resistance.",sp_note:"Await pullback to 7,369. No buying overbought.",bovespa_note:"Cleanest trend. Both screens aligned.",usdbrl_note:"Sell bounce near 5.11 (weekly EMA underside).",brent_note:"Do not sell oversold. Await bounce to 101.",playbook_title:"BTC/USD — Primary Playbook",tide_label:"TIDE (WEEKLY)",wave_label:"WAVE (DAILY)",tide_text:'Price <span class="text-white">75,708.00</span> below MME(17) <span class="text-rose-400">76,533.35</span>. MACD histogram positive but decelerating — new weekly bar lower than previous (lower high). Impulse <span class="text-amber-400">blue in transition</span>; turns red when histogram confirms weekly close.',wave_text:'Price below descending MME. Stochastic %K <span class="text-[#4CC9F0]">42.08</span> / %D <span class="text-[#4CC9F0]">28.63</span>, rising (upper band 89.03). Counter-trend bounce in progress — <strong class="text-white">not yet overbought</strong>. Conviction scales to FULL after red weekly close.',trigger_label:"TRIGGER",action_label:"ACTION",stop_label:"STOP",sc_a_name:"SELL THE BOUNCE",sc_a_condition:"Price retraces to zone 76,533–76,606 + 1h stochastic overbought and turning + breaks prior 15m low",sc_a_target_label:"SUPPORT",sc_b_name:"CONTINUATION SELL",sc_b_condition:"Close below 73,936 + rejected retest from below + breaks prior 15m low",sc_b_target_label:"PARTIAL → RUNNER",sc_c_label:"NO TRADE",sc_c_text:'Condition: tide turns non-bearish <strong>or</strong> reclaim/close above 76,533. Action: <span class="text-[#00F0FF]/60">CancelSetups</span> — pull pending orders, remain ARMED with no entries.',sc_a_invalidation:"Close above 76,533",sc_b_invalidation:"Recovers and closes back above 73,936",macro_implication_title:"MACRO IMPLICATION",macro_implication_text:'The bearish BTC bias lacks broad macro risk-off support (strong S&P is the counterweight). Treat the short as a <strong class="text-white">correction within trend</strong>, not the start of a macro bear: modest targets, heightened vigilance on invalidation by reclaim.',risk_title:"Risk Management · Non-Negotiable Rules",rule_2pct_id:"2%",rule_2pct_title:"THE 2% RULE",rule_2pct_body:"Never risk more than 2% of account per trade. Define the stop first; size the position from the stop.",rule_6pct_id:"6%",rule_6pct_title:"THE 6% RULE",rule_6pct_body:"If monthly losses reach 6% of account, close all operations until month-end.",rule_conv_id:"CONV",rule_conv_title:"CONVICTION & SIZE",rule_conv_body:"HALF = half size (unconfirmed weekly impulse). FULL = full size (confirmed weekly impulse).",rule_hier_id:"HIER",rule_hier_title:"SCREEN HIERARCHY",rule_hier_body:"Never trade against the tide. Long only where tide is bullish. Stop defined at entry — non-negotiable.",legend_armed:"active permission; awaiting trigger",legend_standby:"no permission; do not trade",legend_in_position:"open position (runtime)",legend_full:"confirmed weekly impulse · full size",legend_half:"week in transition · half size",zone_label:"ZONE"},hero:{status:"SYSTEMS OPERATIONAL",title:"NEXUS QUANT",subtitle:"Proprietary Quantitative Research & Automated Decision Systems.",cta:"[ VIEW PHILOSOPHY ]",cta_ark:"[ ARK STREAMS PRESENTATION ]",cta_terminal:"[ LIVE TERMINAL ]"},philosophy:{title:">_ MISSION DIRECTIVE",hero_text:'We approach financial markets as <span class="text-white font-medium">complex physical systems</span>. By bridging <span class="text-white font-medium">stochastic research</span> with <span class="text-white font-medium">deterministic software engineering</span>, we build decision engines that thrive in chaos.',p1:{title:"Precision",text:"We prioritize data integrity and correctness over raw speculative speed."},p2:{title:"Automation",text:"Removing human cognitive bias from critical execution workflows."},p3:{title:"Resilience",text:"Systems designed to maintain 99.9% uptime in adversarial environments."}},stack:{title:">_ ARCHITECTURE",card1:{title:"QUANTITATIVE ANALYSIS",text:"Rapid hypothesis testing, statistical modeling, and backtesting using the Python data science ecosystem."},card2:{title:"PRODUCTION RUNTIME",text:"Our proprietary event-driven intelligence platform. Built in Go and powered by NATS JetStream to ensure ultra-low latency, native persistence, and seamless scalability."},card3:{title:"IMMUTABLE LEDGER",text:"Full traceability of every decision state. We utilize time-travel database capabilities for rigorous post-trade auditing."}},evolution:{title:">_ SYSTEM EVOLUTION",phase1:{period:"2023 - 2025",name:"Phase 1: Functional Foundation",tech:"Clojure / JVM / Polylith",description:"Focus on mathematical correctness, immutable data structures, and REPL-driven development. Proved the viability of our Bill Williams-based strategy logic."},phase2:{period:"2026 - Present",name:"Phase 2: Hybrid Ecosystem",tech:"Go / NATS JetStream / Wails",description:"Expansion to a high-concurrency, low-latency hybrid architecture. Integrating Go for production edge nodes while maintaining Clojure for strategy modeling, unified by a persistent NATS event bus."}},metrics:{title:":: SYSTEM STATUS ::",header:{component:"COMPONENT",status:"STATUS",latency:"LATENCY",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONNECTED",running:"RUNNING",guarded:"GUARDED",synced:"SYNCED"},ago:"{n}s ago",enter_terminal:"[ ENTER FULL LIVE TERMINAL ]"},footer:{rights:"© {year} Nexus Quant. All rights reserved.",location:"Rio de Janeiro, BR // Global Operations"},presentation:{title:"Tech Interview",subtitle:"Quantitative Trading Engine in Clojure",section1:{title:"Project Overview",text:"Ark Engine is a quantitative trading engine built in Clojure, following a Polylith architecture for modularity and testability. It operates in the Crypto/Binance domain using a Functional, Event-Driven, and Asynchronous paradigm."},section2:{title:"Architecture Deep Dive",subtitle:"Polylith: Bases, Components, Projects",intro:"The system is structured into Bases (cli-runner), Components (orchestrator, strategy-engine, connector, temporal-db), and Projects. This decoupling ensures the strategy engine is pure logic, knowing nothing about Binance, enabling REPL-Driven Development.",part1:{title:"Orchestrator (The Brain)",intro:"Coordinates data, strategy, and execution. It manages the main application loop using core.async and recursion."},part2:{title:"Strategy Engine (The Logic)",intro:"Pure functions taking immutable data (Candles) and returning results (Signals) with no side effects. Extremely testable."},part3:{title:"Connector (The Hands)",intro:"Handles side effects: talking to exchanges (Binance) to execute orders based on the strategy's decisions."}},section3:{title:"Code Walkthrough",role:"Mental Model",subtitle:"Tick -> Fetch -> Compute -> Decide -> Act -> Recur",subtitle2:"A non-blocking event loop that wakes up on candle close, processes data purely, executes side effects, and recurs with new state.",intro:"1. Tick: Time boundaries trigger wake-up. 2. Fetch: Pull history from Temporal DB. 3. Compute: Run indicators (TA4J) via pure functions.",intro2:"4. Decide: Logic determines buy/sell. 5. Act: Connector executes order. 6. Recur: New position state passed to next loop iteration.",step1:{title:"Orchestrator",what:"The coordinator. Manages the lifecycle and state recursion.",parallel:"Like a Conductor ensuring all instruments play in time."},step2:{title:"Strategy Engine",what:"The pure logic. Calculates indicators and signals.",magic:"Referential Transparency: Same input always equals same output.",parallel:"Like a Calculator: 2+2 is always 4, regardless of the weather."},step3:{title:"Connector",what:"The side-effect handler. Executes trades.",parallel:"The hands that actually move the chips on the table."},bitemporality:{title:"State Management (Recursion)",intro:"We avoid global atoms for the main loop state.",trading:"State exists only on the stack via (loop [state init] ... (recur new-state)).",healthcare:"This ensures the state lifecycle is tightly bound to the process.",conclusion:"Data consistency is maintained through immutability. Each iteration creates a fresh state map derived from the previous one, without mutation."},demo:{instruction:'Click "INJECT VOLATILITY" to see the engine handle load:',step1:"The Orchestrator maintains the loop.",step2:"The Strategy computes signals purely.",step3:"The Connector executes safely.",conclusion:"This architecture allows us to test the Strategy in isolation using just data maps, without mocking complex exchange APIs."}},section4:{title:"Libraries & Talking Points",subtitle:"Key Tech Stack & Interview Answers",text:"Core technologies and standard responses for technical questions.",headers:["KEY LIBRARY / CONCEPT","ROLE / APPLICATION"],rows:{source:{fintech:{title:"core.async",detail:"(Concurrency)"},healthcare:{title:"CSP (Communicating Sequential Processes)",detail:"(Non-blocking management of the main loop)"}},norm:{fintech:{title:"Tick",detail:"(Time)"},healthcare:{title:"Better Time Intepretation",detail:"(Superior to Java 8 Date/Time for intervals)"}},audit:{fintech:{title:"Carmine",detail:"(Redis)"},healthcare:{title:"Hot State / Pub-Sub",detail:"(Telemetry and fast persistence)"}},decision:{fintech:{title:"Polylith",detail:"(Architecture)"},healthcare:{title:"Monorepo Tooling",detail:"(Enforces strict component isolation)"}}},closing:"Why Clojure? Data processing fits naturally with immutable maps. REPL allows interactive debugging against real market data."},section5:{title:"READY FOR QUESTIONS",text:"Ready to discuss Architecture, Concurrency, or Strategy Implementation details."}},arkStreams:{title:"Ark Streams",subtitle:"Real-time trading intelligence. Every event durable. Every decision replayable.",section1:{title:"The Problem",text:"Most trading tools are stateless: they poll an API, compute an indicator, and forget. Ark Streams publishes every candle, every indicator update, every signal as a durable NATS event — making the entire pipeline replayable from day one.",cap1:"Watch live strategy decisions form in real time, timeframe by timeframe",cap2:"Replay historical market sessions through the same engine that runs live",cap3:"Run grid searches over strategy parameters against stored data",cap4:"Observe macro context (WTI, DXY, SP500, IBOV) alongside crypto price action"},section2:{title:"NATS JetStream — The Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Every component is fully decoupled. Collectors publish raw candles. The FractalEngine enriches them with indicators. Strategies consume the enriched stream and emit signals. Nothing talks directly — everything flows through NATS subjects.",part1:{title:"Data Ingestion",intro:"Bitget WebSocket (OHLCV, liquidations, private positions), Binance (funding rate, OI), Yahoo Finance REST — polling WTI, BRENT, SP500, DXY, IBOV, USDBRL every hour."},part2:{title:"Processing Pipeline",intro:"FractalEngine runs one instance per symbol × timeframe. Publishes AnalyzedEvent to market.analyzed.* and writes the latest snapshot to KV: MARKET_STATE."},part3:{title:"Persistent Streams",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (last 50 transitions)."}},section3:{title:"FractalEngine — The Analytical Core",role:"Bill Williams Indicator Suite",subtitle:"Raw Candle → Enriched AnalyzedEvent → market.analyzed.*",subtitle2:"One engine instance per symbol × timeframe. Warms up from REST history before subscribing to the live stream — indicators are fully converged before any strategy sees data.",step1:{title:"Collectors",what:"Ingest raw OHLCV from Bitget, Binance, and Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Compute the full Bill Williams suite. Publish AnalyzedEvent to NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Subscribe to market.analyzed.*. Emit TradeSignal to signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — The Strategy",subtitle:"All 6 entry filters must pass simultaneously before a signal is emitted",headers:["FILTER","LONG","SHORT"],rows:{runtime:{fintech:{title:"Alligator Transition",detail:"Bias just turned Bullish"},healthcare:{title:"Alligator Transition",detail:"Bias just turned Bearish"}},messaging:{fintech:{title:"Alligator Spread",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Alligator Spread",detail:"Same"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"BB width > 50th pct (300 bars)"},healthcare:{title:"BB Squeeze Gate",detail:"Same"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, accelerating (green bar)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, accelerating (red bar)"}}},closing:"Exit: 2×ATR(14) TP/SL · Alligator trend reversal · Teeth touch (2-bar debounce) · PaperBroker with pyramiding, MFE/MAE, FixedFractionalRM"},section5:{title:"GROWTH PATH",text:"Symbol-agnostic by design — every new collector auto-feeds all downstream consumers via wildcard NATS subscriptions."},footer:{memory:"Events: Durable",latency:"Latency: Ultra-Low",stack:"Stack: Go + NATS"},conclusion:`Every candle matters.
Every signal survives.
Built to scale.`}},Zv={common:{change_language:"Alterar idioma para {name}",loading:"CARREGANDO..."},nav:{reports:"[ RELATÓRIOS ]",terminal:"[ TERMINAL AO VIVO ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"RELATÓRIOS OPERACIONAIS",nav_week:"SEMANA",generated_label:"GERADO",page_title:"Mesa de Operações",methodology_label:"METODOLOGIA",indicators_label:"INDICADORES",font_decrease:"A−",font_increase:"A+",warning_title:"Validade dos dados:",warning_text:"Revalidar todos os preços, médias e osciladores na abertura semanal antes de armar qualquer ordem. Este relatório é um framework de decisão com risco definido — não previsão nem garantia de resultado. Somente operar em <strong>barra fechada</strong> do screen relevante.",priority_title:"Fila de Monitoramento · por Prioridade",scoreboard_title:"Scoreboard de Viés · Triple Screen",role_primary:"PRIMÁRIO",role_macro:"MACRO",impulse_red:"● VERMELHO",impulse_green:"● VERDE",impulse_blue_red:"◑ AZUL → VERMELHO",zone_neutral_up:"Neutro subindo",zone_rising_overbought:"Subindo → sobrecompra",zone_overbought:"Sobrecomprado",zone_low_k_below_d:"Baixo, K < D",zone_rising:"Subindo",zone_oversold:"Sobrevendido",btc_note:"Impulso pendente confirmação. Short condicional.",xau_note:"Short amadurecendo. Estocástico na resistência.",sp_note:"Aguardar pullback a 7.369. Não comprar sobrecompra.",bovespa_note:"Tendência mais limpa. Duas telas alinhadas.",usdbrl_note:"Vender repique perto de 5,11 (EMA semanal underside).",brent_note:"Não vender sobrevendido. Aguardar repique a 101.",playbook_title:"BTC/USD — Playbook Primário",tide_label:"MARÉ (SEMANAL)",wave_label:"ONDA (DIÁRIO)",tide_text:'Preço <span class="text-white">75.708,00</span> abaixo da MME(17) <span class="text-rose-400">76.533,35</span>. Histograma MACD positivo porém desacelerando — barra semanal nova menor que a anterior (topo mais baixo). Impulso <span class="text-amber-400">azul em transição</span>; vira vermelho quando histograma confirmar fechamento semanal.',wave_text:'Preço abaixo da MME descendente. Estocástico %K <span class="text-[#4CC9F0]">42,08</span> / %D <span class="text-[#4CC9F0]">28,63</span>, subindo (banda sup. 89,03). Repique contra-tendência em curso — <strong class="text-white">ainda não sobrecomprado</strong>. Convicção escala para FULL após fechamento semanal vermelho.',trigger_label:"GATILHO",action_label:"AÇÃO",stop_label:"STOP",sc_a_name:"VENDA NO REPIQUE",sc_a_condition:"Preço repica à zona 76.533–76.606 + estocástico 1h sobrecomprado e virando + rompe mínima 15m",sc_a_target_label:"SUPORTE",sc_b_name:"VENDA NA CONTINUAÇÃO",sc_b_condition:"Fechamento abaixo de 73.936 + reteste por baixo rejeitado + rompe mínima 15m",sc_b_target_label:"PARCIAL → RUNNER",sc_c_label:"SEM TRADE",sc_c_text:'Condição: maré deixa de ser baixista <strong>ou</strong> reclaim/fechamento acima de 76.533. Ação: <span class="text-[#00F0FF]/60">CancelSetups</span> — puxar ordens pendentes, seguir ARMED sem entradas.',sc_a_invalidation:"Fechamento acima de 76.533",sc_b_invalidation:"Recompõe e fecha de volta acima de 73.936",macro_implication_title:"IMPLICAÇÃO MACRO",macro_implication_text:'O viés vendedor do BTC não tem risk-off macro amplo por trás (S&P forte é o contrapeso). Tratar o short como <strong class="text-white">correção dentro de tendência</strong>, não início de bear macro: alvos mais modestos, vigilância redobrada na invalidação por reclaim.',risk_title:"Gestão de Risco · Regras Não-Negociáveis",rule_2pct_id:"2%",rule_2pct_title:"REGRA DOS 2%",rule_2pct_body:"Nunca arriscar mais que 2% da conta por trade. Definir o stop primeiro; dimensionar a posição pelo stop.",rule_6pct_id:"6%",rule_6pct_title:"REGRA DOS 6%",rule_6pct_body:"Se as perdas do mês atingirem 6% da conta, encerrar o operacional até virar o mês.",rule_conv_id:"CONV",rule_conv_title:"CONVICÇÃO & TAMANHO",rule_conv_body:"HALF = meia mão (impulso não confirmado). FULL = mão cheia (impulso semanal confirmado).",rule_hier_id:"HIER",rule_hier_title:"HIERARQUIA DE TELAS",rule_hier_body:"Nunca operar contra a maré. Long somente onde a maré é de alta. Stop definido na entrada — não-negociável.",legend_armed:"permissão ativa; aguardando gatilho",legend_standby:"sem permissão; não operar",legend_in_position:"posição aberta (runtime)",legend_full:"impulso semanal confirmado · mão cheia",legend_half:"semana em transição · meia mão",zone_label:"ZONA"},hero:{status:"SISTEMAS OPERACIONAIS",title:"NEXUS QUANT",subtitle:"Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.",cta:"[ VER FILOSOFIA ]",cta_ark:"[ APRESENTAÇÃO ARK STREAMS ]",cta_terminal:"[ TERMINAL EM TEMPO REAL ]"},philosophy:{title:">_ DIRETRIZ DA MISSÃO",hero_text:'Abordamos os mercados financeiros como <span class="text-white font-medium">sistemas físicos complexos</span>. Ao unir <span class="text-white font-medium">pesquisa estocástica</span> com <span class="text-white font-medium">engenharia de software determinística</span>, construímos motores de decisão que prosperam no caos.',p1:{title:"Precisão",text:"Priorizamos a integridade e correção dos dados em vez da velocidade especulativa bruta."},p2:{title:"Automação",text:"Removendo o viés cognitivo humano dos fluxos críticos de execução."},p3:{title:"Resiliência",text:"Sistemas projetados para manter 99,9% de disponibilidade em ambientes adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISE QUANTITATIVA",text:"Teste rápido de hipóteses, modelagem estatística e backtesting usando o ecossistema de ciência de dados Python."},card2:{title:"RUNTIME DE PRODUÇÃO",text:"Nossa plataforma proprietária de inteligência orientada a eventos. Construída em Go e movida por NATS JetStream para garantir latência ultra-baixa, persistência nativa e escalabilidade contínua."},card3:{title:"LEDGER IMUTÁVEL",text:"Rastreabilidade total de cada estado de decisão. Utilizamos recursos de banco de dados de viagem no tempo para auditoria pós-trade rigorosa."}},evolution:{title:">_ EVOLUÇÃO DO SISTEMA",phase1:{period:"2023 - 2025",name:"Fase 1: Fundação Funcional",tech:"Clojure / JVM / Polylith",description:"Foco em corretude matemática, estruturas de dados imutáveis e desenvolvimento orientado a REPL. Provou a viabilidade da nossa lógica de estratégia baseada em Bill Williams."},phase2:{period:"2026 - Present",name:"Fase 2: Ecossistema Híbrido",tech:"Go / NATS JetStream / Wails",description:"Expansão para uma arquitetura híbrida de alta concorrência e baixa latência. Integração de Go para nós de borda em produção, mantendo Clojure para modelagem de estratégias, unificados por um barramento NATS persistente."}},metrics:{title:":: STATUS DO SISTEMA ::",header:{component:"COMPONENTE",status:"STATUS",latency:"LATÊNCIA",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONECTADO",running:"EXECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"{n}s atrás",enter_terminal:"[ ENTRAR NO TERMINAL AO VIVO ]"},footer:{rights:"© {year} Nexus Quant. Todos os direitos reservados.",location:"Rio de Janeiro, BR // Operações Globais"},arkStreams:{title:"Ark Streams",subtitle:"Inteligência de trading em tempo real. Todo evento durável. Toda decisão reproduzível.",section1:{title:"O Problema",text:"A maioria das ferramentas de trading é stateless: consultam uma API, calculam um indicador e esquecem. O Ark Streams publica cada candle, cada atualização de indicador, cada sinal como um evento durável no NATS — tornando o pipeline inteiramente reproduzível desde o primeiro dia.",cap1:"Acompanhe decisões da estratégia se formando em tempo real, timeframe por timeframe",cap2:"Reproduza sessões históricas pelo mesmo engine que roda ao vivo",cap3:"Execute grid searches sobre parâmetros da estratégia contra dados armazenados",cap4:"Observe contexto macro (WTI, DXY, SP500, IBOV) ao lado do price action crypto"},section2:{title:"NATS JetStream — O Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Cada componente é totalmente desacoplado. Collectors publicam candles brutos. O FractalEngine os enriquece com indicadores. Estratégias consomem o stream enriquecido e emitem sinais. Nada se fala diretamente — tudo flui por subjects NATS.",part1:{title:"Ingestão de Dados",intro:"Bitget WebSocket (OHLCV, liquidações, posições privadas), Binance (funding rate, OI), Yahoo Finance REST — polling de WTI, BRENT, SP500, DXY, IBOV, USDBRL a cada hora."},part2:{title:"Pipeline de Processamento",intro:"FractalEngine roda uma instância por símbolo × timeframe. Publica AnalyzedEvent em market.analyzed.* e escreve o snapshot mais recente em KV: MARKET_STATE."},part3:{title:"Streams Persistentes",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (últimas 50 transições)."}},section3:{title:"FractalEngine — O Núcleo Analítico",role:"Suite de Indicadores Bill Williams",subtitle:"Candle Bruto → AnalyzedEvent Enriquecido → market.analyzed.*",subtitle2:"Uma instância por símbolo × timeframe. Aquece via REST antes de assinar o stream ao vivo — indicadores totalmente convergidos antes de qualquer estratégia ver dados.",step1:{title:"Collectors",what:"Ingestão de OHLCV bruto via Bitget, Binance e Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Calcula a suite completa Bill Williams. Publica AnalyzedEvent no NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Assina market.analyzed.*. Emite TradeSignal em signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — A Estratégia",subtitle:"Todos os 6 filtros de entrada devem passar simultaneamente antes de um sinal ser emitido",headers:["FILTRO","LONG","SHORT"],rows:{runtime:{fintech:{title:"Transição Alligator",detail:"Bias acabou de virar Bullish"},healthcare:{title:"Transição Alligator",detail:"Bias acabou de virar Bearish"}},messaging:{fintech:{title:"Spread Alligator",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Spread Alligator",detail:"Mesmo"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"Largura BB > percentil 50 (300 barras)"},healthcare:{title:"BB Squeeze Gate",detail:"Mesmo"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, acelerando (barra verde)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, acelerando (barra vermelha)"}}},closing:"Saída: 2×ATR(14) TP/SL · Reversão de tendência Alligator · Toque nos dentes (debounce 2 barras) · PaperBroker com pirâmide, MFE/MAE, FixedFractionalRM"},section5:{title:"PLANO DE CRESCIMENTO",text:"Agnóstico a símbolo por design — cada novo collector alimenta automaticamente todos os consumidores downstream via assinaturas wildcard no NATS."},footer:{memory:"Eventos: Duráveis",latency:"Latência: Ultra-Baixa",stack:"Stack: Go + NATS"},conclusion:`Todo candle importa.
Todo sinal sobrevive.
Construído para escalar.`}},Jv={common:{change_language:"Cambiar idioma a {name}",loading:"CARGANDO..."},hero:{status:"SISTEMAS OPERATIVOS",title:"NEXUS QUANT",subtitle:"Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.",cta:"[ VER FILOSOFÍA ]",cta_terminal:"[ TERMINAL EN VIVO ]"},philosophy:{title:">_ DIRECTRIZ DE MISIÓN",hero_text:'Abordamos los mercados financieros como <span class="text-white font-medium">sistemas físicos complexes</span>. Al unir <span class="text-white font-medium">investigación estocástica</span> con <span class="text-white font-medium">ingeniería de software determinística</span>, construimos motores de decisión que prosperan en el caos.',p1:{title:"Precisión",text:"Priorizamos la integridad y corrección de los datos sobre la velocidad especulativa bruta."},p2:{title:"Automatización",text:"Eliminando el sesgo cognitivo humano de los flujos de ejecución críticos."},p3:{title:"Resiliencia",text:"Sistemas diseñados para mantener un 99,9% de disponibilidad en entornos adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISIS CUANTITATIVO",text:"Pruebas rápidas de hipótesis, modelado estadístico y backtesting utilizando el ecosistema de ciencia de datos de Python."},card2:{title:"RUNTIME DE PRODUCCIÓN",text:"Nuestro motor de ejecución patentado. Basado en principios de programación funcional para garantizar la seguridad de concurrencia y la tolerancia a fallos."},card3:{title:"LIBRO INMUTABLE",text:"Trazabilidad completa de cada estado de decisión. Utilizamos capacidades de base de datos de viaje en el tiempo para una auditoría post-negociación rigurosa."}},metrics:{title:":: ESTADO DEL SISTEMA ::",header:{component:"COMPONENTE",status:"ESTADO",latency:"LATENCIA",heartbeat:"LATIDO"},status_labels:{connected:"CONECTADO",running:"EJECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"hace {n}s",enter_terminal:"[ INGRESAR AL TERMINAL EN VIVO ]"},footer:{rights:"© {year} Nexus Quant. Todos los derechos reservados.",location:"Río de Janeiro, BR // Operaciones Globales"}},Qv={common:{change_language:"Сменить язык на {name}",loading:"ЗАГРУЗКА..."},hero:{status:"СИСТЕМЫ РАБОТАЮТ",title:"NEXUS QUANT",subtitle:"Собственные количественные исследования и автоматизированные системы принятия решений.",cta:"[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]",cta_terminal:"[ ЖИВОЙ ТЕРМИНАЛ ]"},philosophy:{title:">_ ДИРЕКТИВА МИССИИ",hero_text:'Мы рассматриваем финансовые рынки как <span class="text-white font-medium">сложные физические системы</span>. Объединяя <span class="text-white font-medium">стохастические исследования</span> с <span class="text-white font-medium">детерминированной программной инженерией</span>, мы создаем механизмы принятия решений, процветающие в хаосе.',p1:{title:"Точность",text:"Мы ставим целостность и корректность данных выше грубой спекулятивной скорости."},p2:{title:"Автоматизация",text:"Исключение человеческого когнитивного искажения из критически важных рабочих процессов исполнения."},p3:{title:"Устойчивость",text:"Системы, разработанные для поддержания 99,9% времени безотказной работы в агрессивных средах."}},stack:{title:">_ АРХИТЕКТУРА",card1:{title:"КОЛИЧЕСТВЕННЫЙ АНАЛИЗ",text:"Быстрое тестирование гипотез, статистическое моделирование и бэктестинг с использованием экосистемы науки о данных Python."},card2:{title:"ПРОИЗВОДСТВЕННАЯ СРЕДА",text:"Наш собственный механизм исполнения. Построен на принципах функционального программирования для обеспечения безопасности параллелизма и отказоустойчивости."},card3:{title:"НЕИЗМЕНЯЕМЫЙ РЕЕСТР",text:"Полная прослеживаемость каждого состояния принятия решения. Мы используем возможности баз данных с путешествием во времени для строгого аудита после сделок."}},metrics:{title:":: СОСТОЯНИЕ СИСТЕМЫ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАДЕРЖКА",heartbeat:"СЕРДЦЕБИЕНИЕ"},status_labels:{connected:"ПОДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХРАНЯЕТСЯ",synced:"СИНХРОНИЗИРОВАНО"},ago:"{n}с назад",enter_terminal:"[ ОТКРЫТЬ РЕАЛ-ТАЙМ ТЕРМИНАЛ ]"},footer:{rights:"© {year} Nexus Quant. Все права защищены.",location:"Рио-де-Жанейро, БР // Глобальные операции"}},eg={common:{change_language:"Змінити мову на {name}",loading:"ЗАВАНТАЖЕННЯ..."},hero:{status:"СИСТЕМИ ПРАЦЮЮТЬ",title:"NEXUS QUANT",subtitle:"Власні кількісні дослідження та автоматизовані системи прийняття рішень.",cta:"[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]",cta_terminal:"[ ЖИВИЙ ТЕРМІНАЛ ]"},philosophy:{title:">_ ДИРЕКТИВА МІСІЇ",hero_text:'Ми розглядаємо фінансові ринки як <span class="text-white font-medium">складні фізичні системи</span>. Поєднуючи <span class="text-white font-medium">стохастичні дослідження</span> з <span class="text-white font-medium">детермінованою програмною інженерією</span>, ми створюємо механізми прийняття рішень, що процвітають у хаосі.',p1:{title:"Точність",text:"Ми ставимо цілісність і коректність даних вище грубої спекулятивної швидкості."},p2:{title:"Автоматизація",text:"Виключення людського когнітивного упередження з критично важливих робочих процесів виконання."},p3:{title:"Стійкість",text:"Системи, розроблені для підтримки 99,9% часу безвідмовної роботи в агресивних середовищах."}},stack:{title:">_ АРХІТЕКТУРА",card1:{title:"КІЛЬКІСНИЙ АНАЛІЗ",text:"Швидке тестування гіпотез, статистичне моделювання та бектестування з використанням екосистеми науки про дані Python."},card2:{title:"ВИРОБНИЧЕ СЕРЕДОВИЩЕ",text:"Наш власний механізм виконання. Побудований на принципах функціонального програмування для забезпечення безпеки паралелізму та відмовостійкості."},card3:{title:"НЕЗМІННИЙ РЕЄСТР",text:"Повна простежуваність кожного стану прийняття рішення. Ми використовуємо можливості баз даних з подорожжю в часі для суворого аудиту після угод."}},metrics:{title:":: СТАН СИСТЕМИ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАТРИМКА",heartbeat:"СЕРЦЕБИТТЯ"},status_labels:{connected:"ПІДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХОРОНЯЄТЬСЯ",synced:"СИНХРОНІЗОВАНО"},ago:"{n}с тому",enter_terminal:"[ ВІДКРИТИ РЕАЛ-ТАЙМ ТЕРМІНАЛ ]"},footer:{rights:"© {year} Nexus Quant. Всі права захищені.",location:"Ріо-де-Жанейро, БР // Глобальні операції"}},tg={common:{change_language:"更改语言为 {name}",loading:"加载中..."},hero:{status:"系统运行正常",title:"NEXUS QUANT",subtitle:"专有定量研究和自动决策系统。",cta:"[ 查看理念 ]",cta_terminal:"[ 实时终端 ]"},philosophy:{title:">_ 任务指令",hero_text:'我们将金融市场视为<span class="text-white font-medium">复杂的物理系统</span>。通过将<span class="text-white font-medium">随机研究</span>与<span class="text-white font-medium">确定性软件工程</span>相结合，我们构建了在混乱中蓬勃发展的决策引擎。',p1:{title:"精确性",text:"我们优先考虑数据的完整性和正确性，而不是单纯的投机速度。"},p2:{title:"自动化",text:"从关键执行工作流中消除人类认知偏差。"},p3:{title:"弹性",text:"旨在在对抗性环境中保持 99.9% 正常运行时间的系统。"}},stack:{title:">_ 架构",card1:{title:"定量分析",text:"使用 Python 数据科学生态系统进行快速假设检验、统计建模和回测。"},card2:{title:"生产运行环境",text:"我们的专有执行引擎。建立在函数式编程原则之上，以确保并发安全和容错能力。"},card3:{title:"不可变账本",text:"每个决策状态的完全可追溯性。我们利用时间旅行数据库功能进行严格的交易后审计。"}},metrics:{title:":: 系统状态 ::",header:{component:"组件",status:"状态",latency:"延迟",heartbeat:"心跳"},status_labels:{connected:"已连接",running:"运行中",guarded:"受保护",synced:"已同步"},ago:"{n}秒前",enter_terminal:"[ 进入实时交易终端 ]"},footer:{rights:"© {year} Nexus Quant. 保留所有权利。",location:"里约热内卢, 巴西 // 全球运营"}},ng={common:{change_language:"言語を{name}に変更",loading:"読み込み中..."},hero:{status:"システム稼働中",title:"NEXUS QUANT",subtitle:"独自の定量的研究および自動意思決定システム。",cta:"[ 哲学を見る ]",cta_terminal:"[ ライブ端末 ]"},philosophy:{title:">_ ミッション指令",hero_text:'私たちは金融市場を<span class="text-white font-medium">複雑な物理システム</span>として捉えています。<span class="text-white font-medium">確率的研究</span>と<span class="text-white font-medium">決定論的ソフトウェア工学</span>を融合させることで、混沌の中で繁栄する意思決定エンジンを構築します。',p1:{title:"精度",text:"私たちは、単なる投機的な速度よりもデータの整合性と正確性を優先します。"},p2:{title:"自動化",text:"重要な実行ワークフローから人間の認知的バイアスを排除します。"},p3:{title:"回復力",text:"敵対的な環境でも99.9%の稼働率を維持するように設計されたシステム。"}},stack:{title:">_ アーキテクチャ",card1:{title:"定量的分析",text:"Pythonデータサイエンスエコシステムを使用した迅速な仮説検証、統計モデリング、およびバックテスト。"},card2:{title:"本番ランタイム",text:"当社独自の実行エンジン。並行性の安全性とフォールトトレランスを確保するために、関数型プログラミングの原則に基づいて構築されています。"},card3:{title:"不変台帳",text:"すべての意思決定状態の完全な追跡可能性。厳格な取引後監査のためにタイムトラベルデータベース機能を利用しています。"}},metrics:{title:":: システムステータス ::",header:{component:"コンポーネント",status:"ステータス",latency:"レイテンシ",heartbeat:"ハートビート"},status_labels:{connected:"接続済み",running:"実行中",guarded:"保護中",synced:"同期済み"},ago:"{n}秒前",enter_terminal:"[ リアルタイム端末に入る ]"},footer:{rights:"© {year} Nexus Quant. 全著作権所有。",location:"リオデジャネイロ, ブラジル // グローバルオペレーション"}},ig={common:{change_language:"Sprache ändern zu {name}",loading:"LÄDT..."},hero:{status:"SYSTEME BETRIEBSBEREIT",title:"NEXUS QUANT",subtitle:"Proprietäre quantitative Forschung & automatisierte Entscheidungssysteme.",cta:"[ PHILOSOPHIE ANSEHEN ]",cta_terminal:"[ LIVE-TERMINAL ]"},philosophy:{title:">_ MISSIONSDIREKTIVE",hero_text:'Wir betrachten Finanzmärkte als <span class="text-white font-medium">komplexe physikalische Systeme</span>. Durch die Verbindung von <span class="text-white font-medium">stochastischer Forschung</span> mit <span class="text-white font-medium">deterministischer Softwareentwicklung</span> bauen wir Entscheidungsmaschinen, die im Chaos gedeihen.',p1:{title:"Präzision",text:"Wir priorisieren Datenintegrität und Korrektheit gegenüber roher spekulativer Geschwindigkeit."},p2:{title:"Automatisierung",text:"Entfernung menschlicher kognitiver Verzerrungen aus kritischen Ausführungsabläufen."},p3:{title:"Resilienz",text:"Systeme, die entwickelt wurden, um in feindlichen Umgebungen eine Verfügbarkeit von 99,9% aufrechtzuerhalten."}},stack:{title:">_ ARCHITEKTUR",card1:{title:"QUANTITATIVE ANALYSE",text:"Schnelles Testen von Hypothesen, statistische Modellierung und Backtesting unter Verwendung des Python-Data-Science-Ökosystems."},card2:{title:"PRODUKTIONS-LAUFZEITUMGEBUNG",text:"Unsere proprietäre Ausführungs-Engine. Aufgebaut auf Prinzipien der funktionalen Programmierung zur Gewährleistung von Nebenläufigkeitssicherheit und Fehlertoleranz."},card3:{title:"UNVERÄNDERLICHES HAUPTBUCH",text:"Vollständige Rückverfolgbarkeit jedes Entscheidungszustands. Wir nutzen Zeitreise-Datenbankfunktionen für rigorose Nachhandelsprüfungen."}},metrics:{title:":: SYSTEMSTATUS ::",header:{component:"KOMPONENTE",status:"STATUS",latency:"LATENZ",heartbeat:"HEARTBEAT"},status_labels:{connected:"VERBUNDEN",running:"LÄUFT",guarded:"GESCHÜTZT",synced:"SYNCHRONISIERT"},ago:"vor {n}s",enter_terminal:"[ LIVE-TERMINAL ÖFFNEN ]"},footer:{rights:"© {year} Nexus Quant. Alle Rechte vorbehalten.",location:"Rio de Janeiro, BR // Globale Operationen"}};Oi("en",Kv);Oi("pt",Zv);Oi("es",Jv);Oi("ru",Qv);Oi("uk",eg);Oi("zh",tg);Oi("ja",ng);Oi("de",ig);const hl=["en","pt"];function rg(){if(typeof window>"u")return"en";try{const e=localStorage.getItem("preferred-locale");if(e&&hl.includes(e))return e}catch{}const n=navigator.languages||[navigator.language];for(const e of n){if(!e)continue;if(hl.includes(e))return e;const t=e.split("-")[0];if(hl.includes(t))return t}return"en"}Rv({fallbackLocale:"en",initialLocale:rg()});const ag="5";var wh;typeof window<"u"&&((wh=window.__svelte??(window.__svelte={})).v??(wh.v=new Set)).add(ag);lm();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="182",sg=0,Su=1,og=2,eo=1,lg=2,Va=3,rr=0,An=1,Wn=2,mi=0,ea=1,sc=2,Mu=3,Eu=4,cg=5,Mr=100,dg=101,ug=102,hg=103,fg=104,pg=200,mg=201,vg=202,gg=203,oc=204,lc=205,xg=206,_g=207,bg=208,yg=209,Sg=210,Mg=211,Eg=212,wg=213,Tg=214,cc=0,dc=1,uc=2,sa=3,hc=4,fc=5,pc=6,mc=7,bd=0,Ag=1,Rg=2,vi=0,Of=1,Bf=2,kf=3,zf=4,Hf=5,Vf=6,Gf=7,Wf=300,Pr=301,oa=302,vc=303,gc=304,Vo=306,xc=1e3,Pi=1001,_c=1002,rn=1003,Cg=1004,Ps=1005,hn=1006,fl=1007,wr=1008,Un=1009,$f=1010,Xf=1011,Qa=1012,yd=1013,yi=1014,fi=1015,On=1016,Sd=1017,Md=1018,es=1020,qf=35902,Yf=35899,jf=1021,Kf=1022,ti=1023,Ui=1026,Tr=1027,Zf=1028,Ed=1029,la=1030,wd=1031,Td=1033,to=33776,no=33777,io=33778,ro=33779,bc=35840,yc=35841,Sc=35842,Mc=35843,Ec=36196,wc=37492,Tc=37496,Ac=37488,Rc=37489,Cc=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Fc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,$c=36492,Xc=36494,qc=36495,Yc=36283,jc=36284,Kc=36285,Zc=36286,Pg=3200,Ad=0,Ig=1,Ki="",Gn="srgb",ca="srgb-linear",So="linear",Tt="srgb",kr=7680,wu=519,Lg=512,Dg=513,Ng=514,Rd=515,Ug=516,Fg=517,Cd=518,Og=519,Tu=35044,Au="300 es",pi=2e3,Mo=2001;function Jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bg(){const n=Eo("canvas");return n.style.display="block",n}const Ru={};function Cu(...n){const e="THREE."+n.shift();console.log(e,...n)}function st(...n){const e="THREE."+n.shift();console.warn(e,...n)}function xt(...n){const e="THREE."+n.shift();console.error(e,...n)}function ts(...n){const e=n.join(" ");e in Ru||(Ru[e]=!0,st(...n))}function kg(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Jc=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function zg(n,e){return(n%e+e)%e}function ml(n,e,t){return(1-t)*n+t*e}function Da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=a[s+0],p=a[s+1],g=a[s+2],x=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==u||c!==p||d!==g){let m=l*u+c*p+d*g+h*x;m<0&&(u=-u,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const _=Math.acos(m),b=Math.sin(_);f=Math.sin(f*_)/b,o=Math.sin(o*_)/b,l=l*f+u*o,c=c*f+p*o,d=d*f+g*o,h=h*f+x*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+g*o,h=h*f+x*o;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=a[s],u=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(a/2),u=l(i/2),p=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*d,this.y=i+l*d+o*c-a*h,this.z=r+l*h+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new W,Pu=new us;class ct{constructor(e,t,i,r,a,s,o,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],b=r[4],M=r[7],E=r[2],R=r[5],C=r[8];return a[0]=s*x+o*_+l*E,a[3]=s*m+o*b+l*R,a[6]=s*f+o*M+l*C,a[1]=c*x+d*_+h*E,a[4]=c*m+d*b+h*R,a[7]=c*f+d*M+h*C,a[2]=u*x+p*_+g*E,a[5]=u*m+p*b+g*R,a[8]=u*f+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*a,p=c*a-s*l,g=t*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*s)*x,e[3]=u*x,e[4]=(d*t-r*l)*x,e[5]=(r*a-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(s*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new ct,Iu=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hg(){const n={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Tt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(r.r=ta(r.r),r.g=ta(r.g),r.b=ta(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?So:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ca]:{primaries:e,whitePoint:i,transfer:So,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),n}const _t=Hg();function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zr;class Vg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Eo("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Di(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gg=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(xl(r[s].image)):a.push(xl(r[s]))}else a=xl(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Wg=0;const _l=new W;class yn extends ya{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=Pi,r=Pi,a=hn,s=wr,o=ti,l=Un,c=yn.DEFAULT_ANISOTROPY,d=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ds(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Wf;yn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,E=(f+1)/2,R=(d+u)/4,C=(h+x)/4,L=(g+m)/4;return b>M&&b>E?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=R/i,a=C/i):M>E?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=R/r,a=L/r):E<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(E),i=C/a,r=L/a),this.set(i,r,a,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $g extends ya{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new yn(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends $g{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qf extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xg extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zn):Zn.fromBufferAttribute(a,s),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Ls.subVectors(this.max,Na),Hr.subVectors(e.a,Na),Vr.subVectors(e.b,Na),Gr.subVectors(e.c,Na),Vi.subVectors(Vr,Hr),Gi.subVectors(Gr,Vr),mr.subVectors(Hr,Gr);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-mr.z,mr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,mr.z,0,-mr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-mr.y,mr.x,0];return!bl(t,Hr,Vr,Gr,Ls)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Hr,Vr,Gr,Ls))?!1:(Ds.crossVectors(Vi,Gi),t=[Ds.x,Ds.y,Ds.z],bl(t,Hr,Vr,Gr,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,Is=new hs,Hr=new W,Vr=new W,Gr=new W,Vi=new W,Gi=new W,mr=new W,Na=new W,Ls=new W,Ds=new W,vr=new W;function bl(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){vr.fromArray(n,a);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const qg=new hs,Ua=new W,yl=new W;class Id{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(yl)),this.expandByPoint(Ua.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new W,Sl=new W,Ns=new W,Wi=new W,Ml=new W,Us=new W,El=new W;class ep{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Sl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ns),o=Wi.dot(this.direction),l=-Wi.dot(Ns),c=Wi.lengthSq(),d=Math.abs(1-s*s);let h,u,p,g;if(d>0)if(h=s*l-o,u=s*o-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sl).addScaledVector(Ns,u),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,a){Ml.subVectors(t,e),Us.subVectors(i,e),El.crossVectors(Ml,Us);let s=this.direction.dot(El),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Us.crossVectors(Wi,Us));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(Wi));if(c<0||l+c>s)return null;const d=-o*Wi.dot(El);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m)}set(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),a=1/Wr.setFromMatrixColumn(e,1).length(),s=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=s*d,p=s*h,g=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u+x*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*d,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u-x*o,t[4]=-s*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*d,t[9]=x-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,g=o*d,x=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=g*h+p,t[1]=h,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=s*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,jg)}lookAt(e,t,i){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),$i.crossVectors(i,In),$i.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),$i.crossVectors(i,In)),$i.normalize(),Fs.crossVectors(In,$i),r[0]=$i.x,r[4]=Fs.x,r[8]=In.x,r[1]=$i.y,r[5]=Fs.y,r[9]=In.y,r[2]=$i.z,r[6]=Fs.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],b=i[7],M=i[11],E=i[15],R=r[0],C=r[4],L=r[8],S=r[12],T=r[1],I=r[5],N=r[9],O=r[13],X=r[2],z=r[6],V=r[10],H=r[14],Q=r[3],ae=r[7],ie=r[11],oe=r[15];return a[0]=s*R+o*T+l*X+c*Q,a[4]=s*C+o*I+l*z+c*ae,a[8]=s*L+o*N+l*V+c*ie,a[12]=s*S+o*O+l*H+c*oe,a[1]=d*R+h*T+u*X+p*Q,a[5]=d*C+h*I+u*z+p*ae,a[9]=d*L+h*N+u*V+p*ie,a[13]=d*S+h*O+u*H+p*oe,a[2]=g*R+x*T+m*X+f*Q,a[6]=g*C+x*I+m*z+f*ae,a[10]=g*L+x*N+m*V+f*ie,a[14]=g*S+x*O+m*H+f*oe,a[3]=_*R+b*T+M*X+E*Q,a[7]=_*C+b*I+M*z+E*ae,a[11]=_*L+b*N+M*V+E*ie,a[15]=_*S+b*O+M*H+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15],_=l*p-c*u,b=o*p-c*h,M=o*u-l*h,E=s*p-c*d,R=s*u-l*d,C=s*h-o*d;return t*(x*_-m*b+f*M)-i*(g*_-m*E+f*R)+r*(g*b-x*E+f*C)-a*(g*M-x*R+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*u*c+x*l*p-o*m*p-h*l*f+o*u*f,b=g*u*c-d*m*c-g*l*p+s*m*p+d*l*f-s*u*f,M=d*x*c-g*h*c+g*o*p-s*x*p-d*o*f+s*h*f,E=g*h*l-d*x*l-g*o*u+s*x*u+d*o*m-s*h*m,R=t*_+i*b+r*M+a*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(x*u*a-h*m*a-x*r*p+i*m*p+h*r*f-i*u*f)*C,e[2]=(o*m*a-x*l*a+x*r*c-i*m*c-o*r*f+i*l*f)*C,e[3]=(h*l*a-o*u*a-h*r*c+i*u*c+o*r*p-i*l*p)*C,e[4]=b*C,e[5]=(d*m*a-g*u*a+g*r*p-t*m*p-d*r*f+t*u*f)*C,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*f-t*l*f)*C,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*p+t*l*p)*C,e[8]=M*C,e[9]=(g*h*a-d*x*a-g*i*p+t*x*p+d*i*f-t*h*f)*C,e[10]=(s*x*a-g*o*a+g*i*c-t*x*c-s*i*f+t*o*f)*C,e[11]=(d*o*a-s*h*a-d*i*c+t*h*c+s*i*p-t*o*p)*C,e[12]=E*C,e[13]=(d*x*r-g*h*r+g*i*u-t*x*u-d*i*m+t*h*m)*C,e[14]=(g*o*r-s*x*r-g*i*l+t*x*l+s*i*m-t*o*m)*C,e[15]=(s*h*r-d*o*r+d*i*l-t*h*l-s*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,h=o+o,u=a*c,p=a*d,g=a*h,x=s*d,m=s*h,f=o*h,_=l*c,b=l*d,M=l*h,E=i.x,R=i.y,C=i.z;return r[0]=(1-(x+f))*E,r[1]=(p+M)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+f))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(g+b)*C,r[9]=(m-_)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=Wr.set(r[0],r[1],r[2]).length();const s=Wr.set(r[4],r[5],r[6]).length(),o=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),Jn.copy(this);const c=1/a,d=1/s,h=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=pi,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(l)g=a/(s-a),x=s*a/(s-a);else if(o===pi)g=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Mo)g=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=pi,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(s-a),x=s/(s-a);else if(o===pi)g=-2/(s-a),x=-(s+a)/(s-a);else if(o===Mo)g=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wr=new W,Jn=new Vt,Yg=new W(0,0,0),jg=new W(1,1,1),$i=new W,Fs=new W,In=new W,Du=new Vt,Nu=new us;class ri{constructor(e=0,t=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kg=0;const Uu=new W,$r=new us,Ti=new Vt,Os=new W,Fa=new W,Zg=new W,Jg=new us,Fu=new W(1,0,0),Ou=new W(0,1,0),Bu=new W(0,0,1),ku={type:"added"},Qg={type:"removed"},Xr={type:"childadded",child:null},wl={type:"childremoved",child:null};class Cn extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new W,t=new ri,i=new us,r=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ct}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Os.copy(e):Os.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Fa,Os,this.up):Ti.lookAt(Os,Fa,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Ti),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new W(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new W,Ai=new W,Tl=new W,Ri=new W,qr=new W,Yr=new W,zu=new W,Al=new W,Rl=new W,Cl=new W,Pl=new Wt,Il=new Wt,Ll=new Wt;class ei{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qn.subVectors(r,t),Ai.subVectors(i,t),Tl.subVectors(e,t);const s=Qn.dot(Qn),o=Qn.dot(Ai),l=Qn.dot(Tl),c=Ai.dot(Ai),d=Ai.dot(Tl),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(s*d-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ri.x),l.addScaledVector(s,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Pl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Pl,a.x),s.addScaledVector(Il,a.y),s.addScaledVector(Ll,a.z),s}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Ai.subVectors(e,t),Qn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;qr.subVectors(r,i),Yr.subVectors(a,i),Al.subVectors(e,i);const l=qr.dot(Al),c=Yr.dot(Al);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,r);const d=qr.dot(Rl),h=Yr.dot(Rl);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(qr,s);Cl.subVectors(e,a);const p=qr.dot(Cl),g=Yr.dot(Cl);if(g>=0&&p<=g)return t.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Yr,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return zu.subVectors(a,r),o=(h-d)/(h-d+(p-g)),t.copy(r).addScaledVector(zu,o);const f=1/(m+x+u);return s=x*f,o=u*f,t.copy(i).addScaledVector(qr,s).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=zg(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Dl(s,a,e+1/3),this.g=Dl(s,a,e),this.b=Dl(s,a,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Gn){function i(a){a!==void 0&&parseFloat(a)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return _t.workingToColorSpace(cn.copy(this),e),Math.round(pt(cn.r*255,0,255))*65536+Math.round(pt(cn.g*255,0,255))*256+Math.round(pt(cn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(cn.copy(this),t);const i=cn.r,r=cn.g,a=cn.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Gn){_t.workingToColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,r=cn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Bs);const i=ml(Xi.h,Bs.h,t),r=ml(Xi.s,Bs.s,t),a=ml(Xi.l,Bs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new it;it.NAMES=tp;let ex=0;class Sa extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ea,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class da extends Sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new W,ks=new Ze;let tx=0;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),a=wn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class np extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ip extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nx=0;const Hn=new Vt,Nl=new Cn,jr=new W,Ln=new hs,Oa=new hs,en=new W;class kn extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?ip:np)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ct().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Id);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Ln.min,Oa.min),Ln.expandByPoint(en),en.addVectors(Ln.max,Oa.max),Ln.expandByPoint(en)):(Ln.expandByPoint(Oa.min),Ln.expandByPoint(Oa.max))}Ln.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)en.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(en));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)en.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),en.add(jr)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new W,l[L]=new W;const c=new W,d=new W,h=new W,u=new Ze,p=new Ze,g=new Ze,x=new W,m=new W;function f(L,S,T){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,T),u.fromBufferAttribute(a,L),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,T),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(I),o[L].add(x),o[S].add(x),o[T].add(x),l[L].add(m),l[S].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,S=_.length;L<S;++L){const T=_[L],I=T.start,N=T.count;for(let O=I,X=I+N;O<X;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new W,M=new W,E=new W,R=new W;function C(L){E.fromBufferAttribute(r,L),R.copy(E);const S=o[L];b.copy(S),b.sub(E.multiplyScalar(E.dot(S))).normalize(),M.crossVectors(R,S);const I=M.dot(l[L])<0?-1:1;s.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,S=_.length;L<S;++L){const T=_[L],I=T.start,N=T.count;for(let O=I,X=I+N;O<X;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,a=new W,s=new W,o=new W,l=new W,c=new W,d=new W,h=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new gi(u,d,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Vt,gr=new ep,zs=new Id,Vu=new W,Hs=new W,Vs=new W,Gs=new W,Ul=new W,Ws=new W,Gu=new W,$s=new W;class an extends Cn{constructor(e=new kn,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ws.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Ul.fromBufferAttribute(h,e),s?Ws.addScaledVector(Ul,d):Ws.addScaledVector(Ul.sub(t),d))}t.add(Ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(a),gr.copy(e.ray).recast(e.near),!(zs.containsPoint(gr.origin)===!1&&(gr.intersectSphere(zs,Vu)===null||gr.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(a).invert(),gr.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,E=b;M<E;M+=3){const R=o.getX(M),C=o.getX(M+1),L=o.getX(M+2);r=Xs(this,f,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=Xs(this,s,e,i,c,d,h,_,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,E=b;M<E;M+=3){const R=M,C=M+1,L=M+2;r=Xs(this,f,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=m,b=m+1,M=m+2;r=Xs(this,s,e,i,c,d,h,_,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ix(n,e,t,i,r,a,s,o){let l;if(e.side===An?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===rr,o),l===null)return null;$s.copy(o),$s.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:n}}function Xs(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Hs),n.getVertexPosition(l,Vs),n.getVertexPosition(c,Gs);const d=ix(n,e,t,i,Hs,Vs,Gs,Gu);if(d){const h=new W;ei.getBarycoord(Gu,Hs,Vs,Gs,h),r&&(d.uv=ei.getInterpolatedAttribute(r,o,l,c,h,new Ze)),a&&(d.uv1=ei.getInterpolatedAttribute(a,o,l,c,h,new Ze)),s&&(d.normal=ei.getInterpolatedAttribute(s,o,l,c,h,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new W,materialIndex:0};ei.getNormal(Hs,Vs,Gs,u.normal),d.face=u,d.barycoord=h}return d}class Ma extends kn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(h,2));function g(x,m,f,_,b,M,E,R,C,L,S){const T=M/C,I=E/L,N=M/2,O=E/2,X=R/2,z=C+1,V=L+1;let H=0,Q=0;const ae=new W;for(let ie=0;ie<V;ie++){const oe=ie*I-O;for(let we=0;we<z;we++){const _e=we*T-N;ae[x]=_e*_,ae[m]=oe*b,ae[f]=X,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[f]=R>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(we/C),h.push(1-ie/L),H+=1}}for(let ie=0;ie<L;ie++)for(let oe=0;oe<C;oe++){const we=u+oe+z*ie,_e=u+oe+z*(ie+1),Oe=u+(oe+1)+z*(ie+1),je=u+(oe+1)+z*ie;l.push(we,_e,je),l.push(_e,Oe,je),Q+=6}o.addGroup(p,Q,S),p+=Q,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ua(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=ua(n[t]);for(const r in i)e[r]=i[r]}return e}function rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const wo={clone:ua,merge:pn};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new W,Wu=new Ze,$u=new Ze;class xn extends ap{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,$u),t.subVectors($u,Wu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class ox extends Cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Kr,Zr,e,t);r.layers=this.layers,this.add(r);const a=new xn(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const s=new xn(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new xn(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const l=new xn(Kr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new xn(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sp extends yn{constructor(e=[],t=Pr,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class op extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ma(5,5,5),a=new sn({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:mi});a.uniforms.tEquirect.value=t;const s=new an(r,a),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=hn),new ox(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class Ga extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lx={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Dd extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cx extends yn{constructor(e=null,t=1,i=1,r,a,s,o,l,c=rn,d=rn,h,u){super(null,s,o,l,c,d,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=new W,dx=new W,ux=new ct;class yr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ol.subVectors(i,t).cross(dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ux.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Id,hx=new Ze(.5,.5),qs=new W;class Nd{constructor(e=new yr,t=new yr,i=new yr,r=new yr,a=new yr,s=new yr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],_=a[12],b=a[13],M=a[14],E=a[15];if(r[0].setComponents(c-s,p-d,f-g,E-_).normalize(),r[1].setComponents(c+s,p+d,f+g,E+_).normalize(),r[2].setComponents(c+o,p+h,f+x,E+b).normalize(),r[3].setComponents(c-o,p-h,f-x,E-b).normalize(),i)r[4].setComponents(l,u,m,M).normalize(),r[5].setComponents(c-l,p-u,f-m,E-M).normalize();else if(r[4].setComponents(c-l,p-u,f-m,E-M).normalize(),t===pi)r[5].setComponents(c+l,p+u,f+m,E+M).normalize();else if(t===Mo)r[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const t=hx.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ns extends yn{constructor(e,t,i=yi,r,a,s,o=rn,l=rn,c,d=Ui,h=1){if(d!==Ui&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fx extends ns{constructor(e,t=yi,i=Pr,r,a,s=rn,o=rn,l,c=Ui){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lp extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends kn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),d(),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(a.slice(),3)),this.setAttribute("uv",new qt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new W,M=new W,E=new W;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],M),p(t[R+2],E),l(b,M,E,_)}function l(_,b,M,E){const R=E+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const S=_.clone().lerp(M,L/R),T=b.clone().lerp(M,L/R),I=R-L;for(let N=0;N<=I;N++)N===0&&L===R?C[L][N]=S:C[L][N]=S.clone().lerp(T,N/I)}for(let L=0;L<R;L++)for(let S=0;S<2*(R-L)-1;S++){const T=Math.floor(S/2);S%2===0?(u(C[L][T+1]),u(C[L+1][T]),u(C[L][T])):(u(C[L][T+1]),u(C[L+1][T+1]),u(C[L+1][T]))}}function c(_){const b=new W;for(let M=0;M<a.length;M+=3)b.x=a[M+0],b.y=a[M+1],b.z=a[M+2],b.normalize().multiplyScalar(_),a[M+0]=b.x,a[M+1]=b.y,a[M+2]=b.z}function d(){const _=new W;for(let b=0;b<a.length;b+=3){_.x=a[b+0],_.y=a[b+1],_.z=a[b+2];const M=m(_)/2/Math.PI+.5,E=f(_)/Math.PI+.5;s.push(M,1-E)}g(),h()}function h(){for(let _=0;_<s.length;_+=6){const b=s[_+0],M=s[_+2],E=s[_+4],R=Math.max(b,M,E),C=Math.min(b,M,E);R>.9&&C<.1&&(b<.2&&(s[_+0]+=1),M<.2&&(s[_+2]+=1),E<.2&&(s[_+4]+=1))}}function u(_){a.push(_.x,_.y,_.z)}function p(_,b){const M=_*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const _=new W,b=new W,M=new W,E=new W,R=new Ze,C=new Ze,L=new Ze;for(let S=0,T=0;S<a.length;S+=9,T+=6){_.set(a[S+0],a[S+1],a[S+2]),b.set(a[S+3],a[S+4],a[S+5]),M.set(a[S+6],a[S+7],a[S+8]),R.set(s[T+0],s[T+1]),C.set(s[T+2],s[T+3]),L.set(s[T+4],s[T+5]),E.copy(_).add(b).add(M).divideScalar(3);const I=m(E);x(R,T+0,_,I),x(C,T+2,b,I),x(L,T+4,M,I)}}function x(_,b,M,E){E<0&&_.x===1&&(s[b]=_.x-1),M.x===0&&M.z===0&&(s[b]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.vertices,e.indices,e.radius,e.detail)}}class Ud extends fs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ud(e.radius,e.detail)}}class Fd extends fs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fd(e.radius,e.detail)}}class ps extends kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<d;f++){const _=f*u-s;for(let b=0;b<c;b++){const M=b*h-a;g.push(M,-_,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const b=_+c*f,M=_+c*(f+1),E=_+1+c*(f+1),R=_+1+c*f;p.push(b,M,R),p.push(M,E,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class Od extends fs{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Od(e.radius,e.detail)}}class To extends kn{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new W,h=new W,u=new W;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*a,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,_=(r+1)*p+g;s.push(x,m,_),s.push(m,f,_)}this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bd extends kn{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],d=[],h=new W,u=new W,p=new W,g=new W,x=new W,m=new W,f=new W;for(let b=0;b<=i;++b){const M=b/i*a*Math.PI*2;_(M,a,s,e,p),_(M+.01,a,s,e,g),m.subVectors(g,p),f.addVectors(g,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let E=0;E<=r;++E){const R=E/r*Math.PI*2,C=-t*Math.cos(R),L=t*Math.sin(R);h.x=p.x+(C*f.x+L*x.x),h.y=p.y+(C*f.y+L*x.y),h.z=p.z+(C*f.z+L*x.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),c.push(u.x,u.y,u.z),d.push(b/i),d.push(E/r)}}for(let b=1;b<=i;b++)for(let M=1;M<=r;M++){const E=(r+1)*(b-1)+(M-1),R=(r+1)*b+(M-1),C=(r+1)*b+M,L=(r+1)*(b-1)+M;o.push(E,R,L),o.push(R,C,L)}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(d,2));function _(b,M,E,R,C){const L=Math.cos(b),S=Math.sin(b),T=E/M*b,I=Math.cos(T);C.x=R*(2+I)*.5*L,C.y=R*(2+I)*S*.5,C.z=R*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class px extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mx extends Sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vx extends mx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xu extends Sa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gx extends Sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xx extends Sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cp extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bl=new Vt,qu=new W,Yu=new W;class _x{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bx extends _x{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ao extends cp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kd extends ap{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dp extends cp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yx extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ju=new Vt;class Sx{constructor(e,t,i=0,r=1/0){this.ray=new ep(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ld,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):xt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,i=[]){return Qc(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Qc(e[r],this,i,t);return i.sort(Ku),i}}function Ku(n,e){return n.distance-e.distance}function Qc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Qc(a[s],e,t,!0)}}function Zu(n,e,t,i){const r=Mx(i);switch(t){case jf:return n*e;case Zf:return n*e/r.components*r.byteLength;case Ed:return n*e/r.components*r.byteLength;case la:return n*e*2/r.components*r.byteLength;case wd:return n*e*2/r.components*r.byteLength;case Kf:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case Td:return n*e*4/r.components*r.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case bc:case Sc:return Math.max(n,8)*Math.max(e,8)/2;case Ec:case wc:case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Cc:case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $c:case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mx(n){switch(n){case Un:case $f:return{byteLength:1,components:1};case Qa:case Xf:case On:return{byteLength:2,components:1};case Sd:case Md:return{byteLength:2,components:4};case yi:case yd:case fi:return{byteLength:4,components:1};case qf:case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function up(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ex(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
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
#endif`,M_=`uniform sampler2D dfgLUT;
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
}`,E_=`
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cb=`float getShadowMask() {
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
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Lb=`#define DISTANCE
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
}`,Db=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,kb=`uniform vec3 diffuse;
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
}`,zb=`#define LAMBERT
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
}`,Hb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Gb=`#define MATCAP
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
}`,Wb=`#define NORMAL
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
}`,$b=`#define NORMAL
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
}`,Xb=`#define PHONG
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
}`,qb=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Kb=`#define TOON
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
}`,Zb=`#define TOON
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
}`,Jb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:wx,alphahash_pars_fragment:Tx,alphamap_fragment:Ax,alphamap_pars_fragment:Rx,alphatest_fragment:Cx,alphatest_pars_fragment:Px,aomap_fragment:Ix,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Nx,begin_vertex:Ux,beginnormal_vertex:Fx,bsdfs:Ox,iridescence_fragment:Bx,bumpmap_pars_fragment:kx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:$x,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:jx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Jx,emissivemap_fragment:Qx,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:a_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:g_,envmap_vertex:o_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:d_,fog_pars_fragment:u_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:v_,lights_toon_fragment:x_,lights_toon_pars_fragment:__,lights_phong_fragment:b_,lights_phong_pars_fragment:y_,lights_physical_fragment:S_,lights_physical_pars_fragment:M_,lights_fragment_begin:E_,lights_fragment_maps:w_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:I_,map_pars_fragment:L_,map_particle_fragment:D_,map_particle_pars_fragment:N_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:$_,normal_vertex:X_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:Z_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:ob,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:db,skinning_pars_vertex:ub,skinning_vertex:hb,skinnormal_vertex:fb,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:vb,tonemapping_pars_fragment:gb,transmission_fragment:xb,transmission_pars_fragment:_b,uv_pars_fragment:bb,uv_pars_vertex:yb,uv_vertex:Sb,worldpos_vertex:Mb,background_vert:Eb,background_frag:wb,backgroundCube_vert:Tb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:Pb,depth_frag:Ib,distance_vert:Lb,distance_frag:Db,equirect_vert:Nb,equirect_frag:Ub,linedashed_vert:Fb,linedashed_frag:Ob,meshbasic_vert:Bb,meshbasic_frag:kb,meshlambert_vert:zb,meshlambert_frag:Hb,meshmatcap_vert:Vb,meshmatcap_frag:Gb,meshnormal_vert:Wb,meshnormal_frag:$b,meshphong_vert:Xb,meshphong_frag:qb,meshphysical_vert:Yb,meshphysical_frag:jb,meshtoon_vert:Kb,meshtoon_frag:Zb,points_vert:Jb,points_frag:Qb,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},Ae={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},di={basic:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:pn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:pn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:pn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:pn([Ae.lights,Ae.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ys={r:0,b:0,g:0},_r=new ri,ry=new Vt;function ay(n,e,t,i,r,a,s){const o=new it(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const E=g(b);E===null?f(o,l):E&&E.isColor&&(f(E,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Vo)?(d===void 0&&(d=new an(new Ma(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ua(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_r.copy(M.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(_r)),d.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,(h!==E||u!==E.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=E,u=E.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new an(new ps(2,2),new sn({name:"BackgroundMaterial",uniforms:ua(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,M){b.getRGB(Ys,rp(n)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,M,s)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:x,addToRenderList:m,dispose:_}}function sy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(T,I,N,O,X){let z=!1;const V=h(O,N,I);a!==V&&(a=V,c(a.object)),z=p(T,O,N,X),z&&g(T,O,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,M(T,I,N,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function h(T,I,N){const O=N.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let z=X[I.id];z===void 0&&(z={},X[I.id]=z);let V=z[O];return V===void 0&&(V=u(l()),z[O]=V),V}function u(T){const I=[],N=[],O=[];for(let X=0;X<t;X++)I[X]=0,N[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:O,object:T,attributes:{},index:null}}function p(T,I,N,O){const X=a.attributes,z=I.attributes;let V=0;const H=N.getAttributes();for(const Q in H)if(H[Q].location>=0){const ie=X[Q];let oe=z[Q];if(oe===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;V++}return a.attributesNum!==V||a.index!==O}function g(T,I,N,O){const X={},z=I.attributes;let V=0;const H=N.getAttributes();for(const Q in H)if(H[Q].location>=0){let ie=z[Q];ie===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),X[Q]=oe,V++}a.attributes=X,a.attributesNum=V,a.index=O}function x(){const T=a.newAttributes;for(let I=0,N=T.length;I<N;I++)T[I]=0}function m(T){f(T,0)}function f(T,I){const N=a.newAttributes,O=a.enabledAttributes,X=a.attributeDivisors;N[T]=1,O[T]===0&&(n.enableVertexAttribArray(T),O[T]=1),X[T]!==I&&(n.vertexAttribDivisor(T,I),X[T]=I)}function _(){const T=a.newAttributes,I=a.enabledAttributes;for(let N=0,O=I.length;N<O;N++)I[N]!==T[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function b(T,I,N,O,X,z,V){V===!0?n.vertexAttribIPointer(T,I,N,X,z):n.vertexAttribPointer(T,I,N,O,X,z)}function M(T,I,N,O){x();const X=O.attributes,z=N.getAttributes(),V=I.defaultAttributeValues;for(const H in z){const Q=z[H];if(Q.location>=0){let ae=X[H];if(ae===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),ae!==void 0){const ie=ae.normalized,oe=ae.itemSize,we=e.get(ae);if(we===void 0)continue;const _e=we.buffer,Oe=we.type,je=we.bytesPerElement,K=Oe===n.INT||Oe===n.UNSIGNED_INT||ae.gpuType===yd;if(ae.isInterleavedBufferAttribute){const te=ae.data,fe=te.stride,Be=ae.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)f(Q.location+ve,te.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Q.locationSize;ve++)m(Q.location+ve);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ve=0;ve<Q.locationSize;ve++)b(Q.location+ve,oe/Q.locationSize,Oe,ie,fe*je,(Be+oe/Q.locationSize*ve)*je,K)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)f(Q.location+te,ae.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<Q.locationSize;te++)m(Q.location+te);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let te=0;te<Q.locationSize;te++)b(Q.location+te,oe/Q.locationSize,Oe,ie,oe*je,oe/Q.locationSize*te*je,K)}}else if(V!==void 0){const ie=V[H];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Q.location,ie);break;case 3:n.vertexAttrib3fv(Q.location,ie);break;case 4:n.vertexAttrib4fv(Q.location,ie);break;default:n.vertexAttrib1fv(Q.location,ie)}}}}_()}function E(){L();for(const T in i){const I=i[T];for(const N in I){const O=I[N];for(const X in O)d(O[X].object),delete O[X];delete I[N]}delete i[T]}}function R(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const N in I){const O=I[N];for(const X in O)d(O[X].object),delete O[X];delete I[N]}delete i[T.id]}function C(T){for(const I in i){const N=i[I];if(N[T.id]===void 0)continue;const O=N[T.id];for(const X in O)d(O[X].object),delete O[X];delete N[T.id]}}function L(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function oy(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*u[x];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ly(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(st("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:R}}function cy(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new yr,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||a&&!m)a?d(null):c();else{const _=a?0:i,b=_*4;let M=f.clippingState||null;l.value=M,M=d(g,u,b,p);for(let E=0;E!==b;++E)M[E]=t[E];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==x;++b,M+=4)s.copy(h[b]).applyMatrix4(_,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dy(n){let e=new WeakMap;function t(s,o){return o===vc?s.mapping=Pr:o===gc&&(s.mapping=oa),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===vc||o===gc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new op(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Qi=4,Ju=[.125,.215,.35,.446,.526,.582],Er=20,uy=256,Ba=new kd,Qu=new it;let kl=null,zl=0,Hl=0,Vl=!1;const hy=new W;class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=hy}=a;kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,zl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:On,format:ti,colorSpace:ca,depthBuffer:!1},r=th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fy(a)),this._blurMaterial=my(a,e,t),this._ggxMaterial=py(a,e,t)}return r}_compileMaterial(e){const t=new an(new kn,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,r,a){const l=new xn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Qu),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new Ma,new da({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,f=!0):(m.color.copy(Qu),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[b],a.y,a.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[b]));const E=this._cubeSize;Jr(r,M*E,b>2?E:0,E,E),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Qi?i-g+Qi:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Jr(a,m,f,3*x,2*x),r.setRenderTarget(a),r.render(o,Ba),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,Jr(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(o,Ba)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=a/g,m=isFinite(a)?1+Math.floor(d*x):Er;m>Er&&st(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const f=[];let _=0;for(let C=0;C<Er;++C){const L=C/x,S=Math.exp(-L*L/2);f.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const M=this._sizeLods[r],E=3*M*(r>b-Qi?r-b+Qi:0),R=4*(this._cubeSize-M);Jr(t,E,R,3*M,2*M),l.setRenderTarget(t),l.render(h,Ba)}}function fy(n){const e=[],t=[],i=[];let r=n;const a=n-Qi+1+Ju.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-Qi?l=Ju[s-n+Qi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];_.set(S,x*g*R),b.set(u,m*g*R);const T=[R,R,R,R,R,R];M.set(T,f*g*R)}const E=new kn;E.setAttribute("position",new gi(_,x)),E.setAttribute("uv",new gi(b,m)),E.setAttribute("faceIndex",new gi(M,f)),i.push(new an(E,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function th(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function py(n,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function my(n,e,t){const i=new Float32Array(Er),r=new W(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function nh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ih(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function vy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===gc,d=l===Pr||l===oa;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new eh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new eh(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function gy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("WebGLRenderer: "+i+" extension not supported."),r}}}function xy(n,e,t,i){const r={},a=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete r[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let b=0,M=_.length;b<M;b+=3){const E=_[b+0],R=_[b+1],C=_[b+2];u.push(E,R,R,C,C,E)}}else if(g!==void 0){const _=g.array;x=g.version;for(let b=0,M=_.length/3-1;b<M;b+=3){const E=b+0,R=b+1,C=b+2;u.push(E,R,R,C,C,E)}}else return;const m=new(Jf(u)?ip:np)(u,1);m.version=x;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function _y(n,e,t){let i;function r(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){n.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,u*s,g),t.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*x[_];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function by(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:xt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yy(n,e,t){const i=new WeakMap,r=new Wt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var p=T;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let E=o.attributes.position.count*M,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*R*4*h),L=new Qf(C,E,R,h);L.type=fi,L.needsUpdate=!0;const S=M*4;for(let I=0;I<h;I++){const N=f[I],O=_[I],X=b[I],z=E*R*4*I;for(let V=0;V<N.count;V++){const H=V*S;g===!0&&(r.fromBufferAttribute(N,V),C[z+H+0]=r.x,C[z+H+1]=r.y,C[z+H+2]=r.z,C[z+H+3]=0),x===!0&&(r.fromBufferAttribute(O,V),C[z+H+4]=r.x,C[z+H+5]=r.y,C[z+H+6]=r.z,C[z+H+7]=0),m===!0&&(r.fromBufferAttribute(X,V),C[z+H+8]=r.x,C[z+H+9]=r.y,C[z+H+10]=r.z,C[z+H+11]=X.itemSize===4?r.w:1)}}u={count:h,texture:L,size:new Ze(E,R)},i.set(o,u),o.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function Sy(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const My={[Of]:"LINEAR_TONE_MAPPING",[Bf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[zf]:"ACES_FILMIC_TONE_MAPPING",[Vf]:"AGX_TONE_MAPPING",[Gf]:"NEUTRAL_TONE_MAPPING",[Hf]:"CUSTOM_TONE_MAPPING"};function Ey(n,e,t,i,r){const a=new Rn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new Rn(e,t,{type:On,depthBuffer:!1,stencilBuffer:!1}),o=new kn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new px({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new an(o,l),d=new kd(-1,1,1,-1,0,1);let h=null,u=null,p=!1,g,x=null,m=[],f=!1;this.setSize=function(_,b){a.setSize(_,b),s.setSize(_,b);for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(_,b)}},this.setEffects=function(_){m=_,f=m.length>0&&m[0].isRenderPass===!0;const b=a.width,M=a.height;for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(b,M)}},this.begin=function(_,b){if(p||_.toneMapping===vi&&m.length===0)return!1;if(x=b,b!==null){const M=b.width,E=b.height;(a.width!==M||a.height!==E)&&this.setSize(M,E)}return f===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=vi,!0},this.hasRenderPass=function(){return f},this.end=function(_,b){_.toneMapping=g,p=!0;let M=a,E=s;for(let R=0;R<m.length;R++){const C=m[R];if(C.enabled!==!1&&(C.render(_,E,M,b),C.needsSwap!==!1)){const L=M;M=E,E=L}}if(h!==_.outputColorSpace||u!==_.toneMapping){h=_.outputColorSpace,u=_.toneMapping,l.defines={},_t.getTransfer(h)===Tt&&(l.defines.SRGB_TRANSFER="");const R=My[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const hp=new yn,ed=new ns(1,1),fp=new Qf,pp=new Xg,mp=new sp,rh=[],ah=[],sh=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function Ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=rh[r];if(a===void 0&&(a=new Float32Array(r),rh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;lh.set(i),n.uniformMatrix2fv(this.addr,!1,lh),Qt(t,i)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;oh.set(i),n.uniformMatrix3fv(this.addr,!1,oh),Qt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;sh.set(i),n.uniformMatrix4fv(this.addr,!1,sh),Qt(t,i)}}function Ly(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function zy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(ed.compareFunction=t.isReversedDepthBuffer()?Cd:Rd,a=ed):a=hp,t.setTexture2D(e||a,r)}function Hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pp,r)}function Vy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mp,r)}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fp,r)}function Wy(n){switch(n){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Fy;case 36294:return Oy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function $y(n,e){n.uniform1fv(this.addr,e)}function Xy(n,e){const t=Ea(e,this.size,2);n.uniform2fv(this.addr,t)}function qy(n,e){const t=Ea(e,this.size,3);n.uniform3fv(this.addr,t)}function Yy(n,e){const t=Ea(e,this.size,4);n.uniform4fv(this.addr,t)}function jy(n,e){const t=Ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ky(n,e){const t=Ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zy(n,e){const t=Ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jy(n,e){n.uniform1iv(this.addr,e)}function Qy(n,e){n.uniform2iv(this.addr,e)}function e1(n,e){n.uniform3iv(this.addr,e)}function t1(n,e){n.uniform4iv(this.addr,e)}function n1(n,e){n.uniform1uiv(this.addr,e)}function i1(n,e){n.uniform2uiv(this.addr,e)}function r1(n,e){n.uniform3uiv(this.addr,e)}function a1(n,e){n.uniform4uiv(this.addr,e)}function s1(n,e,t){const i=this.cache,r=e.length,a=Wo(t,r);Jt(i,a)||(n.uniform1iv(this.addr,a),Qt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=ed:s=hp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function o1(n,e,t){const i=this.cache,r=e.length,a=Wo(t,r);Jt(i,a)||(n.uniform1iv(this.addr,a),Qt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||pp,a[s])}function l1(n,e,t){const i=this.cache,r=e.length,a=Wo(t,r);Jt(i,a)||(n.uniform1iv(this.addr,a),Qt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||mp,a[s])}function c1(n,e,t){const i=this.cache,r=e.length,a=Wo(t,r);Jt(i,a)||(n.uniform1iv(this.addr,a),Qt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||fp,a[s])}function d1(n){switch(n){case 5126:return $y;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return jy;case 35675:return Ky;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return Qy;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}class u1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}}class h1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d1(t.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function ch(n,e){n.seq.push(e),n.map[e.id]=e}function p1(n,e,t){const i=n.name,r=i.length;for(Gl.lastIndex=0;;){const a=Gl.exec(i),s=Gl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){ch(t,c===void 0?new u1(o,n,e):new h1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new f1(o),ch(t,h)),t=h}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);p1(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const m1=37297;let v1=0;function g1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const uh=new ct;function x1(n){_t._getMatrix(uh,_t.workingColorSpace,n);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case So:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+g1(n.getShaderSource(e),o)}else return a}function _1(n,e){const t=x1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const b1={[Of]:"Linear",[Bf]:"Reinhard",[kf]:"Cineon",[zf]:"ACESFilmic",[Vf]:"AgX",[Gf]:"Neutral",[Hf]:"Custom"};function y1(n,e){const t=b1[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new W;function S1(){_t.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function E1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Wa(n){return n!==""}function fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(n){return n.replace(T1,R1)}const A1=new Map;function R1(n,e){let t=ut[e];if(t===void 0){const i=A1.get(e);if(i!==void 0)t=ut[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return td(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(n){return n.replace(C1,P1)}function P1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const I1={[eo]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function L1(n){return I1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D1={[Pr]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE_UV"};function N1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":D1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const U1={[oa]:"ENVMAP_MODE_REFRACTION"};function F1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":U1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O1={[bd]:"ENVMAP_BLENDING_MULTIPLY",[Ag]:"ENVMAP_BLENDING_MIX",[Rg]:"ENVMAP_BLENDING_ADD"};function B1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":O1[n.combine]||"ENVMAP_BLENDING_NONE"}function k1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function z1(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=L1(t),c=N1(t),d=F1(t),h=B1(t),u=k1(t),p=M1(t),g=E1(a),x=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wa).join(`
`),f.length>0&&(f+=`
`)):(m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),f=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ut.tonemapping_pars_fragment:"",t.toneMapping!==vi?y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),S1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),s=td(s),s=fh(s,t),s=ph(s,t),o=td(o),o=fh(o,t),o=ph(o,t),s=mh(s),o=mh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=_+m+s,M=_+f+o,E=dh(r,r.VERTEX_SHADER,b),R=dh(r,r.FRAGMENT_SHADER,M);r.attachShader(x,E),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(R)||"",z=N.trim(),V=O.trim(),H=X.trim();let Q=!0,ae=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,R);else{const ie=hh(r,E,"vertex"),oe=hh(r,R,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+ie+`
`+oe)}else z!==""?st("WebGLProgram: Program Info Log:",z):(V===""||H==="")&&(ae=!1);ae&&(I.diagnostics={runnable:Q,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(E),r.deleteShader(R),L=new ao(r,x),S=w1(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,m1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=R,this}let H1=0;class V1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new G1(e),t.set(e,i)),i}}class G1{constructor(e){this.id=H1++,this.code=e,this.usedTimes=0}}function W1(n,e,t,i,r,a,s){const o=new Ld,l=new V1,c=new Set,d=[],h=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,I,N,O){const X=N.fog,z=O.geometry,V=S.isMeshStandardMaterial?N.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),Q=H&&H.mapping===Vo?H.image.height:null,ae=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&st("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=ie!==void 0?ie.length:0;let we=0;z.morphAttributes.position!==void 0&&(we=1),z.morphAttributes.normal!==void 0&&(we=2),z.morphAttributes.color!==void 0&&(we=3);let _e,Oe,je,K;if(ae){const ot=di[ae];_e=ot.vertexShader,Oe=ot.fragmentShader}else _e=S.vertexShader,Oe=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const te=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Be=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Ge=!!S.map,dt=!!S.matcap,We=!!H,Ye=!!S.aoMap,et=!!S.lightMap,ze=!!S.bumpMap,rt=!!S.normalMap,F=!!S.displacementMap,Ie=!!S.emissiveMap,Ce=!!S.metalnessMap,ke=!!S.roughnessMap,re=S.anisotropy>0,D=S.clearcoat>0,y=S.dispersion>0,U=S.iridescence>0,$=S.sheen>0,j=S.transmission>0,q=re&&!!S.anisotropyMap,le=D&&!!S.clearcoatMap,ne=D&&!!S.clearcoatNormalMap,ye=D&&!!S.clearcoatRoughnessMap,He=U&&!!S.iridescenceMap,ce=U&&!!S.iridescenceThicknessMap,me=$&&!!S.sheenColorMap,Pe=$&&!!S.sheenRoughnessMap,De=!!S.specularMap,pe=!!S.specularColorMap,tt=!!S.specularIntensityMap,k=j&&!!S.transmissionMap,xe=j&&!!S.thicknessMap,he=!!S.gradientMap,Re=!!S.alphaMap,ue=S.alphaTest>0,ee=!!S.alphaHash,de=!!S.extensions;let Fe=vi;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const at={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:Oe,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Be,instancingColor:Be&&O.instanceColor!==null,instancingMorph:Be&&O.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ca,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:dt,envMap:We,envMapMode:We&&H.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:et,bumpMap:ze,normalMap:rt,displacementMap:F,emissiveMap:Ie,normalMapObjectSpace:rt&&S.normalMapType===Ig,normalMapTangentSpace:rt&&S.normalMapType===Ad,metalnessMap:Ce,roughnessMap:ke,anisotropy:re,anisotropyMap:q,clearcoat:D,clearcoatMap:le,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:y,iridescence:U,iridescenceMap:He,iridescenceThicknessMap:ce,sheen:$,sheenColorMap:me,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:pe,specularIntensityMap:tt,transmission:j,transmissionMap:k,thicknessMap:xe,gradientMap:he,opaque:S.transparent===!1&&S.blending===ea&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:ee,combine:S.combine,mapUv:Ge&&x(S.map.channel),aoMapUv:Ye&&x(S.aoMap.channel),lightMapUv:et&&x(S.lightMap.channel),bumpMapUv:ze&&x(S.bumpMap.channel),normalMapUv:rt&&x(S.normalMap.channel),displacementMapUv:F&&x(S.displacementMap.channel),emissiveMapUv:Ie&&x(S.emissiveMap.channel),metalnessMapUv:Ce&&x(S.metalnessMap.channel),roughnessMapUv:ke&&x(S.roughnessMap.channel),anisotropyMapUv:q&&x(S.anisotropyMap.channel),clearcoatMapUv:le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(S.sheenRoughnessMap.channel),specularMapUv:De&&x(S.specularMap.channel),specularColorMapUv:pe&&x(S.specularColorMap.channel),specularIntensityMapUv:tt&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:xe&&x(S.thicknessMap.channel),alphaMapUv:Re&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(rt||re),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ge||Re),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:we,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&_t.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ie&&S.emissiveMap.isVideoTexture===!0&&_t.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===An,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(T,S),b(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const T=g[S.type];let I;if(T){const N=di[T];I=wo.clone(N.uniforms)}else I=S.uniforms;return I}function E(S,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new z1(n,T,S,a),d.push(I),h.set(T,I)),I}function R(S){if(--S.usedTimes===0){const T=d.indexOf(S);d[T]=d[d.length-1],d.pop(),h.delete(S.cacheKey),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:E,releaseProgram:R,releaseShaderCache:C,programs:d,dispose:L}}function $1(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function X1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,u,p,g,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,u,p,g,x,m){const f=s(h,u,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,u,p,g,x,m){const f=s(h,u,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||X1),i.length>1&&i.sort(u||gh),r.length>1&&r.sort(u||gh)}function d(){for(let h=e,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function q1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new xh,n.set(i,[s])):r>=a.length?(s=new xh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Y1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new it};break;case"SpotLight":t={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function j1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let K1=0;function Z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J1(n){const e=new Y1,t=j1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,a=new Vt,s=new Vt;function o(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,b=0,M=0,E=0,R=0,C=0;c.sort(Z1);for(let S=0,T=c.length;S<T;S++){const I=c[S],N=I.color,O=I.intensity,X=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===la?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=N.r*O,h+=N.g*O,u+=N.b*O;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],O);C++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,Q=t.get(I);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(O),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[x]=V;const H=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,H.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=H.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=z,M++}x++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(N).multiplyScalar(O),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const H=I.shadow,Q=t.get(I);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(O),V.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==E||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=E,L.numLightProbes=C,i.version=K1++)}function l(c,d){let h=0,u=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const b=c[f];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(b.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function _h(n){const e=new J1(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Q1(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new _h(n),e.set(r,[o])):a>=s.length?(o=new _h(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,nS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],iS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bh=new Vt,ka=new W,Wl=new W;function rS(n,e,t){let i=new Nd;const r=new Ze,a=new Ze,s=new Wt,o=new gx,l=new xx,c={},d=t.maxTextureSize,h={[rr]:An,[An]:rr,[Wn]:Wn},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new an(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let f=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===lg&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=eo);const S=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==this.type;O&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(z=>z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,z=R.length;X<z;X++){const V=R[X],H=V.shadow;if(H===void 0){st("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();if(r.multiply(Q),a.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/Q.x),r.x=a.x*Q.x,H.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/Q.y),r.y=a.y*Q.y,H.mapSize.y=a.y)),H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Va){if(V.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Rn(r.x,r.y,{format:la,type:On,minFilter:hn,magFilter:hn,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new ns(r.x,r.y,fi),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn}else{V.isPointLight?(H.map=new op(r.x),H.map.depthTexture=new fx(r.x,yi)):(H.map=new Rn(r.x,r.y),H.map.depthTexture=new ns(r.x,r.y,yi)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Ui;const ie=n.state.buffers.depth.getReversed();this.type===eo?(H.map.depthTexture.compareFunction=ie?Cd:Rd,H.map.depthTexture.minFilter=hn,H.map.depthTexture.magFilter=hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn)}H.camera.updateProjectionMatrix()}const ae=H.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ae;ie++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(H.map),n.clear());const oe=H.getViewport(ie);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),N.viewport(s)}if(V.isPointLight){const oe=H.camera,we=H.matrix,_e=V.distance||oe.far;_e!==oe.far&&(oe.far=_e,oe.updateProjectionMatrix()),ka.setFromMatrixPosition(V.matrixWorld),oe.position.copy(ka),Wl.copy(oe.position),Wl.add(nS[ie]),oe.up.copy(iS[ie]),oe.lookAt(Wl),oe.updateMatrixWorld(),we.makeTranslation(-ka.x,-ka.y,-ka.z),bh.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(bh,oe.coordinateSystem,oe.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),M(C,L,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Va&&_(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,I)};function _(R,C){const L=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(r.x,r.y,{format:la,type:On})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,p,x,null)}function b(R,C,L,S){let T=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)T=I;else if(T=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=T.uuid,O=C.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let z=X[O];z===void 0&&(z=T.clone(),X[O]=z,C.addEventListener("dispose",E)),T=z}if(T.visible=C.visible,T.wireframe=C.wireframe,S===Va?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=n.properties.get(T);N.light=L}return T}function M(R,C,L,S,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Va)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const O=e.update(R),X=R.material;if(Array.isArray(X)){const z=O.groups;for(let V=0,H=z.length;V<H;V++){const Q=z[V],ae=X[Q.materialIndex];if(ae&&ae.visible){const ie=b(R,ae,S,T);R.onBeforeShadow(n,R,C,L,O,ie,Q),n.renderBufferDirect(L,null,O,ie,R,Q),R.onAfterShadow(n,R,C,L,O,ie,Q)}}}else if(X.visible){const z=b(R,X,S,T);R.onBeforeShadow(n,R,C,L,O,z,null),n.renderBufferDirect(L,null,O,z,R,null),R.onAfterShadow(n,R,C,L,O,z,null)}}const N=R.children;for(let O=0,X=N.length;O<X;O++)M(N[O],C,L,S,T)}function E(R){R.target.removeEventListener("dispose",E);for(const L in c){const S=c[L],T=R.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const aS={[cc]:dc,[uc]:pc,[hc]:mc,[sa]:fc,[dc]:cc,[pc]:uc,[mc]:hc,[fc]:sa};function sS(n,e){function t(){let k=!1;const xe=new Wt;let he=null;const Re=new Wt(0,0,0,0);return{setMask:function(ue){he!==ue&&!k&&(n.colorMask(ue,ue,ue,ue),he=ue)},setLocked:function(ue){k=ue},setClear:function(ue,ee,de,Fe,at){at===!0&&(ue*=Fe,ee*=Fe,de*=Fe),xe.set(ue,ee,de,Fe),Re.equals(xe)===!1&&(n.clearColor(ue,ee,de,Fe),Re.copy(xe))},reset:function(){k=!1,he=null,Re.set(-1,0,0,0)}}}function i(){let k=!1,xe=!1,he=null,Re=null,ue=null;return{setReversed:function(ee){if(xe!==ee){const de=e.get("EXT_clip_control");ee?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=ee;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return xe},setTest:function(ee){ee?te(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ee){he!==ee&&!k&&(n.depthMask(ee),he=ee)},setFunc:function(ee){if(xe&&(ee=aS[ee]),Re!==ee){switch(ee){case cc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case uc:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case hc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case pc:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ee}},setLocked:function(ee){k=ee},setClear:function(ee){ue!==ee&&(xe&&(ee=1-ee),n.clearDepth(ee),ue=ee)},reset:function(){k=!1,he=null,Re=null,ue=null,xe=!1}}}function r(){let k=!1,xe=null,he=null,Re=null,ue=null,ee=null,de=null,Fe=null,at=null;return{setTest:function(ot){k||(ot?te(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!k&&(n.stencilMask(ot),xe=ot)},setFunc:function(ot,Ut,Yt){(he!==ot||Re!==Ut||ue!==Yt)&&(n.stencilFunc(ot,Ut,Yt),he=ot,Re=Ut,ue=Yt)},setOp:function(ot,Ut,Yt){(ee!==ot||de!==Ut||Fe!==Yt)&&(n.stencilOp(ot,Ut,Yt),ee=ot,de=Ut,Fe=Yt)},setLocked:function(ot){k=ot},setClear:function(ot){at!==ot&&(n.clearStencil(ot),at=ot)},reset:function(){k=!1,xe=null,he=null,Re=null,ue=null,ee=null,de=null,Fe=null,at=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,b=null,M=null,E=null,R=null,C=new it(0,0,0),L=0,S=!1,T=null,I=null,N=null,O=null,X=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=H>=2);let ae=null,ie={};const oe=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),_e=new Wt().fromArray(oe),Oe=new Wt().fromArray(we);function je(k,xe,he,Re){const ue=new Uint8Array(4),ee=n.createTexture();n.bindTexture(k,ee),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let de=0;de<he;de++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(xe+de,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ee}const K={};K[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(n.DEPTH_TEST),s.setFunc(sa),ze(!1),rt(Su),te(n.CULL_FACE),Ye(mi);function te(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function fe(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function Be(k,xe){return h[k]!==xe?(n.bindFramebuffer(k,xe),h[k]=xe,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ve(k,xe){let he=p,Re=!1;if(k){he=u.get(xe),he===void 0&&(he=[],u.set(xe,he));const ue=k.textures;if(he.length!==ue.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,de=ue.length;ee<de;ee++)he[ee]=n.COLOR_ATTACHMENT0+ee;he.length=ue.length,Re=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Re=!0);Re&&n.drawBuffers(he)}function Ge(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const dt={[Mr]:n.FUNC_ADD,[dg]:n.FUNC_SUBTRACT,[ug]:n.FUNC_REVERSE_SUBTRACT};dt[hg]=n.MIN,dt[fg]=n.MAX;const We={[pg]:n.ZERO,[mg]:n.ONE,[vg]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[Sg]:n.SRC_ALPHA_SATURATE,[bg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[gg]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[yg]:n.ONE_MINUS_DST_COLOR,[_g]:n.ONE_MINUS_DST_ALPHA,[Mg]:n.CONSTANT_COLOR,[Eg]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[Tg]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(k,xe,he,Re,ue,ee,de,Fe,at,ot){if(k===mi){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&(te(n.BLEND),x=!0),k!==cg){if(k!==m||ot!==S){if((f!==Mr||M!==Mr)&&(n.blendEquation(n.FUNC_ADD),f=Mr,M=Mr),ot)switch(k){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",k);break}else switch(k){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",k);break}_=null,b=null,E=null,R=null,C.set(0,0,0),L=0,m=k,S=ot}return}ue=ue||xe,ee=ee||he,de=de||Re,(xe!==f||ue!==M)&&(n.blendEquationSeparate(dt[xe],dt[ue]),f=xe,M=ue),(he!==_||Re!==b||ee!==E||de!==R)&&(n.blendFuncSeparate(We[he],We[Re],We[ee],We[de]),_=he,b=Re,E=ee,R=de),(Fe.equals(C)===!1||at!==L)&&(n.blendColor(Fe.r,Fe.g,Fe.b,at),C.copy(Fe),L=at),m=k,S=!1}function et(k,xe){k.side===Wn?fe(n.CULL_FACE):te(n.CULL_FACE);let he=k.side===An;xe&&(he=!he),ze(he),k.blending===ea&&k.transparent===!1?Ye(mi):Ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const Re=k.stencilWrite;o.setTest(Re),Re&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){T!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),T=k)}function rt(k){k!==sg?(te(n.CULL_FACE),k!==I&&(k===Su?n.cullFace(n.BACK):k===og?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),I=k}function F(k){k!==N&&(V&&n.lineWidth(k),N=k)}function Ie(k,xe,he){k?(te(n.POLYGON_OFFSET_FILL),(O!==xe||X!==he)&&(n.polygonOffset(xe,he),O=xe,X=he)):fe(n.POLYGON_OFFSET_FILL)}function Ce(k){k?te(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function ke(k){k===void 0&&(k=n.TEXTURE0+z-1),ae!==k&&(n.activeTexture(k),ae=k)}function re(k,xe,he){he===void 0&&(ae===null?he=n.TEXTURE0+z-1:he=ae);let Re=ie[he];Re===void 0&&(Re={type:void 0,texture:void 0},ie[he]=Re),(Re.type!==k||Re.texture!==xe)&&(ae!==he&&(n.activeTexture(he),ae=he),n.bindTexture(k,xe||K[k]),Re.type=k,Re.texture=xe)}function D(){const k=ie[ae];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function $(){try{n.texSubImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function j(){try{n.texSubImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function ne(){try{n.texStorage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function ye(){try{n.texStorage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function He(){try{n.texImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function ce(){try{n.texImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function me(k){_e.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function Pe(k){Oe.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function De(k,xe){let he=c.get(xe);he===void 0&&(he=new WeakMap,c.set(xe,he));let Re=he.get(k);Re===void 0&&(Re=n.getUniformBlockIndex(xe,k.name),he.set(k,Re))}function pe(k,xe){const Re=c.get(xe).get(k);l.get(xe)!==Re&&(n.uniformBlockBinding(xe,Re,k.__bindingPointIndex),l.set(xe,Re))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,ie={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,b=null,M=null,E=null,R=null,C=new it(0,0,0),L=0,S=!1,T=null,I=null,N=null,O=null,X=null,_e.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:te,disable:fe,bindFramebuffer:Be,drawBuffers:ve,useProgram:Ge,setBlending:Ye,setMaterial:et,setFlipSided:ze,setCullFace:rt,setLineWidth:F,setPolygonOffset:Ie,setScissorTest:Ce,activeTexture:ke,bindTexture:re,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:He,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:pe,texStorage2D:ne,texStorage3D:ye,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:le,scissor:me,viewport:Pe,reset:tt}}function oS(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,y){return p?new OffscreenCanvas(D,y):Eo("canvas")}function x(D,y,U){let $=1;const j=re(D);if((j.width>U||j.height>U)&&($=U/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor($*j.width),le=Math.floor($*j.height);h===void 0&&(h=g(q,le));const ne=y?g(q,le):h;return ne.width=q,ne.height=le,ne.getContext("2d").drawImage(D,0,0,q,le),st("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+le+")."),ne}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function m(D){return D.generateMipmaps}function f(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,y,U,$,j=!1){if(D!==null){if(n[D]!==void 0)return n[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=y;if(y===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),y===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),y===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),y===n.RGBA){const le=j?So:_t.getTransfer($);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=le===Tt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(D,y){let U;return D?y===null||y===yi||y===es?U=n.DEPTH24_STENCIL8:y===fi?U=n.DEPTH32F_STENCIL8:y===Qa&&(U=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===es?U=n.DEPTH_COMPONENT24:y===fi?U=n.DEPTH_COMPONENT32F:y===Qa&&(U=n.DEPTH_COMPONENT16),U}function E(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==rn&&D.minFilter!==hn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function R(D){const y=D.target;y.removeEventListener("dispose",R),L(y),y.isVideoTexture&&d.delete(y)}function C(D){const y=D.target;y.removeEventListener("dispose",C),T(y)}function L(D){const y=i.get(D);if(y.__webglInit===void 0)return;const U=D.source,$=u.get(U);if($){const j=$[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(D),Object.keys($).length===0&&u.delete(U)}i.remove(D)}function S(D){const y=i.get(D);n.deleteTexture(y.__webglTexture);const U=D.source,$=u.get(U);delete $[y.__cacheKey],s.memory.textures--}function T(D){const y=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let j=0;j<y.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[$][j]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=D.textures;for(let $=0,j=U.length;$<j;$++){const q=i.get(U[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(U[$])}i.remove(D)}let I=0;function N(){I=0}function O(){const D=I;return D>=r.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),I+=1,D}function X(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function z(D,y){const U=i.get(D);if(D.isVideoTexture&&Ce(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&U.__version!==D.version){const $=D.image;if($===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,D,y);return}}else D.isExternalTexture&&(U.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function V(D,y){const U=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&U.__version!==D.version){K(U,D,y);return}else D.isExternalTexture&&(U.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function H(D,y){const U=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&U.__version!==D.version){K(U,D,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function Q(D,y){const U=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&U.__version!==D.version){te(U,D,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}const ae={[xc]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},ie={[rn]:n.NEAREST,[Cg]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},oe={[Lg]:n.NEVER,[Og]:n.ALWAYS,[Dg]:n.LESS,[Rd]:n.LEQUAL,[Ng]:n.EQUAL,[Cd]:n.GEQUAL,[Ug]:n.GREATER,[Fg]:n.NOTEQUAL};function we(D,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===hn||y.magFilter===fl||y.magFilter===Ps||y.magFilter===wr||y.minFilter===hn||y.minFilter===fl||y.minFilter===Ps||y.minFilter===wr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ae[y.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ie[y.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Ps&&y.minFilter!==wr||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _e(D,y){let U=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",R));const $=y.source;let j=u.get($);j===void 0&&(j={},u.set($,j));const q=X(y);if(q!==D.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,U=!0),j[q].usedTimes++;const le=j[D.__cacheKey];le!==void 0&&(j[D.__cacheKey].usedTimes--,le.usedTimes===0&&S(y)),D.__cacheKey=q,D.__webglTexture=j[q].texture}return U}function Oe(D,y,U){return Math.floor(Math.floor(D/U)/y)}function je(D,y,U,$){const q=D.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,U,$,y.data);else{q.sort((ce,me)=>ce.start-me.start);let le=0;for(let ce=1;ce<q.length;ce++){const me=q[le],Pe=q[ce],De=me.start+me.count,pe=Oe(Pe.start,y.width,4),tt=Oe(me.start,y.width,4);Pe.start<=De+1&&pe===tt&&Oe(Pe.start+Pe.count-1,y.width,4)===pe?me.count=Math.max(me.count,Pe.start+Pe.count-me.start):(++le,q[le]=Pe)}q.length=le+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),He=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ce=0,me=q.length;ce<me;ce++){const Pe=q[ce],De=Math.floor(Pe.start/4),pe=Math.ceil(Pe.count/4),tt=De%y.width,k=Math.floor(De/y.width),xe=pe,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,tt,k,xe,he,U,$,y.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,He)}}function K(D,y,U){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);const j=_e(D,y),q=y.source;t.bindTexture($,D.__webglTexture,n.TEXTURE0+U);const le=i.get(q);if(q.version!==le.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const ne=_t.getPrimaries(_t.workingColorSpace),ye=y.colorSpace===Ki?null:_t.getPrimaries(y.colorSpace),He=y.colorSpace===Ki||ne===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ce=x(y.image,!1,r.maxTextureSize);ce=ke(y,ce);const me=a.convert(y.format,y.colorSpace),Pe=a.convert(y.type);let De=b(y.internalFormat,me,Pe,y.colorSpace,y.isVideoTexture);we($,y);let pe;const tt=y.mipmaps,k=y.isVideoTexture!==!0,xe=le.__version===void 0||j===!0,he=q.dataReady,Re=E(y,ce);if(y.isDepthTexture)De=M(y.format===Tr,y.type),xe&&(k?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,me,Pe,null));else if(y.isDataTexture)if(tt.length>0){k&&xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,tt[0].width,tt[0].height);for(let ue=0,ee=tt.length;ue<ee;ue++)pe=tt[ue],k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,ue,De,pe.width,pe.height,0,me,Pe,pe.data);y.generateMipmaps=!1}else k?(xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,ce.width,ce.height),he&&je(y,ce,me,Pe)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,me,Pe,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,tt[0].width,tt[0].height,ce.depth);for(let ue=0,ee=tt.length;ue<ee;ue++)if(pe=tt[ue],y.format!==ti)if(me!==null)if(k){if(he)if(y.layerUpdates.size>0){const de=Zu(pe.width,pe.height,y.format,y.type);for(const Fe of y.layerUpdates){const at=pe.data.subarray(Fe*de/pe.data.BYTES_PER_ELEMENT,(Fe+1)*de/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Fe,pe.width,pe.height,1,me,at)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,ce.depth,me,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,De,pe.width,pe.height,ce.depth,0,pe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,ce.depth,me,Pe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,De,pe.width,pe.height,ce.depth,0,me,Pe,pe.data)}else{k&&xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,tt[0].width,tt[0].height);for(let ue=0,ee=tt.length;ue<ee;ue++)pe=tt[ue],y.format!==ti?me!==null?k?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,De,pe.width,pe.height,0,pe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,me,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,ue,De,pe.width,pe.height,0,me,Pe,pe.data)}else if(y.isDataArrayTexture)if(k){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,ce.width,ce.height,ce.depth),he)if(y.layerUpdates.size>0){const ue=Zu(ce.width,ce.height,y.format,y.type);for(const ee of y.layerUpdates){const de=ce.data.subarray(ee*ue/ce.data.BYTES_PER_ELEMENT,(ee+1)*ue/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,me,Pe,de)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,me,Pe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,me,Pe,ce.data);else if(y.isData3DTexture)k?(xe&&t.texStorage3D(n.TEXTURE_3D,Re,De,ce.width,ce.height,ce.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,me,Pe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,me,Pe,ce.data);else if(y.isFramebufferTexture){if(xe)if(k)t.texStorage2D(n.TEXTURE_2D,Re,De,ce.width,ce.height);else{let ue=ce.width,ee=ce.height;for(let de=0;de<Re;de++)t.texImage2D(n.TEXTURE_2D,de,De,ue,ee,0,me,Pe,null),ue>>=1,ee>>=1}}else if(tt.length>0){if(k&&xe){const ue=re(tt[0]);t.texStorage2D(n.TEXTURE_2D,Re,De,ue.width,ue.height)}for(let ue=0,ee=tt.length;ue<ee;ue++)pe=tt[ue],k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,me,Pe,pe):t.texImage2D(n.TEXTURE_2D,ue,De,me,Pe,pe);y.generateMipmaps=!1}else if(k){if(xe){const ue=re(ce);t.texStorage2D(n.TEXTURE_2D,Re,De,ue.width,ue.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Pe,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,me,Pe,ce);m(y)&&f($),le.__version=q.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function te(D,y,U){if(y.image.length!==6)return;const $=_e(D,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+U);const q=i.get(j);if(j.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const le=_t.getPrimaries(_t.workingColorSpace),ne=y.colorSpace===Ki?null:_t.getPrimaries(y.colorSpace),ye=y.colorSpace===Ki||le===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const He=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!He&&!ce?me[ee]=x(y.image[ee],!0,r.maxCubemapSize):me[ee]=ce?y.image[ee].image:y.image[ee],me[ee]=ke(y,me[ee]);const Pe=me[0],De=a.convert(y.format,y.colorSpace),pe=a.convert(y.type),tt=b(y.internalFormat,De,pe,y.colorSpace),k=y.isVideoTexture!==!0,xe=q.__version===void 0||$===!0,he=j.dataReady;let Re=E(y,Pe);we(n.TEXTURE_CUBE_MAP,y);let ue;if(He){k&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,tt,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){ue=me[ee].mipmaps;for(let de=0;de<ue.length;de++){const Fe=ue[de];y.format!==ti?De!==null?k?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Fe.width,Fe.height,De,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,tt,Fe.width,Fe.height,0,Fe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Fe.width,Fe.height,De,pe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,tt,Fe.width,Fe.height,0,De,pe,Fe.data)}}}else{if(ue=y.mipmaps,k&&xe){ue.length>0&&Re++;const ee=re(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,tt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,De,pe,me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,me[ee].width,me[ee].height,0,De,pe,me[ee].data);for(let de=0;de<ue.length;de++){const at=ue[de].image[ee].image;k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,at.width,at.height,De,pe,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,tt,at.width,at.height,0,De,pe,at.data)}}else{k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,pe,me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,De,pe,me[ee]);for(let de=0;de<ue.length;de++){const Fe=ue[de];k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,De,pe,Fe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,tt,De,pe,Fe.image[ee])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),q.__version=j.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function fe(D,y,U,$,j,q){const le=a.convert(U.format,U.colorSpace),ne=a.convert(U.type),ye=b(U.internalFormat,le,ne,U.colorSpace),He=i.get(y),ce=i.get(U);if(ce.__renderTarget=y,!He.__hasExternalTextures){const me=Math.max(1,y.width>>q),Pe=Math.max(1,y.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ye,me,Pe,y.depth,0,le,ne,null):t.texImage2D(j,q,ye,me,Pe,0,le,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ie(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,ce.__webglTexture,0,F(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,ce.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(D,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,D),y.depthBuffer){const $=y.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=M(y.stencilBuffer,j),le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(y),q,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(y),q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,D)}else{const $=y.textures;for(let j=0;j<$.length;j++){const q=$[j],le=a.convert(q.format,q.colorSpace),ne=a.convert(q.type),ye=b(q.internalFormat,le,ne,q.colorSpace);Ie(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(y),ye,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(y),ye,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ye,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(D,y,U){const $=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),we(n.TEXTURE_CUBE_MAP,y.depthTexture);const He=a.convert(y.depthTexture.format),ce=a.convert(y.depthTexture.type);let me;y.depthTexture.format===Ui?me=n.DEPTH_COMPONENT24:y.depthTexture.format===Tr&&(me=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,me,y.width,y.height,0,He,ce,null)}}else z(y.depthTexture,0);const q=j.__webglTexture,le=F(y),ne=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,ye=y.depthTexture.format===Tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)Ie(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,ne,q,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ye,ne,q,0);else if(y.depthTexture.format===Tr)Ie(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,ne,q,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ye,ne,q,0);else throw new Error("Unknown depthTexture format")}function Ge(D){const y=i.get(D),U=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=$}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)ve(y.__webglFramebuffer[$],D,$);else{const $=D.texture.mipmaps;$&&$.length>0?ve(y.__webglFramebuffer[0],D,0):ve(y.__webglFramebuffer,D,0)}else if(U){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),Be(y.__webglDepthbuffer[$],D,!1);else{const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{const $=D.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Be(y.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(D,y,U){const $=i.get(D);y!==void 0&&fe($.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ge(D)}function We(D){const y=D.texture,U=i.get(D),$=i.get(y);D.addEventListener("dispose",C);const j=D.textures,q=D.isWebGLCubeRenderTarget===!0,le=j.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,s.memory.textures++),q){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let ye=0;ye<y.mipmaps.length;ye++)U.__webglFramebuffer[ne][ye]=n.createFramebuffer()}else U.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)U.__webglFramebuffer[ne]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(le)for(let ne=0,ye=j.length;ne<ye;ne++){const He=i.get(j[ne]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Ie(D)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const ye=j[ne];U.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const He=a.convert(ye.format,ye.colorSpace),ce=a.convert(ye.type),me=b(ye.internalFormat,He,ce,ye.colorSpace,D.isXRRenderTarget===!0),Pe=F(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,me,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),we(n.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)fe(U.__webglFramebuffer[ne][ye],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else fe(U.__webglFramebuffer[ne],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ne=0,ye=j.length;ne<ye;ne++){const He=j[ne],ce=i.get(He);let me=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ce.__webglTexture),we(me,He),fe(U.__webglFramebuffer,D,He,n.COLOR_ATTACHMENT0+ne,me,0),m(He)&&f(me)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ne=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),we(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)fe(U.__webglFramebuffer[ye],D,y,n.COLOR_ATTACHMENT0,ne,ye);else fe(U.__webglFramebuffer,D,y,n.COLOR_ATTACHMENT0,ne,0);m(y)&&f(ne),t.unbindTexture()}D.depthBuffer&&Ge(D)}function Ye(D){const y=D.textures;for(let U=0,$=y.length;U<$;U++){const j=y[U];if(m(j)){const q=_(D),le=i.get(j).__webglTexture;t.bindTexture(q,le),f(q),t.unbindTexture()}}}const et=[],ze=[];function rt(D){if(D.samples>0){if(Ie(D)===!1){const y=D.textures,U=D.width,$=D.height;let j=n.COLOR_BUFFER_BIT;const q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(D),ne=y.length>1;if(ne)for(let He=0;He<y.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ye=D.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let He=0;He<y.length;He++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[He]);const ce=i.get(y[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,j,n.NEAREST),l===!0&&(et.length=0,ze.length=0,et.push(n.COLOR_ATTACHMENT0+He),D.depthBuffer&&D.resolveDepthBuffer===!1&&(et.push(q),ze.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let He=0;He<y.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,le.__webglColorRenderbuffer[He]);const ce=i.get(y[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function F(D){return Math.min(r.maxSamples,D.samples)}function Ie(D){const y=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ce(D){const y=s.render.frame;d.get(D)!==y&&(d.set(D,y),D.update())}function ke(D,y){const U=D.colorSpace,$=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||U!==ca&&U!==Ki&&(_t.getTransfer(U)===Tt?($!==ti||j!==Un)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",U)),y}function re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=dt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lS(n,e){function t(i,r=Ki){let a;const s=_t.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Sd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Md)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$f)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===yd)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Kf)return n.RGB;if(i===ti)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===Zf)return n.RED;if(i===Ed)return n.RED_INTEGER;if(i===la)return n.RG;if(i===wd)return n.RG_INTEGER;if(i===Td)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===ro)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===to)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===to)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===yc||i===Sc||i===Mc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ec||i===wc)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Tc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ac)return a.COMPRESSED_R11_EAC;if(i===Rc)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Cc)return a.COMPRESSED_RG11_EAC;if(i===Pc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ic)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===Xc||i===qc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===$c)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===jc||i===Kc||i===Zc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Yc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const cS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dS=`
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

}`;class uS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sn({vertexShader:cS,fragmentShader:dS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hS extends ya{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new uS,f={},_=t.getContextAttributes();let b=null,M=null;const E=[],R=[],C=new Ze;let L=null;const S=new xn;S.viewport=new Wt;const T=new xn;T.viewport=new Wt;const I=[S,T],N=new yx;let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=E[K];return te===void 0&&(te=new Fl,E[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=E[K];return te===void 0&&(te=new Fl,E[K]=te),te.getGripSpace()},this.getHand=function(K){let te=E[K];return te===void 0&&(te=new Fl,E[K]=te),te.getHandSpace()};function z(K){const te=R.indexOf(K.inputSource);if(te===-1)return;const fe=E[te];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||s),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let K=0;K<E.length;K++){const te=R[K];te!==null&&(R[K]=null,E[K].disconnect(te))}O=null,X=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(b),p=null,u=null,h=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Be=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Tr:Ui,Be=_.stencil?es:yi);const Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Rn(u.textureWidth,u.textureHeight,{format:ti,type:Un,depthTexture:new ns(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Rn(p.framebufferWidth,p.framebufferHeight,{format:ti,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let te=0;te<K.removed.length;te++){const fe=K.removed[te],Be=R.indexOf(fe);Be>=0&&(R[Be]=null,E[Be].disconnect(fe))}for(let te=0;te<K.added.length;te++){const fe=K.added[te];let Be=R.indexOf(fe);if(Be===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=R.length){R.push(fe),Be=Ge;break}else if(R[Ge]===null){R[Ge]=fe,Be=Ge;break}if(Be===-1)break}const ve=E[Be];ve&&ve.connect(fe)}}const Q=new W,ae=new W;function ie(K,te,fe){Q.setFromMatrixPosition(te.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);const Be=Q.distanceTo(ae),ve=te.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,dt=ve[14]/(ve[10]-1),We=ve[14]/(ve[10]+1),Ye=(ve[9]+1)/ve[5],et=(ve[9]-1)/ve[5],ze=(ve[8]-1)/ve[0],rt=(Ge[8]+1)/Ge[0],F=dt*ze,Ie=dt*rt,Ce=Be/(-ze+rt),ke=Ce*-ze;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ke),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const re=dt+Ce,D=We+Ce,y=F-ke,U=Ie+(Be-ke),$=Ye*We/D*re,j=et*We/D*re;K.projectionMatrix.makePerspective(y,U,$,j,re,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=T.near=S.near=te,N.far=T.far=S.far=fe,(O!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,X=N.far),N.layers.mask=K.layers.mask|6,S.layers.mask=N.layers.mask&3,T.layers.mask=N.layers.mask&5;const Be=K.parent,ve=N.cameras;oe(N,Be);for(let Ge=0;Ge<ve.length;Ge++)oe(ve[Ge],Be);ve.length===2?ie(N,S,T):N.projectionMatrix.copy(S.projectionMatrix),we(K,N,Be)};function we(K,te,fe){fe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return f[K]};let _e=null;function Oe(K,te){if(d=te.getViewerPose(c||s),g=te,d!==null){const fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Be=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let We=0;We<fe.length;We++){const Ye=fe[We];let et=null;if(p!==null)et=p.getViewport(Ye);else{const rt=h.getViewSubImage(u,Ye);et=rt.viewport,We===0&&(e.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(M))}let ze=I[We];ze===void 0&&(ze=new xn,ze.layers.enable(We),ze.viewport=new Wt,I[We]=ze),ze.matrix.fromArray(Ye.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ye.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),We===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(ze)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const We=h.getDepthInformation(fe[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<fe.length;We++){const Ye=fe[We].camera;if(Ye){let et=f[Ye];et||(et=new lp,f[Ye]=et);const ze=h.getCameraImage(Ye);et.sourceTexture=ze}}}}for(let fe=0;fe<E.length;fe++){const Be=R[fe],ve=E[fe];Be!==null&&ve!==void 0&&ve.update(Be,te,c||s)}_e&&_e(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const je=new up;je.setAnimationLoop(Oe),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}}const br=new ri,fS=new Vt;function pS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===An&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===An&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),b=_.envMap,M=_.envMapRotation;b&&(m.envMap.value=b,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(fS.makeRotationFromEuler(br)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mS(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const M=b.program;i.uniformBlockBinding(_,M)}function c(_,b){let M=r[_.id];M===void 0&&(g(_),M=d(_),r[_.id]=M,_.addEventListener("dispose",m));const E=b.program;i.updateUBOMapping(_,E);const R=e.render.frame;a[_.id]!==R&&(u(_),a[_.id]=R)}function d(_){const b=h();_.__bindingPointIndex=b;const M=n.createBuffer(),E=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=r[_.id],M=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=M.length;R<C;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,T=L.length;S<T;S++){const I=L[S];if(p(I,R,S,E)===!0){const N=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let z=0;z<O.length;z++){const V=O[z],H=x(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+X,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,b,M,E){const R=_.value,C=b+"_"+M;if(E[C]===void 0)return typeof R=="number"||typeof R=="boolean"?E[C]=R:E[C]=R.clone(),!0;{const L=E[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return E[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(_){const b=_.uniforms;let M=0;const E=16;for(let C=0,L=b.length;C<L;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let T=0,I=S.length;T<I;T++){const N=S[T],O=Array.isArray(N.value)?N.value:[N.value];for(let X=0,z=O.length;X<z;X++){const V=O[X],H=x(V),Q=M%E,ae=Q%H.boundary,ie=Q+ae;M+=ae,ie!==0&&E-ie<H.storage&&(M+=E-ie),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}const R=M%E;return R>0&&(M+=E-R),_.__size=M,_.__cache={},this}function x(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){const b=_.target;b.removeEventListener("dispose",m);const M=s.indexOf(b.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}const vS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function gS(){return ci===null&&(ci=new cx(vS,16,16,la,On),ci.name="DFG_LUT",ci.minFilter=hn,ci.magFilter=hn,ci.wrapS=Pi,ci.wrapT=Pi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Hd{constructor(e={}){const{canvas:t=Bg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const x=p,m=new Set([Td,wd,Ed]),f=new Set([Un,yi,Qa,es,Sd,Md]),_=new Uint32Array(4),b=new Int32Array(4);let M=null,E=null;const R=[],C=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Gn;let I=0,N=0,O=null,X=-1,z=null;const V=new Wt,H=new Wt;let Q=null;const ae=new it(0);let ie=0,oe=t.width,we=t.height,_e=1,Oe=null,je=null;const K=new Wt(0,0,oe,we),te=new Wt(0,0,oe,we);let fe=!1;const Be=new Nd;let ve=!1,Ge=!1;const dt=new Vt,We=new W,Ye=new Wt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function rt(){return O===null?_e:1}let F=i;function Ie(P,G){return t.getContext(P,G)}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",ot,!1),F===null){const G="webgl2";if(F=Ie(G,P),F===null)throw Ie(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw xt("WebGLRenderer: "+P.message),P}let Ce,ke,re,D,y,U,$,j,q,le,ne,ye,He,ce,me,Pe,De,pe,tt,k,xe,he,Re,ue;function ee(){Ce=new gy(F),Ce.init(),he=new lS(F,Ce),ke=new ly(F,Ce,e,he),re=new sS(F,Ce),ke.reversedDepthBuffer&&u&&re.buffers.depth.setReversed(!0),D=new by(F),y=new $1,U=new oS(F,Ce,re,y,ke,he,D),$=new dy(S),j=new vy(S),q=new Ex(F),Re=new sy(F,q),le=new xy(F,q,D,Re),ne=new Sy(F,le,q,D),tt=new yy(F,ke,U),Pe=new cy(y),ye=new W1(S,$,j,Ce,ke,Re,Pe),He=new pS(S,y),ce=new q1,me=new Q1(Ce),pe=new ay(S,$,j,re,ne,g,l),De=new rS(S,ne,ke),ue=new mS(F,D,ke,re),k=new oy(F,Ce,D),xe=new _y(F,Ce,D),D.programs=ye.programs,S.capabilities=ke,S.extensions=Ce,S.properties=y,S.renderLists=ce,S.shadowMap=De,S.state=re,S.info=D}ee(),x!==Un&&(L=new Ey(x,t.width,t.height,r,a));const de=new hS(S,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(P){P!==void 0&&(_e=P,this.setSize(oe,we,!1))},this.getSize=function(P){return P.set(oe,we)},this.setSize=function(P,G,J=!0){if(de.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=P,we=G,t.width=Math.floor(P*_e),t.height=Math.floor(G*_e),J===!0&&(t.style.width=P+"px",t.style.height=G+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(oe*_e,we*_e).floor()},this.setDrawingBufferSize=function(P,G,J){oe=P,we=G,_e=J,t.width=Math.floor(P*J),t.height=Math.floor(G*J),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(V)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,G,J,Z){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,G,J,Z),re.viewport(V.copy(K).multiplyScalar(_e).round())},this.getScissor=function(P){return P.copy(te)},this.setScissor=function(P,G,J,Z){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,G,J,Z),re.scissor(H.copy(te).multiplyScalar(_e).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(P){re.setScissorTest(fe=P)},this.setOpaqueSort=function(P){Oe=P},this.setTransparentSort=function(P){je=P},this.getClearColor=function(P){return P.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,J=!0){let Z=0;if(P){let Y=!1;if(O!==null){const Se=O.texture.format;Y=m.has(Se)}if(Y){const Se=O.texture.type,Le=f.has(Se),Te=pe.getClearColor(),Ue=pe.getClearAlpha(),Ve=Te.r,Je=Te.g,Xe=Te.b;Le?(_[0]=Ve,_[1]=Je,_[2]=Xe,_[3]=Ue,F.clearBufferuiv(F.COLOR,0,_)):(b[0]=Ve,b[1]=Je,b[2]=Xe,b[3]=Ue,F.clearBufferiv(F.COLOR,0,b))}else Z|=F.COLOR_BUFFER_BIT}G&&(Z|=F.DEPTH_BUFFER_BIT),J&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),pe.dispose(),ce.dispose(),me.dispose(),y.dispose(),$.dispose(),j.dispose(),ne.dispose(),Re.dispose(),ue.dispose(),ye.dispose(),de.dispose(),de.removeEventListener("sessionstart",zn),de.removeEventListener("sessionend",oi),Mn.stop()};function Fe(P){P.preventDefault(),Cu("WebGLRenderer: Context Lost."),T=!0}function at(){Cu("WebGLRenderer: Context Restored."),T=!1;const P=D.autoReset,G=De.enabled,J=De.autoUpdate,Z=De.needsUpdate,Y=De.type;ee(),D.autoReset=P,De.enabled=G,De.autoUpdate=J,De.needsUpdate=Z,De.type=Y}function ot(P){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ut(P){const G=P.target;G.removeEventListener("dispose",Ut),Yt(G)}function Yt(P){ai(P),y.remove(P)}function ai(P){const G=y.get(P).programs;G!==void 0&&(G.forEach(function(J){ye.releaseProgram(J)}),P.isShaderMaterial&&ye.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,J,Z,Y,Se){G===null&&(G=et);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=$o(P,G,J,Z,Y);re.setMaterial(Z,Le);let Ue=J.index,Ve=1;if(Z.wireframe===!0){if(Ue=le.getWireframeAttribute(J),Ue===void 0)return;Ve=2}const Je=J.drawRange,Xe=J.attributes.position;let lt=Je.start*Ve,Mt=(Je.start+Je.count)*Ve;Se!==null&&(lt=Math.max(lt,Se.start*Ve),Mt=Math.min(Mt,(Se.start+Se.count)*Ve)),Ue!==null?(lt=Math.max(lt,0),Mt=Math.min(Mt,Ue.count)):Xe!=null&&(lt=Math.max(lt,0),Mt=Math.min(Mt,Xe.count));const Ft=Mt-lt;if(Ft<0||Ft===1/0)return;Re.setup(Y,Z,Te,J,Ue);let Ot,wt=k;if(Ue!==null&&(Ot=q.get(Ue),wt=xe,wt.setIndex(Ot)),Y.isMesh)Z.wireframe===!0?(re.setLineWidth(Z.wireframeLinewidth*rt()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(Y.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),re.setLineWidth(qe*rt()),Y.isLineSegments?wt.setMode(F.LINES):Y.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else Y.isPoints?wt.setMode(F.POINTS):Y.isSprite&&wt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ts("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,yt=Y._multiDrawCounts,vt=Y._multiDrawCount,Qe=Ue?q.get(Ue).bytesPerElement:1,Ne=y.get(Z).currentProgram.getUniforms();for(let Et=0;Et<vt;Et++)Ne.setValue(F,"_gl_DrawID",Et),wt.render(qe[Et]/Qe,yt[Et])}else if(Y.isInstancedMesh)wt.renderInstances(lt,Ft,Y.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yt=Math.min(J.instanceCount,qe);wt.renderInstances(lt,Ft,yt)}else wt.render(lt,Ft)};function jn(P,G,J){P.transparent===!0&&P.side===Wn&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,Ir(P,G,J),P.side=rr,P.needsUpdate=!0,Ir(P,G,J),P.side=Wn):Ir(P,G,J)}this.compile=function(P,G,J=null){J===null&&(J=P),E=me.get(J),E.init(G),C.push(E),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),P!==J&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights();const Z=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const Te=Se[Le];jn(Te,J,Y),Z.add(Te)}else jn(Se,J,Y),Z.add(Se)}),E=C.pop(),Z},this.compileAsync=function(P,G,J=null){const Z=this.compile(P,G,J);return new Promise(Y=>{function Se(){if(Z.forEach(function(Le){y.get(Le).currentProgram.isReady()&&Z.delete(Le)}),Z.size===0){Y(P);return}setTimeout(Se,10)}Ce.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Kn=null;function si(P){Kn&&Kn(P)}function zn(){Mn.stop()}function oi(){Mn.start()}const Mn=new up;Mn.setAnimationLoop(si),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(P){Kn=P,de.setAnimationLoop(P),P===null?Mn.stop():Mn.start()},de.addEventListener("sessionstart",zn),de.addEventListener("sessionend",oi),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const J=de.enabled===!0&&de.isPresenting===!0,Z=L!==null&&(O===null||J)&&L.begin(S,O);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,G,O),E=me.get(P,C.length),E.init(G),C.push(E),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Be.setFromProjectionMatrix(dt,pi,G.reversedDepth),Ge=this.localClippingEnabled,ve=Pe.init(this.clippingPlanes,Ge),M=ce.get(P,R.length),M.init(),R.push(M),de.enabled===!0&&de.isPresenting===!0){const Le=S.xr.getDepthSensingMesh();Le!==null&&li(Le,G,-1/0,S.sortObjects)}li(P,G,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(Oe,je),ze=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ze&&pe.addToRenderList(M,P),this.info.render.frame++,ve===!0&&Pe.beginShadows();const Y=E.state.shadowsArray;if(De.render(Y,P,G),ve===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&L.hasRenderPass())===!1){const Le=M.opaque,Te=M.transmissive;if(E.setupLights(),G.isArrayCamera){const Ue=G.cameras;if(Te.length>0)for(let Ve=0,Je=Ue.length;Ve<Je;Ve++){const Xe=Ue[Ve];dr(Le,Te,P,Xe)}ze&&pe.render(P);for(let Ve=0,Je=Ue.length;Ve<Je;Ve++){const Xe=Ue[Ve];cr(M,P,Xe,Xe.viewport)}}else Te.length>0&&dr(Le,Te,P,G),ze&&pe.render(P),cr(M,P,G)}O!==null&&N===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),Z&&L.end(S),P.isScene===!0&&P.onAfterRender(S,P,G),Re.resetDefaultState(),X=-1,z=null,C.pop(),C.length>0?(E=C[C.length-1],ve===!0&&Pe.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function li(P,G,J,Z){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Be.intersectsSprite(P)){Z&&Ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const Le=ne.update(P),Te=P.material;Te.visible&&M.push(P,Le,Te,J,Ye.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Be.intersectsObject(P))){const Le=ne.update(P),Te=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ye.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(Te)){const Ue=Le.groups;for(let Ve=0,Je=Ue.length;Ve<Je;Ve++){const Xe=Ue[Ve],lt=Te[Xe.materialIndex];lt&&lt.visible&&M.push(P,Le,lt,J,Ye.z,Xe)}}else Te.visible&&M.push(P,Le,Te,J,Ye.z,null)}}const Se=P.children;for(let Le=0,Te=Se.length;Le<Te;Le++)li(Se[Le],G,J,Z)}function cr(P,G,J,Z){const{opaque:Y,transmissive:Se,transparent:Le}=P;E.setupLightsView(J),ve===!0&&Pe.setGlobalState(S.clippingPlanes,J),Z&&re.viewport(V.copy(Z)),Y.length>0&&Bi(Y,G,J),Se.length>0&&Bi(Se,G,J),Le.length>0&&Bi(Le,G,J),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function dr(P,G,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){const lt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new Rn(1,1,{generateMipmaps:!0,type:lt?On:Un,minFilter:wr,samples:ke.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Se=E.state.transmissionRenderTarget[Z.id],Le=Z.viewport||V;Se.setSize(Le.z*S.transmissionResolutionScale,Le.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),Ue=S.getActiveCubeFace(),Ve=S.getActiveMipmapLevel();S.setRenderTarget(Se),S.getClearColor(ae),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),ze&&pe.render(J);const Je=S.toneMapping;S.toneMapping=vi;const Xe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),ve===!0&&Pe.setGlobalState(S.clippingPlanes,Z),Bi(P,J,Z),U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Mt=0,Ft=G.length;Mt<Ft;Mt++){const Ot=G[Mt],{object:wt,geometry:qe,material:yt,group:vt}=Ot;if(yt.side===Wn&&wt.layers.test(Z.layers)){const Qe=yt.side;yt.side=An,yt.needsUpdate=!0,vs(wt,J,Z,qe,yt,vt),yt.side=Qe,yt.needsUpdate=!0,lt=!0}}lt===!0&&(U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se))}S.setRenderTarget(Te,Ue,Ve),S.setClearColor(ae,ie),Xe!==void 0&&(Z.viewport=Xe),S.toneMapping=Je}function Bi(P,G,J){const Z=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Se=P.length;Y<Se;Y++){const Le=P[Y],{object:Te,geometry:Ue,group:Ve}=Le;let Je=Le.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Te.layers.test(J.layers)&&vs(Te,G,J,Ue,Je,Ve)}}function vs(P,G,J,Z,Y,Se){P.onBeforeRender(S,G,J,Z,Y,Se),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(S,G,J,Z,P,Se),Y.transparent===!0&&Y.side===Wn&&Y.forceSinglePass===!1?(Y.side=An,Y.needsUpdate=!0,S.renderBufferDirect(J,G,Z,Y,P,Se),Y.side=rr,Y.needsUpdate=!0,S.renderBufferDirect(J,G,Z,Y,P,Se),Y.side=Wn):S.renderBufferDirect(J,G,Z,Y,P,Se),P.onAfterRender(S,G,J,Z,Y,Se)}function Ir(P,G,J){G.isScene!==!0&&(G=et);const Z=y.get(P),Y=E.state.lights,Se=E.state.shadowsArray,Le=Y.state.version,Te=ye.getParameters(P,Y.state,Se,G,J),Ue=ye.getProgramCacheKey(Te);let Ve=Z.programs;Z.environment=P.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(P.isMeshStandardMaterial?j:$).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",Ut),Ve=new Map,Z.programs=Ve);let Je=Ve.get(Ue);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Le)return wa(P,Te),Je}else Te.uniforms=ye.getUniforms(P),P.onBeforeCompile(Te,S),Je=ye.acquireProgram(Te,Ue),Ve.set(Ue,Je),Z.uniforms=Te.uniforms;const Xe=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=Pe.uniform),wa(P,Te),Z.needsLights=qo(P),Z.lightsStateVersion=Le,Z.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function gs(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=ao.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function wa(P,G){const J=y.get(P);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function $o(P,G,J,Z,Y){G.isScene!==!0&&(G=et),U.resetTextureUnits();const Se=G.fog,Le=Z.isMeshStandardMaterial?G.environment:null,Te=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ca,Ue=(Z.isMeshStandardMaterial?j:$).get(Z.envMap||Le),Ve=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let Ft=vi;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=S.toneMapping);const Ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,qe=y.get(Z),yt=E.state.lights;if(ve===!0&&(Ge===!0||P!==z)){const It=P===z&&Z.id===X;Pe.setState(Z,P,It)}let vt=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==yt.state.version||qe.outputColorSpace!==Te||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Ue||Z.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Pe.numPlanes||qe.numIntersection!==Pe.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Je||qe.morphTargets!==Xe||qe.morphNormals!==lt||qe.morphColors!==Mt||qe.toneMapping!==Ft||qe.morphTargetsCount!==wt)&&(vt=!0):(vt=!0,qe.__version=Z.version);let Qe=qe.currentProgram;vt===!0&&(Qe=Ir(Z,G,Y));let Ne=!1,Et=!1,Gt=!1;const ft=Qe.getUniforms(),Pt=qe.uniforms;if(re.useProgram(Qe.program)&&(Ne=!0,Et=!0,Gt=!0),Z.id!==X&&(X=Z.id,Et=!0),Ne||z!==P){re.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",P.projectionMatrix),ft.setValue(F,"viewMatrix",P.matrixWorldInverse);const Lt=ft.map.cameraPosition;Lt!==void 0&&Lt.setValue(F,We.setFromMatrixPosition(P.matrixWorld)),ke.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ft.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),z!==P&&(z=P,Et=!0,Gt=!0)}if(qe.needsLights&&(yt.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",yt.state.directionalShadowMap,U),yt.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",yt.state.spotShadowMap,U),yt.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",yt.state.pointShadowMap,U)),Y.isSkinnedMesh){ft.setOptional(F,Y,"bindMatrix"),ft.setOptional(F,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ft.setValue(F,"boneTexture",It.boneTexture,U))}Y.isBatchedMesh&&(ft.setOptional(F,Y,"batchingTexture"),ft.setValue(F,"batchingTexture",Y._matricesTexture,U),ft.setOptional(F,Y,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",Y._indirectTexture,U),ft.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",Y._colorsTexture,U));const Bt=J.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&tt.update(Y,J,Qe),(Et||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,ft.setValue(F,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Pt.envMap.value=Ue,Pt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(Pt.envMapIntensity.value=G.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=gS()),Et&&(ft.setValue(F,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&Xo(Pt,Gt),Se&&Z.fog===!0&&He.refreshFogUniforms(Pt,Se),He.refreshMaterialUniforms(Pt,Z,_e,we,E.state.transmissionRenderTarget[P.id]),ao.upload(F,gs(qe),Pt,U)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ao.upload(F,gs(qe),Pt,U),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ft.setValue(F,"center",Y.center),ft.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(F,"normalMatrix",Y.normalMatrix),ft.setValue(F,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const It=Z.uniformsGroups;for(let Lt=0,En=It.length;Lt<En;Lt++){const nn=It[Lt];ue.update(nn,Qe),ue.bind(nn,Qe)}}return Qe}function Xo(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function qo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,G,J){const Z=y.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),y.get(P.texture).__webglTexture=G,y.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){const J=y.get(P);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const xs=F.createFramebuffer();this.setRenderTarget=function(P,G=0,J=0){O=P,I=G,N=J;let Z=null,Y=!1,Se=!1;if(P){const Te=y.get(P);if(Te.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(F.FRAMEBUFFER,Te.__webglFramebuffer),V.copy(P.viewport),H.copy(P.scissor),Q=P.scissorTest,re.viewport(V),re.scissor(H),re.setScissorTest(Q),X=-1;return}else if(Te.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Te.__hasExternalTextures)U.rebindTextures(P,y.get(P.texture).__webglTexture,y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Je=P.depthTexture;if(Te.__boundDepthTexture!==Je){if(Je!==null&&y.has(Je)&&(P.width!==Je.image.width||P.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const Ue=P.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const Ve=y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?Z=Ve[G][J]:Z=Ve[G],Y=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Z=y.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[J]:Z=Ve,V.copy(P.viewport),H.copy(P.scissor),Q=P.scissorTest}else V.copy(K).multiplyScalar(_e).floor(),H.copy(te).multiplyScalar(_e).floor(),Q=fe;if(J!==0&&(Z=xs),re.bindFramebuffer(F.FRAMEBUFFER,Z)&&re.drawBuffers(P,Z),re.viewport(V),re.scissor(H),re.setScissorTest(Q),Y){const Te=y.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Te.__webglTexture,J)}else if(Se){const Te=G;for(let Ue=0;Ue<P.textures.length;Ue++){const Ve=y.get(P.textures[Ue]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ue,Ve.__webglTexture,J,Te)}}else if(P!==null&&J!==0){const Te=y.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Te.__webglTexture,J)}X=-1},this.readRenderTargetPixels=function(P,G,J,Z,Y,Se,Le,Te=0){if(!(P&&P.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){re.bindFramebuffer(F.FRAMEBUFFER,Ue);try{const Ve=P.textures[Te],Je=Ve.format,Xe=Ve.type;if(!ke.textureFormatReadable(Je)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Xe)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Z&&J>=0&&J<=P.height-Y&&(P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),F.readPixels(G,J,Z,Y,he.convert(Je),he.convert(Xe),Se))}finally{const Ve=O!==null?y.get(O).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,G,J,Z,Y,Se,Le,Te=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(G>=0&&G<=P.width-Z&&J>=0&&J<=P.height-Y){re.bindFramebuffer(F.FRAMEBUFFER,Ue);const Ve=P.textures[Te],Je=Ve.format,Xe=Ve.type;if(!ke.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),F.readPixels(G,J,Z,Y,he.convert(Je),he.convert(Xe),0);const Mt=O!==null?y.get(O).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,Mt);const Ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kg(F,Ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(lt),F.deleteSync(Ft),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,J=0){const Z=Math.pow(2,-J),Y=Math.floor(P.image.width*Z),Se=Math.floor(P.image.height*Z),Le=G!==null?G.x:0,Te=G!==null?G.y:0;U.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Le,Te,Y,Se),re.unbindTexture()};const _s=F.createFramebuffer(),Yo=F.createFramebuffer();this.copyTextureToTexture=function(P,G,J=null,Z=null,Y=0,Se=null){Se===null&&(Y!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Le,Te,Ue,Ve,Je,Xe,lt,Mt,Ft;const Ot=P.isCompressedTexture?P.mipmaps[Se]:P.image;if(J!==null)Le=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,Je=J.min.y,Xe=J.isBox3?J.min.z:0;else{const Bt=Math.pow(2,-Y);Le=Math.floor(Ot.width*Bt),Te=Math.floor(Ot.height*Bt),P.isDataArrayTexture?Ue=Ot.depth:P.isData3DTexture?Ue=Math.floor(Ot.depth*Bt):Ue=1,Ve=0,Je=0,Xe=0}Z!==null?(lt=Z.x,Mt=Z.y,Ft=Z.z):(lt=0,Mt=0,Ft=0);const wt=he.convert(G.format),qe=he.convert(G.type);let yt;G.isData3DTexture?(U.setTexture3D(G,0),yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),yt=F.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ne=F.getParameter(F.UNPACK_SKIP_PIXELS),Et=F.getParameter(F.UNPACK_SKIP_ROWS),Gt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const ft=P.isDataArrayTexture||P.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Bt=y.get(P),It=y.get(G),Lt=y.get(Bt.__renderTarget),En=y.get(It.__renderTarget);re.bindFramebuffer(F.READ_FRAMEBUFFER,Lt.__webglFramebuffer),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let nn=0;nn<Ue;nn++)ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,y.get(P).__webglTexture,Y,Xe+nn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,y.get(G).__webglTexture,Se,Ft+nn)),F.blitFramebuffer(Ve,Je,Le,Te,lt,Mt,Le,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||y.has(P)){const Bt=y.get(P),It=y.get(G);re.bindFramebuffer(F.READ_FRAMEBUFFER,_s),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yo);for(let Lt=0;Lt<Ue;Lt++)ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,Y,Xe+Lt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,Y),Pt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,Se,Ft+Lt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,Se),Y!==0?F.blitFramebuffer(Ve,Je,Le,Te,lt,Mt,Le,Te,F.COLOR_BUFFER_BIT,F.NEAREST):Pt?F.copyTexSubImage3D(yt,Se,lt,Mt,Ft+Lt,Ve,Je,Le,Te):F.copyTexSubImage2D(yt,Se,lt,Mt,Ve,Je,Le,Te);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pt?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(yt,Se,lt,Mt,Ft,Le,Te,Ue,wt,qe,Ot.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(yt,Se,lt,Mt,Ft,Le,Te,Ue,wt,Ot.data):F.texSubImage3D(yt,Se,lt,Mt,Ft,Le,Te,Ue,wt,qe,Ot):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,lt,Mt,Le,Te,wt,qe,Ot.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,lt,Mt,Ot.width,Ot.height,wt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Se,lt,Mt,Le,Te,wt,qe,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt),Se===0&&G.generateMipmaps&&F.generateMipmap(yt),re.unbindTexture()},this.initRenderTarget=function(P){y.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),re.unbindTexture()},this.resetState=function(){I=0,N=0,O=null,re.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xS=new kd(-1,1,1,-1,0,1);class _S extends kn{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const bS=new _S;class vp{constructor(e){this._mesh=new an(bS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yS extends ms{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wo.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yh extends ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class SS extends ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ze);this._width=i.width,this._height=i.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yS(so),this.copyPass.material.blending=mi,this.clock=new zd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(s instanceof yh?i=!0:s instanceof SS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ES extends ms{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new it}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const wS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ha extends ms{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(a,s,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Rn(a,s,{type:On});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new Rn(a,s,{type:On});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),s=Math.round(s/2)}const o=wS;this.highPassUniforms=wo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ze(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wo.clone(so.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,premultipliedAlpha:!0,blending:sc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new da,this._fsQuad=new vp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new Ze(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ha.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ha.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ha.BlurDirectionX=new Ze(1,0);ha.BlurDirectionY=new Ze(0,1);var TS=be('<canvas class="fixed inset-0 w-full h-full pointer-events-none z-0" style="background-color: #000000;"></canvas>');function AS(n,e){Rt(e,!1);let t=Ke(),i,r,a,s,o,l;const c={void:new it("#000000"),purple:new it("#240046"),cyan:new it("#003F4C")};Yn(()=>{if(!w(t)||navigator.webdriver)return;let h=!1,u,p;const g=new Sx,x=new Ze,m=()=>{!a||!i||!o||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight))},f=_=>{if(!p||!a||!s)return;x.x=_.clientX/window.innerWidth*2-1,x.y=-(_.clientY/window.innerHeight)*2+1,g.setFromCamera(x,a);const b=g.intersectObject(p);if(b.length>0){const M=b[0].uv;M&&(s.uniforms.uHover.value.set(M.x,M.y),s.uniforms.uHoverState.value=1)}else s.uniforms.uHoverState.value=0};return requestAnimationFrame(()=>{if(h)return;r=new Dd,r.background=c.void,a=new xn(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(0,-10,10),a.lookAt(0,0,0),i=new Hd({canvas:w(t),antialias:!0,alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),u=new ps(60,60,128,128),s=new sn({wireframe:!0,uniforms:{uTime:{value:0},uColorStart:{value:new it("#5a189a")},uColorEnd:{value:new it("#00b4d8")},uHover:{value:new Ze(.5,.5)},uHoverState:{value:0}},vertexShader:`
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
          `,transparent:!0,side:Wn}),p=new an(u,s),p.rotation.x=-Math.PI/2-.4,r.add(p);const _=new ES(r,a),b=new ha(new Ze(window.innerWidth,window.innerHeight),.2,.5,.2);o=new MS(i),o.addPass(_),o.addPass(b);const M=new zd,E=()=>{l=requestAnimationFrame(E);const R=M.getElapsedTime();s.uniforms.uTime.value=R;const C=window.scrollY;p&&(p.rotation.x=-Math.PI/2-.4-C*2e-4),o.render()};E(),window.addEventListener("resize",m),window.addEventListener("mousemove",f)}),()=>{h=!0,window.removeEventListener("resize",m),window.removeEventListener("mousemove",f),l&&cancelAnimationFrame(l),u&&u.dispose(),s&&s.dispose(),i&&i.dispose(),o&&o.dispose()}}),Ht();var d=TS();na(d,h=>ge(t,h),()=>w(t)),se(n,d),Ct()}var RS=be("<button> </button>"),CS=be('<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs"></div>');function nd(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ir,"$locale",t),a=()=>Zt(Bn,"$t",t),s=Ke(),o=[{code:"en",name:"English"},{code:"pt",name:"Português"}];let l=ji(e,"only",8,void 0);function c(h){u0(ir,h),localStorage.setItem("preferred-locale",h)}Kt(()=>vo(l()),()=>{ge(s,l()?o.filter(h=>l().includes(h.code)):o)}),sr(),Ht();var d=CS();zt(d,5,()=>w(s),$t,(h,u)=>{var p=RS(),g=v(p);$e(x=>{Ee(p,"aria-label",x),Me(p,1,`hover:text-accent transition-colors duration-200 ${w(u).code===r()?"text-accent border-b border-accent active":"text-white/50"}`),B(g,w(u).name)},[()=>a()("common.change_language",{values:{name:w(u).name}})],ht),Nt("click",p,()=>c(w(u).code)),se(h,p)}),se(n,d),Ct(),i()}const gp="https://sized-wonder-burner-juice.trycloudflare.com",id="Quintuple9-Verse7-Outmatch4-Daintily2-Affidavit2",PS=!0,rd=["BitgetTicker/BTCUSDT","BitgetTicker/XAUUSDT","CandleCollector/btcusdt/1m","CandleCollector/btcusdt/5m","CandleCollector/btcusdt/15m","CandleCollector/btcusdt/1h","CandleCollector/btcusdt/4h","CandleCollector/btcusdt/1d","CandleCollector/btcusdt/1w","CandleCollector/xauusdt/1m","CandleCollector/xauusdt/5m","CandleCollector/xauusdt/15m","CandleCollector/xauusdt/1h","CandleCollector/xauusdt/4h","CandleCollector/xauusdt/1d","CandleCollector/xauusdt/1w","OKXLiquidationCollector","BitgetLiquidation","FundingRate/btcusdt","FundingRate/xauusdt","OpenInterest/btcusdt","OpenInterest/xauusdt","AggTradeBybit/BTCUSDT","AggTradeOKX/BTCUSDT"],hi=new Set,ni=os({enabled:PS,natsOk:null,streamsOnline:0,streamsTotal:0,engineRunning:!1,btcPrice:0,btcOI:0,btcFunding:0,btcNextFunding:0,btcUpdatedAt:0,recentLiqs:[],latestWhaleLiq:null,rawLiquidation:null,btcAggression:null});let Xa=[],ad=[],xp,Ro=!1,sd=!1;function IS(n){return n.replace(/^https/,"wss").replace(/^http/,"ws")}async function Sh(){try{const t=(await(await fetch(`${gp}/api/health`,{headers:id?{Authorization:`Bearer ${id}`}:{}})).json()).status==="ok";t&&hi.size===0&&rd.forEach(i=>hi.add(i)),ni.update(i=>({...i,natsOk:t,engineRunning:t,streamsOnline:t?hi.size:0,streamsTotal:t?Math.max(i.streamsTotal,hi.size,rd.length):0}))}catch{ni.update(n=>({...n,natsOk:!1,engineRunning:!1}))}}function $a(n,e){if(Ro)return;const i=`${n.includes("?")?"&":"?"}token=${encodeURIComponent(id)}`,r=new WebSocket(`${IS(gp)}${n}${i}`);Xa.push(r),r.onmessage=a=>{try{e(JSON.parse(a.data))}catch{}},r.onclose=()=>{if(Xa=Xa.filter(a=>a!==r),!Ro){const a=setTimeout(()=>$a(n,e),4e3);ad.push(a)}}}function LS(){sd||(sd=!0,Ro=!1,hi.clear(),$a("/ws/status",n=>{const e=n;e.stream&&(e.status==="connected"?hi.add(e.stream):(e.status==="disconnected"||e.status==="reconnecting")&&hi.delete(e.stream),ni.update(t=>{const i=Math.max(t.streamsTotal,hi.size,rd.length);return{...t,streamsOnline:hi.size,streamsTotal:i}}))}),$a("/ws/market_status",n=>{const e=n;e.symbol==="BTCUSDT"&&ni.update(t=>({...t,btcPrice:e.mark??0,btcOI:e.oi??0,btcFunding:e.funding??0,btcNextFunding:e.next_funding??0,btcUpdatedAt:Date.now()}))}),$a("/ws/liquidations",n=>{var t;const e=n;(t=e.symbol)!=null&&t.startsWith("BTC")&&ni.update(i=>{const r=[e,...i.recentLiqs].slice(0,6),a=e.usd_value>=1e4;return{...i,recentLiqs:r,latestWhaleLiq:a?e:i.latestWhaleLiq,rawLiquidation:e}})}),$a("/ws/aggression?symbol=BTCUSDT",n=>{const e=n;e.symbol==="BTCUSDT"&&ni.update(t=>({...t,btcAggression:e}))}),Sh(),xp=setInterval(Sh,3e4))}function DS(){Ro=!0,sd=!1,hi.clear(),Xa.forEach(n=>n.close()),Xa=[],ad.forEach(clearTimeout),ad=[],clearInterval(xp)}var NS=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]"></span>',1),US=be('<span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>'),FS=be('<span class="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>'),OS=be('<div class="absolute right-0 mt-3 w-60 origin-top-right rounded-sm border border-white/10 bg-black/90 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-l-2 border-l-accent z-50 text-xs space-y-3"><div class="font-bold text-[9px] text-white/40 tracking-[0.2em] uppercase border-b border-white/5 pb-2">:: TELEMETRY DIAGNOSTICS</div> <div class="space-y-2.5"><div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">NATS Cluster</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Data Streams</span> <span class="font-bold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Ark Engine</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Secure Tunnel</span> <span> </span></div></div> <div class="border-t border-white/5 pt-2 flex items-center justify-between text-[9px] text-white/30 font-mono"><span>HOST: VPS-NEXUS-01</span> <span>v1.2.4</span></div></div>'),BS=be('<div class="relative inline-block text-left font-mono pointer-events-auto"><button class="flex items-center gap-2 focus:outline-none cursor-pointer group" aria-label="Toggle telemetry details"><div class="relative flex h-2 w-2"><!></div> <span class="text-xs transition-colors duration-300 text-white/50 group-hover:text-accent font-semibold uppercase tracking-wider"><!></span> <span class="text-[9px] text-white/30 group-hover:text-white/60 transition-transform duration-200 block">▼</span></button> <!></div>');function Mh(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ni,"$telemetry",t);let a=Ke(!1),s=Ke();function o(){ge(a,!w(a))}function l(){ge(a,!1)}function c(p){w(a)&&w(s)&&!w(s).contains(p.target)&&l()}Yn(()=>(document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)})),Ht();var d=or(),h=Pn(d);{var u=p=>{var g=BS(),x=v(g),m=v(x),f=v(m);{var _=I=>{var N=NS();se(I,N)},b=(I,N)=>{{var O=z=>{var V=US();se(z,V)},X=z=>{var V=FS();se(z,V)};nt(I,z=>{r().natsOk===!1?z(O):z(X,!1)},N)}};nt(f,I=>{r().natsOk===!0?I(_):I(b,!1)})}var M=A(m,2),E=v(M);{var R=I=>{var N=Li("SYSTEMS ACTIVE");se(I,N)},C=(I,N)=>{{var O=z=>{var V=Li("OFFLINE");se(z,V)},X=z=>{var V=Li("CONNECTING...");se(z,V)};nt(I,z=>{r().natsOk===!1?z(O):z(X,!1)},N)}};nt(E,I=>{r().natsOk===!0?I(R):I(C,!1)})}var L=A(M,2),S=A(x,2);{var T=I=>{var N=OS(),O=A(v(N),2),X=v(O),z=A(v(X),2),V=v(z),H=A(X,2),Q=A(v(H),2),ae=v(Q),ie=A(H,2),oe=A(v(ie),2),we=v(oe),_e=A(ie,2),Oe=A(v(_e),2),je=v(Oe);$e(()=>{Me(z,1,`font-bold ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(V,r().natsOk===!0?"ONLINE":r().natsOk===!1?"OFFLINE":"CONNECTING"),B(ae,r().streamsOnline>0?`${r().streamsOnline} / ${r().streamsTotal} ACTIVE`:"—"),Me(oe,1,`font-bold ${r().engineRunning?"text-[#00FF94]":"text-white/40"}`),B(we,r().engineRunning?"RUNNING":"STANDBY"),Me(Oe,1,`font-bold ${r().natsOk!==null?"text-[#00FF94]":"text-white/40"}`),B(je,r().natsOk!==null?"ENCRYPTED":"—")}),se(I,N)};nt(S,I=>{w(a)&&I(T)})}na(g,I=>ge(s,I),()=>w(s)),$e(()=>bn(L,`transform: ${w(a)?"rotate(180deg)":"rotate(0)"}`)),Nt("click",x,o),se(p,g)};nt(h,p=>{r().enabled&&p(u)})}se(n,d),Ct(),i()}var kS=be('<section id="hero" class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"><div class="absolute top-24 md:top-8 left-1/2 -translate-x-1/2 z-20"><!></div> <div class="hidden md:flex absolute top-8 right-8 items-center gap-6 font-mono text-xs"><a href="#/terminal" class="text-[#00FF94] hover:text-[#00F0FF] transition-colors duration-300 tracking-widest font-bold animate-pulse"> </a> <a href="#/ark-streams" class="text-white/40 hover:text-[#00F0FF] transition-colors duration-300 tracking-widest">[ TECH TALK ]</a> <a href="#/relatorios" class="text-white/40 hover:text-accent transition-colors duration-300 tracking-widest"> </a> <!></div> <div class="md:hidden absolute top-8 z-20"><!></div> <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto"><h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient-nexus leading-none drop-shadow-lg"> </h1> <h2 class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"><!></h2> <div class="flex flex-col md:flex-row gap-4"><a href="#/terminal" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-accent hover:border-accent hover:shadow-[0_0_25px_var(--color-quantum-cyan)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-wider text-center font-bold"> </span></a> <button class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-accent tracking-wider"> </span></button> <a href="#/ark-streams" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-[#00F0FF]/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-[#00F0FF] tracking-wider text-center"> </span></a></div></div></section>');function zS(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t),a=()=>{var V;(V=document.getElementById("philosophy"))==null||V.scrollIntoView({behavior:"smooth"})};Ht();var s=kS(),o=v(s),l=v(o);nd(l,{});var c=A(o,2),d=v(c),h=v(d),u=A(d,4),p=v(u),g=A(u,2);Mh(g,{});var x=A(c,2),m=v(x);Mh(m,{});var f=A(x,2),_=v(f),b=v(_),M=A(_,2),E=v(M);un(E,()=>r()("hero.subtitle").replace("&","&<br />"));var R=A(M,2),C=v(R),L=A(v(C),2),S=v(L),T=A(C,2),I=A(v(T),2),N=v(I),O=A(T,2),X=A(v(O),2),z=v(X);$e((V,H,Q,ae,ie,oe)=>{B(h,V),B(p,H),B(b,Q),B(S,ae),B(N,ie),B(z,oe)},[()=>r()("nav.terminal"),()=>r()("nav.reports"),()=>r()("hero.title"),()=>r()("hero.cta_terminal"),()=>r()("hero.cta"),()=>r()("hero.cta_ark")],ht),Nt("click",T,a),se(n,s),Ct(),i()}var HS=be('<section id="philosophy" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start relative z-10"><div class="sticky top-32"><h3 class="text-xl font-mono text-accent mb-2"> </h3> <div class="h-1 w-12 bg-accent/30"></div></div> <div class="space-y-12 bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"><p class="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans"><!></p> <div class="space-y-6 font-mono text-sm md:text-base text-secondary"><div class="flex gap-4"><span class="text-accent">[01]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[02]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[03]</span> <p><strong class="text-white"> </strong> </p></div></div></div></div></section>');function VS(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);Ht();var a=HS(),s=v(a),o=v(s),l=v(o),c=v(l),d=A(o,2),h=v(d),u=v(h);un(u,()=>r()("philosophy.hero_text"));var p=A(h,2),g=v(p),x=A(v(g),2),m=v(x),f=v(m),_=A(m),b=A(g,2),M=A(v(b),2),E=v(M),R=v(E),C=A(E),L=A(b,2),S=A(v(L),2),T=v(S),I=v(T),N=A(T);$e((O,X,z,V,H,Q,ae)=>{B(c,O),B(f,`${X??""}:`),B(_,` ${z??""}`),B(R,`${V??""}:`),B(C,` ${H??""}`),B(I,`${Q??""}:`),B(N,` ${ae??""}`)},[()=>r()("philosophy.title"),()=>r()("philosophy.p1.title"),()=>r()("philosophy.p1.text"),()=>r()("philosophy.p2.title"),()=>r()("philosophy.p2.text"),()=>r()("philosophy.p3.title"),()=>r()("philosophy.p3.text")],ht),se(n,a),Ct(),i()}var GS=be('<section id="stack" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ PYTHON ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Python</span> <span class="border border-white/10 px-2 py-1">Pandas</span> <span class="border border-white/10 px-2 py-1">Freqtrade</span> <span class="border border-white/10 px-2 py-1">SciPy</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ GO / NATS JETSTREAM ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Go</span> <span class="border border-white/10 px-2 py-1">NATS</span> <span class="border border-white/10 px-2 py-1">Wails</span> <span class="border border-white/10 px-2 py-1">Svelte</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ NATS JETSTREAM / KV BUCKETS ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">JetStream</span> <span class="border border-white/10 px-2 py-1">KV Store</span> <span class="border border-white/10 px-2 py-1">Audit Trail</span> <span class="border border-white/10 px-2 py-1">Compliance</span></div></div></div></div></section>');function WS(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);Ht();var a=GS(),s=v(a),o=v(s),l=v(o),c=A(o,2),d=v(c),h=A(v(d),2),u=v(h),p=A(h,2),g=v(p),x=A(d,2),m=A(v(x),2),f=v(m),_=A(m,2),b=v(_),M=A(x,2),E=A(v(M),2),R=v(E),C=A(E,2),L=v(C);$e((S,T,I,N,O,X,z)=>{B(l,S),B(u,T),B(g,I),B(f,N),B(b,O),B(R,X),B(L,z)},[()=>r()("stack.title"),()=>r()("stack.card1.title"),()=>r()("stack.card1.text"),()=>r()("stack.card2.title"),()=>r()("stack.card2.text"),()=>r()("stack.card3.title"),()=>r()("stack.card3.text")],ht),se(n,a),Ct(),i()}var $S=be('<section id="evolution" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="relative"><div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div> <div class="space-y-12 md:space-y-24"><div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] mb-8 md:mb-0"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 transition-all duration-300 rounded-sm"><div class="font-mono text-accent text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform"></div> <div class="md:w-[45%] hidden md:block"></div></div> <div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] hidden md:block"></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_#00F0FF]"></div> <div class="md:w-[45%]"><div class="bg-black/60 backdrop-blur-md border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/40 transition-all duration-300 rounded-sm"><div class="font-mono text-[#00F0FF] text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div></div></div></div></div></section>');function XS(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);Ht();var a=$S(),s=v(a),o=v(s),l=v(o),c=A(o,2),d=A(v(c),2),h=v(d),u=v(h),p=v(u),g=v(p),x=v(g),m=A(g,2),f=v(m),_=A(m,2),b=v(_),M=A(_,2),E=v(M),R=A(h,2),C=A(v(R),4),L=v(C),S=v(L),T=v(S),I=A(S,2),N=v(I),O=A(I,2),X=v(O),z=A(O,2),V=v(z);$e((H,Q,ae,ie,oe,we,_e,Oe,je)=>{B(l,H),B(x,Q),B(f,ae),B(b,ie),B(E,oe),B(T,we),B(N,_e),B(X,Oe),B(V,je)},[()=>r()("evolution.title"),()=>r()("evolution.phase1.period"),()=>r()("evolution.phase1.name"),()=>r()("evolution.phase1.tech"),()=>r()("evolution.phase1.description"),()=>r()("evolution.phase2.period"),()=>r()("evolution.phase2.name"),()=>r()("evolution.phase2.tech"),()=>r()("evolution.phase2.description")],ht),se(n,a),Ct(),i()}var qS=be('<div class="font-mono font-bold text-white tracking-tight" style="font-size: clamp(2rem, 5vw, 3rem)"> </div>'),YS=be('<div class="font-mono text-white/20 text-4xl">——————</div>'),jS=be('<div class="mt-auto border-t border-white/10 pt-4"><div class="font-mono text-xs text-white/35 tracking-wider">ark-streams · bitget</div></div>'),KS=be("<span> </span>"),ZS=be('<div class="mt-3 border border-white/10 bg-black/40 rounded-sm px-5 py-4"><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-3">BTC LIQUIDAÇÕES RECENTES</div> <div class="flex flex-wrap gap-x-6 gap-y-2"></div></div>'),JS=be('<div class="mt-8 flex justify-center"><a href="#/terminal" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-accent hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto text-center"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-widest font-bold"> </span></a></div>'),QS=be('<section id="metrics" class="py-24 px-4 bg-transparent"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: LIVE TELEMETRY</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center gap-2"><div></div> <span> </span></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-3"><div class="md:col-span-2 border border-accent/30 bg-black/80 p-6 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.08)]"><div class="flex items-start justify-between mb-5"><div><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">BTC / USDT · PERPETUAL</div> <!></div> <div class="flex items-center gap-2 pt-1"><div></div> <span class="font-mono text-xs text-white/50 tracking-widest">LIVE</span></div></div> <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-5"><div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Open Interest</div> <div class="font-mono text-base font-semibold text-white/90"> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Funding Rate</div> <div> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Next Funding</div> <div class="font-mono text-base font-semibold text-white/70"> </div></div></div></div> <div class="border border-white/15 bg-black/60 p-6 rounded-sm flex flex-col gap-5"><div class="font-mono text-xs text-white/50 tracking-widest uppercase">SYSTEM</div> <div class="space-y-4"><div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">NATS</span> <span> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">STREAMS</span> <span class="font-mono text-sm font-semibold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">ENGINE</span> <span> </span></div></div> <!></div></div> <!> <!></div></section>');function _p(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ni,"$telemetry",t),a=()=>Zt(Bn,"$t",t),s=Ke(),o=Ke();let l=ji(e,"showLink",8,!1);function c(f){return f.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function d(f){const _=f*100;return`${_>=0?"+":""}${_.toFixed(4)}%`}function h(f){return f>=1e6?`${(f/1e6).toFixed(2)}M`:f>=1e3?`${(f/1e3).toFixed(0)}K`:f.toFixed(0)}function u(f){return f>=1e6?`$${(f/1e6).toFixed(1)}M`:f>=1e3?`$${(f/1e3).toFixed(0)}K`:`$${f.toFixed(0)}`}function p(f){if(!f)return"—";const _=f-Date.now();if(_<=0)return"now";const b=Math.floor(_/36e5),M=Math.floor(_%36e5/6e4);return b>0?`${b}h ${M}m`:`${M}m`}Kt(()=>r(),()=>{ge(s,r().btcFunding>0)}),Kt(()=>r(),()=>{ge(o,r().btcUpdatedAt>0&&Date.now()-r().btcUpdatedAt<6e4)}),sr(),Ht();var g=or(),x=Pn(g);{var m=f=>{var _=QS(),b=v(_),M=v(b),E=A(v(M),4),R=v(E),C=A(R,2),L=v(C),S=A(M,2),T=v(S),I=v(T),N=v(I),O=A(v(N),2);{var X=U=>{var $=qS(),j=v($);$e(q=>B(j,`$${q??""}`),[()=>c(r().btcPrice)],ht),se(U,$)},z=U=>{var $=YS();se(U,$)};nt(O,U=>{r().btcPrice>0?U(X):U(z,!1)})}var V=A(N,2),H=v(V),Q=A(I,2),ae=v(Q),ie=A(v(ae),2),oe=v(ie),we=A(ae,2),_e=A(v(we),2),Oe=v(_e),je=A(we,2),K=A(v(je),2),te=v(K),fe=A(T,2),Be=A(v(fe),2),ve=v(Be),Ge=A(v(ve),2),dt=v(Ge),We=A(ve,2),Ye=A(v(We),2),et=v(Ye),ze=A(We,2),rt=A(v(ze),2),F=v(rt),Ie=A(Be,2);{var Ce=U=>{var $=jS();se(U,$)};nt(Ie,U=>{r().btcUpdatedAt>0&&U(Ce)})}var ke=A(S,2);{var re=U=>{var $=ZS(),j=A(v($),2);zt(j,5,()=>r().recentLiqs,$t,(q,le)=>{var ne=KS(),ye=v(ne);$e(He=>{Me(ne,1,`font-mono text-sm font-semibold ${w(le).side==="buy"||w(le).side==="BUY"?"text-rose-400":"text-emerald-400"}`),B(ye,`${w(le).side==="buy"||w(le).side==="BUY"?"▼":"▲"} ${He??""}`)},[()=>u(w(le).usd_value)],ht),se(q,ne)}),se(U,$)};nt(ke,U=>{r().recentLiqs.length>0&&U(re)})}var D=A(ke,2);{var y=U=>{var $=JS(),j=v($),q=A(v(j),2),le=v(q);$e(ne=>B(le,ne),[()=>a()("metrics.enter_terminal")],ht),se(U,$)};nt(D,U=>{l()&&U(y)})}$e((U,$,j)=>{Me(R,1,`w-2 h-2 rounded-full ${r().natsOk===!0?"bg-[#00FF94] animate-pulse":r().natsOk===!1?"bg-rose-400":"bg-white/30"}`),Me(C,1,`text-sm ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(L,r().natsOk===!0?"CONNECTED":r().natsOk===!1?"OFFLINE":"…"),Me(H,1,`w-2 h-2 rounded-full ${w(o)?"bg-accent animate-pulse":"bg-white/20"}`),B(oe,U),Me(_e,1,`font-mono text-base font-semibold ${r().btcFunding!==0?w(s)?"text-rose-400":"text-emerald-400":"text-white/50"}`),B(Oe,$),B(te,j),Me(Ge,1,`font-mono text-sm font-bold ${r().natsOk===!0?"text-emerald-400":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(dt,r().natsOk===!0?"OK":r().natsOk===!1?"FAIL":"—"),B(et,r().streamsOnline>0?`${r().streamsOnline}/${r().streamsTotal}`:"—"),Me(rt,1,`font-mono text-sm font-bold ${r().engineRunning?"text-emerald-400":"text-white/40"}`),B(F,r().engineRunning?"RUNNING":"—")},[()=>r().btcOI>0?h(r().btcOI):"—",()=>r().btcFunding!==0?d(r().btcFunding):"—",()=>p(r().btcNextFunding)],ht),se(f,_)};nt(x,f=>{r().enabled&&f(m)})}se(n,g),Ct(),i()}var eM=be('<footer class="py-12 px-4 border-t border-white/5 text-center bg-transparent"><div class="font-mono text-xs text-secondary space-y-6"><div class="flex justify-center gap-8 flex-wrap"><a href="https://linkedin.com/company/nexus-quant" aria-label="LinkedIn" class="hover:text-accent transition-colors duration-300">[ LINKEDIN ]</a> <a href="https://github.com/nexus-quantitative" aria-label="GitHub" class="hover:text-accent transition-colors duration-300">[ GITHUB ]</a> <a href="#/relatorios" aria-label="Relatórios Operacionais" class="hover:text-accent transition-colors duration-300">[ RELATÓRIOS ]</a></div> <div class="h-px w-12 bg-white/10 mx-auto"></div> <div class="opacity-40 font-sans tracking-wide"> <br> </div></div></footer>');function tM(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t),a=new Date().getFullYear();Ht();var s=eM(),o=v(s),l=A(v(o),4),c=v(l),d=A(c,2);$e((h,u)=>{B(c,h),B(d,` ${u??""}`)},[()=>r()("footer.rights",{values:{year:a}}),()=>r()("footer.location")],ht),se(n,s),Ct(),i()}var nM=xa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-red-500 svelte-1sg11vv"><circle cx="12" cy="12" r="10" class="svelte-1sg11vv"></circle><line x1="15" y1="9" x2="9" y2="15" class="svelte-1sg11vv"></line><line x1="9" y1="9" x2="15" y2="15" class="svelte-1sg11vv"></line></svg>'),iM=xa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full svelte-1sg11vv"><path d="M11 5L6 9H2v6h4l5 4V5z" class="svelte-1sg11vv"></path><line x1="23" y1="9" x2="17" y2="15" class="svelte-1sg11vv"></line><line x1="17" y1="9" x2="23" y2="15" class="svelte-1sg11vv"></line></svg>'),rM=be('<div class="flex items-end gap-0.5 h-3 svelte-1sg11vv"><div class="w-0.5 bg-accent animate-music-bar-1 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-2 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-3 svelte-1sg11vv"></div></div>'),aM=be('<div class="fixed top-6 left-6 z-[100] svelte-1sg11vv"><button class="group flex items-center gap-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 hover:border-accent text-accent px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed svelte-1sg11vv"><div class="relative w-5 h-5 flex items-center justify-center svelte-1sg11vv"><!></div> <span class="text-xs font-mono uppercase tracking-widest min-w-[80px] svelte-1sg11vv"><!></span></button></div> <div class="pointer-events-none fixed -top-10 -left-10 opacity-0 w-1 h-1 overflow-hidden svelte-1sg11vv"><div id="youtube-audio-player" class="svelte-1sg11vv"></div></div>',1);function sM(n,e){Rt(e,!1);let t,i=!1,r=Ke(!0),a=Ke(!1),s=Ke("");const o="1RBL51ZE2Ig";Yn(()=>{var E;if(window.YT)if(window.YT.Player)l();else{const R=setInterval(()=>{window.YT.Player&&(clearInterval(R),l())},100)}else{const R=document.createElement("script");R.src="https://www.youtube.com/iframe_api";const C=document.getElementsByTagName("script")[0];(E=C.parentNode)==null||E.insertBefore(R,C),window.onYouTubeIframeAPIReady=()=>{l()}}});function l(){try{const E={height:"0",width:"0",videoId:o,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,playlist:o,modestbranding:1,rel:0,showinfo:0,origin:window.location.origin,enablejsapi:1},events:{onReady:R=>{ge(a,!0),R.target.setVolume(20),R.target.mute()},onStateChange:R=>{R.data===window.YT.PlayerState.PLAYING?i=!0:i=!1},onError:R=>{console.error("YouTube Player Error:",R.data),R.data===150||R.data===101?(ge(s,"Restricted"),console.warn("Video is not embeddable (Error 150).")):ge(s,"Error"),ge(a,!1)}}};t=new window.YT.Player("youtube-audio-player",E)}catch(E){console.error("Failed to initialize YouTube Player:",E)}}function c(){!w(a)||!t||w(s)||(w(r)?(t.setVolume(20),t.unMute(),t.playVideo(),ge(r,!1)):(t.mute(),t.pauseVideo(),ge(r,!0)))}Ht();var d=aM(),h=Pn(d),u=v(h),p=v(u),g=v(p);{var x=E=>{var R=nM();se(E,R)},m=(E,R)=>{{var C=S=>{var T=iM();se(S,T)},L=S=>{var T=rM();se(S,T)};nt(E,S=>{w(r)?S(C):S(L,!1)},R)}};nt(g,E=>{w(s)?E(x):E(m,!1)})}var f=A(p,2),_=v(f);{var b=E=>{var R=Li();$e(()=>B(R,w(s))),se(E,R)},M=(E,R)=>{{var C=S=>{var T=Li("Loading...");se(S,T)},L=S=>{var T=Li();$e(()=>B(T,w(r)?"Audio Off":"Audio On")),se(S,T)};nt(E,S=>{w(a)?S(L,!1):S(C)},R)}};nt(_,E=>{w(s)?E(b):E(M,!1)})}$e(()=>{Ee(u,"aria-label",w(s)?"Audio unavailable":w(r)?"Unmute music":"Mute music"),Ee(u,"title",w(s)?"Video not embeddable":w(a)?w(r)?"Play Music":"Mute Music":"Loading Player..."),u.disabled=!!w(s)}),Nt("click",u,c),se(n,d),Ct()}const oM=n=>n;function bp(n){const e=n-1;return e*e*e+1}function Eh(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function $n(n,{delay:e=0,duration:t=400,easing:i=oM}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:a=>`opacity: ${a*r}`}}function oo(n,{delay:e=0,duration:t=400,easing:i=bp,x:r=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,d=l*(1-s),[h,u]=Eh(r),[p,g]=Eh(a);return{delay:e,duration:t,easing:i,css:(x,m)=>`
			transform: ${c} translate(${(1-x)*h}${u}, ${(1-x)*p}${g});
			opacity: ${l-d*m}`}}function yp(n,{delay:e=0,duration:t=400,easing:i=bp,axis:r="y"}={}){const a=getComputedStyle(n),s=+a.opacity,o=r==="y"?"height":"width",l=parseFloat(a[o]),c=r==="y"?["top","bottom"]:["left","right"],d=c.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),h=parseFloat(a[`padding${d[0]}`]),u=parseFloat(a[`padding${d[1]}`]),p=parseFloat(a[`margin${d[0]}`]),g=parseFloat(a[`margin${d[1]}`]),x=parseFloat(a[`border${d[0]}Width`]),m=parseFloat(a[`border${d[1]}Width`]);return{delay:e,duration:t,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};${o}: ${f*l}px;padding-${c[0]}: ${f*h}px;padding-${c[1]}: ${f*u}px;margin-${c[0]}: ${f*p}px;margin-${c[1]}: ${f*g}px;border-${c[0]}-width: ${f*x}px;border-${c[1]}-width: ${f*m}px;min-${o}: 0`}}var lM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-orange-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-orange-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 1: BASES (ENTRY POINTS)</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"At the top, we have the Bases. In Polylith, these
                            are the only places that interact with the outside
                            world."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-orange-200">base: integrant:</strong> The brain of our boot process. Declarative formatting
                                using EDN configuration. Handles dependency injection,
                                enabling REPL restarts in milliseconds.</li> <li><strong class="text-orange-200">base: http-api:</strong> Exposes functionality via REST. Thin and dumb—routes
                                requests to components below.</li> <li><strong class="text-orange-200">base: onyx-peer:</strong> The heavy lifter. A background worker consuming
                                events from Datomic logs for async processing.</li></ul></div>`),cM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-zinc-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-zinc-300 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 2: INFRASTRUCTURE CORE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"In the middle, we have the Infrastructure Core.
                            These components are domain-agnostic. Whether we
                            were handling Marketplace Inventory (MPMS) or
                            Payment Intelligence (UBLE), this layer remained
                            stable."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-zinc-200">datomic-peer:</strong> Connects to our immutable ledger. Preserves every
                                state change in a timeline for financial and clinical
                                auditability.</li> <li><strong class="text-zinc-200">auth-provider:</strong> Centralized security with interceptors for multiple
                                external actors (VTEX, Gateways).</li> <li><strong class="text-zinc-200">workflow-orch:</strong> 'Sinatra' - A state machine engine for orchestrating
                                multi-step flows like refund authorizations.</li> <li><strong class="text-zinc-200">log-service:</strong> Full observability, sending structured logs to
                                the cloud.</li></ul></div>`),dM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-blue-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 3: DOMAIN & INTELLIGENCE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"Finally, at the bottom, we have the Domain Layer.
                            This is where the pivot happened."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-blue-200">payment-gateways:</strong> Normalizes the chaos. Adapters for Cielo, Getnet,
                                Pagar.me converting external formats to internal
                                schemas.</li> <li><strong class="text-blue-200">fraud-analysis:</strong> Enriches data with risk scores via ClearSale and
                                Unico connections.</li> <li><strong class="text-blue-200">oz-visualization:</strong> The 'Last Mile' of Intelligence. Scientific visualizations
                                (Vega-Lite) generated from Clojure data.</li> <li><strong class="text-blue-200">superset-embed:</strong> Real-time Superset dashboards integrated directly
                                into the frontend.</li></ul></div>`),uM=be(`<div class="w-full flex flex-col items-center gap-0 font-mono text-sm select-none pointer-events-none p-4"><div class="flex flex-col md:flex-row gap-8 w-full justify-center items-start mb-12 text-zinc-400 max-w-6xl px-4"><div class="flex-1"><p class="hint leading-relaxed svelte-1l6r2c7">Initially, we built MPMS. The domain was E-commerce. We
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
            survive a complete business pivot.</p></div>`);function hM(n,e){Rt(e,!1);let t=Ke(!1),i=Ke(null);Yn(()=>ge(t,!0)),Ht();var r=or(),a=Pn(r);{var s=o=>{var l=uM(),c=v(l),d=A(c,2),h=v(d),u=A(h,2),p=A(d,2),g=A(p,4),x=A(v(g),2),m=A(v(x),4);{var f=L=>{var S=lM();tn(1,S,()=>$n,()=>({duration:200})),se(L,S)};nt(m,L=>{w(i)===1&&L(f)})}var _=A(x,2),b=A(v(_),4);{var M=L=>{var S=cM();tn(1,S,()=>$n,()=>({duration:200})),se(L,S)};nt(b,L=>{w(i)===2&&L(M)})}var E=A(_,2),R=A(v(E),4);{var C=L=>{var S=dM();tn(1,S,()=>$n,()=>({duration:200})),se(L,S)};nt(R,L=>{w(i)===3&&L(C)})}tn(1,c,()=>$n,()=>({duration:800,delay:200})),tn(1,h,()=>oo,()=>({x:-20,duration:1e3})),tn(1,u,()=>oo,()=>({x:20,duration:1e3,delay:200})),tn(1,p,()=>$n,()=>({duration:1e3,delay:500})),Nt("mouseenter",x,()=>ge(i,1)),Nt("mouseleave",x,()=>ge(i,null)),Nt("mouseenter",_,()=>ge(i,2)),Nt("mouseleave",_,()=>ge(i,null)),Nt("mouseenter",E,()=>ge(i,3)),Nt("mouseleave",E,()=>ge(i,null)),tn(1,g,()=>oo,()=>({y:20,duration:1e3,delay:400})),se(o,l)};nt(a,o=>{w(t)&&o(s)})}se(n,r),Ct()}var fM=be('<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm p-4"><div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></div> <h3 class="text-orange-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-orange-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div> <h3 class="text-purple-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-purple-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent"></div> <h3 class="text-cyan-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-cyan-200/80 italic leading-relaxed"> </div></div></div></div>');function pM(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);Ht();var a=fM(),s=v(a),o=A(v(s),2),l=v(o),c=A(o,2),d=v(c),h=v(d),u=A(s,2),p=A(v(u),2),g=v(p),x=A(p,2),m=v(x),f=v(m),_=A(u,2),b=A(v(_),2),M=v(b),E=A(b,2),R=v(E),C=v(R);$e((L,S,T,I,N,O)=>{B(l,L),B(h,S),B(g,T),B(f,I),B(M,N),B(C,O)},[()=>r()("presentation.section2.part1.title"),()=>r()("presentation.section2.part1.intro"),()=>r()("presentation.section2.part2.title"),()=>r()("presentation.section2.part2.intro"),()=>r()("presentation.section2.part3.title"),()=>r()("presentation.section2.part3.intro")],ht),se(n,a),Ct(),i()}var mM=be('<div class="w-full h-[400px] relative rounded-xl overflow-hidden border border-zinc-800 bg-black/20"><canvas class="w-full h-full block"></canvas> <div class="absolute top-4 left-8 text-orange-500 font-mono text-xs tracking-widest pointer-events-none">INPUT: HIGH ENTROPY</div> <div class="absolute top-4 left-1/2 -translate-x-1/2 text-purple-500 font-mono text-xs tracking-widest pointer-events-none">INGESTION LAYER</div> <div class="absolute top-4 right-8 text-cyan-500 font-mono text-xs tracking-widest pointer-events-none">OUTPUT: SIGNAL</div></div>');function vM(n,e){Rt(e,!1);let t=Ke(),i=Ke(),r,a,s,o;const l=150,c=16729344,d=8788367,h=440020;let u=[],p;Yn(()=>{if(!w(i))return;s=new Dd;const E=45,R=w(t).clientWidth/w(t).clientHeight,C=.1,L=100;o=new xn(E,R,C,L),o.position.set(0,0,15),o.lookAt(0,0,0),a=new Hd({canvas:w(i),alpha:!0,antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(w(t).clientWidth,w(t).clientHeight);const S=new dp(16777215,.5);s.add(S);const T=new Ao(16777215,1);T.position.set(5,5,5),s.add(T);const I=new Ao(d,2,10);I.position.set(0,0,0),s.add(I),g(),x();const N=new zd,O=()=>{r=requestAnimationFrame(O);const z=N.getDelta(),V=N.getElapsedTime();f(V),_(z,V),a.render(s,o)};O();const X=()=>{if(!w(t))return;const z=w(t).clientWidth,V=w(t).clientHeight;o.aspect=z/V,o.updateProjectionMatrix(),a.setSize(z,V)};return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X),cancelAnimationFrame(r),a.dispose()}});function g(){p=new Ga;const E=new To(1.5,.05,16,50),R=new da({color:d,transparent:!0,opacity:.8,wireframe:!0}),C=new an(E,R);p.add(C);const L=new To(2.2,.02,16,50),S=new da({color:4988309,transparent:!0,opacity:.5}),T=new an(L,S);T.rotation.x=Math.PI/2,p.add(T);const I=new Fd(.8,0),N=new Xu({color:d,flatShading:!0,emissive:3018853}),O=new an(I,N);p.add(O),s.add(p)}function x(){const E=[new Od(.2),new Ma(.2,.2,.2),new Ud(.15)],R=new Xu({color:c,flatShading:!0});for(let C=0;C<l;C++){const L=new an(E[Math.floor(Math.random()*E.length)],R.clone());L.position.set(-15-Math.random()*10,(Math.random()-.5)*6,(Math.random()-.5)*4),m(L),L.position.x=-15-Math.random()*10,s.add(L),u.push({mesh:L,state:"chaos",velocity:new W,rotVelocity:new W,targetScale:1})}}function m(E,R){E.position.set(-10-Math.random()*5,(Math.random()-.5)*6,(Math.random()-.5)*4),E.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),E.material.color.setHex(c),E.material.emissive.setHex(0),E.material.wireframe=!1}function f(E){if(!p)return;p.rotation.y=E*.5,p.rotation.x=Math.sin(E*.3)*.2;const R=1+Math.sin(E*2)*.05;p.scale.set(R,R,R)}function _(E,R){const C=Math.min(1,R/5),L=1+Math.sin(R*.8)*.3,S=3.5*C*L;u.forEach(T=>{const{mesh:I}=T;if(I.rotation.x+=T.rotVelocity.x*E,I.rotation.y+=T.rotVelocity.y*E,I.position.x+=S*E,T.state==="chaos"&&I.position.x>-2)I.position.length()>.5&&I.position.lerp(new W(0,0,0),E*3),I.position.x>-.5&&I.position.x<.5&&(T.state="value",I.material.color.setHex(h),I.material.emissive.setHex(440020),I.rotation.set(0,0,0),T.rotVelocity.set(0,0,0));else if(T.state==="value"){I.position.y=Math.sin(R*2+I.position.x)*1.5*Math.exp(-I.position.x*.05);const N=0;I.position.y+=(N-I.position.y)*E*2,I.position.z+=(0-I.position.z)*E*2}else I.position.y+=Math.sin(R*10+I.id)*.02,T.rotVelocity.set(Math.random(),Math.random(),Math.random());I.position.x>20&&(T.state="chaos",m(I))})}Ht();var b=mM(),M=v(b);na(M,E=>ge(i,E),()=>w(i)),na(b,E=>ge(t,E),()=>w(t)),se(n,b),Ct()}function gM(n){const e=n-1;return e*e*e+1}var xM=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),_M=be('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-cyan-400 font-mono text-sm uppercase tracking-widest"> </h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li> </li> <li> </li> <li> </li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"> </p></div>'),bM=be('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div></div></div>'),yM=be('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),SM=be("<!> <!>",1),MM=be(`<div class="space-y-6"><div class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">💎</div> <div class="flex-1"><h4 class="text-xl font-bold text-purple-300 mb-2">1. Immutability & Data-Driven Design</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-purple-200">The Concept:</strong> The entire system relies on passing immutable maps. There are almost no mutable objects.</p> <div class="bg-black/40 border-l-4 border-purple-500 p-3 mb-3 rounded"><p class="text-sm text-purple-100 italic">"Candles (Map) -> Indicators (Value) -> Signal (Map) -> Order (Map).
                                    State is updated via recur, creating a new state for the next iteration without mutating the old one."</p></div> <p class="text-xs text-gray-400"><strong class="text-purple-300">Code Ref:</strong> Orchestrator Loop.</p></div></div></div> <div class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-cyan-300 mb-2">2. Pure Functions (Referential Transparency)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-cyan-200">The Concept:</strong> The strategy-engine largely consists of pure functions that take data and return a calculated result, with no side effects.</p> <div class="bg-black/40 border-l-4 border-cyan-500 p-3 mb-3 rounded"><p class="text-sm text-cyan-100 italic">"(ema candles period): Takes immutable data, returns a number. No external state is read or modified."</p></div> <p class="text-xs text-gray-400"><strong class="text-cyan-300">Benefit:</strong> Extremely easy to test. You just pass a vector of maps and assert the return value.</p></div></div></div> <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">⚡</div> <div class="flex-1"><h4 class="text-xl font-bold text-orange-300 mb-2">3. Concurrency & Asynchrony (core.async)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-orange-200">The Concept:</strong> CSP (Communicating Sequential Processes). The system "parks" (cheaply sleeps) until a timeout or a stop signal is received.</p> <div class="bg-black/40 border-l-4 border-orange-500 p-3 mb-3 rounded"><p class="text-sm text-orange-100 italic">"The Orchestrator uses core.async to manage the main application loop without blocking threads."</p></div> <p class="text-xs text-gray-400"><strong class="text-orange-300">Code Ref:</strong> com.nexus-quant.ark-engine.orchestrator.core/start!</p></div></div></div> <div class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🔄</div> <div class="flex-1"><h4 class="text-xl font-bold text-green-300 mb-2">4. Recursion for State Management</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-green-200">The Concept:</strong> Instead of wrapping the application state in a global atom, the Orchestrator maintains state on the stack via recursion.</p> <div class="bg-black/40 border-l-4 border-green-500 p-3 mb-3 rounded"><p class="text-sm text-green-100 italic">"(loop [state init] ... (recur new-state)). The 'state' exists only within the lifecycle of the loop."</p></div> <p class="text-xs text-gray-400"><strong class="text-green-300">Why?:</strong> Avoids mutable shared state bugs.</p></div></div></div> <div class="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">☕</div> <div class="flex-1"><h4 class="text-xl font-bold text-indigo-300 mb-2">5. Java Interoperability</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-indigo-200">The Concept:</strong> Clojure's strength is its access to the JVM ecosystem. Ark Engine leverages ta4j for technical analysis.</p> <div class="bg-black/40 border-l-4 border-indigo-500 p-3 mb-3 rounded"><p class="text-sm text-indigo-100 italic">"(-> obj .method args) macros for clean Java calls. Converting Clojure maps (keywords) to Java Objects efficiently."</p></div> <p class="text-xs text-gray-400"><strong class="text-indigo-300">Lib:</strong> ta4j (Technical Analysis for Java).</p></div></div></div></div>`),EM=be('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> INJECT VOLATILITY</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-cyan-500 tracking-widest">MODULE: ORCHESTRATOR (BRAIN)</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">core.async / Recur</div></div></div>  <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-orange-500 tracking-widest">MODULE: STRATEGY ENGINE (LOGIC)</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Referential Transparency</div></div></div>  <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-green-500 tracking-widest">MODULE: CONNECTOR</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-green-500/30 flex items-center justify-center bg-green-900/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]"><div class="text-green-400"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-green-400">ORDERS EXECUTED</div> <div class="text-xs text-gray-500 mt-1">Side-Effect Handler</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center"><div>Orchestrator (Loop)</div> <div class="text-orange-400">Strategy (Pure Logic)</div> <div>Connector (Side Effects)</div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Core Clojure & FP Concepts</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Key Concepts: Immutability, Pure Functions, Concurrency, Recursion</p></button> <!></div></div>');function wM(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);let a=Ke("safe"),s=Ke(!1),o=Ke(!0),l=Ke(!1),c=Ke([]),d=0;const h={brain:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',shield:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',vault:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'};let u;function p(){clearInterval(u),u=setInterval(()=>{const re=d++,y=w(a)==="danger"&&Math.random()>.3?"danger":"safe",U={id:re,type:y,status:"moving",x:0};ge(c,[...w(c),U]),w(c).length>10&&w(c).shift()},w(a)==="safe"?800:400)}let g;const x=50,m=95;function f(){ge(c,w(c).map(re=>{if(re.status!=="moving")return re;const D=re.type==="danger"?.4:.2;let y=re.x+D;return y>=x&&y<x+2&&re.type==="danger"?(re.status="blocked",_(),re):(y>=m&&(re.status="success"),{...re,x:y})}).filter(re=>re.status!=="success"&&(re.status!=="blocked"||Math.random()>.05))),g=requestAnimationFrame(f)}function _(){ge(s,!0),setTimeout(()=>ge(s,!1),400)}Yn(()=>(p(),f(),()=>{clearInterval(u),cancelAnimationFrame(g)})),Kt(()=>w(a),()=>{w(a)&&p()}),sr(),Ht();var b=EM(),M=v(b),E=v(M),R=A(E,2),C=v(R),L=v(C);{var S=re=>{var D=xM();se(re,D)};nt(L,re=>{w(a)==="danger"&&re(S)})}var T=A(L,2),I=A(M,2);{var N=re=>{var D=_M(),y=v(D),U=v(y),$=v(U),j=A(U,2),q=A(y,2),le=v(q),ne=v(le),ye=A(le,2),He=v(ye),ce=A(ye,2),me=v(ce),Pe=A(q,2),De=v(Pe);$e((pe,tt,k,xe,he)=>{B($,pe),B(ne,tt),B(He,k),B(me,xe),B(De,he)},[()=>r()("presentation.section3.demo.instruction"),()=>r()("presentation.section3.demo.step1"),()=>r()("presentation.section3.demo.step2"),()=>r()("presentation.section3.demo.step3"),()=>r()("presentation.section3.demo.conclusion")],ht),Nt("click",j,()=>ge(o,!1)),tn(3,D,()=>$n),se(re,D)};nt(I,re=>{w(o)&&re(N)})}var O=A(I,2),X=v(O),z=A(v(X),4),V=v(z),H=A(V,2),Q=v(H);un(Q,()=>h.brain);var ae=A(z,2),ie=v(ae),oe=v(ie),we=A(X,2),_e=A(v(we),2),Oe=v(_e),je=A(Oe,2),K=v(je),te=v(K);un(te,()=>w(s)?h.lock:h.shield);var fe=A(_e,2),Be=v(fe),ve=v(Be),Ge=A(we,2),dt=A(v(Ge),2),We=v(dt),Ye=v(We);un(Ye,()=>h.vault);var et=A(Ge,2);zt(et,5,()=>w(c),re=>re.id,(re,D)=>{var y=SM(),U=Pn(y);{var $=le=>{var ne=bM(),ye=v(ne);$e(()=>{bn(ne,`
                            left: ${w(D).x??""}%; 
                            background-color: ${w(D).type==="danger"?"#ef4444":"#06b6d4"};
                            box-shadow: 0 0 10px ${w(D).type==="danger"?"#ef4444":"#06b6d4"};
                            opacity: ${w(D).status==="blocked"?0:1};
                            transform: scale(${w(D).status==="blocked"?2:1});
                        `),Me(ye,1,`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-${w(D).type==="danger"?"red-500":"cyan-500"} opacity-50`)}),se(le,ne)};nt(U,le=>{(w(D).status==="moving"||w(D).status==="blocked")&&le($)})}var j=A(U,2);{var q=le=>{var ne=yM();$e(()=>bn(ne,`left: ${w(D).x??""}%;`)),se(le,ne)};nt(j,le=>{w(D).status==="blocked"&&le(q)})}se(re,y)});var ze=A(O,4),rt=v(ze),F=v(rt),Ie=A(v(F),2),Ce=A(rt,2);{var ke=re=>{var D=MM();tn(3,D,()=>yp,()=>({duration:400})),se(re,D)};nt(Ce,re=>{w(l)&&re(ke)})}$e(()=>{Me(E,1,`px-6 py-2 rounded border transition-all duration-300
            ${w(a)==="safe"?"bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(R,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${w(a)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(T,1,`relative inline-flex rounded-full h-3 w-3 ${w(a)==="danger"?"bg-red-500":"bg-gray-500"}`),Me(z,1,`relative z-10 w-32 h-32 rounded-full border-2 ${w(a)==="danger"?"border-red-500/50 animate-pulse":"border-cyan-500/30"} flex items-center justify-center bg-black/50`),Me(V,1,`absolute inset-0 rounded-full border border-dashed ${w(a)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-cyan-500/20 animate-[spin_10s_linear_infinite]"}`),Me(H,1,`text-cyan-400 ${w(a)==="danger"?"text-red-500":""}`),Me(ie,1,`text-lg font-bold ${w(a)==="danger"?"text-red-400":"text-cyan-400"}`),B(oe,w(a)==="danger"?"VOLATILITY SPIKE":"ACTIVE LOOP"),Me(Oe,1,`absolute -inset-8 rounded-full bg-orange-500/10 blur-xl transition-opacity duration-200
                    ${w(s)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Me(je,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900
                    ${w(s)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-orange-500/30"}`),Me(K,1,`text-orange-500 transition-transform duration-200 ${w(s)?"scale-90 text-red-500":""}`),Me(Be,1,`text-lg font-bold ${w(s)?"text-red-400 animate-pulse":"text-orange-400"} transition-colors`),B(ve,w(s)?"COMPUTING INDICATORS":"PURE LOGIC"),Me(Ie,0,`w-6 h-6 text-purple-400 transition-transform duration-300 ${w(l)?"rotate-180":""}`)}),Nt("click",E,()=>ge(a,"safe")),Nt("click",R,()=>ge(a,"danger")),Nt("click",rt,()=>ge(l,!w(l))),se(n,b),Ct(),i()}var TM=be('<div class="p-6 text-center text-indigo-300 font-mono text-sm md:text-base tracking-widest uppercase"> </div>'),AM=be('<div class="grid grid-cols-2 divide-x divide-white/5 hover:bg-white/5 transition-colors group"><div class="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center text-right md:text-left justify-end md:justify-start"><div class="hidden md:block text-indigo-500/50 group-hover:text-indigo-400 transition-colors"><!></div> <div class="flex-1"><div class="text-gray-200 font-bold text-lg"> </div> <div class="text-gray-500 text-sm font-mono mt-1"> </div></div></div> <div class="p-6 flex flex-col md:flex-row gap-4 items-end md:items-center text-left"><div class="md:hidden text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-2"><!></div> <div class="flex-1"><div class="text-white font-bold text-lg"> </div> <div class="text-indigo-400/80 text-sm font-mono mt-1"> </div></div></div></div>'),RM=be('<div class="max-w-6xl w-full space-y-12"><div class="text-center space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider"> </h3> <h4 class="text-2xl md:text-3xl font-bold text-white italic"> </h4> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div></div> <div class="bg-gradient-to-r from-accent/20 to-purple-900/20 border-l-4 border-accent p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-accent/10 mb-12"><p class="text-xl md:text-2xl text-white font-light leading-relaxed italic text-center"> </p></div> <div class="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"><div class="grid grid-cols-2 divide-x divide-white/10 bg-white/5"></div> <div class="divide-y divide-white/5"></div></div></div>');function CM(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t),a=Ke(),s=Ke();let o=ji(e,"baseKey",8,"presentation");const l={source:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>',norm:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',audit:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',decision:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',runtime:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',messaging:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',ui:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',deployment:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'};Kt(()=>(r(),vo(o())),()=>{ge(a,r()(`${o()}.section4.headers`))}),Kt(()=>(r(),vo(o())),()=>{ge(s,r()(`${o()}.section4.rows`))}),sr(),Ht();var c=RM(),d=v(c),h=v(d),u=v(h),p=A(h,2),g=v(p),x=A(d,2),m=v(x),f=v(m),_=A(x,2),b=v(_);zt(b,5,()=>w(a),$t,(E,R)=>{var C=TM(),L=v(C);$e(()=>B(L,w(R))),se(E,C)});var M=A(b,2);zt(M,5,()=>Object.entries(w(s)),$t,(E,R)=>{let C=()=>w(R)[0],L=()=>w(R)[1];var S=AM(),T=v(S),I=v(T),N=v(I);un(N,()=>l[C()]);var O=A(I,2),X=v(O),z=v(X),V=A(X,2),H=v(V),Q=A(T,2),ae=v(Q),ie=v(ae);un(ie,()=>l[C()]);var oe=A(ae,2),we=v(oe),_e=v(we),Oe=A(we,2),je=v(Oe);$e(()=>{B(z,L().fintech.title),B(H,L().fintech.detail),B(_e,L().healthcare.title),B(je,L().healthcare.detail)}),se(E,S)}),$e((E,R,C)=>{B(u,`04 // ${E??""}`),B(g,R),B(f,C)},[()=>r()(`${o()}.section4.title`),()=>r()(`${o()}.section4.subtitle`),()=>r()(`${o()}.section4.closing`)],ht),se(n,c),Ct(),i()}var PM=be('<div class="w-full h-full min-h-[400px] relative"><canvas></canvas> <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-[100px] z-0 transform scale-75 opacity-50"></div></div>');function IM(n,e){Rt(e,!1);let t=Ke(),i=Ke(),r,a,s,o,l,c,d=new Ze(100,100),h=new Ze(100,100),u=Ke(!1),p={x:0,y:0},g={x:0,y:0},x={x:0,y:0};Yn(()=>{m(),E(),window.addEventListener("mousemove",b),window.addEventListener("resize",M),w(t).addEventListener("mousedown",f),w(t).addEventListener("mouseup",_),w(t).addEventListener("mouseleave",_)}),ff(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("mousemove",b),window.removeEventListener("resize",M),w(t)&&(w(t).removeEventListener("mousedown",f),w(t).removeEventListener("mouseup",_),w(t).removeEventListener("mouseleave",_)),r&&r.dispose()});function m(){a=new Dd,s=new xn(45,w(t).clientWidth/w(t).clientHeight,.1,1e3),s.position.z=50,r=new Hd({canvas:w(i),antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(w(t).clientWidth,w(t).clientHeight),r.setClearColor(0,0);const T=new dp(16777215,.2);a.add(T);const I=new Ao(16347926,2,100);I.position.set(10,20,30),a.add(I);const N=new Ao(3900150,2,100);N.position.set(-10,-20,-10),a.add(N);const O=new Bd(10,3,200,32,2,3),X=new da({color:16347926,wireframe:!0,transparent:!0,opacity:.8,side:Wn});l=new an(O,X),a.add(l);const z=new vx({color:16777215,metalness:.9,roughness:.1,transparent:!0,opacity:0,side:Wn,envMapIntensity:1});c=new an(O,z),a.add(c)}function f(T){ge(u,!0),p={x:T.clientX,y:T.clientY}}function _(){ge(u,!1)}function b(T){const I=w(t).getBoundingClientRect();if(h.x=(T.clientX-I.left)/I.width*2-1,h.y=-((T.clientY-I.top)/I.height)*2+1,w(u)){const N={x:T.clientX-p.x,y:T.clientY-p.y};x.x=N.y*.01,x.y=N.x*.01,g.x+=x.x,g.y+=x.y,p={x:T.clientX,y:T.clientY}}}function M(){s.aspect=w(t).clientWidth/w(t).clientHeight,s.updateProjectionMatrix(),r.setSize(w(t).clientWidth,w(t).clientHeight)}function E(){o=requestAnimationFrame(E),R()}function R(){if(d.x+=(h.x-d.x)*.05,d.y+=(h.y-d.y)*.05,w(u))l.rotation.x=g.x,l.rotation.y=g.y,c.rotation.x=g.x,c.rotation.y=g.y;else{const N=Date.now()*5e-4;x.x*=.95,x.y*=.95,g.x+=(N*.2-g.x)*.02,g.y+=(N*.5-g.y)*.02,l.rotation.x=g.x,l.rotation.y=g.y,c.rotation.x=g.x,c.rotation.y=g.y}const T=Math.sqrt(d.x*d.x+d.y*d.y);let I=Math.max(0,1-T/.8);l.material.opacity=.2+(1-I)*.6,c.material.opacity=I,s.position.x+=(d.x*10-s.position.x)*.02,s.position.y+=(d.y*10-s.position.y)*.02,s.lookAt(a.position),r.render(a,s)}Ht();var C=PM(),L=v(C);let S;na(L,T=>ge(i,T),()=>w(i)),na(C,T=>ge(t,T),()=>w(t)),$e(T=>S=Me(L,1,"absolute inset-0 z-10 outline-none",null,S,T),[()=>({"cursor-grab":!w(u),"cursor-grabbing":w(u)})],ht),se(n,C),Ct()}var LM=be(`<div class="w-full relative z-10 pointer-events-auto"><section><div class="max-w-4xl w-full text-center space-y-8"><div class="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm tracking-widest mb-4">CONFIDENTIAL // INTERVIEW CANDIDATE</div> <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500"> </h1> <h2 class="text-2xl md:text-3xl text-gray-400 font-light"> </h2></div></section> <section><div class="max-w-3xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-cyan-500 font-serif">"</div> <h3 class="text-xl text-cyan-400 font-mono mb-4 tracking-wider"> </h3> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div></section> <section class="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden bg-zinc-950"><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-zinc-900 select-none z-0 opacity-30 whitespace-nowrap">BUILDER</h1> <div class="relative z-10 w-full max-w-6xl px-6"><div class="flex items-center gap-4 mb-12 opacity-80"><span class="text-orange-500 font-mono text-sm">02 // THE MINDSET</span> <div class="h-px bg-zinc-800 flex-1"></div></div> <div class="grid md:grid-cols-5 gap-12 items-center"><div class="md:col-span-2 space-y-8 z-20 relative pointer-events-none"><h2 class="text-4xl md:text-5xl font-bold leading-tight text-white">Not just <br> <span class="text-zinc-500 line-through decoration-orange-500/50">executing tasks.</span></h2> <p class="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 bg-zinc-950/50 backdrop-blur-md p-4 rounded-r-lg">Building the <strong class="text-white font-medium">right tools</strong> to solve the problem.</p> <div class="pt-4 pointer-events-auto"><p class="text-sm text-zinc-500 mb-2 font-mono uppercase tracking-widest">The Evidence</p> <p class="text-zinc-400 text-sm max-w-md leading-relaxed">I built this interactive presentation platform from
                            scratch. <br> Why? To demonstrate that I own the entire stack: <span class="text-orange-400">From the complex backend logic represented by
                                the wireframe, to the polished user experience
                                you see materializing.</span></p></div></div> <div class="md:col-span-3 h-[500px] relative"><!> <div class="absolute bottom-4 right-4 text-right pointer-events-none z-30"><span class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950/80 px-2 py-1 rounded">Interactive: Logic to Materialization</span></div></div></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><div class="text-center max-w-3xl space-y-4"><h3 class="text-xl text-purple-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><h3 class="text-lg text-purple-400/50 font-mono tracking-wider w-full text-center">02.b // DEEP DIVE & DATA FLOW</h3> <div class="w-full"><!></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-12"><div class="text-center max-w-4xl mx-auto space-y-6"><h3 class="text-xl text-green-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest mb-2"> </div> <div class="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-green-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><p class="text-lg text-cyan-300 font-medium mb-2"><!></p> <p class="text-sm text-gray-300 leading-relaxed"> </p></div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><!></section> <section><div class="max-w-2xl w-full text-center space-y-8"><h3 class="text-xl text-white font-mono tracking-wider"> </h3> <p class="text-2xl md:text-3xl font-light text-gray-100 leading-snug"> </p> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="https://linkedin.com/in/patrickcmserrano" target="_blank" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">LINKEDIN</a> <a href="https://github.com/patrickcmserrano" target="_blank" class="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded font-bold tracking-wide transition-all">GITHUB</a></div></div></section> <div class="h-12"></div></div>`);function DM(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";Ht();var s=LM(),o=v(s);Me(o,1,gn(a));var l=v(o),c=A(v(l),2),d=v(c),h=A(c,2),u=v(h),p=A(o,2);Me(p,1,gn(a));var g=v(p),x=A(v(g),2),m=v(x),f=A(x,2),_=v(f),b=A(p,2),M=A(v(b),2),E=A(v(M),2),R=A(v(E),2),C=v(R);IM(C,{});var L=A(b,2);Me(L,1,gn(a));var S=v(L),T=v(S),I=v(T),N=v(I),O=A(I,2),X=v(O),z=A(O,2),V=v(z),H=A(T,2),Q=v(H);hM(Q,{});var ae=A(L,2);Me(ae,1,gn(a));var ie=v(ae),oe=A(v(ie),2),we=v(oe);vM(we,{});var _e=A(oe,2),Oe=v(_e);pM(Oe,{});var je=A(ae,2);Me(je,1,gn(a));var K=v(je),te=v(K),fe=v(te),Be=v(fe),ve=A(fe,2),Ge=v(ve),dt=A(ve,2),We=v(dt),Ye=v(We);un(Ye,()=>r()("presentation.section3.subtitle"));var et=A(We,2),ze=v(et),rt=A(dt,2),F=v(rt),Ie=A(rt,2),Ce=v(Ie),ke=A(te,2),re=v(ke);wM(re,{});var D=A(je,2);Me(D,1,gn(a));var y=v(D);CM(y,{});var U=A(D,2);Me(U,1,gn(a));var $=v(U),j=v($),q=v(j),le=A(j,2),ne=v(le);$e((ye,He,ce,me,Pe,De,pe,tt,k,xe,he,Re,ue,ee)=>{B(d,ye),B(u,He),B(m,`01 // ${ce??""}`),B(_,me),B(N,`02 // ${Pe??""}`),B(X,De),B(V,pe),B(Be,`03 // ${tt??""}`),B(Ge,k),B(ze,xe),B(F,he),B(Ce,Re),B(q,ue),B(ne,ee)},[()=>r()("presentation.title"),()=>r()("presentation.subtitle"),()=>r()("presentation.section1.title"),()=>r()("presentation.section1.text"),()=>r()("presentation.section2.title"),()=>r()("presentation.section2.subtitle"),()=>r()("presentation.section2.intro"),()=>r()("presentation.section3.title"),()=>r()("presentation.section3.role"),()=>r()("presentation.section3.subtitle2"),()=>r()("presentation.section3.intro"),()=>r()("presentation.section3.intro2"),()=>r()("presentation.section5.title"),()=>r()("presentation.section5.text")],ht),tn(1,o,()=>$n),se(n,s),Ct(),i()}/**
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
 */const NM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var UM=xa("<svg><!><!></svg>");function FM(n,e){Rt(e,!0);const t=ji(e,"color",3,"currentColor"),i=ji(e,"size",3,24),r=ji(e,"strokeWidth",3,2),a=ji(e,"absoluteStrokeWidth",3,!1),s=ji(e,"iconNode",19,()=>[]),o=hf(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var l=UM();let c;var d=v(l);zt(d,17,s,$t,(u,p)=>{let g=()=>w(p)[0],x=()=>w(p)[1];var m=or(),f=Pn(m);t0(f,g,!0,(_,b)=>{let M;$e(()=>M=nu(_,M,{...x()}))}),se(u,m)});var h=A(d);af(h,()=>e.children??dn),$e(u=>c=nu(l,c,{...NM,...o,width:i(),height:i(),stroke:t(),"stroke-width":u,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>a()?Number(r())*24/Number(i()):r()]),se(n,l),Ct()}function Sp(n,e){Rt(e,!0);let t=hf(e,["$$slots","$$events","$$legacy"]);FM(n,m0({name:"arrow-left"},()=>t,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(r,a)=>{var s=or(),o=Pn(s);af(o,()=>e.children??dn),se(r,s)},$$slots:{default:!0}})),Ct()}var OM=xa("<path></path><path></path><path></path>",1),BM=xa('<circle r="4.5" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle>'),kM=xa('<rect rx="6" stroke-width="1"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.30)" font-size="9" font-family="monospace"> </text><line stroke-width="0.8" stroke-dasharray="5 4"></line><!><rect rx="8" stroke-width="1.2"></rect><rect rx="8" fill="none" stroke-width="4" opacity="0.07"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold" letter-spacing="0.3"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.32)" font-size="9" font-family="monospace"><!> </text><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text>',1),zM=be('<div class="w-full bg-black/20 border border-white/10 rounded-xl overflow-hidden p-4"><div class="flex items-center justify-between mb-3 px-2"><span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">publishers</span> <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest">nats subject bus</span> <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">subscribers</span></div> <svg viewBox="0 0 845 402" class="w-full" style="height: auto;" xmlns="http://www.w3.org/2000/svg"><defs></defs><!><rect x="338" y="156" width="166" height="18" rx="9" fill="rgba(0,255,148,0.14)" stroke="rgba(0,255,148,0.45)" stroke-width="0.6"></rect><text x="421" y="169" text-anchor="middle" fill="#00FF94" font-size="8.5" font-family="monospace">new symbols auto-picked up</text><line x1="200" x2="645" stroke="rgba(255,255,255,0.07)" stroke-width="0.6"></line><rect x="200" width="195" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="297" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: MARKET_STATE</text><text x="297" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">latest snapshot / sym×tf</text><rect x="410" width="235" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="527" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: STRATEGY_STATE</text><text x="527" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">last 50 state transitions</text></svg></div>');function HM(n){const h=[{y:75,publisher:"Collectors",publisherSub:"Bitget · Binance · Yahoo",subject:"market.kline.<sym>.<tf>",retention:"7 days",wildcard:!1,color:"#f97316",colorDim:"rgba(249,115,22,0.12)",strokeDim:"rgba(249,115,22,0.40)",consumers:["FractalEngine","Nexus Terminal"],pulseBegin:["0s","1.1s"],fanBegin:["1.6s","2.1s"]},{y:193,publisher:"FractalEngine",publisherSub:"1 instance / sym×tf",subject:"market.analyzed.*",retention:"7 days",wildcard:!0,color:"#00FF94",colorDim:"rgba(0,255,148,0.09)",strokeDim:"rgba(0,255,148,0.42)",consumers:["AlligatorTrend","API Server"],pulseBegin:["0.4s","1.5s"],fanBegin:["2.0s","2.5s"]},{y:311,publisher:"AlligatorTrend",publisherSub:"BTCUSDT · XAUUSDT",subject:"signals.trade.<sym>",retention:"30 days",wildcard:!1,color:"#a78bfa",colorDim:"rgba(167,139,250,0.09)",strokeDim:"rgba(167,139,250,0.38)",consumers:["PaperBroker","WebSocket"],pulseBegin:["0.8s","1.9s"],fanBegin:["2.4s","2.9s"]}];function u(I){return`M 158 ${I} L 300 ${I}`}function p(I){return`M 545 ${I} Q 587 ${I} 670 ${I-32}`}function g(I){return`M 545 ${I} Q 587 ${I} 670 ${I+32}`}const x=368;var m=zM(),f=A(v(m),2),_=v(f);zt(_,5,()=>h,$t,(I,N,O)=>{var X=OM(),z=Pn(X);Ee(z,"id",`ps${O}`);var V=A(z);Ee(V,"id",`sc1${O}`);var H=A(V);Ee(H,"id",`sc2${O}`),$e((Q,ae,ie)=>{Ee(z,"d",Q),Ee(V,"d",ae),Ee(H,"d",ie)},[()=>u(w(N).y),()=>p(w(N).y),()=>g(w(N).y)],ht),se(I,X)});var b=A(_);zt(b,1,()=>h,$t,(I,N,O)=>{var X=kM(),z=Pn(X);Ee(z,"x",8),Ee(z,"width",150),Ee(z,"height",54);var V=A(z);Ee(V,"x",8+150/2);var H=v(V),Q=A(V);Ee(Q,"x",8+150/2);var ae=v(Q),ie=A(Q);Ee(ie,"x1",158),Ee(ie,"x2",300);var oe=A(ie);zt(oe,1,()=>w(N).pulseBegin,$t,(y,U)=>{var $=BM(),j=v($),q=v(j);Ee(q,"href",`#ps${O}`),$e(()=>{Ee($,"fill",w(N).color),Ee(j,"begin",w(U))}),se(y,$)});var we=A(oe);Ee(we,"x",300),Ee(we,"width",245),Ee(we,"height",60);var _e=A(we);Ee(_e,"x",300),Ee(_e,"width",245),Ee(_e,"height",60);var Oe=A(_e);Ee(Oe,"x",300+245/2);var je=v(Oe),K=A(Oe);Ee(K,"x",300+245/2);var te=v(K);{var fe=y=>{var U=Li("wildcard ·");se(y,U)};nt(te,y=>{w(N).wildcard&&y(fe)})}var Be=A(te),ve=A(K),Ge=A(ve),dt=A(Ge),We=v(dt),Ye=v(We);Ee(Ye,"href",`#sc1${O}`);var et=A(dt),ze=v(et),rt=v(ze);Ee(rt,"href",`#sc2${O}`);var F=A(et);Ee(F,"x",670),Ee(F,"width",160),Ee(F,"height",34);var Ie=A(F);Ee(Ie,"x",670+160/2);var Ce=v(Ie),ke=A(Ie);Ee(ke,"x",670),Ee(ke,"width",160),Ee(ke,"height",34);var re=A(ke);Ee(re,"x",670+160/2);var D=v(re);$e((y,U)=>{Ee(z,"y",w(N).y-54/2),Ee(z,"fill",w(N).colorDim),Ee(z,"stroke",w(N).strokeDim),Ee(V,"y",w(N).y-7),Ee(V,"fill",w(N).color),B(H,w(N).publisher),Ee(Q,"y",w(N).y+11),B(ae,w(N).publisherSub),Ee(ie,"y1",w(N).y),Ee(ie,"y2",w(N).y),Ee(ie,"stroke",w(N).strokeDim),Ee(we,"y",w(N).y-60/2),Ee(we,"fill",w(N).colorDim),Ee(we,"stroke",w(N).color),Ee(_e,"y",w(N).y-60/2),Ee(_e,"stroke",w(N).color),Ee(Oe,"y",w(N).y-8),Ee(Oe,"fill",w(N).color),B(je,w(N).subject),Ee(K,"y",w(N).y+11),B(Be,`${w(N).retention??""} retention`),Ee(ve,"d",y),Ee(ve,"stroke",w(N).strokeDim),Ee(Ge,"d",U),Ee(Ge,"stroke",w(N).strokeDim),Ee(dt,"fill",w(N).color),Ee(We,"begin",w(N).fanBegin[0]),Ee(et,"fill",w(N).color),Ee(ze,"begin",w(N).fanBegin[1]),Ee(F,"y",w(N).y-32-34/2),Ee(Ie,"y",w(N).y-32+6),B(Ce,w(N).consumers[0]),Ee(ke,"y",w(N).y+32-34/2),Ee(re,"y",w(N).y+32+6),B(D,w(N).consumers[1])},[()=>p(w(N).y),()=>g(w(N).y)],ht),se(I,X)});var M=A(b,3);Ee(M,"y1",x-12),Ee(M,"y2",x-12);var E=A(M);Ee(E,"y",x);var R=A(E);Ee(R,"y",x+11);var C=A(R);Ee(C,"y",x+23);var L=A(C);Ee(L,"y",x);var S=A(L);Ee(S,"y",x+11);var T=A(S);Ee(T,"y",x+23),se(n,m)}var VM=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),GM=be('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-[#00FF94] font-mono text-sm uppercase tracking-widest">Interactive Simulation Guide</h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li>Observe the <strong>Collectors (Go)</strong> ingesting real-time market data via NATS.</li> <li>The <strong>Fractal Engine (Logic)</strong> analyzes incoming streams for unified patterns.</li> <li>Click <strong>VOLATILITY SPIKE</strong> to see how the hybrid ecosystem reacts to turbulence.</li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4">This simulation demonstrates the synergy of the multi-language reactive pipeline.</p></div>'),WM=be('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 opacity-50"></div></div>'),$M=be('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),XM=be("<!> <!>",1),qM=be('<div class="space-y-6"><div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🛠️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">1. Hybrid Architecture (Clojure + Go)</h4> <p class="text-sm text-gray-300 mb-3">Using the right tool for each operational constraint, maximizing both developer velocity and system performance.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"A synergistic approach where high-level abstractions meet low-level efficiency."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">2. Strategy Discovery (Clojure)</h4> <p class="text-sm text-gray-300 mb-3">Expressive modeling and REPL-driven research for rapid iteration on complex trading hypotheses.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Leveraging functional programming for robust, verifiable market analysis."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🏎️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">3. Edge Execution (Go)</h4> <p class="text-sm text-gray-300 mb-3">Low-latency performance and high concurrency in production, ensuring split-second execution precision.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Optimized binaries handling massive data throughput with minimal jitter."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🚌</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">4. Universal Data Bus (NATS)</h4> <p class="text-sm text-gray-300 mb-3">Decoupling runtimes through a common event language, enabling seamless communication across the entire stack.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"NATS JetStream provides the backbone for a truly reactive and modular ecosystem."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🌍</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">5. Multi-Language Ecosystem</h4> <p class="text-sm text-gray-300 mb-3">A platform where Clojure, Go, and Python coexist via JetStream, leveraging the best of each language.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Interoperability without compromise, designed for the future of quantitative finance."</p></div></div></div></div></div>'),YM=be('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> VOLATILITY SPIKE</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/20 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-[#00FF94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: COLLECTORS</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: FRACTAL ENGINE</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Logic / Indicators</div></div></div> <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: STRATEGY ENGINE</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-[#00FF94]/30 flex items-center justify-center bg-[#00FF94]/5 shadow-[0_0_20px_rgba(0,255,148,0.1)]"><div class="text-[#00FF94]"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-[#00FF94]">EXECUTION SIGNALS</div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-gray-900/50 to-black border border-gray-700 hover:border-[#00FF94]/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Ark Streams Technical Pillars</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Hybrid High-Performance Reactive Trading Infrastructure</p></button> <!></div></div>');function jM(n,e){Rt(e,!1);let t=Ke("safe"),i=Ke(!1),r=Ke(!0),a=Ke(!1),s=Ke([]),o=0;const l={collectors:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7l8 5 8-5M12 12v7"></path></svg>',fractal:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',strategy:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>'};let c;function d(){clearInterval(c),c=setInterval(()=>{const Ce=w(t)==="danger"&&Math.random()>.3?"danger":"safe",ke={id:o++,type:Ce,status:"moving",x:0};ge(s,[...w(s),ke]),w(s).length>15&&w(s).shift()},w(t)==="safe"?800:400)}let h;const u=50,p=95;function g(){ge(s,w(s).map(Ie=>{if(Ie.status!=="moving")return Ie;const Ce=Ie.type==="danger"?.6:.3;let ke=Ie.x+Ce;return ke>=u&&ke<u+2&&Ie.type==="danger"?(Ie.status="blocked",x(),Ie):(ke>=p&&(Ie.status="success"),{...Ie,x:ke})}).filter(Ie=>Ie.status!=="success"&&(Ie.status!=="blocked"||Math.random()>.05))),h=requestAnimationFrame(g)}function x(){ge(i,!0),setTimeout(()=>ge(i,!1),400)}Yn(()=>(d(),g(),()=>{clearInterval(c),cancelAnimationFrame(h)})),Kt(()=>w(t),()=>{w(t)&&d()}),sr(),Ht();var m=YM(),f=v(m),_=v(f),b=A(_,2),M=v(b),E=v(M);{var R=Ie=>{var Ce=VM();se(Ie,Ce)};nt(E,Ie=>{w(t)==="danger"&&Ie(R)})}var C=A(E,2),L=A(f,2);{var S=Ie=>{var Ce=GM(),ke=v(Ce),re=A(v(ke),2);Nt("click",re,()=>ge(r,!1)),tn(3,Ce,()=>$n),se(Ie,Ce)};nt(L,Ie=>{w(r)&&Ie(S)})}var T=A(L,2),I=v(T),N=A(v(I),4),O=v(N),X=A(O,2),z=v(X);un(z,()=>l.collectors);var V=A(N,2),H=v(V),Q=v(H),ae=A(I,2),ie=A(v(ae),2),oe=v(ie),we=A(oe,2),_e=v(we),Oe=v(_e);un(Oe,()=>w(i)?l.lock:l.fractal);var je=A(ie,2),K=v(je),te=v(K),fe=A(ae,2),Be=A(v(fe),2),ve=v(Be),Ge=v(ve);un(Ge,()=>l.strategy);var dt=A(fe,2);zt(dt,5,()=>w(s),Ie=>Ie.id,(Ie,Ce)=>{var ke=XM(),re=Pn(ke);{var D=$=>{var j=WM(),q=v(j);$e(()=>{bn(j,`
                            left: ${w(Ce).x??""}%; 
                            background-color: ${w(Ce).type==="danger"?"#ef4444":"#00FF94"};
                            box-shadow: 0 0 10px ${w(Ce).type==="danger"?"#ef4444":"#00FF94"};
                            opacity: ${w(Ce).status==="blocked"?0:1};
                            transform: scale(${w(Ce).status==="blocked"?2:1});
                        `),bn(q,`background: linear-gradient(to right, transparent, ${w(Ce).type==="danger"?"#ef4444":"#00FF94"})`)}),se($,j)};nt(re,$=>{(w(Ce).status==="moving"||w(Ce).status==="blocked")&&$(D)})}var y=A(re,2);{var U=$=>{var j=$M();$e(()=>bn(j,`left: ${w(Ce).x??""}%;`)),se($,j)};nt(y,$=>{w(Ce).status==="blocked"&&$(U)})}se(Ie,ke)});var We=A(T,2),Ye=v(We),et=v(Ye),ze=A(v(et),2),rt=A(Ye,2);{var F=Ie=>{var Ce=qM();tn(3,Ce,()=>yp,()=>({duration:400})),se(Ie,Ce)};nt(rt,Ie=>{w(a)&&Ie(F)})}$e(()=>{Me(_,1,`px-6 py-2 rounded border transition-all duration-300
            ${w(t)==="safe"?"bg-[#00FF94]/20 border-[#00FF94] text-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(b,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${w(t)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(C,1,`relative inline-flex rounded-full h-3 w-3 ${w(t)==="danger"?"bg-red-500":"bg-gray-500"}`),Me(N,1,`relative z-10 w-32 h-32 rounded-full border-2 ${w(t)==="danger"?"border-red-500/50 animate-pulse":"border-[#00FF94]/30"} flex items-center justify-center bg-black/20`),Me(O,1,`absolute inset-0 rounded-full border border-dashed ${w(t)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-[#00FF94]/20 animate-[spin_10s_linear_infinite]"}`),Me(X,1,`text-[#00FF94] ${w(t)==="danger"?"text-red-500":""}`),Me(H,1,`text-lg font-bold ${w(t)==="danger"?"text-red-400":"text-[#00FF94]"}`),B(Q,w(t)==="danger"?"VOLATILITY SPIKE":"ACTIVE INGESTION"),Me(oe,1,`absolute -inset-8 rounded-full bg-[#00FF94]/10 blur-xl transition-opacity duration-200
                    ${w(i)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Me(we,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900/40
                    ${w(i)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-[#00FF94]/30"}`),Me(_e,1,`text-[#00FF94] transition-transform duration-200 ${w(i)?"scale-90 text-red-500":""}`),Me(K,1,`text-lg font-bold ${w(i)?"text-red-400 animate-pulse":"text-[#00FF94]"} transition-colors`),B(te,w(i)?"COMPUTING FRACTALS":"PURE ANALYSIS"),Me(ze,0,`w-6 h-6 text-[#00FF94] transition-transform duration-300 ${w(a)?"rotate-180":""}`)}),Nt("click",_,()=>ge(t,"safe")),Nt("click",b,()=>ge(t,"danger")),Nt("click",Ye,()=>ge(a,!w(a))),se(n,m),Ct()}var KM=be('<div class="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/5"><span class="text-accent font-mono text-lg leading-none mt-0.5">▸</span> <span class="text-gray-300 text-sm"> </span></div>'),ZM=be('<span class="px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs"> </span>'),JM=be('<div class="grid grid-cols-12 text-xs border-b border-white/5 hover:bg-white/5 transition-colors"><div class="col-span-1 p-3 text-center text-gray-600 font-mono"> </div> <div class="col-span-3 p-3 text-gray-300 font-medium"> </div> <div class="col-span-4 p-3 text-accent/90"> </div> <div class="col-span-4 p-3 text-red-400/90"> </div></div>'),QM=be('<div class="p-3 border border-red-400/20 rounded-lg bg-red-400/5"><div class="text-red-400 font-mono text-xs font-bold mb-1"> </div> <div class="text-gray-400 text-xs"> </div></div>'),eE=be('<span class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">● LIVE</span>'),tE=be('<li class="text-xs text-gray-400 flex items-start gap-2"><span class="text-gray-600 mt-0.5">–</span> </li>'),nE=be('<div><div class="flex items-center justify-between"><span class="font-mono text-xs tracking-widest"> </span> <!></div> <h4 class="font-bold text-white text-sm"> </h4> <ul class="space-y-1"></ul></div>'),iE=be('<div class="w-full relative z-10 pointer-events-auto text-white"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> </a> <section><div class="max-w-4xl w-full text-center space-y-8"><div class="flex flex-wrap justify-center gap-3 mb-4"><span class="px-3 py-1 border border-accent/40 rounded-full bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Go 1.23</span> <span class="px-3 py-1 border border-blue-400/40 rounded-full bg-blue-400/10 text-blue-400 font-mono text-xs tracking-widest uppercase">NATS JetStream</span> <span class="px-3 py-1 border border-purple-400/40 rounded-full bg-purple-400/10 text-purple-400 font-mono text-xs tracking-widest uppercase">Wails Desktop</span></div> <h1 class="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter">ARK STREAMS</h1> <h2 class="text-xl md:text-2xl text-gray-400 font-light"> </h2> <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"><div class="text-center"><div class="text-2xl font-bold text-accent font-mono">7d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Data</div></div> <div class="text-center border-x border-white/10"><div class="text-2xl font-bold text-accent font-mono">365d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Strategy Audit</div></div> <div class="text-center"><div class="text-2xl font-bold text-accent font-mono">∞</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Replayable</div></div></div></div></section> <section><div class="max-w-3xl w-full space-y-10"><h3 class="text-xl text-accent font-mono tracking-wider uppercase text-center"> </h3> <div class="bg-black/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-accent font-serif">"</div> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-6"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-10"><div class="text-center max-w-4xl mx-auto space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <div class="bg-gradient-to-r from-accent/20 via-purple-900/20 to-accent/20 border border-accent/30 rounded-xl p-5 backdrop-blur-sm"><p class="text-base text-accent font-mono mb-1"> </p> <p class="text-xs text-gray-400"> </p></div></div> <div class="w-full"><!></div> <div class="flex flex-wrap justify-center gap-3"></div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="w-full overflow-hidden border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm"><div class="grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/5 border-b border-white/10"><div class="col-span-1 p-3 text-center">#</div> <div class="col-span-3 p-3">Filter</div> <div class="col-span-4 p-3 text-accent/80">▲ Long</div> <div class="col-span-4 p-3 text-red-400/80">▼ Short</div></div> <!></div> <div class="space-y-2"><div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Exit Conditions — first to trigger wins</div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"></div></div> <div class="p-4 border border-white/10 rounded-lg bg-white/5 text-xs text-gray-400 font-mono"><span class="text-accent">PaperBroker</span> — in-memory matching engine · position pyramiding · MFE/MAE tracking · FixedFractionalRM · used for live paper trading and backtests</div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-2xl w-full text-center space-y-8"><p class="text-3xl md:text-5xl font-mono text-white leading-snug uppercase tracking-tighter"> </p> <div class="flex justify-center gap-8 mt-12 opacity-50 text-xs font-mono tracking-widest uppercase"><span> </span> <span>•</span> <span> </span> <span>•</span> <span> </span></div> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="#/" class="px-8 py-3 bg-accent hover:bg-accent/80 text-black rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">BACK TO HOME</a></div></div></section> <div class="h-12"></div></div>');function rE(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative",s=[{id:"01",label:"Alligator Transition",long:"Bias just turned Bullish",short:"Bias just turned Bearish"},{id:"02",label:"Alligator Spread",long:"Jaw/teeth/lips spread above threshold",short:"Same"},{id:"03",label:"BB Squeeze Gate",long:"BB width above 50th percentile (last 300 bars)",short:"Same"},{id:"04",label:"Awesome Oscillator",long:"AO > 0 and accelerating (green bar)",short:"AO < 0 and accelerating (red bar)"},{id:"05",label:"Gator Mouth",long:"Current mouth wider than previous bar",short:"Same"},{id:"06",label:"Vol + MFI",long:"—",short:"Volume above SMA and MFI in GREEN or FAKE quadrant"}],o=[{label:"Take Profit",detail:"2 × ATR(14) from entry"},{label:"Stop Loss",detail:"2 × ATR(14) on the opposite side"},{label:"Trend Reversal",detail:"Alligator bias flips against position"},{label:"Teeth Touch",detail:"Price touches teeth with 2-bar debounce"}],l=[{phase:"PHASE 1",name:"Single-Node Intelligence",status:"current",items:["Single Go binary, all workers","NATS persists everything","AlligatorTrend on BTCUSDT + XAUUSDT","Nexus Terminal desktop"]},{phase:"PHASE 2",name:"Symbol & Exchange Expansion",status:"next",items:["Symbol-agnostic pipeline","New pair = new collector only","Strategies pick up via market.analyzed.*","Liquidation heatmap (KV price bins)"]},{phase:"PHASE 3",name:"Intelligence Layer",status:"soon",items:["On-chain integration (Aave/Compound)","AI Snapshot API → LLM context","Agentic tools (function-calling)","CoinGlass + global liquidation data"]},{phase:"PHASE 4",name:"Distributed Cluster",status:"later",items:["3-node NATS JetStream cluster","Raft consensus, stream replication","Independent Engine / Strategy / API nodes","Nexus Terminal connects to any node"]}],c={current:"text-accent border-accent bg-accent/10",next:"text-blue-400 border-blue-400/50 bg-blue-400/10",soon:"text-purple-400 border-purple-400/50 bg-purple-400/10",later:"text-gray-500 border-gray-600 bg-gray-500/10"};Ht();var d=iE(),h=v(d),u=v(h);Sp(u,{size:16});var p=A(u),g=A(h,2);Me(g,1,gn(a),"svelte-17y31qk");var x=v(g),m=A(v(x),4),f=v(m),_=A(g,2);Me(_,1,gn(a),"svelte-17y31qk");var b=v(_),M=v(b),E=v(M),R=A(M,2),C=A(v(R),2),L=v(C),S=A(R,2);zt(S,4,()=>["arkStreams.section1.cap1","arkStreams.section1.cap2","arkStreams.section1.cap3","arkStreams.section1.cap4"],$t,(ee,de)=>{var Fe=KM(),at=A(v(Fe),2),ot=v(at);$e(Ut=>B(ot,Ut),[()=>r()(de)],ht),se(ee,Fe)});var T=A(_,2);Me(T,1,gn(a),"svelte-17y31qk");var I=v(T),N=v(I),O=v(N),X=v(O),z=A(O,2),V=v(z),H=A(N,2),Q=v(H);HM(Q);var ae=A(T,2);Me(ae,1,gn(a),"svelte-17y31qk");var ie=v(ae),oe=v(ie),we=v(oe),_e=v(we),Oe=A(we,2),je=v(Oe),K=A(Oe,2),te=v(K),fe=v(te),Be=A(te,2),ve=v(Be),Ge=A(oe,2),dt=v(Ge);jM(dt,{});var We=A(Ge,2);zt(We,4,()=>["Alligator (SMMA jaw/teeth/lips)","Awesome Oscillator","Accelerator Oscillator","Market Facilitation Index","Fractal highs/lows"],$t,(ee,de)=>{var Fe=ZM(),at=v(Fe);$e(()=>B(at,de)),se(ee,Fe)});var Ye=A(ae,2);Me(Ye,1,gn(a),"svelte-17y31qk");var et=v(Ye),ze=v(et),rt=v(ze),F=v(rt),Ie=A(rt,2),Ce=v(Ie),ke=A(ze,2),re=A(v(ke),2);zt(re,1,()=>s,$t,(ee,de)=>{var Fe=JM(),at=v(Fe),ot=v(at),Ut=A(at,2),Yt=v(Ut),ai=A(Ut,2),jn=v(ai),Kn=A(ai,2),si=v(Kn);$e(()=>{B(ot,w(de).id),B(Yt,w(de).label),B(jn,w(de).long),B(si,w(de).short)}),se(ee,Fe)});var D=A(ke,2),y=A(v(D),2);zt(y,5,()=>o,$t,(ee,de)=>{var Fe=QM(),at=v(Fe),ot=v(at),Ut=A(at,2),Yt=v(Ut);$e(()=>{B(ot,w(de).label),B(Yt,w(de).detail)}),se(ee,Fe)});var U=A(Ye,2);Me(U,1,gn(a),"svelte-17y31qk");var $=v(U),j=v($),q=v(j),le=v(q),ne=A(q,2),ye=v(ne),He=A(j,2);zt(He,5,()=>l,$t,(ee,de)=>{var Fe=nE(),at=v(Fe),ot=v(at),Ut=v(ot),Yt=A(ot,2);{var ai=zn=>{var oi=eE();se(zn,oi)};nt(Yt,zn=>{w(de).status==="current"&&zn(ai)})}var jn=A(at,2),Kn=v(jn),si=A(jn,2);zt(si,5,()=>w(de).items,$t,(zn,oi)=>{var Mn=tE(),li=A(v(Mn));$e(()=>B(li,` ${w(oi)??""}`)),se(zn,Mn)}),$e(()=>{Me(Fe,1,`p-5 border rounded-xl space-y-3 ${c[w(de).status]??""} border-opacity-50`),B(Ut,w(de).phase),B(Kn,w(de).name)}),se(ee,Fe)});var ce=A(U,2);Me(ce,1,gn(a),"svelte-17y31qk");var me=v(ce),Pe=v(me),De=v(Pe),pe=A(Pe,2),tt=v(pe),k=v(tt),xe=A(tt,4),he=v(xe),Re=A(xe,4),ue=v(Re);$e((ee,de,Fe,at,ot,Ut,Yt,ai,jn,Kn,si,zn,oi,Mn,li,cr,dr,Bi)=>{B(p,` [ ${ee??""} ]`),B(f,de),B(E,`01 // ${Fe??""}`),B(L,at),B(X,`02 // ${ot??""}`),B(V,Ut),B(_e,`03 // ${Yt??""}`),B(je,ai),B(fe,jn),B(ve,Kn),B(F,`04 // ${si??""}`),B(Ce,zn),B(le,`05 // ${oi??""}`),B(ye,Mn),B(De,li),B(k,cr),B(he,dr),B(ue,Bi)},[()=>r()("report.nav_back"),()=>r()("arkStreams.subtitle"),()=>r()("arkStreams.section1.title"),()=>r()("arkStreams.section1.text"),()=>r()("arkStreams.section2.title"),()=>r()("arkStreams.section2.subtitle"),()=>r()("arkStreams.section3.title"),()=>r()("arkStreams.section3.role"),()=>r()("arkStreams.section3.subtitle"),()=>r()("arkStreams.section3.subtitle2"),()=>r()("arkStreams.section4.title"),()=>r()("arkStreams.section4.subtitle"),()=>r()("arkStreams.section5.title"),()=>r()("arkStreams.section5.text"),()=>r()("arkStreams.conclusion"),()=>r()("arkStreams.footer.memory"),()=>r()("arkStreams.footer.latency"),()=>r()("arkStreams.footer.stack")],ht),tn(1,g,()=>$n),se(n,d),Ct(),i()}var aE=be('<div class="border border-white/10 bg-white/[0.02] p-3 rounded-sm flex flex-col gap-1 hover:border-white/20 transition-colors"><div class="flex items-center justify-between"><span class="text-white/30" style="font-size: 0.72em"> </span> <span style="font-size: 0.72em"> </span></div> <div class="text-white font-bold" style="font-size: 0.9em"> </div> <div class="text-white/40 leading-snug" style="font-size: 0.72em"> </div></div>'),sE=be('<span class="px-1.5 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF]/70 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),oE=be('<span class="px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),lE=be('<span class="ml-3">ATR: <span class="text-white/40"> </span></span>'),cE=be('<div><div class="flex items-start justify-between gap-2"><div><div class="flex items-center gap-2 mb-0.5"><span class="text-white font-bold tracking-tight" style="font-size: 1.1em"> </span> <!></div> <span class="text-white/30" style="font-size: 0.72em"> </span></div> <div class="text-right shrink-0"><div style="font-size: 0.8em"> </div> <div style="font-size: 0.72em"> </div></div></div> <div class="flex items-center justify-between"><div class="flex items-center gap-2"><div></div> <span style="font-size: 0.8em"> </span></div> <span style="font-size: 0.72em"> </span></div> <div><div class="flex justify-between text-white/30 mb-1.5" style="font-size: 0.6em"><span> </span> <span class="text-white font-bold" style="font-size: 1.1em"> </span> <span> </span></div> <div class="relative h-1 bg-white/10 rounded-full overflow-visible"><div></div> <div class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-black"></div></div></div> <div class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-3"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %K</div> <div style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %D</div> <div class="text-white/60" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">MA(17)</div> <div class="text-[#4CC9F0]/70" style="font-size: 0.8em"><!></div></div></div> <div class="text-white/25 tracking-wide -mt-2" style="font-size: 0.6em"> <span> </span> <!></div></div>'),dE=be('<div class="border border-white/10 hover:border-rose-500/20 bg-black/60 p-5 rounded-sm flex flex-col gap-4 transition-colors"><div class="flex items-center justify-between"><span class="text-rose-400 font-bold tracking-widest" style="font-size: 0.9em"> </span> <span class="text-white/30 tracking-widest" style="font-size: 0.65em"> </span></div> <div><p class="text-white/30 tracking-widest uppercase mb-2" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.8em"> </p></div> <div class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-rose-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-amber-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-emerald-400 font-bold" style="font-size: 0.8em"> </div></div></div> <div class="text-white/25 border-t border-white/5 pt-3" style="font-size: 0.65em">INVALIDAÇÃO: <span class="text-amber-400/60"> </span></div></div>'),uE=be('<div class="border border-white/10 bg-white/[0.01] p-4 rounded-sm"><div class="text-[#00F0FF]/40 tracking-widest mb-2" style="font-size: 0.6em"> </div> <div class="text-white font-bold mb-2" style="font-size: 0.8em"> </div> <p class="text-white/50 leading-relaxed" style="font-size: 0.72em"> </p></div>'),hE=be('<div class="min-h-screen bg-black text-white font-mono relative z-10"><header class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10"><div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-3 flex-wrap"><a href="/" class="text-[#00F0FF]/60 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"> </a> <span class="text-white/20">/</span> <span class="text-white text-xs tracking-widest font-bold"> </span> <span class="hidden md:inline text-white/20">/</span> <span class="hidden md:inline text-[#00F0FF]/70 text-xs"> </span></div> <div class="flex items-center gap-3 flex-wrap justify-end"><div class="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-sm"><div class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div> <span class="text-amber-400 text-[10px] tracking-widest font-bold"> </span></div> <span class="hidden lg:inline text-white/30 text-[10px]"> </span> <div class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden" aria-label="Font size controls"><button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Decrease font size"> </button> <span class="text-[10px] text-white/30 px-1 tabular-nums"> </span> <button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Increase font size"> </button></div> <div class="hidden md:block"><!></div></div></div> <div class="md:hidden px-4 pb-2 border-t border-white/5"><!></div></header> <div class="max-w-7xl mx-auto px-4 py-8 space-y-10"><div class="space-y-3"><div class="flex items-baseline gap-3 flex-wrap"><span class="text-[#00F0FF]/40 tracking-[0.3em] uppercase" style="font-size: 0.72em">REL-OP</span> <span class="text-[#00F0FF]/40" style="font-size: 0.72em">·</span> <span class="text-white/20 tracking-widest" style="font-size: 0.72em"> </span></div> <h1 class="font-bold tracking-tight text-white leading-tight" style="font-size: clamp(1.6rem, 3vw + 1rem, 3rem)"> <span class="text-white/30 block md:inline" style="font-size: 0.75em"> </span></h1> <p class="text-[#4CC9F0]/70 max-w-2xl leading-relaxed" style="font-size: 0.9em"> </p> <div class="flex gap-4 flex-wrap text-white/30 tracking-widest pt-1" style="font-size: 0.65em"><span> </span> <span>·</span> <span> </span></div></div> <div class="border border-amber-500/20 bg-amber-500/5 p-4 rounded-sm flex gap-3"><span class="text-amber-400 shrink-0 mt-0.5" style="font-size: 0.8em">⚠</span> <p class="text-amber-400/80 leading-relaxed" style="font-size: 0.8em"><strong class="text-amber-400"> </strong> <!></p></div> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div></section> <section><div class="flex items-center gap-4 mb-4"><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase" style="font-size: 0.65em"> </h2> <div class="flex-1 h-px bg-white/5"></div> <span class="text-rose-400/60 tracking-widest" style="font-size: 0.65em">SHORT · ARMED · HALF</span></div> <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm mb-4 grid md:grid-cols-2 gap-6"><div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div> <div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div></div> <div class="grid md:grid-cols-2 gap-4 mb-4"></div> <div class="border border-white/5 bg-white/[0.01] p-4 rounded-sm flex items-start gap-3"><span class="text-white/30 font-bold shrink-0" style="font-size: 0.8em"> </span> <p class="text-white/50 leading-relaxed" style="font-size: 0.8em"><!></p></div> <div class="mt-4 p-4 border-l-2 border-[#00F0FF]/20 bg-[#00F0FF]/[0.02]"><p class="text-[#00F0FF]/50 uppercase tracking-widest mb-1" style="font-size: 0.65em"> </p> <p class="text-white/60 leading-relaxed" style="font-size: 0.8em"><!></p></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"></div></section> <section class="border-t border-white/5 pt-6"><div class="flex flex-wrap gap-6 text-white/30" style="font-size: 0.65em"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> <span><strong class="text-emerald-400">ARMED</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div> <span><strong class="text-amber-400">STANDBY</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div> <span><strong class="text-[#00F0FF]">IN_POSITION</strong> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">FULL</span> <span> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">HALF</span> <span> </span></div></div> <p class="text-white/15 mt-4" style="font-size: 0.55em"> </p></section></div></div>');function fE(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(Bn,"$t",t);let a=Ke(14);const s=11,o=20;Yn(()=>{document.documentElement.style.scrollSnapType="none",document.documentElement.style.fontSize="16px"}),ff(()=>{document.documentElement.style.scrollSnapType="",document.documentElement.style.fontSize=""});const l={week:"S01",start:"01/06/2026",end:"05/06/2026",generated:"2026-05-31",regime:"RISK-ON ESTREITO",methodology:"Triple Screen (Elder) + Sistema de Impulso",regimeNote:"Apetite a risco concentrado em large-cap US. Commodities e alt-risk corrigindo. Real estruturalmente forte."},c=Qe=>Qe.toFixed(2),d=Qe=>Qe.toFixed(4),h=Qe=>Qe.toLocaleString("pt-BR",{maximumFractionDigits:2}),u=[{symbol:"BTC/USD",labelKey:"btc",roleKey:"role_primary",bias:"SHORT",status:"ARMED",conviction:"HALF",impulse:"blue_to_red",close:75708,ma17:76533.35,stochK:42.08,stochD:28.63,zoneKey:"zone_neutral_up",atr:null,support:73936,resistance:76606.5,priority:3,noteKey:"btc_note",formatFn:h},{symbol:"XAU/USD",labelKey:"xau",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:4529.57,ma17:4576.27,stochK:68.77,stochD:56.19,zoneKey:"zone_rising_overbought",atr:101.35,support:4500,resistance:4632.41,priority:1,noteKey:"xau_note",formatFn:h},{symbol:"S&P 500",labelKey:"sp",roleKey:"role_macro",bias:"LONG",status:"STANDBY",conviction:"FULL",impulse:"green",close:7580.06,ma17:7088.78,stochK:90.88,stochD:90.08,zoneKey:"zone_overbought",atr:68.83,support:7369.23,resistance:7599.38,priority:6,noteKey:"sp_note",formatFn:h},{symbol:"BOVESPA",labelKey:"bovespa",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:173787,ma17:177870.33,stochK:18.94,stochD:34.34,zoneKey:"zone_low_k_below_d",atr:2606.67,support:172686,resistance:180055,priority:2,noteKey:"bovespa_note",formatFn:h},{symbol:"USD/BRL",labelKey:"usdbrl",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"HALF",impulse:"red",close:5.0368,ma17:5.1099,stochK:64.81,stochD:66.89,zoneKey:"zone_rising",atr:null,support:4.995,resistance:5.1099,priority:4,noteKey:"usdbrl_note",formatFn:d},{symbol:"BRENT",labelKey:"brent",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"FULL",impulse:"red",close:93.46,ma17:94.37,stochK:11.51,stochD:13.07,zoneKey:"zone_oversold",atr:5.45,support:92.48,resistance:101.06,priority:5,noteKey:"brent_note",formatFn:c}],p=[...u].sort((Qe,Ne)=>Qe.priority-Ne.priority),g=[{id:"A",nameKey:"sc_a_name",conditionKey:"sc_a_condition",action:"EnterShort",stop:"76.800",target:"73.936",targetKey:"sc_a_target_label",invalidationKey:"sc_a_invalidation"},{id:"B",nameKey:"sc_b_name",conditionKey:"sc_b_condition",action:"EnterShort",stop:"74.100",target:"72.000 → 58.334",targetKey:"sc_b_target_label",invalidationKey:"sc_b_invalidation"}];function x(Qe,Ne,Et){const Gt=Et-Ne;return Gt===0?50:Math.min(100,Math.max(0,(Qe-Ne)/Gt*100))}function m(Qe){return Qe==="ARMED"?"text-emerald-400":Qe==="IN_POSITION"?"text-[#00F0FF]":"text-amber-400"}function f(Qe){return Qe==="ARMED"?"shadow-[0_0_8px_rgba(52,211,153,0.4)] border-emerald-500/40":Qe==="IN_POSITION"?"shadow-[0_0_8px_rgba(0,240,255,0.4)] border-[#00F0FF]/40":"shadow-[0_0_6px_rgba(251,191,36,0.2)] border-amber-500/30"}function _(Qe){return Qe==="SHORT"?"text-rose-400":"text-emerald-400"}function b(Qe){return Qe==="red"?"report.impulse_red":Qe==="green"?"report.impulse_green":"report.impulse_blue_red"}function M(Qe){return Qe==="red"?"text-rose-500":Qe==="green"?"text-emerald-400":"text-amber-400"}function E(Qe){return Qe==="zone_overbought"?"text-rose-400":Qe==="zone_oversold"?"text-amber-400":"text-[#4CC9F0]"}const R={btc:"Bitcoin",xau:"Ouro / Gold",sp:"S&P 500",bovespa:"Ibovespa",usdbrl:"Dólar / Real",brent:"Petróleo Brent"};Ht();var C=hE(),L=v(C),S=v(L),T=v(S),I=v(T),N=v(I),O=A(I,4),X=v(O),z=A(O,4),V=v(z),H=A(T,2),Q=v(H),ae=A(v(Q),2),ie=v(ae),oe=A(Q,2),we=v(oe),_e=A(oe,2),Oe=v(_e),je=v(Oe),K=A(Oe,2),te=v(K),fe=A(K,2),Be=v(fe),ve=A(_e,2),Ge=v(ve);nd(Ge,{only:["pt","en"]});var dt=A(S,2),We=v(dt);nd(We,{only:["pt","en"]});var Ye=A(L,2),et=v(Ye),ze=v(et),rt=A(v(ze),4),F=v(rt),Ie=A(ze,2),Ce=v(Ie),ke=A(Ce),re=v(ke),D=A(Ie,2),y=v(D),U=A(D,2),$=v(U),j=v($),q=A($,4),le=v(q),ne=A(et,2),ye=A(v(ne),2),He=v(ye),ce=v(He),me=A(He,2);un(me,()=>r()("report.warning_text"));var Pe=A(ne,2),De=v(Pe),pe=v(De),tt=A(De,2);zt(tt,5,()=>p,$t,(Qe,Ne)=>{var Et=aE(),Gt=v(Et),ft=v(Gt),Pt=v(ft),Bt=A(ft,2),It=v(Bt),Lt=A(Gt,2),En=v(Lt),nn=A(Lt,2),Si=v(nn);$e((ur,ki)=>{B(Pt,`#${w(Ne).priority??""}`),Me(Bt,1,`font-bold ${ur??""}`),B(It,w(Ne).status),B(En,w(Ne).symbol),B(Si,ki)},[()=>m(w(Ne).status),()=>r()(`report.${w(Ne).noteKey}`)],ht),se(Qe,Et)});var k=A(Pe,2),xe=v(k),he=v(xe),Re=A(xe,2);zt(Re,5,()=>u,$t,(Qe,Ne)=>{var Et=cE();const Gt=ht(()=>x(w(Ne).close,w(Ne).support,w(Ne).resistance));var ft=v(Et),Pt=v(ft),Bt=v(Pt),It=v(Bt),Lt=v(It),En=A(It,2);{var nn=jt=>{var fn=sE(),Mi=v(fn);$e(pr=>B(Mi,pr),[()=>r()("report.role_primary")],ht),se(jt,fn)},Si=jt=>{var fn=oE(),Mi=v(fn);$e(pr=>B(Mi,pr),[()=>r()("report.role_macro")],ht),se(jt,fn)};nt(En,jt=>{w(Ne).roleKey==="role_primary"?jt(nn):jt(Si,!1)})}var ur=A(Bt,2),ki=v(ur),Lr=A(Pt,2),zi=v(Lr),Ta=v(zi),Dr=A(zi,2),Aa=v(Dr),hr=A(ft,2),fr=v(hr),Nr=v(fr),Ur=A(Nr,2),Ra=v(Ur),Fr=A(fr,2),bs=v(Fr),ys=A(hr,2),Ss=v(ys),Ms=v(Ss),jo=v(Ms),Es=A(Ms,2),Ko=v(Es),Zo=A(Es,2),Jo=v(Zo),Qo=A(Ss,2),Ca=v(Qo),el=A(Ca,2),ws=A(ys,2),Ts=v(ws),Vd=A(v(Ts),2),Mp=v(Vd),Gd=A(Ts,2),Ep=A(v(Gd),2),wp=v(Ep),Tp=A(Gd,2),Ap=A(v(Tp),2),Rp=v(Ap);{var Cp=jt=>{var fn=Li();$e(Mi=>B(fn,Mi),[()=>w(Ne).formatFn(w(Ne).ma17)],ht),se(jt,fn)},Pp=jt=>{var fn=Li("—");se(jt,fn)};nt(Rp,jt=>{w(Ne).ma17!==null?jt(Cp):jt(Pp,!1)})}var Ip=A(ws,2),Wd=v(Ip),tl=A(Wd),Lp=v(tl),Dp=A(tl,2);{var Np=jt=>{var fn=lE(),Mi=A(v(fn)),pr=v(Mi);$e(()=>B(pr,w(Ne).atr)),se(jt,fn)};nt(Dp,jt=>{w(Ne).atr!==null&&jt(Np)})}$e((jt,fn,Mi,pr,Up,Fp,Op,Bp,kp,zp,Hp,Vp,Gp,Wp)=>{Me(Et,1,`border ${jt??""} bg-black/80 backdrop-blur p-5 rounded-sm flex flex-col gap-4 hover:bg-white/[0.02] transition-all`),B(Lt,w(Ne).symbol),B(ki,R[w(Ne).labelKey]),Me(zi,1,`font-bold ${fn??""} tracking-widest`),B(Ta,w(Ne).bias),Me(Dr,1,`tracking-widest ${w(Ne).conviction==="FULL"?"text-white/70":"text-white/40"}`),B(Aa,w(Ne).conviction),Me(Nr,1,`w-1.5 h-1.5 rounded-full ${w(Ne).status==="ARMED"?"bg-emerald-400":w(Ne).status==="IN_POSITION"?"bg-[#00F0FF]":"bg-amber-400"} ${w(Ne).status!=="STANDBY"?"animate-pulse":""}`),Me(Ur,1,`font-bold ${Mi??""}`),B(Ra,w(Ne).status),Me(Fr,1,pr),B(bs,Up),B(jo,`SUP ${Fp??""}`),B(Ko,Op),B(Jo,`RES ${Bp??""}`),Me(Ca,1,`absolute top-0 left-0 h-full rounded-full ${w(Ne).bias==="SHORT"?"bg-rose-500/60":"bg-emerald-500/60"}`),bn(Ca,`width: ${w(Gt)??""}%`),bn(el,`left: calc(${w(Gt)??""}% - 4px)`),Me(Vd,1,`font-bold ${kp??""}`),B(Mp,zp),B(wp,Hp),B(Wd,`${Vp??""}: `),Me(tl,1,Gp),B(Lp,Wp)},[()=>f(w(Ne).status),()=>_(w(Ne).bias),()=>m(w(Ne).status),()=>M(w(Ne).impulse),()=>r()(b(w(Ne).impulse)),()=>w(Ne).formatFn(w(Ne).support),()=>w(Ne).formatFn(w(Ne).close),()=>w(Ne).formatFn(w(Ne).resistance),()=>E(w(Ne).zoneKey),()=>w(Ne).stochK.toFixed(1),()=>w(Ne).stochD.toFixed(1),()=>r()("report.zone_label"),()=>E(w(Ne).zoneKey),()=>r()(`report.${w(Ne).zoneKey}`)],ht),se(Qe,Et)});var ue=A(k,2),ee=v(ue),de=v(ee),Fe=v(de),at=A(ee,2),ot=v(at),Ut=v(ot),Yt=v(Ut),ai=A(Ut,2),jn=v(ai);un(jn,()=>r()("report.tide_text"));var Kn=A(ot,2),si=v(Kn),zn=v(si),oi=A(si,2),Mn=v(oi);un(Mn,()=>r()("report.wave_text"));var li=A(at,2);zt(li,5,()=>g,$t,(Qe,Ne)=>{var Et=dE(),Gt=v(Et),ft=v(Gt),Pt=v(ft),Bt=A(ft,2),It=v(Bt),Lt=A(Gt,2),En=v(Lt),nn=v(En),Si=A(En,2),ur=v(Si),ki=A(Lt,2),Lr=v(ki),zi=v(Lr),Ta=v(zi),Dr=A(zi,2),Aa=v(Dr),hr=A(Lr,2),fr=v(hr),Nr=v(fr),Ur=A(fr,2),Ra=v(Ur),Fr=A(hr,2),bs=v(Fr),ys=v(bs),Ss=A(bs,2),Ms=v(Ss),jo=A(ki,2),Es=A(v(jo)),Ko=v(Es);$e((Zo,Jo,Qo,Ca,el,ws,Ts)=>{B(Pt,`CENÁRIO ${w(Ne).id??""}`),B(It,Zo),B(nn,Jo),B(ur,Qo),B(Ta,Ca),B(Aa,w(Ne).action),B(Nr,el),B(Ra,w(Ne).stop),B(ys,ws),B(Ms,w(Ne).target),B(Ko,Ts)},[()=>r()(`report.${w(Ne).nameKey}`),()=>r()("report.trigger_label"),()=>r()(`report.${w(Ne).conditionKey}`),()=>r()("report.action_label"),()=>r()("report.stop_label"),()=>r()(`report.${w(Ne).targetKey}`),()=>r()(`report.${w(Ne).invalidationKey}`)],ht),se(Qe,Et)});var cr=A(li,2),dr=v(cr),Bi=v(dr),vs=A(dr,2),Ir=v(vs);un(Ir,()=>r()("report.sc_c_text"));var gs=A(cr,2),wa=v(gs),$o=v(wa),Xo=A(wa,2),qo=v(Xo);un(qo,()=>r()("report.macro_implication_text"));var xs=A(ue,2),_s=v(xs),Yo=v(_s),P=A(_s,2);zt(P,4,()=>["2pct","6pct","conv","hier"],$t,(Qe,Ne)=>{var Et=uE(),Gt=v(Et),ft=v(Gt),Pt=A(Gt,2),Bt=v(Pt),It=A(Pt,2),Lt=v(It);$e((En,nn,Si)=>{B(ft,En),B(Bt,nn),B(Lt,Si)},[()=>r()(`report.rule_${Ne}_id`),()=>r()(`report.rule_${Ne}_title`),()=>r()(`report.rule_${Ne}_body`)],ht),se(Qe,Et)});var G=A(xs,2),J=v(G),Z=v(J),Y=A(v(Z),2),Se=A(v(Y)),Le=A(Z,2),Te=A(v(Le),2),Ue=A(v(Te)),Ve=A(Le,2),Je=A(v(Ve),2),Xe=A(v(Je)),lt=A(Ve,2),Mt=A(v(lt),2),Ft=v(Mt),Ot=A(lt,2),wt=A(v(Ot),2),qe=v(wt),yt=A(J,2),vt=v(yt);$e((Qe,Ne,Et,Gt,ft,Pt,Bt,It,Lt,En,nn,Si,ur,ki,Lr,zi,Ta,Dr,Aa,hr,fr,Nr,Ur,Ra,Fr)=>{B(N,Qe),B(X,Ne),B(V,`${Et??""}
          ${l.start} – ${l.end}`),B(ie,l.regime),B(we,`${Gt??""}
          ${l.generated}`),Oe.disabled=w(a)<=s,B(je,ft),B(te,w(a)),fe.disabled=w(a)>=o,B(Be,Pt),bn(Ye,`font-size: ${w(a)??""}px`),B(F,l.week),B(Ce,`${Bt??""} `),B(re,`— ${l.start}–${l.end}`),B(y,l.regimeNote),B(j,`${It??""}: ${l.methodology}`),B(le,`${Lt??""}: MARÉ MME(17)+MACD · ONDA STOCH(5,3,3) · VOL ATR(14)`),B(ce,En),B(pe,nn),B(he,Si),B(Fe,ur),B(Yt,ki),B(zn,Lr),B(Bi,zi),B($o,Ta),B(Yo,Dr),B(Se,` —
            ${Aa??""}`),B(Ue,` —
            ${hr??""}`),B(Xe,` —
            ${fr??""}`),B(Ft,`— ${Nr??""}`),B(qe,`— ${Ur??""}`),B(vt,`NEXUS QUANT · REL-OP-${l.week} · ${Ra??""}
        ${l.generated} · ${Fr??""}
        ${l.start}–${l.end} · ${l.methodology}`)},[()=>r()("report.nav_back"),()=>r()("report.nav_title"),()=>r()("report.nav_week"),()=>r()("report.generated_label"),()=>r()("report.font_decrease"),()=>r()("report.font_increase"),()=>r()("report.page_title"),()=>r()("report.methodology_label"),()=>r()("report.indicators_label"),()=>r()("report.warning_title"),()=>r()("report.priority_title"),()=>r()("report.scoreboard_title"),()=>r()("report.playbook_title"),()=>r()("report.tide_label"),()=>r()("report.wave_label"),()=>r()("report.sc_c_label"),()=>r()("report.macro_implication_title"),()=>r()("report.risk_title"),()=>r()("report.legend_armed"),()=>r()("report.legend_standby"),()=>r()("report.legend_in_position"),()=>r()("report.legend_full"),()=>r()("report.legend_half"),()=>r()("report.generated_label"),()=>r()("report.nav_week")],ht),Nt("click",Oe,()=>ge(a,Math.max(s,w(a)-1))),Nt("click",fe,()=>ge(a,Math.min(o,w(a)+1))),tn(1,C,()=>$n,()=>({duration:300})),se(n,C),Ct(),i()}function pE(n,{from:e,to:t},i={}){var{delay:r=0,duration:a=R=>Math.sqrt(R)*120,easing:s=gM}=i,o=getComputedStyle(n),l=o.transform==="none"?"":o.transform,[c,d]=o.transformOrigin.split(" ").map(parseFloat);c/=n.clientWidth,d/=n.clientHeight;var h=mE(n),u=n.clientWidth/t.width/h,p=n.clientHeight/t.height/h,g=e.left+e.width*c,x=e.top+e.height*d,m=t.left+t.width*c,f=t.top+t.height*d,_=(g-m)*u,b=(x-f)*p,M=e.width/t.width,E=e.height/t.height;return{delay:r,duration:typeof a=="function"?a(Math.sqrt(_*_+b*b)):a,easing:s,css:(R,C)=>{var L=C*_,S=C*b,T=R+C*M,I=R+C*E;return`transform: ${l} translate(${L}px, ${S}px) scale(${T}, ${I});`}}}function mE(n){if("currentCSSZoom"in n)return n.currentCSSZoom;for(var e=n,t=1;e!==null;)t*=+getComputedStyle(e).zoom,e=e.parentElement;return t}var vE=be('<span class="text-[8px] px-1 py-0.2 bg-white text-black font-bold animate-pulse uppercase rounded-sm">NEW</span>'),gE=be('<div><div></div> <div class="pl-2 space-y-1"><div class="flex items-center gap-2"><span> </span> <!></div> <div class="flex items-baseline gap-2"><span class="text-lg font-bold text-white tracking-tight"> </span> <span class="text-white/40 text-[10px]"> </span></div></div> <button class="text-white/20 hover:text-white/60 transition-colors duration-200 p-1 text-xs cursor-pointer focus:outline-none" aria-label="Dismiss alert">✕</button></div>'),xE=be('<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[320px] pointer-events-none font-mono" aria-live="polite"><div class="text-[9px] text-white/40 tracking-[0.25em] flex items-center justify-between px-2 uppercase select-none"><span>:: Whale Liquidation Stream</span> <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div> <span>LIVE</span></div></div> <!></div>');function _E(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ni,"$telemetry",t);let a=Ke([]),s=Ke(null);function o(p){return p>=1e6?`$${(p/1e6).toFixed(2)}M`:p>=1e3?`$${(p/1e3).toFixed(0)}K`:`$${p.toFixed(0)}`}function l(p){return p.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})}function c(p){ge(a,w(a).filter(g=>g.id!==p))}Kt(()=>(r(),w(s),w(a)),()=>{const p=r().latestWhaleLiq;if(p&&p!==w(s)){ge(s,p);const g={...p,id:Math.random().toString(36).substring(2,9),isNew:!0};ge(a,[g,...w(a)].slice(0,4));const x=g.id;setTimeout(()=>{ge(a,w(a).map(m=>m.id===x?{...m,isNew:!1}:m))},1500),setTimeout(()=>{ge(a,w(a).filter(m=>m.id!==x))},8e3)}}),sr(),Ht();var d=or(),h=Pn(d);{var u=p=>{var g=xE(),x=v(g),m=A(x,2);zt(m,9,()=>w(a),f=>f.id,(f,_)=>{var b=gE(),M=v(b),E=A(M,2),R=v(E),C=v(R),L=v(C),S=A(C,2);{var T=H=>{var Q=vE();se(H,Q)};nt(S,H=>{w(_).isNew&&H(T)})}var I=A(R,2),N=v(I),O=v(N),X=A(N,2),z=v(X),V=A(E,2);$e((H,Q)=>{Me(b,1,`pointer-events-auto relative border bg-black/95 p-4 rounded-sm backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-between group transition-all duration-300
          ${w(_).side==="buy"||w(_).side==="BUY"?w(_).isNew?"border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]":"border-rose-950/70 hover:border-rose-800":w(_).isNew?"border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]":"border-emerald-950/70 hover:border-emerald-800"}`),Me(M,1,`absolute left-0 top-0 bottom-0 w-[3px] 
          ${w(_).side==="buy"||w(_).side==="BUY"?"bg-rose-500":"bg-emerald-500"}`),Me(C,1,`text-xs font-bold uppercase tracking-wider
              ${w(_).side==="buy"||w(_).side==="BUY"?"text-rose-400":"text-emerald-400"}`),B(L,w(_).side==="buy"||w(_).side==="BUY"?"▼ SHORT LIQUIDATED":"▲ LONG LIQUIDATED"),B(O,H),B(z,`@ $${Q??""}`)},[()=>o(w(_).usd_value),()=>l(w(_).price)],ht),Nt("click",V,()=>c(w(_).id)),d0(b,()=>pE,()=>({duration:300})),tn(1,b,()=>oo,()=>({x:200,opacity:0,duration:400})),tn(2,b,()=>$n,()=>({duration:300})),se(f,b)}),tn(3,x,()=>$n),se(p,g)};nt(h,p=>{w(a).length>0&&p(u)})}se(n,d),Ct(),i()}var bE=be("<button> </button>"),yE=be('<span class="text-[8px] border border-white/10 bg-white/5 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/50"> </span>'),SE=be('<div class="pt-2"><div class="text-[10px] text-white/40 uppercase mb-1">Active Sources</div> <div class="flex gap-1.5 flex-wrap"></div></div>'),ME=be("<span> </span>"),EE=be('<section id="aggression-speedometer" class="py-24 px-4 bg-transparent font-mono select-none"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: AGGRESSION SPEEDOMETER</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-[10px]"></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-white/10 bg-black/60 p-8 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]"><div class="space-y-4"><div class="font-mono text-xs text-white/30 tracking-widest uppercase">ORDER FLOW STATS</div> <div class="space-y-3.5"><div><div class="text-[10px] text-white/40 uppercase mb-1">Buy Volume (Aggressive)</div> <div class="text-lg font-bold text-accent font-mono"> </div></div> <div><div class="text-[10px] text-white/40 uppercase mb-1">Sell Volume (Aggressive)</div> <div class="text-lg font-bold text-rose-400 font-mono"> </div></div> <div class="border-t border-white/5 pt-3"><div class="text-[10px] text-white/40 uppercase mb-1">Net Delta</div> <div> </div></div></div></div> <div class="flex flex-col items-center justify-center py-4 relative"><svg viewBox="0 0 200 120" class="w-full max-w-[240px] drop-shadow-[0_0_15px_var(--glow-color)]"><defs><linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f43f5e"></stop><stop offset="50%" stop-color="#4b5563"></stop><stop offset="100%" stop-color="#00f0ff"></stop></linearGradient></defs><path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#dialGradient)" stroke-width="12" stroke-linecap="round"></path><line x1="20" y1="100" x2="30" y2="100" stroke="white" stroke-width="2"></line><line x1="100" y1="20" x2="100" y2="30" stroke="white" stroke-width="2"></line><line x1="180" y1="100" x2="170" y2="100" stroke="white" stroke-width="2"></line><g transform="translate(100, 100)"><line x1="0" y1="0" x2="0" y2="-75" stroke="#ffffff" stroke-width="3" stroke-linecap="round"></line><circle cx="0" cy="0" r="8" fill="#ffffff"></circle><circle cx="0" cy="0" r="4" fill="#000000"></circle></g></svg> <div class="text-center mt-3"><span class="text-xs text-white/40 tracking-widest block uppercase mb-1">FLOW SENTIMENT</span> <span> </span></div></div> <div class="space-y-4 md:pl-6 md:border-l border-white/5"><div class="font-mono text-xs text-white/30 tracking-widest uppercase">AGGRESSOR DETAILS</div> <div class="space-y-4"><div><div class="text-[10px] text-white/40 uppercase mb-1">Buy / Sell Ratio</div> <div class="text-2xl font-bold text-white tracking-tight"> </div></div> <div><div class="text-[10px] text-white/40 uppercase mb-1">Buy Percentage</div> <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5 flex"><div class="bg-accent h-full transition-all duration-500"></div></div> <div class="flex justify-between text-[9px] text-white/30 mt-1"><span> </span> <span> </span></div></div> <!></div></div></div> <div class="mt-4 flex items-center justify-between text-[10px] text-white/30 font-mono"><span>* Speedometer updates live every 500ms using consolidated OKX & Bybit trades.</span> <!></div></div></section>');function wE(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ni,"$telemetry",t),a=Ke(),s=Ke(),o=Ke(),l=Ke(),c=Ke(),d=Ke(),h=Ke(),u=Ke(),p=Ke();let g=Ke("15m");function x(M){return M>=1e6?`$${(M/1e6).toFixed(2)}M`:M>=1e3?`$${(M/1e3).toFixed(0)}K`:`$${M.toFixed(0)}`}function m(M){ge(g,M)}Kt(()=>r(),()=>{ge(a,r().btcAggression)}),Kt(()=>(w(a),w(g)),()=>{var M,E;ge(s,((E=(M=w(a))==null?void 0:M.windows)==null?void 0:E.find(R=>R.label.toLowerCase()===w(g).toLowerCase()))??null)}),Kt(()=>w(s),()=>{ge(o,w(s)?w(s).buy_usd:0)}),Kt(()=>w(s),()=>{ge(l,w(s)?w(s).sell_usd:0)}),Kt(()=>w(s),()=>{ge(c,w(s)?w(s).delta:0)}),Kt(()=>w(s),()=>{ge(d,w(s)?w(s).ratio:1)}),Kt(()=>(w(o),w(l)),()=>{ge(h,w(o)+w(l)>0?w(o)/(w(o)+w(l)):.5)}),Kt(()=>w(h),()=>{ge(u,w(h)*180-90)}),Kt(()=>(w(o),w(l),w(h)),()=>{ge(p,w(o)+w(l)===0?{text:"STANDBY",color:"text-white/40",glow:"rgba(255,255,255,0.05)"}:w(h)<.25?{text:"EXTREME PANIC",color:"text-rose-500",glow:"rgba(244,63,94,0.3)"}:w(h)<.45?{text:"SELLING PRESSURE",color:"text-rose-400",glow:"rgba(251,113,133,0.15)"}:w(h)<=.55?{text:"NEUTRAL FLOW",color:"text-white/70",glow:"rgba(255,255,255,0.1)"}:w(h)<=.75?{text:"BUYING PRESSURE",color:"text-accent/80",glow:"rgba(0,240,255,0.15)"}:{text:"EXTREME EUPHORIA",color:"text-accent",glow:"rgba(0,240,255,0.4)"})}),sr(),Ht();var f=or(),_=Pn(f);{var b=M=>{var E=EE(),R=v(E),C=v(R),L=A(v(C),4);zt(L,4,()=>["5m","15m","1h"],$t,($,j)=>{var q=bE(),le=v(q);$e(ne=>{Me(q,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer border-r border-white/10 last:border-0
              ${w(g)===j?"bg-accent/15 text-accent font-bold":"text-white/40"}`),B(le,`${ne??""} WINDOW`)},[()=>j.toUpperCase()],ht),Nt("click",q,()=>m(j)),se($,q)});var S=A(C,2),T=v(S),I=A(v(T),2),N=v(I),O=A(v(N),2),X=v(O),z=A(N,2),V=A(v(z),2),H=v(V),Q=A(z,2),ae=A(v(Q),2),ie=v(ae),oe=A(T,2),we=v(oe),_e=A(v(we),5),Oe=v(_e),je=A(we,2),K=A(v(je),2),te=v(K),fe=A(oe,2),Be=A(v(fe),2),ve=v(Be),Ge=A(v(ve),2),dt=v(Ge),We=A(ve,2),Ye=A(v(We),2),et=v(Ye),ze=A(Ye,2),rt=v(ze),F=v(rt),Ie=A(rt,2),Ce=v(Ie),ke=A(We,2);{var re=$=>{var j=SE(),q=A(v(j),2);zt(q,5,()=>w(a).sources,$t,(le,ne)=>{var ye=yE(),He=v(ye);$e(()=>B(He,w(ne))),se(le,ye)}),se($,j)};nt(ke,$=>{var j;(j=w(a))!=null&&j.sources&&$(re)})}var D=A(S,2),y=A(v(D),2);{var U=$=>{var j=ME(),q=v(j);$e(le=>B(q,`Last update: ${le??""}`),[()=>new Date(w(a).updated_at).toLocaleTimeString()],ht),se($,j)};nt(y,$=>{var j;(j=w(a))!=null&&j.updated_at&&$(U)})}$e(($,j,q,le,ne,ye)=>{B(X,$),B(H,j),Me(ae,1,`text-lg font-bold font-mono ${w(c)>=0?"text-accent":"text-rose-400"}`),B(ie,`${w(c)>=0?"+":""}${q??""}`),bn(we,`--glow-color: ${w(p).glow??""}`),bn(Oe,`transform: rotate(${w(u)??""}deg); transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); transform-origin: 0px 0px`),Me(K,1,`text-base font-bold tracking-widest uppercase ${w(p).color??""} animate-pulse-glow`),B(te,w(p).text),B(dt,`${le??""}x`),bn(et,`width: ${w(h)*100}%`),B(F,`SELL: ${ne??""}%`),B(Ce,`BUY: ${ye??""}%`)},[()=>x(w(o)),()=>x(w(l)),()=>x(w(c)),()=>w(d).toFixed(2),()=>((1-w(h))*100).toFixed(0),()=>(w(h)*100).toFixed(0)],ht),se(M,E)};nt(_,M=>{r().enabled&&M(b)})}se(n,f),Ct(),i()}var TE=be('<div class="py-16 text-center text-white/40 text-sm animate-pulse">FETCHING JETSTREAM MARKET LOGS...</div>'),AE=be('<span class="text-[8px] bg-accent text-black font-bold px-1 py-0.2 rounded-sm animate-pulse select-none">MARKET</span>'),RE=be('<span class="text-[7px] border border-amber-500/40 bg-amber-500/10 text-amber-400 font-bold px-1 py-0.2 rounded-sm tracking-wide select-none animate-pulse-glow" title="Liquidity Wall Detected">WALL</span>'),CE=be('<div><div class="col-span-3 flex items-center gap-2"><span> </span> <span class="text-[10px] text-white/30 font-light">—</span> <span class="text-xs text-white/50"> </span> <!></div> <div class="col-span-7 px-4 relative flex items-center h-5"><div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-0"></div> <div class="absolute right-1/2 top-1 bottom-1 flex justify-end z-10 select-none pointer-events-none" style="width: 50%"><div></div></div> <div class="absolute left-1/2 top-1 bottom-1 flex justify-start z-10 select-none pointer-events-none" style="width: 50%"><div></div></div></div> <div class="col-span-2 text-right flex items-center justify-end gap-2 pr-1"><!> <span> </span></div></div>'),PE=be('<div class="space-y-1.5"></div>'),IE=be('<section id="liquidation-profile" class="py-24 px-4 bg-transparent font-mono select-none"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: LIQUIDATION PROFILE (24H)</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-[10px]"><button>$100 BIN</button> <button>$250 BIN</button> <button>$500 BIN</button></div></div> <div class="border border-white/10 bg-black/60 p-6 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]"><div class="text-[10px] text-white/30 uppercase tracking-widest flex items-center justify-between mb-4 pb-2 border-b border-white/5"><span>PRICE RANGE</span> <div class="flex items-center gap-12 mr-4"><span>SHORT LIQUIDATIONS (RED) / LONG LIQUIDATIONS (GREEN)</span> <span>VOLUME</span></div></div> <!></div> <div class="mt-4 flex items-center justify-between text-[10px] text-white/30 font-mono"><span>* Profiles are generated in real-time by binning JetStream logs.</span> <span> </span></div></div></section>');function LE(n,e){Rt(e,!1);const[t,i]=on(),r=()=>Zt(ni,"$telemetry",t),a="https://sized-wonder-burner-juice.trycloudflare.com",s="Quintuple9-Verse7-Outmatch4-Daintily2-Affidavit2";let o=Ke(250),l=12,c=[],d=Ke([]),h=Ke(1),u=Ke(!0);async function p(){try{ge(u,!0);const L=s?{Authorization:`Bearer ${s}`}:{},T=await(await fetch(`${a}/api/liquidations/BTCUSDT?hours=24`,{headers:L})).json();Array.isArray(T)&&(c=T,g())}catch(L){console.error("Failed to load liquidation history",L)}finally{ge(u,!1)}}function g(){const L=r().btcPrice;if(L===0)return;const S=Math.floor(L/w(o))*w(o),T=Math.floor(l/2),I=[];for(let N=-T;N<=T;N++){const O=S+N*w(o);I.push({priceStart:O,priceEnd:O+w(o),buyValue:0,sellValue:0,totalValue:0,isUpdating:!1})}c.forEach(N=>{const O=N.price,X=I.find(z=>O>=z.priceStart&&O<z.priceEnd);X&&(N.side==="buy"||N.side==="BUY"?X.buyValue+=N.usd_value:X.sellValue+=N.usd_value,X.totalValue+=N.usd_value)}),ge(h,Math.max(...I.map(N=>N.totalValue),1e4)),ge(d,I.reverse())}function x(L){if(w(d).length===0)return;const S=L.price,T=w(d).find(I=>S>=I.priceStart&&S<I.priceEnd);if(T){L.side==="buy"||L.side==="BUY"?T.buyValue+=L.usd_value:T.sellValue+=L.usd_value,T.totalValue+=L.usd_value,T.isUpdating=!0;const I=T.priceStart;setTimeout(()=>{ge(d,w(d).map(N=>N.priceStart===I?{...N,isUpdating:!1}:N))},800),ge(h,Math.max(...w(d).map(N=>N.totalValue),1e4)),ge(d,[...w(d)])}}let m=Ke(0),f=Ke(null);Yn(()=>{p()});function _(L){return L.toLocaleString("en-US",{maximumFractionDigits:0})}function b(L){return L>=1e6?`$${(L/1e6).toFixed(2)}M`:L>=1e3?`$${(L/1e3).toFixed(0)}K`:L===0?"—":`$${L.toFixed(0)}`}function M(L){ge(o,L),g()}Kt(()=>(r(),w(m),w(o)),()=>{const L=r().btcPrice;L>0&&Math.abs(L-w(m))>w(o)*1.5&&(ge(m,L),g())}),Kt(()=>(r(),w(f)),()=>{const L=r().rawLiquidation;L&&L!==w(f)&&(ge(f,L),x(L))}),sr(),Ht();var E=or(),R=Pn(E);{var C=L=>{var S=IE(),T=v(S),I=v(T),N=A(v(I),4),O=v(N),X=A(O,2),z=A(X,2),V=A(I,2),H=A(v(V),2);{var Q=_e=>{var Oe=TE();se(_e,Oe)},ae=_e=>{var Oe=PE();zt(Oe,5,()=>w(d),$t,(je,K)=>{var te=CE();const fe=ht(()=>r().btcPrice>=w(K).priceStart&&r().btcPrice<w(K).priceEnd),Be=ht(()=>w(K).buyValue/w(h)*100),ve=ht(()=>w(K).sellValue/w(h)*100),Ge=ht(()=>w(K).totalValue>=5e4);var dt=v(te),We=v(dt),Ye=v(We),et=A(We,4),ze=v(et),rt=A(et,2);{var F=le=>{var ne=AE();se(le,ne)};nt(rt,le=>{w(fe)&&le(F)})}var Ie=A(dt,2),Ce=A(v(Ie),2),ke=v(Ce),re=A(Ce,2),D=v(re),y=A(Ie,2),U=v(y);{var $=le=>{var ne=RE();se(le,ne)};nt(U,le=>{w(Ge)&&le($)})}var j=A(U,2),q=v(j);$e((le,ne,ye)=>{Me(te,1,`grid grid-cols-12 items-center py-2 px-3 border rounded-sm transition-all duration-300
                ${w(fe)?"bg-accent/5 border-accent/40 shadow-[0_0_15px_rgba(0,240,255,0.06)]":"bg-transparent border-white/[0.03] hover:border-white/10"}
                ${w(K).isUpdating?"border-amber-400 bg-amber-400/5 duration-75":""}`),Me(We,1,`text-sm font-semibold ${w(fe)?"text-accent":"text-white/80"}`),B(Ye,`$${le??""}`),B(ze,`$${ne??""}`),Me(ke,1,`h-full bg-rose-500/80 rounded-l-sm transition-all duration-500 relative
                      ${w(Ge)?"shadow-[0_0_10px_rgba(244,63,94,0.4)] bg-rose-500":""}
                      ${w(K).isUpdating&&w(K).buyValue>0?"bg-rose-400 scale-y-110":""}`),bn(ke,`width: ${w(Be)??""}%`),Me(D,1,`h-full bg-emerald-500/80 rounded-r-sm transition-all duration-500 relative
                      ${w(Ge)?"shadow-[0_0_10px_rgba(16,185,129,0.4)] bg-emerald-500":""}
                      ${w(K).isUpdating&&w(K).sellValue>0?"bg-emerald-400 scale-y-110":""}`),bn(D,`width: ${w(ve)??""}%`),Me(j,1,`text-xs font-semibold ${w(Ge)?"text-white font-bold":"text-white/60"}`),B(q,ye)},[()=>_(w(K).priceStart),()=>_(w(K).priceEnd),()=>b(w(K).totalValue)],ht),se(je,te)}),se(_e,Oe)};nt(H,_e=>{w(u)?_e(Q):_e(ae,!1)})}var ie=A(V,2),oe=A(v(ie),2),we=v(oe);$e(_e=>{Me(O,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${w(o)===100?"bg-accent/15 text-accent font-bold border-r border-white/10":"text-white/40 border-r border-white/10"}`),Me(X,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${w(o)===250?"bg-accent/15 text-accent font-bold border-r border-white/10":"text-white/40 border-r border-white/10"}`),Me(z,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${w(o)===500?"bg-accent/15 text-accent font-bold":"text-white/40"}`),B(we,`Total 24h Volume reference: ${_e??""}`)},[()=>b(w(d).reduce((_e,Oe)=>_e+Oe.totalValue,0))],ht),Nt("click",O,()=>M(100)),Nt("click",X,()=>M(250)),Nt("click",z,()=>M(500)),se(L,S)};nt(R,L=>{L(C)})}se(n,E),Ct(),i()}var DE=be('<div class="w-full relative z-10 pointer-events-auto text-white min-h-screen py-24 px-4"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> [ ← NEXUS QUANT ]</a> <div class="max-w-4xl mx-auto w-full space-y-8"><div class="text-center space-y-4 mb-12"><h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter font-mono">NEXUS TERMINAL</h1> <p class="text-xs text-white/40 tracking-[0.25em] font-mono">:: REAL-TIME QUANTITATIVE TELEMETRY STREAM</p></div> <!> <!> <!></div></div>');function NE(n){var e=DE(),t=v(e),i=v(t);Sp(i,{size:16});var r=A(t,2),a=A(v(r),2);wE(a,{});var s=A(a,2);LE(s,{});var o=A(s,2);_p(o,{}),se(n,e)}var UE=be("<!> <!> <!> <!> <!> <!>",1),FE=be('<main class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"><!> <!> <!> <!></main>');function OE(n,e){Rt(e,!1);let t=Ke(window.location.hash);Yn(()=>{LS();const d=()=>ge(t,window.location.hash);return window.addEventListener("hashchange",d),()=>{window.removeEventListener("hashchange",d),DS()}}),Ht();var i=FE(),r=v(i);AS(r,{});var a=A(r,2);sM(a,{});var s=A(a,2);_E(s,{});var o=A(s,2);{var l=d=>{DM(d,{})},c=(d,h)=>{{var u=g=>{rE(g,{})},p=(g,x)=>{{var m=_=>{fE(_,{})},f=(_,b)=>{{var M=R=>{NE(R)},E=R=>{var C=UE(),L=Pn(C);zS(L,{});var S=A(L,2);VS(S,{});var T=A(S,2);WS(T,{});var I=A(T,2);XS(I,{});var N=A(I,2);_p(N,{showLink:!0});var O=A(N,2);tM(O,{}),se(R,C)};nt(_,R=>{w(t)==="#/terminal"?R(M):R(E,!1)},b)}};nt(g,_=>{w(t)==="#/relatorios"?_(m):_(f,!1)},x)}};nt(d,g=>{w(t)==="#/ark-streams"?g(u):g(p,!1)},h)}};nt(o,d=>{w(t)==="#/presentation"?d(l):d(c,!1)})}se(n,i),Ct()}Ym(OE,{target:document.getElementById("app")});
