(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{467:function(t,e,n){"use strict";n.r(e);n(43),n(18),n(51),n(100),n(75);var r={scrollToTop:!0,asyncData:function(){return{lineData:{labels:["0s","10s","20s","30s","40s","50s","60s"],datasets:[{label:"Car Speed",data:[0,59,75,20,20,55,40]}]},barData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",lineTension:.1}]},options:{responsive:!0,maintainAspectRatio:!1}}},head:function(){return{title:this.$t("index.title"),meta:[{hid:"og:site_name",name:"og:site_name",content:this.$t("index.title")},{hid:"og:url",property:"og:url",content:this.$store.state.baseUrl+this.$route.path},{hid:"name",itemprop:"name",content:this.$t("index.title")},{hid:"og:title",property:"og:title",content:this.$t("index.title")},{hid:"description",name:"description",content:this.$t("index.description")},{hid:"descriptionItem",itemprop:"description",content:this.$t("index.description")},{hid:"og:description",property:"og:description",content:this.$t("index.description")},{hid:"og:image",property:"og:image",content:this.$store.state.baseUrl+n(357)}]}},methods:{getViewIcon:function(){return this.getInfo(this.$store.state.activeView).view.icon},getViewName:function(){var t=this.getInfo(this.$store.state.activeView),view=t.view,e=t.module;return"".concat(e.name," / ").concat(view.name)},getInfo:function(t){var e=t.split(":"),n=e[0],r=e[1],o=e[2],l=this.$store.state.appData.find((function(t){return t.code===n})),view=null;o?view=l.views.find((function(t){return t.code===r})).views.find((function(t){return t.code==="".concat(r,":").concat(o)})):view=l.views.find((function(t){return t.code===r}));return{module:l,view:view}},featureIsNotAvailable:function(){this.$toast.error("This feature is not yet available")}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix relative"},[n("div",{staticClass:"pull-right right-actions"},[n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.featureIsNotAvailable()}}},[t._v("\n        Hierarchy\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.featureIsNotAvailable()}}},[t._v("\n        Copy link\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-default",on:{click:function(e){return t.featureIsNotAvailable()}}},[t._v("\n        Discard changes\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-default",on:{click:function(e){return t.featureIsNotAvailable()}}},[t._v("\n        Refresh\n      ")])]),t._v(" "),n("h2",{staticClass:"view-title"},[n("fa",{attrs:{icon:["fas",t.getViewIcon()]}}),t._v(" "+t._s(t.getViewName())+"\n    ")],1)]),t._v(" "),n("div",{staticClass:"grid"},[t._m(0),t._v(" "),n("div",{staticClass:"col-2-3"},[n("div",{staticClass:"panel"},[n("BarChart",{staticStyle:{position:"relative",height:"232px",width:"100%"},attrs:{data:t.barData,options:t.options}})],1)]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"col-2-3"},[n("div",{staticClass:"panel"},[n("LineChart",{staticStyle:{position:"relative",height:"396px",width:"100%"},attrs:{data:t.lineData,options:t.options}})],1)]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("h3",{staticClass:"m-b-10"},[t._v("\n          Basic user info\n        ")]),t._v(" "),n("table",{staticClass:"table-borderless"},[n("tr",[n("td",[t._v("First name")]),t._v(" "),n("td",[n("input",{staticClass:"form-control form-control-borderless",attrs:{value:"Francisco"}})])]),t._v(" "),n("tr",[n("td",[t._v("Last name")]),t._v(" "),n("td",[n("input",{staticClass:"form-control form-control-borderless",attrs:{value:"Mendel"}})])]),t._v(" "),n("tr",[n("td",[t._v("Gender")]),t._v(" "),n("td",[n("select",{staticClass:"form-control form-control-borderless"},[n("option",{attrs:{value:"",disabled:""}},[t._v("\n                  Gender\n                ")]),t._v(" "),n("option",{attrs:{value:"male",selected:""}},[t._v("\n                  Male\n                ")]),t._v(" "),n("option",{attrs:{value:"female"}},[t._v("\n                  Female\n                ")]),t._v(" "),n("option",{attrs:{value:"other"}},[t._v("\n                  other\n                ")])])])]),t._v(" "),n("tr",[n("td",[t._v("Birth Date")]),t._v(" "),n("td",[n("input",{staticClass:"form-control form-control-borderless",attrs:{value:"1991-08-01",type:"date"}})])]),t._v(" "),n("tr",[n("td",[t._v("Personal ID")]),t._v(" "),n("td",[t._v("FR12312355AD")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("table",[n("tbody",[n("tr",[n("th",[t._v("Tag")]),t._v(" "),n("th",[t._v("Description")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<table>")])]),t._v(" "),n("td",[t._v("Defines a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<th>")])]),t._v(" "),n("td",[t._v("Defines a header cell in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<tr>")])]),t._v(" "),n("td",[t._v("Defines a row in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<td>")])]),t._v(" "),n("td",[t._v("Defines a cell in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<caption>")])]),t._v(" "),n("td",[t._v("Defines a table caption")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<colgroup>")])]),t._v(" "),n("td",[t._v("Specifies a group of one or more columns in a table for formatting")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<col>")])]),t._v(" "),n("td",[t._v("Specifies column properties for each column within a <colgroup> element")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<thead>")])]),t._v(" "),n("td",[t._v("Groups the header content in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<tbody>")])]),t._v(" "),n("td",[t._v("Groups the body content in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:""}},[t._v("<tfoot>")])]),t._v(" "),n("td",[t._v("Groups the footer content in a table")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("table",[n("tr",[n("th",[t._v("Company")]),t._v(" "),n("th",[t._v("Contact")]),t._v(" "),n("th",[t._v("Country")])]),t._v(" "),n("tr",[n("td",[t._v("Alfreds Futterkiste")]),t._v(" "),n("td",[t._v("Maria Anders")]),t._v(" "),n("td",[t._v("Germany")])]),t._v(" "),n("tr",[n("td",[t._v("Centro comercial Moctezuma")]),t._v(" "),n("td",[t._v("Francisco Chang")]),t._v(" "),n("td",[t._v("Mexico")])]),t._v(" "),n("tr",[n("td",[t._v("Ernst Handel")]),t._v(" "),n("td",[t._v("Roland Mendel")]),t._v(" "),n("td",[t._v("Austria")])]),t._v(" "),n("tr",[n("td",[t._v("Island Trading")]),t._v(" "),n("td",[t._v("Helen Bennett")]),t._v(" "),n("td",[t._v("UK")])]),t._v(" "),n("tr",[n("td",[t._v("Laughing Bacchus Winecellars")]),t._v(" "),n("td",[t._v("Yoshi Tannamuri")]),t._v(" "),n("td",[t._v("Canada")])]),t._v(" "),n("tr",[n("td",[t._v("Magazzini Alimentari Riuniti")]),t._v(" "),n("td",[t._v("Giovanni Rovelli")]),t._v(" "),n("td",[t._v("Italy")])])])])])}],!1,null,null,null);e.default=component.exports}}]);