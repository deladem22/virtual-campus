import{b as Gr,c as Ve,R as z,j as re}from"./jsx-runtime-CAOzMBF_.js";import{d as je,c as kr}from"./tag-select-pFlWs3Bt.js";import{c as zr}from"./clsx-B-dksMZM.js";import{c as Hr,e as Kr}from"./index-BqmKY8Xa.js";var qr=Error,Qr=EvalError,Vr=RangeError,jr=ReferenceError,Sr=SyntaxError,ie=TypeError,Jr=URIError,Yr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(e,t);if(i.value!==o||i.enumerable!==!0)return!1}return!0},Je=typeof Symbol<"u"&&Symbol,Xr=Yr,Zr=function(){return typeof Je!="function"||typeof Symbol!="function"||typeof Je("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Xr()},we={__proto__:null,foo:{}},et=Object,rt=function(){return{__proto__:we}.foo===we.foo&&!(we instanceof et)},tt="Function.prototype.bind called on incompatible ",nt=Object.prototype.toString,at=Math.max,ot="[object Function]",Ye=function(e,t){for(var n=[],o=0;o<e.length;o+=1)n[o]=e[o];for(var a=0;a<t.length;a+=1)n[a+e.length]=t[a];return n},it=function(e,t){for(var n=[],o=t,a=0;o<e.length;o+=1,a+=1)n[a]=e[o];return n},lt=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t},ft=function(e){var t=this;if(typeof t!="function"||nt.apply(t)!==ot)throw new TypeError(tt+t);for(var n=it(arguments,1),o,a=function(){if(this instanceof o){var c=t.apply(this,Ye(n,arguments));return Object(c)===c?c:this}return t.apply(e,Ye(n,arguments))},i=at(0,t.length-n.length),f=[],l=0;l<i;l++)f[l]="$"+l;if(o=Function("binder","return function ("+lt(f,",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var p=function(){};p.prototype=t.prototype,o.prototype=new p,p.prototype=null}return o},ut=ft,Le=Function.prototype.bind||ut,ct=Function.prototype.call,pt=Object.prototype.hasOwnProperty,yt=Le,st=yt.call(ct,pt),s,vt=qr,dt=Qr,mt=Vr,gt=jr,V=Sr,Q=ie,ht=Jr,wr=Function,Ae=function(r){try{return wr('"use strict"; return ('+r+").constructor;")()}catch{}},W=Object.getOwnPropertyDescriptor;if(W)try{W({},"")}catch{W=null}var Ee=function(){throw new Q},bt=W?function(){try{return arguments.callee,Ee}catch{try{return W(arguments,"callee").get}catch{return Ee}}}():Ee,H=Zr(),St=rt(),b=Object.getPrototypeOf||(St?function(r){return r.__proto__}:null),q={},wt=typeof Uint8Array>"u"||!b?s:b(Uint8Array),L={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?s:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?s:ArrayBuffer,"%ArrayIteratorPrototype%":H&&b?b([][Symbol.iterator]()):s,"%AsyncFromSyncIteratorPrototype%":s,"%AsyncFunction%":q,"%AsyncGenerator%":q,"%AsyncGeneratorFunction%":q,"%AsyncIteratorPrototype%":q,"%Atomics%":typeof Atomics>"u"?s:Atomics,"%BigInt%":typeof BigInt>"u"?s:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?s:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?s:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?s:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":vt,"%eval%":eval,"%EvalError%":dt,"%Float32Array%":typeof Float32Array>"u"?s:Float32Array,"%Float64Array%":typeof Float64Array>"u"?s:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?s:FinalizationRegistry,"%Function%":wr,"%GeneratorFunction%":q,"%Int8Array%":typeof Int8Array>"u"?s:Int8Array,"%Int16Array%":typeof Int16Array>"u"?s:Int16Array,"%Int32Array%":typeof Int32Array>"u"?s:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":H&&b?b(b([][Symbol.iterator]())):s,"%JSON%":typeof JSON=="object"?JSON:s,"%Map%":typeof Map>"u"?s:Map,"%MapIteratorPrototype%":typeof Map>"u"||!H||!b?s:b(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?s:Promise,"%Proxy%":typeof Proxy>"u"?s:Proxy,"%RangeError%":mt,"%ReferenceError%":gt,"%Reflect%":typeof Reflect>"u"?s:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?s:Set,"%SetIteratorPrototype%":typeof Set>"u"||!H||!b?s:b(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?s:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":H&&b?b(""[Symbol.iterator]()):s,"%Symbol%":H?Symbol:s,"%SyntaxError%":V,"%ThrowTypeError%":bt,"%TypedArray%":wt,"%TypeError%":Q,"%Uint8Array%":typeof Uint8Array>"u"?s:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?s:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?s:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?s:Uint32Array,"%URIError%":ht,"%WeakMap%":typeof WeakMap>"u"?s:WeakMap,"%WeakRef%":typeof WeakRef>"u"?s:WeakRef,"%WeakSet%":typeof WeakSet>"u"?s:WeakSet};if(b)try{null.error}catch(r){var At=b(b(r));L["%Error.prototype%"]=At}var Et=function r(e){var t;if(e==="%AsyncFunction%")t=Ae("async function () {}");else if(e==="%GeneratorFunction%")t=Ae("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=Ae("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&b&&(t=b(o.prototype))}return L[e]=t,t},Xe={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},le=Le,de=st,Ot=le.call(Function.call,Array.prototype.concat),Pt=le.call(Function.apply,Array.prototype.splice),Ze=le.call(Function.call,String.prototype.replace),me=le.call(Function.call,String.prototype.slice),$t=le.call(Function.call,RegExp.prototype.exec),It=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,xt=/\\(\\)?/g,Ft=function(e){var t=me(e,0,1),n=me(e,-1);if(t==="%"&&n!=="%")throw new V("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new V("invalid intrinsic syntax, expected opening `%`");var o=[];return Ze(e,It,function(a,i,f,l){o[o.length]=f?Ze(l,xt,"$1"):i||a}),o},Dt=function(e,t){var n=e,o;if(de(Xe,n)&&(o=Xe[n],n="%"+o[0]+"%"),de(L,n)){var a=L[n];if(a===q&&(a=Et(n)),typeof a>"u"&&!t)throw new Q("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new V("intrinsic "+e+" does not exist!")},Y=function(e,t){if(typeof e!="string"||e.length===0)throw new Q("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new Q('"allowMissing" argument must be a boolean');if($t(/^%?[^%]*%?$/,e)===null)throw new V("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Ft(e),o=n.length>0?n[0]:"",a=Dt("%"+o+"%",t),i=a.name,f=a.value,l=!1,p=a.alias;p&&(o=p[0],Pt(n,Ot([0,1],p)));for(var c=1,y=!0;c<n.length;c+=1){var u=n[c],d=me(u,0,1),m=me(u,-1);if((d==='"'||d==="'"||d==="`"||m==='"'||m==="'"||m==="`")&&d!==m)throw new V("property names with quotes must have matching quotes");if((u==="constructor"||!y)&&(l=!0),o+="."+u,i="%"+o+"%",de(L,i))f=L[i];else if(f!=null){if(!(u in f)){if(!t)throw new Q("base intrinsic for "+e+" exists, but the property is not available.");return}if(W&&c+1>=n.length){var S=W(f,u);y=!!S,y&&"get"in S&&!("originalValue"in S.get)?f=S.get:f=f[u]}else y=de(f,u),f=f[u];y&&!l&&(L[i]=f)}}return f},Ar={exports:{}},Oe,er;function Ge(){if(er)return Oe;er=1;var r=Y,e=r("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch{e=!1}return Oe=e,Oe}var Rt=Y,se=Rt("%Object.getOwnPropertyDescriptor%",!0);if(se)try{se([],"length")}catch{se=null}var Er=se,rr=Ge(),Tt=Sr,K=ie,tr=Er,Nt=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new K("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new K("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new K("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new K("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new K("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new K("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,a=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,f=arguments.length>6?arguments[6]:!1,l=!!tr&&tr(e,t);if(rr)rr(e,t,{configurable:i===null&&l?l.configurable:!i,enumerable:o===null&&l?l.enumerable:!o,value:n,writable:a===null&&l?l.writable:!a});else if(f||!o&&!a&&!i)e[t]=n;else throw new Tt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Ne=Ge(),Or=function(){return!!Ne};Or.hasArrayLengthDefineBug=function(){if(!Ne)return null;try{return Ne([],"length",{value:1}).length!==1}catch{return!0}};var _t=Or,Mt=Y,nr=Nt,Bt=_t(),ar=Er,or=ie,Ct=Mt("%Math.floor%"),Ut=function(e,t){if(typeof e!="function")throw new or("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Ct(t)!==t)throw new or("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],o=!0,a=!0;if("length"in e&&ar){var i=ar(e,"length");i&&!i.configurable&&(o=!1),i&&!i.writable&&(a=!1)}return(o||a||!n)&&(Bt?nr(e,"length",t,!0,!0):nr(e,"length",t)),e};(function(r){var e=Le,t=Y,n=Ut,o=ie,a=t("%Function.prototype.apply%"),i=t("%Function.prototype.call%"),f=t("%Reflect.apply%",!0)||e.call(i,a),l=Ge(),p=t("%Math.max%");r.exports=function(u){if(typeof u!="function")throw new o("a function is required");var d=f(e,i,arguments);return n(d,1+p(0,u.length-(arguments.length-1)),!0)};var c=function(){return f(e,a,arguments)};l?l(r.exports,"apply",{value:c}):r.exports.apply=c})(Ar);var Wt=Ar.exports,Pr=Y,$r=Wt,Lt=$r(Pr("String.prototype.indexOf")),Gt=function(e,t){var n=Pr(e,!!t);return typeof n=="function"&&Lt(e,".prototype.")>-1?$r(n):n};const kt={},zt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Ht=Gr(zt);var ke=typeof Map=="function"&&Map.prototype,Pe=Object.getOwnPropertyDescriptor&&ke?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ge=ke&&Pe&&typeof Pe.get=="function"?Pe.get:null,ir=ke&&Map.prototype.forEach,ze=typeof Set=="function"&&Set.prototype,$e=Object.getOwnPropertyDescriptor&&ze?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,he=ze&&$e&&typeof $e.get=="function"?$e.get:null,lr=ze&&Set.prototype.forEach,Kt=typeof WeakMap=="function"&&WeakMap.prototype,ne=Kt?WeakMap.prototype.has:null,qt=typeof WeakSet=="function"&&WeakSet.prototype,ae=qt?WeakSet.prototype.has:null,Qt=typeof WeakRef=="function"&&WeakRef.prototype,fr=Qt?WeakRef.prototype.deref:null,Vt=Boolean.prototype.valueOf,jt=Object.prototype.toString,Jt=Function.prototype.toString,Yt=String.prototype.match,He=String.prototype.slice,_=String.prototype.replace,Xt=String.prototype.toUpperCase,ur=String.prototype.toLowerCase,Ir=RegExp.prototype.test,cr=Array.prototype.concat,$=Array.prototype.join,Zt=Array.prototype.slice,pr=Math.floor,_e=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Ie=Object.getOwnPropertySymbols,Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,j=typeof Symbol=="function"&&typeof Symbol.iterator=="object",w=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===j||!0)?Symbol.toStringTag:null,xr=Object.prototype.propertyIsEnumerable,yr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function sr(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Ir.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-pr(-r):pr(r);if(n!==r){var o=String(n),a=He.call(e,o.length+1);return _.call(o,t,"$&_")+"."+_.call(_.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(e,t,"$&_")}var Be=Ht,vr=Be.custom,dr=Dr(vr)?vr:null,en=function r(e,t,n,o){var a=t||{};if(N(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(N(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=N(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(N(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(N(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var f=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Tr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return f?sr(e,l):l}if(typeof e=="bigint"){var p=String(e)+"n";return f?sr(e,p):p}var c=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=c&&c>0&&typeof e=="object")return Ce(e)?"[Array]":"[Object]";var y=bn(a,n);if(typeof o>"u")o=[];else if(Rr(o,e)>=0)return"[Circular]";function u(E,R,T){if(R&&(o=Zt.call(o),o.push(R)),T){var ee={depth:a.depth};return N(a,"quoteStyle")&&(ee.quoteStyle=a.quoteStyle),r(E,ee,n+1,o)}return r(E,a,n+1,o)}if(typeof e=="function"&&!mr(e)){var d=cn(e),m=ce(e,u);return"[Function"+(d?": "+d:" (anonymous)")+"]"+(m.length>0?" { "+$.call(m,", ")+" }":"")}if(Dr(e)){var S=j?_.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Me.call(e);return typeof e=="object"&&!j?te(S):S}if(mn(e)){for(var A="<"+ur.call(String(e.nodeName)),I=e.attributes||[],x=0;x<I.length;x++)A+=" "+I[x].name+"="+Fr(rn(I[x].value),"double",a);return A+=">",e.childNodes&&e.childNodes.length&&(A+="..."),A+="</"+ur.call(String(e.nodeName))+">",A}if(Ce(e)){if(e.length===0)return"[]";var v=ce(e,u);return y&&!hn(v)?"["+Ue(v,y)+"]":"[ "+$.call(v,", ")+" ]"}if(nn(e)){var F=ce(e,u);return!("cause"in Error.prototype)&&"cause"in e&&!xr.call(e,"cause")?"{ ["+String(e)+"] "+$.call(cr.call("[cause]: "+u(e.cause),F),", ")+" }":F.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+$.call(F,", ")+" }"}if(typeof e=="object"&&i){if(dr&&typeof e[dr]=="function"&&Be)return Be(e,{depth:c-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(pn(e)){var B=[];return ir&&ir.call(e,function(E,R){B.push(u(R,e,!0)+" => "+u(E,e))}),gr("Map",ge.call(e),B,y)}if(vn(e)){var Z=[];return lr&&lr.call(e,function(E){Z.push(u(E,e))}),gr("Set",he.call(e),Z,y)}if(yn(e))return xe("WeakMap");if(dn(e))return xe("WeakSet");if(sn(e))return xe("WeakRef");if(on(e))return te(u(Number(e)));if(fn(e))return te(u(_e.call(e)));if(ln(e))return te(Vt.call(e));if(an(e))return te(u(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof Ve<"u"&&e===Ve)return"{ [object globalThis] }";if(!tn(e)&&!mr(e)){var G=ce(e,u),fe=yr?yr(e)===Object.prototype:e instanceof Object||e.constructor===Object,C=e instanceof Object?"":"null prototype",D=!fe&&w&&Object(e)===e&&w in e?He.call(M(e),8,-1):C?"Object":"",ue=fe||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",k=ue+(D||C?"["+$.call(cr.call([],D||[],C||[]),": ")+"] ":"");return G.length===0?k+"{}":y?k+"{"+Ue(G,y)+"}":k+"{ "+$.call(G,", ")+" }"}return String(e)};function Fr(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function rn(r){return _.call(String(r),/"/g,"&quot;")}function Ce(r){return M(r)==="[object Array]"&&(!w||!(typeof r=="object"&&w in r))}function tn(r){return M(r)==="[object Date]"&&(!w||!(typeof r=="object"&&w in r))}function mr(r){return M(r)==="[object RegExp]"&&(!w||!(typeof r=="object"&&w in r))}function nn(r){return M(r)==="[object Error]"&&(!w||!(typeof r=="object"&&w in r))}function an(r){return M(r)==="[object String]"&&(!w||!(typeof r=="object"&&w in r))}function on(r){return M(r)==="[object Number]"&&(!w||!(typeof r=="object"&&w in r))}function ln(r){return M(r)==="[object Boolean]"&&(!w||!(typeof r=="object"&&w in r))}function Dr(r){if(j)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Me)return!1;try{return Me.call(r),!0}catch{}return!1}function fn(r){if(!r||typeof r!="object"||!_e)return!1;try{return _e.call(r),!0}catch{}return!1}var un=Object.prototype.hasOwnProperty||function(r){return r in this};function N(r,e){return un.call(r,e)}function M(r){return jt.call(r)}function cn(r){if(r.name)return r.name;var e=Yt.call(Jt.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function Rr(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function pn(r){if(!ge||!r||typeof r!="object")return!1;try{ge.call(r);try{he.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function yn(r){if(!ne||!r||typeof r!="object")return!1;try{ne.call(r,ne);try{ae.call(r,ae)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function sn(r){if(!fr||!r||typeof r!="object")return!1;try{return fr.call(r),!0}catch{}return!1}function vn(r){if(!he||!r||typeof r!="object")return!1;try{he.call(r);try{ge.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function dn(r){if(!ae||!r||typeof r!="object")return!1;try{ae.call(r,ae);try{ne.call(r,ne)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function mn(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Tr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return Tr(He.call(r,0,e.maxStringLength),e)+n}var o=_.call(_.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,gn);return Fr(o,"single",e)}function gn(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+Xt.call(e.toString(16))}function te(r){return"Object("+r+")"}function xe(r){return r+" { ? }"}function gr(r,e,t,n){var o=n?Ue(t,n):$.call(t,", ");return r+" ("+e+") {"+o+"}"}function hn(r){for(var e=0;e<r.length;e++)if(Rr(r[e],`
`)>=0)return!1;return!0}function bn(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=$.call(Array(r.indent+1)," ");else return null;return{base:t,prev:$.call(Array(e+1),t)}}function Ue(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+$.call(r,","+t)+`
`+e.prev}function ce(r,e){var t=Ce(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=N(r,o)?e(r[o],r):""}var a=typeof Ie=="function"?Ie(r):[],i;if(j){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=a[f]}for(var l in r)N(r,l)&&(t&&String(Number(l))===l&&l<r.length||j&&i["$"+l]instanceof Symbol||(Ir.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r))));if(typeof Ie=="function")for(var p=0;p<a.length;p++)xr.call(r,a[p])&&n.push("["+e(a[p])+"]: "+e(r[a[p]],r));return n}var Nr=Y,X=Gt,Sn=en,wn=ie,pe=Nr("%WeakMap%",!0),ye=Nr("%Map%",!0),An=X("WeakMap.prototype.get",!0),En=X("WeakMap.prototype.set",!0),On=X("WeakMap.prototype.has",!0),Pn=X("Map.prototype.get",!0),$n=X("Map.prototype.set",!0),In=X("Map.prototype.has",!0),Ke=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},xn=function(r,e){var t=Ke(r,e);return t&&t.value},Fn=function(r,e,t){var n=Ke(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Dn=function(r,e){return!!Ke(r,e)},Rn=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new wn("Side channel does not contain "+Sn(a))},get:function(a){if(pe&&a&&(typeof a=="object"||typeof a=="function")){if(e)return An(e,a)}else if(ye){if(t)return Pn(t,a)}else if(n)return xn(n,a)},has:function(a){if(pe&&a&&(typeof a=="object"||typeof a=="function")){if(e)return On(e,a)}else if(ye){if(t)return In(t,a)}else if(n)return Dn(n,a);return!1},set:function(a,i){pe&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new pe),En(e,a,i)):ye?(t||(t=new ye),$n(t,a,i)):(n||(n={key:{},next:null}),Fn(n,a,i))}};return o},Tn=String.prototype.replace,Nn=/%20/g,Fe={RFC1738:"RFC1738",RFC3986:"RFC3986"},qe={default:Fe.RFC3986,formatters:{RFC1738:function(r){return Tn.call(r,Nn,"+")},RFC3986:function(r){return String(r)}},RFC1738:Fe.RFC1738,RFC3986:Fe.RFC3986},_n=qe,De=Object.prototype.hasOwnProperty,U=Array.isArray,O=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Mn=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(U(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]<"u"&&o.push(n[a]);t.obj[t.prop]=o}}},_r=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},Bn=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(U(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!De.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return U(e)&&!U(t)&&(o=_r(e,n)),U(e)&&U(t)?(t.forEach(function(a,i){if(De.call(e,i)){var f=e[i];f&&typeof f=="object"&&a&&typeof a=="object"?e[i]=r(f,a,n):e.push(a)}else e[i]=a}),e):Object.keys(t).reduce(function(a,i){var f=t[i];return De.call(a,i)?a[i]=r(a[i],f,n):a[i]=f,a},o)},Cn=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},Un=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Re=1024,Wn=function(e,t,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(d){return"%26%23"+parseInt(d.slice(2),16)+"%3B"});for(var f="",l=0;l<i.length;l+=Re){for(var p=i.length>=Re?i.slice(l,l+Re):i,c=[],y=0;y<p.length;++y){var u=p.charCodeAt(y);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===_n.RFC1738&&(u===40||u===41)){c[c.length]=p.charAt(y);continue}if(u<128){c[c.length]=O[u];continue}if(u<2048){c[c.length]=O[192|u>>6]+O[128|u&63];continue}if(u<55296||u>=57344){c[c.length]=O[224|u>>12]+O[128|u>>6&63]+O[128|u&63];continue}y+=1,u=65536+((u&1023)<<10|p.charCodeAt(y)&1023),c[c.length]=O[240|u>>18]+O[128|u>>12&63]+O[128|u>>6&63]+O[128|u&63]}f+=c.join("")}return f},Ln=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],f=Object.keys(i),l=0;l<f.length;++l){var p=f[l],c=i[p];typeof c=="object"&&c!==null&&n.indexOf(c)===-1&&(t.push({obj:i,prop:p}),n.push(c))}return Mn(t),e},Gn=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},kn=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},zn=function(e,t){return[].concat(e,t)},Hn=function(e,t){if(U(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},Mr={arrayToObject:_r,assign:Cn,combine:zn,compact:Ln,decode:Un,encode:Wn,isBuffer:kn,isRegExp:Gn,maybeMap:Hn,merge:Bn},Br=Rn,ve=Mr,oe=qe,Kn=Object.prototype.hasOwnProperty,Cr={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},P=Array.isArray,qn=Array.prototype.push,Ur=function(r,e){qn.apply(r,P(e)?e:[e])},Qn=Date.prototype.toISOString,hr=oe.default,h={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:ve.encode,encodeValuesOnly:!1,format:hr,formatter:oe.formatters[hr],indices:!1,serializeDate:function(e){return Qn.call(e)},skipNulls:!1,strictNullHandling:!1},Vn=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Te={},jn=function r(e,t,n,o,a,i,f,l,p,c,y,u,d,m,S,A,I,x){for(var v=e,F=x,B=0,Z=!1;(F=F.get(Te))!==void 0&&!Z;){var G=F.get(e);if(B+=1,typeof G<"u"){if(G===B)throw new RangeError("Cyclic object value");Z=!0}typeof F.get(Te)>"u"&&(B=0)}if(typeof c=="function"?v=c(t,v):v instanceof Date?v=d(v):n==="comma"&&P(v)&&(v=ve.maybeMap(v,function(Se){return Se instanceof Date?d(Se):Se})),v===null){if(i)return p&&!A?p(t,h.encoder,I,"key",m):t;v=""}if(Vn(v)||ve.isBuffer(v)){if(p){var fe=A?t:p(t,h.encoder,I,"key",m);return[S(fe)+"="+S(p(v,h.encoder,I,"value",m))]}return[S(t)+"="+S(String(v))]}var C=[];if(typeof v>"u")return C;var D;if(n==="comma"&&P(v))A&&p&&(v=ve.maybeMap(v,p)),D=[{value:v.length>0?v.join(",")||null:void 0}];else if(P(c))D=c;else{var ue=Object.keys(v);D=y?ue.sort(y):ue}var k=l?t.replace(/\./g,"%2E"):t,E=o&&P(v)&&v.length===1?k+"[]":k;if(a&&P(v)&&v.length===0)return E+"[]";for(var R=0;R<D.length;++R){var T=D[R],ee=typeof T=="object"&&typeof T.value<"u"?T.value:v[T];if(!(f&&ee===null)){var be=u&&l?T.replace(/\./g,"%2E"):T,Lr=P(v)?typeof n=="function"?n(E,be):E:E+(u?"."+be:"["+be+"]");x.set(e,B);var Qe=Br();Qe.set(Te,x),Ur(C,r(ee,Lr,n,o,a,i,f,l,n==="comma"&&A&&P(v)?null:p,c,y,u,d,m,S,A,I,Qe))}}return C},Jn=function(e){if(!e)return h;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=oe.default;if(typeof e.format<"u"){if(!Kn.call(oe.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=oe.formatters[n],a=h.filter;(typeof e.filter=="function"||P(e.filter))&&(a=e.filter);var i;if(e.arrayFormat in Cr?i=e.arrayFormat:"indices"in e?i=e.indices?"indices":"repeat":i=h.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var f=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:h.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:h.addQueryPrefix,allowDots:f,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:h.allowEmptyArrays,arrayFormat:i,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:h.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?h.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:h.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:h.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:h.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:h.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:h.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:h.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:h.strictNullHandling}},Yn=function(r,e){var t=r,n=Jn(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):P(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof t!="object"||t===null)return"";var f=Cr[n.arrayFormat],l=f==="comma"&&n.commaRoundTrip;o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var p=Br(),c=0;c<o.length;++c){var y=o[c];n.skipNulls&&t[y]===null||Ur(i,jn(t[y],y,f,l,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,p))}var u=i.join(n.delimiter),d=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),u.length>0?d+u:""},J=Mr,We=Object.prototype.hasOwnProperty,Xn=Array.isArray,g={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:J.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Zn=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Wr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},ea="utf8=%26%2310003%3B",ra="utf8=%E2%9C%93",ta=function(e,t){var n={__proto__:null},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e;o=o.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),f=-1,l,p=t.charset;if(t.charsetSentinel)for(l=0;l<i.length;++l)i[l].indexOf("utf8=")===0&&(i[l]===ra?p="utf-8":i[l]===ea&&(p="iso-8859-1"),f=l,l=i.length);for(l=0;l<i.length;++l)if(l!==f){var c=i[l],y=c.indexOf("]="),u=y===-1?c.indexOf("="):y+1,d,m;u===-1?(d=t.decoder(c,g.decoder,p,"key"),m=t.strictNullHandling?null:""):(d=t.decoder(c.slice(0,u),g.decoder,p,"key"),m=J.maybeMap(Wr(c.slice(u+1),t),function(A){return t.decoder(A,g.decoder,p,"value")})),m&&t.interpretNumericEntities&&p==="iso-8859-1"&&(m=Zn(m)),c.indexOf("[]=")>-1&&(m=Xn(m)?[m]:m);var S=We.call(n,d);S&&t.duplicates==="combine"?n[d]=J.combine(n[d],m):(!S||t.duplicates==="last")&&(n[d]=m)}return n},na=function(r,e,t,n){for(var o=n?e:Wr(e,t),a=r.length-1;a>=0;--a){var i,f=r[a];if(f==="[]"&&t.parseArrays)i=t.allowEmptyArrays&&(o===""||t.strictNullHandling&&o===null)?[]:[].concat(o);else{i=t.plainObjects?Object.create(null):{};var l=f.charAt(0)==="["&&f.charAt(f.length-1)==="]"?f.slice(1,-1):f,p=t.decodeDotInKeys?l.replace(/%2E/g,"."):l,c=parseInt(p,10);!t.parseArrays&&p===""?i={0:o}:!isNaN(c)&&f!==p&&String(c)===p&&c>=0&&t.parseArrays&&c<=t.arrayLimit?(i=[],i[c]=o):p!=="__proto__"&&(i[p]=o)}o=i}return o},aa=function(e,t,n,o){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,f=/(\[[^[\]]*])/g,l=n.depth>0&&i.exec(a),p=l?a.slice(0,l.index):a,c=[];if(p){if(!n.plainObjects&&We.call(Object.prototype,p)&&!n.allowPrototypes)return;c.push(p)}for(var y=0;n.depth>0&&(l=f.exec(a))!==null&&y<n.depth;){if(y+=1,!n.plainObjects&&We.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+a.slice(l.index)+"]"),na(c,t,n,o)}},oa=function(e){if(!e)return g;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?g.charset:e.charset,n=typeof e.duplicates>"u"?g.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:g.allowDots:!!e.allowDots;return{allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:g.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:g.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:g.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:g.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:g.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:g.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:g.decoder,delimiter:typeof e.delimiter=="string"||J.isRegExp(e.delimiter)?e.delimiter:g.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:g.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:g.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:g.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:g.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},ia=function(r,e){var t=oa(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?ta(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var f=a[i],l=aa(f,n[f],t,typeof r=="string");o=J.merge(o,l,t)}return t.allowSparse===!0?o:J.compact(o)},la=Yn,fa=ia,ua=qe,br={formats:ua,parse:fa,stringify:la};function va({label:r,path:e}){const[t,n]=z.useState(je),o=Hr(),a=Kr(),i=z.useMemo(()=>br.parse(a.search.replace(/^\?/,"")),[a.search]),f=z.useMemo(()=>Object.values(t).flat().length,[t]),l=z.useMemo(()=>Object.entries(t).filter(([p,c])=>c.length>0).flatMap(([p,c])=>c.map((y,u)=>`tags[${p}]=${encodeURIComponent(y)}`)).join("&"),[t]);return z.useEffect(()=>{const p=i.tags;if(!p)return;const c=Object.fromEntries(Object.entries(p).map(([y,u])=>[y,Array.isArray(u)?u:[u]]));n({...je,...c})},[i]),z.useEffect(()=>{const p=setTimeout(()=>{const{tags:c,...y}=i,u=[l,br.stringify(y)].filter(Boolean).join("&"),d=[e,u].join("?");`${a.pathname}${a.search||"?"}`!==d&&o(d)},50);return()=>clearTimeout(p)},[e,l,o,a.pathname,a.search,i]),re.jsx("div",{className:"flex justify-between mb-2",children:re.jsx(kr,{className:zr("!w-auto !h-auto rounded-lg",{"!bg-blue-600 text-white":f>0}),value:t,onDone:n,children:re.jsxs("div",{className:"flex gap-2 items-center font-medium",children:[re.jsx("div",{className:"inline-block i-lucide-list-filter opacity-60"}),r," ",f>0&&re.jsx("span",{className:"px-2 rounded-full bg-blue-800 text-sm",children:f})]})})})}export{va as T};
