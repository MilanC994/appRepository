(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(6),c=n.n(l),r=(n(19),n(7)),o=n(5),i=n(1),s=n(29),m={coins:[{value:5,count:10},{value:2,count:10},{value:1,count:10},{value:.5,count:10},{value:.2,count:10},{value:.1,count:10}],toPay:0,outputString:"",setterButtonsDisabled:!1,payButtonDisabled:!0};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return Object(i.a)({},e,{coins:Object(o.a)(e.coins.map((function(e){return e.value===t.payload?Object(i.a)({},e,{count:e.count+1}):e})))})}function d(e,t){return Object(i.a)({},e,{coins:Object(o.a)(e.coins.map((function(e){return e.value===t.payload&&e.count>0?Object(i.a)({},e,{count:e.count-1}):e})))})}var E=function(e,t){if(!t.value)return Object(i.a)({},e,{outputString:"Value must be higher than 0"});if(e.coins.find((function(e){return e.value===t.value})))return Object(i.a)({},e,{coins:Object(o.a)(e.coins.map((function(e){return e.value!==t.value?e:Object(i.a)({},e,{count:e.count+t.count})})))});return Object(i.a)({},e,{coins:Object(s.a)((function(e,t){return t.value-e.value}),[].concat(Object(o.a)(e.coins),[t]))})};function f(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var v=function(e,t){var n=e.coins,a=e.toPay,u=Number(t-a).toFixed(1),l=null;if(u>=0){var c=function e(t,a,u){if(l&&u>=l)return null;if(0==t)return null==l||u<l?(l=u,[]):null;if(a>=n.length)return null;for(var c=null,r=n[a],o=Math.min(Math.floor((t/r.value).toFixed(1)),r.count);o>=0;o--){var i=e((t-r.value*o).toFixed(1),a+1,u+o);if(null!=i&&(o&&i&&i.push({value:r.value,count:o}),c=i),a===n.length-1)break}return c}(u,0,0);return c?function(e,t,n){return Object(i.a)({},e,{coins:Object(o.a)(e.coins.map((function(e){var n=t.find((function(t){return t.value===e.value}));return n?Object(i.a)({},e,{count:e.count-n.count}):e}))),outputString:JSON.stringify(t).replace(/(\[)|(\])|({)|(")|({)|(})/g," ")+" = "+n,payButtonDisabled:!0,setterButtonsDisabled:!1})}(e,c,u):Object(i.a)({},e,{outputString:"Not Possible"})}return Object(i.a)({},e,{outputString:"You need to pay more money"})},p=function(e,t){return Object(i.a)({},e,{coins:Object(o.a)(e.coins.filter((function(e){return e.value!==t})))})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COIN":return b(e,t);case"DECREMENT_COIN":return d(e,t);case"CALCULATE":return v(e,t.payload);case"SET_AMOUNT_TO_PAY":return Object(i.a)({},e,{toPay:Number(.1*f(100,1e4)).toFixed(1),setterButtonsDisabled:!0,payButtonDisabled:!1});case"ADD_COIN":return E(e,t.payload);case"REMOVE_COIN":return p(e,t.payload);default:return e}},O=Object(r.b)(y),h=(n(22),n(23),n(3));function g(e){var t=e.children;return u.a.createElement("span",{className:" myBadge badge m-2 px-4 badge-secondary"},t)}var C=function(e){var t=e.value,n=e.count,a=e.increment,l=e.decrement,c=e.disable,r=e.remove;return u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(g,null,u.a.createElement("h5",null,"Value:",t))),u.a.createElement("td",null,u.a.createElement(g,null,u.a.createElement("h5",null,"Count:",n))),u.a.createElement("td",null,u.a.createElement("button",{disabled:c,onClick:function(){return a(t)},className:"customBtn btn btn-secondary m-2"},u.a.createElement("h3",null,"+"))),u.a.createElement("td",null,u.a.createElement("button",{disabled:c,onClick:function(){return l(t)},className:"customBtn btn btn-danger  m-2"},u.a.createElement("h3",null,"-"))),u.a.createElement("td",null,u.a.createElement("button",{disabled:c,onClick:function(){return r(t)},className:"btn btn-danger  m-2"},u.a.createElement("h5",null,"Remove"))))},j=n(13),N=function(e){var t=Object(a.useState)(e),n=Object(j.a)(t,2);return{value:n[0],setValue:n[1]}},k=function(){var e=N(0),t=e.value,n=e.setValue,u=N(0),l=u.value,c=u.setValue,r=Object(a.useMemo)((function(){return{count:t,value:l}}),[t,l]),o=Object(h.c)((function(e){return e.coins})),i=Object(h.c)((function(e){return e.setterButtonsDisabled})),s=Object(h.c)((function(e){return e.toPay})),m=Object(h.c)((function(e){return e.outputString})),b=Object(h.c)((function(e){return e.payButtonDisabled})),d=Object(h.b)(),E=Object(a.useCallback)((function(e){d(function(e){return{type:"INCREMENT_COIN",payload:e}}(e))}),[]),f=Object(a.useCallback)((function(e){d(function(e){return{type:"DECREMENT_COIN",payload:e}}(e))}),[]),v=Object(a.useCallback)((function(e){d(function(e){return{type:"CALCULATE",payload:e}}(e))}),[]),p=Object(a.useCallback)((function(){d({type:"SET_AMOUNT_TO_PAY"})}),[]),y=Object(a.useCallback)((function(){d(function(e){return{type:"ADD_COIN",payload:e}}(r))}),[r]),O=Object(a.useCallback)((function(e){d(function(e){return{type:"REMOVE_COIN",payload:e}}(e))}),[]);return{count:t,setCount:n,value:l,setValue:c,coins:o,setterButtonsStatus:i,toPay:s,outputString:m,payButtonStatus:b,coinIncrement:E,coinDecrement:f,calculate:v,setToPayAmount:p,addNewCoin:y,deleteCoin:O}},A=function(e){var t=N(""),n=t.value,a=t.setValue;return u.a.createElement("div",null,u.a.createElement("span",{className:"badge m-2 badge-secondary"},u.a.createElement("h5",null,"Required to Pay: ",e.toPay)),u.a.createElement("br",null),u.a.createElement("input",{className:"input-lg  m-2",type:"number",step:.1,value:n,onChange:function(e){return a(e.target.value)},disabled:e.disable,placeholder:"Enter amount"}),u.a.createElement("button",{className:"btn-primary",disabled:e.disable,onClick:function(){return e.calculate(n)}},u.a.createElement("h4",null,"Pay")))},B=function(){var e=k(),t=e.count,n=e.setCount,a=e.value,l=e.setValue,c=e.coins,r=e.setterButtonsStatus,o=e.toPay,i=e.outputString,s=e.payButtonStatus,m=e.coinIncrement,b=e.coinDecrement,d=e.calculate,E=e.setToPayAmount,f=e.addNewCoin,v=e.deleteCoin;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,u.a.createElement("table",{style:{margin:"auto"}},u.a.createElement("tbody",null,c.map((function(e){return u.a.createElement(C,{key:e.value,disable:r,value:e.value,decrement:b,increment:m,remove:v,count:e.count})})))),u.a.createElement("h2",{className:"text-primary"},"Add Coin"),u.a.createElement("table",{style:{margin:"auto"}},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(g,null,u.a.createElement("h5",null,"Value:"))),u.a.createElement("td",null,u.a.createElement("input",{type:"number",value:a,className:"form-control",name:"value",step:.1,onChange:function(e){return l(+e.target.value)}})),u.a.createElement("td",null,u.a.createElement(g,null,u.a.createElement("h5",null,"Count:"))),u.a.createElement("td",null,u.a.createElement("input",{type:"number",value:t,className:"form-control",name:"count",onChange:function(e){return n(+e.target.value)}})),u.a.createElement("td",null,u.a.createElement("button",{className:"btn-primary btn-success ml-2",onClick:function(){return f()}},u.a.createElement("h5",null," Add Coin ")))))),u.a.createElement("button",{className:"btn-primary btn-success",disabled:r,onClick:function(){return E()}},u.a.createElement("h3",null," Generate Amount:")),u.a.createElement(A,{toPay:o,disable:s,calculate:d}),i&&u.a.createElement("span",{className:"badge m-2 badge-secondary"},u.a.createElement("h5",null,i))))};var D=function(){return u.a.createElement(h.a,{store:O},u.a.createElement("div",{className:"App"},u.a.createElement("h1",{style:{color:"orange"}},"Change Application"),u.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(u.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.194600cb.chunk.js.map