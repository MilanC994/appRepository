(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/background.e8bbf2fe.jpeg"},20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),l=(n(25),n(6)),i=n(18),u=n(3),s={coin:[{id:0,value:5,count:10},{id:1,value:2,count:10},{id:2,value:1,count:10},{id:3,value:.5,count:10},{id:4,value:.2,count:10},{id:5,value:.1,count:10}],toPay:0,payed:0,difference:0,outputString:"",buttonDIsabled:!1,disablePay:!0};function d(e,t,n){return n>e.coin.length-1&&0!=e.difference?Object(u.a)(t,(function(e){e.outputString="No enough coins to return change, please input less money ! Change:"+e.difference,e.disablePay=!1,e.buttonDIsabled=!0})):0==e.difference?0==e.outputString.length?Object(i.a)({},e,{outputString:"Accepted !"}):e:0!=e.coin[n].count&&e.difference>=e.coin[n].value?(console.log(e.difference,e.coin[n].value,e.difference-e.coin[n].value),d(Object(u.a)(e,(function(t){t.coin[n].count-=1,t.difference-=e.coin[n].value,t.difference=Number(t.difference).toFixed(1)})),t,n)):0==e.coin[n].count||e.difference<e.coin[n].value?d(e,t,n+1):void 0}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(e){e.coin[t.payload].count+=1}))}function b(e,t){return e.coin[t.payload].count>0?Object(u.a)(e,(function(e){e.coin[t.payload].count-=1})):e}function m(e,t){return t.payload-e.toPay>=0?(console.log(t.payload+" JE VECE OD "+e.toPay),Object(u.a)(e,(function(e){e.payed=t.payload,e.difference=Number(t.payload-e.toPay).toFixed(1),e.disablePay=!0,e.buttonDIsabled=!1,e.outputString=""}))):(console.log("U ELSE"),Object(u.a)(e,(function(e){e.outputString="You need to pay more money, input correct amount !",e.difference=0})))}function f(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COIN":return p(e,t);case"DECREMENT_COIN":return b(e,t);case"CALCULATE":return console.log(e.difference+"  RAZLIKA"),d(e,e,0);case"SETPAYED":return m(e,t);case"SETTOPAY":return Object(u.a)(e,(function(e){e.toPay=Number(.1*f(100,300)).toFixed(1),e.buttonDIsabled=!0,e.disablePay=!1}));default:return e}},E=Object(l.b)(y),h=(n(29),n(30),n(10)),g=n(2),v=n(7),P=n(8),O=n(11),N=n(9),j=n(12);var C=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("td",null," ",o.a.createElement("span",{className:"badge m-2 badge-secondary"},o.a.createElement("h3",null,e.value))),o.a.createElement("td",null,o.a.createElement("span",{className:"badge m-2 badge-secondary"},o.a.createElement("h3",null,e.count))),o.a.createElement("td",null,o.a.createElement("button",{disabled:e.disable,onClick:function(){return e.incrementProp(e.id)},className:" btn btn-secondary m-2 btn-sm"},o.a.createElement("h3",null,"+"))),o.a.createElement("td",null,o.a.createElement("button",{disabled:e.disable,onClick:function(){return e.decrementProp(e.id)},className:"btn btn-danger btn-default m-2"},o.a.createElement("h3",null,"-"))))},T=function(e){function t(e){return Object(v.a)(this,t),Object(O.a)(this,Object(N.a)(t).call(this,e))}return Object(j.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e,t=this;return o.a.createElement("div",null,o.a.createElement("span",{className:"badge m-2 badge-secondary"},o.a.createElement("h5",null,"Required to Pay: ",this.props.toPay)),o.a.createElement("br",null),o.a.createElement("input",(e={className:"input-lg",onChange:this.handleEmailChange,disabled:this.props.disable,ref:"inputText"},Object(g.a)(e,"className","m-2"),Object(g.a)(e,"type","text"),Object(g.a)(e,"placeholder","Enter amount"),e)),o.a.createElement("button",{className:"btn-primary",disabled:this.props.disable,onClick:function(){t.props.setPayed(t.refs.inputText.value),t.props.calculate()}},o.a.createElement("h4",null,"Pay")))}}]),t}(a.Component),S=(n(17),function(e){function t(){return Object(v.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("table",{style:{margin:"auto"}},o.a.createElement("tr",null,this.props.coinProp.map((function(t){return o.a.createElement(C,{key:t.id,disable:e.props.btnDisabled,id:t.id,value:t.value,decrementProp:e.props.decrementProp,incrementProp:e.props.incrementProp,count:t.count})})))),o.a.createElement("button",{className:"btn-primary btn-success",disabled:this.props.btnDisabled,onClick:function(){return e.props.setToPay()}},o.a.createElement("h2",null," Apply:")),o.a.createElement(T,Object(g.a)({toPay:this.props.getToPay,disable:this.props.dsblPay,calculate:this.props.calculate,setPayed:this.props.setPayed},"calculate",this.props.calculate)),o.a.createElement("span",{className:"badge m-2 badge-secondary"},o.a.createElement("h5",null,this.props.getOutputString))))}}]),t}(a.Component)),A=Object(h.b)((function(e){return{coinProp:e.coin,btnDisabled:e.buttonDIsabled,getToPay:e.toPay,getOutputString:e.outputString,dsblPay:e.disablePay}}),(function(e){return{incrementProp:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:"INCREMENT_COIN",payload:e}}(t))},decrementProp:function(t){return e({type:"DECREMENT_COIN",payload:t})},calculate:function(){return e({type:"CALCULATE",payload:5})},setPayed:function(t){return e({type:"SETPAYED",payload:t})},setToPay:function(){return e({type:"SETTOPAY",payload:5})}}}))(S);var D=function(){return o.a.createElement(h.a,{store:E},o.a.createElement("div",{className:"App"},o.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.40df8934.chunk.js.map