import{j as s}from"./jsx-runtime-CAOzMBF_.js";import{u as o}from"./index.esm-eIWaUr6p.js";import{B as m}from"./button-D3-ocrTF.js";import{I as l}from"./input-DaKQDKVv.js";import{K as d}from"./knust-login-direction-Pq69LwRW.js";import{a as c,b as u}from"./components-B61dXm5I.js";import"./clsx-B-dksMZM.js";import"./index-B3TG-iMG.js";const v=()=>[{title:"Forgot Password ✽ gctuvc"}];function F(){const{school:t}=c(),{handleSubmit:r,register:a}=o(),e=u();async function i(n){e.submit(JSON.stringify(n),{encType:"application/json",method:"POST"})}return s.jsx("div",{className:"container mx-auto",children:s.jsx("div",{className:"min-h-[60vh]",children:s.jsx("div",{className:"lg:max-w-[24rem] mx-auto",children:s.jsxs("form",{className:"bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",onSubmit:r(i),children:[s.jsxs("h1",{className:"font-bold text-2xl mb-2",children:["Forgot ",s.jsx("br",{}),"Password"]}),e.data?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-2",children:"Reset link has been sent to your email."}),t.id==="gctu"&&s.jsx(d,{})]}):s.jsxs(s.Fragment,{children:[s.jsxs("label",{className:"block mt-2",children:["Email",s.jsx(l,{...a("email",{required:!0})}),s.jsx("small",{className:"text-secondary",children:"A reset link will be sent to this address if it's valid."})]}),s.jsx("div",{className:"mt-2",children:s.jsx(m,{disabled:e.state==="submitting",children:e.state==="submitting"?"Sending...":"Send"})})]})]})})})})}export{F as default,v as meta};