import{_ as T,r as n,o as $,a as u,e as t,k as C,u as r,C as P,m as f,v as x,n as i,t as y,f as E,p as M,s as W,g as B,h as d,l as j,j as g,q as D}from"./index-BI-kc5eB.js";const R={class:"edUs-input"},S={key:1,class:"loader_text"},q={class:"edUs-input"},z={class:"edUs-textarea"},F={class:"edUs-input"},G={key:0,type:"button",class:"loadBtn"},H={key:1,type:"submit",value:"Сохранить"},J={__name:"EditUsers",setup(K){const k=g("adminUser"),c=g("theme"),_=g("urlAdressAuth"),w=g("user_Id"),I=W(),b=D(),h=n(!1),l=n([]),U=n([]),m=n(""),p=n(""),v=n(""),a=n({no:!1,text:!1,oneText:"Этот имя уже занять",twoText:"Этот имя свободно"}),V=async o=>{try{const e=await B.get(_),s=await B.get(`${_}/${o}`);k===!1&&s.data.user_id!==w&&b.push("/myProfile"),U.value=e.data,l.value=s.data,v.value=s.data.biography}catch(e){console.log(e)}},A=()=>{p.value.length>0?a.value.no=!0:a.value.no=!1;let o=U.value.filter(e=>e.user_name===p.value);a.value.text=o.length>0},N=async()=>{h.value=!0;try{(await B.put(`${_}/${l.value.id}`,{user_logo:m.value||l.value.user_logo,user_name:p.value||l.value.user_name,biography:v.value})).status==200&&(h.value=!1,b.go(-1))}catch(o){console.log(o),h.value=!1}};return $(()=>{V(I.params.id)}),(o,e)=>(d(),u("section",{class:i(["edit_user",r(c)?"themeBgwhite":"themeBgblack"])},[t("form",{onSubmit:e[3]||(e[3]=M(s=>N(),["prevent"])),class:"edUs"},[C(P,{src:m.value||l.value.user_logo||r(j),width:"220px",height:"220px",style:{overflow:"hidden","border-radius":"50%"},preview:""},null,8,["src"]),t("div",R,[f(t("input",{type:"text",class:i(r(c)?"themeBgWhite input_light":"themeBgBlack input_night"),placeholder:"Введите ссылку нового аватара","onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s)},null,2),[[x,m.value]])]),t("h2",null,[l.value.user_name?(d(),u("span",{key:0,class:i(r(c)?"input_light":"input_night")},y(l.value.user_name),3)):(d(),u("div",S))]),t("div",q,[f(t("input",{type:"text",onInput:A,class:i(r(c)?"themeBgWhite input_light":"themeBgBlack input_night"),placeholder:"Введите новое имя пользователя","onUpdate:modelValue":e[1]||(e[1]=s=>p.value=s)},null,34),[[x,p.value]]),a.value.no?(d(),u("label",{key:0,class:i(a.value.text?"label-red":"label-green")},y(a.value.text?a.value.oneText:a.value.twoText),3)):E("",!0)]),t("div",z,[f(t("textarea",{placeholder:"Добавить биографию",maxlength:"115",class:i(r(c)?"themeBgWhite input_light":"themeBgBlack input_night"),"onUpdate:modelValue":e[2]||(e[2]=s=>v.value=s)},null,2),[[x,v.value]]),t("b",null,y(v.value.length)+"/115",1)]),t("div",F,[h.value?(d(),u("button",G,e[4]||(e[4]=[t("div",{class:"loader"},null,-1)]))):(d(),u("input",H))])],32)],2))}},O=T(J,[["__scopeId","data-v-ccadd822"]]);export{O as default};