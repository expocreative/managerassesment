(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20,24,30,38,47],{145:function(e,t,a){"use strict";function n(e){return function(){return null}}a.d(t,"a",(function(){return n}))},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a(6);t.default=function(e){var t=e.list,s=e.child,c=e.ClickHandler,l=e.DragStart,d=r.a.lazy((function(){return a(97)("./".concat(s,".jsx"))}));return Object(o.jsx)(o.Fragment,{children:t.map((function(e,t){return Object(o.jsx)(n.Suspense,{fallback:Object(o.jsx)("div",{children:"loading.."}),children:Object(o.jsx)(i.a,{children:""!==d?Object(o.jsx)(d,{index:t,designer:e,clicked:c,dragStart:l}):""})},t)}))})}},167:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(62),i=a(37),o=a(0),s=a(19),c=a(198),l=a(138),d=a(308),u=a(220),f=a(2),b=a(5),h=a(30),p=(a(9),a(10)),m=a(13),g=a(21),j=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,s=e.disableGutters,c=void 0!==s&&s,l=e.fixed,d=void 0!==l&&l,u=e.maxWidth,h=void 0===u?"lg":u,m=Object(b.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(i,Object(f.a)({className:Object(p.a)(a.root,n,d&&a.fixed,c&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(g.a)(String(h)))]),ref:t},m))})),v=Object(m.a)((function(e){return{root:Object(h.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(h.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(h.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(h.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(h.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(h.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(j),x=a(200),O=a(222),y=a(235),k=a.n(y),w=a(242),L=a.n(w),C=a(148),N=a(63),S=a(196),M=Object(S.a)({root:{maxWidth:450,minWidth:300},header:{display:"flex",alignItems:"center",justifyContent:"space-between",height:50,paddingLeft:10},divider:{height:28},listHolder:{width:"100%",marginTop:10},list:{width:"100%",height:615},listHeader:{backgroundColor:"#EEEEEE",height:50,display:"flex",alignItems:"center",justifyContent:"space-between"},listScroller:{height:565,overflowX:"hidden",overflowY:"auto"},noMsg:{display:"flex",justifyContent:"center",alignItems:"center",height:200}}),D=a(6);t.default=Object(s.b)((function(e){return{user:e.auth.user}}),{ShowModel:N.e,MemberAssigned:N.c})((function(e){var t=e.user,a=e.designersList,s=e.amList,f=e.ShowModel,b=e.MemberAssigned,h=M(),p=Object(o.useState)([]),m=Object(i.a)(p,2),g=m[0],j=m[1],y=Object(o.useState)(""),w=Object(i.a)(y,2),N=w[0],S=w[1],z=function(e,t){b(Object(n.a)({},t))};return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(c.a,{className:h.root,container:!0,direction:"column",spacing:2,children:[Object(D.jsxs)(l.a,{component:"form",className:h.header,children:[Object(D.jsx)(d.a,{className:h.input,value:N,placeholder:"Search Team Member",inputProps:{"aria-label":"search designer"},onChange:function(e){for(var t=e.target.value,n=[].concat(Object(r.a)(s),Object(r.a)(a)),i=[],o=0;o<n.length;o++)n[o].name.toLowerCase().startsWith(t.toLowerCase())&&i.push(n[o]);j(i),S(t)},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),Object(D.jsx)(u.a,{className:h.iconButton,"aria-label":"search",children:Object(D.jsx)(k.a,{})})]}),Object(D.jsx)("div",{className:h.listHolder,children:Object(D.jsxs)(l.a,{className:h.list,children:[Object(D.jsxs)(v,{className:h.listHeader,children:[Object(D.jsx)("label",{children:"Team List"}),"super"===t.type&&Object(D.jsx)(x.a,{onClick:function(){return f({show:!0,child:"AddDesignerModel"})},variant:"outlined",color:"primary",size:"small",className:h.button,startIcon:Object(D.jsx)(L.a,{}),children:"Designer"})]}),a.length>=1||s.length>=1?Object(D.jsx)("div",{className:h.listScroller,children:N.length>0?Object(D.jsx)(C.default,{list:g,child:"DesignerListItem",ClickHandler:function(){},DragStart:z}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(C.default,{list:Object(r.a)(s),child:"DesignerListItem",ClickHandler:function(){},DragStart:z}),Object(D.jsx)(O.a,{light:!0}),Object(D.jsx)(C.default,{list:Object(r.a)(a),child:"DesignerListItem",ClickHandler:function(){},DragStart:z})]})}):Object(D.jsx)("div",{className:h.noMsg,children:Object(D.jsx)("label",{children:"No team memeber found. Please add a team member."})})]})})]})})}))},168:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a(3),i=(a(0),a(19)),o=a(198),s=a(200),c=a(138),l=a(148),d=a(44),u=a(63),f=a(60),b=a(75),h=a(196),p=Object(h.a)({root:{maxWidth:635,height:270},leftPanel:{height:50},listHolder:{width:325},list:{width:"100%"},btn:{},listHeader:{backgroundColor:"#EEEEEE",height:30,display:"flex",alignItems:"center",paddingLeft:5,paddingRight:5,justifyContent:"space-between"},listScroller:{minHeight:165,overflowX:"hidden",overflowY:"auto"},noMsg:{display:"flex",justifyContent:"center",alignItems:"center",height:100,pointerEvents:"none"}}),m=a(6);t.default=Object(i.b)((function(e){return{zone:e.default.zone,quarter:e.default.quarter,quarterList:e.default.quarterList,yearsList:e.default.yearsList,year:e.default.year}}),{DownloadDatabase:u.a,YearChanged:u.i,ZoneChanged:u.j,QuarterChanged:u.d,DownloadSheet:u.b,MemberAssigned:u.c,AssignDesignersInZone:f.d,AssignManagersInZone:b.b})((function(e){var t=e.amList,a=e.designersList,i=e.quarter,u=e.zoneList,f=e.quarterList,b=e.QuarterChanged,h=e.yearsList,g=e.YearChanged,j=e.DownloadSheet,v=e.year,x=e.MemberAssigned,O=e.AssignDesignersInZone,y=e.AssignManagersInZone,k=e.DownloadDatabase,w=p(),L=function(e,t){e.data[v]&&e.data[v][Number(i.split("Q")[1])-1]&&e.data[v][Number(i.split("Q")[1])-1].zone===t.zone&&t.list.push({name:e.name,designation:e.designation})},C=function(e){var n=[];return t.forEach((function(t){var a=t.data[v]&&t.data[v][Number(i.split("Q")[1])-1];a&&a.quarter===i&&Object(d.a)(a.zone,e)&&n.push(t)})),a.forEach((function(t){var a=t.data[v]&&t.data[v][Number(i.split("Q")[1])-1];a&&a.quarter===i&&Object(d.a)(a.zone,e)&&n.push(t)})),n},N=function(){},S=function(e,t){x(Object(r.a)({},t))};return Object(m.jsxs)("div",{className:w.root,children:[Object(m.jsxs)(o.a,{className:w.leftPanel,container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(m.jsxs)(o.a,{item:!0,children:[Object(m.jsx)("select",{value:i,onChange:function(e){return b(e.target.value)},children:f.map((function(e,t){return Object(m.jsx)("option",{children:e},t)}))}),Object(m.jsx)("select",{value:v,style:{marginLeft:"10px"},onChange:function(e){return g(e.target.value)},children:h.map((function(e,t){return Object(m.jsx)("option",{children:e},t)}))})]}),Object(m.jsxs)(o.a,{container:!0,style:{width:"62%"},direction:"row",justify:"space-between",children:[Object(m.jsx)(s.a,{onClick:function(){y(Object(n.a)(t),(function(){O(Object(n.a)(a),v,i)}))},className:w.btn,variant:"outlined",children:"Assign"}),Object(m.jsx)(s.a,{onClick:function(){return j("rotation",function(){var e={quarter:i,year:v,list:[]};return u.forEach((function(n){var r={zone:n,list:[]};e.list.push(r),t.forEach((function(e){return L(e,r)})),a.forEach((function(e){return L(e,r)}))})),e}())},className:w.btn,variant:"outlined",children:"Download"}),Object(m.jsx)(s.a,{onClick:function(){return k()},className:w.btn,variant:"outlined",children:"Backup Database"})]})]}),Object(m.jsx)(o.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:u.map((function(e,t){return Object(m.jsx)(o.a,{className:w.listHolder,item:!0,children:Object(m.jsxs)(c.a,{className:w.list,children:[Object(m.jsxs)("div",{className:w.listHeader,children:[Object(m.jsx)("label",{children:e}),Object(m.jsx)("label",{children:C(e).length})]}),Object(m.jsxs)("div",{id:"dlist_"+t,className:w.listScroller,children:[Object(m.jsx)(l.default,{list:C(e),ClickHandler:N,DragStart:S,child:"ListItem"}),C(e).length<=0&&Object(m.jsx)("div",{className:w.noMsg,children:Object(m.jsx)("label",{children:"No team member assigned in this zone."})})]})]})},t)}))})]})}))},174:function(e,t,a){"use strict";a.r(t);var n,r=a(4),i=a.n(r),o=a(8),s=a(62),c=a(37),l=a(0),d=a(19),u=a(198),f=a(168),b=a(167),h=a(63),p=a(75),m=a(60),g=a(196),j=Object(g.a)({root:{maxWidth:"100vw",minWidth:1100,padding:"3% 10%"},panelHolder:{display:"flex",justifyContent:"space-around",flexDirection:"row"},menu:{height:150,display:"flex",alignItems:"center",justifyContent:"center"}}),v=a(6);t.default=Object(d.b)((function(e){return{amList:e.managers.amList,zoneList:e.default.zoneList,allZones:e.default.allZones,memberAssigned:e.default.memberAssigned,year:e.default.year,quarter:e.default.quarter}}),{AddYearData:m.b,AddYearDataManagers:p.a,MemberAssigned:h.c,updateManagersList:p.d,updateDesignersList:m.q,GetDesignerFeedback:m.k,ShowModel:h.e,AssignDesigner:m.c,UpdateZoneList:h.h})((function(e){var t=e.designersList,a=e.quarter,r=e.year,d=e.amList,h=e.memberAssigned,p=e.zoneList,m=e.allZones,g=e.updateManagersList,x=e.updateDesignersList,O=e.MemberAssigned,y=e.ShowModel,k=e.AddYearData,w=e.AddYearDataManagers,L=(e.GetDesignerFeedback,e.AssignDesigner),C=e.UpdateZoneList,N=j(),S=Object(l.useRef)(null),M=Object(l.useState)(null),D=Object(c.a)(M,2),z=D[0],E=D[1],I=Object(l.useState)(null),W=Object(c.a)(I,2),_=W[0],A=W[1],R=function(e){var t=Object(l.useRef)();return Object(l.useEffect)((function(){t.current=e})),t.current},P=R(a),H=R(r);Object(l.useEffect)((function(){E(function(e,t,a){var n=[];return a.forEach((function(a){var r=new Date(e,3*Number(t.split("Q")[1])-1,27);r.getTime()>=a.created&&(a.deactivated?r.getTime()<a.deactivated&&n.push(a):n.push(a))})),n}(r,a,t)),A(function(e,t,a){var n=[];return a.forEach((function(a){(new Date(e,3*Number(t.split("Q")[1])-1,27).getTime()>=a.created||void 0===a.created)&&n.push(a)})),n}(r,a,d));for(var e=0;e<t.length;e++)if(void 0===t[e].data[r]){k(r);break}for(var n=0;n<d.length;n++)if(void 0===d[n].data[r]){w(r);break}if(P!==a||H!==r){var i=([].concat(Object(s.a)(t),Object(s.a)(d)),[]),o=i.length>=5?i:m;o.sort();var c=o.splice(1,1);o.unshift(c[0]),C(o)}}),[a,r,t,d,C,m,P,k,w,H]);var q=function(e){for(var n=-1!==h.designation.toLowerCase().search("manager"),i=n?Object(s.a)(d):Object(s.a)(t),o=0;o<i.length;o++){var c=i[o];if(c._id===h._id){c.data[r]=c.data[r]||[],c.data[r][Number(a.split("Q")[1])-1]=e;break}}n||L(h),n?function(e){var n=Object(s.a)(t);n.forEach((function(e){var t=e.data[r][Number(a.split("Q")[1])-1];t&&t.zone&&(t.manager=void 0,d.forEach((function(e){t&&e.data[r][Number(a.split("Q")[1])-1]&&t.zone===e.data[r][Number(a.split("Q")[1])-1].zone&&(t.manager=e.name)})))})),g(e),x(n)}(i):x(i),O(null)},F=function e(t,a){var n=void 0;return--a>=0&&(n=t.id&&-1!==t.id.search("dlist")?t:e(t.parentNode,a)),n},Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=F(t.target,4),n=o?p[Number(o.id.split("_")[1])]:void 0,!(s=h.data[r][Number(a.split("Q")[1])-1])||s.zone!==n){e.next=5;break}return e.abrupt("return");case 5:if(-1!==h.designation.toLowerCase().search("manager")||!s){e.next=9;break}if(!(s.publish||s.extraFeedback&&s.extraFeedback.length>=1)){e.next=9;break}return y({show:!0,child:"ConfirmAssignModel",callback:function(e){e&&T()}}),e.abrupt("return");case 9:T();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=function(){for(var e=void 0,t=0;t<d.length;t++){var i=d[t],o=i.data[r][Number(a.split("Q")[1])-1];if(o&&void 0!==o.zone&&n===o.zone){e=i.name;break}}return e}(),t={quarter:a,values:[],extraFeedback:[],manager:-1===h.designation.toLowerCase().search("manager")?e:"",zone:n,pushBack:{reason:"",comment:"",count:0},prevFeedback:{arr:[],manager:""},publish:!1};(-1===h.designation.toLowerCase().search("manager")||e===h.name||!e)&&q(t)};return Object(v.jsxs)("div",{className:N.root,onDragOver:function(e){e.stopPropagation(),e.preventDefault()},onDrop:Q,onDragEnter:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(v.jsx)("div",{ref:S,style:{background:"transparent",width:"100%",height:"85vh",position:"absolute",zIndex:-10}}),z&&Object(v.jsxs)(u.a,{container:!0,direction:"row",justify:"space-between",children:[Object(v.jsx)(f.default,{dropTarget:S.current,zoneList:p,designersList:z,amList:_}),Object(v.jsx)(b.default,{dropTarget:S.current,designersList:z,amList:_})]})]})}))},205:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},206:function(e,t,a){var n=a(213).default;function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=a(208)},208:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return n.a})),a.d(t,"createChainedFunction",(function(){return r.a})),a.d(t,"createSvgIcon",(function(){return i.a})),a.d(t,"debounce",(function(){return o.a})),a.d(t,"deprecatedPropType",(function(){return s})),a.d(t,"isMuiElement",(function(){return c.a})),a.d(t,"ownerDocument",(function(){return l.a})),a.d(t,"ownerWindow",(function(){return d.a})),a.d(t,"requirePropFactory",(function(){return u.a})),a.d(t,"setRef",(function(){return f.a})),a.d(t,"unsupportedProp",(function(){return b.a})),a.d(t,"useControlled",(function(){return h.a})),a.d(t,"useEventCallback",(function(){return p.a})),a.d(t,"useForkRef",(function(){return m.a})),a.d(t,"unstable_useId",(function(){return g.a})),a.d(t,"useIsFocusVisible",(function(){return j.a}));var n=a(21),r=a(31),i=a(59),o=a(58);function s(e,t){return function(){return null}}var c=a(212),l=a(17),d=a(38),u=a(145),f=a(25),b=a(210),h=a(211),p=a(20),m=a(15),g=a(209),j=a(61)},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=n.useState(e),a=t[0],r=t[1],i=e||a;return n.useEffect((function(){null==a&&r("mui-".concat(Math.round(1e5*Math.random())))}),[a]),i}},210:function(e,t,a){"use strict";function n(e,t,a,n,r){return null}a.d(t,"a",(function(){return n}))},213:function(e,t){function a(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=a=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),a(t)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},220:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(0),o=(a(9),a(10)),s=a(13),c=a(18),l=a(140),d=a(21),u=i.forwardRef((function(e,t){var a=e.edge,s=void 0!==a&&a,c=e.children,u=e.classes,f=e.className,b=e.color,h=void 0===b?"default":b,p=e.disabled,m=void 0!==p&&p,g=e.disableFocusRipple,j=void 0!==g&&g,v=e.size,x=void 0===v?"medium":v,O=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(l.a,Object(n.a)({className:Object(o.a)(u.root,f,"default"!==h&&u["color".concat(Object(d.a)(h))],m&&u.disabled,"small"===x&&u["size".concat(Object(d.a)(x))],{start:u.edgeStart,end:u.edgeEnd}[s]),centerRipple:!0,focusRipple:!j,disabled:m,ref:t},O),i.createElement("span",{className:u.label},c))}));t.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(c.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(u)},222:function(e,t,a){"use strict";var n=a(2),r=a(5),i=a(0),o=(a(9),a(10)),s=a(13),c=a(18),l=i.forwardRef((function(e,t){var a=e.absolute,s=void 0!==a&&a,c=e.classes,l=e.className,d=e.component,u=void 0===d?"hr":d,f=e.flexItem,b=void 0!==f&&f,h=e.light,p=void 0!==h&&h,m=e.orientation,g=void 0===m?"horizontal":m,j=e.role,v=void 0===j?"hr"!==u?"separator":void 0:j,x=e.variant,O=void 0===x?"fullWidth":x,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(n.a)({className:Object(o.a)(c.root,l,"fullWidth"!==O&&c[O],s&&c.absolute,b&&c.flexItem,p&&c.light,"vertical"===g&&c.vertical),role:v,ref:t},y))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},235:function(e,t,a){"use strict";var n=a(205),r=a(206);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),o=(0,n(a(207)).default)(i.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},242:function(e,t,a){"use strict";var n=a(205),r=a(206);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),o=(0,n(a(207)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o}}]);
//# sourceMappingURL=20.7039080f.chunk.js.map