import{j as e}from"./jsx-runtime-CAOzMBF_.js";import{c as i}from"./clsx-B-dksMZM.js";import{d as a}from"./dayjs.min-DReL-Uwu.js";import{A as o}from"./anchor-BX46IkJD.js";import{P as n}from"./post-time-BzanNHiO.js";import{U as c}from"./username-DR9y_VJH.js";import{t as d}from"./time-2AcYv75b.js";import{a as m,u as x,L as l}from"./components-BUh_SX-e.js";import"./index-BqmKY8Xa.js";const k=({data:s})=>[{title:`Events | ${s==null?void 0:s.school.shortName} ✽ gctu`},{name:"description",content:"All the events happening on (and off) campus. Find them here."}];function w(){const{events:s}=m(),{user:r}=x("root")||{};return e.jsx("div",{className:"container mx-auto min-h-[60vh]",children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:e.jsxs("div",{className:"col-span-1 lg:col-span-3",children:[e.jsx("h1",{className:"font-bold text-xl",children:"Events"}),e.jsxs("header",{className:"mb-2 flex justify-between",children:[e.jsx("div",{children:e.jsxs("div",{className:"bg-zinc-200 dark:bg-neutral-800 rounded-full px-2 py-0.5 inline font-medium text-sm",children:[s.length," events"]})}),e.jsx("div",{children:e.jsxs(o,{to:"/events/add",className:i({"!hidden":!r}),children:[e.jsx("div",{className:"i-lucide-plus opacity-60"})," Add event"]})})]}),!r&&e.jsxs("p",{className:"text-secondary mb-2",children:["You must be"," ",e.jsx(l,{className:"underline text-reset",to:"/login",children:"logged in"})," ","to add an event."]}),e.jsx("ul",{children:s.map(t=>e.jsx("li",{children:e.jsx(u,{event:t})},t.id))}),s.length===0&&e.jsx("div",{className:"text-center text-secondary mt-8",children:"No events at the moment. You can add an event if you spotted any so every can see."})]})})})}function u({event:s}){const r=a(s.date).startOf("day").add(s.startTime,"seconds").isBefore(a());return e.jsxs(l,{to:`/events/${s.id}`,className:i("flex gap-4 hover:bg-zinc-100 dark:hover:bg-neutral-800 dark:hover:bg-opacity-50 px-2 rounded-lg",{"opacity-60":r}),children:[e.jsxs("div",{className:"w-4 relative",children:[e.jsx("div",{className:"h-full bg-zinc-200 dark:bg-neutral-700 w-[2px] mx-auto"}),e.jsx("div",{className:"absolute top-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-neutral-700 size-4 rounded-full"})]}),e.jsxs("div",{className:"flex-1 mb-8",children:[e.jsxs("header",{className:"font-mono text-secondary text-sm",children:[a(s.date).format("ddd, DD MMM[.]")," ",d(s.startTime)," —"," ",s.endTime?d(s.endTime):"till you drop",e.jsx("br",{}),"@",s.venue]}),e.jsx("h2",{className:"font-bold mt-2",children:s.title}),e.jsx("p",{className:"text-secondary",children:s.shortDescription}),s.poster&&e.jsx("div",{className:"size-30 rounded-lg bg-zinc-200 dark:bg-neutral-800 md:hidden",children:e.jsx("img",{src:s.poster.url,alt:s.title,className:"object-cover w-full h-full rounded-lg"})}),e.jsx("p",{className:"mt-2 whitespace-pre-wrap",children:h(s.description,80)}),e.jsxs("div",{className:"text-xs font-mono mt-2 text-secondary",children:["Posted ",e.jsx(n,{time:s.createdAt})," by"," ",e.jsx(c,{user:s.user})]})]}),e.jsx("div",{className:"max-md:hidden",children:s.poster&&e.jsx("div",{className:"size-24 rounded-lg bg-zinc-200 dark:bg-neutral-800",children:e.jsx("img",{src:s.poster.url,alt:s.title,className:"object-cover w-full h-full rounded-lg"})})})]})}function h(s,r){return s.length>r?`${s.slice(0,r)}…`:s}export{w as default,k as meta};
