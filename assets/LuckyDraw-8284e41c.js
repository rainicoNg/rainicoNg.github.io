import{d as $,u as F,r as m,c as h,w as n,a as c,o as p,b as _,t as f,e as r,f as a,m as K,g as B,h as M,F as P,n as N,i as x,j}from"./index-13e9838f.js";const E={class:"my-4 mx-3 text-h3"},J={class:"my-4"},W={class:"text-h5"},q={class:"d-flex flex-wrap pa-4 optionContainer"},G=$({__name:"LuckyDraw",setup(w){const{t:s}=F(),u=m(),e=m([]),d=m(),C=m([{name:"food",options:["Western","Taiwanese","Japanese","Korean","Kong","Thai","Vietnamese"]},{name:"palette",options:["white","black","gray","yellow","blue"]},{name:"number",options:["0","1","2","3","4","5","6","7","8","9"]}]),y=m([]),i=m(""),A=o=>{const t=C.value.find(b=>b.name===o);t&&(e.value=t.options)},L=()=>{e.value=[],i.value="",u.value=void 0},S=o=>{o&&o.trim()!==""&&(e.value.includes(o.trim())||(e.value.push(o.trim()),d.value=""))},O=o=>{e.value=e.value.filter(t=>t!==o)},D=()=>{e.value.length>0&&(i.value=e.value[Math.floor(Math.random()*e.value.length)]);for(const o of y.value)switch(o){case"No Repeat":e.value=e.value.filter(t=>t!==i.value);break}},z=()=>{i.value===""&&D()};return(o,t)=>{const b=c("v-list-item"),V=c("v-select"),v=c("v-col"),k=c("v-row"),R=c("v-icon"),g=c("v-btn"),T=c("v-text-field"),U=c("v-container");return p(),h(U,{class:"mainContainer"},{default:n(()=>[_("div",E,f(r(s)("titleLuckyDraw")),1),a(k,{class:"ma-0 justify-space-between"},{default:n(()=>[a(v,{cols:"12",md:"4"},{default:n(()=>[a(V,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),items:C.value,label:r(s)("fieldDrawSet"),"item-title":"name",variant:"outlined",density:"compact"},{item:n(({props:l,item:I})=>[a(b,K(l,{subtitle:I.raw.options.join(),onClick:Q=>A(l.title)}),null,16,["subtitle","onClick"])]),_:1},8,["modelValue","items","label"])]),_:1}),a(v,{cols:"12",md:"6"},{default:n(()=>[a(V,{label:r(s)("fieldOptions"),variant:"outlined",density:"compact",chips:"",items:["No Repeat"],multiple:"",modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=l=>y.value=l)},null,8,["label","modelValue"])]),_:1})]),_:1}),a(v,{cols:"12",class:"gy-2"},{default:n(()=>[_("div",J,[_("div",W,f(r(s)("titleDrawPool")),1),_("div",q,[(p(!0),B(P,null,M(e.value,l=>(p(),B("div",{key:l},[a(g,{variant:"flat",rounded:"xl",size:"small",ripple:!1,"append-icon":"mdi-close-circle",class:"ma-1",onClick:I=>O(l)},{append:n(()=>[a(R,{color:"#BAA280"})]),default:n(()=>[x(f(l)+" ",1)]),_:2},1032,["onClick"])]))),128))])]),a(k,{class:N(["ma-0",{"justify-space-between":e.value.length>0,"justify-end":e.value.length<=0}])},{default:n(()=>[e.value.length>0?(p(),h(g,{key:0,variant:"flat",color:"#BAA280","prepend-icon":"mdi-delete-empty",class:"my-4",onClick:L},{default:n(()=>[x(f(r(s)("actionClear")),1)]),_:1})):j("",!0),a(v,{cols:"12",md:"4",class:"px-0"},{default:n(()=>[a(T,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=l=>d.value=l),type:"input",label:r(s)("fieldNewDrawItem"),density:"compact",variant:"outlined","single-line":"","append-inner-icon":"mdi-plus-circle","onClick:appendInner":t[3]||(t[3]=l=>S(d.value))},null,8,["modelValue","label"])]),_:1})]),_:1},8,["class"]),a(k,{class:"justify-center"},{default:n(()=>[a(v,{cols:"12",md:"6"},{default:n(()=>[_("div",{class:N(["ma-1 draw",{btn:i.value==="",chip:i.value!==""}]),onClick:z},[x(f(i.value===""?r(s)("actionDraw"):i.value)+" ",1),i.value?(p(),h(g,{key:0,class:"refreshBtn",variant:"flat",size:"x-large",density:"compact",color:"#BAA280",icon:"mdi-refresh",onClick:D})):j("",!0)],2)]),_:1})]),_:1})]),_:1})]),_:1})}}});const H=(w,s)=>{const u=w.__vccOpts||w;for(const[e,d]of s)u[e]=d;return u},Y=H(G,[["__scopeId","data-v-92f2b3b8"]]);export{Y as default};