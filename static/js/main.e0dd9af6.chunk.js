(this["webpackJsonpvlo-schedule"]=this["webpackJsonpvlo-schedule"]||[]).push([[0],{130:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"loadScheduleEpic",(function(){return Ee}));var r={};n.r(r),n.d(r,"loadClassesEpic",(function(){return ke}));var a={};n.r(a),n.d(a,"getSchedule",(function(){return Le})),n.d(a,"getClasses",(function(){return Re}));var o=n(2),s=n(0),i=n.n(s),l=n(11),u=n.n(l),d=(n(130),n(49)),j=n(16),b=n(61),h=n(164),O=n(165),f=n(187),p=n(167),x=n(190),v=n(170),g=n(69),m=n(108),y=n.n(m),S=n(56),C=Object(h.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{margin:e.spacing(1),flex:1}}})),A=Object(j.h)(Object(S.b)((function(e){return{availableClasses:e.classes.classes}}))((function(e){var t=e.availableClasses,n=e.history,c=i.a.useState(null),r=Object(b.a)(c,2),a=r[0],s=r[1],l=Boolean(a);console.log(t);var u=function(){s(null)},d=function(e){return function(){u(),n.push("".concat(e))}},h=C(),m=Object(j.f)().classParam;return Object(o.jsxs)(O.a,{className:h.toolbar,children:[Object(o.jsxs)(f.a,{alignSelf:"left",children:[Object(o.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(e){s(e.currentTarget)},endIcon:Object(o.jsx)(y.a,{}),children:"Wybierz klas\u0119"}),Object(o.jsx)(x.a,{id:"classes-menu",anchorEl:a,keepMounted:!0,open:l,onClose:u,PaperProps:{style:{maxHeight:"50vh"}},children:t.map((function(e){return Object(o.jsx)(v.a,{onClick:d(e),selected:e===m,children:e},e)}))})]}),Object(o.jsxs)(g.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:h.toolbarTitle,children:["Rozk\u0142ad klasy ",m]})]})}))),w=n(178),E=n(179),k=n(180),_=n(23),L=Object(_.createAsyncAction)("LOAD_CLASSES_REQUEST","LOAD_CLASSES_SUCCESS","LOAD_CLASSES_FAILURE")(),R=Object(_.createAsyncAction)("LOAD_SCHEDULE_REQUEST","LOAD_SCHEDULE_SUCCESS","LOAD_SCHEDULE_FAILURE")(),I=n(94),T=n(62),B=n(186);function D(e,t){return t>e?D(t,e):0==t?e:D(t,e%t)}function z(e){if(0==e.length)throw Error("You need to pass at least one number!");if(1==e.length)return e[0];if(2==e.length)return e[0]*e[1]/D(e[0],e[1]);var t=e.pop(),n=z(e);return t*n/D(t,n)}var F=n(42),H=n.n(F),W=n(171),G=n(191),M=n(172),P=n(173),U=n(169),q=n(144),N=n(174),J=n(175),Q=n(176),X=function(e){var t=e.lessons,n=e.lessonNumber,c=e.onClose,r=e.open,a=function(){c()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(W.a,{}),Object(o.jsxs)(G.a,{onClose:a,"aria-labelledby":"lessons-list-dialog",open:r,fullWidth:!0,children:[Object(o.jsxs)(M.a,{id:"lessons-list-dialog-title",children:["Lekcja ",n]}),Object(o.jsx)(P.a,{children:Object(o.jsx)(U.a,{children:t.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(q.a,{children:Object(o.jsx)(N.a,{primary:"".concat(e.subject).concat(e.group?" - "+e.group:""),secondary:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:["Nauczyciel: ",e.teacher]}),Object(o.jsxs)("div",{children:["Sala: ",e.classroom]})]})})},e.subject+e.teacher+e.color),Object(o.jsx)(J.a,{variant:"inset",component:"li"})]})}))})}),Object(o.jsx)(Q.a,{children:Object(o.jsx)(p.a,{onClick:a,color:"primary",children:"Zamknij"})})]})]})},Y=function(e){var t=e.lesson,n=e.height,c=e.lessonsByHour,r=H()(),a=r.fontSize,i=r.ref,l=Object(s.useState)(!1),u=Object(b.a)(l,2),d=u[0],j=u[1],h=Object(s.useState)([]),O=Object(b.a)(h,2),f=O[0],p=O[1],x=Object(s.useState)(0),v=Object(b.a)(x,2),g=v[0],m=v[1];return Object(o.jsxs)("div",{style:{fontSize:a,height:n,overflow:"hidden"},ref:i,onClick:function(e){var n=e.currentTarget.getBoundingClientRect();console.log(e),console.log(n),console.log(e.pageX);var r=(e.pageX-n.left)/(n.right-n.left);console.log(r);var a=1/t.duration,o=Math.floor(r/a);console.log(o),(e.target===i.current||e.target instanceof Node&&i.current.contains(e.target))&&(p(c[t.time_index+o]),m(t.time_index+o),j(!0))},children:[Object(o.jsxs)("div",{style:{textAlign:"left"},children:[t.subject," ",t.group]}),Object(o.jsx)("div",{style:{textAlign:"center"},children:t.teacher}),Object(o.jsx)("div",{style:{textAlign:"right"},children:t.classroom}),Object(o.jsx)(X,{lessons:f,lessonNumber:g,onClose:function(){j(!1)},open:d})]})},Z=n(188);function K(e,t){var n=Array(11).fill(0);console.log(t);for(var c=0;c<11;++c)n[c]=t[c].length;console.log(n);var r,a=z(n.filter((function(e){return 0!=e}))),o=e.map((function(e){var t=e.map((function(e){return e}));return t.sort((function(e,t){var n=e.time_index+e.duration-1,c=t.time_index+t.duration-1;return n==c?e.subject.localeCompare(t.subject):n>c?-1:1})),{lessons:t,totalWidth:a,ceil:a,floor:0}})),s=Array(11).fill(a),i=Object(I.a)(o);try{for(i.s();!(r=i.n()).done;){var l,u=r.value,d=Object(I.a)(u.lessons);try{for(d.s();!(l=d.n()).done;){for(var j=l.value,b=j.time_index,h=j.time_index+j.duration,O=(Math.max.apply(Math,Object(T.a)(n.slice(b,h))),a+1),f=b;f<h;++f)O=Math.min(O,Math.floor(s[f]/n[f]));j.width=O;for(var p=b;p<h;++p)n[p]--,s[p]-=O}}catch(x){d.e(x)}finally{d.f()}}}catch(x){i.e(x)}finally{i.f()}return o}var V=function(e){var t=e.dayTimetable,n=e.dayIdx,c=e.currentWeekInterval,r=H()();r.fontSize,r.ref;if(!t)return Object(o.jsx)("div",{});for(var a=function(e){var t=Object(T.a)(Array(11)).map((function(){return Array()}));return e.flat().map((function(e){for(var n=0;n<e.duration;n++)t[e.time_index+n].push(e)})),t}(t),s=K(t,a),i=s.length>0?s[0].totalWidth:1,l=Array(11),u=0;u<11;++u)l[u]={bottom:1,top:i+1};var d=!0;console.log(l);var j=s.map((function(e){var t,n=[],c=Object(I.a)(e.lessons);try{for(c.s();!(t=c.n()).done;){var r=t.value,s=l[r.time_index],u=void 0,j=void 0;d?(u=s.bottom,j=s.bottom+r.width):(j=s.top,u=s.top-r.width),console.log("fromBottom: ".concat(d," lesson:")),console.log(r),console.log("gridRowStart: ".concat(u,", gridRowEnd: ").concat(j)),n.push(Object(o.jsx)("div",{style:{backgroundColor:"".concat(r.color),gridRow:"".concat(u.toString()," / ").concat(j.toString()),gridColumn:"".concat((r.time_index+1).toString()," / ").concat((r.time_index+r.duration+1).toString())},children:Object(o.jsx)(Y,{lesson:r,height:15*r.width/i+"vh",lessonsByHour:a})}));for(var b=r.time_index;b<r.time_index+r.duration;b++)d?l[b].bottom=j:l[b].top=u;console.log(l),d=!d}}catch(h){c.e(h)}finally{c.f()}return n}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(B.a)(c[n],"iii",{locale:Z.a})}),Object(o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px",gridTemplateRows:"repeat(".concat(i,", calc(15vh/").concat(i,"))")},children:j.flat()})]})},$=n(177),ee=function(e){var t=e.lessonIdx,n=e.startOfLesson,c=H()(),r=c.fontSize,a=c.ref;return Object(o.jsx)(f.a,{height:"5vh",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"elipsis",children:Object(o.jsxs)("div",{style:{fontSize:r},ref:a,children:[Object(o.jsx)("div",{children:t.toString()}),Object(o.jsx)("div",{children:Object(B.a)(n,"HH:mm")+"-"+Object(B.a)(Object($.a)(n,45),"HH:mm")})]})})},te=function(){var e=H()();e.fontSize,e.ref;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px"},children:["7:10","8:00","9:00","10:00","11:00","12:00","13:00","14:00","14:50","15:40","16:30"].map((function(e){var t=e.split(":");return(new Date).setHours(parseInt(t[0]),parseInt(t[1]))})).map((function(e,t){return Object(o.jsx)(ee,{lessonIdx:t,startOfLesson:e})}))})]})},ne={loadSchedule:R.request,loadClasses:L.request},ce=Object(h.a)((function(e){return{timetableWrapper:{display:"grid",gridAutoFlow:"rows",gridTemplateColumns:"7vw 90vw",gridTemplateRows:"5vh repeat(5, 15vh)",rowGap:"1px",margin:e.spacing(2,1,2,1)}}})),re=Object(S.b)((function(e){return{schedule:e.schedule.schedule}}),ne)((function(e){var t=e.schedule,n=e.loadSchedule,c=e.loadClasses;console.log("Am I even here?");var r=Object(j.f)().classParam;console.log(r),Object(s.useEffect)((function(){c()}),[c]),Object(s.useEffect)((function(){n(r)}),[n,r]);var a=ce(),i=new Date,l=Object(w.a)({start:Object(E.a)(i,{weekStartsOn:1}),end:Object(k.a)(i,{weekStartsOn:1})});return Object(o.jsxs)(f.a,{className:a.timetableWrapper,children:[Object(o.jsx)(te,{}),Array.from(Array(5).keys()).map((function(e){return Object(o.jsx)(V,{dayTimetable:t[e],dayIdx:e,currentWeekInterval:l})}))]})}));function ae(){return Object(o.jsx)(d.a,{basename:"/",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/about",children:Object(o.jsx)(se,{})}),Object(o.jsx)(j.a,{path:"/topics",children:Object(o.jsx)(ie,{})}),Object(o.jsxs)(j.a,{path:"/schedule/:classParam",children:[Object(o.jsx)(A,{}),Object(o.jsx)(re,{})]}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(oe,{})})]})})}function oe(){return Object(o.jsxs)("h2",{children:["Home basename",Object(o.jsx)(d.b,{to:"/schedule/2E",children:"Schedule"})]})}var se=function(){return Object(o.jsx)("h2",{children:"About"})};function ie(){var e=Object(j.g)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Topics"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"".concat(e.url,"/components"),children:"Components"})}),Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"".concat(e.url,"/props-v-state"),children:"Props v. State"})})]}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"".concat(e.path,"/:topicId"),children:Object(o.jsx)(le,{})}),Object(o.jsx)(j.a,{path:e.path,children:Object(o.jsx)("h3",{children:"Please select a topic."})})]})]})}function le(){var e=Object(j.f)().topicId;return Object(o.jsxs)("h3",{children:["Requested topic ID: ",e]})}var ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},de=n(27),je=n(185),be=Object(_.createReducer)({loading:!0,error:!1}).handleAction(R.request,(function(){return{loading:!0,error:!1}})).handleAction(R.failure,(function(){return{loading:!1,error:!0}})).handleAction(R.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),he=Object(_.createReducer)([]).handleAction(R.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),Oe=Object(de.combineReducers)({isLoadingSchedule:be,schedule:he}),fe=Object(_.createReducer)({loading:!0,error:!1}).handleAction(L.request,(function(){return{loading:!0,error:!1}})).handleAction(L.failure,(function(){return{loading:!1,error:!0}})).handleAction(L.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),pe=Object(_.createReducer)([]).handleAction(L.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),xe=Object(de.combineReducers)({isLoadingClasses:fe,classes:pe}),ve=Object(de.combineReducers)({schedule:Oe,classes:xe}),ge=n(192),me=n(92),ye=n(109),Se=n(181),Ce=n(182),Ae=n(89),we=n(183),Ee=function(e,t,n){var c=n.api;return e.pipe(Object(Se.a)(Object(_.isActionOf)(R.request)),Object(Ce.a)((function(e){return Object(me.a)(c.schedule.getSchedule(e.payload)).pipe(Object(Ae.a)(R.success),Object(we.a)((function(e){return Object(ye.a)(R.failure(e))})))})))},ke=function(e,t,n){var c=n.api;return e.pipe(Object(Se.a)(Object(_.isActionOf)(L.request)),Object(Ce.a)((function(){return Object(me.a)(c.schedule.getClasses()).pipe(Object(Ae.a)(L.success),Object(we.a)((function(e){return Object(ye.a)(L.failure(e))})))})))},_e=ge.a.apply(void 0,Object(T.a)(Object.values(c)).concat(Object(T.a)(Object.values(r))));function Le(e){return fetch("https://sabat.dev/api/tta?c=".concat(e,"&o=0")).then((function(e){return e.json()}))}function Re(){return fetch("https://sabat.dev/api/cla").then((function(e){return e.json()}))}var Ie={api:{schedule:a}},Te=n(111),Be=Object(je.a)({dependencies:Ie}),De=[Be],ze=Object(Te.composeWithDevTools)(de.applyMiddleware.apply(void 0,De)),Fe=Object(de.createStore)(ve,ze);Be.run(_e);var He=Fe,We=n(112),Ge=n(184),Me=Object(We.a)({overrides:{MuiCssBaseline:{"@global":{body:{"-webkit-text-size-adjust":"none","text-size-adjust":"none","-moz-text-size-adjust":"none","-ms-text-size-adjuist":"none"},"*":{"--scrollbarBG":"#CFD8DC","--thumbBG":"#90A4AE",scrollbarWidth:"thin",scrollbarColor:"var(--thumbBG) var(--scrollbarBG)"},"*::-webkit-scrollbar":{width:"11px"},"*::-webkit-scrollbar-track":{background:"var(--scrollbarBG)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"var(--thumbBG)",bordeRadius:"6px",border:"3px solid var(--scrollbarBG)"}}}}});u.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(S.a,{store:He,children:Object(o.jsx)(Ge.a,{theme:Me,children:Object(o.jsx)(ae,{})})})}),document.getElementById("root")),ue()}},[[141,1,2]]]);
//# sourceMappingURL=main.e0dd9af6.chunk.js.map