(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[4],{151:function(t,e,n){},419:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",(function(){return h}));var a=n(6),o=n(9),i=n(10),r=n(12),c=n(11),s=n(0),l=(n(151),n(152)),d=(n(400),n(401)),u=n.n(d),h=function(e){Object(r.a)(s,e);var n=Object(c.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=n.call(this,e)).openUrl=function(t){t.url&&window.open(t.url,"_blank")},a.getData=function(){a.state.loading||(a.setState({loading:!0}),u.a.get("https://api.github.com/repos/liqiang-xxfy/chrome-bookmark/contents/docs/chrome-bookmark.json?ref=master").then((function(e){if(200!==e.status)throw new Error("no data");var n=e.data.content,o=t.from(n,"base64").toString(),i=JSON.parse(o);a.setState({data:i})})).catch((function(t){console.log("e",t)})).finally((function(){a.setState({loading:!1})})))},a.delete=function(){a.setState({data:[]})},a.state={data:[],options:{children:"children",label:"title"},loading:!1},a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this,e=this.state,n=e.data,o=e.options,i=e.loading;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)(l.Input,{placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u8fdb\u884c\u8fc7\u6ee4",onChange:function(e){return t.tree.filter(e)}}),Object(a.jsx)(l.Button,{onClick:this.getData,children:"\u66f4\u65b0"}),Object(a.jsx)(l.Button,{onClick:this.delete,children:"\u5220\u9664"})]}),Object(a.jsx)(l.Loading,{loading:i,children:Object(a.jsx)(l.Tree,{ref:function(e){return t.tree=e},data:n,highlightCurrent:!0,options:o,nodeKey:"id",indent:25,defaultExpandedKeys:["1"],accordion:!0,onNodeClicked:this.openUrl,filterNodeMethod:function(t,e){return!t||-1!==e.title.indexOf(t)}})})]})}}]),s}(s.Component)}.call(this,n(147).Buffer)}}]);
//# sourceMappingURL=4.5ac26395.chunk.js.map