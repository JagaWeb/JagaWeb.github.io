import{P as y}from"./Post-MKbEoXgD.js";import{_ as P,r as _,c as f,o as k,a,F as w,b as C,n as h,u as c,d as x,e as L,t as B,f as p,g as M,h as s,i as F,j as n}from"./index-BI-kc5eB.js";const I={class:"posts_container"},N={key:1,class:"loader_container"},V={key:2,class:"loader"},b={__name:"MyPosts",setup(j){const u=n("theme"),r=n("searchPosts"),v=n("urlAdressPosts"),g=n("user_Id"),t=_([]),o=_(!1),l=f(()=>t.value.filter(e=>e.title.toLowerCase().includes(r.value.toLowerCase())||e.description.toLowerCase().includes(r.value.toLowerCase()))),m=async()=>{try{const e=await M.get(`${v}?user_id=${g}`);t.value=await e.data.reverse(),o.value=e.data.length===0}catch(e){console.log(e),o.value=!0}};return k(()=>{m()}),(e,i)=>(s(),a("div",I,[l.value.length!==0&&t.value.length!==0?(s(!0),a(w,{key:0},C(l.value,d=>(s(),F(y,{key:d.id,postOption:d},null,8,["postOption"]))),128)):(s(),a("div",N,[!o.value&&l.value.length===0&&t.value.length>0?(s(),a("h2",{key:0,class:h(c(u)?"input_light":"input_night")},[i[0]||(i[0]=x(" Нет постов по вашему запросу ")),L("span",null,'"'+B(c(r))+'"',1)],2)):p("",!0),o.value&&t.value.length===0?(s(),a("h2",{key:1,class:h(c(u)?"input_light":"input_night")}," У вас нет постов. ",2)):!o.value&&t.value.length===0?(s(),a("div",V)):p("",!0)]))]))}},$=P(b,[["__scopeId","data-v-1c899b88"]]);export{$ as default};