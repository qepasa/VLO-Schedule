(this["webpackJsonpvlo-schedule"]=this["webpackJsonpvlo-schedule"]||[]).push([[0],{116:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadScheduleEpic",(function(){return xe}));var c={};n.r(c),n.d(c,"getSchedule",(function(){return me}));var a=n(2),s=n(0),o=n.n(s),i=n(14),l=n.n(i),d=(n(116),n(45)),j=n(13),u=n(142),b=n(143),h=n(59),O=Object(u.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{margin:e.spacing(1),flex:1}}})),p=function(){var e=O(),t=Object(j.f)().classParam;return Object(a.jsx)(b.a,{className:e.toolbar,children:Object(a.jsxs)(h.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,children:["Rozk\u0142ad klasy ",t]})})},f=n(164),x=n(154),v=n(155),m=n(156),g=n(80),y=n(44),S=Object(y.createAsyncAction)("LOAD_SCHEDULE_REQUEST","LOAD_SCHEDULE_SUCCESS","LOAD_SCHEDULE_FAILURE")(),w=n(84),A=n(58),C=n(162);function k(e,t){return t>e?k(t,e):0==t?e:k(t,e%t)}function _(e){if(0==e.length)throw Error("You need to pass at least one number!");if(1==e.length)return e[0];if(2==e.length)return e[0]*e[1]/k(e[0],e[1]);var t=e.pop(),n=_(e);return t*n/k(t,n)}var D=n(85),E=n(39),I=n.n(E),T=n(145),B=n(163),L=n(146),R=n(147),F=n(148),W=n(167),G=n(149),z=n(150),N=n(151),H=n(152),M=function(e){var t=e.lessons,n=e.lessonNumber,r=e.onClose,c=e.open,s=function(){r()};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T.a,{}),Object(a.jsxs)(B.a,{onClose:s,"aria-labelledby":"lessons-list-dialog",open:c,fullWidth:!0,children:[Object(a.jsxs)(L.a,{id:"lessons-list-dialog-title",children:["Lekcja ",n]}),Object(a.jsx)(R.a,{children:Object(a.jsx)(F.a,{children:t.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(G.a,{primary:"Nazwa lekcji: ".concat(e.subject),secondary:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:["Nauczyciel: ",e.teacher]}),Object(a.jsxs)("div",{children:["Sala: ",e.classroom]})]})})},e.subject+e.teacher+e.color),Object(a.jsx)(z.a,{variant:"inset",component:"li"})]})}))})}),Object(a.jsx)(N.a,{children:Object(a.jsx)(H.a,{onClick:s,color:"primary",children:"Zamknij"})})]})]})},P=function(e){var t=e.lesson,n=e.height,r=e.lessonsByHour,c=I()(),o=c.fontSize,i=c.ref,l=Object(s.useState)(!1),d=Object(D.a)(l,2),j=d[0],u=d[1],b=Object(s.useState)([]),h=Object(D.a)(b,2),O=h[0],p=h[1],f=Object(s.useState)(0),x=Object(D.a)(f,2),v=x[0],m=x[1];return Object(a.jsxs)("div",{style:{fontSize:o,height:n,overflow:"hidden"},ref:i,onClick:function(e){var n=e.currentTarget.getBoundingClientRect();console.log(e),console.log(n),console.log(e.pageX);var c=(e.pageX-n.left)/(n.right-n.left);console.log(c);var a=1/t.duration,s=Math.floor(c/a);console.log(s),(e.target===i.current||e.target instanceof Node&&i.current.contains(e.target))&&(p(r[t.time_index+s]),m(t.time_index+s),u(!0))},children:[Object(a.jsx)("div",{style:{textAlign:"left"},children:t.subject}),Object(a.jsx)("div",{style:{textAlign:"center"},children:t.teacher}),Object(a.jsx)("div",{style:{textAlign:"right"},children:t.classroom}),Object(a.jsx)(M,{lessons:O,lessonNumber:v,onClose:function(){u(!1)},open:j})]})},U=n(165);function q(e,t){var n=Array(11).fill(0);console.log(t);for(var r=0;r<11;++r)n[r]=t[r].length;console.log(n);var c,a=_(n.filter((function(e){return 0!=e}))),s=e.map((function(e){var t=e.map((function(e){return{lesson:e}}));return t.sort((function(e,t){var n=e.lesson.time_index+e.lesson.duration-1,r=t.lesson.time_index+t.lesson.duration-1;return n==r?e.lesson.subject.localeCompare(t.lesson.subject):n>r?-1:1})),{lessons:t,totalWidth:a,reamainingWidth:a}})),o=Array(11).fill(a),i=Object(w.a)(s);try{for(i.s();!(c=i.n()).done;){var l,d=c.value,j=Object(w.a)(d.lessons);try{for(j.s();!(l=j.n()).done;){var u=l.value,b=u.lesson.time_index,h=u.lesson.time_index+u.lesson.duration,O=Math.max.apply(Math,Object(A.a)(n.slice(b,h))),p=Math.floor(o[b]/O);u.positionData={width:p};for(var f=b;f<h;++f)n[f]--,o[f]-=p}}catch(x){j.e(x)}finally{j.f()}}}catch(x){i.e(x)}finally{i.f()}return s}var J=function(e){var t=e.dayTimetable,n=e.dayIdx,r=e.currentWeekInterval,c=I()();c.fontSize,c.ref;if(!t)return Object(a.jsx)("div",{});var s=function(e){var t=Object(A.a)(Array(11)).map((function(){return Array()}));return e.flat().map((function(e){for(var n=0;n<e.duration;n++)t[e.time_index+n].push(e)})),t}(t),o=q(t,s),i=o.length>0?o[0].totalWidth:1;console.log(o);var l=Array(11).fill(i+1),d=o.map((function(e){var t,n=[],r=Object(w.a)(e.lessons);try{for(r.s();!(t=r.n()).done;){var c=t.value,o=l[c.lesson.time_index];n.push(Object(a.jsx)("div",{style:{backgroundColor:"".concat(c.lesson.color),gridRow:"".concat((o-c.positionData.width).toString()," / ").concat(o.toString()),gridColumn:"".concat((c.lesson.time_index+1).toString()," / ").concat((c.lesson.time_index+c.lesson.duration+1).toString())},children:Object(a.jsx)(P,{lesson:c.lesson,height:15*c.positionData.width/i+"vh",lessonsByHour:s})}));for(var d=c.lesson.time_index;d<c.lesson.time_index+c.lesson.duration;++d)l[d]-=c.positionData.width}}catch(j){r.e(j)}finally{r.f()}return n}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(C.a)(r[n],"iii",{locale:U.a})}),Object(a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px",gridTemplateRows:"repeat(".concat(i,", calc(15vh/").concat(i,"))")},children:d.flat()})]})},X=n(153),Q=function(e){var t=e.lessonIdx,n=e.startOfLesson,r=I()(),c=r.fontSize,s=r.ref;return Object(a.jsx)(f.a,{height:"5vh",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"elipsis",children:Object(a.jsxs)("div",{style:{fontSize:c},ref:s,children:[Object(a.jsx)("div",{children:t.toString()}),Object(a.jsx)("div",{children:Object(C.a)(n,"k:mm")+"-"+Object(C.a)(Object(X.a)(n,45),"k:mm")})]})})},Y=function(){var e=I()();e.fontSize,e.ref;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px"},children:["7:10","8:00","9:00","10:00","11:00","12:00","13:00","14:00","14:50","15:40","16:30"].map((function(e){var t=e.split(":");return(new Date).setHours(parseInt(t[0]),parseInt(t[1]))})).map((function(e,t){return Object(a.jsx)(Q,{lessonIdx:t,startOfLesson:e})}))})]})},Z={loadSchedule:S.request},K=Object(u.a)((function(e){return{timetableWrapper:{display:"grid",gridAutoFlow:"rows",gridTemplateColumns:"7vw 90vw",gridTemplateRows:"5vh repeat(5, 15vh)",rowGap:"1px",margin:e.spacing(2,1,2,1)}}})),V=Object(g.b)((function(e){return{schedule:e.schedule.schedule}}),Z)((function(e){var t=e.schedule,n=e.loadSchedule;console.log("Am I even here?");var r=Object(j.f)().classParam;console.log(r),Object(s.useEffect)((function(){n(r)}),[n,r]);var c=K(),o=new Date,i=Object(x.a)({start:Object(v.a)(o,{weekStartsOn:1}),end:Object(m.a)(o,{weekStartsOn:1})});return Object(a.jsxs)(f.a,{className:c.timetableWrapper,children:[Object(a.jsx)(Y,{}),Array.from(Array(5).keys()).map((function(e){return Object(a.jsx)(J,{dayTimetable:t[e],dayIdx:e,currentWeekInterval:i})}))]})}));function $(){return Object(a.jsx)(d.a,{basename:"/",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/about",children:Object(a.jsx)(te,{})}),Object(a.jsx)(j.a,{path:"/topics",children:Object(a.jsx)(ne,{})}),Object(a.jsxs)(j.a,{path:"/schedule/:classParam",children:[Object(a.jsx)(p,{}),Object(a.jsx)(V,{})]}),Object(a.jsx)(j.a,{path:"/",children:Object(a.jsx)(ee,{})})]})})}function ee(){return Object(a.jsxs)("h2",{children:["Home basename",Object(a.jsx)(d.b,{to:"/schedule/2E",children:"Schedule"})]})}var te=function(){return Object(a.jsx)("h2",{children:"About"})};function ne(){var e=Object(j.g)();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Topics"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"".concat(e.url,"/components"),children:"Components"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"".concat(e.url,"/props-v-state"),children:"Props v. State"})})]}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"".concat(e.path,"/:topicId"),children:Object(a.jsx)(re,{})}),Object(a.jsx)(j.a,{path:e.path,children:Object(a.jsx)("h3",{children:"Please select a topic."})})]})]})}function re(){var e=Object(j.f)().topicId;return Object(a.jsxs)("h3",{children:["Requested topic ID: ",e]})}var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},ae=n(29),se=n(161),oe=Object(y.createReducer)({loading:!0,error:!1}).handleAction(S.request,(function(){return{loading:!0,error:!1}})).handleAction(S.failure,(function(){return{loading:!1,error:!0}})).handleAction(S.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),ie=Object(y.createReducer)([]).handleAction(S.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),le=Object(ae.combineReducers)({isLoadingSchedule:oe,schedule:ie}),de=Object(ae.combineReducers)({schedule:le}),je=n(166),ue=n(81),be=n(98),he=n(157),Oe=n(158),pe=n(77),fe=n(159),xe=function(e,t,n){var r=n.api;return e.pipe(Object(he.a)(Object(y.isActionOf)(S.request)),Object(Oe.a)((function(e){return Object(ue.a)(r.schedule.getSchedule(e.payload)).pipe(Object(pe.a)(S.success),Object(fe.a)((function(e){return Object(be.a)(S.failure(e))})))})))},ve=je.a.apply(void 0,Object(A.a)(Object.values(r)));function me(e){return fetch("https://sabat.dev/api/tta?c=".concat(e,"&o=0")).then((function(e){return e.json()}))}var ge={api:{schedule:c}},ye=n(100),Se=Object(se.a)({dependencies:ge}),we=[Se],Ae=Object(ye.composeWithDevTools)(ae.applyMiddleware.apply(void 0,we)),Ce=Object(ae.createStore)(de,Ae);Se.run(ve);var ke=Ce,_e=n(101),De=n(160),Ee=Object(_e.a)({overrides:{MuiCssBaseline:{"@global":{"*":{"--scrollbarBG":"#CFD8DC","--thumbBG":"#90A4AE",scrollbarWidth:"thin",scrollbarColor:"var(--thumbBG) var(--scrollbarBG)"},"*::-webkit-scrollbar":{width:"11px"},"*::-webkit-scrollbar-track":{background:"var(--scrollbarBG)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"var(--thumbBG)",bordeRadius:"6px",border:"3px solid var(--scrollbarBG)"}}}}});l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g.a,{store:ke,children:Object(a.jsx)(De.a,{theme:Ee,children:Object(a.jsx)($,{})})})}),document.getElementById("root")),ce()}},[[123,1,2]]]);
//# sourceMappingURL=main.a34e0ee1.chunk.js.map