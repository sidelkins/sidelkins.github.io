const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};N();function u(){}function B(e){return e()}function M(){return Object.create(null)}function b(e){e.forEach(B)}function S(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function O(e){return Object.keys(e).length===0}function v(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function I(){return j(" ")}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function y(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let k;function p(e){k=e}const d=[],V=[],g=[],C=[],J=Promise.resolve();let _=!1;function U(){_||(_=!0,J.then(D))}function $(e){g.push(e)}const x=new Set;let m=0;function D(){const e=k;do{for(;m<d.length;){const t=d[m];m++,p(t),F(t.$$)}for(p(null),d.length=0,m=0;V.length;)V.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(d.length);for(;C.length;)C.pop()();_=!1,x.clear(),p(e)}function F(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const H=new Set;function K(e,t){e&&e.i&&(H.delete(e),e.i(t))}function R(e,t,n,s){const{fragment:i,on_mount:o,on_destroy:r,after_update:h}=e.$$;i&&i.m(t,n),s||$(()=>{const c=o.map(B).filter(S);r?r.push(...c):b(c),e.$$.on_mount=[]}),h.forEach($)}function z(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(d.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,s,i,o,r,h=[-1]){const c=k;p(e);const a=e.$$={fragment:null,ctx:null,props:o,update:u,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:M(),dirty:h,skip_bound:!1,root:t.target||c.$$.root};r&&r(a.root);let w=!1;if(a.ctx=n?n(e,t.props||{},(l,q,...P)=>{const A=P.length?P[0]:q;return a.ctx&&i(a.ctx[l],a.ctx[l]=A)&&(!a.skip_bound&&a.bound[l]&&a.bound[l](A),w&&G(e,l)),q}):[],a.update(),w=!0,b(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const l=Q(t.target);a.fragment&&a.fragment.l(l),l.forEach(f)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),D()}p(c)}class X{$destroy(){z(this,1),this.$destroy=u}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let t,n,s;return{c(){t=E("canvas"),n=I(),s=E("div"),s.innerHTML=`<div style="padding-top: 30px;"><h1 style="padding-top: 230px; color: white; text-shadow: 4px 4px black;">sid elkins</h1> 
        <p style="padding-top: 25px; color: white;" id="app"></p></div> 

      <h2 style="padding-bottom: 10px; padding-top: 10px;">Introduction</h2> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 20px;"><div class="big-container-left" style=""><p class="time-text"></p> 
          <p style="padding-bottom: 5px;"></p></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      <h2 style="padding-bottom: 20px">My Current Projects</h2> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Porttitor massa</h3> 
          <p class="time-text">May 2020 - TBD</p>  
          <p>Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Velit laoreet id donec ultrices. Libero volutpat sed cras ornare. Porttitor leo a diam sollicitudin tempor id eu. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Diam vel quam elementum pulvinar etiam. Porttitor rhoncus dolor purus non enim. Quam id leo in vitae.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn1">See more</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Auctor augue</h3> 
          <p class="time-text">April 2019 - TBD</p>  
          <p>Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Morbi quis commodo odio aenean sed adipiscing diam. Vitae purus faucibus ornare suspendisse sed. Vitae congue mauris rhoncus aenean vel. Ut ornare lectus sit amet est placerat in. Congue quisque egestas diam in.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn2">See more</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Mauris</h3> 
          <p class="time-text">June 2022 - TBD</p>  
          <p>Consequat id porta nibh venenatis cras sed felis eget. Viverra accumsan in nisl nisi. Quam id leo in vitae. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn3">Visit</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      <h2 style="padding-bottom: 20px">Experience</h2> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Porttitor massa</h3> 
          <p class="time-text">May 2020 - TBD</p>  
          <p>Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Velit laoreet id donec ultrices. Libero volutpat sed cras ornare. Porttitor leo a diam sollicitudin tempor id eu. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Diam vel quam elementum pulvinar etiam. Porttitor rhoncus dolor purus non enim. Quam id leo in vitae.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn1">See more</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Auctor augue</h3> 
          <p class="time-text">April 2019 - TBD</p>  
          <p>Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Morbi quis commodo odio aenean sed adipiscing diam. Vitae purus faucibus ornare suspendisse sed. Vitae congue mauris rhoncus aenean vel. Ut ornare lectus sit amet est placerat in. Congue quisque egestas diam in.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn2">See more</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      
      <div class="flex-container-reverse" style="padding-bottom: 50px; padding-top: 40px;"><div class="big-container-left"><h3>Mauris</h3> 
          <p class="time-text">June 2022 - TBD</p>  
          <p>Consequat id porta nibh venenatis cras sed felis eget. Viverra accumsan in nisl nisi. Quam id leo in vitae. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.</p> 
          <button style="padding-bottom: 5px;" type="button" class="btn btn-outline-success" id="btn3">Visit</button></div> 
        <div class="small-container-right"><img src="srcassetsplaceholder-image.png" class="title-image"/></div></div> 

      
      <h2 style="padding-bottom: 20px">My Completed Projects (recent to old)</h2> 

      <h2 style="padding-bottom: 20px">Resources</h2> 

      
      <h2 style="padding-bottom: 20px; padding-top: 80px;">Contact Me</h2> 

      <img src="srcassetsplaceholder-image.png" class="rounded-corners" style=""/> 

      <br/>  <br/> 

      <p style="padding-bottom: 20px;">I&#39;d love to get in contact with you, so please feel free to reach me on any of these platforms.</p> 

      <a href="mailto:sidelkins77@gmail.com" class="fa fa-paper-plane" style="margin-right: 10px"></a> 
      <a href="https://www.instagram.com/sidelkins/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram" style="margin-right: 10px"></a> 
      <a href="https://github.com/sidelkins" target="_blank" rel="noopener noreferrer" class="fa fa-github"></a> 

      <br/>  <br/>  <br/>`,L(t,"id","banner"),L(s,"class","main-content"),y(s,"text-align","center"),y(s,"width","100%"),y(s,"position","absolute")},m(i,o){v(i,t,o),v(i,n,o),v(i,s,o)},p:u,i:u,o:u,d(i){i&&f(t),i&&f(n),i&&f(s)}}}class Z extends X{constructor(t){super(),W(this,t,null,Y,T,{})}}new Z({target:document.getElementById("app")});
