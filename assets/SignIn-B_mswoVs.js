import{_ as L,r,c as S,w as x,o as P,a as y,e as a,k as $,u as c,C as q,m as w,v as I,n as d,t as k,A as z,i as U,f as g,p as H,g as V,h as _,L as J,I as A,j as E,q as R}from"./index-D5jOy2CM.js";const T={class:"form_image"},F={class:"form_input"},G={class:"form_input"},K={class:"form_input"},Q=["type"],W={class:"form_input"},X=["disabled"],Y={key:1,class:"loadBtn",type:"button"},Z={__name:"SignIn",setup(ee){const m=E("theme"),B=E("urlAdressAuth"),C=R(),n=r(""),l=r(""),o=r(""),h=r(!1),f=r([]),s=r({validate:!1,text:"Такой пользователя не существует"}),t=r({validate:!1,text:"Аккаунт с таким email не существует"}),p=r({validate:!1,text:"Пароль должен быть боле 8 символов"}),u=r(!0),N=S(()=>f.value.filter(i=>i.user_name===n.value)),D=S(()=>f.value.filter(i=>i.user_email===l.value)),M=async()=>{try{const i=await V.get(B);f.value=i.data}catch(i){console.log(i)}},O=()=>{h.value=!h.value},j=async()=>{if(u.value=!1,N.value.length===0){s.value.text="Такой пользователя не существует",s.value.validate=!0,u.value=!0;return}else s.value.validate=!1;if(D.value.length===0){t.value.text="Аккаунт с таким email не существует",t.value.validate=!0,u.value=!0;return}else t.value.validate=!1;if(n.value.length<3){s.value.text="Минимум 3 символа в имени !",s.value.validate=!0,u.value=!0;return}if(l.value.length<10){t.value.text="Не менее 11 символов в электронной почты",t.value.validate=!0,u.value=!0;return}else if(l.value.slice(-9)!=="gmail.com"){t.value.text="E-mail должен оканчиваться на gmail.com",t.value.validate=!0,u.value=!0;return}if(s.value.validate===!0||t.value.validate===!0){u.value=!0;return}if(o.value.length<8){p.value.text="Пароль должен быть боле 8 символов",p.value.validate=!0,u.value=!0;return}try{let e=(await V.get(B)).data.filter(b=>b.user_name===n.value&&b.user_email===l.value&&b.password===o.value);if(u.value=!0,e.length!==1){p.value.text="Неверное имя пользователя, email или пароль",p.value.validate=!0;return}const v={name:n.value,email:l.value,password:o.value};localStorage.setItem("UserId",e[0].user_id),localStorage.setItem("AuthData",JSON.stringify(v)),n.value="",l.value="",o.value="",C.push("/posts")}catch(i){console.log(i)}};return x(()=>{n.value.length&&(s.value.validate=!1)}),x(()=>{l.value.length&&(t.value.validate=!1)}),x(()=>{o.value.length&&(p.value.validate=!1)}),P(()=>{M()}),(i,e)=>(_(),y("div",null,[a("form",{onSubmit:e[4]||(e[4]=H(v=>j(),["prevent"])),id:"singUp_form"},[a("div",T,[$(q,{src:c(J)},null,8,["src"])]),a("div",F,[w(a("input",{type:"text",class:d(c(m)?"themeBgwhite input_light":"themeBgblack input_night"),placeholder:"Введите имя пользователя","onUpdate:modelValue":e[0]||(e[0]=v=>n.value=v)},null,2),[[I,n.value]]),a("label",{class:d({label_validate:s.value.validate})},k(s.value.text),3)]),a("div",G,[w(a("input",{type:"email",class:d(c(m)?"themeBgwhite input_light":"themeBgblack input_night"),placeholder:"Введите почту","onUpdate:modelValue":e[1]||(e[1]=v=>l.value=v)},null,2),[[I,l.value]]),a("label",{class:d({label_validate:t.value.validate})},k(t.value.text),3)]),a("div",K,[w(a("input",{type:h.value?"text":"password",class:d(c(m)?"themeBgwhite input_light":"themeBgblack input_night"),placeholder:"Введите пароль","onUpdate:modelValue":e[2]||(e[2]=v=>o.value=v)},null,10,Q),[[z,o.value]]),a("label",{class:d({label_validate:p.value.validate})},k(p.value.text),3),a("button",{type:"button",class:"input_button",onClick:e[3]||(e[3]=v=>O())},[h.value?(_(),U(c(A),{key:0,icon:"ci:show",width:"22",height:"22",class:d(c(m)?"input_icon_light":"input_icon_night")},null,8,["class"])):g("",!0),h.value?g("",!0):(_(),U(c(A),{key:1,icon:"ci:hide",width:"22",height:"22",class:d(c(m)?"input_icon_light":"input_icon_night")},null,8,["class"]))])]),a("div",W,[u.value?(_(),y("input",{key:0,type:"submit",value:"Войти",disabled:!n.value||!l.value||!o.value||s.value.validate||t.value.validate,class:d({"disabled-input":!n.value||!l.value||!o.value||s.value.validate||t.value.validate})},null,10,X)):g("",!0),u.value?g("",!0):(_(),y("button",Y,e[5]||(e[5]=[a("div",{class:"loader"},null,-1)])))])],32)]))}},te=L(Z,[["__scopeId","data-v-4e1e3a3d"]]);export{te as default};
