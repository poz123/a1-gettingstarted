import{R as d,r as u,u as j,j as m,a as y,L as p,S as k,b as w,W as N,c as S,d as M,q as L}from"./vendor.a4f6b9d5.js";const F=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};F();const b="(prefers-reduced-motion: no-preference)";function G(){const[i,c]=d.useState(!window.matchMedia(b).matches);return d.useEffect(()=>{const a=window.matchMedia(b),n=t=>{c(!t.matches)};return a.addListener(n),()=>{a.removeListener(n)}},[]),i}function H({x:i=0,y:c=0,rotation:a=0,scale:n=1,timing:t=150,springConfig:r={tension:300,friction:10}}){const s=G(),[h,f]=u.exports.useState(!1),v=j({transform:h?`translate(${i}px, ${c}px) rotate(${a}deg) scale(${n})`:"translate(0px, 0px) rotate(0deg) scale(1)",config:r});d.useEffect(()=>{if(!h)return;const x=window.setTimeout(()=>{f(!1)},t);return()=>{window.clearTimeout(x)}},[h]);const R=u.exports.useCallback(()=>{f(!0)},[]);return[s?{}:v,R]}const e=m.exports.jsx,o=m.exports.jsxs,A=m.exports.Fragment,g=["Hello React","Salut React","Hola React","\uC548\uB155 React","Hej React"];function E(){return g[Math.floor(Math.random()*g.length)]}function T(){const[i,c]=u.exports.useState(g[0]),[a,n]=H({x:5,y:5,scale:1}),t=()=>{const r=E();c(r)};return o(A,{children:[o("h1",{className:"title",children:[i,"!"]}),e(y.div,{onMouseEnter:n,style:a,children:e("img",{src:"https://cdn.glitch.com/2f80c958-3bc4-4f47-8e97-6a5c8684ac2c%2Fillustration.svg?v=1618196579405",className:"illustration",onClick:t,alt:"Illustration click to change language"})}),e("div",{className:"navigation",children:e(y.div,{onMouseEnter:n,children:e("a",{className:"btn--click-me",onClick:t,children:"Psst, click me"})})}),o("div",{className:"instructions",children:[e("h2",{children:"Using this project"}),o("p",{children:["This is the Glitch ",e("strong",{children:"Hello React"})," project. You can use it to build your own app. See more info in the"," ",e(p,{href:"/about",children:"About"})," page, and check out README.md in the editor for additional detail plus next steps you can take!"]})]})]})}function C(){return o("div",{className:"page",children:[e("h1",{className:"title",children:"About this site"}),e("p",{children:"Welcome to the Glitch React starter, where you can instantly create a React site that's fully customizable."}),e("p",{children:o("em",{children:["If you're completely new to React, learning the"," ",e("a",{href:"https://reactjs.org/docs/hello-world.html",children:"main concepts"})," ","will get you off to a great start. You'll also see comments and links to supporting resources throughout the code."]})}),o("p",{children:["This page is a great spot to tell the world a few details about the new React app you built on Glitch! Check out your project's"," ",e("code",{children:"readme"})," file to learn more about how to customize your content."]}),o("ul",{children:[o("li",{children:["\u{1F389} Right now, your site is ",e("strong",{children:"live on the web"})," \u{1F310} with a real URL (a secure HTTPS address!) that updates as soon as you make changes."]}),o("li",{children:["\u{1F4A5} ",e("strong",{children:"Add a domain"})," to your new Glitch project! Just go to the ",e("strong",{children:"Tools"})," menu in the Glitch editor, and click"," ",e("strong",{children:"Custom Domains"}),"."]}),o("li",{children:["\u{1F308} Use the ",e("strong",{children:"Share"})," button in the Glitch editor to invite others in to edit your new React project by typing in their email address or Glitch username. ",e("br",{})," ",e("strong",{children:"Tip:"})," \u{1F440}Make your code, or even your entire app, private to just those you invite, by"," ",e("a",{href:"https://glitch.com/pricing",children:"upgrading your Glitch account"}),"."]})]}),o("p",{children:[" ","The Glitch community is glad to welcome you, and the Internet is better when it's made by real people. We can't wait to see what you create!"]}),o("p",{children:["Built with ",e("a",{href:"https://reactjs.org/",children:"React"})," and"," ",e("a",{href:"https://vitejs.dev/",children:"Vite"})," on"," ",e("a",{href:"https://glitch.com/",children:"Glitch"}),"."]})]})}var I=()=>o(k,{children:[e(w,{path:"/",component:T}),e(w,{path:"/about",component:C})]});const P="Hello React!",O="A simple React single page app, built with Glitch. Remix it to get your own!!!!",$="glitch-default",W="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2Fhello-react-social.png?v=1616712747908";var l={"glitch-help-instructions":"For a custom domain, change the 'url' parameter from 'glitch-default' to your domain _without_ a traling slash, like 'https://www.example.com'",title:P,description:O,url:$,image:W};const _=()=>{const i=window.location.hostname;return o(N,{children:[e("title",{children:l.title}),e("meta",{name:"description",content:l.description}),e("meta",{name:"robots",content:"index,follow"}),e("link",{rel:"canonical",href:i}),e("meta",{property:"og:title",content:l.title}),e("meta",{property:"og:type",content:"article"}),e("meta",{property:"og:url",content:i}),e("meta",{property:"og:description",content:l.description}),e("meta",{property:"og:image",content:l.image}),e("meta",{name:"twitter:card",content:"summary"})]})};function q(){return o(S,{children:[e(_,{}),e("main",{role:"main",className:"wrapper",children:e("div",{className:"content",children:e(I,{})})}),o("footer",{className:"footer",children:[o("div",{className:"links",children:[e(p,{href:"/",children:"Home"}),e("span",{className:"divider",children:"|"}),e(p,{href:"/about",children:"About"})]}),o("a",{className:"btn--remix",target:"_top",href:"https://glitch.com/edit/#!/remix/glitch-hello-react",children:[e("img",{src:"https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140",alt:""}),"Remix on Glitch"]})]})]})}M.render(e(d.StrictMode,{children:e(L,{children:e(q,{})})}),document.getElementById("root"));
