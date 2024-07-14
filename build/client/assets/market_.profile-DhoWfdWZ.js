import{j as s}from"./jsx-runtime-CAOzMBF_.js";import{u as h}from"./index.esm-eIWaUr6p.js";import{B as d}from"./button-D3-ocrTF.js";import{I as n}from"./input-DaKQDKVv.js";import{a as x,b as u}from"./components-B61dXm5I.js";import"./clsx-B-dksMZM.js";import"./index-B3TG-iMG.js";const w=({data:e})=>[{title:`Your Market Profile | ${e==null?void 0:e.school.shortName} ✽ gctuvc`},{name:"description",content:"Set up your market profile to be able to sell on gctuvc."}];function k(){const{sellerProfile:e}=x(),{handleSubmit:i,register:t,setValue:l,watch:r}=h({defaultValues:{phone:(e==null?void 0:e.phone)||"",whatsapp:(e==null?void 0:e.whatsapp)||"",instagram:(e==null?void 0:e.instagram)||"",snapchat:(e==null?void 0:e.snapchat)||"",businessName:(e==null?void 0:e.businessName)||""}}),c=u();function m(o){c.submit(JSON.stringify(o),{method:e?"PATCH":"POST",encType:"application/json"})}const a=r("phone"),p=r("whatsapp");return s.jsx("div",{className:"container mx-auto min-h-[60vh]",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-4",children:s.jsxs("div",{className:"col-span-1 lg:col-span-3",children:[s.jsx("h1",{className:"font-bold text-lg",children:"Market profile"}),s.jsx("p",{children:"Set up your market profile to be able to sell on gctuvc. These details allow customers to identify and reach you."}),s.jsxs("form",{className:"mt-2",onSubmit:i(m),children:[s.jsxs("label",{children:["Phone",s.jsx(n,{type:"tel",...t("phone",{required:!0,pattern:/^\d{10,}$/})})]}),s.jsx("div",{className:"text-sm text-secondary",children:"This number will be shown to customers for calls."}),s.jsxs("label",{className:"mt-2",children:["Whatsapp number ",s.jsx("span",{className:"text-secondary",children:"(optional)"}),s.jsx(n,{type:"tel",...t("whatsapp",{pattern:/^\d{10,}$/})})]}),s.jsxs("div",{className:"text-sm text-secondary",children:[s.jsxs("label",{className:"flex gap-2 items-center",children:[s.jsx("input",{type:"checkbox",className:"border rounded bg-zinc-200 dark:bg-neutral-700",checked:(a==null?void 0:a.length)>0&&a===p,onChange:o=>{o.target.checked&&l("whatsapp",a)}}),"Same as phone number"]}),s.jsx("div",{className:"text-sm",children:"A link to your Whatsapp DM will be shown on product details."})]}),s.jsxs("label",{className:"mt-2",children:["Instagram handle"," ",s.jsx("span",{className:"text-secondary",children:"(optional)"}),s.jsx(n,{type:"text",...t("instagram")})]}),s.jsxs("label",{className:"mt-2",children:["Snapchat handle ",s.jsx("span",{className:"text-secondary",children:"(optional)"}),s.jsx(n,{type:"text",...t("snapchat")})]}),s.jsxs("label",{className:"mt-2",children:["Business name ",s.jsx("span",{className:"text-secondary",children:"(optional)"}),s.jsx(n,{type:"text",...t("businessName")})]}),s.jsx("div",{className:"text-sm text-secondary",children:"This will be shown on product details."}),s.jsx("footer",{className:"mt-2",children:s.jsx(d,{disabled:c.state==="submitting",children:c.state==="submitting"?s.jsx(s.Fragment,{children:"Saving…"}):s.jsx(s.Fragment,{children:"Save profile"})})})]})]})})})}export{k as default,w as meta};
