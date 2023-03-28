(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{144:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},157:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(37),c=n(0),u=n.n(c),a=n(197),i=n(200),l=n(195),s=Object(l.a)({root:{position:"absolute",marginTop:82,width:window.innerWidth-520,height:window.innerHeight-400,background:"white"},textArea:{marginTop:10,height:window.innerHeight-450,resize:"none"},header:{}}),d=n(231),f=n.n(d),b=n(227),p=n.n(b),h=n(228),j=n.n(h),v=n(229),y=n.n(v),m=n(230),O=n.n(m),x=n(6),g=["red","yellow","black","green","magenta","blue","grey"];t.default=function(e){var t=s(),n=Object(c.useState)(e.data),l=Object(o.a)(n,2),d=l[0],b=l[1],h=u.a.useState(null),v=Object(o.a)(h,2),m=v[0],k=v[1],w=Object(c.useState)(null),M=Object(o.a)(w,2),_=M[0],S=M[1],z=Object(c.useState)(""),P=Object(o.a)(z,2),C=P[0],E=P[1],H=u.a.createRef(),F=Boolean(m);Object(c.useEffect)((function(){}));var T=function(e,t){if(_){var n=d.feedback.substr(_.start,_.end-_.start);switch(e){case"color":n='<font color="'+t+'">'+n+"</font>";break;case"link":n='<a href="'+t+'">'+n+"</a>";break;case"bold":n="<b>"+n+"</b>"}var o=d.feedback.substr(0,_.start)+n+d.feedback.substr(_.end,d.feedback.length);b(Object(r.a)(Object(r.a)({},d),{},{feedback:o}))}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(a.a,{container:!0,direction:"column",className:t.root,children:[Object(x.jsxs)(a.a,{container:!0,direction:"row",justify:"space-between",style:{background:"grey"},children:[Object(x.jsxs)(a.a,{container:!0,direction:"row",alignItems:"center",style:{height:30,width:"30%"},children:[Object(x.jsx)("div",{name:"bold",style:{width:30,height:30,cursor:"pointer"},onClick:function(){return T("bold")},children:Object(x.jsx)(p.a,{className:t.iconBtn,color:"secondary",fontSize:"small"})}),Object(x.jsx)("div",{name:"link",style:{width:30,height:30,cursor:"pointer"},onClick:function(e){E("link"),k(e.currentTarget)},children:Object(x.jsx)(j.a,{className:t.iconBtn,color:"secondary",fontSize:"small"})}),Object(x.jsx)("div",{name:"color",style:{width:30,height:30,cursor:"pointer"},onClick:function(e){E("clr"),k(e.currentTarget)},children:Object(x.jsx)(y.a,{className:t.iconBtn,color:"secondary",fontSize:"small"})})]}),Object(x.jsx)(O.a,{color:"secondary",style:{cursor:"pointer"},onClick:function(){return e.showModal(!1)}})]}),Object(x.jsx)("textarea",{className:t.textArea,value:d.feedback,placeholder:"your feedback here",onChange:function(e){b(Object(r.a)(Object(r.a)({},d),{},{feedback:e.target.value}))},onSelect:function(e){return S({start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd})}})]}),Object(x.jsx)(i.a,{open:F,anchorEl:m,onClose:function(){return k(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:"clr"==C?function(){var e=20,t=-20,n=25;return Object(x.jsx)("svg",{width:188,height:"100",children:g.map((function(r,o){return t+=45,0!=o&&o%4==0&&(t=25,n+=45),Object(x.jsx)("circle",{style:{cursor:"pointer"},cx:t,cy:n,r:e,fill:r,onClick:function(){T("color",r),k(null)}},o)}))})}():Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{ref:H,type:"text",placehoder:"add link",style:{width:400,margin:15},onKeyPress:function(e){"Enter"==e.key&&T("link",H.current.value),k(null)}}),Object(x.jsx)("div",{style:{display:"inline-block",width:25,paddingRight:15,height:25,textAlign:"center",cursor:"pointer"},onClick:function(){T("link",H.current.value),k(null)},children:Object(x.jsx)(f.a,{fontSize:"inherit"})})]})})]})}},204:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},205:function(e,t,n){var r=n(213).default;function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=c?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(208)},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=e.controlled,n=e.default,o=(e.name,e.state,r.useRef(void 0!==t).current),c=r.useState(n),u=c[0],a=c[1];return[o?t:u,r.useCallback((function(e){o||a(e)}),[])]}},208:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return c.a})),n.d(t,"debounce",(function(){return u.a})),n.d(t,"deprecatedPropType",(function(){return a})),n.d(t,"isMuiElement",(function(){return i.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return s.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return b.a})),n.d(t,"useControlled",(function(){return p.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return j.a})),n.d(t,"unstable_useId",(function(){return v.a})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n(21),o=n(30),c=n(58),u=n(59);function a(e,t){return function(){return null}}var i=n(209),l=n(17),s=n(38),d=n(144),f=n(25),b=n(210),p=n(207),h=n(20),j=n(15),v=n(211),y=n(61)},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},210:function(e,t,n){"use strict";function r(e,t,n,r,o){return null}n.d(t,"a",(function(){return r}))},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=r.useState(e),n=t[0],o=t[1],c=e||n;return r.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),c}},213:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},227:function(e,t,n){"use strict";var r=n(204),o=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(0)),u=(0,r(n(206)).default)(c.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),"FormatBold");t.default=u},228:function(e,t,n){"use strict";var r=n(204),o=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(0)),u=(0,r(n(206)).default)(c.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=u},229:function(e,t,n){"use strict";var r=n(204),o=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(0)),u=(0,r(n(206)).default)(c.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"ColorLens");t.default=u},230:function(e,t,n){"use strict";var r=n(204),o=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(0)),u=(0,r(n(206)).default)(c.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");t.default=u},231:function(e,t,n){"use strict";var r=n(204),o=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(n(0)),u=(0,r(n(206)).default)(c.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=u}}]);
//# sourceMappingURL=20.b57aee78.chunk.js.map