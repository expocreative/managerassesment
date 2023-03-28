(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[21,23,40,47],{144:function(e,t,n){"use strict";function a(e){return function(){return null}}n.d(t,"a",(function(){return a}))},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(42),s=n(6);t.default=function(e){var t=e.list,o=e.child,c=e.ClickHandler,u=e.DragStart,l=r.a.lazy((function(){return n(97)("./".concat(o,".jsx"))}));return Object(s.jsx)(s.Fragment,{children:t.map((function(e,t){return Object(s.jsx)(a.Suspense,{fallback:Object(s.jsx)("div",{children:"loading.."}),children:Object(s.jsx)(i.a,{children:""!==l?Object(s.jsx)(l,{index:t,designer:e,clicked:c,dragStart:u}):""})},t)}))})}},166:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(63),i=n(37),s=n(0),o=n(19),c=n(197),u=n(137),l=n(329),d=n(269),f=n(2),b=n(5),h=n(31),p=(n(9),n(10)),g=n(13),m=n(21),j=s.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.component,i=void 0===r?"div":r,o=e.disableGutters,c=void 0!==o&&o,u=e.fixed,l=void 0!==u&&u,d=e.maxWidth,h=void 0===d?"lg":d,g=Object(b.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(i,Object(f.a)({className:Object(p.a)(n.root,a,l&&n.fixed,c&&n.disableGutters,!1!==h&&n["maxWidth".concat(Object(m.a)(String(h)))]),ref:t},g))})),v=Object(g.a)((function(e){return{root:Object(h.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(h.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(h.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(h.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(h.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(h.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(j),x=n(199),O=n(226),y=n(240),k=n.n(y),w=n(262),L=n.n(w),M=n(148),D=n(62),N=n(195),C=Object(N.a)({root:{maxWidth:450,minWidth:300},header:{display:"flex",alignItems:"center",justifyContent:"space-between",height:50,paddingLeft:10},divider:{height:28},listHolder:{width:"100%",marginTop:10},list:{width:"100%",height:615},listHeader:{backgroundColor:"#EEEEEE",height:50,display:"flex",alignItems:"center",justifyContent:"space-between"},listScroller:{height:565,overflowX:"hidden",overflowY:"auto"},noMsg:{display:"flex",justifyContent:"center",alignItems:"center",height:200}}),S=n(6);t.default=Object(o.b)((function(e){return{user:e.auth.user}}),{ShowModel:D.f,MemberAssigned:D.d})((function(e){var t=e.user,n=e.designersList,o=e.amList,f=e.ShowModel,b=e.MemberAssigned,h=(e.testSrt,C()),p=Object(s.useState)([]),g=Object(i.a)(p,2),m=g[0],j=g[1],y=Object(s.useState)(""),w=Object(i.a)(y,2),D=w[0],N=w[1],E=function(e,t){b(Object(a.a)({},t))};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(c.a,{className:h.root,container:!0,direction:"column",spacing:2,children:[Object(S.jsxs)(u.a,{component:"form",className:h.header,children:[Object(S.jsx)(l.a,{className:h.input,value:D,placeholder:"Search Team Member",inputProps:{"aria-label":"search designer"},onChange:function(e){for(var t=e.target.value,a=[].concat(Object(r.a)(o),Object(r.a)(n)),i=[],s=0;s<a.length;s++)a[s].name.toLowerCase().startsWith(t.toLowerCase())&&i.push(a[s]);j(i),N(t)},onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),Object(S.jsx)(d.a,{className:h.iconButton,"aria-label":"search",children:Object(S.jsx)(k.a,{})})]}),Object(S.jsx)("div",{className:h.listHolder,children:Object(S.jsxs)(u.a,{className:h.list,children:[Object(S.jsxs)(v,{className:h.listHeader,children:[Object(S.jsx)("label",{children:"Team List"}),"super"===t.type&&Object(S.jsx)(x.a,{onClick:function(){return f({show:!0,child:"AddDesignerModel"})},variant:"outlined",color:"primary",size:"small",className:h.button,startIcon:Object(S.jsx)(L.a,{}),children:"Designer"})]}),n.length>=1||o.length>=1?Object(S.jsx)("div",{className:h.listScroller,children:D.length>0?Object(S.jsx)(M.default,{list:m,child:"DesignerListItem",ClickHandler:function(){},DragStart:E}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(M.default,{list:Object(r.a)(o),child:"DesignerListItem",ClickHandler:function(){},DragStart:E}),Object(S.jsx)(O.a,{light:!0}),Object(S.jsx)(M.default,{list:Object(r.a)(n),child:"DesignerListItem",ClickHandler:function(){},DragStart:E})]})}):Object(S.jsx)("div",{className:h.noMsg,children:Object(S.jsx)("label",{children:"No team memeber found. Please add a team member."})})]})})]})})}))},167:function(e,t,n){"use strict";n.r(t);var a=n(63),r=n(3),i=(n(0),n(19)),s=n(197),o=n(199),c=n(137),u=n(148),l=n(44),d=n(62),f=n(60),b=n(68),h=n(195),p=Object(h.a)({root:{maxWidth:635,height:270},leftPanel:{height:50},listHolder:{width:325},list:{width:"100%"},btn:{},listHeader:{backgroundColor:"#EEEEEE",height:30,display:"flex",alignItems:"center",paddingLeft:5,paddingRight:5,justifyContent:"space-between"},listScroller:{minHeight:165,overflowX:"hidden",overflowY:"auto"},noMsg:{display:"flex",justifyContent:"center",alignItems:"center",height:100,pointerEvents:"none"}}),g=n(6);t.default=Object(i.b)((function(e){return{zone:e.default.zone,quarter:e.default.quarter,quarterList:e.default.quarterList,yearsList:e.default.yearsList,year:e.default.year}}),{DownloadDatabase:d.a,YearChanged:d.j,ZoneChanged:d.k,QuarterChanged:d.e,DownloadSheet:d.b,MemberAssigned:d.d,AssignDesignersInZone:f.d,AssignManagersInZone:b.b})((function(e){var t=e.amList,n=e.designersList,i=e.quarter,d=e.zoneList,f=e.quarterList,b=e.QuarterChanged,h=e.yearsList,m=e.YearChanged,j=e.DownloadSheet,v=e.year,x=e.MemberAssigned,O=e.AssignDesignersInZone,y=e.AssignManagersInZone,k=e.DownloadDatabase,w=p(),L=function(e,t){e.data[v]&&e.data[v][Number(i.split("Q")[1])-1]&&e.data[v][Number(i.split("Q")[1])-1].zone===t.zone&&t.list.push({name:e.name,designation:e.designation})},M=function(e){var a=[];return t.forEach((function(t){var n=t.data[v]&&t.data[v][Number(i.split("Q")[1])-1];n&&n.quarter===i&&Object(l.a)(n.zone,e)&&a.push(t)})),n.forEach((function(t){var n=t.data[v]&&t.data[v][Number(i.split("Q")[1])-1];n&&n.quarter===i&&Object(l.a)(n.zone,e)&&a.push(t)})),a},D=function(){},N=function(e,t){x(Object(r.a)({},t))};return Object(g.jsxs)("div",{className:w.root,children:[Object(g.jsxs)(s.a,{className:w.leftPanel,container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(g.jsxs)(s.a,{item:!0,children:[Object(g.jsx)("select",{value:i,onChange:function(e){return b(e.target.value)},children:f.map((function(e,t){return Object(g.jsx)("option",{children:e},t)}))}),Object(g.jsx)("select",{value:v,style:{marginLeft:"10px"},onChange:function(e){return m(e.target.value)},children:h.map((function(e,t){return Object(g.jsx)("option",{children:e},t)}))})]}),Object(g.jsxs)(s.a,{container:!0,style:{width:"62%"},direction:"row",justify:"space-between",children:[Object(g.jsx)(o.a,{onClick:function(){y(Object(a.a)(t),(function(){O(Object(a.a)(n),v,i)}))},className:w.btn,variant:"outlined",children:"Assign"}),Object(g.jsx)(o.a,{onClick:function(){return j("rotation",function(){var e={quarter:i,year:v,list:[]};return d.forEach((function(a){var r={zone:a,list:[]};e.list.push(r),t.forEach((function(e){return L(e,r)})),n.forEach((function(e){return L(e,r)}))})),e}())},className:w.btn,variant:"outlined",children:"Download"}),Object(g.jsx)(o.a,{onClick:function(){return k()},className:w.btn,variant:"outlined",children:"Backup Database"})]})]}),Object(g.jsx)(s.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:d.map((function(e,t){return Object(g.jsx)(s.a,{className:w.listHolder,item:!0,children:Object(g.jsxs)(c.a,{className:w.list,children:[Object(g.jsxs)("div",{className:w.listHeader,children:[Object(g.jsx)("label",{children:e}),Object(g.jsx)("label",{children:M(e).length})]}),Object(g.jsxs)("div",{id:"dlist_"+t,className:w.listScroller,children:[Object(g.jsx)(u.default,{list:M(e),ClickHandler:D,DragStart:N,child:"ListItem"}),M(e).length<=0&&Object(g.jsx)("div",{className:w.noMsg,children:Object(g.jsx)("label",{children:"No team member assigned in this zone."})})]})]})},t)}))})]})}))},172:function(e,t,n){"use strict";n.r(t);var a,r=n(4),i=n.n(r),s=n(8),o=n(63),c=n(37),u=n(0),l=n(19),d=n(197),f=n(167),b=n(166),h=n(62),p=n(68),g=n(60),m=n(195),j=Object(m.a)({root:{maxWidth:"100vw",minWidth:1100,padding:"3% 10%"},panelHolder:{display:"flex",justifyContent:"space-around",flexDirection:"row"},menu:{height:150,display:"flex",alignItems:"center",justifyContent:"center"}}),v=n(6);t.default=Object(l.b)((function(e){return{amList:e.managers.amList,zoneList:e.default.zoneList,allZones:e.default.allZones,memberAssigned:e.default.memberAssigned,year:e.default.year,quarter:e.default.quarter}}),{AddYearData:g.b,AddYearDataManagers:p.a,MemberAssigned:h.d,updateManagersList:p.d,updateDesignersList:g.q,GetDesignerFeedback:g.k,ShowModel:h.f,AssignDesigner:g.c,UpdateZoneList:h.i})((function(e){var t=e.designersList,n=e.quarter,r=e.year,l=e.amList,h=e.memberAssigned,p=e.zoneList,g=e.allZones,m=e.updateManagersList,x=e.updateDesignersList,O=e.MemberAssigned,y=e.ShowModel,k=e.AddYearData,w=e.AddYearDataManagers,L=(e.GetDesignerFeedback,e.AssignDesigner),M=e.UpdateZoneList,D=j(),N=Object(u.useRef)(null),C=Object(u.useState)(null),S=Object(c.a)(C,2),E=S[0],z=S[1],I=Object(u.useState)(null),W=Object(c.a)(I,2),_=W[0],A=W[1],P=function(e){var t=Object(u.useRef)();return Object(u.useEffect)((function(){t.current=e})),t.current},H=P(n),q=P(r);Object(u.useEffect)((function(){z(function(e,t,n){var a=[];return n.forEach((function(n){var r=new Date(e,3*Number(t.split("Q")[1])-1,27);r.getTime()>=n.created&&(n.deactivated?r.getTime()<n.deactivated&&a.push(n):a.push(n))})),a}(r,n,t)),A(function(e,t,n){var a=[];return n.forEach((function(n){(new Date(e,3*Number(t.split("Q")[1])-1,27).getTime()>=n.created||void 0===n.created)&&a.push(n)})),a}(r,n,l));for(var e=0;e<t.length;e++)if(void 0===t[e].data[r]){k(r);break}for(var a=0;a<l.length;a++)if(void 0===l[a].data[r]){w(r);break}if(H!==n||q!==r){var i=([].concat(Object(o.a)(t),Object(o.a)(l)),[]),s=i.length>=5?i:g;s.sort();var c=s.splice(1,1);s.unshift(c[0]),console.info(s.sort(),s),M(s)}}),[n,r,t,l,M,g,H,k,w,q]);var Q=function(e){for(var a=-1!==h.designation.toLowerCase().search("manager"),i=a?Object(o.a)(l):Object(o.a)(t),s=0;s<i.length;s++){var c=i[s];if(c._id===h._id){c.data[r]=c.data[r]||[],c.data[r][Number(n.split("Q")[1])-1]=e;break}}a||L(h),a?function(e){var a=Object(o.a)(t);a.forEach((function(e){var t=e.data[r][Number(n.split("Q")[1])-1];t&&t.zone&&(t.manager=void 0,l.forEach((function(e){t&&e.data[r][Number(n.split("Q")[1])-1]&&t.zone===e.data[r][Number(n.split("Q")[1])-1].zone&&(t.manager=e.name)})))})),m(e),x(a)}(i):x(i),O(null)},F=function e(t,n){var a=void 0;return--n>=0&&(a=t.id&&-1!==t.id.search("dlist")?t:e(t.parentNode,n)),a},R=function(){var e=Object(s.a)(i.a.mark((function e(t){var s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=F(t.target,4),a=s?p[Number(s.id.split("_")[1])]:void 0,!(o=h.data[r][Number(n.split("Q")[1])-1])||o.zone!==a){e.next=5;break}return e.abrupt("return");case 5:if(-1!==h.designation.toLowerCase().search("manager")||!o){e.next=9;break}if(!(o.publish||o.extraFeedback&&o.extraFeedback.length>=1)){e.next=9;break}return y({show:!0,child:"ConfirmAssignModel",callback:function(e){e&&Z()}}),e.abrupt("return");case 9:Z();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=function(){for(var e=void 0,t=0;t<l.length;t++){var i=l[t],s=i.data[r][Number(n.split("Q")[1])-1];if(s&&void 0!==s.zone&&a===s.zone){e=i.name;break}}return e}(),t={quarter:n,values:[],extraFeedback:[],manager:-1===h.designation.toLowerCase().search("manager")?e:"",zone:a,pushBack:{reason:"",comment:"",count:0},prevFeedback:{arr:[],manager:""},publish:!1};(-1===h.designation.toLowerCase().search("manager")||e===h.name||!e)&&Q(t)};return Object(v.jsxs)("div",{className:D.root,onDragOver:function(e){e.stopPropagation(),e.preventDefault()},onDrop:R,onDragEnter:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(v.jsx)("div",{ref:N,style:{background:"transparent",width:"100%",height:"85vh",position:"absolute",zIndex:-10}}),E&&Object(v.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(v.jsx)(f.default,{dropTarget:N.current,zoneList:p,designersList:E,amList:_}),Object(v.jsx)(b.default,{dropTarget:N.current,designersList:E,amList:_})]})]})}))},204:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},205:function(e,t,n){var a=n(213).default;function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(208)},208:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return s.a})),n.d(t,"deprecatedPropType",(function(){return o})),n.d(t,"isMuiElement",(function(){return c.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return b.a})),n.d(t,"useControlled",(function(){return h.a})),n.d(t,"useEventCallback",(function(){return p.a})),n.d(t,"useForkRef",(function(){return g.a})),n.d(t,"unstable_useId",(function(){return m.a})),n.d(t,"useIsFocusVisible",(function(){return j.a}));var a=n(21),r=n(30),i=n(58),s=n(59);function o(e,t){return function(){return null}}var c=n(209),u=n(17),l=n(38),d=n(144),f=n(25),b=n(210),h=n(207),p=n(20),g=n(15),m=n(211),j=n(61)},210:function(e,t,n){"use strict";function a(e,t,n,a,r){return null}n.d(t,"a",(function(){return a}))},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=a.useState(e),n=t[0],r=t[1],i=e||n;return a.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),i}},213:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},226:function(e,t,n){"use strict";var a=n(2),r=n(5),i=n(0),s=(n(9),n(10)),o=n(13),c=n(18),u=i.forwardRef((function(e,t){var n=e.absolute,o=void 0!==n&&n,c=e.classes,u=e.className,l=e.component,d=void 0===l?"hr":l,f=e.flexItem,b=void 0!==f&&f,h=e.light,p=void 0!==h&&h,g=e.orientation,m=void 0===g?"horizontal":g,j=e.role,v=void 0===j?"hr"!==d?"separator":void 0:j,x=e.variant,O=void 0===x?"fullWidth":x,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,Object(a.a)({className:Object(s.a)(c.root,u,"fullWidth"!==O&&c[O],o&&c.absolute,b&&c.flexItem,p&&c.light,"vertical"===m&&c.vertical),role:v,ref:t},y))}));t.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(u)},240:function(e,t,n){"use strict";var a=n(204),r=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),s=(0,a(n(206)).default)(i.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=s},262:function(e,t,n){"use strict";var a=n(204),r=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),s=(0,a(n(206)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=s}}]);
//# sourceMappingURL=21.caf23c26.chunk.js.map