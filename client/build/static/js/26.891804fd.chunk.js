(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{149:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),s=n(19),c=n(328),o=n(320),d=n(321),l=n(322),u=n(323),b=n(199),f=n(195),j=n(264),m=n(6),g=r.a.forwardRef((function(e,t){return Object(m.jsx)(j.a,Object(a.a)({direction:"up",ref:t},e))})),h=Object(f.a)({root:{}});t.default=Object(s.b)((function(e){return{}}),null)((function(e){var t=e.designer,n=e.show,a=e.Clicked,i=(h(),function(e){a(e)});return Object(m.jsxs)(c.a,{open:n,TransitionComponent:g,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(m.jsx)(o.a,{id:"alert-dialog-slide-title",children:"Feedback"}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(l.a,{id:"alert-dialog-slide-description",children:[t&&t.name," is not assigned with you in this quarter. do you still want to give feedback."]})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(b.a,{onClick:function(){return i("no")},color:"primary",children:" no "}),Object(m.jsx)(b.a,{onClick:function(){return i("yes")},color:"primary",children:" yes "})]})]})}))},150:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(233),r=(n(0),n(265)),s=n(6);t.default=function(e){var t=e.children,n=e.value,c=e.index,o=Object(i.a)(e,["children","value","index"]);return Object(s.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==c,id:"full-width-tabpanel-".concat(c),"aria-labelledby":"full-width-tab-".concat(c)},o),{},{children:n===c&&Object(s.jsx)(r.a,{children:t})}))}},151:function(e,t,n){"use strict";n.r(t);var a=n(63),i=n(0),r=n.n(i),s=n(19),c=n(274),o=n(275),d=n(270),l=n(235),u=n(276),b=n(197),f=n(226),j=n(236),m=n.n(j),g=n(234),h=n.n(g),p=n(224),O=n.n(p),v=n(60),x=n(218),y=n(6);t.default=Object(s.b)((function(e){return{designerList:e.designers.designersList,user:e.auth.user,quarter:e.default.quarter,designerPublished:e.designers.designerPublished,year:e.default.year}}),{GetDesignerData:v.j})((function(e){var t=e.designerList,n=e.user,i=e.year,s=e.quarter,j=e.designerPublished,g=e.GetDesignerData,p=Object(x.a)(),v=function(e,t,n,a){var i=[];return e.forEach((function(e){var r=e.data[n]&&e.data[n][Number(t.split("Q")[1])-1];r&&r.manager&&r.manager.toLowerCase()===a.name.toLowerCase()&&i.push(e)})),i}(Object(a.a)(t),s,i,n);return Object(y.jsx)(c.a,{className:p.list,children:v.length>=1?v.map((function(e,t){var n=e.data[i][Number(s.split("Q")[1]-1)];return Object(y.jsxs)(r.a.Fragment,{children:[Object(y.jsxs)(o.a,{button:!0,onClick:function(){g(e,i,s)},children:[n.prevFeedback.manager.length>=3&&Object(y.jsx)(d.a,{title:"feedback changed by - ".concat(n.prevFeedback.manager),children:Object(y.jsx)(h.a,{color:"secondary",fontSize:"small"})}),(e.email===j||n.publish)&&Object(y.jsx)(O.a,{color:"secondary",fontSize:"small"}),Object(y.jsx)(l.a,{primary:e.name+" "+(n.suffix?n.suffix:""),style:{paddingLeft:10}}),n.pushBack.reason.length>=2&&Object(y.jsx)(u.a,{children:Object(y.jsx)(b.a,{container:!0,direction:"row",alignItems:"center",children:n.pushBack.reason.length>=2&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.a,{title:"push back by - ".concat(n.pushBack.manager),children:Object(y.jsx)(m.a,{color:"secondary",fontSize:"small"})}),Object(y.jsx)("label",{style:{paddingLeft:2},children:n.pushBack.count})]})})})]}),n.extraFeedback&&n.extraFeedback.manager&&Object(y.jsx)("div",{className:p.subHeading,children:Object(y.jsxs)("label",{children:[n.extraFeedback.manager," leaves a feedback for ",e.name]})}),Object(y.jsx)(f.a,{variant:"inset",component:"li"})]},t)})):Object(y.jsx)("div",{className:p.noMsg,children:Object(y.jsx)("label",{children:"No Designer/Developer is assigned with you in this Quarter"})})})}))},152:function(e,t,n){"use strict";n.r(t);var a=n(37),i=n(0),r=n(19),s=n(274),c=n(275),o=n(235),d=n(218),l=n(149),u=n(60),b=n(6);t.default=Object(r.b)((function(e){return{designerList:e.designers.designersList,user:e.auth.user,quarter:e.default.quarter,year:e.default.year}}),{DesignerSelected:u.h})((function(e){var t=e.designerList,n=e.year,r=e.quarter,u=e.user,f=e.DesignerSelected,j=Object(d.a)(),m=Object(i.useState)(!1),g=Object(a.a)(m,2),h=g[0],p=g[1],O=Object(i.useState)(""),v=Object(a.a)(O,2),x=v[0],y=v[1],C=function(){for(var e={},n=0;n<t.length;n++)if(t[n].name===x){e=t[n];break}return e};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{className:j.list,children:t.map((function(e){var t=e.data[n][Number(r.split("Q")[1]-1)];return function(e){return e&&e[Number(r.split("Q")[1])-1]&&e[Number(r.split("Q")[1])-1].manager!==u.name}(e.data[n])&&Object(b.jsx)(c.a,{value:e.name,button:!0,onClick:function(){return function(e){p(!0),y(e.name)}(e)},children:Object(b.jsx)(o.a,{primary:e.name+" "+(t.suffix?t.suffix:""),style:{paddingLeft:10}})},e.name)}))}),Object(b.jsx)(l.default,{show:h,designer:C(),Clicked:function(e){"yes"===e&&f(C()),p(!1)}})]})}))},160:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(37),r=n(0),s=n(137),c=n(279),o=n(277),d=n(150),l=n(218),u=n(151),b=n(152),f=n(6);function j(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}t.default=function(){var e=Object(l.a)(),t=Object(r.useState)(0),n=Object(i.a)(t,2),m=n[0],g=n[1];return Object(f.jsxs)(s.a,{className:e.root,children:[Object(f.jsx)(s.a,{square:!0,style:{backgroundColor:"#FFFFFF"},children:Object(f.jsxs)(c.a,{value:m,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){g(t)},"aria-label":"disabled tabs example",children:[Object(f.jsx)(o.a,Object(a.a)({label:"Assigned"},j(0))),Object(f.jsx)(o.a,Object(a.a)({label:"Other"},j(1)))]})}),Object(f.jsx)(d.default,{value:m,index:0,children:Object(f.jsx)(u.default,{})}),Object(f.jsx)(d.default,{value:m,index:1,children:Object(f.jsx)(b.default,{})})]})}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e){var t=e.controlled,n=e.default,i=(e.name,e.state,a.useRef(void 0!==t).current),r=a.useState(n),s=r[0],c=r[1];return[i?t:s,a.useCallback((function(e){i||c(e)}),[])]}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},215:function(e,t,n){"use strict";var a=n(0),i=a.createContext({});t.a=i},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(195),i=Object(a.a)({root:{width:350,height:window.innerHeight-300},noMsg:{display:"flex",height:100,justifyContent:"center",alignItems:"center"},subHeading:{fontSize:11,color:"blue",marginLeft:25,marginTop:-10,paddingBottom:10}})},274:function(e,t,n){"use strict";var a=n(2),i=n(5),r=n(0),s=(n(9),n(10)),c=n(13),o=n(215),d=r.forwardRef((function(e,t){var n=e.children,c=e.classes,d=e.className,l=e.component,u=void 0===l?"ul":l,b=e.dense,f=void 0!==b&&b,j=e.disablePadding,m=void 0!==j&&j,g=e.subheader,h=Object(i.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),p=r.useMemo((function(){return{dense:f}}),[f]);return r.createElement(o.a.Provider,{value:p},r.createElement(u,Object(a.a)({className:Object(s.a)(c.root,d,f&&c.dense,!m&&c.padding,g&&c.subheader),ref:t},h),g,n))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},275:function(e,t,n){"use strict";var a=n(2),i=n(5),r=n(0),s=(n(9),n(10)),c=n(13),o=n(139),d=n(209),l=n(15),u=n(215),b=n(11),f="undefined"===typeof window?r.useEffect:r.useLayoutEffect,j=r.forwardRef((function(e,t){var n=e.alignItems,c=void 0===n?"center":n,j=e.autoFocus,m=void 0!==j&&j,g=e.button,h=void 0!==g&&g,p=e.children,O=e.classes,v=e.className,x=e.component,y=e.ContainerComponent,C=void 0===y?"li":y,k=e.ContainerProps,N=(k=void 0===k?{}:k).className,w=Object(i.a)(k,["className"]),F=e.dense,L=void 0!==F&&F,S=e.disabled,D=void 0!==S&&S,E=e.disableGutters,I=void 0!==E&&E,P=e.divider,B=void 0!==P&&P,q=e.focusVisibleClassName,M=e.selected,R=void 0!==M&&M,V=Object(i.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=r.useContext(u.a),Q={dense:L||A.dense||!1,alignItems:c},T=r.useRef(null);f((function(){m&&T.current&&T.current.focus()}),[m]);var z=r.Children.toArray(p),G=z.length&&Object(d.a)(z[z.length-1],["ListItemSecondaryAction"]),$=r.useCallback((function(e){T.current=b.findDOMNode(e)}),[]),H=Object(l.a)($,t),J=Object(a.a)({className:Object(s.a)(O.root,v,Q.dense&&O.dense,!I&&O.gutters,B&&O.divider,D&&O.disabled,h&&O.button,"center"!==c&&O.alignItemsFlexStart,G&&O.secondaryAction,R&&O.selected),disabled:D},V),K=x||"li";return h&&(J.component=x||"div",J.focusVisibleClassName=Object(s.a)(O.focusVisible,q),K=o.a),G?(K=J.component||x?K:"div","li"===C&&("li"===K?K="div":"li"===J.component&&(J.component="div")),r.createElement(u.a.Provider,{value:Q},r.createElement(C,Object(a.a)({className:Object(s.a)(O.container,N),ref:H},w),r.createElement(K,J,z),z.pop()))):r.createElement(u.a.Provider,{value:Q},r.createElement(K,Object(a.a)({ref:H},J),z))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(j)}}]);
//# sourceMappingURL=26.891804fd.chunk.js.map