(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(10),n=c.n(s),a=c(5),r=c(0),l=c(2),j=(c(16),c(1)),i=function(){return Object(j.jsxs)("nav",{className:"header",children:[Object(j.jsx)(a.b,{to:"/",className:"header__link",children:Object(j.jsx)("img",{src:"https://img.icons8.com/cotton/64/000000/home--v3.png",alt:"Home",className:"header__link--image"})}),Object(j.jsx)(a.b,{to:"/people",className:"header__link",children:Object(j.jsx)("img",{src:"https://img.icons8.com/doodle/96/000000/crowd.png",alt:"People",className:"header__link--image"})})]})},o=(c(18),function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"home__title",children:"Home Page"})})}),b=c(11),h=c(7),m=c(4),d=c(6),p=c.n(d),u=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api","/people.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=(c(20),function(e){var t=e.person;return Object(j.jsxs)("tr",{className:"person__row",children:[Object(j.jsx)("td",{className:"person__cell",children:t.name}),Object(j.jsx)("td",{className:"person__cell",children:t.sex}),Object(j.jsx)("td",{className:"person__cell",children:t.born}),Object(j.jsx)("td",{className:"person__cell",children:t.died}),Object(j.jsx)("td",{className:"person__cell",children:t.fatherName||"-"}),Object(j.jsx)("td",{className:"person__cell",children:t.motherName||"-"})]})}),O=(c(21),function(e){var t=e.peoples;return Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"table__titles",children:Object(j.jsxs)("tr",{className:"table__row",children:[Object(j.jsx)("th",{className:"table__cell",children:"Name"}),Object(j.jsx)("th",{className:"table__cell",children:"Sex"}),Object(j.jsx)("th",{className:"table__cell",children:"Born"}),Object(j.jsx)("th",{className:"table__cell",children:"Died"}),Object(j.jsx)("th",{className:"table__cell",children:"Father"}),Object(j.jsx)("th",{className:"table__cell",children:"Mother"})]})}),t&&Object(j.jsx)("tbody",{className:"table__body",children:t.map((function(e){return Object(j.jsx)(x,{person:e},e.name)}))})]})}),_=(c(22),function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),c=t[0],s=t[1],n=Object(r.useCallback)(Object(h.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,c=t.map((function(e){var c=Object(b.a)({},e),s=t.find((function(t){return e.fatherName===t.name||e.fatherName===t.name}));return s&&("m"===s.sex?c.father=s:c.mother=s),c})),s(c);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){n()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"people__title",children:"People table"}),Object(j.jsx)(O,{peoples:c})]})}),f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Page not found"})})},N=(c(23),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/home",element:Object(j.jsx)(l.a,{to:"/",replace:!0})}),Object(j.jsx)(l.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(l.b,{path:"/people",element:Object(j.jsx)(_,{})}),Object(j.jsx)(l.b,{path:"*",element:Object(j.jsx)(f,{})})]})]})});n.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.cf77f7fc.chunk.js.map