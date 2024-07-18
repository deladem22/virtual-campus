import{R as u,j as e}from"./jsx-runtime-CAOzMBF_.js";import{A as f}from"./avatar-CnHNwoiQ.js";import{V as b,a as j,C as p}from"./post-item-FZu80jFJ.js";import{T as d,e as g,a as N,M as v}from"./tag-select-pFlWs3Bt.js";import{c as x}from"./clsx-B-dksMZM.js";import{M as y}from"./modal-BvqMTZsz.js";import{p as k,P as w}from"./post-time-BzanNHiO.js";import{U as h}from"./username-DR9y_VJH.js";import{L as m}from"./components-BUh_SX-e.js";function z({media:s,open:t,onClose:l,post:r,setMedia:a}){var o;u.useEffect(()=>{if(!s)return;const n=document.querySelector(`#preview-media-${s.id}`);n==null||n.scrollIntoView()},[s]);const i=r.media.filter(n=>n.id!==(s==null?void 0:s.id));return e.jsx(y,{className:"w-screen md:w-[30rem] aspect-[2/3]",open:t,onClose:l,children:s&&e.jsxs("div",{className:"flex flex-col h-full fade-in",children:[e.jsxs("div",{className:"h-[76%] bg-zinc-100 dark:bg-neutral-800 border-b border-zinc-200 dark:border-neutral-700 relative flex items-center overflow-hidden",children:[s!=null&&s.contentType.startsWith("image/")?e.jsx("img",{className:"object-contain self-center",src:s.url,alt:s.filename},s.id):(o=s==null?void 0:s.contentType)!=null&&o.startsWith("video/")?e.jsx("video",{className:"w-full",playsInline:!0,src:s.url,controls:!0}):e.jsxs("div",{className:"w-full justify-center text-secondary flex items-center gap-2 font-medium",children:[e.jsx("div",{className:"i-lucide-tower-control"})," Cannot preview this file. Download instead."]}),e.jsx("button",{type:"button",className:"size-7 rounded-full !bg-zinc-200 !dark:bg-neutral-700 flex items-center justify-center text-secondary absolute right-2 top-2",onClick:()=>l==null?void 0:l(),children:e.jsx("div",{className:"i-lucide-x"})}),e.jsxs("div",{className:"dark:border-neutral-800 rounded-lg px-1 py-0.5 font-mono flex gap-1 items-center absolute top-2 left-2 bg-zinc-200 dark:bg-neutral-800 !bg-opacity-50",children:[e.jsx(d,{thumbnail:s==null?void 0:s.thumbnail,className:"size-5 rounded-sm dark:bg-transparent",contentType:s==null?void 0:s.contentType,name:s==null?void 0:s.filename}),g(s==null?void 0:s.filename)]})]}),e.jsxs("div",{className:"h-[24%]",children:[e.jsx("ul",{className:"overflow-x-auto flex gap-2 p-1",children:i.map(n=>{const c=r.media.length>1&&s===n;return e.jsx("li",{className:"shrink-0",id:`preview-media-${n.id}`,children:e.jsxs("button",{className:x("border dark:border-neutral-800 rounded-lg px-1 py-0.5 font-mono flex gap-1 items-center",{"text-secondary":!c,"bg-blue-600 text-white border-transparent":c}),type:"button",onClick:()=>a==null?void 0:a(n),children:[e.jsx(d,{thumbnail:n==null?void 0:n.thumbnail,className:x("size-5 rounded-sm dark:bg-transparent",{"!text-white !bg-blue-600":c}),contentType:n.contentType,name:n.filename}),n.filename]})},n.id)})}),e.jsxs("header",{className:"flex gap-2 p-2 items-start",children:[e.jsx("div",{className:"pt-1",children:e.jsx(f,{name:r.user.username,size:20})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium leading-tight",children:e.jsx(h,{user:r.user})}),e.jsxs("p",{className:"font-mono text-secondary text-sm",children:["posted ",k(r.createdAt)]}),!!i.length&&e.jsxs("p",{className:"text-sm text-secondary font-mono",children:[r.media.length," attachments"]})]})]}),e.jsxs("div",{className:"flex gap-2 ms-10",children:[e.jsxs("button",{className:"bg-zinc-100 dark:bg-neutral-800 rounded-lg inline-flex gap-2 items-center px-1 py-0.5 border border-zinc-200 dark:border-neutral-700 font-medium",type:"button",onClick:()=>navigator==null?void 0:navigator.share({url:s==null?void 0:s.url}),children:[e.jsx("div",{className:"i-lucide-share opacity-60"})," Share"]}),e.jsxs("a",{className:"bg-zinc-100 dark:bg-neutral-800 rounded-lg inline-flex gap-2 items-center px-1 py-0.5 border border-zinc-200 dark:border-neutral-700 font-medium",href:s==null?void 0:s.url,target:"_blank",rel:"noreferrer",children:[e.jsx("div",{className:"i-lucide-download opacity-60"})," Download file"]})]})]})]})})}function S({post:s}){const[t,l]=u.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"mb-2",children:e.jsx(m,{to:`/p/${s.user.username}`,children:e.jsx(f,{name:s.user.username})})}),e.jsx(b,{post:s})]}),e.jsxs("div",{className:"border-b dark:border-neutral-700 pb-2 flex-1 w-0",children:[e.jsxs("header",{className:"flex justify-between",children:[e.jsxs("span",{className:"font-mono text-secondary",children:[e.jsx(h,{user:s.user})," •"," ",e.jsx(w,{time:s.createdAt})]}),e.jsx("div",{children:e.jsx(j,{post:s})})]}),e.jsx(N,{className:"mb-4",tags:s.tags}),e.jsxs("div",{className:"-mt-2",children:[e.jsx(p,{content:s.content}),s.community&&e.jsx(m,{to:`/communities/${s.community.handle}`,children:e.jsxs("div",{className:"inline-flex gap-2 items-center font-medium text-sm bg-blue-50 dark:bg-blue-800 dark:bg-opacity-20 px-1 rounded-md text-blue-500",children:[e.jsx("div",{className:"inline-block i-lucide-creative-commons"}),s.community.name]})}),s.media.length>0&&e.jsx("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 flex-wrap mt-2",children:s.media.map(r=>e.jsx("div",{className:"col-span-1",children:e.jsx("button",{className:"block w-full",type:"button",onClick:()=>l(r),children:e.jsx(v,{media:r})})},r.id))})]}),e.jsxs("footer",{className:"mt-2 flex justify-between",children:[e.jsxs("span",{className:"inline-flex items-center gap-2 text-secondary",children:[e.jsx("div",{className:"i-lucide-message-circle inline-block"})," ",s.commentsCount||"Leave a comment"]}),e.jsxs("span",{className:"inline-flex items-center gap-2 text-secondary",children:[e.jsx("div",{className:"i-lucide-users-2 inline-block"})," ",s.people," ",s.people===1?"person":"people"]})]})]})]}),e.jsx(z,{post:s,media:t,open:!!t,onClose:()=>l(void 0),setMedia:l})]})}export{S as P};