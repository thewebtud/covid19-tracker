(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/done.330829e8.svg"},16:function(e,t,a){e.exports=a.p+"static/media/recovered.4bbe1a17.svg"},17:function(e,t,a){e.exports=a.p+"static/media/death.c242f9e7.svg"},32:function(e,t,a){e.exports=a.p+"static/media/coronalogo.4f6ef320.svg"},37:function(e,t,a){e.exports=a(70)},42:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(42),a(43),a(13)),i=a(11),s=a(7),m=a(8),u=a(9),d=a(10),E=a(32),v=a.n(E),h=a(12),p=a.n(h),f=(a(61),a(15)),b=a.n(f),y=a(16),g=a.n(y),w=a(17),N=a.n(w),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovery:0,death:0},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;p.a.get("https://covid19.mathdro.id/api").then((function(t){e.setState({confirmed:t.data.confirmed.value}),e.setState({recovery:t.data.recovered.value}),e.setState({death:t.data.deaths.value})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"worldwide_top_logo_container"},l.a.createElement("img",{src:v.a,className:"rotate",alt:"Go Corona.. Corona Go"})),l.a.createElement("div",null,l.a.createElement("p",{className:"worldwide_para"},"Global Data ")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"worldwide_info_container"},l.a.createElement("div",{className:"confirmed"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Confirmed")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:b.a,className:"rotate",alt:"Confirmed cases"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.confirmed))),l.a.createElement("div",{className:"recovered"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Recovered")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:g.a,className:"rotate",alt:"Total recovery"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.recovery))),l.a.createElement("div",{className:"death"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Deaths")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:N.a,className:"rotate",alt:"Total deaths"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.death)))),l.a.createElement("br",null),l.a.createElement("p",{className:"recovery_percentage_para"},"Recovery Percentage: ",(this.state.recovery/this.state.confirmed*100).toPrecision(2),"% "),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null))}}]),a}(l.a.Component),C=(a(62),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovery:0,death:0,countries:[],selectedCountry:"India",selectedCountryISO:"IN",recoveryPerentage:0},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;p.a.get("https://covid19.mathdro.id/api/countries").then((function(t){e.setState({countries:t.data.countries})})),this.populateDataForSpecificCountry(this.state.selectedCountry,this.state.selectedCountryISO)}},{key:"populateDataForSpecificCountry",value:function(e,t){var a=this;console.log(e),console.log(t),this.setState({selectedCountry:e}),this.setState({selectedCountryISO:t}),p.a.get("https://covid19.mathdro.id/api/countries/"+e).then((function(e){a.setState({confirmed:e.data.confirmed.value}),a.setState({recovery:e.data.recovered.value}),a.setState({death:e.data.deaths.value})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"country_search_container"},l.a.createElement("div",null,l.a.createElement("p",{className:"worldwide_para"},"Search for Country: ")," ",l.a.createElement("br",null)),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"btn btn-primary dropdown-toggle",type:"button",id:"country_dropdown_button","data-toggle":"dropdown"},l.a.createElement("img",{src:"https://www.countryflags.io/".concat(this.state.selectedCountryISO,"/shiny/24.png")}),this.state.selectedCountry),l.a.createElement("ul",{class:"dropdown-menu"},this.state.countries.map((function(t,a){return l.a.createElement("li",{key:t.iso2,onClick:e.populateDataForSpecificCountry.bind(e,t.name,t.iso2)},l.a.createElement("a",{key:t.iso2},l.a.createElement("img",{src:"https://www.countryflags.io/".concat(t.iso2,"/shiny/24.png")}),t.name)," ")}))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"worldwide_info_container"},l.a.createElement("div",{className:"confirmed"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Confirmed")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:b.a,className:"rotate",alt:"Confirmed cases"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.confirmed))),l.a.createElement("div",{className:"recovered"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Recovered")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:g.a,className:"rotate",alt:"Total recovery"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.recovery))),l.a.createElement("div",{className:"death"},l.a.createElement("div",null,l.a.createElement("a",{className:"category_label"},"Deaths")," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("img",{src:N.a,className:"rotate",alt:"Total deaths"})),l.a.createElement("div",null,l.a.createElement("a",{className:"category_value"},this.state.death)))),l.a.createElement("br",null),l.a.createElement("p",{className:"recovery_percentage_para"},"Recovery Percentage: ",(this.state.recovery/this.state.confirmed*100).toPrecision(2),"% "),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null))}}]),a}(l.a.Component)),k=(a(63),function(){return l.a.createElement("div",{className:"worldwide_top_container"},l.a.createElement(_,null),l.a.createElement(C,null))}),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Superman at work...."))}}]),a}(l.a.Component),O=a(72),j=(a(64),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={indianState:"",confirmed:0,recovered:0,death:0,stateData:[]},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;p.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise").then((function(t){console.log(t.data.data.statewise),e.setState({stateData:t.data.data.statewise})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"statewise_outer_div"},l.a.createElement(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"State"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Deaths"))),l.a.createElement("tbody",null,this.state.stateData.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deaths))})))))}}]),a}(l.a.Component));var D=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"routingContainer"},l.a.createElement("nav",{className:"NavLink "},l.a.createElement("ul",{className:"header width"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/covid19-tracker",className:"nav-link"}," Worldwide ")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/india-statewise",className:"nav-link"},"India-Statewise")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/coming-soon",className:"nav-link"},"Coming Soon")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:k}),l.a.createElement(i.a,{path:"/covid19-tracker",component:k}),l.a.createElement(i.a,{path:"/india-statewise",component:j}),l.a.createElement(i.a,{path:"/coming-soon",component:S})),l.a.createElement("hr",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=l.a.createElement(o.a,null,l.a.createElement(D,null));c.a.render(I,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5e93b880.chunk.js.map