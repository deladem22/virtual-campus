import{R as o,j as e}from"./jsx-runtime-CAOzMBF_.js";import{b as p}from"./components-BUh_SX-e.js";import{c as j}from"./clsx-B-dksMZM.js";import{u as g,F as v}from"./index.esm-eIWaUr6p.js";import{I as y}from"./input-DaKQDKVv.js";import{M as N}from"./modal-BvqMTZsz.js";function E(){const l=o.useRef(),t=p(),d=o.useCallback((c,i)=>new Promise((r,a)=>{l.current=[r,a],t.submit(c,i)}),[t]);return o.useEffect(()=>{if(!l.current)return;const[c]=l.current;t.data&&c(t.data)},[t.data]),{submit:d}}function L({children:l,label:t,newForm:d,onAdd:c,onSelect:i,onToggle:s,open:r,options:a}){const[n,u]=o.useState("select");function m(){u("add")}const x=o.useCallback(()=>s(!1),[s]);function f(){s(!1)}async function h(b){await c(b),u("select")}return o.useEffect(()=>{r||u("select")},[r]),e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"bg-zinc-200 dark:bg-neutral-800 px-2 py-1 rounded-lg font-medium flex-1 text-start flex items-center w-full",type:"button",onClick:()=>s(!0),children:[e.jsx("span",{className:"flex-1 line-clamp-1",children:l}),e.jsx("div",{className:"i-lucide-mouse-pointer-2 text-secondary"})]}),e.jsx(N,{onClose:x,open:r,className:"w-full max-w-[24rem]",children:e.jsx("div",{className:"w-full rounded-lg bg-zinc-100 dark:bg-neutral-900 dark:border border-neutral-800 h-[24rem] flex flex-col",children:n==="select"?e.jsx(w,{onShowAdd:m,onHide:f,onSelect:i,options:a,label:t}):e.jsx(k,{form:d,label:t,onAdd:h,onCancel:()=>u("select")})})})]})}function w({label:l,onHide:t,onSelect:d,onShowAdd:c,options:i}){const[s,r]=o.useState(""),a=o.useMemo(()=>i.filter(n=>n.label.toLowerCase().includes(s.toLowerCase())),[i,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"p-2",children:[e.jsxs("div",{className:"text-sm text-secondary flex gap-2 items-center mb-2 font-medium",children:[e.jsx("div",{className:"i-lucide-scan-search"})," Select ",l]}),e.jsx(y,{type:"text",placeholder:"Start typing…",value:s,onChange:n=>r(n.target.value)})]}),e.jsxs("ul",{className:"flex-1 px-2 overflow-y-auto",children:[a.length===0&&e.jsx("li",{className:"text-secondary",children:a.length===0?e.jsxs(e.Fragment,{children:["No option with ",e.jsx("b",{children:s})," found"]}):e.jsx(e.Fragment,{children:"No options available. Try adding new."})}),a.map(n=>e.jsx("li",{className:"px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg focus-within:bg-zinc-200 dark:focus-within:bg-neutral-800",onClick:()=>d(n.value),onKeyDown:u=>["Enter","Space"].includes(u.key)&&d(n.value),children:e.jsx("button",{className:"block w-full text-start",type:"button",children:n.label})},n.value))]}),e.jsxs("footer",{className:"border-t border-zinc-200 dark:border-neutral-800 flex justify-between p-2",children:[e.jsxs("button",{className:"inline-flex gap-2 items-center !bg-zinc-200 !dark:bg-neutral-800 px-2 rounded-md font-medium",onClick:c,type:"button",children:[e.jsx("div",{className:"i-lucide-list-plus text-secondary"})," Add new"]}),e.jsx("button",{className:"px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg font-medium",onClick:t,type:"button",children:"Cancel"})]})]})}function k({form:l,label:t,onAdd:d,onCancel:c}){const i=g(),{handleSubmit:s}=i,[r,a]=o.useState("idle");async function n(u){a("loading");try{await d(u),a("success")}catch{a("error")}}return e.jsx(v,{...i,children:e.jsxs("form",{className:"flex flex-col h-full",onSubmit:s(n),children:[e.jsx("header",{className:"p-2",children:e.jsxs("div",{className:"text-sm text-secondary flex gap-2 items-center font-medium",children:[e.jsx("div",{className:"i-lucide-list-plus"})," Add new ",t]})}),e.jsx("div",{className:"flex-1",children:l}),e.jsxs("footer",{className:"border-t border-zinc-200 dark:border-neutral-800 flex justify-between p-2",children:[e.jsx("button",{className:"px-2 py-1 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded-lg font-medium",onClick:c,type:"button",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"inline-flex gap-2 items-center !bg-zinc-200 !dark:bg-neutral-800 px-2 rounded-md font-medium",children:[e.jsx("div",{className:j("text-secondary",{"i-lucide-corner-down-left":r!=="loading","i-svg-spinners-dot-revolve":r==="loading"})})," ",r==="loading"?"Saving…":"Save"]})]})]})})}export{L,E as u};