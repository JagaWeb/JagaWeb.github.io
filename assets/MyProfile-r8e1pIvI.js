import{_ as A,r as d,o as $,a as u,e,k as y,u as t,C,d as b,t as r,f as N,i as w,n as l,F as D,b as F,g,h as n,l as L,x as M,R as S,I as j,j as _}from"./index-D5jOy2CM.js";import{S as R}from"./ShowPost-CSx10SuQ.js";import"./Post-BTcO9fLv.js";const U={class:"my_profile_header"},Y={class:"other"},z={class:"name"},E={key:0,class:"loader_text"},T={class:"edit_and_settings"},q=["disabled"],G={key:0,class:"loader"},H={class:"friends_container"},J={class:"friends"},K={class:"my_profile_footer"},O={__name:"MyProfile",setup(Q){const o=_("theme"),v=_("urlAdressAuth"),x=_("urlAdressPosts"),h=_("user_Id"),f=d(0),m=d(0),p=d(0),c=d([]),i=d([]),B=async()=>{try{const s=await g.get(`${v}?user_id=${h}`);i.value=s.data[0],m.value=s.data[0].users_subsribe.length,s.status==200&&(I(h),P(h))}catch(s){console.log(s)}},I=async s=>{try{const a=await g.get(`${x}?user_id=${s}`);c.value=a.data,V()}catch(a){console.log(a)}},P=async s=>{try{const a=await g.get(`${v}?users_subsribe=${s}`);p.value=a.data.length}catch(a){console.log(a),p.value=0}},V=()=>{for(let s=0;s<c.value.length;s++)f.value+=c.value[s].like};return $(()=>{B()}),(s,a)=>(n(),u("div",{class:l(["my_profile_conatiner",t(o)?"themeBgwhite":"themeBgblack"])},[e("div",U,[y(C,{src:i.value.user_logo||t(L),preview:"",width:"220px",height:"220px",style:{overflow:"hidden","border-radius":"50%"}},null,8,["src"]),e("div",Y,[e("h2",z,[b(r(i.value.user_name)+" ",1),i.value.user_name?N("",!0):(n(),u("div",E))]),e("div",T,[e("button",{disabled:!i.value.id},[i.value.id?(n(),w(t(S),{key:1,to:{name:"editUsers",params:{id:i.value.id}}},{default:M(()=>a[0]||(a[0]=[b(" редактировать ")])),_:1},8,["to"])):(n(),u("div",G))],8,q),a[1]||(a[1]=e("button",null,"настройки",-1))]),e("div",H,[e("div",J,[e("h3",{class:l(t(o)?"input_light":"input_night")},r(c.value.length||0)+" постов ",3),e("h3",{class:l(t(o)?"input_light":"input_night")},r(f.value||0)+" лайков ",3),e("h3",{class:l(t(o)?"input_light":"input_night")},r(m.value||0)+" друзей ",3)]),e("h3",{class:l(t(o)?"input_light":"input_night")},r(p.value)+" человек добавили вас в друзья ",3)]),e("p",{class:l(["biographies",t(o)?"input_light":"input_night"])},r(i.value.biography?i.value.biography:"Нет биографии"),3)])]),e("div",K,[e("div",{class:l(["liked-text",t(o)?"borderLight":"borderNight"])},[e("h2",{class:l(t(o)?"input_light":"input_night")},"вы поставили лайк",2),y(t(j),{icon:"icon-park-twotone:like",width:"35",height:"35",class:l(t(o)?"input_light":"input_night"),style:{transition:".3s"}},null,8,["class"])],2),e("div",{class:l(["liked",t(o)?"themeBgwhite":"themeBgblack"])},[i.value.post_like==0?(n(),u("h2",{key:0,class:l(t(o)?"input_light":"input_night")}," Вы ещё не поставили лайк ни на один пост. ",2)):(n(!0),u(D,{key:1},F(i.value.post_like,k=>(n(),w(R,{key:k,likedId:k},null,8,["likedId"]))),128))],2)])],2))}},ee=A(O,[["__scopeId","data-v-35e1f7fc"]]);export{ee as default};
