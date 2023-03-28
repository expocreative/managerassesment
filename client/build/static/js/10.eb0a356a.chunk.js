(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{101:function(e,t,n){"use strict";n.r(t);var r=n(66),i=n(3),o=n(37),a=n(0),l=n(19),c=n(232),u=n.n(c),s=n(140),d=n(137),f=n(269),p=n(327),b=n(325),h=n(199),j=n(62),m=n(60),x=n(195),y=Object(x.a)({model:{width:500,height:300,position:"absolute",display:"flex",flexDirection:"column"},modelHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",height:40,backgroundColor:"#efefef",paddingLeft:10},msg:{fontSize:15,lineHeight:1.5,color:"grey",margin:15,height:100,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},btnHolder:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},content:{padding:40,height:110},field:{width:"100%",display:"flex",justifyContent:"flex-start",paddingTop:10,alignItems:"center"},label:{width:120,height:30,paddingTop:10,display:"inline-block"},input:{height:30,width:400,display:"inline-block"},error:{width:"100%",display:"flex",justifyContent:"flex-end",fontSize:12,color:"red"}}),g=n(6);function v(){var e=window.innerHeight/2-200,t=window.innerWidth/2-250;return{top:"".concat(e,"px"),left:"".concat(t,"px")}}t.default=Object(l.b)((function(e){return{model:e.default.model,designationList:e.designers.designationList,year:e.default.year,quarter:e.default.quarter}}),{ShowModel:j.f,AddDesigner:m.a})((function(e){var t=e.year,n=e.quarter,l=e.model,c=e.designationList,j=e.ShowModel,m=e.AddDesigner,x=y(),O=Object(a.useState)({designation:"Designer - 1",name:""}),w=Object(o.a)(O,2),_=w[0],C=w[1],M=_.designation,S=_.name,N=Object(a.useState)(""),P=Object(o.a)(N,2),k=P[0],D=P[1],I=function(e){D(""),C(Object(i.a)(Object(i.a)({},_),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(g.jsx)(s.a,{open:l.show,onClose:function(){j({show:!1,child:""})},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(g.jsxs)(d.a,{className:x.model,style:v(),children:[Object(g.jsxs)("div",{className:x.modelHeader,children:[Object(g.jsx)("label",{children:"Add new designer/developer"}),Object(g.jsx)(f.a,{"aria-label":"x",onClick:function(){j({show:!1,child:""})},children:Object(g.jsx)(u.a,{})})]}),Object(g.jsxs)("div",{className:x.content,children:[Object(g.jsxs)("div",{className:x.field,children:[Object(g.jsx)("label",{className:x.label,children:"Name:"}),Object(g.jsx)("input",{className:x.input,type:"text",name:"name",value:S,onChange:I,placeholder:"please enter your name"})]}),Object(g.jsxs)("div",{className:x.field,children:[Object(g.jsx)("label",{className:x.label,children:"Designation:"}),Object(g.jsx)(p.a,{name:"designation",className:x.input,value:M,inputProps:{"aria-label":"Without label"},onChange:I,children:c.map((function(e,t){return Object(g.jsx)(b.a,{value:e,children:e},t)}))})]}),k.length>=5&&Object(g.jsx)("div",{className:x.error,children:Object(g.jsx)("label",{children:k})})]}),Object(g.jsx)("div",{className:x.btnHolder,children:Object(g.jsx)(h.a,{onClick:function(){var e,r;M.length<=3?e="please enter valid designation":S.length<=3&&(e="please enter your full name"),e?D(e):m({email:S.toLowerCase().replace(" ",".")+"@vdx.tv",name:(r=S,r.split(" ").reduce((function(e,t){return e.charAt(0).toUpperCase()+e.slice(1)+" "+t.charAt(0).toUpperCase()+t.slice(1)}))),designation:M,year:t,quarter:n}),!e&&j({show:!1,child:""})},color:"primary",variant:"contained",children:"confirm"})})]})})}))},144:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},204:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},205:function(e,t,n){var r=n(213).default;function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(208)},208:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return i.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return a.a})),n.d(t,"deprecatedPropType",(function(){return l})),n.d(t,"isMuiElement",(function(){return c.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return s.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return p.a})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return j.a})),n.d(t,"unstable_useId",(function(){return m.a})),n.d(t,"useIsFocusVisible",(function(){return x.a}));var r=n(21),i=n(30),o=n(58),a=n(59);function l(e,t){return function(){return null}}var c=n(209),u=n(17),s=n(38),d=n(144),f=n(25),p=n(210),b=n(207),h=n(20),j=n(15),m=n(211),x=n(61)},210:function(e,t,n){"use strict";function r(e,t,n,r,i){return null}n.d(t,"a",(function(){return r}))},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){var t=r.useState(e),n=t[0],i=t[1],o=e||n;return r.useEffect((function(){null==n&&i("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}},213:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},232:function(e,t,n){"use strict";var r=n(204),i=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(206)).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=a}}]);
//# sourceMappingURL=10.eb0a356a.chunk.js.map