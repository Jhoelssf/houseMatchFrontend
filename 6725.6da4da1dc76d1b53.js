"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[6725],{6725:(C,s,a)=>{a.r(s),a.d(s,{ChartsDemoModule:()=>h});var u=a(9808),p=a(82),o=a(4893),g=a(8568),d=a(464);let c=(()=>{class t{constructor(e){this.layoutService=e,this.subscription=this.layoutService.configUpdate$.subscribe(r=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const e=getComputedStyle(document.documentElement),r=e.getPropertyValue("--text-color"),n=e.getPropertyValue("--text-color-secondary"),i=e.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{fontColor:r}}},scales:{x:{ticks:{color:n,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:n},grid:{color:i,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:r}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:r}}},scales:{x:{ticks:{color:n},grid:{color:i,drawBorder:!1}},y:{ticks:{color:n},grid:{color:i,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:r}}},scales:{r:{grid:{color:i}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--indigo-400"),pointBackgroundColor:e.getPropertyValue("--indigo-400"),pointBorderColor:e.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:r,pointHoverBorderColor:e.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--purple-400"),pointBackgroundColor:e.getPropertyValue("--purple-400"),pointBorderColor:e.getPropertyValue("--purple-400"),pointHoverBackgroundColor:r,pointHoverBorderColor:e.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:r}}},scales:{r:{grid:{color:n}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.P))},t.\u0275cmp=o.Xpm({type:t,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),o._uU(4,"Linear Chart"),o.qZA(),o._UZ(5,"p-chart",3),o.qZA(),o.TgZ(6,"div",4)(7,"h5",5),o._uU(8,"Pie Chart"),o.qZA(),o._UZ(9,"p-chart",6),o.qZA(),o.TgZ(10,"div",4)(11,"h5",5),o._uU(12,"Polar Area Chart"),o.qZA(),o._UZ(13,"p-chart",7),o.qZA()(),o.TgZ(14,"div",1)(15,"div",2)(16,"h5"),o._uU(17,"Bar Chart"),o.qZA(),o._UZ(18,"p-chart",8),o.qZA(),o.TgZ(19,"div",4)(20,"h5",5),o._uU(21,"Doughnut Chart"),o.qZA(),o._UZ(22,"p-chart",9),o.qZA(),o.TgZ(23,"div",4)(24,"h5",5),o._uU(25,"Radar Chart"),o.qZA(),o._UZ(26,"p-chart",10),o.qZA()()()),2&e&&(o.xp6(5),o.Q6J("data",r.lineData)("options",r.lineOptions),o.xp6(4),o.Q6J("data",r.pieData)("options",r.pieOptions),o.xp6(4),o.Q6J("data",r.polarData)("options",r.polarOptions),o.xp6(5),o.Q6J("data",r.barData)("options",r.barOptions),o.xp6(4),o.Q6J("data",r.pieData)("options",r.pieOptions),o.xp6(4),o.Q6J("data",r.radarData)("options",r.radarOptions))},dependencies:[d.C],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.Bz.forChild([{path:"",component:c}]),p.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,y,d.S]}),t})()}}]);