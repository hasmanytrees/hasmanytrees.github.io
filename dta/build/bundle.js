var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let s=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const f=new Set;function a(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&u(a)}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}const b=new Set;let w,x=0;function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),x-=r,x||u((()=>{x||(b.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),b.clear())})))}function E(n,o,r,i){if(!o)return t;const l=n.getBoundingClientRect();if(o.left===l.left&&o.right===l.right&&o.top===l.top&&o.bottom===l.bottom)return t;const{delay:c=0,duration:d=300,easing:h=e,start:p=s()+c,end:m=p+d,tick:$=t,css:y}=r(n,{from:o,to:l},i);let _,k=!0,v=!1;function w(){y&&C(n,_),k=!1}return function(t){let e;0===f.size&&u(a),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(!v&&t>=p&&(v=!0),v&&t>=m&&($(1,0),w()),!k)return!1;if(v){const e=0+1*h((t-p)/d);$(e,1-e)}return!0})),y&&(_=function(t,e,n,o,r,i,l,c=0){const s=16.666/o;let u="{\n";for(let t=0;t<=1;t+=s){const o=e+(n-e)*i(t);u+=100*t+`%{${l(o,1-o)}}\n`}const f=u+`100% {${l(n,1-n)}}\n}`,a=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(f)}_${c}`,d=t.ownerDocument;b.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[a]||(p[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${o}ms linear ${r}ms 1 both`,x+=1,a}(n,0,1,d,c,h,y)),c||(v=!0),$(0,1),w}function M(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,r)}}function R(t){w=t}const S=[],A=[],j=[],B=[],O=Promise.resolve();let q=!1;function L(t){j.push(t)}let N=!1;const P=new Set;function T(){if(!N){N=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];R(e),z(e.$$)}for(R(null),S.length=0;A.length;)A.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];P.has(e)||(P.add(e),e())}j.length=0}while(S.length);for(;B.length;)B.pop()();q=!1,N=!1,P.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const D=new Set;function F(t,e){t&&t.i&&(D.delete(t),t.i(e))}function H(t,e){t.f(),function(t,e){t.d(1),e.delete(t.key)}(t,e)}function U(t,e,o){const{fragment:l,on_mount:c,on_destroy:s,after_update:u}=t.$$;l&&l.m(e,o),L((()=>{const e=c.map(n).filter(i);s?s.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(L)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(S.push(t),q||(q=!0,O.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,n,i,l,c,s,u=[-1]){const f=w;R(e);const a=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(a.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return a.ctx&&c(a.ctx[t],a.ctx[t]=r)&&(!a.skip_bound&&a.bound[t]&&a.bound[t](r),d&&G(e,t)),n})):[],a.update(),d=!0,r(a.before_update),a.fragment=!!l&&l(a.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);a.fragment&&a.fragment.l(t),t.forEach(p)}else a.fragment&&a.fragment.c();n.intro&&F(e.$$.fragment),U(e,n.target,n.anchor),T()}R(f)}class J{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(t){const e=t-1;return e*e*e+1}function Q(t,e,n={}){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,l=e.from.width/t.clientWidth,c=e.from.height/t.clientHeight,s=(e.from.left-e.to.left)/l,u=(e.from.top-e.to.top)/c,f=Math.sqrt(s*s+u*u),{delay:a=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=K}=n;return{delay:a,duration:i(d)?d(f):d,easing:h,css:(t,e)=>`transform: ${r} translate(${e*s}px, ${e*u}px);`}}function V(t,e,n){const o=t.slice();return o[6]=e[n],o}function X(e,n){let o,r,l,c,s,u=n[6].value+"",f=t;return{key:e,first:null,c(){o=g("div"),r=m(u),_(o,"class","die svelte-1f0jr02"),k(o,"background-color",n[1].backgroundColor),k(o,"color",n[1].colors[n[6].value-1]),v(o,"spinme",n[6].spinning),v(o,"locked",n[6].locked),this.first=o},m(t,e){h(t,o,e),d(o,r),c||(s=y(o,"click",(function(){i(n[3](n[6].id))&&n[3](n[6].id).apply(this,arguments)})),c=!0)},p(t,e){n=t,1&e&&u!==(u=n[6].value+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,u),1&e&&k(o,"color",n[1].colors[n[6].value-1]),1&e&&v(o,"spinme",n[6].spinning),1&e&&v(o,"locked",n[6].locked)},r(){l=o.getBoundingClientRect()},f(){M(o),f()},a(){f(),f=E(o,l,Q,{duration:500})},d(t){t&&p(o),c=!1,s()}}}function Y(e){let n,o,i,l,c,s,u,f,a,m=[],k=new Map,v=e[0];const b=t=>t[6].id;for(let t=0;t<v.length;t+=1){let n=V(e,v,t),o=b(n);k.set(o,m[t]=X(o,n))}return{c(){n=g("div");for(let t=0;t<m.length;t+=1)m[t].c();o=$(),i=g("br"),l=$(),c=g("button"),c.textContent="Roll",s=$(),u=g("button"),u.textContent="Unlock All",_(n,"class","dice")},m(t,r){h(t,n,r);for(let t=0;t<m.length;t+=1)m[t].m(n,null);d(n,o),d(n,i),d(n,l),d(n,c),d(n,s),d(n,u),f||(a=[y(c,"click",e[2]),y(u,"click",e[4])],f=!0)},p(t,[e]){if(11&e){v=t[0];for(let t=0;t<m.length;t+=1)m[t].r();m=function(t,e,n,o,r,i,l,c,s,u,f,a){let d=t.length,h=i.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],$=new Map,y=new Map;for(p=h;p--;){const t=a(r,i,p),c=n(t);let s=l.get(c);s?o&&s.p(t,e):(s=u(c,t),s.c()),$.set(c,m[p]=s),c in g&&y.set(c,Math.abs(p-g[c]))}const _=new Set,k=new Set;function v(t){F(t,1),t.m(c,f),l.set(t.key,t),f=t.first,h--}for(;d&&h;){const e=m[h-1],n=t[d-1],o=e.key,r=n.key;e===n?(f=e.first,d--,h--):$.has(r)?!l.has(o)||_.has(o)?v(e):k.has(r)?d--:y.get(o)>y.get(r)?(k.add(o),v(e)):(_.add(r),d--):(s(n,l),d--)}for(;d--;){const e=t[d];$.has(e.key)||s(e,l)}for(;h;)v(m[h-1]);return m}(m,e,b,1,t,v,k,n,H,X,o,V);for(let t=0;t<m.length;t+=1)m[t].a()}},i:t,o:t,d(t){t&&p(n);for(let t=0;t<m.length;t+=1)m[t].d();f=!1,r(a)}}}function Z(t,e,n){let o=[{id:1,value:1,locked:!1,spinning:!1},{id:2,value:1,locked:!1,spinning:!1},{id:3,value:1,locked:!1,spinning:!1},{id:4,value:1,locked:!1,spinning:!1},{id:5,value:1,locked:!1,spinning:!1}];function r(){o.forEach((function(t,e,n){t.locked||(t.value=Math.floor(6*Math.random())+1,t.spinning=!1)})),o.sort(((t,e)=>t.value-e.value)),n(0,o=[...o])}return[o,{backgroundColor:"navy",colors:["cyan","cyan","cyan","yellow","yellow","white"]},function(){setTimeout(r,250),o.forEach((function(t,e,n){t.locked||(t.spinning=!0)})),n(0,o=[...o])},function(t){let e=o.find((e=>e.id==t));e.locked=!e.locked,n(0,o=[...o])},function(){o.forEach((function(t,e,n){t.locked=!1})),n(0,o=[...o])}]}class tt extends J{constructor(t){super(),I(this,t,Z,Y,l,{})}}function et(e){let n,o;return n=new tt({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){U(n,t,e),o=!0},p:t,i(t){o||(F(n.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),(void 0).c.push((()=>{D.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(n.$$.fragment,t),o=!1},d(t){W(n,t)}}}return new class extends J{constructor(t){super(),I(this,t,null,et,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
