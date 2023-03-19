import{O as q,P as x,D as w,C as U,F as N}from"./element-plus.078d4249.js";import{r as f,f as Y}from"./index.1eff73d9.js";import{P as I}from"./index.0b0483de.js";import{d as T,s as g,a1 as P,e as G,o as F,c as C,X as t,P as s,u as a,a as n,U as E,V as A,O as L,T as b}from"./@vue.a137a740.js";function tu(){return f.get({url:"/setting/storage/list"})}function X(d){return f.post({url:"/setting/storage/edit",params:d})}function j(d){return f.get({url:"/setting/storage/detail",params:d})}const z={class:"edit-popup"},H={class:"form-tips"},J={key:0},M={class:"flex-1"},Q={class:"flex-1"},W=n("div",{class:"form-tips"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),au=T({__name:"edit",emits:["success"],setup(d,{expose:S,emit:D}){const c=g(),p=g(),e=P({alias:"",bucket:"",accessKey:"",secretKey:"",domain:"",region:"",status:0}),y=[{name:"\u672C\u5730\u5B58\u50A8",type:"local",tips:"\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570"},{name:"\u4E03\u725B\u4E91\u5B58\u50A8",type:"qiniu",tips:"\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91"},{name:"\u963F\u91CC\u4E91OSS",type:"aliyun",tips:"\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS"},{name:"\u817E\u8BAF\u4E91OSS",type:"qcloud",tips:"\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS"}],V={bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],accessKey:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secretKey:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]},_=G(()=>y.find(o=>o.type==e.alias)),K=async()=>{var o,u;await((o=c.value)==null?void 0:o.validate()),await X(e),Y.msgSuccess("\u64CD\u4F5C\u6210\u529F"),(u=p.value)==null||u.close(),D("success")},k=async()=>{const o=await j({alias:e.alias});for(const u in o)e[u]=o[u]},v=o=>{var u;e.alias=o,(u=p.value)==null||u.open(),k()},R=()=>{var o;(o=c.value)==null||o.resetFields()};return S({open:v}),(o,u)=>{const m=q,r=w,i=U,O=x,h=N;return F(),C("div",z,[t(I,{ref_key:"popupRef",ref:p,title:"\u8BBE\u7F6E\u5B58\u50A8",async:!0,width:"550px",onConfirm:K,onClose:R},{default:s(()=>[t(h,{ref_key:"formRef",ref:c,model:a(e),"label-width":"120px",rules:V},{default:s(()=>[t(r,{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"alias"},{default:s(()=>{var l;return[n("div",null,[t(m,{"model-value":""},{default:s(()=>{var B;return[E(A((B=a(_))==null?void 0:B.name),1)]}),_:1}),n("div",H,A((l=a(_))==null?void 0:l.tips),1)])]}),_:1}),a(e).alias!=="local"?(F(),C("div",J,[t(r,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",prop:"bucket"},{default:s(()=>[n("div",M,[t(i,{modelValue:a(e).bucket,"onUpdate:modelValue":u[0]||(u[0]=l=>a(e).bucket=l),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",clearable:""},null,8,["modelValue"])])]),_:1}),t(r,{label:"ACCESS_KEY",prop:"accessKey"},{default:s(()=>[t(i,{modelValue:a(e).accessKey,"onUpdate:modelValue":u[1]||(u[1]=l=>a(e).accessKey=l),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY(AK)",clearable:""},null,8,["modelValue"])]),_:1}),t(r,{label:"SECRET_KEY",prop:"secretKey"},{default:s(()=>[t(i,{modelValue:a(e).secretKey,"onUpdate:modelValue":u[2]||(u[2]=l=>a(e).secretKey=l),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY(SK)",clearable:""},null,8,["modelValue"])]),_:1}),t(r,{label:"\u7A7A\u95F4\u57DF\u540D",prop:"domain"},{default:s(()=>[n("div",Q,[n("div",null,[t(i,{modelValue:a(e).domain,"onUpdate:modelValue":u[3]||(u[3]=l=>a(e).domain=l),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D(Domain)",clearable:""},null,8,["modelValue"])]),W])]),_:1}),a(e).alias=="qcloud"?(F(),L(r,{key:0,label:"REGION",prop:"region"},{default:s(()=>[t(i,{modelValue:a(e).region,"onUpdate:modelValue":u[4]||(u[4]=l=>a(e).region=l),placeholder:"\u8BF7\u8F93\u5165region",clearable:""},null,8,["modelValue"])]),_:1})):b("",!0)])):b("",!0),t(r,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[t(O,{modelValue:a(e).status,"onUpdate:modelValue":u[5]||(u[5]=l=>a(e).status=l)},{default:s(()=>[t(m,{label:0},{default:s(()=>[E("\u5173\u95ED")]),_:1}),t(m,{label:1},{default:s(()=>[E("\u5F00\u542F")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{au as _,tu as s};
