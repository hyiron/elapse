webpackJsonp([16],{"9jiS":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=a("ZLEe"),s=a.n(i),n=a("lC5x"),c=a.n(n),o=a("J0Oq"),l=a.n(o),h=a("Yarq"),p=a.n(h),u=a("AA3o"),v=a.n(u),f=a("xSur"),d=a.n(f),m=a("UzKs"),g=a.n(m),C=a("Y7Ml"),y=a.n(C),A=a("VCXJ"),x=a("9ZwC"),_=a.n(x),O=a("6wm7"),k=a("jagD"),b=a("fkRY"),T=_()({watch:{selectedProject:function(){this.fetchPerformences()},selectedApi:function(){this.fetchPerformences()},chartOption:function(){this.renderChart()},avarageChartOption:function(){this.renderAvarageChart()},callTimeChartOption:function(){this.renderCallTimeChart()}}})(r=function(t){function e(){var t,a,r,i;v()(this,e);for(var s=arguments.length,n=Array(s),c=0;c<s;c++)n[c]=arguments[c];return a=r=g()(this,(t=e.__proto__||p()(e)).call.apply(t,[this].concat(n))),r.timer=null,r.apiList=[],r.selectedApi="",r.chart=null,r.chartOption={},r.avarageChart="",r.avarageChartOption={},r.callTimeChart="",r.callTimeChartOption={},i=a,g()(r,i)}return y()(e,t),d()(e,[{key:"created",value:function(){this.fecthApiList(),this.fetchApiCallTimes(),this.fetchApiAvarageResTime()}},{key:"mounted",value:function(){var t=this.$refs.chart,e=this.$refs.callTimeChart,a=this.$refs.avarageChart;this.chart=b.init(t),this.avarageChart=b.init(a),this.callTimeChart=b.init(e),this.$loading.start(),this.$loading.close()}},{key:"fecthApiList",value:function(){var t=l()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getApiList();case 3:e=t.sent,this.apiList=e.map(function(t){var e={};return e.value=t,e.title=t,e}),this.selectedApi=this.apiList[0].value,this.fetchPerformences(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.$message.error(t.t0.message);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()},{key:"fetchApiAvarageResTime",value:function(){var t=l()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getApiAvarageResTime();case 3:e=t.sent,this.getAvarageChartOption(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$message.error(t.t0.message);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()},{key:"fetchApiCallTimes",value:function(){var t=l()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getApiCallTimes();case 3:e=t.sent,this.getCallTimeChartOption(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$message.error(t.t0.message);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()},{key:"fetchPerformences",value:function(){var t=l()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getApiPerformences(this.selectedApi);case 3:e=t.sent,this.getOption(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$message.error(t.t0.message);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()},{key:"getOption",value:function(t){this.chartOption={tooltip:{trigger:"axis"},xAxis:{data:t.map(function(t){return Object(O.a)(t.dateTime)})},yAxis:{splitLine:{show:!1}},dataZoom:[{startValue:Object(O.a)(t[0].dateTime)},{type:"inside"}],visualMap:{top:10,right:10,pieces:[{gt:0,lte:50,color:"#096"},{gt:50,lte:100,color:"#ffde33"},{gt:100,lte:150,color:"#ff9933"},{gt:150,lte:200,color:"#cc0033"},{gt:200,lte:300,color:"#660099"},{gt:300,color:"#7e0023"}],outOfRange:{color:"#999"}},series:{name:"响应时间",type:"line",data:t.map(function(t){return t.responseTime}),markLine:{silent:!0,data:[{yAxis:50},{yAxis:100},{yAxis:150},{yAxis:200},{yAxis:300}]}}}}},{key:"getAvarageChartOption",value:function(t){this.avarageChartOption={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:s()(t)},series:[{name:"平均响应时间",type:"bar",data:s()(t).map(function(e){return t[e]})}]}}},{key:"getCallTimeChartOption",value:function(t){this.callTimeChartOption={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问接口",type:"pie",radius:"60%",center:["50%","60%"],data:s()(t).reduce(function(e,a){return e.push({name:a,value:t[a]}),e},[]),itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},{key:"renderChart",value:function(){this.chart.setOption(this.chartOption,!1,!1)}},{key:"renderAvarageChart",value:function(){this.avarageChart.setOption(this.avarageChartOption,!1,!1)}},{key:"renderCallTimeChart",value:function(){this.callTimeChart.setOption(this.callTimeChartOption,!1,!1)}}]),e}(A.default))||r,w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ta-page"},[a("ta-alert",[t._v("接口性能记录取全部数据（具体接口分析取最近的300条）")]),t._v(" "),a("ta-row",[a("ta-col",{attrs:{span:6,sm:12,md:6}},[a("div",{staticClass:"ta-page__chart"},[a("div",{staticClass:"head"},[a("ta-icon",{attrs:{name:"pie-graph"}}),t._v(" "),a("span",[t._v("接口调用次数")])],1),t._v(" "),a("div",{ref:"callTimeChart",staticClass:"body"})])]),t._v(" "),a("ta-col",{attrs:{span:6,sm:12,md:6}},[a("div",{staticClass:"ta-page__chart"},[a("div",{staticClass:"head"},[a("ta-icon",{attrs:{name:"stats-bars"}}),t._v(" "),a("span",[t._v("接口平均响应时间（/ms）")])],1),t._v(" "),a("div",{ref:"avarageChart",staticClass:"body"},[t._v("1")])])])],1),t._v(" "),a("ta-row",[a("ta-col",{attrs:{span:12}},[a("div",{staticClass:"ta-page__chart ta-page__chart--full"},[a("div",{staticClass:"head"},[a("ta-icon",{attrs:{name:"arrow-graph-down-right"}}),t._v(" "),a("ta-select",{attrs:{label:"具体接口分析",options:t.apiList},model:{value:t.selectedApi,callback:function(e){t.selectedApi=e},expression:"selectedApi"}})],1),t._v(" "),a("div",{ref:"chart",staticClass:"body"})])])],1)],1)},staticRenderFns:[]};var L=a("Z0/y")(T,w,!1,function(t){a("BxHZ")},"data-v-106d635b",null);e.default=L.exports},BxHZ:function(t,e){}});
//# sourceMappingURL=api-performence.8482de728a6b5a41bb49.js.map