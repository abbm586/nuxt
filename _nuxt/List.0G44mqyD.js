import{d as r,ab as l,H as u,M as n,a4 as p,k as m}from"./entry.IsicxVJC.js";import{u as f,f as _,_ as d}from"./MDCSlot.ABtKtv2E.js";const y=()=>({unwrap:f,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=t((o.default&&o.default())??[],["ul"]).map(a=>s(a,["li"]));return n("ul",i.map(a=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>a}))])))}}}),k=m(w,[["__scopeId","data-v-8736bef5"]]);export{k as default};
