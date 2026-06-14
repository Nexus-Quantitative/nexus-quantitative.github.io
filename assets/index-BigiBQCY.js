(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Wd=!1;var rd=Array.isArray,Bp=Array.prototype.indexOf,ad=Array.from,Mh=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Eh=Object.getOwnPropertyDescriptors,kp=Object.prototype,zp=Array.prototype,sd=Object.getPrototypeOf,Xd=Object.isExtensible;function Kr(n){return typeof n=="function"}const on=()=>{};function Hp(n){return typeof(n==null?void 0:n.then)=="function"}function Gp(n){return n()}function $a(n){for(var e=0;e<n.length;e++)n[e]()}const Jn=2,wh=4,Eo=8,wo=16,Ni=32,da=64,ao=128,Nn=256,so=512,xn=1024,pi=2048,ir=4096,Ri=8192,To=16384,Th=32768,ua=65536,Vp=1<<17,Wp=1<<19,Ah=1<<20,$l=1<<21,Qi=Symbol("$state"),Rh=Symbol("legacy props"),Xp=Symbol("");let qa=[],ql=[];function Ch(){var n=qa;qa=[],$a(n)}function $p(){var n=ql;ql=[],$a(n)}function ha(n){qa.length===0&&queueMicrotask(Ch),qa.push(n)}function $d(){qa.length>0&&Ch(),ql.length>0&&$p()}function Ph(n){return n===this.v}function Ih(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function od(n){return!Ih(n,this.v)}function qp(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Yp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function jp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Kp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zp(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function em(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let fa=!1,tm=!1;function nm(){fa=!0}const ld=1,cd=2,Lh=4,im=8,rm=16,am=1,sm=2,om=4,lm=8,cm=16,dm=1,um=2,hm=4,Dh=1,fm=2,sn=Symbol(),pm="http://www.w3.org/1999/xhtml",mm="http://www.w3.org/2000/svg";function Nh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Rt=null;function oo(n){Rt=n}function Bt(n,e=!1,t){var i=Rt={p:Rt,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};fa&&!e&&(Rt.l={s:null,u:null,r1:[],r2:Er(!1)}),dd(()=>{i.d=!0})}function kt(n){const e=Rt;if(e!==null){const s=e.e;if(s!==null){var t=bt,i=Tt;e.e=null;try{for(var r=0;r<s.length;r++){var a=s[r];Vn(a.effect),An(a.reaction),Io(a.fn)}}finally{Vn(t),An(i)}}Rt=e.p,e.m=!0}return{}}function pa(){return!fa||Rt!==null&&Rt.l===null}function gr(n){if(typeof n!="object"||n===null||Qi in n)return n;const e=sd(n);if(e!==kp&&e!==zp)return n;var t=new Map,i=rd(n),r=zi(0),a=Tt,s=o=>{var l=Tt;An(a);var c=o();return An(l),c};return i&&t.set("length",zi(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Jp();var d=t.get(l);return d===void 0?(d=s(()=>zi(c.value)),t.set(l,d)):Fe(d,s(()=>gr(c.value))),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0)l in o&&(t.set(l,s(()=>zi(sn))),Jo(r));else{if(i&&typeof l=="string"){var d=t.get("length"),h=Number(l);Number.isInteger(h)&&h<d.v&&Fe(d,h)}Fe(c,sn),Jo(r)}return!0},get(o,l,c){var p;if(l===Qi)return n;var d=t.get(l),h=l in o;if(d===void 0&&(!h||(p=Ji(o,l))!=null&&p.writable)&&(d=s(()=>zi(gr(h?o[l]:sn))),t.set(l,d)),d!==void 0){var u=L(d);return u===sn?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=L(d))}else if(c===void 0){var h=t.get(l),u=h==null?void 0:h.v;if(h!==void 0&&u!==sn)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===Qi)return!0;var c=t.get(l),d=c!==void 0&&c.v!==sn||Reflect.has(o,l);if(c!==void 0||bt!==null&&(!d||(u=Ji(o,l))!=null&&u.writable)){c===void 0&&(c=s(()=>zi(d?gr(o[l]):sn)),t.set(l,c));var h=L(c);if(h===sn)return!1}return d},set(o,l,c,d){var M;var h=t.get(l),u=l in o;if(i&&l==="length")for(var p=c;p<h.v;p+=1){var v=t.get(p+"");v!==void 0?Fe(v,sn):p in o&&(v=s(()=>zi(sn)),t.set(p+"",v))}h===void 0?(!u||(M=Ji(o,l))!=null&&M.writable)&&(h=s(()=>zi(void 0)),Fe(h,s(()=>gr(c))),t.set(l,h)):(u=h.v!==sn,Fe(h,s(()=>gr(c))));var g=Reflect.getOwnPropertyDescriptor(o,l);if(g!=null&&g.set&&g.set.call(d,c),!u){if(i&&typeof l=="string"){var m=t.get("length"),f=Number(l);Number.isInteger(f)&&f>=m.v&&Fe(m,f+1)}Jo(r)}return!0},ownKeys(o){L(r);var l=Reflect.ownKeys(o).filter(h=>{var u=t.get(h);return u===void 0||u.v!==sn});for(var[c,d]of t)d.v!==sn&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Qp()}})}function Jo(n,e=1){Fe(n,n.v+e)}function Ya(n){var e=Jn|pi,t=Tt!==null&&(Tt.f&Jn)!==0?Tt:null;return bt===null||t!==null&&(t.f&Nn)!==0?e|=Nn:bt.f|=Ah,{ctx:Rt,deps:null,effects:null,equals:Ph,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??bt}}function At(n){const e=Ya(n);return e.equals=od,e}function Uh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)gi(e[t])}}function vm(n){for(var e=n.parent;e!==null;){if((e.f&Jn)===0)return e;e=e.parent}return null}function Fh(n){var e,t=bt;Vn(vm(n));try{Uh(n),e=Xh(n)}finally{Vn(t)}return e}function Oh(n){var e=Fh(n),t=(ji||(n.f&Nn)!==0)&&n.deps!==null?ir:xn;Wn(n,t),n.equals(e)||(n.v=e,n.wv=Vh())}const ja=new Map;function Er(n,e){var t={f:0,v:n,reactions:null,equals:Ph,rv:0,wv:0};return t}function zi(n,e){const t=Er(n);return bm(t),t}function pt(n,e=!1){var i;const t=Er(n);return e||(t.equals=od),fa&&Rt!==null&&Rt.l!==null&&((i=Rt.l).s??(i.s=[])).push(t),t}function Fe(n,e,t=!1){Tt!==null&&!oi&&pa()&&(Tt.f&(Jn|wo))!==0&&!(gn!=null&&gn.includes(n))&&em();let i=t?gr(e):e;return Zr(n,i)}function Zr(n,e){if(!n.equals(e)){var t=n.v;rs?ja.set(n,e):ja.set(n,t),n.v=e,(n.f&Jn)!==0&&((n.f&pi)!==0&&Fh(n),Wn(n,(n.f&Nn)===0?xn:ir)),n.wv=Vh(),Bh(n,pi),pa()&&bt!==null&&(bt.f&xn)!==0&&(bt.f&(Ni|da))===0&&(zn===null?ym([n]):zn.push(n))}return e}function Bh(n,e){var t=n.reactions;if(t!==null)for(var i=pa(),r=t.length,a=0;a<r;a++){var s=t[a],o=s.f;(o&pi)===0&&(!i&&s===bt||(Wn(s,e),(o&(xn|Nn))!==0&&((o&Jn)!==0?Bh(s,ir):Po(s))))}}let gm=!1;var qd,kh,zh,Hh;function _m(){if(qd===void 0){qd=window,kh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;zh=Ji(e,"firstChild").get,Hh=Ji(e,"nextSibling").get,Xd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Xd(t)&&(t.__t=void 0)}}function is(n=""){return document.createTextNode(n)}function Ln(n){return zh.call(n)}function Ao(n){return Hh.call(n)}function x(n,e){return Ln(n)}function mi(n,e){{var t=Ln(n);return t instanceof Comment&&t.data===""?Ao(t):t}}function C(n,e=1,t=!1){let i=n;for(;e--;)i=Ao(i);return i}function xm(n){n.textContent=""}let js=!1,lo=!1,co=null,Mr=!1,rs=!1;function Yd(n){rs=n}let Xa=[];let Tt=null,oi=!1;function An(n){Tt=n}let bt=null;function Vn(n){bt=n}let gn=null;function bm(n){Tt!==null&&Tt.f&$l&&(gn===null?gn=[n]:gn.push(n))}let fn=null,In=0,zn=null;function ym(n){zn=n}let Gh=1,uo=0,ji=!1;function Vh(){return++Gh}function ma(n){var h;var e=n.f;if((e&pi)!==0)return!0;if((e&ir)!==0){var t=n.deps,i=(e&Nn)!==0;if(t!==null){var r,a,s=(e&so)!==0,o=i&&bt!==null&&!ji,l=t.length;if(s||o){var c=n,d=c.parent;for(r=0;r<l;r++)a=t[r],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(c)))&&(a.reactions??(a.reactions=[])).push(c);s&&(c.f^=so),o&&d!==null&&(d.f&Nn)===0&&(c.f^=Nn)}for(r=0;r<l;r++)if(a=t[r],ma(a)&&Oh(a),a.wv>n.wv)return!0}(!i||bt!==null&&!ji)&&Wn(n,xn)}return!1}function Sm(n,e){for(var t=e;t!==null;){if((t.f&ao)!==0)try{t.fn(n);return}catch{t.f^=ao}t=t.parent}throw js=!1,n}function jd(n){return(n.f&To)===0&&(n.parent===null||(n.parent.f&ao)===0)}function Ro(n,e,t,i){if(js){if(t===null&&(js=!1),jd(e))throw n;return}if(t!==null&&(js=!0),Sm(n,e),jd(e))throw n}function Wh(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var a=i[r];gn!=null&&gn.includes(n)||((a.f&Jn)!==0?Wh(a,e,!1):e===a&&(t?Wn(a,pi):(a.f&xn)!==0&&Wn(a,ir),Po(a)))}}function Xh(n){var p;var e=fn,t=In,i=zn,r=Tt,a=ji,s=gn,o=Rt,l=oi,c=n.f;fn=null,In=0,zn=null,ji=(c&Nn)!==0&&(oi||!Mr||Tt===null),Tt=(c&(Ni|da))===0?n:null,gn=null,oo(n.ctx),oi=!1,uo++,n.f|=$l;try{var d=(0,n.fn)(),h=n.deps;if(fn!==null){var u;if(ho(n,In),h!==null&&In>0)for(h.length=In+fn.length,u=0;u<fn.length;u++)h[In+u]=fn[u];else n.deps=h=fn;if(!ji)for(u=In;u<h.length;u++)((p=h[u]).reactions??(p.reactions=[])).push(n)}else h!==null&&In<h.length&&(ho(n,In),h.length=In);if(pa()&&zn!==null&&!oi&&h!==null&&(n.f&(Jn|ir|pi))===0)for(u=0;u<zn.length;u++)Wh(zn[u],n);return r!==null&&r!==n&&(uo++,zn!==null&&(i===null?i=zn:i.push(...zn))),d}finally{fn=e,In=t,zn=i,Tt=r,ji=a,gn=s,oo(o),oi=l,n.f^=$l}}function Mm(n,e){let t=e.reactions;if(t!==null){var i=Bp.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&Jn)!==0&&(fn===null||!fn.includes(e))&&(Wn(e,ir),(e.f&(Nn|so))===0&&(e.f^=so),Uh(e),ho(e,0))}function ho(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Mm(n,t[i])}function Co(n){var e=n.f;if((e&To)===0){Wn(n,xn);var t=bt,i=Rt,r=Mr;bt=n,Mr=!0;try{(e&wo)!==0?Lm(n):jh(n),Yh(n);var a=Xh(n);n.teardown=typeof a=="function"?a:null,n.wv=Gh;var s=n.deps,o;Wd&&tm&&n.f&pi}catch(l){Ro(l,n,t,i||n.ctx)}finally{Mr=r,bt=t}}}function Em(){try{Kp()}catch(n){if(co!==null)Ro(n,co,null);else throw n}}function $h(){var n=Mr;try{var e=0;for(Mr=!0;Xa.length>0;){e++>1e3&&Em();var t=Xa,i=t.length;Xa=[];for(var r=0;r<i;r++){var a=Tm(t[r]);wm(a)}ja.clear()}}finally{lo=!1,Mr=n,co=null}}function wm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(To|Ri))===0)try{ma(i)&&(Co(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?Zh(i):i.fn=null))}catch(r){Ro(r,i,null,i.ctx)}}}function Po(n){lo||(lo=!0,queueMicrotask($h));for(var e=co=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(da|Ni))!==0){if((t&xn)===0)return;e.f^=xn}}Xa.push(e)}function Tm(n){for(var e=[],t=n;t!==null;){var i=t.f,r=(i&(Ni|da))!==0,a=r&&(i&xn)!==0;if(!a&&(i&Ri)===0){if((i&wh)!==0)e.push(t);else if(r)t.f^=xn;else try{ma(t)&&Co(t)}catch(l){Ro(l,t,null,t.ctx)}var s=t.first;if(s!==null){t=s;continue}}var o=t.parent;for(t=t.next;t===null&&o!==null;)t=o.next,o=o.parent}return e}function Am(n){var e;for($d();Xa.length>0;)lo=!0,$h(),$d();return e}function L(n){var e=n.f,t=(e&Jn)!==0;if(Tt!==null&&!oi){if(!(gn!=null&&gn.includes(n))){var i=Tt.deps;n.rv<uo&&(n.rv=uo,fn===null&&i!==null&&i[In]===n?In++:fn===null?fn=[n]:(!ji||!fn.includes(n))&&fn.push(n))}}else if(t&&n.deps===null&&n.effects===null){var r=n,a=r.parent;a!==null&&(a.f&Nn)===0&&(r.f^=Nn)}return t&&(r=n,ma(r)&&Oh(r)),rs&&ja.has(n)?ja.get(n):n.v}function vi(n){var e=oi;try{return oi=!0,n()}finally{oi=e}}const Rm=-7169;function Wn(n,e){n.f=n.f&Rm|e}function fo(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Qi in n)Yl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Qi in t&&Yl(t)}}}function Yl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Yl(n[i],e)}catch{}const t=sd(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Eh(t);for(let r in i){const a=i[r].get;if(a)try{a.call(n)}catch{}}}}}function qh(n){bt===null&&Tt===null&&jp(),Tt!==null&&(Tt.f&Nn)!==0&&bt===null&&Yp(),rs&&qp()}function Cm(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function va(n,e,t,i=!0){var r=bt,a={ctx:Rt,deps:null,nodes_start:null,nodes_end:null,f:n|pi,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Co(a),a.f|=Th}catch(l){throw gi(a),l}else e!==null&&Po(a);var s=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Ah|ao))===0;if(!s&&i&&(r!==null&&Cm(a,r),Tt!==null&&(Tt.f&Jn)!==0)){var o=Tt;(o.effects??(o.effects=[])).push(a)}return a}function dd(n){const e=va(Eo,null,!1);return Wn(e,xn),e.teardown=n,e}function jl(n){qh();var e=bt!==null&&(bt.f&Ni)!==0&&Rt!==null&&!Rt.m;if(e){var t=Rt;(t.e??(t.e=[])).push({fn:n,effect:bt,reaction:Tt})}else{var i=Io(n);return i}}function Pm(n){return qh(),as(n)}function Im(n){const e=va(da,n,!0);return(t={})=>new Promise(i=>{t.outro?er(e,()=>{gi(e),i(void 0)}):(gi(e),i(void 0))})}function Io(n){return va(wh,n,!1)}function Ka(n,e){var t=Rt,i={effect:null,ran:!1};t.l.r1.push(i),i.effect=as(()=>{n(),!i.ran&&(i.ran=!0,Fe(t.l.r2,!0),vi(e))})}function Lo(){var n=Rt;as(()=>{if(L(n.l.r2)){for(var e of n.l.r1){var t=e.effect;(t.f&xn)!==0&&Wn(t,ir),ma(t)&&Co(t),e.ran=!1}n.l.r2.v=!1}})}function as(n){return va(Eo,n,!0)}function Ke(n,e=[],t=Ya){const i=e.map(t);return ga(()=>n(...i.map(L)))}function ga(n,e=0){return va(Eo|wo|e,n,!0)}function Ii(n,e=!0){return va(Eo|Ni,n,!0,e)}function Yh(n){var e=n.teardown;if(e!==null){const t=rs,i=Tt;Yd(!0),An(null);try{e.call(null)}finally{Yd(t),An(i)}}}function jh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;(t.f&da)!==0?t.parent=null:gi(t,e),t=i}}function Lm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Ni)===0&&gi(e),e=t}}function gi(n,e=!0){var t=!1;(e||(n.f&Wp)!==0)&&n.nodes_start!==null&&(Kh(n.nodes_start,n.nodes_end),t=!0),jh(n,e&&!t),ho(n,0),Wn(n,To);var i=n.transitions;if(i!==null)for(const a of i)a.stop();Yh(n);var r=n.parent;r!==null&&r.first!==null&&Zh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Kh(n,e){for(;n!==null;){var t=n===e?null:Ao(n);n.remove(),n=t}}function Zh(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function er(n,e){var t=[];ud(n,t,!0),Jh(t,()=>{gi(n),e&&e()})}function Jh(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function ud(n,e,t){if((n.f&Ri)===0){if(n.f^=Ri,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&e.push(s);for(var i=n.first;i!==null;){var r=i.next,a=(i.f&ua)!==0||(i.f&Ni)!==0;ud(i,e,a?t:!1),i=r}}}function wr(n){Qh(n,!0)}function Qh(n,e){if((n.f&Ri)!==0){n.f^=Ri,(n.f&xn)===0&&(n.f^=xn),ma(n)&&(Wn(n,pi),Po(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ua)!==0||(t.f&Ni)!==0;Qh(t,r?e:!1),t=i}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&a.in()}}function Dm(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Nm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Um(n){return Nm.includes(n)}const Fm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Om(n){return n=n.toLowerCase(),Fm[n]??n}const Bm=["touchstart","touchmove"];function km(n){return Bm.includes(n)}function zm(n,e){if(e){const t=document.body;n.autofocus=!0,ha(()=>{document.activeElement===t&&n.focus()})}}let Kd=!1;function Hm(){Kd||(Kd=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function hd(n){var e=Tt,t=bt;An(null),Vn(null);try{return n()}finally{An(e),Vn(t)}}function Gm(n,e,t,i=t){n.addEventListener(e,()=>hd(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),Hm()}const ef=new Set,Kl=new Set;function tf(n,e,t,i={}){function r(a){if(i.capture||za.call(e,a),!a.cancelBubble)return hd(()=>t==null?void 0:t.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ha(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Ht(n,e,t,i,r){var a={capture:i,passive:r},s=tf(n,e,t,a);(e===document.body||e===window||e===document)&&dd(()=>{e.removeEventListener(n,s,a)})}function Vm(n){for(var e=0;e<n.length;e++)ef.add(n[e]);for(var t of Kl)t(n)}function za(n){var M;var e=this,t=e.ownerDocument,i=n.type,r=((M=n.composedPath)==null?void 0:M.call(n))||[],a=r[0]||n.target,s=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(s=l)}if(a=r[s]||n.target,a!==e){Mh(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=Tt,h=bt;An(null),Vn(null);try{for(var u,p=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+i];if(g!=null&&(!a.disabled||n.target===a))if(rd(g)){var[m,...f]=g;m.apply(a,[n,...f])}else g.call(a,n)}catch(b){u?p.push(b):u=b}if(n.cancelBubble||v===e||v===null)break;a=v}if(u){for(let b of p)queueMicrotask(()=>{throw b});throw u}}finally{n.__root=e,delete n.currentTarget,An(d),Vn(h)}}}function fd(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function tr(n,e){var t=bt;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function Ne(n,e){var t=(e&Dh)!==0,i=(e&fm)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=fd(a?n:"<!>"+n),t||(r=Ln(r)));var s=i||kh?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Ln(s),l=s.lastChild;tr(o,l)}else tr(s,s);return s}}function _a(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&Dh)!==0,a=`<${t}>${i?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=fd(a),l=Ln(o);if(r)for(s=document.createDocumentFragment();Ln(l);)s.appendChild(Ln(l));else s=Ln(l)}var c=s.cloneNode(!0);if(r){var d=Ln(c),h=c.lastChild;tr(d,h)}else tr(c,c);return c}}function Jr(n=""){{var e=is(n+"");return tr(e,e),e}}function Do(){var n=document.createDocumentFragment(),e=document.createComment(""),t=is();return n.append(e,t),tr(e,t),n}function ge(n,e){n!==null&&n.before(e)}let po=!0;function Zd(n){po=n}function z(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Wm(n,e){return Xm(n,e)}const Nr=new Map;function Xm(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:s=!0}){_m();var o=new Set,l=h=>{for(var u=0;u<h.length;u++){var p=h[u];if(!o.has(p)){o.add(p);var v=km(p);e.addEventListener(p,za,{passive:v});var g=Nr.get(p);g===void 0?(document.addEventListener(p,za,{passive:v}),Nr.set(p,1)):Nr.set(p,g+1)}}};l(ad(ef)),Kl.add(l);var c=void 0,d=Im(()=>{var h=t??e.appendChild(is());return Ii(()=>{if(a){Bt({});var u=Rt;u.c=a}r&&(i.$$events=r),po=s,c=n(h,i)||{},po=!0,a&&kt()}),()=>{var v;for(var u of o){e.removeEventListener(u,za);var p=Nr.get(u);--p===0?(document.removeEventListener(u,za),Nr.delete(u)):Nr.set(u,p)}Kl.delete(l),h!==t&&((v=h.parentNode)==null||v.removeChild(h))}});return $m.set(c,d),c}let $m=new WeakMap;const Qo=0,ws=1,el=2;function qm(n,e,t,i,r){var a=n,s=pa(),o=Rt,l=sn,c,d,h,u=(s?Er:pt)(void 0),p=(s?Er:pt)(void 0),v=!1;function g(f,M){v=!0,M&&(Vn(m),An(m),oo(o));try{f===Qo&&t&&(c?wr(c):c=Ii(()=>t(a))),f===ws&&i&&(d?wr(d):d=Ii(()=>i(a,u))),f!==Qo&&c&&er(c,()=>c=null),f!==ws&&d&&er(d,()=>d=null),f!==el&&h&&er(h,()=>h=null)}finally{M&&(oo(null),An(null),Vn(null),Am())}}var m=ga(()=>{if(l!==(l=e())){if(Hp(l)){var f=l;v=!1,f.then(M=>{f===l&&(Zr(u,M),g(ws,!0))},M=>{if(f===l)throw Zr(p,M),g(el,!0),p.v}),ha(()=>{v||g(Qo,!0)})}else Zr(u,l),g(ws,!1);return()=>l=sn}})}function wt(n,e,[t,i]=[0,0]){var r=n,a=null,s=null,o=sn,l=t>0?ua:0,c=!1;const d=(u,p=!0)=>{c=!0,h(p,u)},h=(u,p)=>{o!==(o=u)&&(o?(a?wr(a):p&&(a=Ii(()=>p(r))),s&&er(s,()=>{s=null})):(s?wr(s):p&&(s=Ii(()=>p(r,[t+1,i]))),a&&er(a,()=>{a=null})))};ga(()=>{c=!1,e(d),c||h(null,null)},l)}function Qt(n,e){return e}function Ym(n,e,t,i){for(var r=[],a=e.length,s=0;s<a;s++)ud(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;xm(l),l.append(t),i.clear(),qi(n,e[0].prev,e[a-1].next)}Jh(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(i.delete(d.k),qi(n,d.prev,d.next)),gi(d.e,!o)}})}function Yt(n,e,t,i,r,a=null){var s=n,o={flags:e,items:new Map,first:null},l=(e&Lh)!==0;if(l){var c=n;s=c.appendChild(is())}var d=null,h=!1,u=At(()=>{var p=t();return rd(p)?p:p==null?[]:ad(p)});ga(()=>{var p=L(u),v=p.length;h&&v===0||(h=v===0,jm(p,o,s,r,e,i,t),a!==null&&(v===0?d?wr(d):d=Ii(()=>a(s)):d!==null&&er(d,()=>{d=null})),L(u))})}function jm(n,e,t,i,r,a,s){var $,V,X,G;var o=(r&im)!==0,l=(r&(ld|cd))!==0,c=n.length,d=e.items,h=e.first,u=h,p,v=null,g,m=[],f=[],M,b,E,y;if(o)for(y=0;y<c;y+=1)M=n[y],b=a(M,y),E=d.get(b),E!==void 0&&(($=E.a)==null||$.measure(),(g??(g=new Set)).add(E));for(y=0;y<c;y+=1){if(M=n[y],b=a(M,y),E=d.get(b),E===void 0){var T=u?u.e.nodes_start:t;v=Zm(T,e,v,v===null?e.first:v.next,M,b,y,i,r,s),d.set(b,v),m=[],f=[],u=v.next;continue}if(l&&Km(E,M,y,r),(E.e.f&Ri)!==0&&(wr(E.e),o&&((V=E.a)==null||V.unfix(),(g??(g=new Set)).delete(E))),E!==u){if(p!==void 0&&p.has(E)){if(m.length<f.length){var A=f[0],D;v=A.prev;var S=m[0],w=m[m.length-1];for(D=0;D<m.length;D+=1)Jd(m[D],A,t);for(D=0;D<f.length;D+=1)p.delete(f[D]);qi(e,S.prev,w.next),qi(e,v,S),qi(e,w,A),u=A,v=w,y-=1,m=[],f=[]}else p.delete(E),Jd(E,u,t),qi(e,E.prev,E.next),qi(e,E,v===null?e.first:v.next),qi(e,v,E),v=E;continue}for(m=[],f=[];u!==null&&u.k!==b;)(u.e.f&Ri)===0&&(p??(p=new Set)).add(u),f.push(u),u=u.next;if(u===null)continue;E=u}m.push(E),v=E,u=E.next}if(u!==null||p!==void 0){for(var I=p===void 0?[]:ad(p);u!==null;)(u.e.f&Ri)===0&&I.push(u),u=u.next;var N=I.length;if(N>0){var B=(r&Lh)!==0&&c===0?t:null;if(o){for(y=0;y<N;y+=1)(X=I[y].a)==null||X.measure();for(y=0;y<N;y+=1)(G=I[y].a)==null||G.fix()}Ym(e,I,B,d)}}o&&ha(()=>{var K;if(g!==void 0)for(E of g)(K=E.a)==null||K.apply()}),bt.first=e.first&&e.first.e,bt.last=v&&v.e}function Km(n,e,t,i){(i&ld)!==0&&Zr(n.v,e),(i&cd)!==0?Zr(n.i,t):n.i=t}function Zm(n,e,t,i,r,a,s,o,l,c){var d=(l&ld)!==0,h=(l&rm)===0,u=d?h?pt(r):Er(r):r,p=(l&cd)===0?s:Er(s),v={i:p,v:u,k:a,a:null,e:null,prev:t,next:i};try{return v.e=Ii(()=>o(n,u,p,c),gm),v.e.prev=t&&t.e,v.e.next=i&&i.e,t===null?e.first=v:(t.next=v,t.e.next=v.e),i!==null&&(i.prev=v,i.e.prev=v.e),v}finally{}}function Jd(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=n.e.nodes_start;a!==i;){var s=Ao(a);r.before(a),a=s}}function qi(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ln(n,e,t=!1,i=!1,r=!1){var a=n,s="";Ke(()=>{var o=bt;if(s!==(s=e()??"")&&(o.nodes_start!==null&&(Kh(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),s!=="")){var l=s+"";t?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var c=fd(l);if((t||i)&&(c=Ln(c)),tr(Ln(c),c.lastChild),t||i)for(;Ln(c);)a.before(Ln(c));else a.before(c)}})}function nf(n,e,...t){var i=n,r=on,a;ga(()=>{r!==(r=e())&&(a&&(gi(a),a=null),a=Ii(()=>r(i,...t)))},ua)}function Jm(n,e,t,i,r,a){var s,o,l=null,c=n,d;ga(()=>{const h=e()||null;var u=mm;h!==s&&(d&&(h===null?er(d,()=>{d=null,o=null}):h===o?wr(d):(gi(d),Zd(!1))),h&&h!==o&&(d=Ii(()=>{if(l=document.createElementNS(u,h),tr(l,l),i){var p=l.appendChild(is());i(l,p)}bt.nodes_end=l,c.before(l)})),s=h,s&&(o=s),Zd(!0))},ua)}function rf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=rf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Qm(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=rf(n))&&(i&&(i+=" "),i+=e);return i}function mn(n){return typeof n=="object"?Qm(n):n??""}const Qd=[...` 	
\r\f \v\uFEFF`];function e0(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var o=s+a;(s===0||Qd.includes(i[s-1]))&&(o===i.length||Qd.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function eu(n,e=!1){var t=e?" !important;":";",i="";for(var r in n){var a=n[r];a!=null&&a!==""&&(i+=" "+r+": "+a+t)}return i}function tl(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function t0(n,e){if(e){var t="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(tl)),r&&l.push(...Object.keys(r).map(tl));var c=0,d=-1;const g=n.length;for(var h=0;h<g;h++){var u=n[h];if(o?u==="/"&&n[h-1]==="*"&&(o=!1):a?a===u&&(a=!1):u==="/"&&n[h+1]==="*"?o=!0:u==='"'||u==="'"?a=u:u==="("?s++:u===")"&&s--,!o&&a===!1&&s===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===g-1){if(d!==-1){var p=tl(n.substring(c,d).trim());if(!l.includes(p)){u!==";"&&h++;var v=n.substring(c,h).trim();t+=" "+v+";"}}c=h+1,d=-1}}}}return i&&(t+=eu(i)),r&&(t+=eu(r,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function Ve(n,e,t,i,r,a){var s=n.__className;if(s!==t||s===void 0){var o=e0(t,i,a);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n.__className=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function nl(n,e={},t,i){for(var r in t){var a=t[r];e[r]!==a&&(t[r]==null?n.style.removeProperty(r):n.style.setProperty(r,a,i))}}function Ci(n,e,t,i){var r=n.__style;if(r!==e){var a=t0(e,i);a==null?n.removeAttribute("style"):n.style.cssText=a,n.__style=e}else i&&(Array.isArray(i)?(nl(n,t==null?void 0:t[0],i[0]),nl(n,t==null?void 0:t[1],i[1],"important")):nl(n,t,i));return i}const Pa=Symbol("class"),Ia=Symbol("style"),af=Symbol("is custom element"),sf=Symbol("is html");function n0(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function ve(n,e,t,i){var r=of(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[Xp]=t),t==null?n.removeAttribute(e):typeof t!="string"&&lf(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function tu(n,e,t,i,r=!1){var a=of(n),s=a[af],o=!a[sf],l=e||{},c=n.tagName==="OPTION";for(var d in e)d in t||(t[d]=null);t.class?t.class=mn(t.class):t[Pa]&&(t.class=null),t[Ia]&&(t.style??(t.style=null));var h=lf(n);for(const b in t){let E=t[b];if(c&&b==="value"&&E==null){n.value=n.__value="",l[b]=E;continue}if(b==="class"){var u=n.namespaceURI==="http://www.w3.org/1999/xhtml";Ve(n,u,E,i,e==null?void 0:e[Pa],t[Pa]),l[b]=E,l[Pa]=t[Pa];continue}if(b==="style"){Ci(n,E,e==null?void 0:e[Ia],t[Ia]),l[b]=E,l[Ia]=t[Ia];continue}var p=l[b];if(E!==p){l[b]=E;var v=b[0]+b[1];if(v!=="$$")if(v==="on"){const y={},T="$$"+b;let A=b.slice(2);var g=Um(A);if(Dm(A)&&(A=A.slice(0,-7),y.capture=!0),!g&&p){if(E!=null)continue;n.removeEventListener(A,l[T],y),l[T]=null}if(E!=null)if(g)n[`__${A}`]=E,Vm([A]);else{let D=function(S){l[b].call(this,S)};var M=D;l[T]=tf(A,n,D,y)}else g&&(n[`__${A}`]=void 0)}else if(b==="style")ve(n,b,E);else if(b==="autofocus")zm(n,!!E);else if(!s&&(b==="__value"||b==="value"&&E!=null))n.value=n.__value=E;else if(b==="selected"&&c)n0(n,E);else{var m=b;o||(m=Om(m));var f=m==="defaultValue"||m==="defaultChecked";if(E==null&&!s&&!f)if(a[b]=null,m==="value"||m==="checked"){let y=n;const T=e===void 0;if(m==="value"){let A=y.defaultValue;y.removeAttribute(m),y.defaultValue=A,y.value=y.__value=T?A:null}else{let A=y.defaultChecked;y.removeAttribute(m),y.defaultChecked=A,y.checked=T?A:!1}}else n.removeAttribute(b);else f||h.includes(m)&&(s||typeof E!="string")?n[m]=E:typeof E!="function"&&ve(n,m,E)}}}return l}function of(n){return n.__attributes??(n.__attributes={[af]:n.nodeName.includes("-"),[sf]:n.namespaceURI===pm})}var nu=new Map;function lf(n){var e=nu.get(n.nodeName);if(e)return e;nu.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=Eh(i);for(var a in t)t[a].set&&e.push(a);i=sd(i)}return e}const i0=()=>performance.now(),Ti={tick:n=>requestAnimationFrame(n),now:()=>i0(),tasks:new Set};function cf(){const n=Ti.now();Ti.tasks.forEach(e=>{e.c(n)||(Ti.tasks.delete(e),e.f())}),Ti.tasks.size!==0&&Ti.tick(cf)}function r0(n){let e;return Ti.tasks.size===0&&Ti.tick(cf),{promise:new Promise(t=>{Ti.tasks.add(e={c:n,f:t})}),abort(){Ti.tasks.delete(e)}}}function Ts(n,e){hd(()=>{n.dispatchEvent(new CustomEvent(e))})}function a0(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function iu(n){const e={},t=n.split(";");for(const i of t){const[r,a]=i.split(":");if(!r||a===void 0)break;const s=a0(r.trim());e[s]=a.trim()}return e}const s0=n=>n;function pn(n,e,t,i){var r=(n&dm)!==0,a=(n&um)!==0,s=r&&a,o=(n&hm)!==0,l=s?"both":r?"in":"out",c,d=e.inert,h=e.style.overflow,u,p;function v(){var b=Tt,E=bt;An(null),Vn(null);try{return c??(c=t()(e,(i==null?void 0:i())??{},{direction:l}))}finally{An(b),Vn(E)}}var g={is_global:o,in(){var b;if(e.inert=d,!r){p==null||p.abort(),(b=p==null?void 0:p.reset)==null||b.call(p);return}a||u==null||u.abort(),Ts(e,"introstart"),u=Zl(e,v(),p,1,()=>{Ts(e,"introend"),u==null||u.abort(),u=c=void 0,e.style.overflow=h})},out(b){if(!a){b==null||b(),c=void 0;return}e.inert=!0,Ts(e,"outrostart"),p=Zl(e,v(),u,0,()=>{Ts(e,"outroend"),b==null||b()})},stop:()=>{u==null||u.abort(),p==null||p.abort()}},m=bt;if((m.transitions??(m.transitions=[])).push(g),r&&po){var f=o;if(!f){for(var M=m.parent;M&&(M.f&ua)!==0;)for(;(M=M.parent)&&(M.f&wo)===0;);f=!M||(M.f&Th)!==0}f&&Io(()=>{vi(()=>g.in())})}}function Zl(n,e,t,i,r){var a=i===1;if(Kr(e)){var s,o=!1;return ha(()=>{if(!o){var m=e({direction:a?"in":"out"});s=Zl(n,m,t,i,r)}}),{abort:()=>{o=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r(),{abort:on,deactivate:on,reset:on,t:()=>i};const{delay:l=0,css:c,tick:d,easing:h=s0}=e;var u=[];if(a&&t===void 0&&(d&&d(0,1),c)){var p=iu(c(0,1));u.push(p,p)}var v=()=>1-i,g=n.animate(u,{duration:l});return g.onfinish=()=>{var m=(t==null?void 0:t.t())??1-i;t==null||t.abort();var f=i-m,M=e.duration*Math.abs(f),b=[];if(M>0){var E=!1;if(c)for(var y=Math.ceil(M/16.666666666666668),T=0;T<=y;T+=1){var A=m+f*h(T/y),D=iu(c(A,1-A));b.push(D),E||(E=D.overflow==="hidden")}E&&(n.style.overflow="hidden"),v=()=>{var S=g.currentTime;return m+f*h(S/M)},d&&r0(()=>{if(g.playState!=="running")return!1;var S=v();return d(S,1-S),!0})}g=n.animate(b,{duration:M,fill:"forwards"}),g.onfinish=()=>{v=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=on)},deactivate:()=>{r=on},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>v()}}function o0(n,e,t=e){var i=pa();Gm(n,"input",r=>{var a=r?n.defaultValue:n.value;if(a=il(n)?rl(a):a,t(a),i&&a!==(a=e())){var s=n.selectionStart,o=n.selectionEnd;n.value=a??"",o!==null&&(n.selectionStart=s,n.selectionEnd=Math.min(o,n.value.length))}}),vi(e)==null&&n.value&&t(il(n)?rl(n.value):n.value),as(()=>{var r=e();il(n)&&r===rl(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function il(n){var e=n.type;return e==="number"||e==="range"}function rl(n){return n===""?null:+n}function ru(n,e){return n===e||(n==null?void 0:n[Qi])===e}function Za(n={},e,t,i){return Io(()=>{var r,a;return as(()=>{r=a,a=[],vi(()=>{n!==t(...a)&&(e(n,...a),r&&ru(t(...r),n)&&e(null,...r))})}),()=>{ha(()=>{a&&ru(t(...a),n)&&e(null,...a)})}}),n}function l0(n){return function(...e){var t=e[0];return t.preventDefault(),n==null?void 0:n.apply(this,e)}}function Xt(n=!1){const e=Rt,t=e.l.u;if(!t)return;let i=()=>fo(e.s);if(n){let r=0,a={};const s=Ya(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&r++,r});i=()=>L(s)}t.b.length&&Pm(()=>{au(e,i),$a(t.b)}),jl(()=>{const r=vi(()=>t.m.map(Gp));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&jl(()=>{au(e,i),$a(t.a)})}function au(n,e){if(n.l.s)for(const t of n.l.s)L(t);e()}let As=!1,Jl=Symbol();function bn(n,e,t){const i=t[e]??(t[e]={store:null,source:pt(void 0),unsubscribe:on});if(i.store!==n&&!(Jl in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=on;else{var r=!0;i.unsubscribe=pd(n,a=>{r?i.source.v=a:Fe(i.source,a)}),r=!1}return n&&Jl in t?v0(n):L(i.source)}function c0(n,e){return n.set(e),e}function Rn(){const n={};function e(){dd(()=>{for(var t in n)n[t].unsubscribe();Mh(n,Jl,{enumerable:!1,value:!0})})}return[n,e]}function d0(n){var e=As;try{return As=!1,[n(),As]}finally{As=e}}const u0={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function df(n,e,t){return new Proxy({props:n,exclude:e},u0)}const h0={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Kr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];Kr(r)&&(r=r());const a=Ji(r,e);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Kr(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=Ji(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===Qi||e===Rh)return!1;for(let t of n.props)if(Kr(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props){Kr(t)&&(t=t());for(const i in t)e.includes(i)||e.push(i)}return e}};function f0(...n){return new Proxy({props:n},h0)}function su(n){var e;return((e=n.ctx)==null?void 0:e.d)??!1}function _r(n,e,t,i){var T;var r=(t&am)!==0,a=!fa||(t&sm)!==0,s=(t&lm)!==0,o=(t&cm)!==0,l=!1,c;s?[c,l]=d0(()=>n[e]):c=n[e];var d=Qi in n||Rh in n,h=s&&(((T=Ji(n,e))==null?void 0:T.set)??(d&&e in n&&(A=>n[e]=A)))||void 0,u=i,p=!0,v=!1,g=()=>(v=!0,p&&(p=!1,o?u=vi(i):u=i),u);c===void 0&&i!==void 0&&(h&&a&&Zp(),c=g(),h&&h(c));var m;if(a)m=()=>{var A=n[e];return A===void 0?g():(p=!0,v=!1,A)};else{var f=(r?Ya:At)(()=>n[e]);f.f|=Vp,m=()=>{var A=L(f);return A!==void 0&&(u=void 0),A===void 0?u:A}}if((t&om)===0)return m;if(h){var M=n.$$legacy;return function(A,D){return arguments.length>0?((!a||!D||M||l)&&h(D?m():A),A):m()}}var b=!1,E=pt(c),y=Ya(()=>{var A=m(),D=L(E);return b?(b=!1,D):E.v=A});return s&&L(y),r||(y.equals=od),function(A,D){if(arguments.length>0){const S=D?L(y):a&&s?gr(A):A;if(!y.equals(S)){if(b=!0,Fe(E,S),v&&u!==void 0&&(u=S),su(y))return A;vi(()=>L(y))}return A}return su(y)?y.v:L(y)}}function ei(n){Rt===null&&Nh(),fa&&Rt.l!==null?p0(Rt).m.push(n):jl(()=>{const e=vi(n);if(typeof e=="function")return e})}function uf(n){Rt===null&&Nh(),ei(()=>()=>vi(n))}function p0(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}function pd(n,e,t){if(n==null)return e(void 0),t&&t(void 0),on;const i=vi(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const Ur=[];function m0(n,e){return{subscribe:No(n,e).subscribe}}function No(n,e=on){let t=null;const i=new Set;function r(o){if(Ih(n,o)&&(n=o,t)){const l=!Ur.length;for(const c of i)c[1](),Ur.push(c,n);if(l){for(let c=0;c<Ur.length;c+=2)Ur[c][0](Ur[c+1]);Ur.length=0}}}function a(o){r(o(n))}function s(o,l=on){const c=[o,l];return i.add(c),i.size===1&&(t=e(r,a)||on),o(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:a,subscribe:s}}function xa(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return m0(t,(s,o)=>{let l=!1;const c=[];let d=0,h=on;const u=()=>{if(d)return;h();const v=e(i?c[0]:c,s,o);a?s(v):h=typeof v=="function"?v:on},p=r.map((v,g)=>pd(v,m=>{c[g]=m,d&=~(1<<g),l&&u()},()=>{d|=1<<g}));return l=!0,u(),function(){$a(p),h(),l=!1}})}function v0(n){let e;return pd(n,t=>e=t)(),e}function g0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var al,ou;function _0(){if(ou)return al;ou=1;var n=function(M){return e(M)&&!t(M)};function e(f){return!!f&&typeof f=="object"}function t(f){var M=Object.prototype.toString.call(f);return M==="[object RegExp]"||M==="[object Date]"||a(f)}var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103;function a(f){return f.$$typeof===r}function s(f){return Array.isArray(f)?[]:{}}function o(f,M){return M.clone!==!1&&M.isMergeableObject(f)?g(s(f),f,M):f}function l(f,M,b){return f.concat(M).map(function(E){return o(E,b)})}function c(f,M){if(!M.customMerge)return g;var b=M.customMerge(f);return typeof b=="function"?b:g}function d(f){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(f).filter(function(M){return Object.propertyIsEnumerable.call(f,M)}):[]}function h(f){return Object.keys(f).concat(d(f))}function u(f,M){try{return M in f}catch{return!1}}function p(f,M){return u(f,M)&&!(Object.hasOwnProperty.call(f,M)&&Object.propertyIsEnumerable.call(f,M))}function v(f,M,b){var E={};return b.isMergeableObject(f)&&h(f).forEach(function(y){E[y]=o(f[y],b)}),h(M).forEach(function(y){p(f,y)||(u(f,y)&&b.isMergeableObject(M[y])?E[y]=c(y,b)(f[y],M[y],b):E[y]=o(M[y],b))}),E}function g(f,M,b){b=b||{},b.arrayMerge=b.arrayMerge||l,b.isMergeableObject=b.isMergeableObject||n,b.cloneUnlessOtherwiseSpecified=o;var E=Array.isArray(M),y=Array.isArray(f),T=E===y;return T?E?b.arrayMerge(f,M,b):v(f,M,b):o(M,b)}g.all=function(M,b){if(!Array.isArray(M))throw new Error("first argument should be an array");return M.reduce(function(E,y){return g(E,y,b)},{})};var m=g;return al=m,al}var x0=_0();const b0=g0(x0);var Ql=function(n,e){return Ql=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Ql(n,e)};function Uo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ql(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _t=function(){return _t=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_t.apply(this,arguments)};function y0(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function sl(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}function ol(n,e){var t=e&&e.cache?e.cache:R0,i=e&&e.serializer?e.serializer:T0,r=e&&e.strategy?e.strategy:E0;return r(n,{cache:t,serializer:i})}function S0(n){return n==null||typeof n=="number"||typeof n=="boolean"}function M0(n,e,t,i){var r=S0(i)?i:t(i),a=e.get(r);return typeof a>"u"&&(a=n.call(this,i),e.set(r,a)),a}function hf(n,e,t){var i=Array.prototype.slice.call(arguments,3),r=t(i),a=e.get(r);return typeof a>"u"&&(a=n.apply(this,i),e.set(r,a)),a}function ff(n,e,t,i,r){return t.bind(e,n,i,r)}function E0(n,e){var t=n.length===1?M0:hf;return ff(n,this,t,e.cache.create(),e.serializer)}function w0(n,e){return ff(n,this,hf,e.cache.create(),e.serializer)}var T0=function(){return JSON.stringify(arguments)},A0=function(){function n(){this.cache=Object.create(null)}return n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t},n}(),R0={create:function(){return new A0}},ll={variadic:w0},ut;(function(n){n[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ut||(ut={}));var Ft;(function(n){n[n.literal=0]="literal",n[n.argument=1]="argument",n[n.number=2]="number",n[n.date=3]="date",n[n.time=4]="time",n[n.select=5]="select",n[n.plural=6]="plural",n[n.pound=7]="pound",n[n.tag=8]="tag"})(Ft||(Ft={}));var ta;(function(n){n[n.number=0]="number",n[n.dateTime=1]="dateTime"})(ta||(ta={}));function lu(n){return n.type===Ft.literal}function C0(n){return n.type===Ft.argument}function pf(n){return n.type===Ft.number}function mf(n){return n.type===Ft.date}function vf(n){return n.type===Ft.time}function gf(n){return n.type===Ft.select}function _f(n){return n.type===Ft.plural}function P0(n){return n.type===Ft.pound}function xf(n){return n.type===Ft.tag}function bf(n){return!!(n&&typeof n=="object"&&n.type===ta.number)}function ec(n){return!!(n&&typeof n=="object"&&n.type===ta.dateTime)}var yf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,I0=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function L0(n){var e={};return n.replace(I0,function(t){var i=t.length;switch(t[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var D0=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function N0(n){if(n.length===0)throw new Error("Number skeleton cannot be empty");for(var e=n.split(D0).filter(function(u){return u.length>0}),t=[],i=0,r=e;i<r.length;i++){var a=r[i],s=a.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var o=s[0],l=s.slice(1),c=0,d=l;c<d.length;c++){var h=d[c];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function U0(n){return n.replace(/^(.*?)-/,"")}var cu=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Sf=/^(@+)?(\+|#+)?[rs]?$/g,F0=/(\*)(0+)|(#+)(0+)|(0+)/g,Mf=/^(0+)$/;function du(n){var e={};return n[n.length-1]==="r"?e.roundingPriority="morePrecision":n[n.length-1]==="s"&&(e.roundingPriority="lessPrecision"),n.replace(Sf,function(t,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function Ef(n){switch(n){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function O0(n){var e;if(n[0]==="E"&&n[1]==="E"?(e={notation:"engineering"},n=n.slice(2)):n[0]==="E"&&(e={notation:"scientific"},n=n.slice(1)),e){var t=n.slice(0,2);if(t==="+!"?(e.signDisplay="always",n=n.slice(2)):t==="+?"&&(e.signDisplay="exceptZero",n=n.slice(2)),!Mf.test(n))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=n.length}return e}function uu(n){var e={},t=Ef(n);return t||e}function B0(n){for(var e={},t=0,i=n;t<i.length;t++){var r=i[t];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=U0(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=_t(_t(_t({},e),{notation:"scientific"}),r.options.reduce(function(l,c){return _t(_t({},l),uu(c))},{}));continue;case"engineering":e=_t(_t(_t({},e),{notation:"engineering"}),r.options.reduce(function(l,c){return _t(_t({},l),uu(c))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(F0,function(l,c,d,h,u,p){if(c)e.minimumIntegerDigits=d.length;else{if(h&&u)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Mf.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(cu.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(cu,function(l,c,d,h,u,p){return d==="*"?e.minimumFractionDigits=c.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:u&&p?(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length+p.length):(e.minimumFractionDigits=c.length,e.maximumFractionDigits=c.length),""});var a=r.options[0];a==="w"?e=_t(_t({},e),{trailingZeroDisplay:"stripIfInteger"}):a&&(e=_t(_t({},e),du(a)));continue}if(Sf.test(r.stem)){e=_t(_t({},e),du(r.stem));continue}var s=Ef(r.stem);s&&(e=_t(_t({},e),s));var o=O0(r.stem);o&&(e=_t(_t({},e),o))}return e}var Rs={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function k0(n,e){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);if(r==="j"){for(var a=0;i+1<n.length&&n.charAt(i+1)===r;)a++,i++;var s=1+(a&1),o=a<2?1:3+(a>>1),l="a",c=z0(e);for((c=="H"||c=="k")&&(o=0);o-- >0;)t+=l;for(;s-- >0;)t=c+t}else r==="J"?t+="H":t+=r}return t}function z0(n){var e=n.hourCycle;if(e===void 0&&n.hourCycles&&n.hourCycles.length&&(e=n.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=n.language,i;t!=="root"&&(i=n.maximize().region);var r=Rs[i||""]||Rs[t||""]||Rs["".concat(t,"-001")]||Rs["001"];return r[0]}var cl,H0=new RegExp("^".concat(yf.source,"*")),G0=new RegExp("".concat(yf.source,"*$"));function ft(n,e){return{start:n,end:e}}var V0=!!String.prototype.startsWith&&"_a".startsWith("a",1),W0=!!String.fromCodePoint,X0=!!Object.fromEntries,$0=!!String.prototype.codePointAt,q0=!!String.prototype.trimStart,Y0=!!String.prototype.trimEnd,j0=!!Number.isSafeInteger,K0=j0?Number.isSafeInteger:function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n&&Math.abs(n)<=9007199254740991},tc=!0;try{var Z0=Tf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");tc=((cl=Z0.exec("a"))===null||cl===void 0?void 0:cl[0])==="a"}catch{tc=!1}var hu=V0?function(e,t,i){return e.startsWith(t,i)}:function(e,t,i){return e.slice(i,i+t.length)===t},nc=W0?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i="",r=e.length,a=0,s;r>a;){if(s=e[a++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},fu=X0?Object.fromEntries:function(e){for(var t={},i=0,r=e;i<r.length;i++){var a=r[i],s=a[0],o=a[1];t[s]=o}return t},wf=$0?function(e,t){return e.codePointAt(t)}:function(e,t){var i=e.length;if(!(t<0||t>=i)){var r=e.charCodeAt(t),a;return r<55296||r>56319||t+1===i||(a=e.charCodeAt(t+1))<56320||a>57343?r:(r-55296<<10)+(a-56320)+65536}},J0=q0?function(e){return e.trimStart()}:function(e){return e.replace(H0,"")},Q0=Y0?function(e){return e.trimEnd()}:function(e){return e.replace(G0,"")};function Tf(n,e){return new RegExp(n,e)}var ic;if(tc){var pu=Tf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ic=function(e,t){var i;pu.lastIndex=t;var r=pu.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else ic=function(e,t){for(var i=[];;){var r=wf(e,t);if(r===void 0||Af(r)||iv(r))break;i.push(r),t+=r>=65536?2:1}return nc.apply(void 0,i)};var ev=function(){function n(e,t){t===void 0&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return n.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},n.prototype.parseMessage=function(e,t,i){for(var r=[];!this.isEOF();){var a=this.char();if(a===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(a===125&&e>0)break;if(a===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),r.push({type:Ft.pound,location:ft(o,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(ut.UNMATCHED_CLOSING_TAG,ft(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&rc(this.peek()||0)){var s=this.parseTag(e,t);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,t);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},n.prototype.parseTag=function(e,t){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ft.literal,value:"<".concat(r,"/>"),location:ft(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0);if(a.err)return a;var s=a.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!rc(this.char()))return this.error(ut.INVALID_TAG,ft(o,this.clonePosition()));var l=this.clonePosition(),c=this.parseTagName();return r!==c?this.error(ut.UNMATCHED_CLOSING_TAG,ft(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ft.tag,value:r,children:s,location:ft(i,this.clonePosition())},err:null}:this.error(ut.INVALID_TAG,ft(o,this.clonePosition())))}else return this.error(ut.UNCLOSED_TAG,ft(i,this.clonePosition()))}else return this.error(ut.INVALID_TAG,ft(i,this.clonePosition()))},n.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&nv(this.char());)this.bump();return this.message.slice(e,this.offset())},n.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),r="";;){var a=this.tryParseQuote(t);if(a){r+=a;continue}var s=this.tryParseUnquoted(e,t);if(s){r+=s;continue}var o=this.tryParseLeftAngleBracket();if(o){r+=o;continue}break}var l=ft(i,this.clonePosition());return{val:{type:Ft.literal,value:r,location:l},err:null}},n.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!tv(this.peek()||0))?(this.bump(),"<"):null},n.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(i);this.bump()}return nc.apply(void 0,t)},n.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(t==="plural"||t==="selectordinal")||i===125&&e>0?null:(this.bump(),nc(i))},n.prototype.parseArgument=function(e,t){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,ft(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ut.EMPTY_ARGUMENT,ft(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(ut.MALFORMED_ARGUMENT,ft(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,ft(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ft.argument,value:r,location:ft(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,ft(i,this.clonePosition())):this.parseArgumentOptions(e,t,r,i);default:return this.error(ut.MALFORMED_ARGUMENT,ft(i,this.clonePosition()))}},n.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),i=ic(this.message,t),r=t+i.length;this.bumpTo(r);var a=this.clonePosition(),s=ft(e,a);return{value:i,location:s}},n.prototype.parseArgumentOptions=function(e,t,i,r){var a,s=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(ut.EXPECT_ARGUMENT_TYPE,ft(s,l));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var u=Q0(h.val);if(u.length===0)return this.error(ut.EXPECT_ARGUMENT_STYLE,ft(this.clonePosition(),this.clonePosition()));var p=ft(d,this.clonePosition());c={style:u,styleLocation:p}}var v=this.tryParseArgumentClose(r);if(v.err)return v;var g=ft(r,this.clonePosition());if(c&&hu(c==null?void 0:c.style,"::",0)){var m=J0(c.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(m,c.styleLocation);return h.err?h:{val:{type:Ft.number,value:i,location:g,style:h.val},err:null}}else{if(m.length===0)return this.error(ut.EXPECT_DATE_TIME_SKELETON,g);var f=m;this.locale&&(f=k0(m,this.locale));var u={type:ta.dateTime,pattern:f,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?L0(f):{}},M=o==="date"?Ft.date:Ft.time;return{val:{type:M,value:i,location:g,style:u},err:null}}}return{val:{type:o==="number"?Ft.number:o==="date"?Ft.date:Ft.time,value:i,location:g,style:(a=c==null?void 0:c.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ut.EXPECT_SELECT_ARGUMENT_OPTIONS,ft(b,_t({},b)));this.bumpSpace();var E=this.parseIdentifierIfPossible(),y=0;if(o!=="select"&&E.value==="offset"){if(!this.bumpIf(":"))return this.error(ut.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ft(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ut.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ut.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),E=this.parseIdentifierIfPossible(),y=h.val}var T=this.tryParsePluralOrSelectOptions(e,o,t,E);if(T.err)return T;var v=this.tryParseArgumentClose(r);if(v.err)return v;var A=ft(r,this.clonePosition());return o==="select"?{val:{type:Ft.select,value:i,options:fu(T.val),location:A},err:null}:{val:{type:Ft.plural,value:i,options:fu(T.val),offset:y,pluralType:o==="plural"?"cardinal":"ordinal",location:A},err:null}}default:return this.error(ut.INVALID_ARGUMENT_TYPE,ft(s,l))}},n.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,ft(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},n.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ut.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ft(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},n.prototype.parseNumberSkeletonFromString=function(e,t){var i=[];try{i=N0(e)}catch{return this.error(ut.INVALID_NUMBER_SKELETON,t)}return{val:{type:ta.number,tokens:i,location:t,parsedOptions:this.shouldParseSkeletons?B0(i):{}},err:null}},n.prototype.tryParsePluralOrSelectOptions=function(e,t,i,r){for(var a,s=!1,o=[],l=new Set,c=r.value,d=r.location;;){if(c.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var u=this.tryParseDecimalInteger(ut.EXPECT_PLURAL_ARGUMENT_SELECTOR,ut.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;d=ft(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}else break}if(l.has(c))return this.error(t==="select"?ut.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ut.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);c==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ut.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ut.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ft(this.clonePosition(),this.clonePosition()));var v=this.parseMessage(e+1,t,i);if(v.err)return v;var g=this.tryParseArgumentClose(p);if(g.err)return g;o.push([c,{value:v.val,location:ft(p,this.clonePosition())}]),l.add(c),this.bumpSpace(),a=this.parseIdentifierIfPossible(),c=a.value,d=a.location}return o.length===0?this.error(t==="select"?ut.EXPECT_SELECT_ARGUMENT_SELECTOR:ut.EXPECT_PLURAL_ARGUMENT_SELECTOR,ft(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(ut.MISSING_OTHER_CLAUSE,ft(this.clonePosition(),this.clonePosition())):{val:o,err:null}},n.prototype.tryParseDecimalInteger=function(e,t){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var a=!1,s=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)a=!0,s=s*10+(o-48),this.bump();else break}var l=ft(r,this.clonePosition());return a?(s*=i,K0(s)?{val:s,err:null}:this.error(t,l)):this.error(e,l)},n.prototype.offset=function(){return this.position.offset},n.prototype.isEOF=function(){return this.offset()===this.message.length},n.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},n.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=wf(this.message,e);if(t===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},n.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},n.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},n.prototype.bumpIf=function(e){if(hu(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},n.prototype.bumpUntil=function(e){var t=this.offset(),i=this.message.indexOf(e,t);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},n.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},n.prototype.bumpSpace=function(){for(;!this.isEOF()&&Af(this.char());)this.bump()},n.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),i=this.message.charCodeAt(t+(e>=65536?2:1));return i??null},n}();function rc(n){return n>=97&&n<=122||n>=65&&n<=90}function tv(n){return rc(n)||n===47}function nv(n){return n===45||n===46||n>=48&&n<=57||n===95||n>=97&&n<=122||n>=65&&n<=90||n==183||n>=192&&n<=214||n>=216&&n<=246||n>=248&&n<=893||n>=895&&n<=8191||n>=8204&&n<=8205||n>=8255&&n<=8256||n>=8304&&n<=8591||n>=11264&&n<=12271||n>=12289&&n<=55295||n>=63744&&n<=64975||n>=65008&&n<=65533||n>=65536&&n<=983039}function Af(n){return n>=9&&n<=13||n===32||n===133||n>=8206&&n<=8207||n===8232||n===8233}function iv(n){return n>=33&&n<=35||n===36||n>=37&&n<=39||n===40||n===41||n===42||n===43||n===44||n===45||n>=46&&n<=47||n>=58&&n<=59||n>=60&&n<=62||n>=63&&n<=64||n===91||n===92||n===93||n===94||n===96||n===123||n===124||n===125||n===126||n===161||n>=162&&n<=165||n===166||n===167||n===169||n===171||n===172||n===174||n===176||n===177||n===182||n===187||n===191||n===215||n===247||n>=8208&&n<=8213||n>=8214&&n<=8215||n===8216||n===8217||n===8218||n>=8219&&n<=8220||n===8221||n===8222||n===8223||n>=8224&&n<=8231||n>=8240&&n<=8248||n===8249||n===8250||n>=8251&&n<=8254||n>=8257&&n<=8259||n===8260||n===8261||n===8262||n>=8263&&n<=8273||n===8274||n===8275||n>=8277&&n<=8286||n>=8592&&n<=8596||n>=8597&&n<=8601||n>=8602&&n<=8603||n>=8604&&n<=8607||n===8608||n>=8609&&n<=8610||n===8611||n>=8612&&n<=8613||n===8614||n>=8615&&n<=8621||n===8622||n>=8623&&n<=8653||n>=8654&&n<=8655||n>=8656&&n<=8657||n===8658||n===8659||n===8660||n>=8661&&n<=8691||n>=8692&&n<=8959||n>=8960&&n<=8967||n===8968||n===8969||n===8970||n===8971||n>=8972&&n<=8991||n>=8992&&n<=8993||n>=8994&&n<=9e3||n===9001||n===9002||n>=9003&&n<=9083||n===9084||n>=9085&&n<=9114||n>=9115&&n<=9139||n>=9140&&n<=9179||n>=9180&&n<=9185||n>=9186&&n<=9254||n>=9255&&n<=9279||n>=9280&&n<=9290||n>=9291&&n<=9311||n>=9472&&n<=9654||n===9655||n>=9656&&n<=9664||n===9665||n>=9666&&n<=9719||n>=9720&&n<=9727||n>=9728&&n<=9838||n===9839||n>=9840&&n<=10087||n===10088||n===10089||n===10090||n===10091||n===10092||n===10093||n===10094||n===10095||n===10096||n===10097||n===10098||n===10099||n===10100||n===10101||n>=10132&&n<=10175||n>=10176&&n<=10180||n===10181||n===10182||n>=10183&&n<=10213||n===10214||n===10215||n===10216||n===10217||n===10218||n===10219||n===10220||n===10221||n===10222||n===10223||n>=10224&&n<=10239||n>=10240&&n<=10495||n>=10496&&n<=10626||n===10627||n===10628||n===10629||n===10630||n===10631||n===10632||n===10633||n===10634||n===10635||n===10636||n===10637||n===10638||n===10639||n===10640||n===10641||n===10642||n===10643||n===10644||n===10645||n===10646||n===10647||n===10648||n>=10649&&n<=10711||n===10712||n===10713||n===10714||n===10715||n>=10716&&n<=10747||n===10748||n===10749||n>=10750&&n<=11007||n>=11008&&n<=11055||n>=11056&&n<=11076||n>=11077&&n<=11078||n>=11079&&n<=11084||n>=11085&&n<=11123||n>=11124&&n<=11125||n>=11126&&n<=11157||n===11158||n>=11159&&n<=11263||n>=11776&&n<=11777||n===11778||n===11779||n===11780||n===11781||n>=11782&&n<=11784||n===11785||n===11786||n===11787||n===11788||n===11789||n>=11790&&n<=11798||n===11799||n>=11800&&n<=11801||n===11802||n===11803||n===11804||n===11805||n>=11806&&n<=11807||n===11808||n===11809||n===11810||n===11811||n===11812||n===11813||n===11814||n===11815||n===11816||n===11817||n>=11818&&n<=11822||n===11823||n>=11824&&n<=11833||n>=11834&&n<=11835||n>=11836&&n<=11839||n===11840||n===11841||n===11842||n>=11843&&n<=11855||n>=11856&&n<=11857||n===11858||n>=11859&&n<=11903||n>=12289&&n<=12291||n===12296||n===12297||n===12298||n===12299||n===12300||n===12301||n===12302||n===12303||n===12304||n===12305||n>=12306&&n<=12307||n===12308||n===12309||n===12310||n===12311||n===12312||n===12313||n===12314||n===12315||n===12316||n===12317||n>=12318&&n<=12319||n===12320||n===12336||n===64830||n===64831||n>=65093&&n<=65094}function ac(n){n.forEach(function(e){if(delete e.location,gf(e)||_f(e))for(var t in e.options)delete e.options[t].location,ac(e.options[t].value);else pf(e)&&bf(e.style)||(mf(e)||vf(e))&&ec(e.style)?delete e.style.location:xf(e)&&ac(e.children)})}function rv(n,e){e===void 0&&(e={}),e=_t({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var t=new ev(n,e).parse();if(t.err){var i=SyntaxError(ut[t.err.kind]);throw i.location=t.err.location,i.originalMessage=t.err.message,i}return e!=null&&e.captureLocation||ac(t.val),t.val}var na;(function(n){n.MISSING_VALUE="MISSING_VALUE",n.INVALID_VALUE="INVALID_VALUE",n.MISSING_INTL_API="MISSING_INTL_API"})(na||(na={}));var Fo=function(n){Uo(e,n);function e(t,i,r){var a=n.call(this,t)||this;return a.code=i,a.originalMessage=r,a}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),mu=function(n){Uo(e,n);function e(t,i,r,a){return n.call(this,'Invalid values for "'.concat(t,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),na.INVALID_VALUE,a)||this}return e}(Fo),av=function(n){Uo(e,n);function e(t,i,r){return n.call(this,'Value for "'.concat(t,'" must be of type ').concat(i),na.INVALID_VALUE,r)||this}return e}(Fo),sv=function(n){Uo(e,n);function e(t,i){return n.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(i,'"'),na.MISSING_VALUE,i)||this}return e}(Fo),hn;(function(n){n[n.literal=0]="literal",n[n.object=1]="object"})(hn||(hn={}));function ov(n){return n.length<2?n:n.reduce(function(e,t){var i=e[e.length-1];return!i||i.type!==hn.literal||t.type!==hn.literal?e.push(t):i.value+=t.value,e},[])}function lv(n){return typeof n=="function"}function Ks(n,e,t,i,r,a,s){if(n.length===1&&lu(n[0]))return[{type:hn.literal,value:n[0].value}];for(var o=[],l=0,c=n;l<c.length;l++){var d=c[l];if(lu(d)){o.push({type:hn.literal,value:d.value});continue}if(P0(d)){typeof a=="number"&&o.push({type:hn.literal,value:t.getNumberFormat(e).format(a)});continue}var h=d.value;if(!(r&&h in r))throw new sv(h,s);var u=r[h];if(C0(d)){(!u||typeof u=="string"||typeof u=="number")&&(u=typeof u=="string"||typeof u=="number"?String(u):""),o.push({type:typeof u=="string"?hn.literal:hn.object,value:u});continue}if(mf(d)){var p=typeof d.style=="string"?i.date[d.style]:ec(d.style)?d.style.parsedOptions:void 0;o.push({type:hn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(vf(d)){var p=typeof d.style=="string"?i.time[d.style]:ec(d.style)?d.style.parsedOptions:i.time.medium;o.push({type:hn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(pf(d)){var p=typeof d.style=="string"?i.number[d.style]:bf(d.style)?d.style.parsedOptions:void 0;p&&p.scale&&(u=u*(p.scale||1)),o.push({type:hn.literal,value:t.getNumberFormat(e,p).format(u)});continue}if(xf(d)){var v=d.children,g=d.value,m=r[g];if(!lv(m))throw new av(g,"function",s);var f=Ks(v,e,t,i,r,a),M=m(f.map(function(y){return y.value}));Array.isArray(M)||(M=[M]),o.push.apply(o,M.map(function(y){return{type:typeof y=="string"?hn.literal:hn.object,value:y}}))}if(gf(d)){var b=d.options[u]||d.options.other;if(!b)throw new mu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Ks(b.value,e,t,i,r));continue}if(_f(d)){var b=d.options["=".concat(u)];if(!b){if(!Intl.PluralRules)throw new Fo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,na.MISSING_INTL_API,s);var E=t.getPluralRules(e,{type:d.pluralType}).select(u-(d.offset||0));b=d.options[E]||d.options.other}if(!b)throw new mu(d.value,u,Object.keys(d.options),s);o.push.apply(o,Ks(b.value,e,t,i,r,u-(d.offset||0)));continue}}return ov(o)}function cv(n,e){return e?_t(_t(_t({},n||{}),e||{}),Object.keys(n).reduce(function(t,i){return t[i]=_t(_t({},n[i]),e[i]||{}),t},{})):n}function dv(n,e){return e?Object.keys(n).reduce(function(t,i){return t[i]=cv(n[i],e[i]),t},_t({},n)):n}function dl(n){return{create:function(){return{get:function(e){return n[e]},set:function(e,t){n[e]=t}}}}}function uv(n){return n===void 0&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.number),strategy:ll.variadic}),getDateTimeFormat:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.dateTime),strategy:ll.variadic}),getPluralRules:ol(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,sl([void 0],t,!1)))},{cache:dl(n.pluralRules),strategy:ll.variadic})}}var Rf=function(){function n(e,t,i,r){t===void 0&&(t=n.defaultLocale);var a=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var c=a.formatToParts(l);if(c.length===1)return c[0].value;var d=c.reduce(function(h,u){return!h.length||u.type!==hn.literal||typeof h[h.length-1]!="string"?h.push(u.value):h[h.length-1]+=u.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return Ks(a.ast,a.locales,a.formatters,a.formats,l,void 0,a.message)},this.resolvedOptions=function(){var l;return{locale:((l=a.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},this.locales=t,this.resolvedLocale=n.resolveLocale(t),typeof e=="string"){if(this.message=e,!n.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var o=y0(s,["formatters"]);this.ast=n.__parse(e,_t(_t({},o),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=dv(n.formats,i),this.formatters=r&&r.formatters||uv(this.formatterCache)}return Object.defineProperty(n,"defaultLocale",{get:function(){return n.memoizedDefaultLocale||(n.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),n.memoizedDefaultLocale},enumerable:!1,configurable:!0}),n.memoizedDefaultLocale=null,n.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},n.__parse=rv,n.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},n}();function hv(n,e){if(e==null)return;if(e in n)return n[e];const t=e.split(".");let i=n;for(let r=0;r<t.length;r++)if(typeof i=="object"){if(r>0){const a=t.slice(r,t.length).join(".");if(a in i){i=i[a];break}}i=i[t[r]]}else i=void 0;return i}const Ki={},fv=(n,e,t)=>t&&(e in Ki||(Ki[e]={}),n in Ki[e]||(Ki[e][n]=t),t),Cf=(n,e)=>{if(e==null)return;if(e in Ki&&n in Ki[e])return Ki[e][n];const t=os(e);for(let i=0;i<t.length;i++){const r=t[i],a=mv(r,n);if(a)return fv(n,e,a)}};let md;const ss=No({});function pv(n){return md[n]||null}function Pf(n){return n in md}function mv(n,e){if(!Pf(n))return null;const t=pv(n);return hv(t,e)}function vv(n){if(n==null)return;const e=os(n);for(let t=0;t<e.length;t++){const i=e[t];if(Pf(i))return i}}function Ui(n,...e){delete Ki[n],ss.update(t=>(t[n]=b0.all([t[n]||{},...e]),t))}xa([ss],([n])=>Object.keys(n));ss.subscribe(n=>md=n);const Zs={};function gv(n,e){Zs[n].delete(e),Zs[n].size===0&&delete Zs[n]}function If(n){return Zs[n]}function _v(n){return os(n).map(e=>{const t=If(e);return[e,t?[...t]:[]]}).filter(([,e])=>e.length>0)}function mo(n){return n==null?!1:os(n).some(e=>{var t;return(t=If(e))==null?void 0:t.size})}function xv(n,e){return Promise.all(e.map(i=>(gv(n,i),i().then(r=>r.default||r)))).then(i=>Ui(n,...i))}const La={};function vd(n){if(!mo(n))return n in La?La[n]:Promise.resolve();const e=_v(n);return La[n]=Promise.all(e.map(([t,i])=>xv(t,i))).then(()=>{if(mo(n))return vd(n);delete La[n]}),La[n]}var vu=Object.getOwnPropertySymbols,bv=Object.prototype.hasOwnProperty,yv=Object.prototype.propertyIsEnumerable,Sv=(n,e)=>{var t={};for(var i in n)bv.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&vu)for(var i of vu(n))e.indexOf(i)<0&&yv.call(n,i)&&(t[i]=n[i]);return t};const Mv={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};function Ev({locale:n,id:e}){console.warn(`[svelte-i18n] The message "${e}" was not found in "${os(n).join('", "')}".${mo(Fi())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)}const wv={fallbackLocale:null,loadingDelay:200,formats:Mv,warnOnMissingMessages:!0,handleMissingMessage:void 0,ignoreTag:!0},Ha=wv;function Tr(){return Ha}function Tv(n){const e=n,{formats:t}=e,i=Sv(e,["formats"]);let r=n.fallbackLocale;if(n.initialLocale)try{Rf.resolveLocale(n.initialLocale)&&(r=n.initialLocale)}catch{console.warn(`[svelte-i18n] The initial locale "${n.initialLocale}" is not a valid locale.`)}return i.warnOnMissingMessages&&(delete i.warnOnMissingMessages,i.handleMissingMessage==null?i.handleMissingMessage=Ev:console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),Object.assign(Ha,i,{initialLocale:r}),t&&("number"in t&&Object.assign(Ha.formats.number,t.number),"date"in t&&Object.assign(Ha.formats.date,t.date),"time"in t&&Object.assign(Ha.formats.time,t.time)),Li.set(r)}const ul=No(!1);var Av=Object.defineProperty,Rv=Object.defineProperties,Cv=Object.getOwnPropertyDescriptors,gu=Object.getOwnPropertySymbols,Pv=Object.prototype.hasOwnProperty,Iv=Object.prototype.propertyIsEnumerable,_u=(n,e,t)=>e in n?Av(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Lv=(n,e)=>{for(var t in e||(e={}))Pv.call(e,t)&&_u(n,t,e[t]);if(gu)for(var t of gu(e))Iv.call(e,t)&&_u(n,t,e[t]);return n},Dv=(n,e)=>Rv(n,Cv(e));let sc;const vo=No(null);function xu(n){return n.split("-").map((e,t,i)=>i.slice(0,t+1).join("-")).reverse()}function os(n,e=Tr().fallbackLocale){const t=xu(n);return e?[...new Set([...t,...xu(e)])]:t}function Fi(){return sc??void 0}vo.subscribe(n=>{sc=n??void 0,typeof window<"u"&&n!=null&&document.documentElement.setAttribute("lang",n)});const Nv=n=>{if(n&&vv(n)&&mo(n)){const{loadingDelay:e}=Tr();let t;return typeof window<"u"&&Fi()!=null&&e?t=window.setTimeout(()=>ul.set(!0),e):ul.set(!0),vd(n).then(()=>{vo.set(n)}).finally(()=>{clearTimeout(t),ul.set(!1)})}return vo.set(n)},Li=Dv(Lv({},vo),{set:Nv}),Oo=n=>{const e=Object.create(null);return i=>{const r=JSON.stringify(i);return r in e?e[r]:e[r]=n(i)}};var Uv=Object.defineProperty,go=Object.getOwnPropertySymbols,Lf=Object.prototype.hasOwnProperty,Df=Object.prototype.propertyIsEnumerable,bu=(n,e,t)=>e in n?Uv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,gd=(n,e)=>{for(var t in e||(e={}))Lf.call(e,t)&&bu(n,t,e[t]);if(go)for(var t of go(e))Df.call(e,t)&&bu(n,t,e[t]);return n},ba=(n,e)=>{var t={};for(var i in n)Lf.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&go)for(var i of go(n))e.indexOf(i)<0&&Df.call(n,i)&&(t[i]=n[i]);return t};const Ja=(n,e)=>{const{formats:t}=Tr();if(n in t&&e in t[n])return t[n][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${n} format.`)},Fv=Oo(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return i&&(r=Ja("number",i)),new Intl.NumberFormat(t,r)}),Ov=Oo(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return i?r=Ja("date",i):Object.keys(r).length===0&&(r=Ja("date","short")),new Intl.DateTimeFormat(t,r)}),Bv=Oo(n=>{var e=n,{locale:t,format:i}=e,r=ba(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return i?r=Ja("time",i):Object.keys(r).length===0&&(r=Ja("time","short")),new Intl.DateTimeFormat(t,r)}),kv=(n={})=>{var e=n,{locale:t=Fi()}=e,i=ba(e,["locale"]);return Fv(gd({locale:t},i))},zv=(n={})=>{var e=n,{locale:t=Fi()}=e,i=ba(e,["locale"]);return Ov(gd({locale:t},i))},Hv=(n={})=>{var e=n,{locale:t=Fi()}=e,i=ba(e,["locale"]);return Bv(gd({locale:t},i))},Gv=Oo((n,e=Fi())=>new Rf(n,e,Tr().formats,{ignoreTag:Tr().ignoreTag})),Vv=(n,e={})=>{var t,i,r,a;let s=e;typeof n=="object"&&(s=n,n=s.id);const{values:o,locale:l=Fi(),default:c}=s;if(l==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let d=Cf(n,l);if(!d)d=(a=(r=(i=(t=Tr()).handleMissingMessage)==null?void 0:i.call(t,{locale:l,id:n,defaultValue:c}))!=null?r:c)!=null?a:n;else if(typeof d!="string")return console.warn(`[svelte-i18n] Message with id "${n}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),d;if(!o)return d;let h=d;try{h=Gv(d,l).format(o)}catch(u){u instanceof Error&&console.warn(`[svelte-i18n] Message "${n}" has syntax error:`,u.message)}return h},Wv=(n,e)=>Hv(e).format(n),Xv=(n,e)=>zv(e).format(n),$v=(n,e)=>kv(e).format(n),qv=(n,e=Fi())=>Cf(n,e),Fn=xa([Li,ss],()=>Vv);xa([Li],()=>Wv);xa([Li],()=>Xv);xa([Li],()=>$v);xa([Li,ss],()=>qv);function Yv(n){return vd(Fi()||Tr().initialLocale)}const jv={common:{change_language:"Change language to {name}",loading:"LOADING..."},nav:{reports:"[ REPORTS ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"OPERATIONAL REPORTS",nav_week:"WEEK",generated_label:"GENERATED",page_title:"Trading Desk",methodology_label:"METHODOLOGY",indicators_label:"INDICATORS",font_decrease:"A−",font_increase:"A+",warning_title:"Data validity:",warning_text:"Revalidate all prices, moving averages, and oscillators at the weekly open before arming any order. This report is a risk-defined decision framework — not a forecast or guarantee of results. Only trade on a <strong>closed bar</strong> of the relevant screen.",priority_title:"Monitoring Queue · by Priority",scoreboard_title:"Bias Scoreboard · Triple Screen",role_primary:"PRIMARY",role_macro:"MACRO",impulse_red:"● RED",impulse_green:"● GREEN",impulse_blue_red:"◑ BLUE → RED",zone_neutral_up:"Neutral rising",zone_rising_overbought:"Rising → overbought",zone_overbought:"Overbought",zone_low_k_below_d:"Low, K < D",zone_rising:"Rising",zone_oversold:"Oversold",btc_note:"Pending impulse confirmation. Conditional short.",xau_note:"Short maturing. Stochastic at resistance.",sp_note:"Await pullback to 7,369. No buying overbought.",bovespa_note:"Cleanest trend. Both screens aligned.",usdbrl_note:"Sell bounce near 5.11 (weekly EMA underside).",brent_note:"Do not sell oversold. Await bounce to 101.",playbook_title:"BTC/USD — Primary Playbook",tide_label:"TIDE (WEEKLY)",wave_label:"WAVE (DAILY)",tide_text:'Price <span class="text-white">75,708.00</span> below MME(17) <span class="text-rose-400">76,533.35</span>. MACD histogram positive but decelerating — new weekly bar lower than previous (lower high). Impulse <span class="text-amber-400">blue in transition</span>; turns red when histogram confirms weekly close.',wave_text:'Price below descending MME. Stochastic %K <span class="text-[#4CC9F0]">42.08</span> / %D <span class="text-[#4CC9F0]">28.63</span>, rising (upper band 89.03). Counter-trend bounce in progress — <strong class="text-white">not yet overbought</strong>. Conviction scales to FULL after red weekly close.',trigger_label:"TRIGGER",action_label:"ACTION",stop_label:"STOP",sc_a_name:"SELL THE BOUNCE",sc_a_condition:"Price retraces to zone 76,533–76,606 + 1h stochastic overbought and turning + breaks prior 15m low",sc_a_target_label:"SUPPORT",sc_b_name:"CONTINUATION SELL",sc_b_condition:"Close below 73,936 + rejected retest from below + breaks prior 15m low",sc_b_target_label:"PARTIAL → RUNNER",sc_c_label:"NO TRADE",sc_c_text:'Condition: tide turns non-bearish <strong>or</strong> reclaim/close above 76,533. Action: <span class="text-[#00F0FF]/60">CancelSetups</span> — pull pending orders, remain ARMED with no entries.',sc_a_invalidation:"Close above 76,533",sc_b_invalidation:"Recovers and closes back above 73,936",macro_implication_title:"MACRO IMPLICATION",macro_implication_text:'The bearish BTC bias lacks broad macro risk-off support (strong S&P is the counterweight). Treat the short as a <strong class="text-white">correction within trend</strong>, not the start of a macro bear: modest targets, heightened vigilance on invalidation by reclaim.',risk_title:"Risk Management · Non-Negotiable Rules",rule_2pct_id:"2%",rule_2pct_title:"THE 2% RULE",rule_2pct_body:"Never risk more than 2% of account per trade. Define the stop first; size the position from the stop.",rule_6pct_id:"6%",rule_6pct_title:"THE 6% RULE",rule_6pct_body:"If monthly losses reach 6% of account, close all operations until month-end.",rule_conv_id:"CONV",rule_conv_title:"CONVICTION & SIZE",rule_conv_body:"HALF = half size (unconfirmed weekly impulse). FULL = full size (confirmed weekly impulse).",rule_hier_id:"HIER",rule_hier_title:"SCREEN HIERARCHY",rule_hier_body:"Never trade against the tide. Long only where tide is bullish. Stop defined at entry — non-negotiable.",legend_armed:"active permission; awaiting trigger",legend_standby:"no permission; do not trade",legend_in_position:"open position (runtime)",legend_full:"confirmed weekly impulse · full size",legend_half:"week in transition · half size",zone_label:"ZONE"},hero:{status:"SYSTEMS OPERATIONAL",title:"NEXUS QUANT",subtitle:"Proprietary Quantitative Research & Automated Decision Systems.",cta:"[ VIEW PHILOSOPHY ]",cta_ark:"[ ARK STREAMS PRESENTATION ]"},philosophy:{title:">_ MISSION DIRECTIVE",hero_text:'We approach financial markets as <span class="text-white font-medium">complex physical systems</span>. By bridging <span class="text-white font-medium">stochastic research</span> with <span class="text-white font-medium">deterministic software engineering</span>, we build decision engines that thrive in chaos.',p1:{title:"Precision",text:"We prioritize data integrity and correctness over raw speculative speed."},p2:{title:"Automation",text:"Removing human cognitive bias from critical execution workflows."},p3:{title:"Resilience",text:"Systems designed to maintain 99.9% uptime in adversarial environments."}},stack:{title:">_ ARCHITECTURE",card1:{title:"QUANTITATIVE ANALYSIS",text:"Rapid hypothesis testing, statistical modeling, and backtesting using the Python data science ecosystem."},card2:{title:"PRODUCTION RUNTIME",text:"Our proprietary event-driven intelligence platform. Built in Go and powered by NATS JetStream to ensure ultra-low latency, native persistence, and seamless scalability."},card3:{title:"IMMUTABLE LEDGER",text:"Full traceability of every decision state. We utilize time-travel database capabilities for rigorous post-trade auditing."}},evolution:{title:">_ SYSTEM EVOLUTION",phase1:{period:"2023 - 2025",name:"Phase 1: Functional Foundation",tech:"Clojure / JVM / Polylith",description:"Focus on mathematical correctness, immutable data structures, and REPL-driven development. Proved the viability of our Bill Williams-based strategy logic."},phase2:{period:"2026 - Present",name:"Phase 2: Hybrid Ecosystem",tech:"Go / NATS JetStream / Wails",description:"Expansion to a high-concurrency, low-latency hybrid architecture. Integrating Go for production edge nodes while maintaining Clojure for strategy modeling, unified by a persistent NATS event bus."}},metrics:{title:":: SYSTEM STATUS ::",header:{component:"COMPONENT",status:"STATUS",latency:"LATENCY",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONNECTED",running:"RUNNING",guarded:"GUARDED",synced:"SYNCED"},ago:"{n}s ago"},footer:{rights:"© {year} Nexus Quant. All rights reserved.",location:"Rio de Janeiro, BR // Global Operations"},presentation:{title:"Tech Interview",subtitle:"Quantitative Trading Engine in Clojure",section1:{title:"Project Overview",text:"Ark Engine is a quantitative trading engine built in Clojure, following a Polylith architecture for modularity and testability. It operates in the Crypto/Binance domain using a Functional, Event-Driven, and Asynchronous paradigm."},section2:{title:"Architecture Deep Dive",subtitle:"Polylith: Bases, Components, Projects",intro:"The system is structured into Bases (cli-runner), Components (orchestrator, strategy-engine, connector, temporal-db), and Projects. This decoupling ensures the strategy engine is pure logic, knowing nothing about Binance, enabling REPL-Driven Development.",part1:{title:"Orchestrator (The Brain)",intro:"Coordinates data, strategy, and execution. It manages the main application loop using core.async and recursion."},part2:{title:"Strategy Engine (The Logic)",intro:"Pure functions taking immutable data (Candles) and returning results (Signals) with no side effects. Extremely testable."},part3:{title:"Connector (The Hands)",intro:"Handles side effects: talking to exchanges (Binance) to execute orders based on the strategy's decisions."}},section3:{title:"Code Walkthrough",role:"Mental Model",subtitle:"Tick -> Fetch -> Compute -> Decide -> Act -> Recur",subtitle2:"A non-blocking event loop that wakes up on candle close, processes data purely, executes side effects, and recurs with new state.",intro:"1. Tick: Time boundaries trigger wake-up. 2. Fetch: Pull history from Temporal DB. 3. Compute: Run indicators (TA4J) via pure functions.",intro2:"4. Decide: Logic determines buy/sell. 5. Act: Connector executes order. 6. Recur: New position state passed to next loop iteration.",step1:{title:"Orchestrator",what:"The coordinator. Manages the lifecycle and state recursion.",parallel:"Like a Conductor ensuring all instruments play in time."},step2:{title:"Strategy Engine",what:"The pure logic. Calculates indicators and signals.",magic:"Referential Transparency: Same input always equals same output.",parallel:"Like a Calculator: 2+2 is always 4, regardless of the weather."},step3:{title:"Connector",what:"The side-effect handler. Executes trades.",parallel:"The hands that actually move the chips on the table."},bitemporality:{title:"State Management (Recursion)",intro:"We avoid global atoms for the main loop state.",trading:"State exists only on the stack via (loop [state init] ... (recur new-state)).",healthcare:"This ensures the state lifecycle is tightly bound to the process.",conclusion:"Data consistency is maintained through immutability. Each iteration creates a fresh state map derived from the previous one, without mutation."},demo:{instruction:'Click "INJECT VOLATILITY" to see the engine handle load:',step1:"The Orchestrator maintains the loop.",step2:"The Strategy computes signals purely.",step3:"The Connector executes safely.",conclusion:"This architecture allows us to test the Strategy in isolation using just data maps, without mocking complex exchange APIs."}},section4:{title:"Libraries & Talking Points",subtitle:"Key Tech Stack & Interview Answers",text:"Core technologies and standard responses for technical questions.",headers:["KEY LIBRARY / CONCEPT","ROLE / APPLICATION"],rows:{source:{fintech:{title:"core.async",detail:"(Concurrency)"},healthcare:{title:"CSP (Communicating Sequential Processes)",detail:"(Non-blocking management of the main loop)"}},norm:{fintech:{title:"Tick",detail:"(Time)"},healthcare:{title:"Better Time Intepretation",detail:"(Superior to Java 8 Date/Time for intervals)"}},audit:{fintech:{title:"Carmine",detail:"(Redis)"},healthcare:{title:"Hot State / Pub-Sub",detail:"(Telemetry and fast persistence)"}},decision:{fintech:{title:"Polylith",detail:"(Architecture)"},healthcare:{title:"Monorepo Tooling",detail:"(Enforces strict component isolation)"}}},closing:"Why Clojure? Data processing fits naturally with immutable maps. REPL allows interactive debugging against real market data."},section5:{title:"READY FOR QUESTIONS",text:"Ready to discuss Architecture, Concurrency, or Strategy Implementation details."}},arkStreams:{title:"Ark Streams",subtitle:"Real-time trading intelligence. Every event durable. Every decision replayable.",section1:{title:"The Problem",text:"Most trading tools are stateless: they poll an API, compute an indicator, and forget. Ark Streams publishes every candle, every indicator update, every signal as a durable NATS event — making the entire pipeline replayable from day one.",cap1:"Watch live strategy decisions form in real time, timeframe by timeframe",cap2:"Replay historical market sessions through the same engine that runs live",cap3:"Run grid searches over strategy parameters against stored data",cap4:"Observe macro context (WTI, DXY, SP500, IBOV) alongside crypto price action"},section2:{title:"NATS JetStream — The Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Every component is fully decoupled. Collectors publish raw candles. The FractalEngine enriches them with indicators. Strategies consume the enriched stream and emit signals. Nothing talks directly — everything flows through NATS subjects.",part1:{title:"Data Ingestion",intro:"Bitget WebSocket (OHLCV, liquidations, private positions), Binance (funding rate, OI), Yahoo Finance REST — polling WTI, BRENT, SP500, DXY, IBOV, USDBRL every hour."},part2:{title:"Processing Pipeline",intro:"FractalEngine runs one instance per symbol × timeframe. Publishes AnalyzedEvent to market.analyzed.* and writes the latest snapshot to KV: MARKET_STATE."},part3:{title:"Persistent Streams",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (last 50 transitions)."}},section3:{title:"FractalEngine — The Analytical Core",role:"Bill Williams Indicator Suite",subtitle:"Raw Candle → Enriched AnalyzedEvent → market.analyzed.*",subtitle2:"One engine instance per symbol × timeframe. Warms up from REST history before subscribing to the live stream — indicators are fully converged before any strategy sees data.",step1:{title:"Collectors",what:"Ingest raw OHLCV from Bitget, Binance, and Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Compute the full Bill Williams suite. Publish AnalyzedEvent to NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Subscribe to market.analyzed.*. Emit TradeSignal to signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — The Strategy",subtitle:"All 6 entry filters must pass simultaneously before a signal is emitted",headers:["FILTER","LONG","SHORT"],rows:{runtime:{fintech:{title:"Alligator Transition",detail:"Bias just turned Bullish"},healthcare:{title:"Alligator Transition",detail:"Bias just turned Bearish"}},messaging:{fintech:{title:"Alligator Spread",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Alligator Spread",detail:"Same"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"BB width > 50th pct (300 bars)"},healthcare:{title:"BB Squeeze Gate",detail:"Same"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, accelerating (green bar)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, accelerating (red bar)"}}},closing:"Exit: 2×ATR(14) TP/SL · Alligator trend reversal · Teeth touch (2-bar debounce) · PaperBroker with pyramiding, MFE/MAE, FixedFractionalRM"},section5:{title:"GROWTH PATH",text:"Symbol-agnostic by design — every new collector auto-feeds all downstream consumers via wildcard NATS subscriptions."},footer:{memory:"Events: Durable",latency:"Latency: Ultra-Low",stack:"Stack: Go + NATS"},conclusion:`Every candle matters.
Every signal survives.
Built to scale.`}},Kv={common:{change_language:"Alterar idioma para {name}",loading:"CARREGANDO..."},nav:{reports:"[ RELATÓRIOS ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"RELATÓRIOS OPERACIONAIS",nav_week:"SEMANA",generated_label:"GERADO",page_title:"Mesa de Operações",methodology_label:"METODOLOGIA",indicators_label:"INDICADORES",font_decrease:"A−",font_increase:"A+",warning_title:"Validade dos dados:",warning_text:"Revalidar todos os preços, médias e osciladores na abertura semanal antes de armar qualquer ordem. Este relatório é um framework de decisão com risco definido — não previsão nem garantia de resultado. Somente operar em <strong>barra fechada</strong> do screen relevante.",priority_title:"Fila de Monitoramento · por Prioridade",scoreboard_title:"Scoreboard de Viés · Triple Screen",role_primary:"PRIMÁRIO",role_macro:"MACRO",impulse_red:"● VERMELHO",impulse_green:"● VERDE",impulse_blue_red:"◑ AZUL → VERMELHO",zone_neutral_up:"Neutro subindo",zone_rising_overbought:"Subindo → sobrecompra",zone_overbought:"Sobrecomprado",zone_low_k_below_d:"Baixo, K < D",zone_rising:"Subindo",zone_oversold:"Sobrevendido",btc_note:"Impulso pendente confirmação. Short condicional.",xau_note:"Short amadurecendo. Estocástico na resistência.",sp_note:"Aguardar pullback a 7.369. Não comprar sobrecompra.",bovespa_note:"Tendência mais limpa. Duas telas alinhadas.",usdbrl_note:"Vender repique perto de 5,11 (EMA semanal underside).",brent_note:"Não vender sobrevendido. Aguardar repique a 101.",playbook_title:"BTC/USD — Playbook Primário",tide_label:"MARÉ (SEMANAL)",wave_label:"ONDA (DIÁRIO)",tide_text:'Preço <span class="text-white">75.708,00</span> abaixo da MME(17) <span class="text-rose-400">76.533,35</span>. Histograma MACD positivo porém desacelerando — barra semanal nova menor que a anterior (topo mais baixo). Impulso <span class="text-amber-400">azul em transição</span>; vira vermelho quando histograma confirmar fechamento semanal.',wave_text:'Preço abaixo da MME descendente. Estocástico %K <span class="text-[#4CC9F0]">42,08</span> / %D <span class="text-[#4CC9F0]">28,63</span>, subindo (banda sup. 89,03). Repique contra-tendência em curso — <strong class="text-white">ainda não sobrecomprado</strong>. Convicção escala para FULL após fechamento semanal vermelho.',trigger_label:"GATILHO",action_label:"AÇÃO",stop_label:"STOP",sc_a_name:"VENDA NO REPIQUE",sc_a_condition:"Preço repica à zona 76.533–76.606 + estocástico 1h sobrecomprado e virando + rompe mínima 15m",sc_a_target_label:"SUPORTE",sc_b_name:"VENDA NA CONTINUAÇÃO",sc_b_condition:"Fechamento abaixo de 73.936 + reteste por baixo rejeitado + rompe mínima 15m",sc_b_target_label:"PARCIAL → RUNNER",sc_c_label:"SEM TRADE",sc_c_text:'Condição: maré deixa de ser baixista <strong>ou</strong> reclaim/fechamento acima de 76.533. Ação: <span class="text-[#00F0FF]/60">CancelSetups</span> — puxar ordens pendentes, seguir ARMED sem entradas.',sc_a_invalidation:"Fechamento acima de 76.533",sc_b_invalidation:"Recompõe e fecha de volta acima de 73.936",macro_implication_title:"IMPLICAÇÃO MACRO",macro_implication_text:'O viés vendedor do BTC não tem risk-off macro amplo por trás (S&P forte é o contrapeso). Tratar o short como <strong class="text-white">correção dentro de tendência</strong>, não início de bear macro: alvos mais modestos, vigilância redobrada na invalidação por reclaim.',risk_title:"Gestão de Risco · Regras Não-Negociáveis",rule_2pct_id:"2%",rule_2pct_title:"REGRA DOS 2%",rule_2pct_body:"Nunca arriscar mais que 2% da conta por trade. Definir o stop primeiro; dimensionar a posição pelo stop.",rule_6pct_id:"6%",rule_6pct_title:"REGRA DOS 6%",rule_6pct_body:"Se as perdas do mês atingirem 6% da conta, encerrar o operacional até virar o mês.",rule_conv_id:"CONV",rule_conv_title:"CONVICÇÃO & TAMANHO",rule_conv_body:"HALF = meia mão (impulso não confirmado). FULL = mão cheia (impulso semanal confirmado).",rule_hier_id:"HIER",rule_hier_title:"HIERARQUIA DE TELAS",rule_hier_body:"Nunca operar contra a maré. Long somente onde a maré é de alta. Stop definido na entrada — não-negociável.",legend_armed:"permissão ativa; aguardando gatilho",legend_standby:"sem permissão; não operar",legend_in_position:"posição aberta (runtime)",legend_full:"impulso semanal confirmado · mão cheia",legend_half:"semana em transição · meia mão",zone_label:"ZONA"},hero:{status:"SISTEMAS OPERACIONAIS",title:"NEXUS QUANT",subtitle:"Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.",cta:"[ VER FILOSOFIA ]",cta_ark:"[ APRESENTAÇÃO ARK STREAMS ]"},philosophy:{title:">_ DIRETRIZ DA MISSÃO",hero_text:'Abordamos os mercados financeiros como <span class="text-white font-medium">sistemas físicos complexos</span>. Ao unir <span class="text-white font-medium">pesquisa estocástica</span> com <span class="text-white font-medium">engenharia de software determinística</span>, construímos motores de decisão que prosperam no caos.',p1:{title:"Precisão",text:"Priorizamos a integridade e correção dos dados em vez da velocidade especulativa bruta."},p2:{title:"Automação",text:"Removendo o viés cognitivo humano dos fluxos críticos de execução."},p3:{title:"Resiliência",text:"Sistemas projetados para manter 99,9% de disponibilidade em ambientes adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISE QUANTITATIVA",text:"Teste rápido de hipóteses, modelagem estatística e backtesting usando o ecossistema de ciência de dados Python."},card2:{title:"RUNTIME DE PRODUÇÃO",text:"Nossa plataforma proprietária de inteligência orientada a eventos. Construída em Go e movida por NATS JetStream para garantir latência ultra-baixa, persistência nativa e escalabilidade contínua."},card3:{title:"LEDGER IMUTÁVEL",text:"Rastreabilidade total de cada estado de decisão. Utilizamos recursos de banco de dados de viagem no tempo para auditoria pós-trade rigorosa."}},evolution:{title:">_ EVOLUÇÃO DO SISTEMA",phase1:{period:"2023 - 2025",name:"Fase 1: Fundação Funcional",tech:"Clojure / JVM / Polylith",description:"Foco em corretude matemática, estruturas de dados imutáveis e desenvolvimento orientado a REPL. Provou a viabilidade da nossa lógica de estratégia baseada em Bill Williams."},phase2:{period:"2026 - Present",name:"Fase 2: Ecossistema Híbrido",tech:"Go / NATS JetStream / Wails",description:"Expansão para uma arquitetura híbrida de alta concorrência e baixa latência. Integração de Go para nós de borda em produção, mantendo Clojure para modelagem de estratégias, unificados por um barramento NATS persistente."}},metrics:{title:":: STATUS DO SISTEMA ::",header:{component:"COMPONENTE",status:"STATUS",latency:"LATÊNCIA",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONECTADO",running:"EXECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"{n}s atrás"},footer:{rights:"© {year} Nexus Quant. Todos os direitos reservados.",location:"Rio de Janeiro, BR // Operações Globais"},arkStreams:{title:"Ark Streams",subtitle:"Inteligência de trading em tempo real. Todo evento durável. Toda decisão reproduzível.",section1:{title:"O Problema",text:"A maioria das ferramentas de trading é stateless: consultam uma API, calculam um indicador e esquecem. O Ark Streams publica cada candle, cada atualização de indicador, cada sinal como um evento durável no NATS — tornando o pipeline inteiramente reproduzível desde o primeiro dia.",cap1:"Acompanhe decisões da estratégia se formando em tempo real, timeframe por timeframe",cap2:"Reproduza sessões históricas pelo mesmo engine que roda ao vivo",cap3:"Execute grid searches sobre parâmetros da estratégia contra dados armazenados",cap4:"Observe contexto macro (WTI, DXY, SP500, IBOV) ao lado do price action crypto"},section2:{title:"NATS JetStream — O Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Cada componente é totalmente desacoplado. Collectors publicam candles brutos. O FractalEngine os enriquece com indicadores. Estratégias consomem o stream enriquecido e emitem sinais. Nada se fala diretamente — tudo flui por subjects NATS.",part1:{title:"Ingestão de Dados",intro:"Bitget WebSocket (OHLCV, liquidações, posições privadas), Binance (funding rate, OI), Yahoo Finance REST — polling de WTI, BRENT, SP500, DXY, IBOV, USDBRL a cada hora."},part2:{title:"Pipeline de Processamento",intro:"FractalEngine roda uma instância por símbolo × timeframe. Publica AnalyzedEvent em market.analyzed.* e escreve o snapshot mais recente em KV: MARKET_STATE."},part3:{title:"Streams Persistentes",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (últimas 50 transições)."}},section3:{title:"FractalEngine — O Núcleo Analítico",role:"Suite de Indicadores Bill Williams",subtitle:"Candle Bruto → AnalyzedEvent Enriquecido → market.analyzed.*",subtitle2:"Uma instância por símbolo × timeframe. Aquece via REST antes de assinar o stream ao vivo — indicadores totalmente convergidos antes de qualquer estratégia ver dados.",step1:{title:"Collectors",what:"Ingestão de OHLCV bruto via Bitget, Binance e Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Calcula a suite completa Bill Williams. Publica AnalyzedEvent no NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Assina market.analyzed.*. Emite TradeSignal em signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — A Estratégia",subtitle:"Todos os 6 filtros de entrada devem passar simultaneamente antes de um sinal ser emitido",headers:["FILTRO","LONG","SHORT"],rows:{runtime:{fintech:{title:"Transição Alligator",detail:"Bias acabou de virar Bullish"},healthcare:{title:"Transição Alligator",detail:"Bias acabou de virar Bearish"}},messaging:{fintech:{title:"Spread Alligator",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Spread Alligator",detail:"Mesmo"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"Largura BB > percentil 50 (300 barras)"},healthcare:{title:"BB Squeeze Gate",detail:"Mesmo"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, acelerando (barra verde)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, acelerando (barra vermelha)"}}},closing:"Saída: 2×ATR(14) TP/SL · Reversão de tendência Alligator · Toque nos dentes (debounce 2 barras) · PaperBroker com pirâmide, MFE/MAE, FixedFractionalRM"},section5:{title:"PLANO DE CRESCIMENTO",text:"Agnóstico a símbolo por design — cada novo collector alimenta automaticamente todos os consumidores downstream via assinaturas wildcard no NATS."},footer:{memory:"Eventos: Duráveis",latency:"Latência: Ultra-Baixa",stack:"Stack: Go + NATS"},conclusion:`Todo candle importa.
Todo sinal sobrevive.
Construído para escalar.`}},Zv={common:{change_language:"Cambiar idioma a {name}",loading:"CARGANDO..."},hero:{status:"SISTEMAS OPERATIVOS",title:"NEXUS QUANT",subtitle:"Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.",cta:"[ VER FILOSOFÍA ]"},philosophy:{title:">_ DIRECTRIZ DE MISIÓN",hero_text:'Abordamos los mercados financieros como <span class="text-white font-medium">sistemas físicos complexes</span>. Al unir <span class="text-white font-medium">investigación estocástica</span> con <span class="text-white font-medium">ingeniería de software determinística</span>, construimos motores de decisión que prosperan en el caos.',p1:{title:"Precisión",text:"Priorizamos la integridad y corrección de los datos sobre la velocidad especulativa bruta."},p2:{title:"Automatización",text:"Eliminando el sesgo cognitivo humano de los flujos de ejecución críticos."},p3:{title:"Resiliencia",text:"Sistemas diseñados para mantener un 99,9% de disponibilidad en entornos adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISIS CUANTITATIVO",text:"Pruebas rápidas de hipótesis, modelado estadístico y backtesting utilizando el ecosistema de ciencia de datos de Python."},card2:{title:"RUNTIME DE PRODUCCIÓN",text:"Nuestro motor de ejecución patentado. Basado en principios de programación funcional para garantizar la seguridad de concurrencia y la tolerancia a fallos."},card3:{title:"LIBRO INMUTABLE",text:"Trazabilidad completa de cada estado de decisión. Utilizamos capacidades de base de datos de viaje en el tiempo para una auditoría post-negociación rigurosa."}},metrics:{title:":: ESTADO DEL SISTEMA ::",header:{component:"COMPONENTE",status:"ESTADO",latency:"LATENCIA",heartbeat:"LATIDO"},status_labels:{connected:"CONECTADO",running:"EJECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"hace {n}s"},footer:{rights:"© {year} Nexus Quant. Todos los derechos reservados.",location:"Río de Janeiro, BR // Operaciones Globales"}},Jv={common:{change_language:"Сменить язык на {name}",loading:"ЗАГРУЗКА..."},hero:{status:"СИСТЕМЫ РАБОТАЮТ",title:"NEXUS QUANT",subtitle:"Собственные количественные исследования и автоматизированные системы принятия решений.",cta:"[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]"},philosophy:{title:">_ ДИРЕКТИВА МИССИИ",hero_text:'Мы рассматриваем финансовые рынки как <span class="text-white font-medium">сложные физические системы</span>. Объединяя <span class="text-white font-medium">стохастические исследования</span> с <span class="text-white font-medium">детерминированной программной инженерией</span>, мы создаем механизмы принятия решений, процветающие в хаосе.',p1:{title:"Точность",text:"Мы ставим целостность и корректность данных выше грубой спекулятивной скорости."},p2:{title:"Автоматизация",text:"Исключение человеческого когнитивного искажения из критически важных рабочих процессов исполнения."},p3:{title:"Устойчивость",text:"Системы, разработанные для поддержания 99,9% времени безотказной работы в агрессивных средах."}},stack:{title:">_ АРХИТЕКТУРА",card1:{title:"КОЛИЧЕСТВЕННЫЙ АНАЛИЗ",text:"Быстрое тестирование гипотез, статистическое моделирование и бэктестинг с использованием экосистемы науки о данных Python."},card2:{title:"ПРОИЗВОДСТВЕННАЯ СРЕДА",text:"Наш собственный механизм исполнения. Построен на принципах функционального программирования для обеспечения безопасности параллелизма и отказоустойчивости."},card3:{title:"НЕИЗМЕНЯЕМЫЙ РЕЕСТР",text:"Полная прослеживаемость каждого состояния принятия решения. Мы используем возможности баз данных с путешествием во времени для строгого аудита после сделок."}},metrics:{title:":: СОСТОЯНИЕ СИСТЕМЫ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАДЕРЖКА",heartbeat:"СЕРДЦЕБИЕНИЕ"},status_labels:{connected:"ПОДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХРАНЯЕТСЯ",synced:"СИНХРОНИЗИРОВАНО"},ago:"{n}с назад"},footer:{rights:"© {year} Nexus Quant. Все права защищены.",location:"Рио-де-Жанейро, БР // Глобальные операции"}},Qv={common:{change_language:"Змінити мову на {name}",loading:"ЗАВАНТАЖЕННЯ..."},hero:{status:"СИСТЕМИ ПРАЦЮЮТЬ",title:"NEXUS QUANT",subtitle:"Власні кількісні дослідження та автоматизовані системи прийняття рішень.",cta:"[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]"},philosophy:{title:">_ ДИРЕКТИВА МІСІЇ",hero_text:'Ми розглядаємо фінансові ринки як <span class="text-white font-medium">складні фізичні системи</span>. Поєднуючи <span class="text-white font-medium">стохастичні дослідження</span> з <span class="text-white font-medium">детермінованою програмною інженерією</span>, ми створюємо механізми прийняття рішень, що процвітають у хаосі.',p1:{title:"Точність",text:"Ми ставимо цілісність і коректність даних вище грубої спекулятивної швидкості."},p2:{title:"Автоматизація",text:"Виключення людського когнітивного упередження з критично важливих робочих процесів виконання."},p3:{title:"Стійкість",text:"Системи, розроблені для підтримки 99,9% часу безвідмовної роботи в агресивних середовищах."}},stack:{title:">_ АРХІТЕКТУРА",card1:{title:"КІЛЬКІСНИЙ АНАЛІЗ",text:"Швидке тестування гіпотез, статистичне моделювання та бектестування з використанням екосистеми науки про дані Python."},card2:{title:"ВИРОБНИЧЕ СЕРЕДОВИЩЕ",text:"Наш власний механізм виконання. Побудований на принципах функціонального програмування для забезпечення безпеки паралелізму та відмовостійкості."},card3:{title:"НЕЗМІННИЙ РЕЄСТР",text:"Повна простежуваність кожного стану прийняття рішення. Ми використовуємо можливості баз даних з подорожжю в часі для суворого аудиту після угод."}},metrics:{title:":: СТАН СИСТЕМИ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАТРИМКА",heartbeat:"СЕРЦЕБИТТЯ"},status_labels:{connected:"ПІДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХОРОНЯЄТЬСЯ",synced:"СИНХРОНІЗОВАНО"},ago:"{n}с тому"},footer:{rights:"© {year} Nexus Quant. Всі права захищені.",location:"Ріо-де-Жанейро, БР // Глобальні операції"}},eg={common:{change_language:"更改语言为 {name}",loading:"加载中..."},hero:{status:"系统运行正常",title:"NEXUS QUANT",subtitle:"专有定量研究和自动决策系统。",cta:"[ 查看理念 ]"},philosophy:{title:">_ 任务指令",hero_text:'我们将金融市场视为<span class="text-white font-medium">复杂的物理系统</span>。通过将<span class="text-white font-medium">随机研究</span>与<span class="text-white font-medium">确定性软件工程</span>相结合，我们构建了在混乱中蓬勃发展的决策引擎。',p1:{title:"精确性",text:"我们优先考虑数据的完整性和正确性，而不是单纯的投机速度。"},p2:{title:"自动化",text:"从关键执行工作流中消除人类认知偏差。"},p3:{title:"弹性",text:"旨在在对抗性环境中保持 99.9% 正常运行时间的系统。"}},stack:{title:">_ 架构",card1:{title:"定量分析",text:"使用 Python 数据科学生态系统进行快速假设检验、统计建模和回测。"},card2:{title:"生产运行环境",text:"我们的专有执行引擎。建立在函数式编程原则之上，以确保并发安全和容错能力。"},card3:{title:"不可变账本",text:"每个决策状态的完全可追溯性。我们利用时间旅行数据库功能进行严格的交易后审计。"}},metrics:{title:":: 系统状态 ::",header:{component:"组件",status:"状态",latency:"延迟",heartbeat:"心跳"},status_labels:{connected:"已连接",running:"运行中",guarded:"受保护",synced:"已同步"},ago:"{n}秒前"},footer:{rights:"© {year} Nexus Quant. 保留所有权利。",location:"里约热内卢, 巴西 // 全球运营"}},tg={common:{change_language:"言語を{name}に変更",loading:"読み込み中..."},hero:{status:"システム稼働中",title:"NEXUS QUANT",subtitle:"独自の定量的研究および自動意思決定システム。",cta:"[ 哲学を見る ]"},philosophy:{title:">_ ミッション指令",hero_text:'私たちは金融市場を<span class="text-white font-medium">複雑な物理システム</span>として捉えています。<span class="text-white font-medium">確率的研究</span>と<span class="text-white font-medium">決定論的ソフトウェア工学</span>を融合させることで、混沌の中で繁栄する意思決定エンジンを構築します。',p1:{title:"精度",text:"私たちは、単なる投機的な速度よりもデータの整合性と正確性を優先します。"},p2:{title:"自動化",text:"重要な実行ワークフローから人間の認知的バイアスを排除します。"},p3:{title:"回復力",text:"敵対的な環境でも99.9%の稼働率を維持するように設計されたシステム。"}},stack:{title:">_ アーキテクチャ",card1:{title:"定量的分析",text:"Pythonデータサイエンスエコシステムを使用した迅速な仮説検証、統計モデリング、およびバックテスト。"},card2:{title:"本番ランタイム",text:"当社独自の実行エンジン。並行性の安全性とフォールトトレランスを確保するために、関数型プログラミングの原則に基づいて構築されています。"},card3:{title:"不変台帳",text:"すべての意思決定状態の完全な追跡可能性。厳格な取引後監査のためにタイムトラベルデータベース機能を利用しています。"}},metrics:{title:":: システムステータス ::",header:{component:"コンポーネント",status:"ステータス",latency:"レイテンシ",heartbeat:"ハートビート"},status_labels:{connected:"接続済み",running:"実行中",guarded:"保護中",synced:"同期済み"},ago:"{n}秒前"},footer:{rights:"© {year} Nexus Quant. 全著作権所有。",location:"リオデジャネイロ, ブラジル // グローバルオペレーション"}},ng={common:{change_language:"Sprache ändern zu {name}",loading:"LÄDT..."},hero:{status:"SYSTEME BETRIEBSBEREIT",title:"NEXUS QUANT",subtitle:"Proprietäre quantitative Forschung & automatisierte Entscheidungssysteme.",cta:"[ PHILOSOPHIE ANSEHEN ]"},philosophy:{title:">_ MISSIONSDIREKTIVE",hero_text:'Wir betrachten Finanzmärkte als <span class="text-white font-medium">komplexe physikalische Systeme</span>. Durch die Verbindung von <span class="text-white font-medium">stochastischer Forschung</span> mit <span class="text-white font-medium">deterministischer Softwareentwicklung</span> bauen wir Entscheidungsmaschinen, die im Chaos gedeihen.',p1:{title:"Präzision",text:"Wir priorisieren Datenintegrität und Korrektheit gegenüber roher spekulativer Geschwindigkeit."},p2:{title:"Automatisierung",text:"Entfernung menschlicher kognitiver Verzerrungen aus kritischen Ausführungsabläufen."},p3:{title:"Resilienz",text:"Systeme, die entwickelt wurden, um in feindlichen Umgebungen eine Verfügbarkeit von 99,9% aufrechtzuerhalten."}},stack:{title:">_ ARCHITEKTUR",card1:{title:"QUANTITATIVE ANALYSE",text:"Schnelles Testen von Hypothesen, statistische Modellierung und Backtesting unter Verwendung des Python-Data-Science-Ökosystems."},card2:{title:"PRODUKTIONS-LAUFZEITUMGEBUNG",text:"Unsere proprietäre Ausführungs-Engine. Aufgebaut auf Prinzipien der funktionalen Programmierung zur Gewährleistung von Nebenläufigkeitssicherheit und Fehlertoleranz."},card3:{title:"UNVERÄNDERLICHES HAUPTBUCH",text:"Vollständige Rückverfolgbarkeit jedes Entscheidungszustands. Wir nutzen Zeitreise-Datenbankfunktionen für rigorose Nachhandelsprüfungen."}},metrics:{title:":: SYSTEMSTATUS ::",header:{component:"KOMPONENTE",status:"STATUS",latency:"LATENZ",heartbeat:"HEARTBEAT"},status_labels:{connected:"VERBUNDEN",running:"LÄUFT",guarded:"GESCHÜTZT",synced:"SYNCHRONISIERT"},ago:"vor {n}s"},footer:{rights:"© {year} Nexus Quant. Alle Rechte vorbehalten.",location:"Rio de Janeiro, BR // Globale Operationen"}};Ui("en",jv);Ui("pt",Kv);Ui("es",Zv);Ui("ru",Jv);Ui("uk",Qv);Ui("zh",eg);Ui("ja",tg);Ui("de",ng);const hl=["en","pt","es","ru","uk","zh","ja","de"];function ig(){if(typeof window>"u")return"en";try{const e=localStorage.getItem("preferred-locale");if(e&&hl.includes(e))return e}catch{}const n=navigator.languages||[navigator.language];for(const e of n){if(!e)continue;if(hl.includes(e))return e;const t=e.split("-")[0];if(hl.includes(t))return t}return"en"}Tv({fallbackLocale:"en",initialLocale:ig()});const rg="5";var Sh;typeof window<"u"&&((Sh=window.__svelte??(window.__svelte={})).v??(Sh.v=new Set)).add(rg);nm();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="182",ag=0,yu=1,sg=2,Js=1,og=2,Ga=3,nr=0,En=1,Gn=2,ui=0,Qr=1,oc=2,Su=3,Mu=4,lg=5,xr=100,cg=101,dg=102,ug=103,hg=104,fg=200,pg=201,mg=202,vg=203,lc=204,cc=205,gg=206,_g=207,xg=208,bg=209,yg=210,Sg=211,Mg=212,Eg=213,wg=214,dc=0,uc=1,hc=2,ia=3,fc=4,pc=5,mc=6,vc=7,xd=0,Tg=1,Ag=2,hi=0,Nf=1,Uf=2,Ff=3,Of=4,Bf=5,kf=6,zf=7,Hf=300,Ar=301,ra=302,gc=303,_c=304,Bo=306,xc=1e3,Ai=1001,bc=1002,en=1003,Rg=1004,Cs=1005,cn=1006,fl=1007,yr=1008,Dn=1009,Gf=1010,Vf=1011,Qa=1012,bd=1013,_i=1014,ci=1015,Un=1016,yd=1017,Sd=1018,es=1020,Wf=35902,Xf=35899,$f=1021,qf=1022,Zn=1023,Di=1026,Sr=1027,Yf=1028,Md=1029,aa=1030,Ed=1031,wd=1033,Qs=33776,eo=33777,to=33778,no=33779,yc=35840,Sc=35841,Mc=35842,Ec=35843,wc=36196,Tc=37492,Ac=37496,Rc=37488,Cc=37489,Pc=37490,Ic=37491,Lc=37808,Dc=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Hc=37817,Gc=37818,Vc=37819,Wc=37820,Xc=37821,$c=36492,qc=36494,Yc=36495,jc=36283,Kc=36284,Zc=36285,Jc=36286,Cg=3200,Td=0,Pg=1,Yi="",Hn="srgb",sa="srgb-linear",_o="linear",Et="srgb",Fr=7680,Eu=519,Ig=512,Lg=513,Dg=514,Ad=515,Ng=516,Ug=517,Rd=518,Fg=519,wu=35044,Tu="300 es",di=2e3,xo=2001;function jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Og(){const n=bo("canvas");return n.style.display="block",n}const Au={};function Ru(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function vt(...n){const e="THREE."+n.shift();console.error(e,...n)}function ts(...n){const e=n.join(" ");e in Au||(Au[e]=!0,nt(...n))}function Bg(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Qc=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function kg(n,e){return(n%e+e)%e}function ml(n,e,t){return(1-t)*n+t*e}function Da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=a[s+0],p=a[s+1],v=a[s+2],g=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==u||c!==p||d!==v){let m=l*u+c*p+d*v+h*g;m<0&&(u=-u,p=-p,v=-v,g=-g,m=-m);let f=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);f=Math.sin(f*M)/b,o=Math.sin(o*M)/b,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+g*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+g*o;const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=a[s],u=a[s+1],p=a[s+2],v=a[s+3];return e[t]=o*v+d*h+l*p-c*u,e[t+1]=l*v+d*u+c*h-o*p,e[t+2]=c*v+d*p+o*u-l*h,e[t+3]=d*v-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(a/2),u=l(i/2),p=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*d,this.y=i+l*d+o*c-a*h,this.z=r+l*h+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new H,Cu=new cs;class st{constructor(e,t,i,r,a,s,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],g=r[0],m=r[3],f=r[6],M=r[1],b=r[4],E=r[7],y=r[2],T=r[5],A=r[8];return a[0]=s*g+o*M+l*y,a[3]=s*m+o*b+l*T,a[6]=s*f+o*E+l*A,a[1]=c*g+d*M+h*y,a[4]=c*m+d*b+h*T,a[7]=c*f+d*E+h*A,a[2]=u*g+p*M+v*y,a[5]=u*m+p*b+v*T,a[8]=u*f+p*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*a,p=c*a-s*l,v=t*h+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(r*c-d*i)*g,e[2]=(o*i-r*s)*g,e[3]=u*g,e[4]=(d*t-r*l)*g,e[5]=(r*a-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new st,Pu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zg(){const n={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Et&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Et&&(r.r=ea(r.r),r.g=ea(r.g),r.b=ea(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?_o:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sa]:{primaries:e,whitePoint:i,transfer:_o,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}const gt=zg();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Or;class Hg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=bo("canvas")),Or.width=e.width,Or.height=e.height;const r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Pi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gg=0;class Cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(_l(r[s].image)):a.push(_l(r[s]))}else a=_l(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Vg=0;const xl=new H;class _n extends ya{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Ai,r=Ai,a=cn,s=yr,o=Zn,l=Dn,c=_n.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ls(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Hf;_n.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,y=(f+1)/2,T=(d+u)/4,A=(h+g)/4,D=(v+m)/4;return b>E&&b>y?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=T/i,a=A/i):E>y?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=T/r,a=D/r):y<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),i=A/a,r=D/a),this.set(i,r,a,t),this}let M=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(h-g)/M,this.z=(u-d)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wg extends ya{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new _n(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Cd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Wg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kf extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xg extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,qn):qn.fromBufferAttribute(a,s),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Is.subVectors(this.max,Na),Br.subVectors(e.a,Na),kr.subVectors(e.b,Na),zr.subVectors(e.c,Na),Hi.subVectors(kr,Br),Gi.subVectors(zr,kr),dr.subVectors(Br,zr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-dr.z,dr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,dr.z,0,-dr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-dr.y,dr.x,0];return!bl(t,Br,kr,zr,Is)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Br,kr,zr,Is))?!1:(Ls.crossVectors(Hi,Gi),t=[Ls.x,Ls.y,Ls.z],bl(t,Br,kr,zr,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new H,new H,new H,new H,new H,new H,new H,new H],qn=new H,Ps=new ds,Br=new H,kr=new H,zr=new H,Hi=new H,Gi=new H,dr=new H,Na=new H,Is=new H,Ls=new H,ur=new H;function bl(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){ur.fromArray(n,a);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),d=i.dot(ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $g=new ds,Ua=new H,yl=new H;class Pd{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$g.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(yl)),this.expandByPoint(Ua.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new H,Sl=new H,Ds=new H,Vi=new H,Ml=new H,Ns=new H,El=new H;class Zf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Sl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ds),o=Vi.dot(this.direction),l=-Vi.dot(Ds),c=Vi.lengthSq(),d=Math.abs(1-s*s);let h,u,p,v;if(d>0)if(h=s*l-o,u=s*o-l,v=a*d,h>=0)if(u>=-v)if(u<=v){const g=1/d;h*=g,u*=g,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sl).addScaledVector(Ds,u),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,a){Ml.subVectors(t,e),Ns.subVectors(i,e),El.crossVectors(Ml,Ns);let s=this.direction.dot(El),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Vi.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(Vi,Ns));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(Vi));if(c<0||l+c>s)return null;const d=-o*Vi.dot(El);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m)}set(e,t,i,r,a,s,o,l,c,d,h,u,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=s*d,p=s*h,v=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=v+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,v=c*d,g=c*h;t[0]=u+g*o,t[4]=v*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*d,t[9]=-o,t[2]=p*o-v,t[6]=g+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,v=c*d,g=c*h;t[0]=u-g*o,t[4]=-s*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*d,t[9]=g-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,v=o*d,g=o*h;t[0]=l*d,t[4]=v*c-p,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=g-u*h,t[8]=v*h+p,t[1]=h,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+v,t[10]=u-g*h}else if(e.order==="XZY"){const u=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=s*d,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qg,e,Yg)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Wi.crossVectors(i,Cn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Wi.crossVectors(i,Cn)),Wi.normalize(),Us.crossVectors(Cn,Wi),r[0]=Wi.x,r[4]=Us.x,r[8]=Cn.x,r[1]=Wi.y,r[5]=Us.y,r[9]=Cn.y,r[2]=Wi.z,r[6]=Us.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],g=i[6],m=i[10],f=i[14],M=i[3],b=i[7],E=i[11],y=i[15],T=r[0],A=r[4],D=r[8],S=r[12],w=r[1],I=r[5],N=r[9],B=r[13],$=r[2],V=r[6],X=r[10],G=r[14],K=r[3],ne=r[7],re=r[11],de=r[15];return a[0]=s*T+o*w+l*$+c*K,a[4]=s*A+o*I+l*V+c*ne,a[8]=s*D+o*N+l*X+c*re,a[12]=s*S+o*B+l*G+c*de,a[1]=d*T+h*w+u*$+p*K,a[5]=d*A+h*I+u*V+p*ne,a[9]=d*D+h*N+u*X+p*re,a[13]=d*S+h*B+u*G+p*de,a[2]=v*T+g*w+m*$+f*K,a[6]=v*A+g*I+m*V+f*ne,a[10]=v*D+g*N+m*X+f*re,a[14]=v*S+g*B+m*G+f*de,a[3]=M*T+b*w+E*$+y*K,a[7]=M*A+b*I+E*V+y*ne,a[11]=M*D+b*N+E*X+y*re,a[15]=M*S+b*B+E*G+y*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15],M=l*p-c*u,b=o*p-c*h,E=o*u-l*h,y=s*p-c*d,T=s*u-l*d,A=s*h-o*d;return t*(g*M-m*b+f*E)-i*(v*M-m*y+f*T)+r*(v*b-g*y+f*A)-a*(v*E-g*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],M=h*m*c-g*u*c+g*l*p-o*m*p-h*l*f+o*u*f,b=v*u*c-d*m*c-v*l*p+s*m*p+d*l*f-s*u*f,E=d*g*c-v*h*c+v*o*p-s*g*p-d*o*f+s*h*f,y=v*h*l-d*g*l-v*o*u+s*g*u+d*o*m-s*h*m,T=t*M+i*b+r*E+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=M*A,e[1]=(g*u*a-h*m*a-g*r*p+i*m*p+h*r*f-i*u*f)*A,e[2]=(o*m*a-g*l*a+g*r*c-i*m*c-o*r*f+i*l*f)*A,e[3]=(h*l*a-o*u*a-h*r*c+i*u*c+o*r*p-i*l*p)*A,e[4]=b*A,e[5]=(d*m*a-v*u*a+v*r*p-t*m*p-d*r*f+t*u*f)*A,e[6]=(v*l*a-s*m*a-v*r*c+t*m*c+s*r*f-t*l*f)*A,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*p+t*l*p)*A,e[8]=E*A,e[9]=(v*h*a-d*g*a-v*i*p+t*g*p+d*i*f-t*h*f)*A,e[10]=(s*g*a-v*o*a+v*i*c-t*g*c-s*i*f+t*o*f)*A,e[11]=(d*o*a-s*h*a-d*i*c+t*h*c+s*i*p-t*o*p)*A,e[12]=y*A,e[13]=(d*g*r-v*h*r+v*i*u-t*g*u-d*i*m+t*h*m)*A,e[14]=(v*o*r-s*g*r-v*i*l+t*g*l+s*i*m-t*o*m)*A,e[15]=(s*h*r-d*o*r+d*i*l-t*h*l-s*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,h=o+o,u=a*c,p=a*d,v=a*h,g=s*d,m=s*h,f=o*h,M=l*c,b=l*d,E=l*h,y=i.x,T=i.y,A=i.z;return r[0]=(1-(g+f))*y,r[1]=(p+E)*y,r[2]=(v-b)*y,r[3]=0,r[4]=(p-E)*T,r[5]=(1-(u+f))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(v+b)*A,r[9]=(m-M)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=Hr.set(r[0],r[1],r[2]).length();const s=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),Yn.copy(this);const c=1/a,d=1/s,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=di,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let v,g;if(l)v=a/(s-a),g=s*a/(s-a);else if(o===di)v=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===xo)v=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=di,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,g;if(l)v=1/(s-a),g=s/(s-a);else if(o===di)v=-2/(s-a),g=-(s+a)/(s-a);else if(o===xo)v=-1/(s-a),g=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new H,Yn=new Ot,qg=new H(0,0,0),Yg=new H(1,1,1),Wi=new H,Us=new H,Cn=new H,Lu=new Ot,Du=new cs;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const Nu=new H,Gr=new cs,Mi=new Ot,Fs=new H,Fa=new H,Kg=new H,Zg=new cs,Uu=new H(1,0,0),Fu=new H(0,1,0),Ou=new H(0,0,1),Bu={type:"added"},Jg={type:"removed"},Vr={type:"childadded",child:null},wl={type:"childremoved",child:null};class Tn extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new H,t=new Qn,i=new cs,r=new H(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Fa,Fs,this.up):Mi.lookAt(Fs,Fa,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jg),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new H,Ei=new H,Tl=new H,wi=new H,Wr=new H,Xr=new H,ku=new H,Al=new H,Rl=new H,Cl=new H,Pl=new Gt,Il=new Gt,Ll=new Gt;class Kn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jn.subVectors(e,t),r.cross(jn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){jn.subVectors(r,t),Ei.subVectors(i,t),Tl.subVectors(e,t);const s=jn.dot(jn),o=jn.dot(Ei),l=jn.dot(Tl),c=Ei.dot(Ei),d=Ei.dot(Tl),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(s*d-o*l)*u;return a.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Pl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Pl,a.x),s.addScaledVector(Il,a.y),s.addScaledVector(Ll,a.z),s}static isFrontFacing(e,t,i,r){return jn.subVectors(i,t),Ei.subVectors(e,t),jn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Wr.subVectors(r,i),Xr.subVectors(a,i),Al.subVectors(e,i);const l=Wr.dot(Al),c=Xr.dot(Al);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,r);const d=Wr.dot(Rl),h=Xr.dot(Rl);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Wr,s);Cl.subVectors(e,a);const p=Wr.dot(Cl),v=Xr.dot(Cl);if(v>=0&&p<=v)return t.copy(a);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Xr,o);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return ku.subVectors(a,r),o=(h-d)/(h-d+(p-v)),t.copy(r).addScaledVector(ku,o);const f=1/(m+g+u);return s=g*f,o=u*f,t.copy(i).addScaledVector(Wr,s).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=kg(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Dl(s,a,e+1/3),this.g=Dl(s,a,e),this.b=Dl(s,a,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hn){function i(a){a!==void 0&&parseFloat(a)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=Jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return gt.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(an.copy(this),t);const i=an.r,r=an.g,a=an.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Hn){gt.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Os);const i=ml(Xi.h,Os.h,t),r=ml(Xi.s,Os.s,t),a=ml(Xi.l,Os.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Qe;Qe.NAMES=Jf;let Qg=0;class Sa extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Qr,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oa extends Sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new H,Bs=new We;let e_=0;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Da(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Da(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Da(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),e}}class Qf extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ep extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let t_=0;const kn=new Ot,Nl=new Tn,$r=new H,Pn=new ds,Oa=new ds,Zt=new H;class On extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?ep:Qf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Pn.min,Oa.min),Pn.expandByPoint(Zt),Zt.addVectors(Pn.max,Oa.max),Pn.expandByPoint(Zt)):(Pn.expandByPoint(Oa.min),Pn.expandByPoint(Oa.max))}Pn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Zt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Zt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Zt.add($r)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new H,l[D]=new H;const c=new H,d=new H,h=new H,u=new We,p=new We,v=new We,g=new H,m=new H;function f(D,S,w){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,S),v.fromBufferAttribute(a,w),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(I),o[D].add(g),o[S].add(g),o[w].add(g),l[D].add(m),l[S].add(m),l[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const w=M[D],I=w.start,N=w.count;for(let B=I,$=I+N;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new H,E=new H,y=new H,T=new H;function A(D){y.fromBufferAttribute(r,D),T.copy(y);const S=o[D];b.copy(S),b.sub(y.multiplyScalar(y.dot(S))).normalize(),E.crossVectors(T,S);const I=E.dot(l[D])<0?-1:1;s.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,S=M.length;D<S;++D){const w=M[D],I=w.start,N=w.count;for(let B=I,$=I+N;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new H,a=new H,s=new H,o=new H,l=new H,c=new H,d=new H,h=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new fi(u,d,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Ot,hr=new Zf,ks=new Pd,Hu=new H,zs=new H,Hs=new H,Gs=new H,Ul=new H,Vs=new H,Gu=new H,Ws=new H;class tn extends Tn{constructor(e=new On,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Vs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Ul.fromBufferAttribute(h,e),s?Vs.addScaledVector(Ul,d):Vs.addScaledVector(Ul.sub(t),d))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(a),hr.copy(e.ray).recast(e.near),!(ks.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ks,Hu)===null||hr.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(a).invert(),hr.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,y=b;E<y;E+=3){const T=o.getX(E),A=o.getX(E+1),D=o.getX(E+2);r=Xs(this,f,e,i,c,d,h,T,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const M=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=Xs(this,s,e,i,c,d,h,M,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,y=b;E<y;E+=3){const T=E,A=E+1,D=E+2;r=Xs(this,f,e,i,c,d,h,T,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const M=m,b=m+1,E=m+2;r=Xs(this,s,e,i,c,d,h,M,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function n_(n,e,t,i,r,a,s,o){let l;if(e.side===En?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===nr,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,zs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Gs);const d=n_(n,e,t,i,zs,Hs,Gs,Gu);if(d){const h=new H;Kn.getBarycoord(Gu,zs,Hs,Gs,h),r&&(d.uv=Kn.getInterpolatedAttribute(r,o,l,c,h,new We)),a&&(d.uv1=Kn.getInterpolatedAttribute(a,o,l,c,h,new We)),s&&(d.normal=Kn.getInterpolatedAttribute(s,o,l,c,h,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};Kn.getNormal(zs,Hs,Gs,u.normal),d.face=u,d.barycoord=h}return d}class Ma extends On{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,t,e,s,a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(h,2));function v(g,m,f,M,b,E,y,T,A,D,S){const w=E/A,I=y/D,N=E/2,B=y/2,$=T/2,V=A+1,X=D+1;let G=0,K=0;const ne=new H;for(let re=0;re<X;re++){const de=re*I-B;for(let Pe=0;Pe<V;Pe++){const De=Pe*w-N;ne[g]=De*M,ne[m]=de*b,ne[f]=$,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=T>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(Pe/A),h.push(1-re/D),G+=1}}for(let re=0;re<D;re++)for(let de=0;de<A;de++){const Pe=u+de+V*re,De=u+de+V*(re+1),qe=u+(de+1)+V*(re+1),et=u+(de+1)+V*re;l.push(Pe,De,et),l.push(De,qe,et),K+=6}o.addGroup(p,K,S),p+=K,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const r in i)e[r]=i[r]}return e}function i_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const yo={clone:la,merge:un};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class np extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new H,Vu=new We,Wu=new We;class vn extends np{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Wu),t.subVectors(Wu,Vu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class s_ extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(qr,Yr,e,t);r.layers=this.layers,this.add(r);const a=new vn(qr,Yr,e,t);a.layers=this.layers,this.add(a);const s=new vn(qr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new vn(qr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new vn(qr,Yr,e,t);l.layers=this.layers,this.add(l);const c=new vn(qr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ip extends _n{constructor(e=[],t=Ar,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ip(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ma(5,5,5),a=new nn({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ui});a.uniforms.tEquirect.value=t;const s=new tn(r,a),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=cn),new s_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class Va extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ld extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class l_ extends _n{constructor(e=null,t=1,i=1,r,a,s,o,l,c=en,d=en,h,u){super(null,s,o,l,c,d,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=new H,c_=new H,d_=new st;class vr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ol.subVectors(i,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||d_.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Pd,u_=new We(.5,.5),$s=new H;class Dd{constructor(e=new vr,t=new vr,i=new vr,r=new vr,a=new vr,s=new vr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],p=a[7],v=a[8],g=a[9],m=a[10],f=a[11],M=a[12],b=a[13],E=a[14],y=a[15];if(r[0].setComponents(c-s,p-d,f-v,y-M).normalize(),r[1].setComponents(c+s,p+d,f+v,y+M).normalize(),r[2].setComponents(c+o,p+h,f+g,y+b).normalize(),r[3].setComponents(c-o,p-h,f-g,y-b).normalize(),i)r[4].setComponents(l,u,m,E).normalize(),r[5].setComponents(c-l,p-u,f-m,y-E).normalize();else if(r[4].setComponents(c-l,p-u,f-m,y-E).normalize(),t===di)r[5].setComponents(c+l,p+u,f+m,y+E).normalize();else if(t===xo)r[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const t=u_.distanceTo(e.center);return fr.radius=.7071067811865476+t,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($s.x=r.normal.x>0?e.max.x:e.min.x,$s.y=r.normal.y>0?e.max.y:e.min.y,$s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ns extends _n{constructor(e,t,i=_i,r,a,s,o=en,l=en,c,d=Di,h=1){if(d!==Di&&d!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class h_ extends ns{constructor(e,t=_i,i=Ar,r,a,s=en,o=en,l,c=Di){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ap extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class us extends On{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),d(),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(a.slice(),3)),this.setAttribute("uv",new Wt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new H,E=new H,y=new H;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],E),p(t[T+2],y),l(b,E,y,M)}function l(M,b,E,y){const T=y+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const S=M.clone().lerp(E,D/T),w=b.clone().lerp(E,D/T),I=T-D;for(let N=0;N<=I;N++)N===0&&D===T?A[D][N]=S:A[D][N]=S.clone().lerp(w,N/I)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const w=Math.floor(S/2);S%2===0?(u(A[D][w+1]),u(A[D+1][w]),u(A[D][w])):(u(A[D][w+1]),u(A[D+1][w+1]),u(A[D+1][w]))}}function c(M){const b=new H;for(let E=0;E<a.length;E+=3)b.x=a[E+0],b.y=a[E+1],b.z=a[E+2],b.normalize().multiplyScalar(M),a[E+0]=b.x,a[E+1]=b.y,a[E+2]=b.z}function d(){const M=new H;for(let b=0;b<a.length;b+=3){M.x=a[b+0],M.y=a[b+1],M.z=a[b+2];const E=m(M)/2/Math.PI+.5,y=f(M)/Math.PI+.5;s.push(E,1-y)}v(),h()}function h(){for(let M=0;M<s.length;M+=6){const b=s[M+0],E=s[M+2],y=s[M+4],T=Math.max(b,E,y),A=Math.min(b,E,y);T>.9&&A<.1&&(b<.2&&(s[M+0]+=1),E<.2&&(s[M+2]+=1),y<.2&&(s[M+4]+=1))}}function u(M){a.push(M.x,M.y,M.z)}function p(M,b){const E=M*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function v(){const M=new H,b=new H,E=new H,y=new H,T=new We,A=new We,D=new We;for(let S=0,w=0;S<a.length;S+=9,w+=6){M.set(a[S+0],a[S+1],a[S+2]),b.set(a[S+3],a[S+4],a[S+5]),E.set(a[S+6],a[S+7],a[S+8]),T.set(s[w+0],s[w+1]),A.set(s[w+2],s[w+3]),D.set(s[w+4],s[w+5]),y.copy(M).add(b).add(E).divideScalar(3);const I=m(y);g(T,w+0,M,I),g(A,w+2,b,I),g(D,w+4,E,I)}}function g(M,b,E,y){y<0&&M.x===1&&(s[b]=M.x-1),E.x===0&&E.z===0&&(s[b]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.vertices,e.indices,e.radius,e.detail)}}class Nd extends us{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class Ud extends us{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ud(e.radius,e.detail)}}class hs extends On{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<d;f++){const M=f*u-s;for(let b=0;b<c;b++){const E=b*h-a;v.push(E,-M,0),g.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const b=M+c*f,E=M+c*(f+1),y=M+1+c*(f+1),T=M+1+c*f;p.push(b,E,T),p.push(E,y,T)}this.setIndex(p),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fd extends us{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fd(e.radius,e.detail)}}class So extends On{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new H,h=new H,u=new H;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const g=v/r*a,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const g=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,M=(r+1)*p+v;s.push(g,m,M),s.push(m,f,M)}this.setIndex(s),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Od extends On{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],d=[],h=new H,u=new H,p=new H,v=new H,g=new H,m=new H,f=new H;for(let b=0;b<=i;++b){const E=b/i*a*Math.PI*2;M(E,a,s,e,p),M(E+.01,a,s,e,v),m.subVectors(v,p),f.addVectors(v,p),g.crossVectors(m,f),f.crossVectors(g,m),g.normalize(),f.normalize();for(let y=0;y<=r;++y){const T=y/r*Math.PI*2,A=-t*Math.cos(T),D=t*Math.sin(T);h.x=p.x+(A*f.x+D*g.x),h.y=p.y+(A*f.y+D*g.y),h.z=p.z+(A*f.z+D*g.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),c.push(u.x,u.y,u.z),d.push(b/i),d.push(y/r)}}for(let b=1;b<=i;b++)for(let E=1;E<=r;E++){const y=(r+1)*(b-1)+(E-1),T=(r+1)*b+(E-1),A=(r+1)*b+E,D=(r+1)*(b-1)+E;o.push(y,T,D),o.push(T,A,D)}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(d,2));function M(b,E,y,T,A){const D=Math.cos(b),S=Math.sin(b),w=y/E*b,I=Math.cos(w);A.x=T*(2+I)*.5*D,A.y=T*(2+I)*S*.5,A.z=T*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class f_ extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class p_ extends Sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m_ extends p_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xu extends Sa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v_ extends Sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends Sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sp extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bl=new Ot,$u=new H,qu=new H;class __{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x_ extends __{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Mo extends sp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new x_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bd extends np{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class op extends sp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class b_ extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Yu=new Ot;class y_{constructor(e,t,i=0,r=1/0){this.ray=new Zf(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(e,t=!0,i=[]){return ed(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ed(e[r],this,i,t);return i.sort(ju),i}}function ju(n,e){return n.distance-e.distance}function ed(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)ed(a[s],e,t,!0)}}function Ku(n,e,t,i){const r=S_(i);switch(t){case $f:return n*e;case Yf:return n*e/r.components*r.byteLength;case Md:return n*e/r.components*r.byteLength;case aa:return n*e*2/r.components*r.byteLength;case Ed:return n*e*2/r.components*r.byteLength;case qf:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case wd:return n*e*4/r.components*r.byteLength;case Qs:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Ec:return Math.max(n,16)*Math.max(e,8)/4;case yc:case Mc:return Math.max(n,8)*Math.max(e,8)/2;case wc:case Tc:case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $c:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S_(n){switch(n){case Dn:case Gf:return{byteLength:1,components:1};case Qa:case Vf:case Un:return{byteLength:2,components:1};case yd:case Sd:return{byteLength:2,components:4};case _i:case bd:case ci:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lp(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function M_(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,h[u]=g)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const g=h[p];n.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L_=`#ifdef USE_BATCHING
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
#endif`,D_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,B_=`#ifdef USE_BUMPMAP
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q_=`#define PI 3.141592653589793
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
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Pb=`#if DEPTH_PACKING == 3200
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
}`,Ib=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Vb=`#define NORMAL
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
}`,Wb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,qb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,jb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Zb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:E_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:R_,alphatest_pars_fragment:C_,aomap_fragment:P_,aomap_pars_fragment:I_,batching_pars_vertex:L_,batching_vertex:D_,begin_vertex:N_,beginnormal_vertex:U_,bsdfs:F_,iridescence_fragment:O_,bumpmap_pars_fragment:B_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:G_,color_fragment:V_,color_pars_fragment:W_,color_pars_vertex:X_,color_vertex:$_,common:q_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:j_,displacementmap_pars_vertex:K_,displacementmap_vertex:Z_,emissivemap_fragment:J_,emissivemap_pars_fragment:Q_,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:vx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:dx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:hx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:xx,lights_phong_pars_fragment:bx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:wx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Ix,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Gx,normal_pars_fragment:Vx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:eb,dithering_fragment:tb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:db,skinning_vertex:ub,skinnormal_vertex:hb,specularmap_fragment:fb,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:vb,transmission_fragment:gb,transmission_pars_fragment:_b,uv_pars_fragment:xb,uv_pars_vertex:bb,uv_vertex:yb,worldpos_vertex:Sb,background_vert:Mb,background_frag:Eb,backgroundCube_vert:wb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:Rb,depth_vert:Cb,depth_frag:Pb,distance_vert:Ib,distance_frag:Lb,equirect_vert:Db,equirect_frag:Nb,linedashed_vert:Ub,linedashed_frag:Fb,meshbasic_vert:Ob,meshbasic_frag:Bb,meshlambert_vert:kb,meshlambert_frag:zb,meshmatcap_vert:Hb,meshmatcap_frag:Gb,meshnormal_vert:Vb,meshnormal_frag:Wb,meshphong_vert:Xb,meshphong_frag:$b,meshphysical_vert:qb,meshphysical_frag:Yb,meshtoon_vert:jb,meshtoon_frag:Kb,points_vert:Zb,points_frag:Jb,shadow_vert:Qb,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},ye={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},si={basic:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:un([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:un([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:un([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:un([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:un([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:un([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:un([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:un([ye.lights,ye.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};si.physical={uniforms:un([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const qs={r:0,b:0,g:0},pr=new Qn,iy=new Ot;function ry(n,e,t,i,r,a,s){const o=new Qe(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function g(b){let E=!1;const y=v(b);y===null?f(o,l):y&&y.isColor&&(f(y,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const y=v(E);y&&(y.isCubeTexture||y.mapping===Bo)?(d===void 0&&(d=new tn(new Ma(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:la(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pr.copy(E.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(pr)),d.material.toneMapped=gt.getTransfer(y.colorSpace)!==Et,(h!==y||u!==y.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=y,u=y.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tn(new hs(2,2),new nn({name:"BackgroundMaterial",uniforms:la(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,E){b.getRGB(qs,tp(n)),i.buffers.color.setClear(qs.r,qs.g,qs.b,E,s)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:g,addToRenderList:m,dispose:M}}function ay(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(w,I,N,B,$){let V=!1;const X=h(B,N,I);a!==X&&(a=X,c(a.object)),V=p(w,B,N,$),V&&v(w,B,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,E(w,I,N,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function h(w,I,N){const B=N.wireframe===!0;let $=i[w.id];$===void 0&&($={},i[w.id]=$);let V=$[I.id];V===void 0&&(V={},$[I.id]=V);let X=V[B];return X===void 0&&(X=u(l()),V[B]=X),X}function u(w){const I=[],N=[],B=[];for(let $=0;$<t;$++)I[$]=0,N[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,I,N,B){const $=a.attributes,V=I.attributes;let X=0;const G=N.getAttributes();for(const K in G)if(G[K].location>=0){const re=$[K];let de=V[K];if(de===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;X++}return a.attributesNum!==X||a.index!==B}function v(w,I,N,B){const $={},V=I.attributes;let X=0;const G=N.getAttributes();for(const K in G)if(G[K].location>=0){let re=V[K];re===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),$[K]=de,X++}a.attributes=$,a.attributesNum=X,a.index=B}function g(){const w=a.newAttributes;for(let I=0,N=w.length;I<N;I++)w[I]=0}function m(w){f(w,0)}function f(w,I){const N=a.newAttributes,B=a.enabledAttributes,$=a.attributeDivisors;N[w]=1,B[w]===0&&(n.enableVertexAttribArray(w),B[w]=1),$[w]!==I&&(n.vertexAttribDivisor(w,I),$[w]=I)}function M(){const w=a.newAttributes,I=a.enabledAttributes;for(let N=0,B=I.length;N<B;N++)I[N]!==w[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function b(w,I,N,B,$,V,X){X===!0?n.vertexAttribIPointer(w,I,N,$,V):n.vertexAttribPointer(w,I,N,B,$,V)}function E(w,I,N,B){g();const $=B.attributes,V=N.getAttributes(),X=I.defaultAttributeValues;for(const G in V){const K=V[G];if(K.location>=0){let ne=$[G];if(ne===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){const re=ne.normalized,de=ne.itemSize,Pe=e.get(ne);if(Pe===void 0)continue;const De=Pe.buffer,qe=Pe.type,et=Pe.bytesPerElement,J=qe===n.INT||qe===n.UNSIGNED_INT||ne.gpuType===bd;if(ne.isInterleavedBufferAttribute){const te=ne.data,pe=te.stride,Be=ne.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)f(K.location+_e,te.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<K.locationSize;_e++)m(K.location+_e);n.bindBuffer(n.ARRAY_BUFFER,De);for(let _e=0;_e<K.locationSize;_e++)b(K.location+_e,de/K.locationSize,qe,re,pe*et,(Be+de/K.locationSize*_e)*et,J)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<K.locationSize;te++)f(K.location+te,ne.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<K.locationSize;te++)m(K.location+te);n.bindBuffer(n.ARRAY_BUFFER,De);for(let te=0;te<K.locationSize;te++)b(K.location+te,de/K.locationSize,qe,re,de*et,de/K.locationSize*te*et,J)}}else if(X!==void 0){const re=X[G];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(K.location,re);break;case 3:n.vertexAttrib3fv(K.location,re);break;case 4:n.vertexAttrib4fv(K.location,re);break;default:n.vertexAttrib1fv(K.location,re)}}}}M()}function y(){D();for(const w in i){const I=i[w];for(const N in I){const B=I[N];for(const $ in B)d(B[$].object),delete B[$];delete I[N]}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const N in I){const B=I[N];for(const $ in B)d(B[$].object),delete B[$];delete I[N]}delete i[w.id]}function A(w){for(const I in i){const N=i[I];if(N[w.id]===void 0)continue;const B=N[w.id];for(const $ in B)d(B[$].object),delete B[$];delete N[w.id]}}function D(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function sy(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];t.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],d[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let v=0;for(let g=0;g<h;g++)v+=d[g]*u[g];t.update(v,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function oy(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(nt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,maxSamples:y,samples:T}}function ly(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new vr,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||a&&!m)a?d(null):c();else{const M=a?0:i,b=M*4;let E=f.clippingState||null;l.value=E,E=d(v,u,b,p);for(let y=0;y!==b;++y)E[y]=t[y];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==g;++b,E+=4)s.copy(h[b]).applyMatrix4(M,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cy(n){let e=new WeakMap;function t(s,o){return o===gc?s.mapping=Ar:o===_c&&(s.mapping=ra),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===gc||o===_c)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new rp(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Zi=4,Zu=[.125,.215,.35,.446,.526,.582],br=20,dy=256,Ba=new Bd,Ju=new Qe;let kl=null,zl=0,Hl=0,Gl=!1;const uy=new H;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=uy}=a;kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,zl,Hl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Un,format:Zn,colorSpace:sa,depthBuffer:!1},r=eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hy(a)),this._blurMaterial=py(a,e,t),this._ggxMaterial=fy(a,e,t)}return r}_compileMaterial(e){const t=new tn(new On,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,r,a){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ju),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new Ma,new oa({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Ju),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[b],a.y,a.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[b]));const y=this._cubeSize;jr(r,E*y,b>2?y:0,y,y),h.setRenderTarget(r),f&&h.render(g,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ar||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,g=this._sizeLods[i],m=3*g*(i>v-Zi?i-v+Zi:0),f=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,jr(a,m,f,3*g,2*g),r.setRenderTarget(a),r.render(o,Ba),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,jr(e,m,f,3*g,2*g),r.setRenderTarget(e),r.render(o,Ba)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*br-1),g=a/v,m=isFinite(a)?1+Math.floor(d*g):br;m>br&&nt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const f=[];let M=0;for(let A=0;A<br;++A){const D=A/g,S=Math.exp(-D*D/2);f.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=v,u.mipInt.value=b-i;const E=this._sizeLods[r],y=3*E*(r>b-Zi?r-b+Zi:0),T=4*(this._cubeSize-E);jr(t,y,T,3*E,2*E),l.setRenderTarget(t),l.render(h,Ba)}}function hy(n){const e=[],t=[],i=[];let r=n;const a=n-Zi+1+Zu.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-Zi?l=Zu[s-n+Zi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,g=3,m=2,f=1,M=new Float32Array(g*v*p),b=new Float32Array(m*v*p),E=new Float32Array(f*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,D=T>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(S,g*v*T),b.set(u,m*v*T);const w=[T,T,T,T,T,T];E.set(w,f*v*T)}const y=new On;y.setAttribute("position",new fi(M,g)),y.setAttribute("uv",new fi(b,m)),y.setAttribute("faceIndex",new fi(E,f)),i.push(new tn(y,null)),r>Zi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function eh(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fy(n,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function py(n,e,t){const i=new Float32Array(br),r=new H(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function th(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function nh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function my(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gc||l===_c,d=l===Ar||l===ra;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Qu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new Qu(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function vy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("WebGLRenderer: "+i+" extension not supported."),r}}}function gy(n,e,t,i){const r={},a=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete r[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let b=0,E=M.length;b<E;b+=3){const y=M[b+0],T=M[b+1],A=M[b+2];u.push(y,T,T,A,A,y)}}else if(v!==void 0){const M=v.array;g=v.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const y=b+0,T=b+1,A=b+2;u.push(y,T,T,A,A,y)}}else return;const m=new(jf(u)?ep:Qf)(u,1);m.version=g;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function _y(n,e,t){let i;function r(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){n.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,v){v!==0&&(n.drawElementsInstanced(i,p,a,u*s,v),t.update(p,i,v))}function d(u,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,i,1)}function h(u,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,g,0,v);let f=0;for(let M=0;M<v;M++)f+=p[M]*g[M];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function xy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:vt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function by(n,e,t){const i=new WeakMap,r=new Gt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let w=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let y=o.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*T*4*h),D=new Kf(A,y,T,h);D.type=ci,D.needsUpdate=!0;const S=E*4;for(let I=0;I<h;I++){const N=f[I],B=M[I],$=b[I],V=y*T*4*I;for(let X=0;X<N.count;X++){const G=X*S;v===!0&&(r.fromBufferAttribute(N,X),A[V+G+0]=r.x,A[V+G+1]=r.y,A[V+G+2]=r.z,A[V+G+3]=0),g===!0&&(r.fromBufferAttribute(B,X),A[V+G+4]=r.x,A[V+G+5]=r.y,A[V+G+6]=r.z,A[V+G+7]=0),m===!0&&(r.fromBufferAttribute($,X),A[V+G+8]=r.x,A[V+G+9]=r.y,A[V+G+10]=r.z,A[V+G+11]=$.itemSize===4?r.w:1)}}u={count:h,texture:D,size:new We(y,T)},i.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function yy(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Sy={[Nf]:"LINEAR_TONE_MAPPING",[Uf]:"REINHARD_TONE_MAPPING",[Ff]:"CINEON_TONE_MAPPING",[Of]:"ACES_FILMIC_TONE_MAPPING",[kf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Bf]:"CUSTOM_TONE_MAPPING"};function My(n,e,t,i,r){const a=new wn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new wn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),o=new On;o.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const l=new f_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new tn(o,l),d=new Bd(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,g=null,m=[],f=!1;this.setSize=function(M,b){a.setSize(M,b),s.setSize(M,b);for(let E=0;E<m.length;E++){const y=m[E];y.setSize&&y.setSize(M,b)}},this.setEffects=function(M){m=M,f=m.length>0&&m[0].isRenderPass===!0;const b=a.width,E=a.height;for(let y=0;y<m.length;y++){const T=m[y];T.setSize&&T.setSize(b,E)}},this.begin=function(M,b){if(p||M.toneMapping===hi&&m.length===0)return!1;if(g=b,b!==null){const E=b.width,y=b.height;(a.width!==E||a.height!==y)&&this.setSize(E,y)}return f===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=hi,!0},this.hasRenderPass=function(){return f},this.end=function(M,b){M.toneMapping=v,p=!0;let E=a,y=s;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(M,y,E,b),A.needsSwap!==!1)){const D=E;E=y,y=D}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},gt.getTransfer(h)===Et&&(l.defines.SRGB_TRANSFER="");const T=Sy[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(g),M.render(c,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const cp=new _n,td=new ns(1,1),dp=new Kf,up=new Xg,hp=new ip,ih=[],rh=[],ah=new Float32Array(16),sh=new Float32Array(9),oh=new Float32Array(4);function Ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=ih[r];if(a===void 0&&(a=new Float32Array(r),ih[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ey(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Ry(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;oh.set(i),n.uniformMatrix2fv(this.addr,!1,oh),Kt(t,i)}}function Cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;sh.set(i),n.uniformMatrix3fv(this.addr,!1,sh),Kt(t,i)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;ah.set(i),n.uniformMatrix4fv(this.addr,!1,ah),Kt(t,i)}}function Iy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function ky(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(td.compareFunction=t.isReversedDepthBuffer()?Rd:Ad,a=td):a=cp,t.setTexture2D(e||a,r)}function zy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||up,r)}function Hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hp,r)}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dp,r)}function Vy(n){switch(n){case 5126:return Ey;case 35664:return wy;case 35665:return Ty;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Fy;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(n,e){n.uniform1fv(this.addr,e)}function Xy(n,e){const t=Ea(e,this.size,2);n.uniform2fv(this.addr,t)}function $y(n,e){const t=Ea(e,this.size,3);n.uniform3fv(this.addr,t)}function qy(n,e){const t=Ea(e,this.size,4);n.uniform4fv(this.addr,t)}function Yy(n,e){const t=Ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jy(n,e){const t=Ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ky(n,e){const t=Ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zy(n,e){n.uniform1iv(this.addr,e)}function Jy(n,e){n.uniform2iv(this.addr,e)}function Qy(n,e){n.uniform3iv(this.addr,e)}function eS(n,e){n.uniform4iv(this.addr,e)}function tS(n,e){n.uniform1uiv(this.addr,e)}function nS(n,e){n.uniform2uiv(this.addr,e)}function iS(n,e){n.uniform3uiv(this.addr,e)}function rS(n,e){n.uniform4uiv(this.addr,e)}function aS(n,e,t){const i=this.cache,r=e.length,a=zo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=td:s=cp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function sS(n,e,t){const i=this.cache,r=e.length,a=zo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||up,a[s])}function oS(n,e,t){const i=this.cache,r=e.length,a=zo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||hp,a[s])}function lS(n,e,t){const i=this.cache,r=e.length,a=zo(t,r);jt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||dp,a[s])}function cS(n){switch(n){case 5126:return Wy;case 35664:return Xy;case 35665:return $y;case 35666:return qy;case 35674:return Yy;case 35675:return jy;case 35676:return Ky;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Qy;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return lS}}class dS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}}class uS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cS(t.type)}}class hS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function lh(n,e){n.seq.push(e),n.map[e.id]=e}function fS(n,e,t){const i=n.name,r=i.length;for(Vl.lastIndex=0;;){const a=Vl.exec(i),s=Vl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){lh(t,c===void 0?new dS(o,n,e):new uS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new hS(o),lh(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);fS(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pS=37297;let mS=0;function vS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const dh=new st;function gS(n){gt._getMatrix(dh,gt.workingColorSpace,n);const e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case _o:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+vS(n.getShaderSource(e),o)}else return a}function _S(n,e){const t=gS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xS={[Nf]:"Linear",[Uf]:"Reinhard",[Ff]:"Cineon",[Of]:"ACESFilmic",[kf]:"AgX",[zf]:"Neutral",[Bf]:"Custom"};function bS(n,e){const t=xS[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ys=new H;function yS(){gt.getLuminanceCoefficients(Ys);const n=Ys.x.toFixed(4),e=Ys.y.toFixed(4),t=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function MS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ES(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Wa(n){return n!==""}function hh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(n){return n.replace(wS,AS)}const TS=new Map;function AS(n,e){let t=ot[e];if(t===void 0){const i=TS.get(e);if(i!==void 0)t=ot[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nd(t)}const RS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(n){return n.replace(RS,CS)}function CS(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function mh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const PS={[Js]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function IS(n){return PS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LS={[Ar]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function DS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":LS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const NS={[ra]:"ENVMAP_MODE_REFRACTION"};function US(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":NS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FS={[xd]:"ENVMAP_BLENDING_MULTIPLY",[Tg]:"ENVMAP_BLENDING_MIX",[Ag]:"ENVMAP_BLENDING_ADD"};function OS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":FS[n.combine]||"ENVMAP_BLENDING_NONE"}function BS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=IS(t),c=DS(t),d=US(t),h=OS(t),u=BS(t),p=SS(t),v=MS(a),g=r.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Wa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Wa).join(`
`),f.length>0&&(f+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),f=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?ot.tonemapping_pars_fragment:"",t.toneMapping!==hi?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,_S("linearToOutputTexel",t.outputColorSpace),yS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),s=nd(s),s=hh(s,t),s=fh(s,t),o=nd(o),o=hh(o,t),o=fh(o,t),s=ph(s),o=ph(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+s,E=M+f+o,y=ch(r,r.VERTEX_SHADER,b),T=ch(r,r.FRAGMENT_SHADER,E);r.attachShader(g,y),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(y)||"",$=r.getShaderInfoLog(T)||"",V=N.trim(),X=B.trim(),G=$.trim();let K=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,y,T);else{const re=uh(r,y,"vertex"),de=uh(r,T,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+re+`
`+de)}else V!==""?nt("WebGLProgram: Program Info Log:",V):(X===""||G==="")&&(ne=!1);ne&&(I.diagnostics={runnable:K,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(y),r.deleteShader(T),D=new io(r,g),S=ES(r,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,pS)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}let zS=0;class HS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GS(e),t.set(e,i)),i}}class GS{constructor(e){this.id=zS++,this.code=e,this.usedTimes=0}}function VS(n,e,t,i,r,a,s){const o=new Id,l=new HS,c=new Set,d=[],h=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,I,N,B){const $=N.fog,V=B.geometry,X=S.isMeshStandardMaterial?N.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),K=G&&G.mapping===Bo?G.image.height:null,ne=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&nt("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=re!==void 0?re.length:0;let Pe=0;V.morphAttributes.position!==void 0&&(Pe=1),V.morphAttributes.normal!==void 0&&(Pe=2),V.morphAttributes.color!==void 0&&(Pe=3);let De,qe,et,J;if(ne){const it=si[ne];De=it.vertexShader,qe=it.fragmentShader}else De=S.vertexShader,qe=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),J=l.getFragmentShaderID(S);const te=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Ye=!!S.map,mt=!!S.matcap,Ze=!!G,Je=!!S.aoMap,rt=!!S.lightMap,ke=!!S.bumpMap,ct=!!S.normalMap,U=!!S.displacementMap,Ie=!!S.emissiveMap,Re=!!S.metalnessMap,Ge=!!S.roughnessMap,ie=S.anisotropy>0,P=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,Z=S.sheen>0,Q=S.transmission>0,Y=ie&&!!S.anisotropyMap,xe=P&&!!S.clearcoatMap,le=P&&!!S.clearcoatNormalMap,Ee=P&&!!S.clearcoatRoughnessMap,Oe=F&&!!S.iridescenceMap,ae=F&&!!S.iridescenceThicknessMap,he=Z&&!!S.sheenColorMap,Me=Z&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ue=!!S.specularColorMap,je=!!S.specularIntensityMap,O=Q&&!!S.transmissionMap,fe=Q&&!!S.thicknessMap,ce=!!S.gradientMap,Se=!!S.alphaMap,oe=S.alphaTest>0,ee=!!S.alphaHash,se=!!S.extensions;let Le=hi;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=n.toneMapping);const tt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:De,fragmentShader:qe,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:sa,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:mt,envMap:Ze,envMapMode:Ze&&G.mapping,envMapCubeUVHeight:K,aoMap:Je,lightMap:rt,bumpMap:ke,normalMap:ct,displacementMap:U,emissiveMap:Ie,normalMapObjectSpace:ct&&S.normalMapType===Pg,normalMapTangentSpace:ct&&S.normalMapType===Td,metalnessMap:Re,roughnessMap:Ge,anisotropy:ie,anisotropyMap:Y,clearcoat:P,clearcoatMap:xe,clearcoatNormalMap:le,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:F,iridescenceMap:Oe,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:he,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:ue,specularIntensityMap:je,transmission:Q,transmissionMap:O,thicknessMap:fe,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Qr&&S.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:ee,combine:S.combine,mapUv:Ye&&g(S.map.channel),aoMapUv:Je&&g(S.aoMap.channel),lightMapUv:rt&&g(S.lightMap.channel),bumpMapUv:ke&&g(S.bumpMap.channel),normalMapUv:ct&&g(S.normalMap.channel),displacementMapUv:U&&g(S.displacementMap.channel),emissiveMapUv:Ie&&g(S.emissiveMap.channel),metalnessMapUv:Re&&g(S.metalnessMap.channel),roughnessMapUv:Ge&&g(S.roughnessMap.channel),anisotropyMapUv:Y&&g(S.anisotropyMap.channel),clearcoatMapUv:xe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(S.sheenRoughnessMap.channel),specularMapUv:Te&&g(S.specularMap.channel),specularColorMapUv:ue&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:fe&&g(S.thicknessMap.channel),alphaMapUv:Se&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ct||ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ye||Se),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:Ie&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&S.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(M(w,S),b(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function b(S,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const w=v[S.type];let I;if(w){const N=si[w];I=yo.clone(N.uniforms)}else I=S.uniforms;return I}function y(S,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new kS(n,w,S,a),d.push(I),h.set(w,I)),I}function T(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),h.delete(S.cacheKey),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:D}}function WS(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function XS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,u,p,v,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,u,p,v,g,m){const f=s(h,u,p,v,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,u,p,v,g,m){const f=s(h,u,p,v,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||XS),i.length>1&&i.sort(u||vh),r.length>1&&r.sort(u||vh)}function d(){for(let h=e,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function $S(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new gh,n.set(i,[s])):r>=a.length?(s=new gh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function qS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function YS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jS=0;function KS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZS(n){const e=new qS,t=YS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,a=new Ot,s=new Ot;function o(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,M=0,b=0,E=0,y=0,T=0,A=0;c.sort(KS);for(let S=0,w=c.length;S<w;S++){const I=c[S],N=I.color,B=I.intensity,$=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===aa?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=N.r*B,h+=N.g*B,u+=N.b*B;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],B);A++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=X,p++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=$,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[g]=X;const G=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[g]=G.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=V,E++}g++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=X,m++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const G=I.shadow,K=t.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=I.shadow.matrix,b++}i.point[v]=X,v++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(B),X.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==y||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,D.directionalLength=p,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=y,D.numLightProbes=A,i.version=jS++)}function l(c,d){let h=0,u=0,p=0,v=0,g=0;const m=d.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),s.identity(),a.copy(b.matrixWorld),a.premultiply(m),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function _h(n){const e=new ZS(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function JS(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new _h(n),e.set(r,[o])):a>=s.length?(o=new _h(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],n1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xh=new Ot,ka=new H,Wl=new H;function i1(n,e,t){let i=new Dd;const r=new We,a=new We,s=new Gt,o=new v_,l=new g_,c={},d=t.maxTextureSize,h={[nr]:En,[En]:nr,[Gn]:Gn},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:QS,fragmentShader:e1}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let f=this.type;this.render=function(T,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===og&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Js);const S=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&A.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(V=>V.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,V=T.length;$<V;$++){const X=T[$],G=X.shadow;if(G===void 0){nt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const K=G.getFrameExtents();if(r.multiply(K),a.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/K.x),r.x=a.x*K.x,G.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/K.y),r.y=a.y*K.y,G.mapSize.y=a.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ga){if(X.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(r.x,r.y,{format:aa,type:Un,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ns(r.x,r.y,ci),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Di,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else{X.isPointLight?(G.map=new rp(r.x),G.map.depthTexture=new h_(r.x,_i)):(G.map=new wn(r.x,r.y),G.map.depthTexture=new ns(r.x,r.y,_i)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Di;const re=n.state.buffers.depth.getReversed();this.type===Js?(G.map.depthTexture.compareFunction=re?Rd:Ad,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en)}G.camera.updateProjectionMatrix()}const ne=G.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,re),n.clear();else{re===0&&(n.setRenderTarget(G.map),n.clear());const de=G.getViewport(re);s.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),N.viewport(s)}if(X.isPointLight){const de=G.camera,Pe=G.matrix,De=X.distance||de.far;De!==de.far&&(de.far=De,de.updateProjectionMatrix()),ka.setFromMatrixPosition(X.matrixWorld),de.position.copy(ka),Wl.copy(de.position),Wl.add(t1[re]),de.up.copy(n1[re]),de.lookAt(Wl),de.updateMatrixWorld(),Pe.makeTranslation(-ka.x,-ka.y,-ka.z),xh.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xh,de.coordinateSystem,de.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),E(A,D,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ga&&M(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,w,I)};function M(T,A){const D=e.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(r.x,r.y,{format:aa,type:Un})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,D,u,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,D,p,g,null)}function b(T,A,D,S){let w=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)w=I;else if(w=D.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=w.uuid,B=A.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let V=$[B];V===void 0&&(V=w.clone(),$[B]=V,A.addEventListener("dispose",y)),w=V}if(w.visible=A.visible,w.wireframe=A.wireframe,S===Ga?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=n.properties.get(w);N.light=D}return w}function E(T,A,D,S,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ga)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const B=e.update(T),$=T.material;if(Array.isArray($)){const V=B.groups;for(let X=0,G=V.length;X<G;X++){const K=V[X],ne=$[K.materialIndex];if(ne&&ne.visible){const re=b(T,ne,S,w);T.onBeforeShadow(n,T,A,D,B,re,K),n.renderBufferDirect(D,null,B,re,T,K),T.onAfterShadow(n,T,A,D,B,re,K)}}}else if($.visible){const V=b(T,$,S,w);T.onBeforeShadow(n,T,A,D,B,V,null),n.renderBufferDirect(D,null,B,V,T,null),T.onAfterShadow(n,T,A,D,B,V,null)}}const N=T.children;for(let B=0,$=N.length;B<$;B++)E(N[B],A,D,S,w)}function y(T){T.target.removeEventListener("dispose",y);for(const D in c){const S=c[D],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const r1={[dc]:uc,[hc]:mc,[fc]:vc,[ia]:pc,[uc]:dc,[mc]:hc,[vc]:fc,[pc]:ia};function a1(n,e){function t(){let O=!1;const fe=new Gt;let ce=null;const Se=new Gt(0,0,0,0);return{setMask:function(oe){ce!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),ce=oe)},setLocked:function(oe){O=oe},setClear:function(oe,ee,se,Le,tt){tt===!0&&(oe*=Le,ee*=Le,se*=Le),fe.set(oe,ee,se,Le),Se.equals(fe)===!1&&(n.clearColor(oe,ee,se,Le),Se.copy(fe))},reset:function(){O=!1,ce=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,fe=!1,ce=null,Se=null,oe=null;return{setReversed:function(ee){if(fe!==ee){const se=e.get("EXT_clip_control");ee?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),fe=ee;const Le=oe;oe=null,this.setClear(Le)}},getReversed:function(){return fe},setTest:function(ee){ee?te(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ee){ce!==ee&&!O&&(n.depthMask(ee),ce=ee)},setFunc:function(ee){if(fe&&(ee=r1[ee]),Se!==ee){switch(ee){case dc:n.depthFunc(n.NEVER);break;case uc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case ia:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case pc:n.depthFunc(n.GEQUAL);break;case mc:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ee}},setLocked:function(ee){O=ee},setClear:function(ee){oe!==ee&&(fe&&(ee=1-ee),n.clearDepth(ee),oe=ee)},reset:function(){O=!1,ce=null,Se=null,oe=null,fe=!1}}}function r(){let O=!1,fe=null,ce=null,Se=null,oe=null,ee=null,se=null,Le=null,tt=null;return{setTest:function(it){O||(it?te(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(it){fe!==it&&!O&&(n.stencilMask(it),fe=it)},setFunc:function(it,Lt,$t){(ce!==it||Se!==Lt||oe!==$t)&&(n.stencilFunc(it,Lt,$t),ce=it,Se=Lt,oe=$t)},setOp:function(it,Lt,$t){(ee!==it||se!==Lt||Le!==$t)&&(n.stencilOp(it,Lt,$t),ee=it,se=Lt,Le=$t)},setLocked:function(it){O=it},setClear:function(it){tt!==it&&(n.clearStencil(it),tt=it)},reset:function(){O=!1,fe=null,ce=null,Se=null,oe=null,ee=null,se=null,Le=null,tt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,M=null,b=null,E=null,y=null,T=null,A=new Qe(0,0,0),D=0,S=!1,w=null,I=null,N=null,B=null,$=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=G>=2);let ne=null,re={};const de=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),De=new Gt().fromArray(de),qe=new Gt().fromArray(Pe);function et(O,fe,ce,Se){const oe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(O,ee),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ce;se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(fe+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ee}const J={};J[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(n.DEPTH_TEST),s.setFunc(ia),ke(!1),ct(yu),te(n.CULL_FACE),Je(ui);function te(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function pe(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Be(O,fe){return h[O]!==fe?(n.bindFramebuffer(O,fe),h[O]=fe,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(O,fe){let ce=p,Se=!1;if(O){ce=u.get(fe),ce===void 0&&(ce=[],u.set(fe,ce));const oe=O.textures;if(ce.length!==oe.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,se=oe.length;ee<se;ee++)ce[ee]=n.COLOR_ATTACHMENT0+ee;ce.length=oe.length,Se=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ce)}function Ye(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const mt={[xr]:n.FUNC_ADD,[cg]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};mt[ug]=n.MIN,mt[hg]=n.MAX;const Ze={[fg]:n.ZERO,[pg]:n.ONE,[mg]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[yg]:n.SRC_ALPHA_SATURATE,[xg]:n.DST_COLOR,[gg]:n.DST_ALPHA,[vg]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[bg]:n.ONE_MINUS_DST_COLOR,[_g]:n.ONE_MINUS_DST_ALPHA,[Sg]:n.CONSTANT_COLOR,[Mg]:n.ONE_MINUS_CONSTANT_COLOR,[Eg]:n.CONSTANT_ALPHA,[wg]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(O,fe,ce,Se,oe,ee,se,Le,tt,it){if(O===ui){g===!0&&(pe(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),O!==lg){if(O!==m||it!==S){if((f!==xr||E!==xr)&&(n.blendEquation(n.FUNC_ADD),f=xr,E=xr),it)switch(O){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:vt("WebGLState: Invalid blending: ",O);break}else switch(O){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Su:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",O);break}M=null,b=null,y=null,T=null,A.set(0,0,0),D=0,m=O,S=it}return}oe=oe||fe,ee=ee||ce,se=se||Se,(fe!==f||oe!==E)&&(n.blendEquationSeparate(mt[fe],mt[oe]),f=fe,E=oe),(ce!==M||Se!==b||ee!==y||se!==T)&&(n.blendFuncSeparate(Ze[ce],Ze[Se],Ze[ee],Ze[se]),M=ce,b=Se,y=ee,T=se),(Le.equals(A)===!1||tt!==D)&&(n.blendColor(Le.r,Le.g,Le.b,tt),A.copy(Le),D=tt),m=O,S=!1}function rt(O,fe){O.side===Gn?pe(n.CULL_FACE):te(n.CULL_FACE);let ce=O.side===En;fe&&(ce=!ce),ke(ce),O.blending===Qr&&O.transparent===!1?Je(ui):Je(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(O){w!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),w=O)}function ct(O){O!==ag?(te(n.CULL_FACE),O!==I&&(O===yu?n.cullFace(n.BACK):O===sg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),I=O}function U(O){O!==N&&(X&&n.lineWidth(O),N=O)}function Ie(O,fe,ce){O?(te(n.POLYGON_OFFSET_FILL),(B!==fe||$!==ce)&&(n.polygonOffset(fe,ce),B=fe,$=ce)):pe(n.POLYGON_OFFSET_FILL)}function Re(O){O?te(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Ge(O){O===void 0&&(O=n.TEXTURE0+V-1),ne!==O&&(n.activeTexture(O),ne=O)}function ie(O,fe,ce){ce===void 0&&(ne===null?ce=n.TEXTURE0+V-1:ce=ne);let Se=re[ce];Se===void 0&&(Se={type:void 0,texture:void 0},re[ce]=Se),(Se.type!==O||Se.texture!==fe)&&(ne!==ce&&(n.activeTexture(ce),ne=ce),n.bindTexture(O,fe||J[O]),Se.type=O,Se.texture=fe)}function P(){const O=re[ne];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function le(){try{n.texStorage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function Oe(){try{n.texImage2D(...arguments)}catch(O){vt("WebGLState:",O)}}function ae(){try{n.texImage3D(...arguments)}catch(O){vt("WebGLState:",O)}}function he(O){De.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function Me(O){qe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),qe.copy(O))}function Te(O,fe){let ce=c.get(fe);ce===void 0&&(ce=new WeakMap,c.set(fe,ce));let Se=ce.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(fe,O.name),ce.set(O,Se))}function ue(O,fe){const Se=c.get(fe).get(O);l.get(fe)!==Se&&(n.uniformBlockBinding(fe,Se,O.__bindingPointIndex),l.set(fe,Se))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,re={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,M=null,b=null,E=null,y=null,T=null,A=new Qe(0,0,0),D=0,S=!1,w=null,I=null,N=null,B=null,$=null,De.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:te,disable:pe,bindFramebuffer:Be,drawBuffers:_e,useProgram:Ye,setBlending:Je,setMaterial:rt,setFlipSided:ke,setCullFace:ct,setLineWidth:U,setPolygonOffset:Ie,setScissorTest:Re,activeTexture:Ge,bindTexture:ie,unbindTexture:P,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Oe,texImage3D:ae,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:le,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:xe,scissor:he,viewport:Me,reset:je}}function s1(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,_){return p?new OffscreenCanvas(P,_):bo("canvas")}function g(P,_,F){let Z=1;const Q=ie(P);if((Q.width>F||Q.height>F)&&(Z=F/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(Z*Q.width),xe=Math.floor(Z*Q.height);h===void 0&&(h=v(Y,xe));const le=_?v(Y,xe):h;return le.width=Y,le.height=xe,le.getContext("2d").drawImage(P,0,0,Y,xe),nt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+xe+")."),le}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,_,F,Z,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const xe=Q?_o:gt.getTransfer(Z);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=xe===Et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(P,_){let F;return P?_===null||_===_i||_===es?F=n.DEPTH24_STENCIL8:_===ci?F=n.DEPTH32F_STENCIL8:_===Qa&&(F=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_i||_===es?F=n.DEPTH_COMPONENT24:_===ci?F=n.DEPTH_COMPONENT32F:_===Qa&&(F=n.DEPTH_COMPONENT16),F}function y(P,_){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function T(P){const _=P.target;_.removeEventListener("dispose",T),D(_),_.isVideoTexture&&d.delete(_)}function A(P){const _=P.target;_.removeEventListener("dispose",A),w(_)}function D(P){const _=i.get(P);if(_.__webglInit===void 0)return;const F=P.source,Z=u.get(F);if(Z){const Q=Z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(P),Object.keys(Z).length===0&&u.delete(F)}i.remove(P)}function S(P){const _=i.get(P);n.deleteTexture(_.__webglTexture);const F=P.source,Z=u.get(F);delete Z[_.__cacheKey],s.memory.textures--}function w(P){const _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let Q=0;Q<_.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=P.textures;for(let Z=0,Q=F.length;Z<Q;Z++){const Y=i.get(F[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(F[Z])}i.remove(P)}let I=0;function N(){I=0}function B(){const P=I;return P>=r.maxTextures&&nt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function $(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function V(P,_){const F=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&F.__version!==P.version){const Z=P.image;if(Z===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,P,_);return}}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(P,_){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){J(F,P,_);return}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function G(P,_){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){J(F,P,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function K(P,_){const F=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&F.__version!==P.version){te(F,P,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const ne={[xc]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},re={[en]:n.NEAREST,[Rg]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},de={[Ig]:n.NEVER,[Fg]:n.ALWAYS,[Lg]:n.LESS,[Ad]:n.LEQUAL,[Dg]:n.EQUAL,[Rd]:n.GEQUAL,[Ng]:n.GREATER,[Ug]:n.NOTEQUAL};function Pe(P,_){if(_.type===ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===fl||_.magFilter===Cs||_.magFilter===yr||_.minFilter===cn||_.minFilter===fl||_.minFilter===Cs||_.minFilter===yr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[_.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,re[_.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Cs&&_.minFilter!==yr||_.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function De(P,_){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",T));const Z=_.source;let Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));const Y=$(_);if(Y!==P.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[Y].usedTimes++;const xe=Q[P.__cacheKey];xe!==void 0&&(Q[P.__cacheKey].usedTimes--,xe.usedTimes===0&&S(_)),P.__cacheKey=Y,P.__webglTexture=Q[Y].texture}return F}function qe(P,_,F){return Math.floor(Math.floor(P/F)/_)}function et(P,_,F,Z){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Z,_.data);else{Y.sort((ae,he)=>ae.start-he.start);let xe=0;for(let ae=1;ae<Y.length;ae++){const he=Y[xe],Me=Y[ae],Te=he.start+he.count,ue=qe(Me.start,_.width,4),je=qe(he.start,_.width,4);Me.start<=Te+1&&ue===je&&qe(Me.start+Me.count-1,_.width,4)===ue?he.count=Math.max(he.count,Me.start+Me.count-he.start):(++xe,Y[xe]=Me)}Y.length=xe+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ae=0,he=Y.length;ae<he;ae++){const Me=Y[ae],Te=Math.floor(Me.start/4),ue=Math.ceil(Me.count/4),je=Te%_.width,O=Math.floor(Te/_.width),fe=ue,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,je,O,fe,ce,F,Z,_.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function J(P,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=De(P,_),Y=_.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+F);const xe=i.get(Y);if(Y.version!==xe.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const le=gt.getPrimaries(gt.workingColorSpace),Ee=_.colorSpace===Yi?null:gt.getPrimaries(_.colorSpace),Oe=_.colorSpace===Yi||le===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ae=g(_.image,!1,r.maxTextureSize);ae=Ge(_,ae);const he=a.convert(_.format,_.colorSpace),Me=a.convert(_.type);let Te=b(_.internalFormat,he,Me,_.colorSpace,_.isVideoTexture);Pe(Z,_);let ue;const je=_.mipmaps,O=_.isVideoTexture!==!0,fe=xe.__version===void 0||Q===!0,ce=Y.dataReady,Se=y(_,ae);if(_.isDepthTexture)Te=E(_.format===Sr,_.type),fe&&(O?t.texStorage2D(n.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,he,Me,null));else if(_.isDataTexture)if(je.length>0){O&&fe&&t.texStorage2D(n.TEXTURE_2D,Se,Te,je[0].width,je[0].height);for(let oe=0,ee=je.length;oe<ee;oe++)ue=je[oe],O?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ue.width,ue.height,he,Me,ue.data):t.texImage2D(n.TEXTURE_2D,oe,Te,ue.width,ue.height,0,he,Me,ue.data);_.generateMipmaps=!1}else O?(fe&&t.texStorage2D(n.TEXTURE_2D,Se,Te,ae.width,ae.height),ce&&et(_,ae,he,Me)):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,he,Me,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Te,je[0].width,je[0].height,ae.depth);for(let oe=0,ee=je.length;oe<ee;oe++)if(ue=je[oe],_.format!==Zn)if(he!==null)if(O){if(ce)if(_.layerUpdates.size>0){const se=Ku(ue.width,ue.height,_.format,_.type);for(const Le of _.layerUpdates){const tt=ue.data.subarray(Le*se/ue.data.BYTES_PER_ELEMENT,(Le+1)*se/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Le,ue.width,ue.height,1,he,tt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ue.width,ue.height,ae.depth,he,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Te,ue.width,ue.height,ae.depth,0,ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ue.width,ue.height,ae.depth,he,Me,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Te,ue.width,ue.height,ae.depth,0,he,Me,ue.data)}else{O&&fe&&t.texStorage2D(n.TEXTURE_2D,Se,Te,je[0].width,je[0].height);for(let oe=0,ee=je.length;oe<ee;oe++)ue=je[oe],_.format!==Zn?he!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Te,ue.width,ue.height,0,ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ue.width,ue.height,he,Me,ue.data):t.texImage2D(n.TEXTURE_2D,oe,Te,ue.width,ue.height,0,he,Me,ue.data)}else if(_.isDataArrayTexture)if(O){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Te,ae.width,ae.height,ae.depth),ce)if(_.layerUpdates.size>0){const oe=Ku(ae.width,ae.height,_.format,_.type);for(const ee of _.layerUpdates){const se=ae.data.subarray(ee*oe/ae.data.BYTES_PER_ELEMENT,(ee+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,he,Me,se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Me,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,he,Me,ae.data);else if(_.isData3DTexture)O?(fe&&t.texStorage3D(n.TEXTURE_3D,Se,Te,ae.width,ae.height,ae.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Me,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,he,Me,ae.data);else if(_.isFramebufferTexture){if(fe)if(O)t.texStorage2D(n.TEXTURE_2D,Se,Te,ae.width,ae.height);else{let oe=ae.width,ee=ae.height;for(let se=0;se<Se;se++)t.texImage2D(n.TEXTURE_2D,se,Te,oe,ee,0,he,Me,null),oe>>=1,ee>>=1}}else if(je.length>0){if(O&&fe){const oe=ie(je[0]);t.texStorage2D(n.TEXTURE_2D,Se,Te,oe.width,oe.height)}for(let oe=0,ee=je.length;oe<ee;oe++)ue=je[oe],O?ce&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,he,Me,ue):t.texImage2D(n.TEXTURE_2D,oe,Te,he,Me,ue);_.generateMipmaps=!1}else if(O){if(fe){const oe=ie(ae);t.texStorage2D(n.TEXTURE_2D,Se,Te,oe.width,oe.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Me,ae)}else t.texImage2D(n.TEXTURE_2D,0,Te,he,Me,ae);m(_)&&f(Z),xe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function te(P,_,F){if(_.image.length!==6)return;const Z=De(P,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+F);const Y=i.get(Q);if(Q.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const xe=gt.getPrimaries(gt.workingColorSpace),le=_.colorSpace===Yi?null:gt.getPrimaries(_.colorSpace),Ee=_.colorSpace===Yi||xe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!Oe&&!ae?he[ee]=g(_.image[ee],!0,r.maxCubemapSize):he[ee]=ae?_.image[ee].image:_.image[ee],he[ee]=Ge(_,he[ee]);const Me=he[0],Te=a.convert(_.format,_.colorSpace),ue=a.convert(_.type),je=b(_.internalFormat,Te,ue,_.colorSpace),O=_.isVideoTexture!==!0,fe=Y.__version===void 0||Z===!0,ce=Q.dataReady;let Se=y(_,Me);Pe(n.TEXTURE_CUBE_MAP,_);let oe;if(Oe){O&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,je,Me.width,Me.height);for(let ee=0;ee<6;ee++){oe=he[ee].mipmaps;for(let se=0;se<oe.length;se++){const Le=oe[se];_.format!==Zn?Te!==null?O?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,je,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,0,0,Le.width,Le.height,Te,ue,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,je,Le.width,Le.height,0,Te,ue,Le.data)}}}else{if(oe=_.mipmaps,O&&fe){oe.length>0&&Se++;const ee=ie(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Te,ue,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,he[ee].width,he[ee].height,0,Te,ue,he[ee].data);for(let se=0;se<oe.length;se++){const tt=oe[se].image[ee].image;O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,0,0,tt.width,tt.height,Te,ue,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,je,tt.width,tt.height,0,Te,ue,tt.data)}}else{O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,ue,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Te,ue,he[ee]);for(let se=0;se<oe.length;se++){const Le=oe[se];O?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,0,0,Te,ue,Le.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,je,Te,ue,Le.image[ee])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function pe(P,_,F,Z,Q,Y){const xe=a.convert(F.format,F.colorSpace),le=a.convert(F.type),Ee=b(F.internalFormat,xe,le,F.colorSpace),Oe=i.get(_),ae=i.get(F);if(ae.__renderTarget=_,!Oe.__hasExternalTextures){const he=Math.max(1,_.width>>Y),Me=Math.max(1,_.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,Ee,he,Me,_.depth,0,xe,le,null):t.texImage2D(Q,Y,Ee,he,Me,0,xe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ae.__webglTexture,0,U(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ae.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(P,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,P),_.depthBuffer){const Z=_.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=E(_.stencilBuffer,Q),xe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(_),Y,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,P)}else{const Z=_.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],xe=a.convert(Y.format,Y.colorSpace),le=a.convert(Y.type),Ee=b(Y.internalFormat,xe,le,Y.colorSpace);Ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(_),Ee,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(_),Ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(P,_,F){const Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_.depthTexture);const Oe=a.convert(_.depthTexture.format),ae=a.convert(_.depthTexture.type);let he;_.depthTexture.format===Di?he=n.DEPTH_COMPONENT24:_.depthTexture.format===Sr&&(he=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,_.width,_.height,0,Oe,ae,null)}}else V(_.depthTexture,0);const Y=Q.__webglTexture,xe=U(_),le=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ee=_.depthTexture.format===Sr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,le,Y,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,le,Y,0);else if(_.depthTexture.format===Sr)Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,le,Y,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,le,Y,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const _=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Z}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)_e(_.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?_e(_.__webglFramebuffer[0],P,0):_e(_.__webglFramebuffer,P,0)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Be(_.__webglDepthbuffer[Z],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Be(_.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(P,_,F){const Z=i.get(P);_!==void 0&&pe(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ye(P)}function Ze(P){const _=P.texture,F=i.get(P),Z=i.get(_);P.addEventListener("dispose",A);const Q=P.textures,Y=P.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,s.memory.textures++),Y){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)F.__webglFramebuffer[le][Ee]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let le=0,Ee=Q.length;le<Ee;le++){const Oe=i.get(Q[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),s.memory.textures++)}if(P.samples>0&&Ie(P)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const Ee=Q[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Oe=a.convert(Ee.format,Ee.colorSpace),ae=a.convert(Ee.type),he=b(Ee.internalFormat,Oe,ae,Ee.colorSpace,P.isXRRenderTarget===!0),Me=U(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,he,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)pe(F.__webglFramebuffer[le][Ee],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else pe(F.__webglFramebuffer[le],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,Ee=Q.length;le<Ee;le++){const Oe=Q[le],ae=i.get(Oe);let he=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ae.__webglTexture),Pe(he,Oe),pe(F.__webglFramebuffer,P,Oe,n.COLOR_ATTACHMENT0+le,he,0),m(Oe)&&f(he)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Pe(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)pe(F.__webglFramebuffer[Ee],P,_,n.COLOR_ATTACHMENT0,le,Ee);else pe(F.__webglFramebuffer,P,_,n.COLOR_ATTACHMENT0,le,0);m(_)&&f(le),t.unbindTexture()}P.depthBuffer&&Ye(P)}function Je(P){const _=P.textures;for(let F=0,Z=_.length;F<Z;F++){const Q=_[F];if(m(Q)){const Y=M(P),xe=i.get(Q).__webglTexture;t.bindTexture(Y,xe),f(Y),t.unbindTexture()}}}const rt=[],ke=[];function ct(P){if(P.samples>0){if(Ie(P)===!1){const _=P.textures,F=P.width,Z=P.height;let Q=n.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(P),le=_.length>1;if(le)for(let Oe=0;Oe<_.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ee=P.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<_.length;Oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const ae=i.get(_[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,Q,n.NEAREST),l===!0&&(rt.length=0,ke.length=0,rt.push(n.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(rt.push(Y),ke.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<_.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const ae=i.get(_[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const _=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function U(P){return Math.min(r.maxSamples,P.samples)}function Ie(P){const _=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(P){const _=s.render.frame;d.get(P)!==_&&(d.set(P,_),P.update())}function Ge(P,_){const F=P.colorSpace,Z=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==sa&&F!==Yi&&(gt.getTransfer(F)===Et?(Z!==Zn||Q!==Dn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",F)),_}function ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=mt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o1(n,e){function t(i,r=Yi){let a;const s=gt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===yd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gf)return n.BYTE;if(i===Vf)return n.SHORT;if(i===Qa)return n.UNSIGNED_SHORT;if(i===bd)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===$f)return n.ALPHA;if(i===qf)return n.RGB;if(i===Zn)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Yf)return n.RED;if(i===Md)return n.RED_INTEGER;if(i===aa)return n.RG;if(i===Ed)return n.RG_INTEGER;if(i===wd)return n.RGBA_INTEGER;if(i===Qs||i===eo||i===to||i===no)if(s===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===Sc||i===Mc||i===Ec)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===wc||i===Tc)return s===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ac)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rc)return a.COMPRESSED_R11_EAC;if(i===Cc)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Pc)return a.COMPRESSED_RG11_EAC;if(i===Ic)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Lc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===qc||i===Yc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===$c)return s===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===Kc||i===Zc||i===Jc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ap(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends ya{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const g=typeof XRWebGLBinding<"u",m=new d1,f={},M=t.getContextAttributes();let b=null,E=null;const y=[],T=[],A=new We;let D=null;const S=new vn;S.viewport=new Gt;const w=new vn;w.viewport=new Gt;const I=[S,w],N=new b_;let B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=y[J];return te===void 0&&(te=new Fl,y[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=y[J];return te===void 0&&(te=new Fl,y[J]=te),te.getGripSpace()},this.getHand=function(J){let te=y[J];return te===void 0&&(te=new Fl,y[J]=te),te.getHandSpace()};function V(J){const te=T.indexOf(J.inputSource);if(te===-1)return;const pe=y[te];pe!==void 0&&(pe.update(J.inputSource,J.frame,c||s),pe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let J=0;J<y.length;J++){const te=T[J];te!==null&&(T[J]=null,y[J].disconnect(te))}B=null,$=null,m.reset();for(const J in f)delete f[J];e.setRenderTarget(b),p=null,u=null,h=null,r=null,E=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Be=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?Sr:Di,Be=M.stencil?es:_i);const Ye={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Ye),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new wn(u.textureWidth,u.textureHeight,{format:Zn,type:Dn,depthTexture:new ns(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new wn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let te=0;te<J.removed.length;te++){const pe=J.removed[te],Be=T.indexOf(pe);Be>=0&&(T[Be]=null,y[Be].disconnect(pe))}for(let te=0;te<J.added.length;te++){const pe=J.added[te];let Be=T.indexOf(pe);if(Be===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=T.length){T.push(pe),Be=Ye;break}else if(T[Ye]===null){T[Ye]=pe,Be=Ye;break}if(Be===-1)break}const _e=y[Be];_e&&_e.connect(pe)}}const K=new H,ne=new H;function re(J,te,pe){K.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const Be=K.distanceTo(ne),_e=te.projectionMatrix.elements,Ye=pe.projectionMatrix.elements,mt=_e[14]/(_e[10]-1),Ze=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],rt=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],ct=(Ye[8]+1)/Ye[0],U=mt*ke,Ie=mt*ct,Re=Be/(-ke+ct),Ge=Re*-ke;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(Re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_e[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ie=mt+Re,P=Ze+Re,_=U-Ge,F=Ie+(Be-Ge),Z=Je*Ze/P*ie,Q=rt*Ze/P*ie;J.projectionMatrix.makePerspective(_,F,Z,Q,ie,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let te=J.near,pe=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),N.near=w.near=S.near=te,N.far=w.far=S.far=pe,(B!==N.near||$!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,$=N.far),N.layers.mask=J.layers.mask|6,S.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const Be=J.parent,_e=N.cameras;de(N,Be);for(let Ye=0;Ye<_e.length;Ye++)de(_e[Ye],Be);_e.length===2?re(N,S,w):N.projectionMatrix.copy(S.projectionMatrix),Pe(J,N,Be)};function Pe(J,te,pe){pe===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return f[J]};let De=null;function qe(J,te){if(d=te.getViewerPose(c||s),v=te,d!==null){const pe=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Be=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let Ze=0;Ze<pe.length;Ze++){const Je=pe[Ze];let rt=null;if(p!==null)rt=p.getViewport(Je);else{const ct=h.getViewSubImage(u,Je);rt=ct.viewport,Ze===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let ke=I[Ze];ke===void 0&&(ke=new vn,ke.layers.enable(Ze),ke.viewport=new Gt,I[Ze]=ke),ke.matrix.fromArray(Je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(rt.x,rt.y,rt.width,rt.height),Ze===0&&(N.matrix.copy(ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(ke)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const Ze=h.getDepthInformation(pe[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,r.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Ze=0;Ze<pe.length;Ze++){const Je=pe[Ze].camera;if(Je){let rt=f[Je];rt||(rt=new ap,f[Je]=rt);const ke=h.getCameraImage(Je);rt.sourceTexture=ke}}}}for(let pe=0;pe<y.length;pe++){const Be=T[pe],_e=y[pe];Be!==null&&_e!==void 0&&_e.update(Be,te,c||s)}De&&De(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const et=new lp;et.setAnimationLoop(qe),this.setAnimationLoop=function(J){De=J},this.dispose=function(){}}}const mr=new Qn,h1=new Ot;function f1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,tp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(a(m,f),v(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),g(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,E=M.envMapRotation;b&&(m.envMap.value=b,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(mr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p1(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;i.uniformBlockBinding(M,E)}function c(M,b){let E=r[M.id];E===void 0&&(v(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",m));const y=b.program;i.updateUBOMapping(M,y);const T=e.render.frame;a[M.id]!==T&&(u(M),a[M.id]=T)}function d(M){const b=h();M.__bindingPointIndex=b;const E=n.createBuffer(),y=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=r[M.id],E=M.uniforms,y=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,A=E.length;T<A;T++){const D=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,w=D.length;S<w;S++){const I=D[S];if(p(I,T,S,y)===!0){const N=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let V=0;V<B.length;V++){const X=B[V],G=g(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+$,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,b,E,y){const T=M.value,A=b+"_"+E;if(y[A]===void 0)return typeof T=="number"||typeof T=="boolean"?y[A]=T:y[A]=T.clone(),!0;{const D=y[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return y[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(M){const b=M.uniforms;let E=0;const y=16;for(let A=0,D=b.length;A<D;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,I=S.length;w<I;w++){const N=S[w],B=Array.isArray(N.value)?N.value:[N.value];for(let $=0,V=B.length;$<V;$++){const X=B[$],G=g(X),K=E%y,ne=K%G.boundary,re=K+ne;E+=ne,re!==0&&y-re<G.storage&&(E+=y-re),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=G.storage}}}const T=E%y;return T>0&&(E+=y-T),M.__size=E,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function f(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}const m1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function v1(){return ai===null&&(ai=new l_(m1,16,16,aa,Un),ai.name="DFG_LUT",ai.minFilter=cn,ai.magFilter=cn,ai.wrapS=Ai,ai.wrapT=Ai,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class zd{constructor(e={}){const{canvas:t=Og(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const g=p,m=new Set([wd,Ed,Md]),f=new Set([Dn,_i,Qa,es,yd,Sd]),M=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const T=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=Hn;let I=0,N=0,B=null,$=-1,V=null;const X=new Gt,G=new Gt;let K=null;const ne=new Qe(0);let re=0,de=t.width,Pe=t.height,De=1,qe=null,et=null;const J=new Gt(0,0,de,Pe),te=new Gt(0,0,de,Pe);let pe=!1;const Be=new Dd;let _e=!1,Ye=!1;const mt=new Ot,Ze=new H,Je=new Gt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ct(){return B===null?De:1}let U=i;function Ie(R,k){return t.getContext(R,k)}try{const R={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",it,!1),U===null){const k="webgl2";if(U=Ie(k,R),U===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw vt("WebGLRenderer: "+R.message),R}let Re,Ge,ie,P,_,F,Z,Q,Y,xe,le,Ee,Oe,ae,he,Me,Te,ue,je,O,fe,ce,Se,oe;function ee(){Re=new vy(U),Re.init(),ce=new o1(U,Re),Ge=new oy(U,Re,e,ce),ie=new a1(U,Re),Ge.reversedDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),P=new xy(U),_=new WS,F=new s1(U,Re,ie,_,Ge,ce,P),Z=new cy(S),Q=new my(S),Y=new M_(U),Se=new ay(U,Y),xe=new gy(U,Y,P,Se),le=new yy(U,xe,Y,P),je=new by(U,Ge,F),Me=new ly(_),Ee=new VS(S,Z,Q,Re,Ge,Se,Me),Oe=new f1(S,_),ae=new $S,he=new JS(Re),ue=new ry(S,Z,Q,ie,le,v,l),Te=new i1(S,le,Ge),oe=new p1(U,P,Ge,ie),O=new sy(U,Re,P),fe=new _y(U,Re,P),P.programs=Ee.programs,S.capabilities=Ge,S.extensions=Re,S.properties=_,S.renderLists=ae,S.shadowMap=Te,S.state=ie,S.info=P}ee(),g!==Dn&&(D=new My(g,t.width,t.height,r,a));const se=new u1(S,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(R){R!==void 0&&(De=R,this.setSize(de,Pe,!1))},this.getSize=function(R){return R.set(de,Pe)},this.setSize=function(R,k,j=!0){if(se.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,Pe=k,t.width=Math.floor(R*De),t.height=Math.floor(k*De),j===!0&&(t.style.width=R+"px",t.style.height=k+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(de*De,Pe*De).floor()},this.setDrawingBufferSize=function(R,k,j){de=R,Pe=k,De=j,t.width=Math.floor(R*j),t.height=Math.floor(k*j),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(g===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,k,j,q){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,k,j,q),ie.viewport(X.copy(J).multiplyScalar(De).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,k,j,q){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,k,j,q),ie.scissor(G.copy(te).multiplyScalar(De).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){ie.setScissorTest(pe=R)},this.setOpaqueSort=function(R){qe=R},this.setTransparentSort=function(R){et=R},this.getClearColor=function(R){return R.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,j=!0){let q=0;if(R){let W=!1;if(B!==null){const me=B.texture.format;W=m.has(me)}if(W){const me=B.texture.type,we=f.has(me),be=ue.getClearColor(),Ce=ue.getClearAlpha(),Ue=be.r,Xe=be.g,ze=be.b;we?(M[0]=Ue,M[1]=Xe,M[2]=ze,M[3]=Ce,U.clearBufferuiv(U.COLOR,0,M)):(b[0]=Ue,b[1]=Xe,b[2]=ze,b[3]=Ce,U.clearBufferiv(U.COLOR,0,b))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT),j&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ue.dispose(),ae.dispose(),he.dispose(),_.dispose(),Z.dispose(),Q.dispose(),le.dispose(),Se.dispose(),oe.dispose(),Ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Bn),se.removeEventListener("sessionend",ii),yn.stop()};function Le(R){R.preventDefault(),Ru("WebGLRenderer: Context Lost."),w=!0}function tt(){Ru("WebGLRenderer: Context Restored."),w=!1;const R=P.autoReset,k=Te.enabled,j=Te.autoUpdate,q=Te.needsUpdate,W=Te.type;ee(),P.autoReset=R,Te.enabled=k,Te.autoUpdate=j,Te.needsUpdate=q,Te.type=W}function it(R){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Lt(R){const k=R.target;k.removeEventListener("dispose",Lt),$t(k)}function $t(R){ti(R),_.remove(R)}function ti(R){const k=_.get(R).programs;k!==void 0&&(k.forEach(function(j){Ee.releaseProgram(j)}),R.isShaderMaterial&&Ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,j,q,W,me){k===null&&(k=rt);const we=W.isMesh&&W.matrixWorld.determinant()<0,be=Ho(R,k,j,q,W);ie.setMaterial(q,we);let Ce=j.index,Ue=1;if(q.wireframe===!0){if(Ce=xe.getWireframeAttribute(j),Ce===void 0)return;Ue=2}const Xe=j.drawRange,ze=j.attributes.position;let at=Xe.start*Ue,yt=(Xe.start+Xe.count)*Ue;me!==null&&(at=Math.max(at,me.start*Ue),yt=Math.min(yt,(me.start+me.count)*Ue)),Ce!==null?(at=Math.max(at,0),yt=Math.min(yt,Ce.count)):ze!=null&&(at=Math.max(at,0),yt=Math.min(yt,ze.count));const Dt=yt-at;if(Dt<0||Dt===1/0)return;Se.setup(W,q,be,j,Ce);let Nt,Mt=O;if(Ce!==null&&(Nt=Y.get(Ce),Mt=fe,Mt.setIndex(Nt)),W.isMesh)q.wireframe===!0?(ie.setLineWidth(q.wireframeLinewidth*ct()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(W.isLine){let He=q.linewidth;He===void 0&&(He=1),ie.setLineWidth(He*ct()),W.isLineSegments?Mt.setMode(U.LINES):W.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else W.isPoints?Mt.setMode(U.POINTS):W.isSprite&&Mt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ts("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const He=W._multiDrawStarts,xt=W._multiDrawCounts,ht=W._multiDrawCount,$e=Ce?Y.get(Ce).bytesPerElement:1,Ae=_.get(q).currentProgram.getUniforms();for(let St=0;St<ht;St++)Ae.setValue(U,"_gl_DrawID",St),Mt.render(He[St]/$e,xt[St])}else if(W.isInstancedMesh)Mt.renderInstances(at,Dt,W.count);else if(j.isInstancedBufferGeometry){const He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xt=Math.min(j.instanceCount,He);Mt.renderInstances(at,Dt,xt)}else Mt.render(at,Dt)};function Xn(R,k,j){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=En,R.needsUpdate=!0,Rr(R,k,j),R.side=nr,R.needsUpdate=!0,Rr(R,k,j),R.side=Gn):Rr(R,k,j)}this.compile=function(R,k,j=null){j===null&&(j=R),y=he.get(j),y.init(k),A.push(y),j.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),R!==j&&R.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const q=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const be=me[we];Xn(be,j,W),q.add(be)}else Xn(me,j,W),q.add(me)}),y=A.pop(),q},this.compileAsync=function(R,k,j=null){const q=this.compile(R,k,j);return new Promise(W=>{function me(){if(q.forEach(function(we){_.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){W(R);return}setTimeout(me,10)}Re.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let $n=null;function ni(R){$n&&$n(R)}function Bn(){yn.stop()}function ii(){yn.start()}const yn=new lp;yn.setAnimationLoop(ni),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){$n=R,se.setAnimationLoop(R),R===null?yn.stop():yn.start()},se.addEventListener("sessionstart",Bn),se.addEventListener("sessionend",ii),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const j=se.enabled===!0&&se.isPresenting===!0,q=D!==null&&(B===null||j)&&D.begin(S,B);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,k,B),y=he.get(R,A.length),y.init(k),A.push(y),mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Be.setFromProjectionMatrix(mt,di,k.reversedDepth),Ye=this.localClippingEnabled,_e=Me.init(this.clippingPlanes,Ye),E=ae.get(R,T.length),E.init(),T.push(E),se.enabled===!0&&se.isPresenting===!0){const we=S.xr.getDepthSensingMesh();we!==null&&ri(we,k,-1/0,S.sortObjects)}ri(R,k,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(qe,et),ke=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ke&&ue.addToRenderList(E,R),this.info.render.frame++,_e===!0&&Me.beginShadows();const W=y.state.shadowsArray;if(Te.render(W,R,k),_e===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&D.hasRenderPass())===!1){const we=E.opaque,be=E.transmissive;if(y.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(be.length>0)for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){const ze=Ce[Ue];ar(we,be,R,ze)}ke&&ue.render(R);for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){const ze=Ce[Ue];rr(E,R,ze,ze.viewport)}}else be.length>0&&ar(we,be,R,k),ke&&ue.render(R),rr(E,R,k)}B!==null&&N===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),q&&D.end(S),R.isScene===!0&&R.onAfterRender(S,R,k),Se.resetDefaultState(),$=-1,V=null,A.pop(),A.length>0?(y=A[A.length-1],_e===!0&&Me.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function ri(R,k,j,q){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){q&&Je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const we=le.update(R),be=R.material;be.visible&&E.push(R,we,be,j,Je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const we=le.update(R),be=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Je.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Je.copy(we.boundingSphere.center)),Je.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(be)){const Ce=we.groups;for(let Ue=0,Xe=Ce.length;Ue<Xe;Ue++){const ze=Ce[Ue],at=be[ze.materialIndex];at&&at.visible&&E.push(R,we,at,j,Je.z,ze)}}else be.visible&&E.push(R,we,be,j,Je.z,null)}}const me=R.children;for(let we=0,be=me.length;we<be;we++)ri(me[we],k,j,q)}function rr(R,k,j,q){const{opaque:W,transmissive:me,transparent:we}=R;y.setupLightsView(j),_e===!0&&Me.setGlobalState(S.clippingPlanes,j),q&&ie.viewport(X.copy(q)),W.length>0&&Oi(W,k,j),me.length>0&&Oi(me,k,j),we.length>0&&Oi(we,k,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function ar(R,k,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[q.id]===void 0){const at=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[q.id]=new wn(1,1,{generateMipmaps:!0,type:at?Un:Dn,minFilter:yr,samples:Ge.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const me=y.state.transmissionRenderTarget[q.id],we=q.viewport||X;me.setSize(we.z*S.transmissionResolutionScale,we.w*S.transmissionResolutionScale);const be=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(me),S.getClearColor(ne),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),ke&&ue.render(j);const Xe=S.toneMapping;S.toneMapping=hi;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),_e===!0&&Me.setGlobalState(S.clippingPlanes,q),Oi(R,j,q),F.updateMultisampleRenderTarget(me),F.updateRenderTargetMipmap(me),Re.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let yt=0,Dt=k.length;yt<Dt;yt++){const Nt=k[yt],{object:Mt,geometry:He,material:xt,group:ht}=Nt;if(xt.side===Gn&&Mt.layers.test(q.layers)){const $e=xt.side;xt.side=En,xt.needsUpdate=!0,ps(Mt,j,q,He,xt,ht),xt.side=$e,xt.needsUpdate=!0,at=!0}}at===!0&&(F.updateMultisampleRenderTarget(me),F.updateRenderTargetMipmap(me))}S.setRenderTarget(be,Ce,Ue),S.setClearColor(ne,re),ze!==void 0&&(q.viewport=ze),S.toneMapping=Xe}function Oi(R,k,j){const q=k.isScene===!0?k.overrideMaterial:null;for(let W=0,me=R.length;W<me;W++){const we=R[W],{object:be,geometry:Ce,group:Ue}=we;let Xe=we.material;Xe.allowOverride===!0&&q!==null&&(Xe=q),be.layers.test(j.layers)&&ps(be,k,j,Ce,Xe,Ue)}}function ps(R,k,j,q,W,me){R.onBeforeRender(S,k,j,q,W,me),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(S,k,j,q,R,me),W.transparent===!0&&W.side===Gn&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,S.renderBufferDirect(j,k,q,W,R,me),W.side=nr,W.needsUpdate=!0,S.renderBufferDirect(j,k,q,W,R,me),W.side=Gn):S.renderBufferDirect(j,k,q,W,R,me),R.onAfterRender(S,k,j,q,W,me)}function Rr(R,k,j){k.isScene!==!0&&(k=rt);const q=_.get(R),W=y.state.lights,me=y.state.shadowsArray,we=W.state.version,be=Ee.getParameters(R,W.state,me,k,j),Ce=Ee.getProgramCacheKey(be);let Ue=q.programs;q.environment=R.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(R.isMeshStandardMaterial?Q:Z).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",Lt),Ue=new Map,q.programs=Ue);let Xe=Ue.get(Ce);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===we)return wa(R,be),Xe}else be.uniforms=Ee.getUniforms(R),R.onBeforeCompile(be,S),Xe=Ee.acquireProgram(be,Ce),Ue.set(Ce,Xe),q.uniforms=be.uniforms;const ze=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Me.uniform),wa(R,be),q.needsLights=Vo(R),q.lightsStateVersion=we,q.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function ms(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=io.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function wa(R,k){const j=_.get(R);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Ho(R,k,j,q,W){k.isScene!==!0&&(k=rt),F.resetTextureUnits();const me=k.fog,we=q.isMeshStandardMaterial?k.environment:null,be=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:sa,Ce=(q.isMeshStandardMaterial?Q:Z).get(q.envMap||we),Ue=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,yt=!!j.morphAttributes.color;let Dt=hi;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=S.toneMapping);const Nt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=Nt!==void 0?Nt.length:0,He=_.get(q),xt=y.state.lights;if(_e===!0&&(Ye===!0||R!==V)){const Pt=R===V&&q.id===$;Me.setState(q,R,Pt)}let ht=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xt.state.version||He.outputColorSpace!==be||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ce||q.fog===!0&&He.fog!==me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==Ue||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==at||He.morphColors!==yt||He.toneMapping!==Dt||He.morphTargetsCount!==Mt)&&(ht=!0):(ht=!0,He.__version=q.version);let $e=He.currentProgram;ht===!0&&($e=Rr(q,k,W));let Ae=!1,St=!1,zt=!1;const lt=$e.getUniforms(),Ct=He.uniforms;if(ie.useProgram($e.program)&&(Ae=!0,St=!0,zt=!0),q.id!==$&&($=q.id,St=!0),Ae||V!==R){ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",R.projectionMatrix),lt.setValue(U,"viewMatrix",R.matrixWorldInverse);const It=lt.map.cameraPosition;It!==void 0&&It.setValue(U,Ze.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&lt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,St=!0,zt=!0)}if(He.needsLights&&(xt.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",xt.state.directionalShadowMap,F),xt.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",xt.state.spotShadowMap,F),xt.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",xt.state.pointShadowMap,F)),W.isSkinnedMesh){lt.setOptional(U,W,"bindMatrix"),lt.setOptional(U,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(U,"boneTexture",Pt.boneTexture,F))}W.isBatchedMesh&&(lt.setOptional(U,W,"batchingTexture"),lt.setValue(U,"batchingTexture",W._matricesTexture,F),lt.setOptional(U,W,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",W._indirectTexture,F),lt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",W._colorsTexture,F));const Ut=j.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&je.update(W,j,$e),(St||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,lt.setValue(U,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ct.envMap.value=Ce,Ct.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=v1()),St&&(lt.setValue(U,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&Go(Ct,zt),me&&q.fog===!0&&Oe.refreshFogUniforms(Ct,me),Oe.refreshMaterialUniforms(Ct,q,De,Pe,y.state.transmissionRenderTarget[R.id]),io.upload(U,ms(He),Ct,F)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(io.upload(U,ms(He),Ct,F),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&lt.setValue(U,"center",W.center),lt.setValue(U,"modelViewMatrix",W.modelViewMatrix),lt.setValue(U,"normalMatrix",W.normalMatrix),lt.setValue(U,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Pt=q.uniformsGroups;for(let It=0,Sn=Pt.length;It<Sn;It++){const Jt=Pt[It];oe.update(Jt,$e),oe.bind(Jt,$e)}}return $e}function Go(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,k,j){const q=_.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_.get(R.texture).__webglTexture=k,_.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const j=_.get(R);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const vs=U.createFramebuffer();this.setRenderTarget=function(R,k=0,j=0){B=R,I=k,N=j;let q=null,W=!1,me=!1;if(R){const be=_.get(R);if(be.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),X.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest,ie.viewport(X),ie.scissor(G),ie.setScissorTest(K),$=-1;return}else if(be.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(be.__hasExternalTextures)F.rebindTextures(R,_.get(R.texture).__webglTexture,_.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&_.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const Ce=R.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(me=!0);const Ue=_.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?q=Ue[k][j]:q=Ue[k],W=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?q=_.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[j]:q=Ue,X.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest}else X.copy(J).multiplyScalar(De).floor(),G.copy(te).multiplyScalar(De).floor(),K=pe;if(j!==0&&(q=vs),ie.bindFramebuffer(U.FRAMEBUFFER,q)&&ie.drawBuffers(R,q),ie.viewport(X),ie.scissor(G),ie.setScissorTest(K),W){const be=_.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,j)}else if(me){const be=k;for(let Ce=0;Ce<R.textures.length;Ce++){const Ue=_.get(R.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,j,be)}}else if(R!==null&&j!==0){const be=_.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,j)}$=-1},this.readRenderTargetPixels=function(R,k,j,q,W,me,we,be=0){if(!(R&&R.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=_.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ie.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ue=R.textures[be],Xe=Ue.format,ze=Ue.type;if(!Ge.textureFormatReadable(Xe)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-q&&j>=0&&j<=R.height-W&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(k,j,q,W,ce.convert(Xe),ce.convert(ze),me))}finally{const Ue=B!==null?_.get(B).__webglFramebuffer:null;ie.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(R,k,j,q,W,me,we,be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=_.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(k>=0&&k<=R.width-q&&j>=0&&j<=R.height-W){ie.bindFramebuffer(U.FRAMEBUFFER,Ce);const Ue=R.textures[be],Xe=Ue.format,ze=Ue.type;if(!Ge.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(k,j,q,W,ce.convert(Xe),ce.convert(ze),0);const yt=B!==null?_.get(B).__webglFramebuffer:null;ie.bindFramebuffer(U.FRAMEBUFFER,yt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bg(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(at),U.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,j=0){const q=Math.pow(2,-j),W=Math.floor(R.image.width*q),me=Math.floor(R.image.height*q),we=k!==null?k.x:0,be=k!==null?k.y:0;F.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,we,be,W,me),ie.unbindTexture()};const gs=U.createFramebuffer(),Wo=U.createFramebuffer();this.copyTextureToTexture=function(R,k,j=null,q=null,W=0,me=null){me===null&&(W!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=W,W=0):me=0);let we,be,Ce,Ue,Xe,ze,at,yt,Dt;const Nt=R.isCompressedTexture?R.mipmaps[me]:R.image;if(j!==null)we=j.max.x-j.min.x,be=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Ue=j.min.x,Xe=j.min.y,ze=j.isBox3?j.min.z:0;else{const Ut=Math.pow(2,-W);we=Math.floor(Nt.width*Ut),be=Math.floor(Nt.height*Ut),R.isDataArrayTexture?Ce=Nt.depth:R.isData3DTexture?Ce=Math.floor(Nt.depth*Ut):Ce=1,Ue=0,Xe=0,ze=0}q!==null?(at=q.x,yt=q.y,Dt=q.z):(at=0,yt=0,Dt=0);const Mt=ce.convert(k.format),He=ce.convert(k.type);let xt;k.isData3DTexture?(F.setTexture3D(k,0),xt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),xt=U.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ht=U.getParameter(U.UNPACK_ROW_LENGTH),$e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ae=U.getParameter(U.UNPACK_SKIP_PIXELS),St=U.getParameter(U.UNPACK_SKIP_ROWS),zt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze);const lt=R.isDataArrayTexture||R.isData3DTexture,Ct=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const Ut=_.get(R),Pt=_.get(k),It=_.get(Ut.__renderTarget),Sn=_.get(Pt.__renderTarget);ie.bindFramebuffer(U.READ_FRAMEBUFFER,It.__webglFramebuffer),ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let Jt=0;Jt<Ce;Jt++)lt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_.get(R).__webglTexture,W,ze+Jt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_.get(k).__webglTexture,me,Dt+Jt)),U.blitFramebuffer(Ue,Xe,we,be,at,yt,we,be,U.DEPTH_BUFFER_BIT,U.NEAREST);ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||_.has(R)){const Ut=_.get(R),Pt=_.get(k);ie.bindFramebuffer(U.READ_FRAMEBUFFER,gs),ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wo);for(let It=0;It<Ce;It++)lt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,W,ze+It):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,W),Ct?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,me,Dt+It):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,me),W!==0?U.blitFramebuffer(Ue,Xe,we,be,at,yt,we,be,U.COLOR_BUFFER_BIT,U.NEAREST):Ct?U.copyTexSubImage3D(xt,me,at,yt,Dt+It,Ue,Xe,we,be):U.copyTexSubImage2D(xt,me,at,yt,Ue,Xe,we,be);ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(xt,me,at,yt,Dt,we,be,Ce,Mt,He,Nt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,me,at,yt,Dt,we,be,Ce,Mt,Nt.data):U.texSubImage3D(xt,me,at,yt,Dt,we,be,Ce,Mt,He,Nt):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,at,yt,we,be,Mt,He,Nt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,at,yt,Nt.width,Nt.height,Mt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,me,at,yt,we,be,Mt,He,Nt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,St),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt),me===0&&k.generateMipmaps&&U.generateMipmap(xt),ie.unbindTexture()},this.initRenderTarget=function(R){_.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),ie.unbindTexture()},this.resetState=function(){I=0,N=0,B=null,ie.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g1=new Bd(-1,1,1,-1,0,1);class _1 extends On{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const x1=new _1;class fp{constructor(e){this._mesh=new tn(x1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class b1 extends fs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yo.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bh extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class y1 extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class S1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new We);this._width=i.width,this._height=i.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b1(ro),this.copyPass.material.blending=ui,this.clock=new kd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bh!==void 0&&(s instanceof bh?i=!0:s instanceof y1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class M1 extends fs{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const E1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ca extends fs{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new We(e.x,e.y):new We(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(a,s,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new wn(a,s,{type:Un});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new wn(a,s,{type:Un});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),s=Math.round(s/2)}const o=E1;this.highPassUniforms=yo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new We(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yo.clone(ro.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,premultipliedAlpha:!0,blending:oc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new oa,this._fsQuad=new fp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new We(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ca.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ca.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new We(.5,.5)},direction:{value:new We(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ca.BlurDirectionX=new We(1,0);ca.BlurDirectionY=new We(0,1);var w1=Ne('<canvas class="fixed inset-0 w-full h-full pointer-events-none z-0" style="background-color: #000000;"></canvas>');function T1(n,e){Bt(e,!1);let t=pt(),i,r,a,s,o,l;const c={void:new Qe("#000000"),purple:new Qe("#240046"),cyan:new Qe("#003F4C")};ei(()=>{if(!L(t)||navigator.webdriver)return;r=new Ld,r.background=c.void,a=new vn(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(0,-10,10),a.lookAt(0,0,0),i=new zd({canvas:L(t),antialias:!0,alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const h=new hs(60,60,128,128);s=new nn({wireframe:!0,uniforms:{uTime:{value:0},uColorStart:{value:new Qe("#5a189a")},uColorEnd:{value:new Qe("#00b4d8")},uHover:{value:new We(.5,.5)},uHoverState:{value:0}},vertexShader:`
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
            // We use a smooth Gaussian curve for the well
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
      `,transparent:!0,side:Gn});const u=new tn(h,s);u.rotation.x=-Math.PI/2-.4,r.add(u);const p=new y_,v=new We,g=new M1(r,a),m=new ca(new We(window.innerWidth,window.innerHeight),.2,.5,.2);o=new S1(i),o.addPass(g),o.addPass(m);const f=new kd,M=()=>{l=requestAnimationFrame(M);const y=f.getElapsedTime();s.uniforms.uTime.value=y;const T=window.scrollY;u&&(u.rotation.x=-Math.PI/2-.4-T*2e-4),o.render()};M();const b=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight)},E=y=>{v.x=y.clientX/window.innerWidth*2-1,v.y=-(y.clientY/window.innerHeight)*2+1,p.setFromCamera(v,a);const T=p.intersectObject(u);if(T.length>0){const A=T[0].uv;A&&(s.uniforms.uHover.value.set(A.x,A.y),s.uniforms.uHoverState.value=1)}else s.uniforms.uHoverState.value=0};return window.addEventListener("resize",b),window.addEventListener("mousemove",E),()=>{window.removeEventListener("resize",b),window.removeEventListener("mousemove",E),cancelAnimationFrame(l),h.dispose(),s.dispose(),i.dispose(),o.dispose()}}),Xt();var d=w1();Za(d,h=>Fe(t,h),()=>L(t)),ge(n,d),kt()}var A1=Ne("<button> </button>"),R1=Ne('<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs"></div>');function id(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Li,"$locale",t),a=()=>bn(Fn,"$t",t),s=pt(),o=[{code:"en",name:"English"},{code:"pt",name:"Português"},{code:"es",name:"Español"},{code:"ru",name:"Русский"},{code:"uk",name:"Українська"},{code:"zh",name:"中文"},{code:"ja",name:"日本語"},{code:"de",name:"Deutsch"}];let l=_r(e,"only",8,void 0);function c(h){c0(Li,h),localStorage.setItem("preferred-locale",h)}Ka(()=>fo(l()),()=>{Fe(s,l()?o.filter(h=>l().includes(h.code)):o)}),Lo(),Xt();var d=R1();Yt(d,5,()=>L(s),Qt,(h,u)=>{var p=A1(),v=x(p);Ke(g=>{ve(p,"aria-label",g),Ve(p,1,`hover:text-accent transition-colors duration-200 ${L(u).code===r()?"text-accent border-b border-accent active":"text-white/50"}`),z(v,L(u).name)},[()=>a()("common.change_language",{values:{name:L(u).name}})],At),Ht("click",p,()=>c(L(u).code)),ge(h,p)}),ge(n,d),kt(),i()}var C1=Ne('<section id="hero" class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"><div class="absolute top-24 md:top-8 left-1/2 -translate-x-1/2 z-20"><!></div> <div class="hidden md:flex absolute top-8 right-8 items-center gap-6 font-mono text-xs"><a href="#/ark-streams" class="text-white/40 hover:text-[#00F0FF] transition-colors duration-300 tracking-widest">[ TECH TALK ]</a> <a href="#/relatorios" class="text-white/40 hover:text-accent transition-colors duration-300 tracking-widest"> </a> <div class="flex items-center gap-2 text-accent opacity-90 animate-pulse-glow"><div class="w-2 h-2 rounded-full bg-accent"></div> <span> </span></div></div> <div class="md:hidden absolute top-8 flex items-center gap-2 font-mono text-[10px] text-accent opacity-90 animate-pulse-glow"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div> <span> </span></div> <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto"><h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient-nexus leading-none drop-shadow-lg"> </h1> <h2 class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"><!></h2> <div class="flex flex-col md:flex-row gap-4"><button class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-accent tracking-wider"> </span></button> <a href="#/ark-streams" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-[#00F0FF]/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-[#00F0FF] tracking-wider text-center"> </span></a></div></div></section>');function P1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a=()=>{var $;($=document.getElementById("philosophy"))==null||$.scrollIntoView({behavior:"smooth"})};Xt();var s=C1(),o=x(s),l=x(o);id(l,{});var c=C(o,2),d=C(x(c),2),h=x(d),u=C(d,2),p=C(x(u),2),v=x(p),g=C(c,2),m=C(x(g),2),f=x(m),M=C(g,2),b=x(M),E=x(b),y=C(b,2),T=x(y);ln(T,()=>r()("hero.subtitle").replace("&","&<br />"));var A=C(y,2),D=x(A),S=C(x(D),2),w=x(S),I=C(D,2),N=C(x(I),2),B=x(N);Ke(($,V,X,G,K,ne)=>{z(h,$),z(v,V),z(f,X),z(E,G),z(w,K),z(B,ne)},[()=>r()("nav.reports"),()=>r()("hero.status"),()=>r()("hero.status"),()=>r()("hero.title"),()=>r()("hero.cta"),()=>r()("hero.cta_ark")],At),Ht("click",D,a),ge(n,s),kt(),i()}var I1=Ne('<section id="philosophy" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start relative z-10"><div class="sticky top-32"><h3 class="text-xl font-mono text-accent mb-2"> </h3> <div class="h-1 w-12 bg-accent/30"></div></div> <div class="space-y-12 bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"><p class="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans"><!></p> <div class="space-y-6 font-mono text-sm md:text-base text-secondary"><div class="flex gap-4"><span class="text-accent">[01]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[02]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[03]</span> <p><strong class="text-white"> </strong> </p></div></div></div></div></section>');function L1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);Xt();var a=I1(),s=x(a),o=x(s),l=x(o),c=x(l),d=C(o,2),h=x(d),u=x(h);ln(u,()=>r()("philosophy.hero_text"));var p=C(h,2),v=x(p),g=C(x(v),2),m=x(g),f=x(m),M=C(m),b=C(v,2),E=C(x(b),2),y=x(E),T=x(y),A=C(y),D=C(b,2),S=C(x(D),2),w=x(S),I=x(w),N=C(w);Ke((B,$,V,X,G,K,ne)=>{z(c,B),z(f,`${$??""}:`),z(M,` ${V??""}`),z(T,`${X??""}:`),z(A,` ${G??""}`),z(I,`${K??""}:`),z(N,` ${ne??""}`)},[()=>r()("philosophy.title"),()=>r()("philosophy.p1.title"),()=>r()("philosophy.p1.text"),()=>r()("philosophy.p2.title"),()=>r()("philosophy.p2.text"),()=>r()("philosophy.p3.title"),()=>r()("philosophy.p3.text")],At),ge(n,a),kt(),i()}var D1=Ne('<section id="stack" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ PYTHON ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Python</span> <span class="border border-white/10 px-2 py-1">Pandas</span> <span class="border border-white/10 px-2 py-1">Freqtrade</span> <span class="border border-white/10 px-2 py-1">SciPy</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ GO / NATS JETSTREAM ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Go</span> <span class="border border-white/10 px-2 py-1">NATS</span> <span class="border border-white/10 px-2 py-1">Wails</span> <span class="border border-white/10 px-2 py-1">Svelte</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ NATS JETSTREAM / KV BUCKETS ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">JetStream</span> <span class="border border-white/10 px-2 py-1">KV Store</span> <span class="border border-white/10 px-2 py-1">Audit Trail</span> <span class="border border-white/10 px-2 py-1">Compliance</span></div></div></div></div></section>');function N1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);Xt();var a=D1(),s=x(a),o=x(s),l=x(o),c=C(o,2),d=x(c),h=C(x(d),2),u=x(h),p=C(h,2),v=x(p),g=C(d,2),m=C(x(g),2),f=x(m),M=C(m,2),b=x(M),E=C(g,2),y=C(x(E),2),T=x(y),A=C(y,2),D=x(A);Ke((S,w,I,N,B,$,V)=>{z(l,S),z(u,w),z(v,I),z(f,N),z(b,B),z(T,$),z(D,V)},[()=>r()("stack.title"),()=>r()("stack.card1.title"),()=>r()("stack.card1.text"),()=>r()("stack.card2.title"),()=>r()("stack.card2.text"),()=>r()("stack.card3.title"),()=>r()("stack.card3.text")],At),ge(n,a),kt(),i()}var U1=Ne('<section id="evolution" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="relative"><div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div> <div class="space-y-12 md:space-y-24"><div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] mb-8 md:mb-0"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 transition-all duration-300 rounded-sm"><div class="font-mono text-accent text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform"></div> <div class="md:w-[45%] hidden md:block"></div></div> <div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] hidden md:block"></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_#00F0FF]"></div> <div class="md:w-[45%]"><div class="bg-black/60 backdrop-blur-md border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/40 transition-all duration-300 rounded-sm"><div class="font-mono text-[#00F0FF] text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div></div></div></div></div></section>');function F1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);Xt();var a=U1(),s=x(a),o=x(s),l=x(o),c=C(o,2),d=C(x(c),2),h=x(d),u=x(h),p=x(u),v=x(p),g=x(v),m=C(v,2),f=x(m),M=C(m,2),b=x(M),E=C(M,2),y=x(E),T=C(h,2),A=C(x(T),4),D=x(A),S=x(D),w=x(S),I=C(S,2),N=x(I),B=C(I,2),$=x(B),V=C(B,2),X=x(V);Ke((G,K,ne,re,de,Pe,De,qe,et)=>{z(l,G),z(g,K),z(f,ne),z(b,re),z(y,de),z(w,Pe),z(N,De),z($,qe),z(X,et)},[()=>r()("evolution.title"),()=>r()("evolution.phase1.period"),()=>r()("evolution.phase1.name"),()=>r()("evolution.phase1.tech"),()=>r()("evolution.phase1.description"),()=>r()("evolution.phase2.period"),()=>r()("evolution.phase2.name"),()=>r()("evolution.phase2.tech"),()=>r()("evolution.phase2.description")],At),ge(n,a),kt(),i()}var O1=Ne('<div class="flex flex-col gap-4"><div class="border border-accent/30 rounded-sm overflow-hidden bg-black/90 shadow-[0_0_25px_rgba(0,240,255,0.15)] relative"><iframe width="100%" height="550" frameborder="0" title="Grafana Live Metrics" class="w-full bg-black" credentialless="" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div> <div class="flex justify-end font-mono text-xs opacity-20 hover:opacity-80 transition-opacity duration-300"><button class="text-white hover:text-accent cursor-pointer"> </button></div></div>'),B1=Ne('<p>Para conectar a telemetria em tempo real do sistema:</p> <ol class="list-decimal list-inside space-y-2 text-white/80"><li>Acesse sua conta no <a href="https://grafana.com" target="_blank" rel="noopener noreferrer" class="text-accent underline hover:text-[#4CC9F0]">Grafana Cloud</a>.</li> <li>Configure seu dashboard utilizando as métricas exportadas pelo NATS Exporter e host.</li> <li>No menu superior do painel, vá em <strong class="text-white">Share > Public Dashboard</strong> e ative a opção.</li> <li>Copie o link público gerado ou o código do iframe HTML.</li></ol>',1),k1=Ne(`<p>To connect the system's real-time telemetry:</p> <ol class="list-decimal list-inside space-y-2 text-white/80"><li>Access your account at <a href="https://grafana.com" target="_blank" rel="noopener noreferrer" class="text-accent underline hover:text-[#4CC9F0]">Grafana Cloud</a>.</li> <li>Set up your dashboard with the metrics exported from NATS and the system.</li> <li>In the dashboard top menu, go to <strong class="text-white">Share > Public Dashboard</strong> and activate it.</li> <li>Copy the generated public link or the HTML iframe snippet.</li></ol>`,1),z1=Ne('<button type="button" class="px-6 py-3 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 text-xs w-full text-center"> </button>'),H1=Ne('<div class="border border-white/20 p-6 md:p-8 bg-black/95 backdrop-blur-md shadow-2xl rounded-sm max-w-2xl mx-auto"><h4 class="font-mono text-accent text-sm md:text-base mb-4 tracking-widest text-center border-b border-white/10 pb-3"> </h4> <div class="space-y-4 font-mono text-xs text-secondary mb-6 leading-relaxed"><!></div> <form class="space-y-4 font-mono"><div><label for="grafana-url" class="block text-[10px] text-white/40 uppercase tracking-wider mb-2"> </label> <input id="grafana-url" type="text" placeholder="https://your-tenant.grafana.net/public-dashboards/..." required class="w-full bg-black/90 border border-white/20 text-accent font-mono p-3 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-300 text-xs md:text-sm"></div> <div class="flex flex-col md:flex-row gap-4 pt-2"><button type="submit" class="group relative px-6 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 w-full text-center cursor-pointer"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs text-white group-hover:text-accent tracking-wider font-bold"> </span></button> <!></div></form></div>'),G1=Ne('<section id="metrics" class="py-24 px-4 bg-transparent"><div class="max-w-4xl mx-auto w-full group relative z-10"><!></div></section>');function V1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Li,"$locale",t);let a="https://zestytarragon1335.grafana.net/public-dashboards/3f1e338bcdfd420ca595b79e8c32d640",s=pt(a),o=pt(a),l=pt(!1);ei(()=>{const g=localStorage.getItem("NEXUS_GRAFANA_URL");g&&(Fe(s,g),Fe(o,g))});const c=()=>{let g=L(o).trim();const m=g.match(/src=["'](https?:\/\/[^"']+)["']/);m&&(g=m[1]),g&&(localStorage.setItem("NEXUS_GRAFANA_URL",g),Fe(s,g),Fe(l,!1))};Xt();var d=G1(),h=x(d),u=x(h);{var p=g=>{var m=O1(),f=x(m),M=x(f),b=C(f,2),E=x(b),y=x(E);Ke(()=>{ve(M,"src",L(s)),z(y,`[ ${r()==="pt"?"EDITAR TELEMETRIA":"EDIT TELEMETRY"} ]`)}),Ht("click",E,()=>Fe(l,!0)),ge(g,m)},v=g=>{var m=H1(),f=x(m),M=x(f),b=C(f,2),E=x(b);{var y=K=>{var ne=B1();ge(K,ne)},T=K=>{var ne=k1();ge(K,ne)};wt(E,K=>{r()==="pt"?K(y):K(T,!1)})}var A=C(b,2),D=x(A),S=x(D),w=x(S),I=C(S,2),N=C(D,2),B=x(N),$=C(x(B),2),V=x($),X=C(B,2);{var G=K=>{var ne=z1(),re=x(ne);Ke(()=>z(re,r()==="pt"?"CANCELAR":"CANCEL")),Ht("click",ne,()=>Fe(l,!1)),ge(K,ne)};wt(X,K=>{L(s)&&K(G)})}Ke(()=>{z(M,`:: ${r()==="pt"?"CONFIGURAR LIVE OBSERVABILITY":"CONFIGURE LIVE OBSERVABILITY"} ::`),z(w,r()==="pt"?"URL pública ou HTML do Iframe":"Public Dashboard URL or Iframe HTML"),z(V,`[ ${r()==="pt"?"CONECTAR DASHBOARD":"CONNECT DASHBOARD"} ]`)}),o0(I,()=>L(o),K=>Fe(o,K)),Ht("submit",A,l0(c)),ge(g,m)};wt(u,g=>{L(s)&&!L(l)?g(p):g(v,!1)})}ge(n,d),kt(),i()}var W1=Ne('<footer class="py-12 px-4 border-t border-white/5 text-center bg-transparent"><div class="font-mono text-xs text-secondary space-y-6"><div class="flex justify-center gap-8 flex-wrap"><a href="https://linkedin.com/company/nexus-quant" aria-label="LinkedIn" class="hover:text-accent transition-colors duration-300">[ LINKEDIN ]</a> <a href="https://github.com/nexus-quantitative" aria-label="GitHub" class="hover:text-accent transition-colors duration-300">[ GITHUB ]</a> <a href="#/relatorios" aria-label="Relatórios Operacionais" class="hover:text-accent transition-colors duration-300">[ RELATÓRIOS ]</a></div> <div class="h-px w-12 bg-white/10 mx-auto"></div> <div class="opacity-40 font-sans tracking-wide"> <br> </div></div></footer>');function X1(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a=new Date().getFullYear();Xt();var s=W1(),o=x(s),l=C(x(o),4),c=x(l),d=C(c,2);Ke((h,u)=>{z(c,h),z(d,` ${u??""}`)},[()=>r()("footer.rights",{values:{year:a}}),()=>r()("footer.location")],At),ge(n,s),kt(),i()}var $1=_a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-red-500 svelte-1sg11vv"><circle cx="12" cy="12" r="10" class="svelte-1sg11vv"></circle><line x1="15" y1="9" x2="9" y2="15" class="svelte-1sg11vv"></line><line x1="9" y1="9" x2="15" y2="15" class="svelte-1sg11vv"></line></svg>'),q1=_a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full svelte-1sg11vv"><path d="M11 5L6 9H2v6h4l5 4V5z" class="svelte-1sg11vv"></path><line x1="23" y1="9" x2="17" y2="15" class="svelte-1sg11vv"></line><line x1="17" y1="9" x2="23" y2="15" class="svelte-1sg11vv"></line></svg>'),Y1=Ne('<div class="flex items-end gap-0.5 h-3 svelte-1sg11vv"><div class="w-0.5 bg-accent animate-music-bar-1 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-2 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-3 svelte-1sg11vv"></div></div>'),j1=Ne('<div class="fixed top-6 left-6 z-[100] svelte-1sg11vv"><button class="group flex items-center gap-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 hover:border-accent text-accent px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed svelte-1sg11vv"><div class="relative w-5 h-5 flex items-center justify-center svelte-1sg11vv"><!></div> <span class="text-xs font-mono uppercase tracking-widest min-w-[80px] svelte-1sg11vv"><!></span></button></div> <div class="pointer-events-none fixed -top-10 -left-10 opacity-0 w-1 h-1 overflow-hidden svelte-1sg11vv"><div id="youtube-audio-player" class="svelte-1sg11vv"></div></div>',1);function K1(n,e){Bt(e,!1);let t,i=!1,r=pt(!0),a=pt(!1),s=pt("");const o="1RBL51ZE2Ig";ei(()=>{var y;if(window.YT)if(window.YT.Player)l();else{const T=setInterval(()=>{window.YT.Player&&(clearInterval(T),l())},100)}else{const T=document.createElement("script");T.src="https://www.youtube.com/iframe_api";const A=document.getElementsByTagName("script")[0];(y=A.parentNode)==null||y.insertBefore(T,A),window.onYouTubeIframeAPIReady=()=>{l()}}});function l(){try{const y={height:"0",width:"0",videoId:o,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,playlist:o,modestbranding:1,rel:0,showinfo:0,origin:window.location.origin,enablejsapi:1},events:{onReady:T=>{Fe(a,!0),T.target.setVolume(20),T.target.mute()},onStateChange:T=>{T.data===window.YT.PlayerState.PLAYING?i=!0:i=!1},onError:T=>{console.error("YouTube Player Error:",T.data),T.data===150||T.data===101?(Fe(s,"Restricted"),console.warn("Video is not embeddable (Error 150).")):Fe(s,"Error"),Fe(a,!1)}}};t=new window.YT.Player("youtube-audio-player",y)}catch(y){console.error("Failed to initialize YouTube Player:",y)}}function c(){!L(a)||!t||L(s)||(L(r)?(t.setVolume(20),t.unMute(),t.playVideo(),Fe(r,!1)):(t.mute(),t.pauseVideo(),Fe(r,!0)))}Xt();var d=j1(),h=mi(d),u=x(h),p=x(u),v=x(p);{var g=y=>{var T=$1();ge(y,T)},m=(y,T)=>{{var A=S=>{var w=q1();ge(S,w)},D=S=>{var w=Y1();ge(S,w)};wt(y,S=>{L(r)?S(A):S(D,!1)},T)}};wt(v,y=>{L(s)?y(g):y(m,!1)})}var f=C(p,2),M=x(f);{var b=y=>{var T=Jr();Ke(()=>z(T,L(s))),ge(y,T)},E=(y,T)=>{{var A=S=>{var w=Jr("Loading...");ge(S,w)},D=S=>{var w=Jr();Ke(()=>z(w,L(r)?"Audio Off":"Audio On")),ge(S,w)};wt(y,S=>{L(a)?S(D,!1):S(A)},T)}};wt(M,y=>{L(s)?y(b):y(E,!1)})}Ke(()=>{ve(u,"aria-label",L(s)?"Audio unavailable":L(r)?"Unmute music":"Mute music"),ve(u,"title",L(s)?"Video not embeddable":L(a)?L(r)?"Play Music":"Mute Music":"Loading Player..."),u.disabled=!!L(s)}),Ht("click",u,c),ge(n,d),kt()}const Z1=n=>n;function pp(n){const e=n-1;return e*e*e+1}function yh(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function li(n,{delay:e=0,duration:t=400,easing:i=Z1}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:a=>`opacity: ${a*r}`}}function Xl(n,{delay:e=0,duration:t=400,easing:i=pp,x:r=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,d=l*(1-s),[h,u]=yh(r),[p,v]=yh(a);return{delay:e,duration:t,easing:i,css:(g,m)=>`
			transform: ${c} translate(${(1-g)*h}${u}, ${(1-g)*p}${v});
			opacity: ${l-d*m}`}}function mp(n,{delay:e=0,duration:t=400,easing:i=pp,axis:r="y"}={}){const a=getComputedStyle(n),s=+a.opacity,o=r==="y"?"height":"width",l=parseFloat(a[o]),c=r==="y"?["top","bottom"]:["left","right"],d=c.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),h=parseFloat(a[`padding${d[0]}`]),u=parseFloat(a[`padding${d[1]}`]),p=parseFloat(a[`margin${d[0]}`]),v=parseFloat(a[`margin${d[1]}`]),g=parseFloat(a[`border${d[0]}Width`]),m=parseFloat(a[`border${d[1]}Width`]);return{delay:e,duration:t,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};${o}: ${f*l}px;padding-${c[0]}: ${f*h}px;padding-${c[1]}: ${f*u}px;margin-${c[0]}: ${f*p}px;margin-${c[1]}: ${f*v}px;border-${c[0]}-width: ${f*g}px;border-${c[1]}-width: ${f*m}px;min-${o}: 0`}}var J1=Ne(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-orange-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-orange-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 1: BASES (ENTRY POINTS)</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"At the top, we have the Bases. In Polylith, these
                            are the only places that interact with the outside
                            world."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-orange-200">base: integrant:</strong> The brain of our boot process. Declarative formatting
                                using EDN configuration. Handles dependency injection,
                                enabling REPL restarts in milliseconds.</li> <li><strong class="text-orange-200">base: http-api:</strong> Exposes functionality via REST. Thin and dumb—routes
                                requests to components below.</li> <li><strong class="text-orange-200">base: onyx-peer:</strong> The heavy lifter. A background worker consuming
                                events from Datomic logs for async processing.</li></ul></div>`),Q1=Ne(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-zinc-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-zinc-300 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 2: INFRASTRUCTURE CORE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"In the middle, we have the Infrastructure Core.
                            These components are domain-agnostic. Whether we
                            were handling Marketplace Inventory (MPMS) or
                            Payment Intelligence (UBLE), this layer remained
                            stable."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-zinc-200">datomic-peer:</strong> Connects to our immutable ledger. Preserves every
                                state change in a timeline for financial and clinical
                                auditability.</li> <li><strong class="text-zinc-200">auth-provider:</strong> Centralized security with interceptors for multiple
                                external actors (VTEX, Gateways).</li> <li><strong class="text-zinc-200">workflow-orch:</strong> 'Sinatra' - A state machine engine for orchestrating
                                multi-step flows like refund authorizations.</li> <li><strong class="text-zinc-200">log-service:</strong> Full observability, sending structured logs to
                                the cloud.</li></ul></div>`),eM=Ne(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-blue-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 3: DOMAIN & INTELLIGENCE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"Finally, at the bottom, we have the Domain Layer.
                            This is where the pivot happened."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-blue-200">payment-gateways:</strong> Normalizes the chaos. Adapters for Cielo, Getnet,
                                Pagar.me converting external formats to internal
                                schemas.</li> <li><strong class="text-blue-200">fraud-analysis:</strong> Enriches data with risk scores via ClearSale and
                                Unico connections.</li> <li><strong class="text-blue-200">oz-visualization:</strong> The 'Last Mile' of Intelligence. Scientific visualizations
                                (Vega-Lite) generated from Clojure data.</li> <li><strong class="text-blue-200">superset-embed:</strong> Real-time Superset dashboards integrated directly
                                into the frontend.</li></ul></div>`),tM=Ne(`<div class="w-full flex flex-col items-center gap-0 font-mono text-sm select-none pointer-events-none p-4"><div class="flex flex-col md:flex-row gap-8 w-full justify-center items-start mb-12 text-zinc-400 max-w-6xl px-4"><div class="flex-1"><p class="hint leading-relaxed svelte-1l6r2c7">Initially, we built MPMS. The domain was E-commerce. We
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
            survive a complete business pivot.</p></div>`);function nM(n,e){Bt(e,!1);let t=pt(!1),i=pt(null);ei(()=>Fe(t,!0)),Xt();var r=Do(),a=mi(r);{var s=o=>{var l=tM(),c=x(l),d=C(c,2),h=x(d),u=C(h,2),p=C(d,2),v=C(p,4),g=C(x(v),2),m=C(x(g),4);{var f=D=>{var S=J1();pn(1,S,()=>li,()=>({duration:200})),ge(D,S)};wt(m,D=>{L(i)===1&&D(f)})}var M=C(g,2),b=C(x(M),4);{var E=D=>{var S=Q1();pn(1,S,()=>li,()=>({duration:200})),ge(D,S)};wt(b,D=>{L(i)===2&&D(E)})}var y=C(M,2),T=C(x(y),4);{var A=D=>{var S=eM();pn(1,S,()=>li,()=>({duration:200})),ge(D,S)};wt(T,D=>{L(i)===3&&D(A)})}pn(1,c,()=>li,()=>({duration:800,delay:200})),pn(1,h,()=>Xl,()=>({x:-20,duration:1e3})),pn(1,u,()=>Xl,()=>({x:20,duration:1e3,delay:200})),pn(1,p,()=>li,()=>({duration:1e3,delay:500})),Ht("mouseenter",g,()=>Fe(i,1)),Ht("mouseleave",g,()=>Fe(i,null)),Ht("mouseenter",M,()=>Fe(i,2)),Ht("mouseleave",M,()=>Fe(i,null)),Ht("mouseenter",y,()=>Fe(i,3)),Ht("mouseleave",y,()=>Fe(i,null)),pn(1,v,()=>Xl,()=>({y:20,duration:1e3,delay:400})),ge(o,l)};wt(a,o=>{L(t)&&o(s)})}ge(n,r),kt()}var iM=Ne('<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm p-4"><div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></div> <h3 class="text-orange-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-orange-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div> <h3 class="text-purple-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-purple-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent"></div> <h3 class="text-cyan-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-cyan-200/80 italic leading-relaxed"> </div></div></div></div>');function rM(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);Xt();var a=iM(),s=x(a),o=C(x(s),2),l=x(o),c=C(o,2),d=x(c),h=x(d),u=C(s,2),p=C(x(u),2),v=x(p),g=C(p,2),m=x(g),f=x(m),M=C(u,2),b=C(x(M),2),E=x(b),y=C(b,2),T=x(y),A=x(T);Ke((D,S,w,I,N,B)=>{z(l,D),z(h,S),z(v,w),z(f,I),z(E,N),z(A,B)},[()=>r()("presentation.section2.part1.title"),()=>r()("presentation.section2.part1.intro"),()=>r()("presentation.section2.part2.title"),()=>r()("presentation.section2.part2.intro"),()=>r()("presentation.section2.part3.title"),()=>r()("presentation.section2.part3.intro")],At),ge(n,a),kt(),i()}var aM=Ne('<div class="w-full h-[400px] relative rounded-xl overflow-hidden border border-zinc-800 bg-black/20"><canvas class="w-full h-full block"></canvas> <div class="absolute top-4 left-8 text-orange-500 font-mono text-xs tracking-widest pointer-events-none">INPUT: HIGH ENTROPY</div> <div class="absolute top-4 left-1/2 -translate-x-1/2 text-purple-500 font-mono text-xs tracking-widest pointer-events-none">INGESTION LAYER</div> <div class="absolute top-4 right-8 text-cyan-500 font-mono text-xs tracking-widest pointer-events-none">OUTPUT: SIGNAL</div></div>');function sM(n,e){Bt(e,!1);let t=pt(),i=pt(),r,a,s,o;const l=150,c=16729344,d=8788367,h=440020;let u=[],p;ei(()=>{if(!L(i))return;s=new Ld;const y=45,T=L(t).clientWidth/L(t).clientHeight,A=.1,D=100;o=new vn(y,T,A,D),o.position.set(0,0,15),o.lookAt(0,0,0),a=new zd({canvas:L(i),alpha:!0,antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(L(t).clientWidth,L(t).clientHeight);const S=new op(16777215,.5);s.add(S);const w=new Mo(16777215,1);w.position.set(5,5,5),s.add(w);const I=new Mo(d,2,10);I.position.set(0,0,0),s.add(I),v(),g();const N=new kd,B=()=>{r=requestAnimationFrame(B);const V=N.getDelta(),X=N.getElapsedTime();f(X),M(V,X),a.render(s,o)};B();const $=()=>{if(!L(t))return;const V=L(t).clientWidth,X=L(t).clientHeight;o.aspect=V/X,o.updateProjectionMatrix(),a.setSize(V,X)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(r),a.dispose()}});function v(){p=new Va;const y=new So(1.5,.05,16,50),T=new oa({color:d,transparent:!0,opacity:.8,wireframe:!0}),A=new tn(y,T);p.add(A);const D=new So(2.2,.02,16,50),S=new oa({color:4988309,transparent:!0,opacity:.5}),w=new tn(D,S);w.rotation.x=Math.PI/2,p.add(w);const I=new Ud(.8,0),N=new Xu({color:d,flatShading:!0,emissive:3018853}),B=new tn(I,N);p.add(B),s.add(p)}function g(){const y=[new Fd(.2),new Ma(.2,.2,.2),new Nd(.15)],T=new Xu({color:c,flatShading:!0});for(let A=0;A<l;A++){const D=new tn(y[Math.floor(Math.random()*y.length)],T.clone());D.position.set(-15-Math.random()*10,(Math.random()-.5)*6,(Math.random()-.5)*4),m(D),D.position.x=-15-Math.random()*10,s.add(D),u.push({mesh:D,state:"chaos",velocity:new H,rotVelocity:new H,targetScale:1})}}function m(y,T){y.position.set(-10-Math.random()*5,(Math.random()-.5)*6,(Math.random()-.5)*4),y.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),y.material.color.setHex(c),y.material.emissive.setHex(0),y.material.wireframe=!1}function f(y){if(!p)return;p.rotation.y=y*.5,p.rotation.x=Math.sin(y*.3)*.2;const T=1+Math.sin(y*2)*.05;p.scale.set(T,T,T)}function M(y,T){const A=Math.min(1,T/5),D=1+Math.sin(T*.8)*.3,S=3.5*A*D;u.forEach(w=>{const{mesh:I}=w;if(I.rotation.x+=w.rotVelocity.x*y,I.rotation.y+=w.rotVelocity.y*y,I.position.x+=S*y,w.state==="chaos"&&I.position.x>-2)I.position.length()>.5&&I.position.lerp(new H(0,0,0),y*3),I.position.x>-.5&&I.position.x<.5&&(w.state="value",I.material.color.setHex(h),I.material.emissive.setHex(440020),I.rotation.set(0,0,0),w.rotVelocity.set(0,0,0));else if(w.state==="value"){I.position.y=Math.sin(T*2+I.position.x)*1.5*Math.exp(-I.position.x*.05);const N=0;I.position.y+=(N-I.position.y)*y*2,I.position.z+=(0-I.position.z)*y*2}else I.position.y+=Math.sin(T*10+I.id)*.02,w.rotVelocity.set(Math.random(),Math.random(),Math.random());I.position.x>20&&(w.state="chaos",m(I))})}Xt();var b=aM(),E=x(b);Za(E,y=>Fe(i,y),()=>L(i)),Za(b,y=>Fe(t,y),()=>L(t)),ge(n,b),kt()}var oM=Ne('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),lM=Ne('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-cyan-400 font-mono text-sm uppercase tracking-widest"> </h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li> </li> <li> </li> <li> </li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"> </p></div>'),cM=Ne('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div></div></div>'),dM=Ne('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),uM=Ne("<!> <!>",1),hM=Ne(`<div class="space-y-6"><div class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">💎</div> <div class="flex-1"><h4 class="text-xl font-bold text-purple-300 mb-2">1. Immutability & Data-Driven Design</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-purple-200">The Concept:</strong> The entire system relies on passing immutable maps. There are almost no mutable objects.</p> <div class="bg-black/40 border-l-4 border-purple-500 p-3 mb-3 rounded"><p class="text-sm text-purple-100 italic">"Candles (Map) -> Indicators (Value) -> Signal (Map) -> Order (Map).
                                    State is updated via recur, creating a new state for the next iteration without mutating the old one."</p></div> <p class="text-xs text-gray-400"><strong class="text-purple-300">Code Ref:</strong> Orchestrator Loop.</p></div></div></div> <div class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-cyan-300 mb-2">2. Pure Functions (Referential Transparency)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-cyan-200">The Concept:</strong> The strategy-engine largely consists of pure functions that take data and return a calculated result, with no side effects.</p> <div class="bg-black/40 border-l-4 border-cyan-500 p-3 mb-3 rounded"><p class="text-sm text-cyan-100 italic">"(ema candles period): Takes immutable data, returns a number. No external state is read or modified."</p></div> <p class="text-xs text-gray-400"><strong class="text-cyan-300">Benefit:</strong> Extremely easy to test. You just pass a vector of maps and assert the return value.</p></div></div></div> <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">⚡</div> <div class="flex-1"><h4 class="text-xl font-bold text-orange-300 mb-2">3. Concurrency & Asynchrony (core.async)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-orange-200">The Concept:</strong> CSP (Communicating Sequential Processes). The system "parks" (cheaply sleeps) until a timeout or a stop signal is received.</p> <div class="bg-black/40 border-l-4 border-orange-500 p-3 mb-3 rounded"><p class="text-sm text-orange-100 italic">"The Orchestrator uses core.async to manage the main application loop without blocking threads."</p></div> <p class="text-xs text-gray-400"><strong class="text-orange-300">Code Ref:</strong> com.nexus-quant.ark-engine.orchestrator.core/start!</p></div></div></div> <div class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🔄</div> <div class="flex-1"><h4 class="text-xl font-bold text-green-300 mb-2">4. Recursion for State Management</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-green-200">The Concept:</strong> Instead of wrapping the application state in a global atom, the Orchestrator maintains state on the stack via recursion.</p> <div class="bg-black/40 border-l-4 border-green-500 p-3 mb-3 rounded"><p class="text-sm text-green-100 italic">"(loop [state init] ... (recur new-state)). The 'state' exists only within the lifecycle of the loop."</p></div> <p class="text-xs text-gray-400"><strong class="text-green-300">Why?:</strong> Avoids mutable shared state bugs.</p></div></div></div> <div class="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">☕</div> <div class="flex-1"><h4 class="text-xl font-bold text-indigo-300 mb-2">5. Java Interoperability</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-indigo-200">The Concept:</strong> Clojure's strength is its access to the JVM ecosystem. Ark Engine leverages ta4j for technical analysis.</p> <div class="bg-black/40 border-l-4 border-indigo-500 p-3 mb-3 rounded"><p class="text-sm text-indigo-100 italic">"(-> obj .method args) macros for clean Java calls. Converting Clojure maps (keywords) to Java Objects efficiently."</p></div> <p class="text-xs text-gray-400"><strong class="text-indigo-300">Lib:</strong> ta4j (Technical Analysis for Java).</p></div></div></div></div>`),fM=Ne('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> INJECT VOLATILITY</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-cyan-500 tracking-widest">MODULE: ORCHESTRATOR (BRAIN)</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">core.async / Recur</div></div></div>  <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-orange-500 tracking-widest">MODULE: STRATEGY ENGINE (LOGIC)</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Referential Transparency</div></div></div>  <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-green-500 tracking-widest">MODULE: CONNECTOR</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-green-500/30 flex items-center justify-center bg-green-900/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]"><div class="text-green-400"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-green-400">ORDERS EXECUTED</div> <div class="text-xs text-gray-500 mt-1">Side-Effect Handler</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center"><div>Orchestrator (Loop)</div> <div class="text-orange-400">Strategy (Pure Logic)</div> <div>Connector (Side Effects)</div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Core Clojure & FP Concepts</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Key Concepts: Immutability, Pure Functions, Concurrency, Recursion</p></button> <!></div></div>');function pM(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);let a=pt("safe"),s=pt(!1),o=pt(!0),l=pt(!1),c=pt([]),d=0;const h={brain:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',shield:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',vault:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'};let u;function p(){clearInterval(u),u=setInterval(()=>{const ie=d++,_=L(a)==="danger"&&Math.random()>.3?"danger":"safe",F={id:ie,type:_,status:"moving",x:0};Fe(c,[...L(c),F]),L(c).length>10&&L(c).shift()},L(a)==="safe"?800:400)}let v;const g=50,m=95;function f(){Fe(c,L(c).map(ie=>{if(ie.status!=="moving")return ie;const P=ie.type==="danger"?.4:.2;let _=ie.x+P;return _>=g&&_<g+2&&ie.type==="danger"?(ie.status="blocked",M(),ie):(_>=m&&(ie.status="success"),{...ie,x:_})}).filter(ie=>ie.status!=="success"&&(ie.status!=="blocked"||Math.random()>.05))),v=requestAnimationFrame(f)}function M(){Fe(s,!0),setTimeout(()=>Fe(s,!1),400)}ei(()=>(p(),f(),()=>{clearInterval(u),cancelAnimationFrame(v)})),Ka(()=>L(a),()=>{L(a)&&p()}),Lo(),Xt();var b=fM(),E=x(b),y=x(E),T=C(y,2),A=x(T),D=x(A);{var S=ie=>{var P=oM();ge(ie,P)};wt(D,ie=>{L(a)==="danger"&&ie(S)})}var w=C(D,2),I=C(E,2);{var N=ie=>{var P=lM(),_=x(P),F=x(_),Z=x(F),Q=C(F,2),Y=C(_,2),xe=x(Y),le=x(xe),Ee=C(xe,2),Oe=x(Ee),ae=C(Ee,2),he=x(ae),Me=C(Y,2),Te=x(Me);Ke((ue,je,O,fe,ce)=>{z(Z,ue),z(le,je),z(Oe,O),z(he,fe),z(Te,ce)},[()=>r()("presentation.section3.demo.instruction"),()=>r()("presentation.section3.demo.step1"),()=>r()("presentation.section3.demo.step2"),()=>r()("presentation.section3.demo.step3"),()=>r()("presentation.section3.demo.conclusion")],At),Ht("click",Q,()=>Fe(o,!1)),pn(3,P,()=>li),ge(ie,P)};wt(I,ie=>{L(o)&&ie(N)})}var B=C(I,2),$=x(B),V=C(x($),4),X=x(V),G=C(X,2),K=x(G);ln(K,()=>h.brain);var ne=C(V,2),re=x(ne),de=x(re),Pe=C($,2),De=C(x(Pe),2),qe=x(De),et=C(qe,2),J=x(et),te=x(J);ln(te,()=>L(s)?h.lock:h.shield);var pe=C(De,2),Be=x(pe),_e=x(Be),Ye=C(Pe,2),mt=C(x(Ye),2),Ze=x(mt),Je=x(Ze);ln(Je,()=>h.vault);var rt=C(Ye,2);Yt(rt,5,()=>L(c),ie=>ie.id,(ie,P)=>{var _=uM(),F=mi(_);{var Z=xe=>{var le=cM(),Ee=x(le);Ke(()=>{Ci(le,`
                            left: ${L(P).x??""}%; 
                            background-color: ${L(P).type==="danger"?"#ef4444":"#06b6d4"};
                            box-shadow: 0 0 10px ${L(P).type==="danger"?"#ef4444":"#06b6d4"};
                            opacity: ${L(P).status==="blocked"?0:1};
                            transform: scale(${L(P).status==="blocked"?2:1});
                        `),Ve(Ee,1,`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-${L(P).type==="danger"?"red-500":"cyan-500"} opacity-50`)}),ge(xe,le)};wt(F,xe=>{(L(P).status==="moving"||L(P).status==="blocked")&&xe(Z)})}var Q=C(F,2);{var Y=xe=>{var le=dM();Ke(()=>Ci(le,`left: ${L(P).x??""}%;`)),ge(xe,le)};wt(Q,xe=>{L(P).status==="blocked"&&xe(Y)})}ge(ie,_)});var ke=C(B,4),ct=x(ke),U=x(ct),Ie=C(x(U),2),Re=C(ct,2);{var Ge=ie=>{var P=hM();pn(3,P,()=>mp,()=>({duration:400})),ge(ie,P)};wt(Re,ie=>{L(l)&&ie(Ge)})}Ke(()=>{Ve(y,1,`px-6 py-2 rounded border transition-all duration-300
            ${L(a)==="safe"?"bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ve(T,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${L(a)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ve(w,1,`relative inline-flex rounded-full h-3 w-3 ${L(a)==="danger"?"bg-red-500":"bg-gray-500"}`),Ve(V,1,`relative z-10 w-32 h-32 rounded-full border-2 ${L(a)==="danger"?"border-red-500/50 animate-pulse":"border-cyan-500/30"} flex items-center justify-center bg-black/50`),Ve(X,1,`absolute inset-0 rounded-full border border-dashed ${L(a)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-cyan-500/20 animate-[spin_10s_linear_infinite]"}`),Ve(G,1,`text-cyan-400 ${L(a)==="danger"?"text-red-500":""}`),Ve(re,1,`text-lg font-bold ${L(a)==="danger"?"text-red-400":"text-cyan-400"}`),z(de,L(a)==="danger"?"VOLATILITY SPIKE":"ACTIVE LOOP"),Ve(qe,1,`absolute -inset-8 rounded-full bg-orange-500/10 blur-xl transition-opacity duration-200
                    ${L(s)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Ve(et,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900
                    ${L(s)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-orange-500/30"}`),Ve(J,1,`text-orange-500 transition-transform duration-200 ${L(s)?"scale-90 text-red-500":""}`),Ve(Be,1,`text-lg font-bold ${L(s)?"text-red-400 animate-pulse":"text-orange-400"} transition-colors`),z(_e,L(s)?"COMPUTING INDICATORS":"PURE LOGIC"),Ve(Ie,0,`w-6 h-6 text-purple-400 transition-transform duration-300 ${L(l)?"rotate-180":""}`)}),Ht("click",y,()=>Fe(a,"safe")),Ht("click",T,()=>Fe(a,"danger")),Ht("click",ct,()=>Fe(l,!L(l))),ge(n,b),kt(),i()}var mM=Ne('<div class="p-6 text-center text-indigo-300 font-mono text-sm md:text-base tracking-widest uppercase"> </div>'),vM=Ne('<div class="grid grid-cols-2 divide-x divide-white/5 hover:bg-white/5 transition-colors group"><div class="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center text-right md:text-left justify-end md:justify-start"><div class="hidden md:block text-indigo-500/50 group-hover:text-indigo-400 transition-colors"><!></div> <div class="flex-1"><div class="text-gray-200 font-bold text-lg"> </div> <div class="text-gray-500 text-sm font-mono mt-1"> </div></div></div> <div class="p-6 flex flex-col md:flex-row gap-4 items-end md:items-center text-left"><div class="md:hidden text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-2"><!></div> <div class="flex-1"><div class="text-white font-bold text-lg"> </div> <div class="text-indigo-400/80 text-sm font-mono mt-1"> </div></div></div></div>'),gM=Ne('<div class="max-w-6xl w-full space-y-12"><div class="text-center space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider"> </h3> <h4 class="text-2xl md:text-3xl font-bold text-white italic"> </h4> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div></div> <div class="bg-gradient-to-r from-accent/20 to-purple-900/20 border-l-4 border-accent p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-accent/10 mb-12"><p class="text-xl md:text-2xl text-white font-light leading-relaxed italic text-center"> </p></div> <div class="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"><div class="grid grid-cols-2 divide-x divide-white/10 bg-white/5"></div> <div class="divide-y divide-white/5"></div></div></div>');function _M(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a=pt(),s=pt();let o=_r(e,"baseKey",8,"presentation");const l={source:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>',norm:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',audit:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',decision:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',runtime:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',messaging:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',ui:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',deployment:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'};Ka(()=>(r(),fo(o())),()=>{Fe(a,r()(`${o()}.section4.headers`))}),Ka(()=>(r(),fo(o())),()=>{Fe(s,r()(`${o()}.section4.rows`))}),Lo(),Xt();var c=gM(),d=x(c),h=x(d),u=x(h),p=C(h,2),v=x(p),g=C(d,2),m=x(g),f=x(m),M=C(g,2),b=x(M);Yt(b,5,()=>L(a),Qt,(y,T)=>{var A=mM(),D=x(A);Ke(()=>z(D,L(T))),ge(y,A)});var E=C(b,2);Yt(E,5,()=>Object.entries(L(s)),Qt,(y,T)=>{let A=()=>L(T)[0],D=()=>L(T)[1];var S=vM(),w=x(S),I=x(w),N=x(I);ln(N,()=>l[A()]);var B=C(I,2),$=x(B),V=x($),X=C($,2),G=x(X),K=C(w,2),ne=x(K),re=x(ne);ln(re,()=>l[A()]);var de=C(ne,2),Pe=x(de),De=x(Pe),qe=C(Pe,2),et=x(qe);Ke(()=>{z(V,D().fintech.title),z(G,D().fintech.detail),z(De,D().healthcare.title),z(et,D().healthcare.detail)}),ge(y,S)}),Ke((y,T,A)=>{z(u,`04 // ${y??""}`),z(v,T),z(f,A)},[()=>r()(`${o()}.section4.title`),()=>r()(`${o()}.section4.subtitle`),()=>r()(`${o()}.section4.closing`)],At),ge(n,c),kt(),i()}var xM=Ne('<div class="w-full h-full min-h-[400px] relative"><canvas></canvas> <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-[100px] z-0 transform scale-75 opacity-50"></div></div>');function bM(n,e){Bt(e,!1);let t=pt(),i=pt(),r,a,s,o,l,c,d=new We(100,100),h=new We(100,100),u=pt(!1),p={x:0,y:0},v={x:0,y:0},g={x:0,y:0};ei(()=>{m(),y(),window.addEventListener("mousemove",b),window.addEventListener("resize",E),L(t).addEventListener("mousedown",f),L(t).addEventListener("mouseup",M),L(t).addEventListener("mouseleave",M)}),uf(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("mousemove",b),window.removeEventListener("resize",E),L(t)&&(L(t).removeEventListener("mousedown",f),L(t).removeEventListener("mouseup",M),L(t).removeEventListener("mouseleave",M)),r&&r.dispose()});function m(){a=new Ld,s=new vn(45,L(t).clientWidth/L(t).clientHeight,.1,1e3),s.position.z=50,r=new zd({canvas:L(i),antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(L(t).clientWidth,L(t).clientHeight),r.setClearColor(0,0);const w=new op(16777215,.2);a.add(w);const I=new Mo(16347926,2,100);I.position.set(10,20,30),a.add(I);const N=new Mo(3900150,2,100);N.position.set(-10,-20,-10),a.add(N);const B=new Od(10,3,200,32,2,3),$=new oa({color:16347926,wireframe:!0,transparent:!0,opacity:.8,side:Gn});l=new tn(B,$),a.add(l);const V=new m_({color:16777215,metalness:.9,roughness:.1,transparent:!0,opacity:0,side:Gn,envMapIntensity:1});c=new tn(B,V),a.add(c)}function f(w){Fe(u,!0),p={x:w.clientX,y:w.clientY}}function M(){Fe(u,!1)}function b(w){const I=L(t).getBoundingClientRect();if(h.x=(w.clientX-I.left)/I.width*2-1,h.y=-((w.clientY-I.top)/I.height)*2+1,L(u)){const N={x:w.clientX-p.x,y:w.clientY-p.y};g.x=N.y*.01,g.y=N.x*.01,v.x+=g.x,v.y+=g.y,p={x:w.clientX,y:w.clientY}}}function E(){s.aspect=L(t).clientWidth/L(t).clientHeight,s.updateProjectionMatrix(),r.setSize(L(t).clientWidth,L(t).clientHeight)}function y(){o=requestAnimationFrame(y),T()}function T(){if(d.x+=(h.x-d.x)*.05,d.y+=(h.y-d.y)*.05,L(u))l.rotation.x=v.x,l.rotation.y=v.y,c.rotation.x=v.x,c.rotation.y=v.y;else{const N=Date.now()*5e-4;g.x*=.95,g.y*=.95,v.x+=(N*.2-v.x)*.02,v.y+=(N*.5-v.y)*.02,l.rotation.x=v.x,l.rotation.y=v.y,c.rotation.x=v.x,c.rotation.y=v.y}const w=Math.sqrt(d.x*d.x+d.y*d.y);let I=Math.max(0,1-w/.8);l.material.opacity=.2+(1-I)*.6,c.material.opacity=I,s.position.x+=(d.x*10-s.position.x)*.02,s.position.y+=(d.y*10-s.position.y)*.02,s.lookAt(a.position),r.render(a,s)}Xt();var A=xM(),D=x(A);let S;Za(D,w=>Fe(i,w),()=>L(i)),Za(A,w=>Fe(t,w),()=>L(t)),Ke(w=>S=Ve(D,1,"absolute inset-0 z-10 outline-none",null,S,w),[()=>({"cursor-grab":!L(u),"cursor-grabbing":L(u)})],At),ge(n,A),kt()}var yM=Ne(`<div class="w-full relative z-10 pointer-events-auto"><section><div class="max-w-4xl w-full text-center space-y-8"><div class="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm tracking-widest mb-4">CONFIDENTIAL // INTERVIEW CANDIDATE</div> <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500"> </h1> <h2 class="text-2xl md:text-3xl text-gray-400 font-light"> </h2></div></section> <section><div class="max-w-3xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-cyan-500 font-serif">"</div> <h3 class="text-xl text-cyan-400 font-mono mb-4 tracking-wider"> </h3> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div></section> <section class="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden bg-zinc-950"><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-zinc-900 select-none z-0 opacity-30 whitespace-nowrap">BUILDER</h1> <div class="relative z-10 w-full max-w-6xl px-6"><div class="flex items-center gap-4 mb-12 opacity-80"><span class="text-orange-500 font-mono text-sm">02 // THE MINDSET</span> <div class="h-px bg-zinc-800 flex-1"></div></div> <div class="grid md:grid-cols-5 gap-12 items-center"><div class="md:col-span-2 space-y-8 z-20 relative pointer-events-none"><h2 class="text-4xl md:text-5xl font-bold leading-tight text-white">Not just <br> <span class="text-zinc-500 line-through decoration-orange-500/50">executing tasks.</span></h2> <p class="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 bg-zinc-950/50 backdrop-blur-md p-4 rounded-r-lg">Building the <strong class="text-white font-medium">right tools</strong> to solve the problem.</p> <div class="pt-4 pointer-events-auto"><p class="text-sm text-zinc-500 mb-2 font-mono uppercase tracking-widest">The Evidence</p> <p class="text-zinc-400 text-sm max-w-md leading-relaxed">I built this interactive presentation platform from
                            scratch. <br> Why? To demonstrate that I own the entire stack: <span class="text-orange-400">From the complex backend logic represented by
                                the wireframe, to the polished user experience
                                you see materializing.</span></p></div></div> <div class="md:col-span-3 h-[500px] relative"><!> <div class="absolute bottom-4 right-4 text-right pointer-events-none z-30"><span class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950/80 px-2 py-1 rounded">Interactive: Logic to Materialization</span></div></div></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><div class="text-center max-w-3xl space-y-4"><h3 class="text-xl text-purple-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><h3 class="text-lg text-purple-400/50 font-mono tracking-wider w-full text-center">02.b // DEEP DIVE & DATA FLOW</h3> <div class="w-full"><!></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-12"><div class="text-center max-w-4xl mx-auto space-y-6"><h3 class="text-xl text-green-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest mb-2"> </div> <div class="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-green-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><p class="text-lg text-cyan-300 font-medium mb-2"><!></p> <p class="text-sm text-gray-300 leading-relaxed"> </p></div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><!></section> <section><div class="max-w-2xl w-full text-center space-y-8"><h3 class="text-xl text-white font-mono tracking-wider"> </h3> <p class="text-2xl md:text-3xl font-light text-gray-100 leading-snug"> </p> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="https://linkedin.com/in/patrickcmserrano" target="_blank" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">LINKEDIN</a> <a href="https://github.com/patrickcmserrano" target="_blank" class="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded font-bold tracking-wide transition-all">GITHUB</a></div></div></section> <div class="h-12"></div></div>`);function SM(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";Xt();var s=yM(),o=x(s);Ve(o,1,mn(a));var l=x(o),c=C(x(l),2),d=x(c),h=C(c,2),u=x(h),p=C(o,2);Ve(p,1,mn(a));var v=x(p),g=C(x(v),2),m=x(g),f=C(g,2),M=x(f),b=C(p,2),E=C(x(b),2),y=C(x(E),2),T=C(x(y),2),A=x(T);bM(A,{});var D=C(b,2);Ve(D,1,mn(a));var S=x(D),w=x(S),I=x(w),N=x(I),B=C(I,2),$=x(B),V=C(B,2),X=x(V),G=C(w,2),K=x(G);nM(K,{});var ne=C(D,2);Ve(ne,1,mn(a));var re=x(ne),de=C(x(re),2),Pe=x(de);sM(Pe,{});var De=C(de,2),qe=x(De);rM(qe,{});var et=C(ne,2);Ve(et,1,mn(a));var J=x(et),te=x(J),pe=x(te),Be=x(pe),_e=C(pe,2),Ye=x(_e),mt=C(_e,2),Ze=x(mt),Je=x(Ze);ln(Je,()=>r()("presentation.section3.subtitle"));var rt=C(Ze,2),ke=x(rt),ct=C(mt,2),U=x(ct),Ie=C(ct,2),Re=x(Ie),Ge=C(te,2),ie=x(Ge);pM(ie,{});var P=C(et,2);Ve(P,1,mn(a));var _=x(P);_M(_,{});var F=C(P,2);Ve(F,1,mn(a));var Z=x(F),Q=x(Z),Y=x(Q),xe=C(Q,2),le=x(xe);Ke((Ee,Oe,ae,he,Me,Te,ue,je,O,fe,ce,Se,oe,ee)=>{z(d,Ee),z(u,Oe),z(m,`01 // ${ae??""}`),z(M,he),z(N,`02 // ${Me??""}`),z($,Te),z(X,ue),z(Be,`03 // ${je??""}`),z(Ye,O),z(ke,fe),z(U,ce),z(Re,Se),z(Y,oe),z(le,ee)},[()=>r()("presentation.title"),()=>r()("presentation.subtitle"),()=>r()("presentation.section1.title"),()=>r()("presentation.section1.text"),()=>r()("presentation.section2.title"),()=>r()("presentation.section2.subtitle"),()=>r()("presentation.section2.intro"),()=>r()("presentation.section3.title"),()=>r()("presentation.section3.role"),()=>r()("presentation.section3.subtitle2"),()=>r()("presentation.section3.intro"),()=>r()("presentation.section3.intro2"),()=>r()("presentation.section5.title"),()=>r()("presentation.section5.text")],At),pn(1,o,()=>li),ge(n,s),kt(),i()}/**
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
 */const MM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var EM=_a("<svg><!><!></svg>");function wM(n,e){Bt(e,!0);const t=_r(e,"color",3,"currentColor"),i=_r(e,"size",3,24),r=_r(e,"strokeWidth",3,2),a=_r(e,"absoluteStrokeWidth",3,!1),s=_r(e,"iconNode",19,()=>[]),o=df(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var l=EM();let c;var d=x(l);Yt(d,17,s,Qt,(u,p)=>{let v=()=>L(p)[0],g=()=>L(p)[1];var m=Do(),f=mi(m);Jm(f,v,!0,(M,b)=>{let E;Ke(()=>E=tu(M,E,{...g()}))}),ge(u,m)});var h=C(d);nf(h,()=>e.children??on),Ke(u=>c=tu(l,c,{...MM,...o,width:i(),height:i(),stroke:t(),"stroke-width":u,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>a()?Number(r())*24/Number(i()):r()]),ge(n,l),kt()}function TM(n,e){Bt(e,!0);let t=df(e,["$$slots","$$events","$$legacy"]);wM(n,f0({name:"arrow-left"},()=>t,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(r,a)=>{var s=Do(),o=mi(s);nf(o,()=>e.children??on),ge(r,s)},$$slots:{default:!0}})),kt()}var AM=_a("<path></path><path></path><path></path>",1),RM=_a('<circle r="4.5" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle>'),CM=_a('<rect rx="6" stroke-width="1"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.30)" font-size="9" font-family="monospace"> </text><line stroke-width="0.8" stroke-dasharray="5 4"></line><!><rect rx="8" stroke-width="1.2"></rect><rect rx="8" fill="none" stroke-width="4" opacity="0.07"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold" letter-spacing="0.3"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.32)" font-size="9" font-family="monospace"><!> </text><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text>',1),PM=Ne('<div class="w-full bg-black/20 border border-white/10 rounded-xl overflow-hidden p-4"><div class="flex items-center justify-between mb-3 px-2"><span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">publishers</span> <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest">nats subject bus</span> <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">subscribers</span></div> <svg viewBox="0 0 845 402" class="w-full" style="height: auto;" xmlns="http://www.w3.org/2000/svg"><defs></defs><!><rect x="338" y="156" width="166" height="18" rx="9" fill="rgba(0,255,148,0.14)" stroke="rgba(0,255,148,0.45)" stroke-width="0.6"></rect><text x="421" y="169" text-anchor="middle" fill="#00FF94" font-size="8.5" font-family="monospace">new symbols auto-picked up</text><line x1="200" x2="645" stroke="rgba(255,255,255,0.07)" stroke-width="0.6"></line><rect x="200" width="195" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="297" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: MARKET_STATE</text><text x="297" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">latest snapshot / sym×tf</text><rect x="410" width="235" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="527" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: STRATEGY_STATE</text><text x="527" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">last 50 state transitions</text></svg></div>');function IM(n){const h=[{y:75,publisher:"Collectors",publisherSub:"Bitget · Binance · Yahoo",subject:"market.kline.<sym>.<tf>",retention:"7 days",wildcard:!1,color:"#f97316",colorDim:"rgba(249,115,22,0.12)",strokeDim:"rgba(249,115,22,0.40)",consumers:["FractalEngine","Nexus Terminal"],pulseBegin:["0s","1.1s"],fanBegin:["1.6s","2.1s"]},{y:193,publisher:"FractalEngine",publisherSub:"1 instance / sym×tf",subject:"market.analyzed.*",retention:"7 days",wildcard:!0,color:"#00FF94",colorDim:"rgba(0,255,148,0.09)",strokeDim:"rgba(0,255,148,0.42)",consumers:["AlligatorTrend","API Server"],pulseBegin:["0.4s","1.5s"],fanBegin:["2.0s","2.5s"]},{y:311,publisher:"AlligatorTrend",publisherSub:"BTCUSDT · XAUUSDT",subject:"signals.trade.<sym>",retention:"30 days",wildcard:!1,color:"#a78bfa",colorDim:"rgba(167,139,250,0.09)",strokeDim:"rgba(167,139,250,0.38)",consumers:["PaperBroker","WebSocket"],pulseBegin:["0.8s","1.9s"],fanBegin:["2.4s","2.9s"]}];function u(I){return`M 158 ${I} L 300 ${I}`}function p(I){return`M 545 ${I} Q 587 ${I} 670 ${I-32}`}function v(I){return`M 545 ${I} Q 587 ${I} 670 ${I+32}`}const g=368;var m=PM(),f=C(x(m),2),M=x(f);Yt(M,5,()=>h,Qt,(I,N,B)=>{var $=AM(),V=mi($);ve(V,"id",`ps${B}`);var X=C(V);ve(X,"id",`sc1${B}`);var G=C(X);ve(G,"id",`sc2${B}`),Ke((K,ne,re)=>{ve(V,"d",K),ve(X,"d",ne),ve(G,"d",re)},[()=>u(L(N).y),()=>p(L(N).y),()=>v(L(N).y)],At),ge(I,$)});var b=C(M);Yt(b,1,()=>h,Qt,(I,N,B)=>{var $=CM(),V=mi($);ve(V,"x",8),ve(V,"width",150),ve(V,"height",54);var X=C(V);ve(X,"x",8+150/2);var G=x(X),K=C(X);ve(K,"x",8+150/2);var ne=x(K),re=C(K);ve(re,"x1",158),ve(re,"x2",300);var de=C(re);Yt(de,1,()=>L(N).pulseBegin,Qt,(_,F)=>{var Z=RM(),Q=x(Z),Y=x(Q);ve(Y,"href",`#ps${B}`),Ke(()=>{ve(Z,"fill",L(N).color),ve(Q,"begin",L(F))}),ge(_,Z)});var Pe=C(de);ve(Pe,"x",300),ve(Pe,"width",245),ve(Pe,"height",60);var De=C(Pe);ve(De,"x",300),ve(De,"width",245),ve(De,"height",60);var qe=C(De);ve(qe,"x",300+245/2);var et=x(qe),J=C(qe);ve(J,"x",300+245/2);var te=x(J);{var pe=_=>{var F=Jr("wildcard ·");ge(_,F)};wt(te,_=>{L(N).wildcard&&_(pe)})}var Be=C(te),_e=C(J),Ye=C(_e),mt=C(Ye),Ze=x(mt),Je=x(Ze);ve(Je,"href",`#sc1${B}`);var rt=C(mt),ke=x(rt),ct=x(ke);ve(ct,"href",`#sc2${B}`);var U=C(rt);ve(U,"x",670),ve(U,"width",160),ve(U,"height",34);var Ie=C(U);ve(Ie,"x",670+160/2);var Re=x(Ie),Ge=C(Ie);ve(Ge,"x",670),ve(Ge,"width",160),ve(Ge,"height",34);var ie=C(Ge);ve(ie,"x",670+160/2);var P=x(ie);Ke((_,F)=>{ve(V,"y",L(N).y-54/2),ve(V,"fill",L(N).colorDim),ve(V,"stroke",L(N).strokeDim),ve(X,"y",L(N).y-7),ve(X,"fill",L(N).color),z(G,L(N).publisher),ve(K,"y",L(N).y+11),z(ne,L(N).publisherSub),ve(re,"y1",L(N).y),ve(re,"y2",L(N).y),ve(re,"stroke",L(N).strokeDim),ve(Pe,"y",L(N).y-60/2),ve(Pe,"fill",L(N).colorDim),ve(Pe,"stroke",L(N).color),ve(De,"y",L(N).y-60/2),ve(De,"stroke",L(N).color),ve(qe,"y",L(N).y-8),ve(qe,"fill",L(N).color),z(et,L(N).subject),ve(J,"y",L(N).y+11),z(Be,`${L(N).retention??""} retention`),ve(_e,"d",_),ve(_e,"stroke",L(N).strokeDim),ve(Ye,"d",F),ve(Ye,"stroke",L(N).strokeDim),ve(mt,"fill",L(N).color),ve(Ze,"begin",L(N).fanBegin[0]),ve(rt,"fill",L(N).color),ve(ke,"begin",L(N).fanBegin[1]),ve(U,"y",L(N).y-32-34/2),ve(Ie,"y",L(N).y-32+6),z(Re,L(N).consumers[0]),ve(Ge,"y",L(N).y+32-34/2),ve(ie,"y",L(N).y+32+6),z(P,L(N).consumers[1])},[()=>p(L(N).y),()=>v(L(N).y)],At),ge(I,$)});var E=C(b,3);ve(E,"y1",g-12),ve(E,"y2",g-12);var y=C(E);ve(y,"y",g);var T=C(y);ve(T,"y",g+11);var A=C(T);ve(A,"y",g+23);var D=C(A);ve(D,"y",g);var S=C(D);ve(S,"y",g+11);var w=C(S);ve(w,"y",g+23),ge(n,m)}var LM=Ne('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),DM=Ne('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-[#00FF94] font-mono text-sm uppercase tracking-widest">Interactive Simulation Guide</h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li>Observe the <strong>Collectors (Go)</strong> ingesting real-time market data via NATS.</li> <li>The <strong>Fractal Engine (Logic)</strong> analyzes incoming streams for unified patterns.</li> <li>Click <strong>VOLATILITY SPIKE</strong> to see how the hybrid ecosystem reacts to turbulence.</li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4">This simulation demonstrates the synergy of the multi-language reactive pipeline.</p></div>'),NM=Ne('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 opacity-50"></div></div>'),UM=Ne('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),FM=Ne("<!> <!>",1),OM=Ne('<div class="space-y-6"><div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🛠️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">1. Hybrid Architecture (Clojure + Go)</h4> <p class="text-sm text-gray-300 mb-3">Using the right tool for each operational constraint, maximizing both developer velocity and system performance.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"A synergistic approach where high-level abstractions meet low-level efficiency."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">2. Strategy Discovery (Clojure)</h4> <p class="text-sm text-gray-300 mb-3">Expressive modeling and REPL-driven research for rapid iteration on complex trading hypotheses.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Leveraging functional programming for robust, verifiable market analysis."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🏎️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">3. Edge Execution (Go)</h4> <p class="text-sm text-gray-300 mb-3">Low-latency performance and high concurrency in production, ensuring split-second execution precision.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Optimized binaries handling massive data throughput with minimal jitter."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🚌</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">4. Universal Data Bus (NATS)</h4> <p class="text-sm text-gray-300 mb-3">Decoupling runtimes through a common event language, enabling seamless communication across the entire stack.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"NATS JetStream provides the backbone for a truly reactive and modular ecosystem."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🌍</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">5. Multi-Language Ecosystem</h4> <p class="text-sm text-gray-300 mb-3">A platform where Clojure, Go, and Python coexist via JetStream, leveraging the best of each language.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Interoperability without compromise, designed for the future of quantitative finance."</p></div></div></div></div></div>'),BM=Ne('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> VOLATILITY SPIKE</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/20 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-[#00FF94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: COLLECTORS</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: FRACTAL ENGINE</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Logic / Indicators</div></div></div> <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: STRATEGY ENGINE</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-[#00FF94]/30 flex items-center justify-center bg-[#00FF94]/5 shadow-[0_0_20px_rgba(0,255,148,0.1)]"><div class="text-[#00FF94]"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-[#00FF94]">EXECUTION SIGNALS</div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-gray-900/50 to-black border border-gray-700 hover:border-[#00FF94]/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Ark Streams Technical Pillars</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Hybrid High-Performance Reactive Trading Infrastructure</p></button> <!></div></div>');function kM(n,e){Bt(e,!1);let t=pt("safe"),i=pt(!1),r=pt(!0),a=pt(!1),s=pt([]),o=0;const l={collectors:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7l8 5 8-5M12 12v7"></path></svg>',fractal:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',strategy:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>'};let c;function d(){clearInterval(c),c=setInterval(()=>{const Re=L(t)==="danger"&&Math.random()>.3?"danger":"safe",Ge={id:o++,type:Re,status:"moving",x:0};Fe(s,[...L(s),Ge]),L(s).length>15&&L(s).shift()},L(t)==="safe"?800:400)}let h;const u=50,p=95;function v(){Fe(s,L(s).map(Ie=>{if(Ie.status!=="moving")return Ie;const Re=Ie.type==="danger"?.6:.3;let Ge=Ie.x+Re;return Ge>=u&&Ge<u+2&&Ie.type==="danger"?(Ie.status="blocked",g(),Ie):(Ge>=p&&(Ie.status="success"),{...Ie,x:Ge})}).filter(Ie=>Ie.status!=="success"&&(Ie.status!=="blocked"||Math.random()>.05))),h=requestAnimationFrame(v)}function g(){Fe(i,!0),setTimeout(()=>Fe(i,!1),400)}ei(()=>(d(),v(),()=>{clearInterval(c),cancelAnimationFrame(h)})),Ka(()=>L(t),()=>{L(t)&&d()}),Lo(),Xt();var m=BM(),f=x(m),M=x(f),b=C(M,2),E=x(b),y=x(E);{var T=Ie=>{var Re=LM();ge(Ie,Re)};wt(y,Ie=>{L(t)==="danger"&&Ie(T)})}var A=C(y,2),D=C(f,2);{var S=Ie=>{var Re=DM(),Ge=x(Re),ie=C(x(Ge),2);Ht("click",ie,()=>Fe(r,!1)),pn(3,Re,()=>li),ge(Ie,Re)};wt(D,Ie=>{L(r)&&Ie(S)})}var w=C(D,2),I=x(w),N=C(x(I),4),B=x(N),$=C(B,2),V=x($);ln(V,()=>l.collectors);var X=C(N,2),G=x(X),K=x(G),ne=C(I,2),re=C(x(ne),2),de=x(re),Pe=C(de,2),De=x(Pe),qe=x(De);ln(qe,()=>L(i)?l.lock:l.fractal);var et=C(re,2),J=x(et),te=x(J),pe=C(ne,2),Be=C(x(pe),2),_e=x(Be),Ye=x(_e);ln(Ye,()=>l.strategy);var mt=C(pe,2);Yt(mt,5,()=>L(s),Ie=>Ie.id,(Ie,Re)=>{var Ge=FM(),ie=mi(Ge);{var P=Z=>{var Q=NM(),Y=x(Q);Ke(()=>{Ci(Q,`
                            left: ${L(Re).x??""}%; 
                            background-color: ${L(Re).type==="danger"?"#ef4444":"#00FF94"};
                            box-shadow: 0 0 10px ${L(Re).type==="danger"?"#ef4444":"#00FF94"};
                            opacity: ${L(Re).status==="blocked"?0:1};
                            transform: scale(${L(Re).status==="blocked"?2:1});
                        `),Ci(Y,`background: linear-gradient(to right, transparent, ${L(Re).type==="danger"?"#ef4444":"#00FF94"})`)}),ge(Z,Q)};wt(ie,Z=>{(L(Re).status==="moving"||L(Re).status==="blocked")&&Z(P)})}var _=C(ie,2);{var F=Z=>{var Q=UM();Ke(()=>Ci(Q,`left: ${L(Re).x??""}%;`)),ge(Z,Q)};wt(_,Z=>{L(Re).status==="blocked"&&Z(F)})}ge(Ie,Ge)});var Ze=C(w,2),Je=x(Ze),rt=x(Je),ke=C(x(rt),2),ct=C(Je,2);{var U=Ie=>{var Re=OM();pn(3,Re,()=>mp,()=>({duration:400})),ge(Ie,Re)};wt(ct,Ie=>{L(a)&&Ie(U)})}Ke(()=>{Ve(M,1,`px-6 py-2 rounded border transition-all duration-300
            ${L(t)==="safe"?"bg-[#00FF94]/20 border-[#00FF94] text-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ve(b,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${L(t)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Ve(A,1,`relative inline-flex rounded-full h-3 w-3 ${L(t)==="danger"?"bg-red-500":"bg-gray-500"}`),Ve(N,1,`relative z-10 w-32 h-32 rounded-full border-2 ${L(t)==="danger"?"border-red-500/50 animate-pulse":"border-[#00FF94]/30"} flex items-center justify-center bg-black/20`),Ve(B,1,`absolute inset-0 rounded-full border border-dashed ${L(t)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-[#00FF94]/20 animate-[spin_10s_linear_infinite]"}`),Ve($,1,`text-[#00FF94] ${L(t)==="danger"?"text-red-500":""}`),Ve(G,1,`text-lg font-bold ${L(t)==="danger"?"text-red-400":"text-[#00FF94]"}`),z(K,L(t)==="danger"?"VOLATILITY SPIKE":"ACTIVE INGESTION"),Ve(de,1,`absolute -inset-8 rounded-full bg-[#00FF94]/10 blur-xl transition-opacity duration-200
                    ${L(i)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Ve(Pe,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900/40
                    ${L(i)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-[#00FF94]/30"}`),Ve(De,1,`text-[#00FF94] transition-transform duration-200 ${L(i)?"scale-90 text-red-500":""}`),Ve(J,1,`text-lg font-bold ${L(i)?"text-red-400 animate-pulse":"text-[#00FF94]"} transition-colors`),z(te,L(i)?"COMPUTING FRACTALS":"PURE ANALYSIS"),Ve(ke,0,`w-6 h-6 text-[#00FF94] transition-transform duration-300 ${L(a)?"rotate-180":""}`)}),Ht("click",M,()=>Fe(t,"safe")),Ht("click",b,()=>Fe(t,"danger")),Ht("click",Je,()=>Fe(a,!L(a))),ge(n,m),kt()}var zM=Ne('<div class="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/5"><span class="text-accent font-mono text-lg leading-none mt-0.5">▸</span> <span class="text-gray-300 text-sm"> </span></div>'),HM=Ne('<span class="px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs"> </span>'),GM=Ne('<div class="grid grid-cols-12 text-xs border-b border-white/5 hover:bg-white/5 transition-colors"><div class="col-span-1 p-3 text-center text-gray-600 font-mono"> </div> <div class="col-span-3 p-3 text-gray-300 font-medium"> </div> <div class="col-span-4 p-3 text-accent/90"> </div> <div class="col-span-4 p-3 text-red-400/90"> </div></div>'),VM=Ne('<div class="p-3 border border-red-400/20 rounded-lg bg-red-400/5"><div class="text-red-400 font-mono text-xs font-bold mb-1"> </div> <div class="text-gray-400 text-xs"> </div></div>'),WM=Ne('<span class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">● LIVE</span>'),XM=Ne('<li class="text-xs text-gray-400 flex items-start gap-2"><span class="text-gray-600 mt-0.5">–</span> </li>'),$M=Ne('<div><div class="flex items-center justify-between"><span class="font-mono text-xs tracking-widest"> </span> <!></div> <h4 class="font-bold text-white text-sm"> </h4> <ul class="space-y-1"></ul></div>'),qM=Ne('<div class="w-full relative z-10 pointer-events-auto text-white"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> </a> <section><div class="max-w-4xl w-full text-center space-y-8"><div class="flex flex-wrap justify-center gap-3 mb-4"><span class="px-3 py-1 border border-accent/40 rounded-full bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Go 1.23</span> <span class="px-3 py-1 border border-blue-400/40 rounded-full bg-blue-400/10 text-blue-400 font-mono text-xs tracking-widest uppercase">NATS JetStream</span> <span class="px-3 py-1 border border-purple-400/40 rounded-full bg-purple-400/10 text-purple-400 font-mono text-xs tracking-widest uppercase">Wails Desktop</span></div> <h1 class="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter">ARK STREAMS</h1> <h2 class="text-xl md:text-2xl text-gray-400 font-light"> </h2> <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"><div class="text-center"><div class="text-2xl font-bold text-accent font-mono">7d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Data</div></div> <div class="text-center border-x border-white/10"><div class="text-2xl font-bold text-accent font-mono">365d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Strategy Audit</div></div> <div class="text-center"><div class="text-2xl font-bold text-accent font-mono">∞</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Replayable</div></div></div></div></section> <section><div class="max-w-3xl w-full space-y-10"><h3 class="text-xl text-accent font-mono tracking-wider uppercase text-center"> </h3> <div class="bg-black/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-accent font-serif">"</div> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-6"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-10"><div class="text-center max-w-4xl mx-auto space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <div class="bg-gradient-to-r from-accent/20 via-purple-900/20 to-accent/20 border border-accent/30 rounded-xl p-5 backdrop-blur-sm"><p class="text-base text-accent font-mono mb-1"> </p> <p class="text-xs text-gray-400"> </p></div></div> <div class="w-full"><!></div> <div class="flex flex-wrap justify-center gap-3"></div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="w-full overflow-hidden border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm"><div class="grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/5 border-b border-white/10"><div class="col-span-1 p-3 text-center">#</div> <div class="col-span-3 p-3">Filter</div> <div class="col-span-4 p-3 text-accent/80">▲ Long</div> <div class="col-span-4 p-3 text-red-400/80">▼ Short</div></div> <!></div> <div class="space-y-2"><div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Exit Conditions — first to trigger wins</div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"></div></div> <div class="p-4 border border-white/10 rounded-lg bg-white/5 text-xs text-gray-400 font-mono"><span class="text-accent">PaperBroker</span> — in-memory matching engine · position pyramiding · MFE/MAE tracking · FixedFractionalRM · used for live paper trading and backtests</div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-2xl w-full text-center space-y-8"><p class="text-3xl md:text-5xl font-mono text-white leading-snug uppercase tracking-tighter"> </p> <div class="flex justify-center gap-8 mt-12 opacity-50 text-xs font-mono tracking-widest uppercase"><span> </span> <span>•</span> <span> </span> <span>•</span> <span> </span></div> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="#/" class="px-8 py-3 bg-accent hover:bg-accent/80 text-black rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">BACK TO HOME</a></div></div></section> <div class="h-12"></div></div>');function YM(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative",s=[{id:"01",label:"Alligator Transition",long:"Bias just turned Bullish",short:"Bias just turned Bearish"},{id:"02",label:"Alligator Spread",long:"Jaw/teeth/lips spread above threshold",short:"Same"},{id:"03",label:"BB Squeeze Gate",long:"BB width above 50th percentile (last 300 bars)",short:"Same"},{id:"04",label:"Awesome Oscillator",long:"AO > 0 and accelerating (green bar)",short:"AO < 0 and accelerating (red bar)"},{id:"05",label:"Gator Mouth",long:"Current mouth wider than previous bar",short:"Same"},{id:"06",label:"Vol + MFI",long:"—",short:"Volume above SMA and MFI in GREEN or FAKE quadrant"}],o=[{label:"Take Profit",detail:"2 × ATR(14) from entry"},{label:"Stop Loss",detail:"2 × ATR(14) on the opposite side"},{label:"Trend Reversal",detail:"Alligator bias flips against position"},{label:"Teeth Touch",detail:"Price touches teeth with 2-bar debounce"}],l=[{phase:"PHASE 1",name:"Single-Node Intelligence",status:"current",items:["Single Go binary, all workers","NATS persists everything","AlligatorTrend on BTCUSDT + XAUUSDT","Nexus Terminal desktop"]},{phase:"PHASE 2",name:"Symbol & Exchange Expansion",status:"next",items:["Symbol-agnostic pipeline","New pair = new collector only","Strategies pick up via market.analyzed.*","Liquidation heatmap (KV price bins)"]},{phase:"PHASE 3",name:"Intelligence Layer",status:"soon",items:["On-chain integration (Aave/Compound)","AI Snapshot API → LLM context","Agentic tools (function-calling)","CoinGlass + global liquidation data"]},{phase:"PHASE 4",name:"Distributed Cluster",status:"later",items:["3-node NATS JetStream cluster","Raft consensus, stream replication","Independent Engine / Strategy / API nodes","Nexus Terminal connects to any node"]}],c={current:"text-accent border-accent bg-accent/10",next:"text-blue-400 border-blue-400/50 bg-blue-400/10",soon:"text-purple-400 border-purple-400/50 bg-purple-400/10",later:"text-gray-500 border-gray-600 bg-gray-500/10"};Xt();var d=qM(),h=x(d),u=x(h);TM(u,{size:16});var p=C(u),v=C(h,2);Ve(v,1,mn(a),"svelte-17y31qk");var g=x(v),m=C(x(g),4),f=x(m),M=C(v,2);Ve(M,1,mn(a),"svelte-17y31qk");var b=x(M),E=x(b),y=x(E),T=C(E,2),A=C(x(T),2),D=x(A),S=C(T,2);Yt(S,4,()=>["arkStreams.section1.cap1","arkStreams.section1.cap2","arkStreams.section1.cap3","arkStreams.section1.cap4"],Qt,(ee,se)=>{var Le=zM(),tt=C(x(Le),2),it=x(tt);Ke(Lt=>z(it,Lt),[()=>r()(se)],At),ge(ee,Le)});var w=C(M,2);Ve(w,1,mn(a),"svelte-17y31qk");var I=x(w),N=x(I),B=x(N),$=x(B),V=C(B,2),X=x(V),G=C(N,2),K=x(G);IM(K);var ne=C(w,2);Ve(ne,1,mn(a),"svelte-17y31qk");var re=x(ne),de=x(re),Pe=x(de),De=x(Pe),qe=C(Pe,2),et=x(qe),J=C(qe,2),te=x(J),pe=x(te),Be=C(te,2),_e=x(Be),Ye=C(de,2),mt=x(Ye);kM(mt,{});var Ze=C(Ye,2);Yt(Ze,4,()=>["Alligator (SMMA jaw/teeth/lips)","Awesome Oscillator","Accelerator Oscillator","Market Facilitation Index","Fractal highs/lows"],Qt,(ee,se)=>{var Le=HM(),tt=x(Le);Ke(()=>z(tt,se)),ge(ee,Le)});var Je=C(ne,2);Ve(Je,1,mn(a),"svelte-17y31qk");var rt=x(Je),ke=x(rt),ct=x(ke),U=x(ct),Ie=C(ct,2),Re=x(Ie),Ge=C(ke,2),ie=C(x(Ge),2);Yt(ie,1,()=>s,Qt,(ee,se)=>{var Le=GM(),tt=x(Le),it=x(tt),Lt=C(tt,2),$t=x(Lt),ti=C(Lt,2),Xn=x(ti),$n=C(ti,2),ni=x($n);Ke(()=>{z(it,L(se).id),z($t,L(se).label),z(Xn,L(se).long),z(ni,L(se).short)}),ge(ee,Le)});var P=C(Ge,2),_=C(x(P),2);Yt(_,5,()=>o,Qt,(ee,se)=>{var Le=VM(),tt=x(Le),it=x(tt),Lt=C(tt,2),$t=x(Lt);Ke(()=>{z(it,L(se).label),z($t,L(se).detail)}),ge(ee,Le)});var F=C(Je,2);Ve(F,1,mn(a),"svelte-17y31qk");var Z=x(F),Q=x(Z),Y=x(Q),xe=x(Y),le=C(Y,2),Ee=x(le),Oe=C(Q,2);Yt(Oe,5,()=>l,Qt,(ee,se)=>{var Le=$M(),tt=x(Le),it=x(tt),Lt=x(it),$t=C(it,2);{var ti=Bn=>{var ii=WM();ge(Bn,ii)};wt($t,Bn=>{L(se).status==="current"&&Bn(ti)})}var Xn=C(tt,2),$n=x(Xn),ni=C(Xn,2);Yt(ni,5,()=>L(se).items,Qt,(Bn,ii)=>{var yn=XM(),ri=C(x(yn));Ke(()=>z(ri,` ${L(ii)??""}`)),ge(Bn,yn)}),Ke(()=>{Ve(Le,1,`p-5 border rounded-xl space-y-3 ${c[L(se).status]??""} border-opacity-50`),z(Lt,L(se).phase),z($n,L(se).name)}),ge(ee,Le)});var ae=C(F,2);Ve(ae,1,mn(a),"svelte-17y31qk");var he=x(ae),Me=x(he),Te=x(Me),ue=C(Me,2),je=x(ue),O=x(je),fe=C(je,4),ce=x(fe),Se=C(fe,4),oe=x(Se);Ke((ee,se,Le,tt,it,Lt,$t,ti,Xn,$n,ni,Bn,ii,yn,ri,rr,ar,Oi)=>{z(p,` [ ${ee??""} ]`),z(f,se),z(y,`01 // ${Le??""}`),z(D,tt),z($,`02 // ${it??""}`),z(X,Lt),z(De,`03 // ${$t??""}`),z(et,ti),z(pe,Xn),z(_e,$n),z(U,`04 // ${ni??""}`),z(Re,Bn),z(xe,`05 // ${ii??""}`),z(Ee,yn),z(Te,ri),z(O,rr),z(ce,ar),z(oe,Oi)},[()=>r()("report.nav_back"),()=>r()("arkStreams.subtitle"),()=>r()("arkStreams.section1.title"),()=>r()("arkStreams.section1.text"),()=>r()("arkStreams.section2.title"),()=>r()("arkStreams.section2.subtitle"),()=>r()("arkStreams.section3.title"),()=>r()("arkStreams.section3.role"),()=>r()("arkStreams.section3.subtitle"),()=>r()("arkStreams.section3.subtitle2"),()=>r()("arkStreams.section4.title"),()=>r()("arkStreams.section4.subtitle"),()=>r()("arkStreams.section5.title"),()=>r()("arkStreams.section5.text"),()=>r()("arkStreams.conclusion"),()=>r()("arkStreams.footer.memory"),()=>r()("arkStreams.footer.latency"),()=>r()("arkStreams.footer.stack")],At),pn(1,v,()=>li),ge(n,d),kt(),i()}var jM=Ne('<div class="border border-white/10 bg-white/[0.02] p-3 rounded-sm flex flex-col gap-1 hover:border-white/20 transition-colors"><div class="flex items-center justify-between"><span class="text-white/30" style="font-size: 0.72em"> </span> <span style="font-size: 0.72em"> </span></div> <div class="text-white font-bold" style="font-size: 0.9em"> </div> <div class="text-white/40 leading-snug" style="font-size: 0.72em"> </div></div>'),KM=Ne('<span class="px-1.5 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF]/70 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),ZM=Ne('<span class="px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),JM=Ne('<span class="ml-3">ATR: <span class="text-white/40"> </span></span>'),QM=Ne('<div><div class="flex items-start justify-between gap-2"><div><div class="flex items-center gap-2 mb-0.5"><span class="text-white font-bold tracking-tight" style="font-size: 1.1em"> </span> <!></div> <span class="text-white/30" style="font-size: 0.72em"> </span></div> <div class="text-right shrink-0"><div style="font-size: 0.8em"> </div> <div style="font-size: 0.72em"> </div></div></div> <div class="flex items-center justify-between"><div class="flex items-center gap-2"><div></div> <span style="font-size: 0.8em"> </span></div> <span style="font-size: 0.72em"> </span></div> <div><div class="flex justify-between text-white/30 mb-1.5" style="font-size: 0.6em"><span> </span> <span class="text-white font-bold" style="font-size: 1.1em"> </span> <span> </span></div> <div class="relative h-1 bg-white/10 rounded-full overflow-visible"><div></div> <div class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-black"></div></div></div> <div class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-3"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %K</div> <div style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %D</div> <div class="text-white/60" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">MA(17)</div> <div class="text-[#4CC9F0]/70" style="font-size: 0.8em"><!></div></div></div> <div class="text-white/25 tracking-wide -mt-2" style="font-size: 0.6em"> <span> </span> <!></div></div>'),eE=Ne('<div class="border border-white/10 hover:border-rose-500/20 bg-black/60 p-5 rounded-sm flex flex-col gap-4 transition-colors"><div class="flex items-center justify-between"><span class="text-rose-400 font-bold tracking-widest" style="font-size: 0.9em"> </span> <span class="text-white/30 tracking-widest" style="font-size: 0.65em"> </span></div> <div><p class="text-white/30 tracking-widest uppercase mb-2" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.8em"> </p></div> <div class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-rose-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-amber-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-emerald-400 font-bold" style="font-size: 0.8em"> </div></div></div> <div class="text-white/25 border-t border-white/5 pt-3" style="font-size: 0.65em">INVALIDAÇÃO: <span class="text-amber-400/60"> </span></div></div>'),tE=Ne('<div class="border border-white/10 bg-white/[0.01] p-4 rounded-sm"><div class="text-[#00F0FF]/40 tracking-widest mb-2" style="font-size: 0.6em"> </div> <div class="text-white font-bold mb-2" style="font-size: 0.8em"> </div> <p class="text-white/50 leading-relaxed" style="font-size: 0.72em"> </p></div>'),nE=Ne('<div class="min-h-screen bg-black text-white font-mono relative z-10"><header class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10"><div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-3 flex-wrap"><a href="/" class="text-[#00F0FF]/60 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"> </a> <span class="text-white/20">/</span> <span class="text-white text-xs tracking-widest font-bold"> </span> <span class="hidden md:inline text-white/20">/</span> <span class="hidden md:inline text-[#00F0FF]/70 text-xs"> </span></div> <div class="flex items-center gap-3 flex-wrap justify-end"><div class="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-sm"><div class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div> <span class="text-amber-400 text-[10px] tracking-widest font-bold"> </span></div> <span class="hidden lg:inline text-white/30 text-[10px]"> </span> <div class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden" aria-label="Font size controls"><button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Decrease font size"> </button> <span class="text-[10px] text-white/30 px-1 tabular-nums"> </span> <button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Increase font size"> </button></div> <div class="hidden md:block"><!></div></div></div> <div class="md:hidden px-4 pb-2 border-t border-white/5"><!></div></header> <div class="max-w-7xl mx-auto px-4 py-8 space-y-10"><div class="space-y-3"><div class="flex items-baseline gap-3 flex-wrap"><span class="text-[#00F0FF]/40 tracking-[0.3em] uppercase" style="font-size: 0.72em">REL-OP</span> <span class="text-[#00F0FF]/40" style="font-size: 0.72em">·</span> <span class="text-white/20 tracking-widest" style="font-size: 0.72em"> </span></div> <h1 class="font-bold tracking-tight text-white leading-tight" style="font-size: clamp(1.6rem, 3vw + 1rem, 3rem)"> <span class="text-white/30 block md:inline" style="font-size: 0.75em"> </span></h1> <p class="text-[#4CC9F0]/70 max-w-2xl leading-relaxed" style="font-size: 0.9em"> </p> <div class="flex gap-4 flex-wrap text-white/30 tracking-widest pt-1" style="font-size: 0.65em"><span> </span> <span>·</span> <span> </span></div></div> <div class="border border-amber-500/20 bg-amber-500/5 p-4 rounded-sm flex gap-3"><span class="text-amber-400 shrink-0 mt-0.5" style="font-size: 0.8em">⚠</span> <p class="text-amber-400/80 leading-relaxed" style="font-size: 0.8em"><strong class="text-amber-400"> </strong> <!></p></div> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div></section> <section><div class="flex items-center gap-4 mb-4"><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase" style="font-size: 0.65em"> </h2> <div class="flex-1 h-px bg-white/5"></div> <span class="text-rose-400/60 tracking-widest" style="font-size: 0.65em">SHORT · ARMED · HALF</span></div> <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm mb-4 grid md:grid-cols-2 gap-6"><div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div> <div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div></div> <div class="grid md:grid-cols-2 gap-4 mb-4"></div> <div class="border border-white/5 bg-white/[0.01] p-4 rounded-sm flex items-start gap-3"><span class="text-white/30 font-bold shrink-0" style="font-size: 0.8em"> </span> <p class="text-white/50 leading-relaxed" style="font-size: 0.8em"><!></p></div> <div class="mt-4 p-4 border-l-2 border-[#00F0FF]/20 bg-[#00F0FF]/[0.02]"><p class="text-[#00F0FF]/50 uppercase tracking-widest mb-1" style="font-size: 0.65em"> </p> <p class="text-white/60 leading-relaxed" style="font-size: 0.8em"><!></p></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"></div></section> <section class="border-t border-white/5 pt-6"><div class="flex flex-wrap gap-6 text-white/30" style="font-size: 0.65em"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> <span><strong class="text-emerald-400">ARMED</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div> <span><strong class="text-amber-400">STANDBY</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div> <span><strong class="text-[#00F0FF]">IN_POSITION</strong> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">FULL</span> <span> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">HALF</span> <span> </span></div></div> <p class="text-white/15 mt-4" style="font-size: 0.55em"> </p></section></div></div>');function iE(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t);let a=pt(14);const s=11,o=20;ei(()=>{document.documentElement.style.scrollSnapType="none",document.documentElement.style.fontSize="16px"}),uf(()=>{document.documentElement.style.scrollSnapType="",document.documentElement.style.fontSize=""});const l={week:"S01",start:"01/06/2026",end:"05/06/2026",generated:"2026-05-31",regime:"RISK-ON ESTREITO",methodology:"Triple Screen (Elder) + Sistema de Impulso",regimeNote:"Apetite a risco concentrado em large-cap US. Commodities e alt-risk corrigindo. Real estruturalmente forte."},c=$e=>$e.toFixed(2),d=$e=>$e.toFixed(4),h=$e=>$e.toLocaleString("pt-BR",{maximumFractionDigits:2}),u=[{symbol:"BTC/USD",labelKey:"btc",roleKey:"role_primary",bias:"SHORT",status:"ARMED",conviction:"HALF",impulse:"blue_to_red",close:75708,ma17:76533.35,stochK:42.08,stochD:28.63,zoneKey:"zone_neutral_up",atr:null,support:73936,resistance:76606.5,priority:3,noteKey:"btc_note",formatFn:h},{symbol:"XAU/USD",labelKey:"xau",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:4529.57,ma17:4576.27,stochK:68.77,stochD:56.19,zoneKey:"zone_rising_overbought",atr:101.35,support:4500,resistance:4632.41,priority:1,noteKey:"xau_note",formatFn:h},{symbol:"S&P 500",labelKey:"sp",roleKey:"role_macro",bias:"LONG",status:"STANDBY",conviction:"FULL",impulse:"green",close:7580.06,ma17:7088.78,stochK:90.88,stochD:90.08,zoneKey:"zone_overbought",atr:68.83,support:7369.23,resistance:7599.38,priority:6,noteKey:"sp_note",formatFn:h},{symbol:"BOVESPA",labelKey:"bovespa",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:173787,ma17:177870.33,stochK:18.94,stochD:34.34,zoneKey:"zone_low_k_below_d",atr:2606.67,support:172686,resistance:180055,priority:2,noteKey:"bovespa_note",formatFn:h},{symbol:"USD/BRL",labelKey:"usdbrl",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"HALF",impulse:"red",close:5.0368,ma17:5.1099,stochK:64.81,stochD:66.89,zoneKey:"zone_rising",atr:null,support:4.995,resistance:5.1099,priority:4,noteKey:"usdbrl_note",formatFn:d},{symbol:"BRENT",labelKey:"brent",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"FULL",impulse:"red",close:93.46,ma17:94.37,stochK:11.51,stochD:13.07,zoneKey:"zone_oversold",atr:5.45,support:92.48,resistance:101.06,priority:5,noteKey:"brent_note",formatFn:c}],p=[...u].sort(($e,Ae)=>$e.priority-Ae.priority),v=[{id:"A",nameKey:"sc_a_name",conditionKey:"sc_a_condition",action:"EnterShort",stop:"76.800",target:"73.936",targetKey:"sc_a_target_label",invalidationKey:"sc_a_invalidation"},{id:"B",nameKey:"sc_b_name",conditionKey:"sc_b_condition",action:"EnterShort",stop:"74.100",target:"72.000 → 58.334",targetKey:"sc_b_target_label",invalidationKey:"sc_b_invalidation"}];function g($e,Ae,St){const zt=St-Ae;return zt===0?50:Math.min(100,Math.max(0,($e-Ae)/zt*100))}function m($e){return $e==="ARMED"?"text-emerald-400":$e==="IN_POSITION"?"text-[#00F0FF]":"text-amber-400"}function f($e){return $e==="ARMED"?"shadow-[0_0_8px_rgba(52,211,153,0.4)] border-emerald-500/40":$e==="IN_POSITION"?"shadow-[0_0_8px_rgba(0,240,255,0.4)] border-[#00F0FF]/40":"shadow-[0_0_6px_rgba(251,191,36,0.2)] border-amber-500/30"}function M($e){return $e==="SHORT"?"text-rose-400":"text-emerald-400"}function b($e){return $e==="red"?"report.impulse_red":$e==="green"?"report.impulse_green":"report.impulse_blue_red"}function E($e){return $e==="red"?"text-rose-500":$e==="green"?"text-emerald-400":"text-amber-400"}function y($e){return $e==="zone_overbought"?"text-rose-400":$e==="zone_oversold"?"text-amber-400":"text-[#4CC9F0]"}const T={btc:"Bitcoin",xau:"Ouro / Gold",sp:"S&P 500",bovespa:"Ibovespa",usdbrl:"Dólar / Real",brent:"Petróleo Brent"};Xt();var A=nE(),D=x(A),S=x(D),w=x(S),I=x(w),N=x(I),B=C(I,4),$=x(B),V=C(B,4),X=x(V),G=C(w,2),K=x(G),ne=C(x(K),2),re=x(ne),de=C(K,2),Pe=x(de),De=C(de,2),qe=x(De),et=x(qe),J=C(qe,2),te=x(J),pe=C(J,2),Be=x(pe),_e=C(De,2),Ye=x(_e);id(Ye,{only:["pt","en"]});var mt=C(S,2),Ze=x(mt);id(Ze,{only:["pt","en"]});var Je=C(D,2),rt=x(Je),ke=x(rt),ct=C(x(ke),4),U=x(ct),Ie=C(ke,2),Re=x(Ie),Ge=C(Re),ie=x(Ge),P=C(Ie,2),_=x(P),F=C(P,2),Z=x(F),Q=x(Z),Y=C(Z,4),xe=x(Y),le=C(rt,2),Ee=C(x(le),2),Oe=x(Ee),ae=x(Oe),he=C(Oe,2);ln(he,()=>r()("report.warning_text"));var Me=C(le,2),Te=x(Me),ue=x(Te),je=C(Te,2);Yt(je,5,()=>p,Qt,($e,Ae)=>{var St=jM(),zt=x(St),lt=x(zt),Ct=x(lt),Ut=C(lt,2),Pt=x(Ut),It=C(zt,2),Sn=x(It),Jt=C(It,2),xi=x(Jt);Ke((sr,Bi)=>{z(Ct,`#${L(Ae).priority??""}`),Ve(Ut,1,`font-bold ${sr??""}`),z(Pt,L(Ae).status),z(Sn,L(Ae).symbol),z(xi,Bi)},[()=>m(L(Ae).status),()=>r()(`report.${L(Ae).noteKey}`)],At),ge($e,St)});var O=C(Me,2),fe=x(O),ce=x(fe),Se=C(fe,2);Yt(Se,5,()=>u,Qt,($e,Ae)=>{var St=QM();const zt=At(()=>g(L(Ae).close,L(Ae).support,L(Ae).resistance));var lt=x(St),Ct=x(lt),Ut=x(Ct),Pt=x(Ut),It=x(Pt),Sn=C(Pt,2);{var Jt=qt=>{var dn=KM(),bi=x(dn);Ke(cr=>z(bi,cr),[()=>r()("report.role_primary")],At),ge(qt,dn)},xi=qt=>{var dn=ZM(),bi=x(dn);Ke(cr=>z(bi,cr),[()=>r()("report.role_macro")],At),ge(qt,dn)};wt(Sn,qt=>{L(Ae).roleKey==="role_primary"?qt(Jt):qt(xi,!1)})}var sr=C(Ut,2),Bi=x(sr),Cr=C(Ct,2),ki=x(Cr),Ta=x(ki),Pr=C(ki,2),Aa=x(Pr),or=C(lt,2),lr=x(or),Ir=x(lr),Lr=C(Ir,2),Ra=x(Lr),Dr=C(lr,2),_s=x(Dr),xs=C(or,2),bs=x(xs),ys=x(bs),Xo=x(ys),Ss=C(ys,2),$o=x(Ss),qo=C(Ss,2),Yo=x(qo),jo=C(bs,2),Ca=x(jo),Ko=C(Ca,2),Ms=C(xs,2),Es=x(Ms),Hd=C(x(Es),2),vp=x(Hd),Gd=C(Es,2),gp=C(x(Gd),2),_p=x(gp),xp=C(Gd,2),bp=C(x(xp),2),yp=x(bp);{var Sp=qt=>{var dn=Jr();Ke(bi=>z(dn,bi),[()=>L(Ae).formatFn(L(Ae).ma17)],At),ge(qt,dn)},Mp=qt=>{var dn=Jr("—");ge(qt,dn)};wt(yp,qt=>{L(Ae).ma17!==null?qt(Sp):qt(Mp,!1)})}var Ep=C(Ms,2),Vd=x(Ep),Zo=C(Vd),wp=x(Zo),Tp=C(Zo,2);{var Ap=qt=>{var dn=JM(),bi=C(x(dn)),cr=x(bi);Ke(()=>z(cr,L(Ae).atr)),ge(qt,dn)};wt(Tp,qt=>{L(Ae).atr!==null&&qt(Ap)})}Ke((qt,dn,bi,cr,Rp,Cp,Pp,Ip,Lp,Dp,Np,Up,Fp,Op)=>{Ve(St,1,`border ${qt??""} bg-black/80 backdrop-blur p-5 rounded-sm flex flex-col gap-4 hover:bg-white/[0.02] transition-all`),z(It,L(Ae).symbol),z(Bi,T[L(Ae).labelKey]),Ve(ki,1,`font-bold ${dn??""} tracking-widest`),z(Ta,L(Ae).bias),Ve(Pr,1,`tracking-widest ${L(Ae).conviction==="FULL"?"text-white/70":"text-white/40"}`),z(Aa,L(Ae).conviction),Ve(Ir,1,`w-1.5 h-1.5 rounded-full ${L(Ae).status==="ARMED"?"bg-emerald-400":L(Ae).status==="IN_POSITION"?"bg-[#00F0FF]":"bg-amber-400"} ${L(Ae).status!=="STANDBY"?"animate-pulse":""}`),Ve(Lr,1,`font-bold ${bi??""}`),z(Ra,L(Ae).status),Ve(Dr,1,cr),z(_s,Rp),z(Xo,`SUP ${Cp??""}`),z($o,Pp),z(Yo,`RES ${Ip??""}`),Ve(Ca,1,`absolute top-0 left-0 h-full rounded-full ${L(Ae).bias==="SHORT"?"bg-rose-500/60":"bg-emerald-500/60"}`),Ci(Ca,`width: ${L(zt)??""}%`),Ci(Ko,`left: calc(${L(zt)??""}% - 4px)`),Ve(Hd,1,`font-bold ${Lp??""}`),z(vp,Dp),z(_p,Np),z(Vd,`${Up??""}: `),Ve(Zo,1,Fp),z(wp,Op)},[()=>f(L(Ae).status),()=>M(L(Ae).bias),()=>m(L(Ae).status),()=>E(L(Ae).impulse),()=>r()(b(L(Ae).impulse)),()=>L(Ae).formatFn(L(Ae).support),()=>L(Ae).formatFn(L(Ae).close),()=>L(Ae).formatFn(L(Ae).resistance),()=>y(L(Ae).zoneKey),()=>L(Ae).stochK.toFixed(1),()=>L(Ae).stochD.toFixed(1),()=>r()("report.zone_label"),()=>y(L(Ae).zoneKey),()=>r()(`report.${L(Ae).zoneKey}`)],At),ge($e,St)});var oe=C(O,2),ee=x(oe),se=x(ee),Le=x(se),tt=C(ee,2),it=x(tt),Lt=x(it),$t=x(Lt),ti=C(Lt,2),Xn=x(ti);ln(Xn,()=>r()("report.tide_text"));var $n=C(it,2),ni=x($n),Bn=x(ni),ii=C(ni,2),yn=x(ii);ln(yn,()=>r()("report.wave_text"));var ri=C(tt,2);Yt(ri,5,()=>v,Qt,($e,Ae)=>{var St=eE(),zt=x(St),lt=x(zt),Ct=x(lt),Ut=C(lt,2),Pt=x(Ut),It=C(zt,2),Sn=x(It),Jt=x(Sn),xi=C(Sn,2),sr=x(xi),Bi=C(It,2),Cr=x(Bi),ki=x(Cr),Ta=x(ki),Pr=C(ki,2),Aa=x(Pr),or=C(Cr,2),lr=x(or),Ir=x(lr),Lr=C(lr,2),Ra=x(Lr),Dr=C(or,2),_s=x(Dr),xs=x(_s),bs=C(_s,2),ys=x(bs),Xo=C(Bi,2),Ss=C(x(Xo)),$o=x(Ss);Ke((qo,Yo,jo,Ca,Ko,Ms,Es)=>{z(Ct,`CENÁRIO ${L(Ae).id??""}`),z(Pt,qo),z(Jt,Yo),z(sr,jo),z(Ta,Ca),z(Aa,L(Ae).action),z(Ir,Ko),z(Ra,L(Ae).stop),z(xs,Ms),z(ys,L(Ae).target),z($o,Es)},[()=>r()(`report.${L(Ae).nameKey}`),()=>r()("report.trigger_label"),()=>r()(`report.${L(Ae).conditionKey}`),()=>r()("report.action_label"),()=>r()("report.stop_label"),()=>r()(`report.${L(Ae).targetKey}`),()=>r()(`report.${L(Ae).invalidationKey}`)],At),ge($e,St)});var rr=C(ri,2),ar=x(rr),Oi=x(ar),ps=C(ar,2),Rr=x(ps);ln(Rr,()=>r()("report.sc_c_text"));var ms=C(rr,2),wa=x(ms),Ho=x(wa),Go=C(wa,2),Vo=x(Go);ln(Vo,()=>r()("report.macro_implication_text"));var vs=C(oe,2),gs=x(vs),Wo=x(gs),R=C(gs,2);Yt(R,4,()=>["2pct","6pct","conv","hier"],Qt,($e,Ae)=>{var St=tE(),zt=x(St),lt=x(zt),Ct=C(zt,2),Ut=x(Ct),Pt=C(Ct,2),It=x(Pt);Ke((Sn,Jt,xi)=>{z(lt,Sn),z(Ut,Jt),z(It,xi)},[()=>r()(`report.rule_${Ae}_id`),()=>r()(`report.rule_${Ae}_title`),()=>r()(`report.rule_${Ae}_body`)],At),ge($e,St)});var k=C(vs,2),j=x(k),q=x(j),W=C(x(q),2),me=C(x(W)),we=C(q,2),be=C(x(we),2),Ce=C(x(be)),Ue=C(we,2),Xe=C(x(Ue),2),ze=C(x(Xe)),at=C(Ue,2),yt=C(x(at),2),Dt=x(yt),Nt=C(at,2),Mt=C(x(Nt),2),He=x(Mt),xt=C(j,2),ht=x(xt);Ke(($e,Ae,St,zt,lt,Ct,Ut,Pt,It,Sn,Jt,xi,sr,Bi,Cr,ki,Ta,Pr,Aa,or,lr,Ir,Lr,Ra,Dr)=>{z(N,$e),z($,Ae),z(X,`${St??""}
          ${l.start} – ${l.end}`),z(re,l.regime),z(Pe,`${zt??""}
          ${l.generated}`),qe.disabled=L(a)<=s,z(et,lt),z(te,L(a)),pe.disabled=L(a)>=o,z(Be,Ct),Ci(Je,`font-size: ${L(a)??""}px`),z(U,l.week),z(Re,`${Ut??""} `),z(ie,`— ${l.start}–${l.end}`),z(_,l.regimeNote),z(Q,`${Pt??""}: ${l.methodology}`),z(xe,`${It??""}: MARÉ MME(17)+MACD · ONDA STOCH(5,3,3) · VOL ATR(14)`),z(ae,Sn),z(ue,Jt),z(ce,xi),z(Le,sr),z($t,Bi),z(Bn,Cr),z(Oi,ki),z(Ho,Ta),z(Wo,Pr),z(me,` —
            ${Aa??""}`),z(Ce,` —
            ${or??""}`),z(ze,` —
            ${lr??""}`),z(Dt,`— ${Ir??""}`),z(He,`— ${Lr??""}`),z(ht,`NEXUS QUANT · REL-OP-${l.week} · ${Ra??""}
        ${l.generated} · ${Dr??""}
        ${l.start}–${l.end} · ${l.methodology}`)},[()=>r()("report.nav_back"),()=>r()("report.nav_title"),()=>r()("report.nav_week"),()=>r()("report.generated_label"),()=>r()("report.font_decrease"),()=>r()("report.font_increase"),()=>r()("report.page_title"),()=>r()("report.methodology_label"),()=>r()("report.indicators_label"),()=>r()("report.warning_title"),()=>r()("report.priority_title"),()=>r()("report.scoreboard_title"),()=>r()("report.playbook_title"),()=>r()("report.tide_label"),()=>r()("report.wave_label"),()=>r()("report.sc_c_label"),()=>r()("report.macro_implication_title"),()=>r()("report.risk_title"),()=>r()("report.legend_armed"),()=>r()("report.legend_standby"),()=>r()("report.legend_in_position"),()=>r()("report.legend_full"),()=>r()("report.legend_half"),()=>r()("report.generated_label"),()=>r()("report.nav_week")],At),Ht("click",qe,()=>Fe(a,Math.max(s,L(a)-1))),Ht("click",pe,()=>Fe(a,Math.min(o,L(a)+1))),pn(1,A,()=>li,()=>({duration:300})),ge(n,A),kt(),i()}var rE=Ne("<!> <!> <!> <!> <!> <!>",1),aE=Ne('<main class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"><!> <!> <!></main>'),sE=Ne('<div class="bg-black min-h-screen flex items-center justify-center"><div class="animate-pulse text-accent font-mono"> </div></div>');function oE(n,e){Bt(e,!1);const[t,i]=Rn(),r=()=>bn(Fn,"$t",t),a=Yv();let s=pt(window.location.hash);ei(()=>{const c=()=>Fe(s,window.location.hash);return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)}),Xt();var o=Do(),l=mi(o);qm(l,()=>a,c=>{var d=sE(),h=x(d),u=x(h);Ke(p=>z(u,p),[()=>r()("common.loading")],At),ge(c,d)},c=>{var d=aE(),h=x(d);T1(h,{});var u=C(h,2);K1(u,{});var p=C(u,2);{var v=m=>{SM(m,{})},g=(m,f)=>{{var M=E=>{YM(E,{})},b=(E,y)=>{{var T=D=>{iE(D,{})},A=D=>{var S=rE(),w=mi(S);P1(w,{});var I=C(w,2);L1(I,{});var N=C(I,2);N1(N,{});var B=C(N,2);F1(B,{});var $=C(B,2);V1($,{});var V=C($,2);X1(V,{}),ge(D,S)};wt(E,D=>{L(s)==="#/relatorios"?D(T):D(A,!1)},y)}};wt(m,E=>{L(s)==="#/ark-streams"?E(M):E(b,!1)},f)}};wt(p,m=>{L(s)==="#/presentation"?m(v):m(g,!1)})}ge(c,d)}),ge(n,o),kt(),i()}Wm(oE,{target:document.getElementById("app")});
