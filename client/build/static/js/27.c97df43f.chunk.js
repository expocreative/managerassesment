(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[27,42],{149:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(0),r=n.n(a),o=n(19),s=n(328),c=n(320),d=n(321),l=n(322),u=n(323),f=n(199),b=n(195),p=n(264),m=n(6),g=r.a.forwardRef((function(e,t){return Object(m.jsx)(p.a,Object(i.a)({direction:"up",ref:t},e))})),v=Object(b.a)({root:{}});t.default=Object(o.b)((function(e){return{}}),null)((function(e){var t=e.designer,n=e.show,i=e.Clicked,a=(v(),function(e){i(e)});return Object(m.jsxs)(s.a,{open:n,TransitionComponent:g,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(m.jsx)(c.a,{id:"alert-dialog-slide-title",children:"Feedback"}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(l.a,{id:"alert-dialog-slide-description",children:[t&&t.name," is not assigned with you in this quarter. do you still want to give feedback."]})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(f.a,{onClick:function(){return a("no")},color:"primary",children:" no "}),Object(m.jsx)(f.a,{onClick:function(){return a("yes")},color:"primary",children:" yes "})]})]})}))},152:function(e,t,n){"use strict";n.r(t);var i=n(37),a=n(0),r=n(19),o=n(274),s=n(275),c=n(235),d=n(218),l=n(149),u=n(60),f=n(6);t.default=Object(r.b)((function(e){return{designerList:e.designers.designersList,user:e.auth.user,quarter:e.default.quarter,year:e.default.year}}),{DesignerSelected:u.h})((function(e){var t=e.designerList,n=e.year,r=e.quarter,u=e.user,b=e.DesignerSelected,p=Object(d.a)(),m=Object(a.useState)(!1),g=Object(i.a)(m,2),v=g[0],y=g[1],j=Object(a.useState)(""),h=Object(i.a)(j,2),O=h[0],x=h[1],w=function(){for(var e={},n=0;n<t.length;n++)if(t[n].name===O){e=t[n];break}return e};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{className:p.list,children:t.map((function(e){var t=e.data[n][Number(r.split("Q")[1]-1)];return function(e){return e&&e[Number(r.split("Q")[1])-1]&&e[Number(r.split("Q")[1])-1].manager!==u.name}(e.data[n])&&Object(f.jsx)(s.a,{value:e.name,button:!0,onClick:function(){return function(e){y(!0),x(e.name)}(e)},children:Object(f.jsx)(c.a,{primary:e.name+" "+(t.suffix?t.suffix:""),style:{paddingLeft:10}})},e.name)}))}),Object(f.jsx)(l.default,{show:v,designer:w(),Clicked:function(e){"yes"===e&&b(w()),y(!1)}})]})}))},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0);function a(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},215:function(e,t,n){"use strict";var i=n(0),a=i.createContext({});t.a=a},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(195),a=Object(i.a)({root:{width:350,height:window.innerHeight-300},noMsg:{display:"flex",height:100,justifyContent:"center",alignItems:"center"},subHeading:{fontSize:11,color:"blue",marginLeft:25,marginTop:-10,paddingBottom:10}})},235:function(e,t,n){"use strict";var i=n(2),a=n(5),r=n(0),o=(n(9),n(10)),s=n(13),c=n(254),d=n(215),l=r.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,u=e.disableTypography,f=void 0!==u&&u,b=e.inset,p=void 0!==b&&b,m=e.primary,g=e.primaryTypographyProps,v=e.secondary,y=e.secondaryTypographyProps,j=Object(a.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),h=r.useContext(d.a).dense,O=null!=m?m:n;null==O||O.type===c.a||f||(O=r.createElement(c.a,Object(i.a)({variant:h?"body2":"body1",className:s.primary,component:"span",display:"block"},g),O));var x=v;return null==x||x.type===c.a||f||(x=r.createElement(c.a,Object(i.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},y),x)),r.createElement("div",Object(i.a)({className:Object(o.a)(s.root,l,h&&s.dense,p&&s.inset,O&&x&&s.multiline),ref:t},j),O,x)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(l)},264:function(e,t,n){"use strict";var i=n(2),a=n(5),r=n(0),o=(n(9),n(11)),s=n(59),c=n(141),d=n(15),l=n(64),u=n(65),f=n(41);function b(e,t){var n=function(e,t){var n,i=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var r=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");r=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-i.left,"px)"):"right"===e?"translateX(-".concat(i.left+i.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-i.top,"px)"):"translateY(-".concat(i.top+i.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var p={enter:u.b.enteringScreen,exit:u.b.leavingScreen},m=r.forwardRef((function(e,t){var n=e.children,u=e.direction,m=void 0===u?"down":u,g=e.in,v=e.onEnter,y=e.onEntered,j=e.onEntering,h=e.onExit,O=e.onExited,x=e.onExiting,w=e.style,E=e.timeout,C=void 0===E?p:E,k=e.TransitionComponent,N=void 0===k?c.a:k,T=Object(a.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),L=Object(l.a)(),S=r.useRef(null),I=r.useCallback((function(e){S.current=o.findDOMNode(e)}),[]),P=Object(d.a)(n.ref,I),R=Object(d.a)(P,t),V=function(e){return function(t){e&&(void 0===t?e(S.current):e(S.current,t))}},B=V((function(e,t){b(m,e),Object(f.b)(e),v&&v(e,t)})),M=V((function(e,t){var n=Object(f.a)({timeout:C,style:w},{mode:"enter"});e.style.webkitTransition=L.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:L.transitions.easing.easeOut})),e.style.transition=L.transitions.create("transform",Object(i.a)({},n,{easing:L.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",j&&j(e,t)})),D=V(y),F=V(x),A=V((function(e){var t=Object(f.a)({timeout:C,style:w},{mode:"exit"});e.style.webkitTransition=L.transitions.create("-webkit-transform",Object(i.a)({},t,{easing:L.transitions.easing.sharp})),e.style.transition=L.transitions.create("transform",Object(i.a)({},t,{easing:L.transitions.easing.sharp})),b(m,e),h&&h(e)})),q=V((function(e){e.style.webkitTransition="",e.style.transition="",O&&O(e)})),z=r.useCallback((function(){S.current&&b(m,S.current)}),[m]);return r.useEffect((function(){if(!g&&"down"!==m&&"right"!==m){var e=Object(s.a)((function(){S.current&&b(m,S.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[m,g]),r.useEffect((function(){g||z()}),[g,z]),r.createElement(N,Object(i.a)({nodeRef:S,onEnter:B,onEntered:D,onEntering:M,onExit:A,onExited:q,onExiting:F,appear:!0,in:g,timeout:C},T),(function(e,t){return r.cloneElement(n,Object(i.a)({ref:R,style:Object(i.a)({visibility:"exited"!==e||g?void 0:"hidden"},w,n.props.style)},t))}))}));t.a=m},274:function(e,t,n){"use strict";var i=n(2),a=n(5),r=n(0),o=(n(9),n(10)),s=n(13),c=n(215),d=r.forwardRef((function(e,t){var n=e.children,s=e.classes,d=e.className,l=e.component,u=void 0===l?"ul":l,f=e.dense,b=void 0!==f&&f,p=e.disablePadding,m=void 0!==p&&p,g=e.subheader,v=Object(a.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),y=r.useMemo((function(){return{dense:b}}),[b]);return r.createElement(c.a.Provider,{value:y},r.createElement(u,Object(i.a)({className:Object(o.a)(s.root,d,b&&s.dense,!m&&s.padding,g&&s.subheader),ref:t},v),g,n))}));t.a=Object(s.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},275:function(e,t,n){"use strict";var i=n(2),a=n(5),r=n(0),o=(n(9),n(10)),s=n(13),c=n(139),d=n(209),l=n(15),u=n(215),f=n(11),b="undefined"===typeof window?r.useEffect:r.useLayoutEffect,p=r.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,p=e.autoFocus,m=void 0!==p&&p,g=e.button,v=void 0!==g&&g,y=e.children,j=e.classes,h=e.className,O=e.component,x=e.ContainerComponent,w=void 0===x?"li":x,E=e.ContainerProps,C=(E=void 0===E?{}:E).className,k=Object(a.a)(E,["className"]),N=e.dense,T=void 0!==N&&N,L=e.disabled,S=void 0!==L&&L,I=e.disableGutters,P=void 0!==I&&I,R=e.divider,V=void 0!==R&&R,B=e.focusVisibleClassName,M=e.selected,D=void 0!==M&&M,F=Object(a.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=r.useContext(u.a),q={dense:T||A.dense||!1,alignItems:s},z=r.useRef(null);b((function(){m&&z.current&&z.current.focus()}),[m]);var $=r.Children.toArray(y),H=$.length&&Object(d.a)($[$.length-1],["ListItemSecondaryAction"]),Q=r.useCallback((function(e){z.current=f.findDOMNode(e)}),[]),X=Object(l.a)(Q,t),Y=Object(i.a)({className:Object(o.a)(j.root,h,q.dense&&j.dense,!P&&j.gutters,V&&j.divider,S&&j.disabled,v&&j.button,"center"!==s&&j.alignItemsFlexStart,H&&j.secondaryAction,D&&j.selected),disabled:S},F),G=O||"li";return v&&(Y.component=O||"div",Y.focusVisibleClassName=Object(o.a)(j.focusVisible,B),G=c.a),H?(G=Y.component||O?G:"div","li"===w&&("li"===G?G="div":"li"===Y.component&&(Y.component="div")),r.createElement(u.a.Provider,{value:q},r.createElement(w,Object(i.a)({className:Object(o.a)(j.container,C),ref:X},k),r.createElement(G,Y,$),$.pop()))):r.createElement(u.a.Provider,{value:q},r.createElement(G,Object(i.a)({ref:X},Y),$))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)}}]);
//# sourceMappingURL=27.c97df43f.chunk.js.map