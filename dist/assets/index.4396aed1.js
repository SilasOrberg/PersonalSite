import{d as x,c as d,a as s,b as i,w as u,u as _,R as f,e as I,f as c,o as l,p as m,g as h,h as w,i as B,j as S,k as H}from"./vendor.af08819d.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};L();const N={id:"app"},P=c("Home"),k=c(" | "),A=c("Blog"),O=c(" | "),C=c("Portfolio"),E=x({setup(o){return(n,r)=>(l(),d("div",N,[s("nav",null,[i(_(f),{to:"/"},{default:u(()=>[P]),_:1}),k,i(_(f),{to:"/blog"},{default:u(()=>[A]),_:1}),O,i(_(f),{to:"/portfolio"},{default:u(()=>[C]),_:1})]),i(_(I))]))}});var v=(o,n)=>{const r=o.__vccOpts||o;for(const[a,e]of n)r[a]=e;return r};const K={name:"Home"},$=o=>(m("data-v-2ffb42b5"),o=o(),h(),o),R={class:"home"},V=$(()=>s("div",{class:"description"},[s("h1",null,"Welcome to My Website"),s("p",null," I smooth ladies am a programmer, passionate about coding. I have experience in various programming languages and frameworks. This website is a demonstration of my skills and a platform to share my thoughts and ideas. ")],-1)),M=$(()=>s("div",{class:"image"},[s("img",{src:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSKYIHyX3HzbdR0OuKqMdQcMlt7LdXYFK_AJx5LpyljgTwgB_4SSvKmY0wFoCyn8U4EdDNf_mfEdfEJVHc",alt:"Your description"})],-1)),Y=[V,M];function q(o,n,r,a,e,t){return l(),d("div",R,Y)}var F=v(K,[["render",q],["__scopeId","data-v-2ffb42b5"]]);const T={name:"Blog"},y=o=>(m("data-v-681a523b"),o=o(),h(),o),W={class:"blog"},j=y(()=>s("h1",null,"Blog",-1)),J=y(()=>s("p",null,"Coming soon...",-1)),X=[j,J];function z(o,n,r,a,e,t){return l(),d("div",W,X)}var D=v(T,[["render",z],["__scopeId","data-v-681a523b"]]);const G={name:"Portfolio"},b=o=>(m("data-v-68a239c6"),o=o(),h(),o),Q={class:"portfolio"},U=b(()=>s("h1",null,"Portfolio",-1)),Z=b(()=>s("p",null,"Coming soon...",-1)),ee=[U,Z];function oe(o,n,r,a,e,t){return l(),d("div",Q,ee)}var te=v(G,[["render",oe],["__scopeId","data-v-68a239c6"]]);const se=[{path:"/",component:F},{path:"/blog",component:D},{path:"/portfolio",component:te}],ne=w({history:B(),routes:se}),g=S(E);g.use(H());g.use(ne);g.mount("#app");
