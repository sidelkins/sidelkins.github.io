const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};W();function p(){}function D(e){return e()}function U(){return Object.create(null)}function q(e){e.forEach(D)}function J(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function _(){return R(" ")}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function V(e){return Array.from(e.childNodes)}function E(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let I;function h(e){I=e}const g=[],H=[],b=[],B=[],X=Promise.resolve();let A=!1;function Y(){A||(A=!0,X.then(F))}function L(e){b.push(e)}const k=new Set;let x=0;function F(){const e=I;do{for(;x<g.length;){const t=g[x];x++,h(t),Z(t.$$)}for(h(null),g.length=0,x=0;H.length;)H.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while(g.length);for(;B.length;)B.pop()();A=!1,k.clear(),h(e)}function Z(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const $=new Set;let ee;function S(e,t){e&&e.i&&($.delete(e),e.i(t))}function G(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),ee.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function K(e){e&&e.c()}function N(e,t,n,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:d}=e.$$;s&&s.m(t,n),i||L(()=>{const l=r.map(D).filter(J);a?a.push(...l):q(l),e.$$.on_mount=[]}),d.forEach(L)}function z(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(g.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(e,t,n,i,s,r,a,d=[-1]){const l=I;h(e);const o=e.$$={fragment:null,ctx:null,props:r,update:p,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:U(),dirty:d,skip_bound:!1,root:t.target||l.$$.root};a&&a(o.root);let u=!1;if(o.ctx=n?n(e,t.props||{},(c,y,...P)=>{const C=P.length?P[0]:y;return o.ctx&&s(o.ctx[c],o.ctx[c]=C)&&(!o.skip_bound&&o.bound[c]&&o.bound[c](C),u&&te(e,c)),y}):[],o.update(),u=!0,q(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const c=V(t.target);o.fragment&&o.fragment.l(c),c.forEach(v)}else o.fragment&&o.fragment.c();t.intro&&S(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),F()}h(l)}class T{$destroy(){z(this,1),this.$destroy=p}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e){let t;return{c(){t=m("div"),t.innerHTML=`<div></div> 
    <div class="buttons svelte-78axqr"><a href="#about" class="svelte-78axqr"><h3 class="page-button svelte-78axqr">about</h3></a> 
        <a href="#experience" class="svelte-78axqr"><h3 class="page-button svelte-78axqr">experience</h3></a> 
        <a href="#projects" class="svelte-78axqr"><h3 class="page-button svelte-78axqr">projects</h3></a> 
        <a href="#contact" class="svelte-78axqr"><h3 class="page-button svelte-78axqr">contact</h3></a></div>`,j(t,"class","nav-container svelte-78axqr")},m(n,i){w(n,t,i)},p,i:p,o:p,d(n){n&&v(t)}}}class ie extends T{constructor(t){super(),O(this,t,null,ne,M,{})}}function se(e){let t,n,i,s,r,a,d,l,o,u;return o=new ie({}),{c(){t=m("div"),n=m("div"),i=m("h1"),i.textContent="sid elkins",s=_(),r=m("br"),a=_(),d=m("h1"),d.textContent=`${e[0]()}`,l=_(),K(o.$$.fragment),j(n,"class","hero-text"),j(t,"class","hero-image")},m(c,y){w(c,t,y),f(t,n),f(n,i),f(n,s),f(n,r),f(n,a),f(n,d),f(t,l),N(o,t,null),u=!0},p,i(c){u||(S(o.$$.fragment,c),u=!0)},o(c){G(o.$$.fragment,c),u=!1},d(c){c&&v(t),z(o)}}}function re(e,t,n){var i=["\u{1F935}","\u{1F920}","\u{1F601}","\u{1F354}"];function s(){return i[Math.floor(Math.random()*i.length)]}return[s]}class oe extends T{constructor(t){super(),O(this,t,re,se,M,{randomEmoji:0})}get randomEmoji(){return this.$$.ctx[0]}}function ae(e){let t,n,i,s;return t=new oe({}),{c(){K(t.$$.fragment),n=_(),i=m("div"),i.innerHTML=`<section><a id="about"><h1>About</h1> 
    
    <h2 style="padding-bottom: 10px; padding-top: 10px;">Introduction</h2></a> 
    <div class="flex-container-card" style="padding-top: 10px;"><div class="big-container-left" style=""><p style="font-size: 2rem;">Hello, I&#39;m Sid Elkins.</p> 
        <p style="font-size: 1.1rem;">I&#39;m a student at The University of Alabama studying Management Information Systems. Scroll down to learn more about me!</p> 
        <h2 style="font-size: 0.8rem;">Note: This is a work-in-progress, and not everything is guranteed to work as intended...</h2></div> 
      <div class="small-container-right flex-container-card-image"><img style="width: 80%;" src="https://raw.githubusercontent.com/sidelkins/sidelkins.github.io/635e1e370495c123f283bd244f3e8c6594013e4a/src/assets/headshot.jpg" class="title-image offset-outline" alt="headshot"/></div></div></section> 

  <section><a id="experience"><h1>Experience</h1></a> 
    <div class="flex-container-card" style="padding-top: 10px;"><div class="big-container-left" style=""><h3 style="font-size: 1.25rem;">Software Development Intern</h3> 
        <h2 style="font-size: 1.25rem;">Motion Industries, May 2022 - Aug 2022</h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> 
      <div class="small-container-right" style=""><img src="src/assets/motion-industries.png" style="align-self:center; justify-content: center; width: 150px;"/> 
        <div class="toolbox"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" class="icon-image"/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="icon-image"/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="icon-image"/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" class="icon-image"/></div></div> 
      <div></div></div> 

    <div class="flex-container-card" style="padding-top: 10px;"><div class="big-container-left" style=""><h3 style="font-size: 1.25rem;">Director of IT &amp; Webmaster</h3> 
        <h2 style="font-size: 0.9rem;">The University of Alabama SGA, May 2022 - Aug 2022</h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> 
      <div class="small-container-right" style=""><img src="src/assets/sga-logo.png" style="align-self:center; justify-content: center; width: 150px;"/> 
        <div class="toolbox"></div></div> 
      <div></div></div></section> 

  <section><a id="projects"><h1>Projects</h1></a> 
    <div class="flex-container-card" style="padding-top: 10px;"><div class="big-container-left" style=""><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> 
      <div class="small-container-right flex-container-card-image"><img src="https://raw.githubusercontent.com/sidelkins/sidelkins.github.io/4cec8bed6db2903c5888a45b7a80b58358ab0d88/src/assets/placeholder-image.png" class="title-image" alt=""/></div></div></section>`,j(i,"class","main-content"),E(i,"text-align","center"),E(i,"width","100%"),E(i,"position","absolute")},m(r,a){N(t,r,a),w(r,n,a),w(r,i,a),s=!0},p,i(r){s||(S(t.$$.fragment,r),s=!0)},o(r){G(t.$$.fragment,r),s=!1},d(r){z(t,r),r&&v(n),r&&v(i)}}}class ce extends T{constructor(t){super(),O(this,t,null,ae,M,{})}}new ce({target:document.getElementById("app")});
