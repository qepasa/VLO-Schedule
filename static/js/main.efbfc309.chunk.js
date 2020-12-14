/*! For license information please see main.efbfc309.chunk.js.LICENSE.txt */
(this["webpackJsonpvlo-schedule"]=this["webpackJsonpvlo-schedule"]||[]).push([[0],{141:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadScheduleEpic",(function(){return Fe}));var c={};n.r(c),n.d(c,"loadClassesEpic",(function(){return He}));var a={};n.r(a),n.d(a,"getSchedule",(function(){return Me})),n.d(a,"getClasses",(function(){return Pe}));var s=n(2),o=n(0),i=n.n(o),l=n(9),d=n.n(l),u=(n(141),n(51)),j=n(18),b=n(173),h=n(72),p=Object(b.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,marginRight:e.spacing(2),flexShrink:0}}})),O=function(){var e=p();return Object(s.jsx)("footer",{className:e.footer,children:Object(s.jsx)(h.a,{variant:"caption",align:"center",gutterBottom:!0,children:Object(s.jsxs)("div",{style:{float:"right"},children:[Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Cloud11665/sabat.dev/tree/master/api",children:"API rozk\u0142adu zaj\u0119\u0107"})," stworzone przez ",Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Cloud11665",children:"Cloud11665"})]})})})},f=n(64),x=n(97),m=n(174),v=n(175),g=n(199),y=n(176),S=n(177),C=n(202),k=n(182),w=n(205),A=n(108),_=n.n(A),E=n(60),L=n(119),D=n.n(L),I=n(120),z=n.n(I),R=Object(b.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:Object(x.a)({margin:e.spacing(1),flex:1},e.breakpoints.down("md"),{fontSize:"125%"}),sectionDesktop:Object(x.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(x.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),T=Object(j.h)(Object(E.b)((function(e){return{availableClasses:e.classes.classes}}))((function(e){var t=e.availableClasses,n=e.history,r=(Object(m.a)("(min-width:900px)"),i.a.useState(null)),c=Object(f.a)(r,2),a=c[0],o=c[1],l=Boolean(a),d=function(e){o(e.currentTarget)},u=function(){o(null)},b=function(e){return function(){u(),n.push("".concat(e))}},p=R(),O=Object(j.f)().classParam;return Object(s.jsxs)(v.a,{className:p.toolbar,children:[Object(s.jsxs)(g.a,{alignSelf:"left",children:[Object(s.jsx)(y.a,{className:p.sectionDesktop,variant:"contained",color:"primary",onClick:d,endIcon:Object(s.jsx)(_.a,{}),children:"Wybierz klas\u0119"}),Object(s.jsx)(S.a,{onClick:d,color:"primary",className:p.sectionMobile,children:Object(s.jsx)(_.a,{})}),Object(s.jsx)(C.a,{id:"classes-menu",anchorEl:a,keepMounted:!0,open:l,onClose:u,PaperProps:{style:{maxHeight:"50vh"}},children:t.map((function(e){return Object(s.jsx)(k.a,{onClick:b(e),selected:e===O,children:e},e)}))})]}),Object(s.jsxs)(h.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:p.toolbarTitle,children:["Rozk\u0142ad klasy ",O]}),Object(s.jsxs)("div",{className:p.sectionDesktop,children:[Object(s.jsx)(w.a,{title:"Wy\u015blij do nas maila!","aria-label":"send-feedback-tooltip",arrow:!0,children:Object(s.jsx)(S.a,{"aria-label":"send-feedback",color:"inherit",component:"a",href:"mailto:abababa@babababa.com?cc=babababa@babababa.com&subject=Zg%C5%82o%C5%9B%20B%C5%82%C4%85d",target:"_blank",children:Object(s.jsx)(D.a,{})})}),Object(s.jsx)(w.a,{title:"Kod. PogU","aria-label":"github-repo-tooltip",arrow:!0,children:Object(s.jsx)(S.a,{"aria-label":"github-repo",color:"inherit",component:"a",href:"https://github.com/qepasa/VLO-Schedule",target:"_blank",children:Object(s.jsx)(z.a,{})})})]})]})}))),B=n(190),N=n(191),F=n(192),H=n(25),W=Object(H.createAsyncAction)("LOAD_CLASSES_REQUEST","LOAD_CLASSES_SUCCESS","LOAD_CLASSES_FAILURE")(),M=Object(H.createAsyncAction)("LOAD_SCHEDULE_REQUEST","LOAD_SCHEDULE_SUCCESS","LOAD_SCHEDULE_FAILURE")(),P=n(98),G=n(65),U=n(198);function q(e,t){return t>e?q(t,e):0==t?e:q(t,e%t)}function J(e){if(0==e.length)throw Error("You need to pass at least one number!");if(1==e.length)return e[0];if(2==e.length)return e[0]*e[1]/q(e[0],e[1]);var t=e.pop(),n=J(e);return t*n/q(t,n)}var Q=n(44),Z=n.n(Q),K=n(183),V=n(203),X=n(184),Y=n(185),$=n(181),ee=n(153),te=n(186),ne=n(187),re=n(188),ce=function(e){var t=e.lessons,n=e.lessonNumber,r=e.onClose,c=e.open,a=function(){r()};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(K.a,{}),Object(s.jsxs)(V.a,{onClose:a,"aria-labelledby":"lessons-list-dialog",open:c,fullWidth:!0,children:[Object(s.jsxs)(X.a,{id:"lessons-list-dialog-title",children:["Lekcja ",n]}),Object(s.jsx)(Y.a,{children:Object(s.jsx)($.a,{children:t.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ee.a,{children:Object(s.jsx)(te.a,{primary:"".concat(e.subject).concat(e.group?" - "+e.group:""),secondary:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{children:["Nauczyciel: ",e.teacher]}),Object(s.jsxs)("div",{children:["Sala: ",e.classroom]})]})})},e.subject+e.teacher+e.color),Object(s.jsx)(ne.a,{variant:"inset",component:"li"})]})}))})}),Object(s.jsx)(re.a,{children:Object(s.jsx)(y.a,{onClick:a,color:"primary",children:"Zamknij"})})]})]})},ae=Object(b.a)((function(e){return{lessonTile:{padding:e.spacing(.2)},textStyle:{}}})),se=function(e){var t,n=e.lesson,r=e.height,c=e.lessonsByHour,a=Z()(),i=a.fontSize,l=a.ref,d=Object(o.useState)(!1),u=Object(f.a)(d,2),j=u[0],b=u[1],h=Object(o.useState)([]),p=Object(f.a)(h,2),O=p[0],x=p[1],m=Object(o.useState)(0),v=Object(f.a)(m,2),g=v[0],y=v[1],S=ae(),C=("#"===(t=n.color).slice(0,1)&&(t=t.slice(1)),3===t.length&&(t=t.split("").map((function(e){return e+e})).join("")),(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=70?"black":"white");return Object(s.jsxs)("div",{style:{fontSize:i,height:r,overflow:"hidden",display:"flex",flexDirection:"column"},ref:l,onClick:function(e){var t=e.currentTarget.getBoundingClientRect(),r=(e.pageX-t.left)/(t.right-t.left),a=1/n.duration,s=Math.floor(r/a);(e.target===l.current||e.target instanceof Node&&l.current.contains(e.target))&&(x(c[n.time_index+s]),y(n.time_index+s),b(!0))},className:S.lessonTile,children:[Object(s.jsx)("div",{style:{textAlign:"left",flex:"1 0 auto",color:C},className:S.textStyle,children:n.teacher}),Object(s.jsx)("div",{style:{textAlign:"center",flex:"1 0 auto",color:C},className:S.textStyle,children:n.subject}),Object(s.jsxs)("div",{style:{flexShrink:0,color:C},className:S.textStyle,children:[Object(s.jsx)("div",{style:{float:"left",textAlign:"left"},children:n.classroom}),Object(s.jsx)("div",{style:{float:"right",textAlign:"right"},children:n.group})]}),Object(s.jsx)(ce,{lessons:O,lessonNumber:g,onClose:function(){b(!1)},open:j})]})},oe=n(200);function ie(e,t){for(var n=Array(11).fill(0),r=0;r<11;++r)n[r]=t[r].length;var c,a=J(n.filter((function(e){return 0!=e}))),s=e.map((function(e){var t=e.map((function(e){return e}));return t.sort((function(e,t){var n=e.time_index+e.duration-1,r=t.time_index+t.duration-1;return n==r?e.subject.localeCompare(t.subject):n>r?-1:1})),{lessons:t,totalWidth:a,ceil:a,floor:0}})),o=Array(11).fill(a),i=Object(P.a)(s);try{for(i.s();!(c=i.n()).done;){var l,d=c.value,u=Object(P.a)(d.lessons);try{for(u.s();!(l=u.n()).done;){for(var j=l.value,b=j.time_index,h=j.time_index+j.duration,p=(Math.max.apply(Math,Object(G.a)(n.slice(b,h))),a+1),O=b;O<h;++O)p=Math.min(p,Math.floor(o[O]/n[O]));j.width=p;for(var f=b;f<h;++f)n[f]--,o[f]-=p}}catch(x){u.e(x)}finally{u.f()}}}catch(x){i.e(x)}finally{i.f()}return s}var le=function(e){var t=e.dayTimetable,n=e.dayIdx,r=e.currentWeekInterval,c=Z()();c.fontSize,c.ref;if(!t)return Object(s.jsx)("div",{});for(var a=function(e){var t=Object(G.a)(Array(11)).map((function(){return Array()}));return e.flat().map((function(e){for(var n=0;n<e.duration;n++)t[e.time_index+n].push(e)})),t}(t),o=ie(t,a),i=o.length>0?o[0].totalWidth:1,l=Array(11),d=0;d<11;++d)l[d]={bottom:1,top:i+1};var u=!0,j=o.map((function(e){var t,n=[],r=Object(P.a)(e.lessons);try{for(r.s();!(t=r.n()).done;){var c=t.value,o=l[c.time_index],d=void 0,j=void 0;u?(d=o.bottom,j=o.bottom+c.width):(j=o.top,d=o.top-c.width),n.push(Object(s.jsx)("div",{style:{backgroundColor:"".concat(c.color),gridRow:"".concat(d.toString()," / ").concat(j.toString()),gridColumn:"".concat((c.time_index+1).toString()," / ").concat((c.time_index+c.duration+1).toString())},children:Object(s.jsx)(se,{lesson:c,height:15*c.width/i+"vh",lessonsByHour:a})}));for(var b=c.time_index;b<c.time_index+c.duration;b++)u?l[b].bottom=j:l[b].top=d;u=!u}}catch(h){r.e(h)}finally{r.f()}return n}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(U.a)(r[n],"iii",{locale:oe.a})}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px",gridTemplateRows:"repeat(".concat(i,", calc(15vh/").concat(i,"))")},children:j.flat()})]})},de=n(189),ue=function(e){var t=e.lessonIdx,n=e.startOfLesson,r=Z()(),c=r.fontSize,a=r.ref;return Object(s.jsx)(g.a,{height:"5vh",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"elipsis",children:Object(s.jsxs)("div",{style:{fontSize:c},ref:a,children:[Object(s.jsx)("div",{children:t.toString()}),Object(s.jsx)("div",{children:Object(U.a)(n,"HH:mm")+"-"+Object(U.a)(Object(de.a)(n,45),"HH:mm")})]})})},je=function(){var e=Z()();e.fontSize,e.ref;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px"},children:["7:10","8:00","9:00","10:00","11:00","12:00","13:00","14:00","14:50","15:40","16:30"].map((function(e){var t=e.split(":");return(new Date).setHours(parseInt(t[0]),parseInt(t[1]))})).map((function(e,t){return Object(s.jsx)(ue,{lessonIdx:t,startOfLesson:e})}))})]})},be={loadSchedule:M.request,loadClasses:W.request},he=Object(b.a)((function(e){return{timetableWrapper:{display:"grid",gridAutoFlow:"rows",gridTemplateColumns:"7vw 90vw",gridTemplateRows:"5vh repeat(5, 15vh)",rowGap:"1px",margin:e.spacing(2,1,2,1)}}})),pe=Object(E.b)((function(e){return{schedule:e.schedule.schedule}}),be)((function(e){var t=e.schedule,n=e.loadSchedule,r=e.loadClasses;console.log("Am I even here?");var c=Object(j.f)().classParam;console.log(c),Object(o.useEffect)((function(){r()}),[r]),Object(o.useEffect)((function(){n(c)}),[n,c]);var a=he(),i=new Date,l=Object(B.a)({start:Object(N.a)(i,{weekStartsOn:1}),end:Object(F.a)(i,{weekStartsOn:1})});return Object(s.jsxs)(g.a,{className:a.timetableWrapper,children:[Object(s.jsx)(je,{}),Array.from(Array(5).keys()).map((function(e){return Object(s.jsx)(le,{dayTimetable:t[e],dayIdx:e,currentWeekInterval:l})}))]})}));function Oe(){return Object(s.jsx)(u.a,{basename:"/",children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/about",children:Object(s.jsx)(xe,{})}),Object(s.jsx)(j.a,{path:"/topics",children:Object(s.jsx)(me,{})}),Object(s.jsx)(j.a,{path:"/schedule/:classParam",children:Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[Object(s.jsxs)("div",{style:{flex:"1 0 auto"},children:[Object(s.jsx)(T,{}),Object(s.jsx)(pe,{})]}),Object(s.jsx)(O,{})]})}),Object(s.jsx)(j.a,{path:"/",children:Object(s.jsx)(fe,{})})]})})}function fe(){return Object(s.jsxs)("h2",{children:["Home basename",Object(s.jsx)(u.b,{to:"/schedule/2E",children:"Schedule"})]})}var xe=function(){return Object(s.jsx)("h2",{children:"About"})};function me(){var e=Object(j.g)();return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Topics"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{to:"".concat(e.url,"/components"),children:"Components"})}),Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{to:"".concat(e.url,"/props-v-state"),children:"Props v. State"})})]}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"".concat(e.path,"/:topicId"),children:Object(s.jsx)(ve,{})}),Object(s.jsx)(j.a,{path:e.path,children:Object(s.jsx)("h3",{children:"Please select a topic."})})]})]})}function ve(){var e=Object(j.f)().topicId;return Object(s.jsxs)("h3",{children:["Requested topic ID: ",e]})}var ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},ye=n(28),Se=n(197),Ce=Object(H.createReducer)({loading:!0,error:!1}).handleAction(M.request,(function(){return{loading:!0,error:!1}})).handleAction(M.failure,(function(){return{loading:!1,error:!0}})).handleAction(M.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),ke=Object(H.createReducer)([]).handleAction(M.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),we=Object(ye.combineReducers)({isLoadingSchedule:Ce,schedule:ke}),Ae=Object(H.createReducer)({loading:!0,error:!1}).handleAction(W.request,(function(){return{loading:!0,error:!1}})).handleAction(W.failure,(function(){return{loading:!1,error:!0}})).handleAction(W.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),_e=Object(H.createReducer)([]).handleAction(W.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),Ee=Object(ye.combineReducers)({isLoadingClasses:Ae,classes:_e}),Le=Object(ye.combineReducers)({schedule:we,classes:Ee}),De=n(204),Ie=n(95),ze=n(121),Re=n(193),Te=n(194),Be=n(92),Ne=n(195),Fe=function(e,t,n){var r=n.api;return e.pipe(Object(Re.a)(Object(H.isActionOf)(M.request)),Object(Te.a)((function(e){return Object(Ie.a)(r.schedule.getSchedule(e.payload)).pipe(Object(Be.a)(M.success),Object(Ne.a)((function(e){return Object(ze.a)(M.failure(e))})))})))},He=function(e,t,n){var r=n.api;return e.pipe(Object(Re.a)(Object(H.isActionOf)(W.request)),Object(Te.a)((function(){return Object(Ie.a)(r.schedule.getClasses()).pipe(Object(Be.a)(W.success),Object(Ne.a)((function(e){return Object(ze.a)(W.failure(e))})))})))},We=De.a.apply(void 0,Object(G.a)(Object.values(r)).concat(Object(G.a)(Object.values(c))));function Me(e){return fetch("https://sabat.dev/api/tta?c=".concat(e,"&o=0")).then((function(e){return e.json()}))}function Pe(){return fetch("https://sabat.dev/api/cla").then((function(e){return e.json()}))}var Ge={api:{schedule:a}},Ue=n(123),qe=Object(Se.a)({dependencies:Ge}),Je=[qe],Qe=Object(Ue.composeWithDevTools)(ye.applyMiddleware.apply(void 0,Je)),Ze=Object(ye.createStore)(Le,Qe);qe.run(We);var Ke=Ze,Ve=n(124),Xe=n(196),Ye=Object(Ve.a)({overrides:{MuiCssBaseline:{"@global":{body:{"-webkit-text-size-adjust":"none","text-size-adjust":"none","-moz-text-size-adjust":"none","-ms-text-size-adjuist":"none"},"*":{"--scrollbarBG":"#CFD8DC","--thumbBG":"#90A4AE",scrollbarWidth:"thin",scrollbarColor:"var(--thumbBG) var(--scrollbarBG)"},"*::-webkit-scrollbar":{width:"11px"},"*::-webkit-scrollbar-track":{background:"var(--scrollbarBG)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"var(--thumbBG)",bordeRadius:"6px",border:"3px solid var(--scrollbarBG)"}}}}});d.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(E.a,{store:Ke,children:Object(s.jsx)(Xe.a,{theme:Ye,children:Object(s.jsx)(Oe,{})})})}),document.getElementById("root")),ge()}},[[149,1,2]]]);
//# sourceMappingURL=main.efbfc309.chunk.js.map