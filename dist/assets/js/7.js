(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{521:function(e,t,n){"use strict";n.r(t);n(564);var a=n(584),i=n.n(a),l=(n(569),n(602)),c=n.n(l),r=(n(541),n(545)),o=n.n(r),d=(n(226),n(34)),s=n.n(d),u=(n(542),n(551)),p=n.n(u),y=(n(225),n(148)),f=n.n(y),m=(n(230),n(196)),E=n.n(m),g=n(17),h=n.n(g),k=n(53),w=n.n(k),v=n(54),b=n.n(v),x=n(55),C=n.n(x),I=n(56),j=n.n(I),O=n(57),R=n.n(O),q=n(98),J=n.n(q),P=n(80),T=n(1),A=n.n(T),D=n(583),K=n.n(D),N=function(e,t,n,a){var i,l=arguments.length,c=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===("undefined"==typeof Reflect?"undefined":J()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(l<3?i(c):l>3?i(t,n,c):i(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},S=function(e){function t(){return w()(this,t),C()(this,j()(t).apply(this,arguments))}return R()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.dispatch,a=e.loading,l=[{title:"title",dataIndex:"title",key:"title"},{title:"desc",dataIndex:"desc",key:"desc"},{title:"tag",dataIndex:"tag",key:"tag"},{title:"views",dataIndex:"views",key:"views"},{title:"images",dataIndex:"images",key:"images",render:function(e){return A.a.createElement("img",{src:e,style:{height:"30px",width:"auto"},alt:""})}},{title:"Action",key:"action",render:function(e,t){return A.a.createElement("span",null,A.a.createElement("a",{onClick:function(){n({type:"list/update",payload:h()({},t,{title:"title has changed"})})}},"update"),A.a.createElement(E.a,{type:"vertical"}),A.a.createElement("a",{onClick:function(){n({type:"list/delete",payload:t.id})}},"delete"),A.a.createElement(E.a,{type:"vertical"}),A.a.createElement("a",{onClick:function(){n({type:"list/load",payload:t.id})}},"view"))}}];return A.a.createElement("div",{className:K.a.main},A.a.createElement(i.a,{bordered:!1},A.a.createElement(o.a,null,A.a.createElement(p.a,{span:2},A.a.createElement(f.a,{type:"primary",htmlType:"button",block:!0,onClick:function(){n({type:"list/create",payload:{title:"this is new"}})}},"add")),A.a.createElement(p.a,{span:1}),A.a.createElement(p.a,{span:3},A.a.createElement(f.a,{htmlType:"button",onClick:function(){n({type:"list/query"})}},A.a.createElement(s.a,{type:"reload"})))),A.a.createElement(c.a,{columns:l,dataSource:t,rowKey:"id",loading:a["list/query"]})))}}]),t}(T.Component);S=N([Object(P.connect)(function(e){return h()({},e.list,{loading:e.loading.effects})})],S),t.default=S},583:function(e,t,n){}}]);