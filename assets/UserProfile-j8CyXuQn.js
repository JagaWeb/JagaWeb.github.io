import{_ as F,r as l,o as L,a as d,e as t,k as A,u as a,C as T,d as j,t as _,f as M,n as r,F as R,b as Y,j as f,s as q,q as z,g as h,h as c,l as E,I as G,i as H}from"./index-D5jOy2CM.js";import{S as J}from"./ShowPost-CSx10SuQ.js";import"./Post-BTcO9fLv.js";const K={class:"my_profile_header"},O={class:"other"},Q={class:"name"},W={key:0,class:"loader_text"},X={class:"edit_and_settings"},Z=["disabled"],ee={key:0,class:"loader"},se={key:1},te={class:"friends_container"},ae={class:"friends"},re={class:"my_profile_footer"},oe={__name:"UserProfile",setup(le){const o=f("theme"),v=f("urlAdressAuth"),B=f("urlAdressPosts"),w=f("user_Id"),$=q(),V=z(),x=l(0),I=l(0),b=l(0),n=l([]),p=l([]),P=l(!1),i=l([]),m=l(""),g=l(!1),u=l(!1),C=async s=>{try{const e=await h.get(`${v}?user_id=${s}`);n.value=e.data[0],I.value=e.data[0].users_subsribe.length,e.status==200&&(N(e.data[0].user_id),D(e.data[0].user_id),y())}catch(e){console.log(e)}},y=async()=>{u.value=!0;try{const s=await h.get(`${v}?user_id=${w}`);m.value=s.data[0].id,i.value=s.data[0].users_subsribe,s.status===200&&(g.value=s.data[0].users_subsribe.includes(n.value.user_id)),u.value=!1}catch(s){console.log(s),u.value=!1}},N=async s=>{try{const e=await h.get(`${B}?user_id=${s}`);p.value=e.data,S()}catch(e){console.log(e),P.value=!0}},D=async s=>{try{const e=await h.get(`${v}?users_subsribe=${s}`);b.value=e.data.length}catch(e){console.log(e),b.value=0}},S=()=>{for(let s=0;s<p.value.length;s++)x.value+=p.value[s].like},U=async()=>{u.value=!0;const s=i.value.findIndex(e=>e===n.value.user_id);if(g.value==!0){i.value.splice(s,1);try{(await h.put(`${v}/${m.value}`,{users_subsribe:i.value})).status===200&&(y(),i.value=[])}catch(e){console.log(e),u.value=!1}}else{i.value.push(n.value.user_id);try{(await h.put(`${v}/${m.value}`,{users_subsribe:i.value})).status===200&&(y(),i.value=[])}catch(e){console.log(e),u.value=!0}}};return L(()=>{if($.params.id==w){V.push("/myProfile");return}C($.params.id)}),(s,e)=>(c(),d("div",{class:r(["my_profile_conatiner",a(o)?"themeBgwhite":"themeBgblack"])},[t("div",K,[A(T,{src:n.value.user_logo||a(E),preview:"",width:"220px",height:"220px",style:{overflow:"hidden","border-radius":"50%"}},null,8,["src"]),t("div",O,[t("h2",Q,[j(_(n.value.user_name)+" ",1),n.value.user_name?M("",!0):(c(),d("div",W))]),t("div",X,[t("button",{onClick:e[0]||(e[0]=k=>U()),disabled:u.value,class:r({"btn-sub_active":g.value})},[u.value==!0?(c(),d("div",ee)):(c(),d("span",se,_(g.value?"отписатся":"подписаться"),1))],10,Z),e[1]||(e[1]=t("button",null,"общаться",-1))]),t("div",te,[t("div",ae,[t("h3",{class:r(a(o)?"input_light":"input_night")},_(p.value.length||0)+" постов ",3),t("h3",{class:r(a(o)?"input_light":"input_night")},_(x.value||0)+" лайков ",3),t("h3",{class:r(a(o)?"input_light":"input_night")},_(I.value||0)+" друзей ",3)]),t("h3",{class:r(a(o)?"input_light":"input_night")},_(b.value)+" человек добавили в друзья ",3)]),t("p",{class:r(["biographies",a(o)?"input_light":"input_night"])}," Нет биографии ",2)])]),t("div",re,[t("div",{class:r(["liked-text",a(o)?"borderLight":"borderNight"])},[t("h2",{class:r(a(o)?"input_light":"input_night")},"Посты",2),A(a(G),{icon:"bi:images",width:"35",height:"35",class:r(a(o)?"input_light":"input_night"),style:{transition:".3s"}},null,8,["class"])],2),t("div",{class:r(["liked",a(o)?"themeBgwhite":"themeBgblack"])},[P.value===!0?(c(),d("h2",{key:0,class:r(a(o)?"input_light":"input_night")}," У этого пользователя нет постов. ",2)):(c(!0),d(R,{key:1},Y(p.value,k=>(c(),H(J,{key:k.id,likedId:k.id,userProf:!0},null,8,["likedId"]))),128))],2)])],2))}},ce=F(oe,[["__scopeId","data-v-7dbf7d19"]]);export{ce as default};