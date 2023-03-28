(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{169:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(63),i=a(4),o=a.n(i),l=a(8),c=a(37),s=a(0),u=a(19),p=a(137),h=a(327),d=a(325),g=a(199),b=a(226),y=a(256),m=a(257),f=a(278),v=a(235),j=a(255),O=a(60),x=a(195),w=Object(x.a)({header:{display:"flex",justifyContent:"space-around",width:900,height:50,alignItems:"center","& label":{padding:10}},select:{width:230,height:40,fontSize:13},selectHolder:{paddingLeft:30,paddingRight:30},col2:{display:"flex",flexDirection:"row"}}),C=a(62),k=a(242),N=a(6);t.default=Object(u.b)((function(e){return{zone:e.default.zone,year:e.default.year,quarter:e.default.quarter,designerList:e.designers.designersList,quarterList:e.default.quarterList,yearsList:e.default.yearsList,user:e.auth.user}}),{DesignerSelected:O.h,QuarterChanged:C.e,YearChanged:C.j,DownloadSheet:C.b,ZoneChanged:C.k,GetDesignerFeedback:O.k,DownloadSheetYear:C.c})((function(e){var t=e.designerList,a=e.quarter,i=e.zone,u=e.user,O=e.year,x=e.DesignerSelected,C=e.quarterList,L=e.yearsList,S=e.QuarterChanged,Q=e.YearChanged,D=e.DownloadSheet,z=e.ZoneChanged,E=(e.GetDesignerFeedback,e.DownloadSheetYear),A=Object(k.b)(),B=Object(s.useState)([]),P=Object(c.a)(B,2),W=P[0],q=P[1],I=(t.length>0&&(W.length,t.length),w()),M=function(e,t,a,r){var n=[];return e.forEach((function(e){var i=e.data[a]&&e.data[a][Number(t.split("Q")[1])-1];i&&i.manager&&i.manager.toLowerCase()===r.name.toLowerCase()&&n.push(e)})),n}(Object(n.a)(t),a,O,u),T=function(){for(var e=[],n=0;n<t.length;n++){var o=t[n];if(o.data[O]&&o.data[O][Number(a.split("Q")[1])-1]&&o.data[O][Number(a.split("Q")[1])-1].zone.replace(/\s/g,"").toLowerCase()===i.replace(/\s/g,"").toLowerCase()){var l=Object(r.a)({},o.data[O][Number(a.split("Q")[1])-1]);(l=Object(r.a)({},o.data[O][Number(a.split("Q")[1])-1])).values.length>=1&&e.push({data:l,name:o.name,designation:o.designation})}}return e},Y=function(){for(var e=!1,t=0;t<M.length;t++)if(M[t].data[O][Number(a.split("Q")[1])-1].publish){e=!0;break}return e},F=[],J=function(){F=[];var e=!0,r=t.filter((function(e){return W.includes(e.name)}));console.log(r);for(var n=0;n<r.length;n++)if(!r[n].data[O][Number(a.split("Q")[1])-1].publish){F.push(r[n].name),e=!1;break}return e},R=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=T(),D(u.name,t,"am");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J()?E(W.toString(),O):alert(F.toString()+"'s data missing");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(p.a,{className:I.header,children:[Object(N.jsx)(h.a,{value:O,displayEmpty:!0,className:I.selectEmpty,inputProps:{"aria-label":"Without label"},onChange:function(e){Q(e.target.value),x(void 0);var t=u.data[e.target.value][Number(a.split("Q")[1])-1].zone;z(t)},children:L.map((function(e,t){return Object(N.jsx)(d.a,{value:e,children:e},t)}))}),Object(N.jsx)(h.a,{value:a,displayEmpty:!0,className:I.selectEmpty,inputProps:{"aria-label":"Without label"},onChange:function(e){S(e.target.value),x(void 0),z(u.data[O][Number(e.target.value.split("Q")[1])-1].zone)},children:C.map((function(e,t){return Object(N.jsx)(d.a,{value:e,children:e},t)}))}),Object(N.jsx)("label",{children:i}),Object(N.jsx)(g.a,{disabled:!Y(),variant:"contained",color:"primary",onClick:function(){return R()},children:"download data"}),Object(N.jsx)(b.a,{orientation:"vertical",flexItem:!0}),Object(N.jsxs)(j.a,{className:A.formControl,children:[Object(N.jsx)(m.a,{id:"mutiple-select-label",style:{top:"-11px"},children:" Select Designer "}),Object(N.jsx)(h.a,{labelId:"mutiple-select-label",multiple:!0,value:W,onChange:function(e){var a=e.target.value;"all"!==a[a.length-1]?q(a):q(W.length===t.length?[]:t)},renderValue:function(e){return e.join(", ")},MenuProps:k.a,children:t.map((function(e,t){return Object(N.jsxs)(d.a,{value:e.name,children:[Object(N.jsx)(f.a,{children:Object(N.jsx)(y.a,{checked:W.indexOf(e.name)>-1})}),Object(N.jsx)(v.a,{primary:e.name})]},t)}))})]}),Object(N.jsx)(g.a,{disabled:W.length<1&&Y(),variant:"contained",color:"primary",onClick:function(){return G()},children:"download yearly  "})]})})}))},242:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(195),n=Object(r.a)((function(e){return{formControl:{width:200,top:-10},indeterminateColor:{color:"#f50057"},selectAllText:{fontWeight:500},selectedAll:{backgroundColor:"rgba(0, 0, 0, 0.08)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"}}}})),i={PaperProps:{style:{maxHeight:488,width:200}},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},variant:"menu"}},254:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(0),o=(a(9),a(10)),l=a(13),c=a(21),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,t){var a=e.align,l=void 0===a?"inherit":a,u=e.classes,p=e.className,h=e.color,d=void 0===h?"initial":h,g=e.component,b=e.display,y=void 0===b?"initial":b,m=e.gutterBottom,f=void 0!==m&&m,v=e.noWrap,j=void 0!==v&&v,O=e.paragraph,x=void 0!==O&&O,w=e.variant,C=void 0===w?"body1":w,k=e.variantMapping,N=void 0===k?s:k,L=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=g||(x?"p":N[C]||s[C])||"span";return i.createElement(S,Object(r.a)({className:Object(o.a)(u.root,p,"inherit"!==C&&u[C],"initial"!==d&&u["color".concat(Object(c.a)(d))],j&&u.noWrap,f&&u.gutterBottom,x&&u.paragraph,"inherit"!==l&&u["align".concat(Object(c.a)(l))],"initial"!==y&&u["display".concat(Object(c.a)(y))]),ref:t},L))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)}}]);
//# sourceMappingURL=36.517b98ef.chunk.js.map