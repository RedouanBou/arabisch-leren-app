(this["webpackJsonparabisch-leren"]=this["webpackJsonparabisch-leren"]||[]).push([[0],{30:function(e,t,a){},53:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),c=(a(53),a(15)),l=a(16),o=a(18),h=a(17),d=(a(30),a(27)),b=a(6),j=a(85),u=a(88),g=a(90),f=a(21),p=a(86),O=a(22),x=a.n(O),m=a(45),v=a.n(m),C=a(3),k=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handlePageClick=function(e){var t=e.selected,a=t*n.state.perPage;n.setState({currentPage:t,offset:a},(function(){n.loadMoreData()}))},n.state={offset:0,tableData:[],orgtableData:[],perPage:10,currentPage:0},n.handlePageClick=n.handlePageClick.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"loadMoreData",value:function(){var e=this.state.orgtableData,t=e.slice(this.state.offset,this.state.offset+this.state.perPage);this.setState({pageCount:Math.ceil(e.length/this.state.perPage),tableData:t})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;x.a.get("https://sheet.best/api/sheets/34d3f928-d3c4-4ff1-a2ff-8af1f2c53ca5").then((function(t){var a=t.data,n=a.slice(e.state.offset,e.state.offset+e.state.perPage);e.setState({pageCount:Math.ceil(a.length/e.state.perPage),orgtableData:t.data,tableData:n})}))}},{key:"render",value:function(){return Object(C.jsxs)(j.a,{className:"m-5",children:[Object(C.jsx)("h1",{children:"Traslantions page"}),Object(C.jsx)("hr",{}),Object(C.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Vertaling"}),Object(C.jsx)("th",{children:"Uitspraak"}),Object(C.jsx)("th",{children:"Arabisch"})]})}),Object(C.jsx)("tbody",{children:this.state.tableData.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:e.arabisch}),Object(C.jsx)("td",{children:e.uitspraak}),Object(C.jsx)("td",{children:e.vertaling})]})}))})]}),Object(C.jsx)(v.a,{previousLabel:"Vorige",nextLabel:"Volgende",breakLabel:"...",breakClassName:"break-me pagination page-item",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})}}]),a}(n.PureComponent),y=a(89),P=a(87),D=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={fields:{},errors:{}},n}return Object(l.a)(a,[{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleValidation",value:function(){var e=this.state.fields,t=this.state.errors,a=!0;return e.arabic||(a=!1,t.arabic="Arabisch kan niet leeg zijn..."),e.statement||(a=!1,t.statement="Uitspraak kan niet leeg zijn..."),"undefined"!==typeof e.statement&&(e.statement.match(/^[a-zA-Z]+$/)||(a=!1,t.statement="Uitspraak mag alleen uit letters bestaan")),e.translation||(a=!1,t.translation="Vertaling kan niet leeg zijn..."),"undefined"!==typeof e.translation&&(e.translation.match(/^[a-zA-Z]+$/)||(a=!1,t.translation="Vertaling mag alleen uit letters bestaan")),this.setState({errors:t}),a}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleValidation()?(x.a.post("https://sheet.best/api/sheets/34d3f928-d3c4-4ff1-a2ff-8af1f2c53ca5",this.state.fields).then((function(e){console.log(console.log(e))})),alert("Succesvol toegevoegd!")):alert("De formulier heeft een of meerdere foutmelden. Probeer opnieuw!")}},{key:"render",value:function(){return Object(C.jsx)(j.a,{className:"m-5",children:Object(C.jsxs)(j.a,{className:"m-5",children:[Object(C.jsx)("h1",{children:"Add Translation"}),Object(C.jsx)("hr",{}),Object(C.jsxs)(y.a,{onSubmit:this.handleSubmit.bind(this),children:[Object(C.jsxs)(y.a.Group,{controlId:"arabic",children:[Object(C.jsx)(y.a.Label,{children:"Arabisch"}),Object(C.jsx)(y.a.Control,{type:"text",name:"arabic",placeholder:"Arabisch ...",onChange:this.handleChange.bind(this,"arabic"),value:this.state.fields.arabic}),Object(C.jsx)("span",{style:{color:"red"},children:this.state.errors.arabic})]}),Object(C.jsxs)(y.a.Group,{controlId:"statement",children:[Object(C.jsx)(y.a.Label,{children:"Uitspraak"}),Object(C.jsx)(y.a.Control,{type:"text",name:"statement",placeholder:"Uitspraak ...",onChange:this.handleChange.bind(this,"statement"),value:this.state.fields.statement}),Object(C.jsx)("span",{style:{color:"red"},children:this.state.errors.statement})]}),Object(C.jsxs)(y.a.Group,{controlId:"translation",children:[Object(C.jsx)(y.a.Label,{children:"Vertaling"}),Object(C.jsx)(y.a.Control,{type:"text",name:"translation",placeholder:"Vertaling ...",onChange:this.handleChange.bind(this,"translation"),value:this.state.fields.translation}),Object(C.jsx)("span",{style:{color:"red"},children:this.state.errors.translation})]}),Object(C.jsx)(P.a,{variant:"primary",type:"submit",children:" Toevoegen "})]})]})})}}]),a}(n.PureComponent);var N=function(){return Object(C.jsx)(d.a,{children:Object(C.jsxs)(j.a,{className:"p-0",fluid:!0,children:[Object(C.jsxs)(u.a,{className:"border-bottom",bg:"transparant",expand:"lg",children:[Object(C.jsx)(u.a.Brand,{children:"Arabisch Leren App"}),Object(C.jsx)(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(C.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(C.jsxs)(g.a,{className:"ml-auto",children:[Object(C.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"}),Object(C.jsx)(d.b,{className:"nav-link",to:"/add-translation",children:"Add Translation"})]})})]}),Object(C.jsxs)(b.c,{children:[Object(C.jsx)(b.a,{path:"/",exact:!0,children:Object(C.jsx)(k,{})}),Object(C.jsx)(b.a,{path:"/add-translation",children:Object(C.jsx)(D,{})})]})]})})};a(81);var S=function(){return Object(C.jsx)("div",{})},A=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{}),Object(C.jsx)(S,{})]})}}]),a}(s.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};a(82);i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root")),L()}},[[83,1,2]]]);
//# sourceMappingURL=main.d605efda.chunk.js.map