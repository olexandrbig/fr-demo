(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{455:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1b7833da",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n(455)},459:function(t,e,n){var r=n(21)(!1);r.push([t.i,".panel{background:#fff;padding:15px;border-radius:10px;margin:10px 0}.view-title{margin-top:15px;margin-bottom:15px}.right-actions{position:absolute;right:0;top:-10px}table{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;text-align:left;padding:8px}tr:nth-child(2n){background-color:#ddd}",""]),t.exports=r},472:function(t,e,n){"use strict";n.r(e);var r={scrollToTop:!0,asyncData:function(){return{lineData:{labels:["0s","10s","20s","30s","40s","50s","60s"],datasets:[{label:"Car Speed",data:[0,59,75,20,20,55,40]}]},barData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",lineTension:.1}]},options:{responsive:!0,maintainAspectRatio:!1}}},head:function(){return{title:this.$t("index.title"),meta:[{hid:"og:site_name",name:"og:site_name",content:this.$t("index.title")},{hid:"og:url",property:"og:url",content:this.$store.state.baseUrl+this.$route.path},{hid:"name",itemprop:"name",content:this.$t("index.title")},{hid:"og:title",property:"og:title",content:this.$t("index.title")},{hid:"description",name:"description",content:this.$t("index.description")},{hid:"descriptionItem",itemprop:"description",content:this.$t("index.description")},{hid:"og:description",property:"og:description",content:this.$t("index.description")},{hid:"og:image",property:"og:image",content:this.$store.state.baseUrl+n(356)}]}}},o=(n(458),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"clearfix relative"},[t._m(0),t._v(" "),n("h2",{staticClass:"view-title"},[n("fa",{attrs:{icon:["fas","list"]}}),t._v(" Variants\n    ")],1)]),t._v(" "),n("div",{staticClass:"grid"},[t._m(1),t._v(" "),n("div",{staticClass:"col-2-3"},[n("div",{staticClass:"panel"},[n("BarChart",{staticStyle:{position:"relative",height:"232px",width:"100%"},attrs:{data:t.barData,options:t.options}})],1)]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"col-2-3"},[n("div",{staticClass:"panel"},[n("LineChart",{staticStyle:{position:"relative",height:"396px",width:"100%"},attrs:{data:t.lineData,options:t.options}})],1)]),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pull-right right-actions"},[n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n        Hierarchy\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n        Copy link\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-default"},[t._v("\n        Discard changes\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-default"},[t._v("\n        Refresh\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("table",[n("tr",[n("th",[t._v("Company")]),t._v(" "),n("th",[t._v("Contact")]),t._v(" "),n("th",[t._v("Country")])]),t._v(" "),n("tr",[n("td",[t._v("Alfreds Futterkiste")]),t._v(" "),n("td",[t._v("Maria Anders")]),t._v(" "),n("td",[t._v("Germany")])]),t._v(" "),n("tr",[n("td",[t._v("Centro comercial Moctezuma")]),t._v(" "),n("td",[t._v("Francisco Chang")]),t._v(" "),n("td",[t._v("Mexico")])]),t._v(" "),n("tr",[n("td",[t._v("Ernst Handel")]),t._v(" "),n("td",[t._v("Roland Mendel")]),t._v(" "),n("td",[t._v("Austria")])]),t._v(" "),n("tr",[n("td",[t._v("Island Trading")]),t._v(" "),n("td",[t._v("Helen Bennett")]),t._v(" "),n("td",[t._v("UK")])]),t._v(" "),n("tr",[n("td",[t._v("Laughing Bacchus Winecellars")]),t._v(" "),n("td",[t._v("Yoshi Tannamuri")]),t._v(" "),n("td",[t._v("Canada")])]),t._v(" "),n("tr",[n("td",[t._v("Magazzini Alimentari Riuniti")]),t._v(" "),n("td",[t._v("Giovanni Rovelli")]),t._v(" "),n("td",[t._v("Italy")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("table",[n("tbody",[n("tr",[n("th",[t._v("Tag")]),t._v(" "),n("th",[t._v("Description")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_table.asp"}},[t._v("<table>")])]),t._v(" "),n("td",[t._v("Defines a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_th.asp"}},[t._v("<th>")])]),t._v(" "),n("td",[t._v("Defines a header cell in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_tr.asp"}},[t._v("<tr>")])]),t._v(" "),n("td",[t._v("Defines a row in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_td.asp"}},[t._v("<td>")])]),t._v(" "),n("td",[t._v("Defines a cell in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_caption.asp"}},[t._v("<caption>")])]),t._v(" "),n("td",[t._v("Defines a table caption")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_colgroup.asp"}},[t._v("<colgroup>")])]),t._v(" "),n("td",[t._v("Specifies a group of one or more columns in a table for formatting")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_col.asp"}},[t._v("<col>")])]),t._v(" "),n("td",[t._v("Specifies column properties for each column within a <colgroup> element")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_thead.asp"}},[t._v("<thead>")])]),t._v(" "),n("td",[t._v("Groups the header content in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_tbody.asp"}},[t._v("<tbody>")])]),t._v(" "),n("td",[t._v("Groups the body content in a table")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"/tags/tag_tfoot.asp"}},[t._v("<tfoot>")])]),t._v(" "),n("td",[t._v("Groups the footer content in a table")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-3"},[n("div",{staticClass:"panel"},[n("table",[n("tr",[n("th",[t._v("Company")]),t._v(" "),n("th",[t._v("Contact")]),t._v(" "),n("th",[t._v("Country")])]),t._v(" "),n("tr",[n("td",[t._v("Alfreds Futterkiste")]),t._v(" "),n("td",[t._v("Maria Anders")]),t._v(" "),n("td",[t._v("Germany")])]),t._v(" "),n("tr",[n("td",[t._v("Centro comercial Moctezuma")]),t._v(" "),n("td",[t._v("Francisco Chang")]),t._v(" "),n("td",[t._v("Mexico")])]),t._v(" "),n("tr",[n("td",[t._v("Ernst Handel")]),t._v(" "),n("td",[t._v("Roland Mendel")]),t._v(" "),n("td",[t._v("Austria")])]),t._v(" "),n("tr",[n("td",[t._v("Island Trading")]),t._v(" "),n("td",[t._v("Helen Bennett")]),t._v(" "),n("td",[t._v("UK")])]),t._v(" "),n("tr",[n("td",[t._v("Laughing Bacchus Winecellars")]),t._v(" "),n("td",[t._v("Yoshi Tannamuri")]),t._v(" "),n("td",[t._v("Canada")])]),t._v(" "),n("tr",[n("td",[t._v("Magazzini Alimentari Riuniti")]),t._v(" "),n("td",[t._v("Giovanni Rovelli")]),t._v(" "),n("td",[t._v("Italy")])])])])])}],!1,null,null,null);e.default=component.exports}}]);