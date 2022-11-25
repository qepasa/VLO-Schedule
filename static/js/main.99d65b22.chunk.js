/*! For license information please see main.99d65b22.chunk.js.LICENSE.txt */
(this["webpackJsonpvlo-schedule"]=this["webpackJsonpvlo-schedule"]||[]).push([[0],{162:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadScheduleEpic",(function(){return cn})),n.d(r,"onDateChanged",(function(){return an})),n.d(r,"onClassChanged",(function(){return on}));var c={};n.r(c),n.d(c,"loadClassesEpic",(function(){return ln}));var a={};n.r(a),n.d(a,"nextWeekEpic",(function(){return jn}));var i={};n.r(i),n.d(i,"loadSubstitutionsEpic",(function(){return hn})),n.d(i,"onDateChanged",(function(){return fn})),n.d(i,"onClassChanged",(function(){return pn}));var o={};n.r(o),n.d(o,"updateClassEpic",(function(){return xn}));var s={};n.r(s),n.d(s,"getSchedule",(function(){return yn})),n.d(s,"getClasses",(function(){return Sn})),n.d(s,"getSubstitutions",(function(){return kn}));var l=n(2),u=n(0),j=n.n(u),d=n(17),b=n.n(d),O=(n(162),n(39)),h=n(143),f=n(224),p=n(220),m=n(29),g=n(81),x=n(21),v=n(198),y=n(79),S=n(200),k=Object(v.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,flexShrink:0},footerText:{paddingRight:e.spacing(1),float:"right"}}})),w=function(){var e=k();return Object(l.jsx)("footer",{className:e.footer,children:Object(l.jsx)(y.a,{variant:"caption",align:"center",gutterBottom:!0,children:Object(l.jsxs)("div",{className:e.footerText,children:[Object(l.jsx)(S.a,{target:"_blank",href:"https://github.com/cloud11665/vlott",color:"secondary",children:"API rozk\u0142adu zaj\u0119\u0107"}),"\xa0stworzone przez\xa0",Object(l.jsx)(S.a,{target:"_blank",href:"https://github.com/cloud11665",color:"secondary",children:"cloud11665"}),",\xa0",Object(l.jsx)(S.a,{target:"_blank",href:"https://github.com/qepasa/VLO-Schedule",color:"secondary",children:"frontend"}),"\xa0przez\xa0",Object(l.jsx)(S.a,{target:"_blank",href:"https://github.com/qepasa",color:"secondary",children:"qepasa"})]})})})},C=n(23),A=n(204),T=n(215),E=n(242),_=n(240),N=n(219),z=n(233),D=n(213),B=n(214),L=n(119),W=n.n(L),R=n(133),I=n.n(R),U=n(134),F=n.n(U),M=n(8),G=Object(M.createAction)("SET_THEME")(),q=Object(M.createAction)("SET_CLASS")(),P=Object(M.createAction)("UPDATE_CLASS")(),H=Object(M.createAction)("ADD_GROUP")(),V=Object(M.createAction)("REMOVE_GROUP")(),Z=n(130),J=n.n(Z),K=n(131),Q=n.n(K),X=n(72),Y=n.n(X),$=n(136),ee=n.n($),te=n(135),ne=n.n(te),re=n(241),ce=n(239),ae=n(208),ie=n(209),oe=n(210),se=n(212),le=n(121),ue=n(234),je=n(211),de=n(201),be=n(202),Oe=n(175),he=n(203),fe=n(235),pe=n(205),me=function(e){return function(e){return e.groupFilters[e.class]}(e.preferences)},ge=function(e){return function(e){return e.schedule.flat().flat().length}(e.schedule)},xe=function(e){return function(e,t){var n=e.schedule;if(0===n.length)return[];if(void 0===t)return n;for(var r=JSON.parse(JSON.stringify(n)),c=0;c<r.length;++c)for(var a=0;a<r[c].length;++a){var i=r[c][a].filter((function(e){return void 0===t[e.subject]||""===e.group||void 0!==t[e.subject]&&void 0!==t[e.subject].find((function(t){return t.group===e.group}))}));r[c][a]=i}return r}(e.schedule,e.preferences.groupFilters[e.preferences.class])},ve=Object(v.a)((function(e){return Object(re.a)({root:{width:"100%",backgroundColor:e.palette.background.paper,height:"inherit",overflow:"auto"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}})})),ye={addGroup:H,removeGroup:V},Se=Object(u.memo)((function(e){var t=e.groups,n=e.selectedGroups,r=e.currentClass,c=e.addGroup,a=e.removeGroup,i=ve(),o=function(e,t){return function(){void 0!==n[e].find((function(e){return e.group===t.group}))?a(t,r):c(t,r)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y.a,{color:"error",variant:"h6",children:"Uwaga! Ta funkcjonalno\u015b\u0107 jest eksperymentalna."}),Object(l.jsx)(y.a,{children:"Upewnij si\u0119, \u017ce plan lekcji po zastosowaniu filtr\xf3w wygl\u0105da tak jak si\u0119 spodziewasz."}),Object(l.jsx)(de.a,{subheader:Object(l.jsx)("li",{}),className:i.root,children:Object.keys(t).map((function(e){return Object(l.jsx)("li",{className:i.listSection,children:Object(l.jsxs)("ul",{className:i.ul,children:[Object(l.jsx)(be.a,{children:e}),t[e].map((function(t){return Object(l.jsxs)(Oe.a,{dense:!0,button:!0,onClick:o(e,t),children:[Object(l.jsx)(he.a,{children:Object(l.jsx)(fe.a,{edge:"start",checked:void 0!==n[e].find((function(e){return e.group===t.group})),tabIndex:-1,disableRipple:!0})}),Object(l.jsx)(pe.a,{primary:t.group,secondary:"Nauczyciel: ".concat(t.teacher)})]},"item-".concat(e,"-").concat(t.group))}))]})},"section-".concat(e))}))})]})})),ke=Object(m.b)((function(e){return{groups:e.schedule.groups,selectedGroups:me(e),currentClass:e.preferences.class}}),ye)(Se),we=Object(v.a)((function(){return Object(re.a)({root:{minHeight:"50vh",maxHeight:"90vh"}})})),Ce=function(e){var t=e.open,n=e.onClose,r=we(),c=Object(u.useState)("1"),a=Object(C.a)(c,2),i=a[0],o=a[1];return Object(l.jsxs)(ce.a,{open:t,onClose:n,"aria-labelledby":"settings-dialog",className:r.root,maxWidth:"md",fullWidth:!0,children:[Object(l.jsx)(ae.a,{id:"settings-dialog-title",children:"Ustawienia"}),Object(l.jsxs)(le.a,{value:i,children:[Object(l.jsx)(ue.a,{indicatorColor:"secondary",textColor:"secondary",onChange:function(e,t){o(t)},children:Object(l.jsx)(ie.a,{label:"Filtry grup",textColor:"secondary",value:"1"})}),Object(l.jsx)(oe.a,{children:Object(l.jsx)(je.a,{value:"1",children:Object(l.jsx)(ke,{})})})]}),Object(l.jsx)(se.a,{children:Object(l.jsx)(D.a,{onClick:n,color:"secondary",children:"Zamknij"})})]})},Ae=n(244),Te=n(217),Ee=n(218),_e=n(232),Ne=n(236),ze=Object(M.createAsyncAction)("LOAD_CLASSES_REQUEST","LOAD_CLASSES_SUCCESS","LOAD_CLASSES_FAILURE")();function De(){return new Date((new Date).toLocaleString("en-US",{timeZone:"Europe/Warsaw"}))}var Be=function(e,t,n,r,c){return t.loading?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B.a,{width:"3vw",className:c,animation:"wave"}),Object(l.jsx)(B.a,{width:"3vw",className:c,animation:"wave"}),Object(l.jsx)(B.a,{width:"3vw",className:c,animation:"wave"})]}):t.error?Object(l.jsxs)("div",{children:[Object(l.jsx)(Y.a,{color:"error"}),Object(l.jsx)(y.a,{variant:"caption",color:"error",children:"Wyst\u0105pi\u0142 b\u0142\u0105d podczas \u0142adowania klas. Od\u015bwie\u017c stron\u0119."})]}):Object(l.jsx)("div",{children:e.map((function(e){return Object(l.jsx)(T.a,{onClick:n(e),selected:e===r,children:e},e)}))})},Le=Object(v.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:Object(O.a)({margin:e.spacing(1),flex:1},e.breakpoints.down("md"),{fontSize:"125%"}),sectionDesktop:Object(O.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(O.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),skeletonStyle:{margin:e.spacing(1)}}})),We={setTheme:G,loadClasses:ze.request},Re=Object(x.i)(Object(m.b)((function(e){return{availableClasses:e.classes.classes,classesStatus:e.classes.isLoadingClasses,preferences:e.preferences,currentDateOffset:e.date}}),We)((function(e){var t=e.availableClasses,n=e.classesStatus,r=e.preferences,c=e.currentDateOffset,a=e.setTheme,i=e.loadClasses,o=e.history,s=Object(Ae.a)(De(),c),j=Le(),d=Object(x.h)().classParam,b=Object(u.useState)(null),O=Object(C.a)(b,2),h=O[0],f=O[1],p=Object(u.useState)(null),m=Object(C.a)(p,2),g=m[0],v=m[1],S=Object(u.useState)(!1),k=Object(C.a)(S,2),w=k[0],B=k[1];Object(u.useEffect)((function(){i()}),[]);var L=Boolean(h),R=Boolean(g),U=function(e){f(e.currentTarget)},M=function(){f(null)},G="primary-search-account-menu-mobile",q=function(e,t){return"light"===e?Object(l.jsx)(A.a,{"aria-label":"theme-button",color:"inherit",onClick:t,children:Object(l.jsx)(J.a,{})}):Object(l.jsx)(A.a,{"aria-label":"theme-button",color:"inherit",onClick:t,children:Object(l.jsx)(Q.a,{})})}(r.theme,(function(){"dark"===r.theme?a("light"):a("dark")})),P=Object(l.jsx)(E.a,{title:"Wy\u015blij do nas maila!","aria-label":"send-feedback-tooltip",arrow:!0,children:Object(l.jsx)(A.a,{"aria-label":"send-feedback",color:"inherit",component:"a",href:"mailto:feedback.vlorocks@gmail.com?subject=Zg%C5%82o%C5%9B%20B%C5%82%C4%85d",target:"_blank",children:Object(l.jsx)(I.a,{})})}),H=Object(l.jsx)(E.a,{title:"Kod na Githubie","aria-label":"github-repo-tooltip",arrow:!0,children:Object(l.jsx)(A.a,{"aria-label":"github-repo",color:"inherit",component:"a",href:"https://github.com/qepasa/VLO-Schedule",target:"_blank",children:Object(l.jsx)(F.a,{})})}),V=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A.a,{"aria-label":"settings-button",color:"inherit",onClick:function(){B(!0)},children:Object(l.jsx)(ne.a,{})}),Object(l.jsx)(Ce,{open:w,onClose:function(){B(!1)}})]}),Z=Object(l.jsxs)(_.a,{anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"right"},id:G,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:R,onClose:function(){v(null)},children:[Object(l.jsx)(T.a,{children:q}),Object(l.jsx)(T.a,{children:V}),Object(l.jsx)(T.a,{children:P}),Object(l.jsx)(T.a,{children:H})]}),K=Object(Te.a)(s,{weekStartsOn:1}),X=Object(Ee.a)(s,{weekStartsOn:1});return Object(l.jsxs)(N.a,{className:j.toolbar,children:[Object(l.jsxs)(z.a,{alignSelf:"left",children:[Object(l.jsx)(D.a,{className:j.sectionDesktop,variant:"contained",color:"primary",onClick:U,endIcon:Object(l.jsx)(W.a,{}),children:"Wybierz klas\u0119"}),Object(l.jsx)(A.a,{onClick:U,color:"primary",className:j.sectionMobile,children:Object(l.jsx)(W.a,{})}),Object(l.jsx)(_.a,{id:"classes-menu",anchorEl:h,keepMounted:!0,open:L,onClose:M,PaperProps:{style:{maxHeight:"70vh"}},children:Be(t,n,(function(e){return function(){M(),o.push("".concat(e))}}),d,j.skeletonStyle)})]}),Object(l.jsxs)(y.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:j.toolbarTitle,children:["Rozk\u0142ad klasy ",d," (",Object(_e.a)(K,"dd MMM",{locale:Ne.a})+" - "+Object(_e.a)(X,"dd MMM",{locale:Ne.a}),")"]}),Object(l.jsxs)("div",{className:j.sectionDesktop,children:[q,V,P,H]}),Object(l.jsxs)("div",{className:j.sectionMobile,children:[Object(l.jsx)(A.a,{"aria-label":"show more","aria-controls":G,"aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"inherit",children:Object(l.jsx)(ee.a,{})}),Z]})]})}))),Ie=n(223),Ue=Object(M.createAsyncAction)("LOAD_SCHEDULE_REQUEST","LOAD_SCHEDULE_SUCCESS","LOAD_SCHEDULE_FAILURE")(),Fe=Object(M.createAction)("CREATE_GROUPS")(),Me=n(112),Ge=n(63);function qe(e,t){return t>e?qe(t,e):0===t?e:qe(t,e%t)}function Pe(e){if(0===e.length)throw Error("You need to pass at least one number!");if(1===e.length)return e[0];if(2===e.length)return e[0]*e[1]/qe(e[0],e[1]);var t=e.pop(),n=Pe(e);return t*n/qe(t,n)}var He=n(100),Ve=n.n(He),Ze=n(221);function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.language;return e.charAt(0).toLocaleUpperCase(t)+e.slice(1)}var Ke=Object(u.memo)((function(e){var t=e.lessons,n=e.lessonNumber,r=e.dayIndex,c=e.onClose,a=e.open,i=e.currentWeekInterval;if(!t)return Object(l.jsx)("div",{});var o=function(){c()};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{}),Object(l.jsxs)(ce.a,{onClose:o,"aria-labelledby":"lessons-list-dialog",open:a,fullWidth:!0,children:[Object(l.jsxs)(ae.a,{id:"lessons-list-dialog-title",children:[Je(Object(_e.a)(i[r],"cccc",{locale:Ne.a}))," - lekcja ",n]}),Object(l.jsx)(oe.a,{children:Object(l.jsx)(de.a,{children:t.map((function(e){var t=e.subject+e.teacher+e.color+e.group;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Oe.a,{children:Object(l.jsx)(pe.a,{primary:"".concat(e.subject).concat(e.group?" - "+e.group:""),secondary:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(y.a,{component:"a",variant:"body2",children:["Nauczyciel: ",e.teacher]},t+"Teacher"),Object(l.jsx)("br",{}),Object(l.jsxs)(y.a,{component:"a",variant:"body2",children:["Sala: ",e.classroom]},t+"Classroom")]})},t+"ListItemText")},t),Object(l.jsx)(Ze.a,{variant:"middle",component:"li"},t+"Divider")]})}))})}),Object(l.jsx)(se.a,{children:Object(l.jsx)(D.a,{onClick:o,color:"secondary",children:"Zamknij"})})]})]})})),Qe=Object(v.a)((function(e){return{lessonTile:{padding:e.spacing(.2)},textStyle:{}}})),Xe=Object(u.memo)((function(e){var t,n=e.lesson,r=e.height,c=e.lessonsByHour,a=e.currentWeekInterval,i=Qe(),o=Ve()({logLevel:"none",minFontSize:5}),s=o.fontSize,j=o.ref,d=Object(u.useState)(!1),b=Object(C.a)(d,2),O=b[0],h=b[1],f=Object(u.useState)([]),p=Object(C.a)(f,2),m=p[0],g=p[1],x=Object(u.useState)(0),v=Object(C.a)(x,2),y=v[0],S=v[1],k=("#"===(t=n.color).slice(0,1)&&(t=t.slice(1)),3===t.length&&(t=t.split("").map((function(e){return e+e})).join("")),(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=70?"black":"white");return Object(l.jsxs)("div",{style:{fontSize:s,height:r,overflow:"hidden",display:"flex",flexDirection:"column"},ref:j,onClick:function(e){var t=e.currentTarget.getBoundingClientRect(),r=(e.pageX-t.left)/(t.right-t.left),a=1/n.duration,i=Math.floor(r/a);(e.target===j.current||e.target instanceof Node&&j.current.contains(e.target))&&(g(c[n.time_index+i]),S(n.time_index+i),h(!0))},className:i.lessonTile,children:[Object(l.jsx)("div",{style:{textAlign:"left",flex:"1 0 auto",color:k},className:i.textStyle,children:n.teacher}),Object(l.jsx)("div",{style:{textAlign:"center",flex:"1 0 auto",color:k},className:i.textStyle,children:n.subject}),Object(l.jsxs)("div",{style:{flexShrink:0,color:k},className:i.textStyle,children:[Object(l.jsx)("div",{style:{float:"left",textAlign:"left"},children:n.classroom}),Object(l.jsx)("div",{style:{float:"right",textAlign:"right"},children:n.group})]}),Object(l.jsx)(Ke,{lessons:m,lessonNumber:y,dayIndex:n.day_index,onClose:function(){h(!1)},open:O,currentWeekInterval:a})]})}));function Ye(e,t){for(var n=Array(11).fill(0),r=0;r<11;++r)n[r]=t[r].length;var c,a=Pe(n.filter((function(e){return 0!==e}))),i=e.map((function(e){var t=e.map((function(e){return e}));return t.sort((function(e,t){var n=e.time_index+e.duration-1,r=t.time_index+t.duration-1;return n===r?e.subject.localeCompare(t.subject):n>r?-1:1})),{lessons:t,totalWidth:a,ceil:a,floor:0}})),o=Array(11).fill(a),s=Object(Me.a)(i);try{for(s.s();!(c=s.n()).done;){var l,u=c.value,j=Object(Me.a)(u.lessons);try{for(j.s();!(l=j.n()).done;){for(var d=l.value,b=d.time_index,O=d.time_index+d.duration,h=a+1,f=b;f<O;++f)h=Math.min(h,Math.floor(o[f]/n[f]));d.width=h;for(var p=b;p<O;++p)n[p]--,o[p]-=h}}catch(m){j.e(m)}finally{j.f()}}}catch(m){s.e(m)}finally{s.f()}return i}var $e=function(e){var t=e.dayTimetable,n=e.dayIdx,r=e.currentWeekInterval;if(!t||0===t.length)return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(_e.a)(r[n],"iii",{locale:Ne.a})}),Object(l.jsx)("div",{})]});for(var c=function(e){var t=Object(Ge.a)(Array(11)).map((function(){return Array()}));return e.flat().map((function(e){for(var n=0;n<e.duration;n++)t[e.time_index+n].push(e)})),t}(t),a=Ye(t,c),i=a.length>0?a[0].totalWidth:1,o=Array(11),s=0;s<11;++s)o[s]={bottom:1,top:i+1};var u=!0,j=a.map((function(e){var t,n=[],a=Object(Me.a)(e.lessons);try{for(a.s();!(t=a.n()).done;){var s=t.value,j=o[s.time_index],d=void 0,b=void 0;u?(d=j.bottom,b=j.bottom+s.width):(b=j.top,d=j.top-s.width);var O=s.day_index.toString()+s.time_index.toString()+s.classroom.toString()+s.subject+s.teacher+s.group;n.push(Object(l.jsx)("div",{style:{backgroundColor:"".concat(s.color),gridRow:"".concat(d.toString()," / ").concat(b.toString()),gridColumn:"".concat((s.time_index+1).toString()," / ").concat((s.time_index+s.duration+1).toString())},children:Object(l.jsx)(Xe,{lesson:s,height:15*s.width/i+"vh",lessonsByHour:c,currentWeekInterval:r})},O));for(var h=s.time_index;h<s.time_index+s.duration;h++)u?o[h].bottom=b:o[h].top=d;u=!u}}catch(f){a.e(f)}finally{a.f()}return n}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(_e.a)(r[n],"iii",{locale:Ne.a})}),Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px",gridTemplateRows:"repeat(".concat(i,", calc(15vh/").concat(i,"))")},children:j.flat()})]})},et=n(222),tt=function(e){var t=e.lessonIdx,n=e.startOfLesson,r=Ve()(),c=r.fontSize,a=r.ref;return Object(l.jsx)(z.a,{height:"5vh",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"elipsis",children:Object(l.jsxs)("div",{style:{fontSize:c},ref:a,children:[Object(l.jsx)("div",{children:t.toString()}),Object(l.jsx)("div",{children:Object(_e.a)(n,"HH:mm")+"-"+Object(_e.a)(Object(et.a)(n,45),"HH:mm")})]})})},nt=Object(u.memo)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, calc(90vw/11))",columnGap:"1px"},children:["7:10","8:00","9:00","10:00","11:00","12:00","13:00","14:00","14:50","15:40","16:30"].map((function(e){var t=e.split(":");return(new Date).setHours(parseInt(t[0]),parseInt(t[1]))})).map((function(e,t){return Object(l.jsx)(tt,{lessonIdx:t,startOfLesson:e},e.toString()+t.toString())}))})]})})),rt=Object(M.createAction)("NEXT_WEEK")(),ct=Object(M.createAction)("PREVIOUS_WEEK")(),at=Object(M.createAction)("SET_DATE")(),it=Object(M.createAction)("DATE_CHANGED")(),ot=Object(M.createAsyncAction)("LOAD_SUBSTITUTIONS_REQUEST","LOAD_SUBSTITUTIONS_SUCCESS","LOAD_SUBSTITUTIONS_FAILURE")(),st=(Object(M.createAction)("SUBSTITUTIONS_LOAD_COMPLETE")(),n(120)),lt=n.n(st),ut=n(137),jt=n.n(ut),dt=Object(v.a)((function(e){return{textWrapper:{height:"4vh",width:"100%"},textSection:{float:"left",height:"inherit",margin:e.spacing(1)},switchViewsButton:{float:"right",height:"inherit",margin:e.spacing(1)}}})),bt={nextWeek:rt,prevWeek:ct,setDate:at},Ot=Object(m.b)(null,bt)((function(e){var t=e.navigationButtonText,n=e.onNavButtonClick,r=e.nextWeek,c=e.prevWeek,a=e.setDate,i=dt();return Object(l.jsxs)(z.a,{className:i.textWrapper,children:[Object(l.jsxs)(z.a,{className:i.textSection,children:[Object(l.jsx)(A.a,{size:"small",onClick:function(){return c()},children:Object(l.jsx)(jt.a,{fontSize:"small"})}),Object(l.jsx)(D.a,{size:"small",variant:"outlined",onClick:function(){return a(0)},children:"Dzisiaj"}),Object(l.jsx)(A.a,{size:"small",onClick:function(){return r()},children:Object(l.jsx)(lt.a,{fontSize:"small"})})]}),Object(l.jsxs)(z.a,{className:i.switchViewsButton,children:[Object(l.jsx)(A.a,{size:"small",style:{visibility:"hidden"},children:Object(l.jsx)(lt.a,{fontSize:"small"})}),Object(l.jsx)(D.a,{size:"small",variant:"outlined",onClick:n,children:t})]})]})})),ht=Object(v.a)((function(e){return{textWrapper:{height:"4vh",width:"100%"},textSection:{float:"left",height:"inherit",margin:e.spacing(1)},switchViewsButton:{float:"right",height:"inherit",margin:e.spacing(1)},filterAlert:{width:"30vw",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"elipsis",height:"inherit"},timetableWrapper:{display:"grid",gridAutoFlow:"rows",gridTemplateColumns:"7vw 90vw",gridTemplateRows:"5vh repeat(5, 15vh)",rowGap:"1px",margin:e.spacing(2,1,2,1)},skeletonStyle:{transform:"scale(1, 0.95)",gridColumn:"2 / 3"}}})),ft={loadTimetable:Ue.request,loadClasses:ze.request,loadSubstitutions:ot.request,setClass:q,nextWeek:rt,prevWeek:ct,setDate:at},pt=Object(m.b)((function(e){return{timetableStatus:e.schedule.isLoadingSchedule,timetable:e.schedule.schedule,timetableSize:ge(e),filteredTimetable:xe(e)}}),ft)((function(e){var t=e.timetableStatus,n=e.filteredTimetable,r=e.setClass,c=ht(),a=Object(x.h)().classParam,i=Object(x.g)();Object(u.useEffect)((function(){r(a)}),[r,a]);var o=De(),s=Object(Ie.a)({start:Object(Te.a)(o,{weekStartsOn:1}),end:Object(Ee.a)(o,{weekStartsOn:1})});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Ot,{navigationButtonText:"Zast\u0119pstwa",onNavButtonClick:function(){i.push("/substitutions/".concat(a))}}),Object(l.jsxs)(z.a,{className:c.timetableWrapper,children:[Object(l.jsx)(nt,{}),t.loading?Array.from(Array(5).keys()).map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:Object(_e.a)(s[e],"iii",{locale:Ne.a})}),Object(l.jsx)(B.a,{className:c.skeletonStyle,animation:"wave"},"skeleton"+e.toString())]})})):t.error?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y.a,{color:"error"}),Object(l.jsx)(y.a,{variant:"h6",color:"error",children:"Wyst\u0105pi\u0142 b\u0142\u0105d podczas \u0142adowania rozk\u0142adu. Od\u015bwie\u017c stron\u0119."})]}):Array.from(Array(5).keys()).map((function(e){return Object(l.jsx)($e,{dayTimetable:n[e],dayIdx:e,currentWeekInterval:s},e.toString())}))]})]})})),mt=Object(v.a)((function(e){return{inline:{display:"inline"},subBlock1:{margin:e.spacing(.2)},subBlock2:{margin:e.spacing(.2)},singleBlock:{margin:e.spacing(1),padding:e.spacing(.2)}}})),gt=function(e){var t=e.dayOfWeek,n=e.substitution,r=mt(),c=Je(Object(_e.a)(t,"cccc - dd MMM",{locale:Ne.a}));return console.log("hey lad ".concat(n)),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Oe.a,{alignItems:"flex-start",children:Object(l.jsx)(pe.a,{primary:c,secondary:Object(l.jsx)(de.a,{children:n&&n.length>0?n.map((function(e){return Object(l.jsx)(Oe.a,{children:Object(l.jsxs)(pe.a,{className:r.singleBlock,children:[Object(l.jsxs)(z.a,{className:r.subBlock1,children:["Lekcja ",e.time_signature]}),Object(l.jsx)(z.a,{className:r.subBlock2,children:e.comment})]})})})):Object(l.jsx)(Oe.a,{children:Object(l.jsx)(pe.a,{children:"Brak zast\u0119pstw"})})})})}),Object(l.jsx)(Ze.a,{variant:"inset",component:"li"})]})},xt=Object(v.a)((function(e){return{root:{width:"100%"},inline:{display:"inline"},skeletonStyle:{transform:"scale(1, 0.95)",gridColumn:"2 / 3"}}})),vt={setClass:q},yt=Object(m.b)((function(e){return{substitutions:e.substitutions.substitutions,substitutionsStatus:e.substitutions.isLoadingSubstitutions,currentDateOffset:e.date}}),vt)((function(e){var t=e.substitutions,n=e.substitutionsStatus,r=e.currentDateOffset,c=e.setClass,a=Object(Ae.a)(De(),r),i=Object(Te.a)(a,{weekStartsOn:1}),o=Object(Ee.a)(a,{weekStartsOn:1}),s=Object(Ie.a)({start:i,end:o}),j=xt(),d=Object(x.h)().classParam,b=Object(x.g)();if(Object(u.useEffect)((function(){c(d)}),[c,d]),n.error)return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y.a,{color:"error"}),Object(l.jsx)(y.a,{variant:"h6",color:"error",children:"Wyst\u0105pi\u0142 b\u0142\u0105d podczas \u0142adowania rozk\u0142adu. Od\u015bwie\u017c stron\u0119."})]});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Ot,{navigationButtonText:"Plan lekcji",onNavButtonClick:function(){b.push("/timetable/".concat(d))}}),Object(l.jsx)(de.a,{className:j.root,children:s.filter((function(e,t){return t<5})).map((function(e,r){return n.loading<7?Object(l.jsx)(B.a,{className:j.skeletonStyle,animation:"wave"},"skeleton"+r.toString()):(console.log(t[r]),console.log(r),Object(l.jsx)(gt,{dayOfWeek:e,substitution:t[r]}))}))})]})})),St={setTheme:G},kt=Object(m.b)((function(e){return{preferences:e.preferences}}),St)((function(e){var t=e.preferences,n=e.setTheme,r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";console.log(r),""===t.theme&&n(r);var c=""===t.theme?r:t.theme,a=j.a.useMemo((function(){return Object(h.a)({palette:{type:c},overrides:{MuiCssBaseline:{"@global":{body:{"-webkit-text-size-adjust":"none","text-size-adjust":"none","-moz-text-size-adjust":"none","-ms-text-size-adjuist":"none"},"*":{"--scrollbarBG":"#CFD8DC","--thumbBG":"#90A4AE",scrollbarWidth:"thin",scrollbarColor:"var(--thumbBG) var(--scrollbarBG)"},"*::-webkit-scrollbar":{width:"11px"},"*::-webkit-scrollbar-track":{background:"var(--scrollbarBG)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"var(--thumbBG)",bordeRadius:"6px",border:"3px solid var(--scrollbarBG)"}}}}})}),[c]);return a.typography.caption=Object(O.a)({},a.breakpoints.down("sm"),{fontSize:"60%"}),Object(l.jsxs)(f.a,{theme:a,children:[Object(l.jsx)(p.a,{}),Object(l.jsx)(g.a,{children:Object(l.jsxs)(x.d,{children:[Object(l.jsx)(x.b,{path:"/timetable/:classParam",children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[Object(l.jsxs)("div",{style:{flex:"1 0 auto"},children:[Object(l.jsx)(Re,{}),Object(l.jsx)(pt,{})]}),Object(l.jsx)(w,{})]})}),Object(l.jsx)(x.b,{path:"/substitutions/:classParam",children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[Object(l.jsxs)("div",{style:{flex:"1 0 auto"},children:[Object(l.jsx)(Re,{}),Object(l.jsx)(yt,{})]}),Object(l.jsx)(w,{})]})}),Object(l.jsx)(x.b,{path:"/",children:Object(l.jsx)(x.a,{to:"/timetable/1A"})})]})})]})})),wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},Ct=n(24),At=n(231),Tt=n(34),Et=Object(M.createReducer)({loading:!0,error:!1}).handleAction(Ue.request,(function(){return{loading:!0,error:!1}})).handleAction(Ue.failure,(function(){return{loading:!1,error:!0}})).handleAction(Ue.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),_t=Object(M.createReducer)([]).handleAction(Ue.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),Nt=Object(M.createReducer)({}).handleAction(Fe,(function(e,t){return Object(Tt.a)({},t.payload)})),zt=Object(Ct.combineReducers)({isLoadingSchedule:Et,schedule:_t,groups:Nt}),Dt=Object(M.createReducer)({loading:!0,error:!1}).handleAction(ze.request,(function(){return{loading:!0,error:!1}})).handleAction(ze.failure,(function(){return{loading:!1,error:!0}})).handleAction(ze.success,(function(e,t){return{loading:!1,error:!t.payload.success}})),Bt=Object(M.createReducer)([]).handleAction(ze.success,(function(e,t){return t.payload.resp?t.payload.resp:[]})),Lt=Object(Ct.combineReducers)({isLoadingClasses:Dt,classes:Bt}),Wt=n(138),Rt=n.n(Wt),It=n(111),Ut=Object(M.createReducer)("").handleAction(G,(function(e,t){return t.payload})),Ft=Object(M.createReducer)("").handleAction(P,(function(e,t){return t.payload})),Mt=Object(M.createReducer)({}).handleAction(Fe,(function(e,t){var n=e;return n[t.meta]||(n[t.meta]=t.payload),Object(Tt.a)({},n)})).handleAction(H,(function(e,t){var n=e;n[t.meta][t.payload.subject].push(t.payload);var r=n[t.meta];return delete n[t.meta],Object(Tt.a)(Object(Tt.a)({},n),{},Object(O.a)({},t.meta,Object(Tt.a)({},r)))})).handleAction(V,(function(e,t){var n=e;n[t.meta][t.payload.subject]=n[t.meta][t.payload.subject].filter((function(e){return e.group!==t.payload.group}));var r=n[t.meta];return delete n[t.meta],Object(Tt.a)(Object(Tt.a)({},n),{},Object(O.a)({},t.meta,Object(Tt.a)({},r)))})),Gt={key:"preferences",storage:Rt.a,blacklist:["class"]},qt=Object(It.a)(Gt,{theme:Ut,class:Ft,groupFilters:Mt}),Pt=Object(M.createReducer)(0).handleAction(rt,(function(e,t){return e+1})).handleAction(ct,(function(e,t){return e-1})).handleAction(at,(function(e,t){return t.payload})),Ht=Object(M.createReducer)({loading:0,error:!1}).handleAction(ot.request,(function(){return{loading:0,error:!1}})).handleAction(ot.failure,(function(){return{loading:0,error:!0}})).handleAction(ot.success,(function(e,t){return e.error?e:{loading:e.loading+1,error:!1}})),Vt=Object(M.createReducer)(Array(7)).handleAction(ot.success,(function(e,t){return console.log(t),e[t.payload.dayOfWeek]=t.payload.response,Object(Tt.a)({},e)})),Zt=Object(Ct.combineReducers)({isLoadingSubstitutions:Ht,substitutions:Vt}),Jt=Object(Ct.combineReducers)({schedule:zt,classes:Lt,preferences:qt,date:Pt,substitutions:Zt}),Kt=n(243),Qt=n(74),Xt=n(139),Yt=n(225),$t=n(238),en=n(226),tn=n(227),nn=n(228),rn=n(107),cn=function(e,t,n){var r=n.api;return e.pipe(Object(Yt.a)(Object(M.isActionOf)(Ue.request)),Object($t.a)(t),Object(en.a)((function(e){var t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(Qt.a)(r.schedule.getSchedule(n.payload,c.date)).pipe(Object(tn.a)((function(e){return Object(Qt.a)([Fe(sn(e),c.preferences.class),Ue.success(e)])})),Object(nn.a)((function(e){return Object(Xt.a)(Ue.failure(e))})))})))},an=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)(it)),Object($t.a)(t),Object(rn.a)((function(e){var t=Object(C.a)(e,2),n=(t[0],t[1]);return Ue.request(n.preferences.class)})))},on=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)(P)),Object($t.a)(t),Object(en.a)((function(e){var t=Object(C.a)(e,2)[1];return Object(Xt.a)(Ue.request(t.preferences.class))})))};function sn(e){console.time("transformTimetableResponse");var t={};return e.success?(e.resp.flat().flat().forEach((function(e){t[e.subject]||""===e.group||(t[e.subject]=[]),""===e.group||t[e.subject].find((function(t){return t.group===e.group}))||t[e.subject].push(e)})),console.timeEnd("transformTimetableResponse"),t):t}var ln=function(e,t,n){var r=n.api;return e.pipe(Object(Yt.a)(Object(M.isActionOf)(ze.request)),Object(en.a)((function(){return Object(Qt.a)(r.schedule.getClasses()).pipe(Object(rn.a)(ze.success),Object(nn.a)((function(e){return Object(Xt.a)(ze.failure(e))})))})))},un=n(229),jn=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)([rt,ct,at])),Object(un.a)(it()))},dn=n(245),bn=n(108),On=n(140),hn=function(e,t,n){var r=n.api;return e.pipe(Object(Yt.a)(Object(M.isActionOf)(ot.request)),Object($t.a)(t),Object(bn.a)((function(e){var t=Object(C.a)(e,2),n=t[0],c=t[1];return function(e,t,n){var r=e.api,c=Object(Ae.a)(De(),n);console.log("base day: ".concat(c));var a=Object(Te.a)(c,{locale:Ne.a,weekStartsOn:1}),i=Object(Ee.a)(c,{locale:Ne.a,weekStartsOn:1}),o=Object(Ie.a)({start:a,end:i});return console.log(o),console.log(o.map((function(e){return Object(dn.a)(e,De())}))),o.map((function(e){return Object(dn.a)(e,De())})).map((function(e){return r.schedule.getSubstitutions(t,e)})).map((function(e,t){return Object(Qt.a)(e).pipe(Object(rn.a)((function(e){return ot.success({response:e,dayOfWeek:t})})),Object(nn.a)((function(e){return Object(Xt.a)(ot.failure(e))})))}))}({api:r},n.payload,c.date)})),Object(On.a)())},fn=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)(it)),Object($t.a)(t),Object(rn.a)((function(e){var t=Object(C.a)(e,2),n=(t[0],t[1]);return ot.request(n.preferences.class)})))},pn=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)(P)),Object($t.a)(t),Object(en.a)((function(e){var t=Object(C.a)(e,2)[1];return Object(Xt.a)(ot.request(t.preferences.class))})))};var mn=n(247),gn=n(67),xn=function(e,t){return e.pipe(Object(Yt.a)(Object(M.isActionOf)(q)),Object($t.a)(t),Object(en.a)((function(e){var t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(mn.a)((function(){return n.payload!==r.preferences.class}),Object(Xt.a)(P(n.payload)),gn.a)})))},vn=Kt.a.apply(void 0,Object(Ge.a)(Object.values(r)).concat(Object(Ge.a)(Object.values(c)),Object(Ge.a)(Object.values(a)),Object(Ge.a)(Object.values(o)),Object(Ge.a)(Object.values(i))));function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return console.log("got class param ".concat(e," offset: ").concat(t)),fetch("https://api.cld.sh/v1/vlo/ttdata/".concat(e,"?offset=").concat(t)).then((function(e){return e.json()})).then((function(e){return{success:!0,resp:e}}))}function Sn(){return fetch("https://api.cld.sh/v1/vlo/listclass").then((function(e){return e.json()})).then((function(e){return{success:!0,resp:e}}))}function kn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return fetch("https://api.cld.sh/v1/vlo/substitutions/".concat(e,"?offset=").concat(t)).then((function(e){return e.json()}))}var wn={api:{schedule:s}},Cn=n(141),An=Object(At.a)({dependencies:wn}),Tn=[An],En=Object(Cn.composeWithDevTools)(Ct.applyMiddleware.apply(void 0,Tn)),_n=Object(Ct.createStore)(Jt,En);An.run(vn);var Nn=_n,zn=n(142),Dn=n(230),Bn=Object(It.b)(Nn);b.a.render(Object(l.jsx)(j.a.StrictMode,{children:Object(l.jsx)(m.a,{store:Nn,children:Object(l.jsx)(zn.a,{loading:Object(l.jsx)(Dn.a,{}),persistor:Bn,children:Object(l.jsx)(kt,{})})})}),document.getElementById("root")),wt()}},[[172,1,2]]]);
//# sourceMappingURL=main.99d65b22.chunk.js.map