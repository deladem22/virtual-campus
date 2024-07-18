import{j as e}from"./jsx-runtime-CAOzMBF_.js";import{u}from"./index.esm-eIWaUr6p.js";import{B as x}from"./button-D3-ocrTF.js";import{I as n}from"./input-DaKQDKVv.js";import{c as h,L as o}from"./components-BUh_SX-e.js";import{a as b,b as g}from"./index-BqmKY8Xa.js";import"./clsx-B-dksMZM.js";const w=({data:t})=>[{title:`Login | ${t==null?void 0:t.school} ✽ gctuvc`}];function L(){const{handleSubmit:t,register:a,watch:l}=u(),s=h(),c=b(),i=g();async function d(r){c(JSON.stringify(r),{method:"POST",encType:"application/json"})}const m=l("email");return e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"min-h-[60vh]",children:e.jsx("div",{className:"lg:max-w-[24rem] mx-auto",children:e.jsxs("form",{className:"bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-800 p-4",onSubmit:t(d),children:[e.jsx("h1",{className:"font-bold text-2xl mb-2",children:"Login"}),e.jsxs("div",{className:"rounded-lg p-2 bg-blue-50 text-blue-500 my-2 dark:bg-blue-700 dark:bg-opacity-10 dark:text-blue-400",children:[e.jsx("i",{className:"i-lucide-hand inline-block"})," If this is your first time here, you might need to create an account."]}),s&&e.jsxs("div",{className:"p-2 rounded-lg bg-red-50 text-red-500 dark:bg-red-700 dark:bg-opacity-10 dark:text-red-400 mb-2",children:[s.type==="invalid-credentials"&&(s==null?void 0:s.message),s.type==="unverified-account"&&e.jsxs(e.Fragment,{children:["You need to verify your email to be able to login. Check your inbox."," ",e.jsx("a",{className:"underline font-medium dark:text-red-200",href:`/resend-verification?email=${m}`,children:"Resend email"})," ","if you can't find it."]})]}),e.jsxs("label",{children:["Email or username",e.jsx(n,{...a("email",{required:!0,setValueAs(r){return r.toLowerCase()}})}),e.jsx("small",{className:"text-secondary",children:"Your school email"})]}),e.jsxs("label",{className:"block mt-2",children:["Password",e.jsx(n,{type:"password",...a("password",{required:!0})}),e.jsxs("small",{className:"text-secondary",children:["Forgot your password?"," ",e.jsx(o,{className:"underline",to:"/forgot-password",children:"Click here to reset"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(x,{disabled:i.state==="submitting",children:i.state==="submitting"?"Please wait…":"Login"})}),e.jsxs("p",{className:"mt-4",children:[e.jsx(o,{className:"underline font-medium text-green-500",to:"/create-account",children:"Create an account"})," ","to start interacting on virtual-campus."]})]})})})})}export{L as default,w as meta};