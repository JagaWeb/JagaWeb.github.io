import{P as f}from"./Post-BTcO9fLv.js";import{_ as P,r as h,c as k,w as y,o as w,a,F as C,b as x,n as p,u as c,d as L,e as B,t as b,f as v,g as F,h as t,i as N,j as n}from"./index-D5jOy2CM.js";const V={class:"posts_container"},j={key:1,class:"loader_container"},A={key:2,class:"loader"},E={__name:"Posts",setup(O){const i=n("theme"),r=n("searchPosts"),g=n("confirmation"),m=n("urlAdressPosts"),s=h([]),o=h(!1),l=k(()=>s.value.filter(e=>e.title.toLowerCase().includes(r.value.toLowerCase())||e.description.toLowerCase().includes(r.value.toLowerCase()))),u=async()=>{try{const e=await F.get(m);s.value=await e.data.reverse(),o.value=e.data.length===0}catch(e){console.log(e),o.value=!0}};return y(()=>{g.value.delete===!0&&u()}),w(()=>{u()}),(e,d)=>(t(),a("div",V,[l.value.length!==0&&s.value.length!==0?(t(!0),a(C,{key:0},x(l.value,_=>(t(),N(f,{key:_.id,postOption:_},null,8,["postOption"]))),128)):(t(),a("div",j,[!o.value&&l.value.length===0&&s.value.length>0?(t(),a("h2",{key:0,class:p(c(i)?"input_light":"input_night")},[d[0]||(d[0]=L(" Нет постов по вашему запросу ")),B("span",null,'"'+b(c(r))+'"',1)],2)):v("",!0),o.value&&s.value.length===0?(t(),a("h2",{key:1,class:p(c(i)?"input_light":"input_night")}," Нет постов. ",2)):!o.value&&s.value.length===0?(t(),a("div",A)):v("",!0)]))]))}},I=P(E,[["__scopeId","data-v-6bd6442b"]]);export{I as default};
