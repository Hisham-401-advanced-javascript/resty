(this["webpackJsonphi-resty"]=this["webpackJsonphi-resty"]||[]).push([[0],{28:function(e,t,a){e.exports=a(53)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(7),r=a(9),o=a(8),s=a(0),c=a.n(s),i=a(23),u=a.n(i),h=a(10),d=(a(33),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(h.b,{to:"/home"}," Home "),c.a.createElement(h.b,{to:"history"}," History ")),c.a.createElement("h1",null,"RESTy"))}),m=(a(39),function(){return c.a.createElement("footer",null,c.a.createElement("p",null,"\xa92020 Code Fellows"))}),p=a(1),f=a(12),E=a.n(f),g=(a(40),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).ShowDelails=function(e){e.preventDefault();var t=document.getElementById(e.target.name);"block"===t.style.display?(console.log("none"),t.style.display="none",e.target.value="Hide Delails"):(console.log("show"),t.style.display="block",e.target.value="Show Delails")},e.newSearch=function(t){t.preventDefault();var a=Number(t.target.name),n=e.props.all[a].url,l=e.props.all[a].method,r=e.props.all[a].body;e.props.handler(n,l,r)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("span",null,c.a.createElement("ul",{className:"list"},this.props.all.map((function(t,a){return c.a.createElement("li",{key:a},t.method+" "+t.url,c.a.createElement("button",{name:a,onClick:e.ShowDelails},"Show Delails"),c.a.createElement("button",{name:a,onClick:e.newSearch},c.a.createElement(h.b,{to:"/home"},"New Search")),c.a.createElement("div",{class:"textarea",id:a},"Header:",c.a.createElement(E.a,{src:t.historyData}),"Results:",c.a.createElement(E.a,{src:t.historyData})))}))))}}]),a}(c.a.Component)),y=a(18),v=a.n(y),b=a(25),S=a(27),O=(a(42),a(26)),k=a.n(O),j=function(e){var t=e.children,a=Object(S.a)(e,["children"]);return c.a.createElement("button",a,t)},C=function(){return c.a.createElement("img",{src:"https://media1.tenor.com/images/85d269dc9595a7bcf87fd0fa4039dd9f/tenor.gif?itemid=8647480",alt:"Hello",class:"zoom2",height:"30",width:"30"})},w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleClick=function(e){e.preventDefault(),l.setState({isPlacingOrder:!0},(function(){setTimeout((function(){var e="".concat(l.state.method," ").concat(l.state.url);l.setState({methodurl:e}),l.setState({isPlacingOrder:!1})}),1e3)}))},l.handleUrl=function(e){var t=e.target.value;l.setState({url:t})},l.handleMethod=function(e){var t=e.target.value;l.setState({method:t,firstSelect:!1})},l.handleBody=function(e){var t=e.target.value;l.setState({body:t})},l.handleSubmit=function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n,r,o,s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:l.state.method,headers:{"Content-Type":"application/json"}},"GET"!==l.state.method&&(a.body=l.state.body),l.props.toggleLoading(),e.next=6,fetch(l.state.url,a).then((function(e){return e.json()}));case 6:return n=e.sent,e.next=9,k.a.get(l.state.url);case 9:r=e.sent,console.log("raw.headers",n.headers),console.log("headers",r),console.log(n),o=localStorage.getItem("item")||"[]",(o=JSON.parse(o)).push({method:l.state.method,url:l.state.url,body:l.state.body,historyData:n,historyHeaders:r.headers}),localStorage.setItem("item",JSON.stringify(o)),n.count?(s=n.count,l.props.handler(s,n,r.headers)):(c=Object.keys(n).length,l.props.handler(c,n,r.headers)),l.props.toggleLoading();case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.state={method:"GET",url:"https://swapi.dev/api/people/",body:{},item:[],bofyJson:{},methodurl:"GET https://swapi.dev/api/people/",Count:0,Results:[],isPlacingOrder:!1,firstSelect:!0},l}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.state.firstSelect||(this.setState({url:this.props.searchItemUrl||"https://swapi.dev/api/people/",method:this.props.searchItemMethod||"GET",body:this.props.searchItemBody||{}}),this.handleSubmit())}},{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement("div",null,c.a.createElement("label",null,"URL: ",c.a.createElement("input",{onChange:this.handleUrl,value:this.state.url})),c.a.createElement("label",null,"Body: ",c.a.createElement("input",{onChange:this.handleBody,value:this.state.body})),c.a.createElement(j,{type:"button",disabled:this.state.isPlacingOrder,onClick:this.handleSubmit},this.state.isPlacingOrder?c.a.createElement(C,null):"Go"),c.a.createElement("div",{class:"checkRadioContainer"},this.state.firstSelect?c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"radioGroup",value:"GET",onChange:this.handleMethod,checked:"checked"}),c.a.createElement("i",{class:"fa fa-check fa-2x"}),c.a.createElement("span",null,"GET")):c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"radioGroup",value:"GET",onChange:this.handleMethod}),c.a.createElement("i",{class:"fa fa-check fa-2x"}),c.a.createElement("span",null,"GET")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"radioGroup",value:"POST",onChange:this.handleMethod}),c.a.createElement("i",{class:"fa fa-check fa-2x"}),c.a.createElement("span",null,"POST")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"radioGroup",value:"PUT",onChange:this.handleMethod}),c.a.createElement("i",{class:"fa fa-check fa-2x"}),c.a.createElement("span",null,"PUT")),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"radioGroup",value:"DELETE",onChange:this.handleMethod}),c.a.createElement("i",{class:"fa fa-check fa-2x"}),c.a.createElement("span",null,"DELETE")))))}}]),a}(c.a.Component),I=(a(52),function(e){return c.a.createElement("div",{id:"textarea"},c.a.createElement("div",null,"Count: ",e.count),c.a.createElement("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif",className:"loading-".concat(e.loading),alt:"thank you"}),"Header:",c.a.createElement(E.a,{src:e.headers}),"Results:",c.a.createElement(E.a,{src:e.results}))}),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).toggleLoading=function(){console.log("this.state.loading: ",l.state.loading),l.setState({loading:!l.state.loading})},l.handleForm=function(e,t,a,n){l.setState({count:e,results:t,headers:a,item:n})},l.handleHistory=function(e,t,a){l.setState({searchItemUrl:e,searchItemMethod:t,searchItemBody:a})},l.state={count:0,results:[],item:[],loading:!1,all:[],searchItemUrl:"",searchItemMethod:"",searchItemBody:""},l}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("item"),t=JSON.parse(e)||[];this.setState({all:t})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.a,{path:"/home",exact:!0},c.a.createElement(w,{handler:this.handleForm,toggleLoading:this.toggleLoading,searchItemUrl:this.state.searchItemUrl,searchItemMethod:this.state.searchItemMethod,searchItemBody:this.state.searchItemBody}),c.a.createElement(I,{loading:this.state.loading,count:this.state.count,results:this.state.results,headers:this.state.headers})),c.a.createElement(p.a,{path:"/history"},c.a.createElement(g,{handler:this.handleHistory,all:this.state.all})))}}]),a}(c.a.Component),D=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={headers:[]},l}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(T,null),c.a.createElement(m,null))}}]),a}(c.a.Component),G=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement(D,null))}}]),a}(c.a.Component),x=document.getElementById("root");u.a.render(c.a.createElement(G,null),x)}},[[28,1,2]]]);
//# sourceMappingURL=main.9059f37c.chunk.js.map