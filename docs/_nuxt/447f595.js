(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutActiveView",components:{LayoutActiveTabs:o(127).default},methods:{mainHeight:function(){return(window&&window.innerHeight)-60}}},l=(o(273),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"active-view"},[o("LayoutActiveTabs"),t._v(" "),o("ClientOnly",[o("div",{staticClass:"module-details",style:{height:t.mainHeight()+"px"}},[o("div",{staticClass:"module-details-gap"},[o("nuxt")],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutActiveTabs:o(127).default})},127:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutActiveTabs",methods:{mainHeight:function(){return(window&&window.innerHeight)-80}}},l=(o(271),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"active-tabs"},[o("ul",{staticClass:"active-tab-list"},[o("li",{staticClass:"active-tab"},[o("a",{staticClass:"active-tab-link",attrs:{href:""}},[o("span",{staticClass:"active-tab-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])]),t._v(" "),o("span",{staticClass:"active-tab-close pointer"},[o("fa",{attrs:{icon:["fas","times"]}})],1)]),t._v(" "),o("li",{staticClass:"active-tab active"},[o("a",{staticClass:"active-tab-link",attrs:{href:""}},[o("span",{staticClass:"active-tab-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Active item details")])]),t._v(" "),o("span",{staticClass:"active-tab-close pointer"},[o("fa",{attrs:{icon:["fas","times"]}})],1)]),t._v(" "),o("li",{staticClass:"active-tab"},[o("a",{staticClass:"active-tab-link",attrs:{href:""}},[o("span",{staticClass:"active-tab-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Other John view")])]),t._v(" "),o("span",{staticClass:"active-tab-close pointer"},[o("fa",{attrs:{icon:["fas","times"]}})],1)]),t._v(" "),o("li",{staticClass:"active-tab"},[o("a",{staticClass:"active-tab-link",attrs:{href:""}},[o("span",{staticClass:"active-tab-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("More available tabs")])]),t._v(" "),o("span",{staticClass:"active-tab-close pointer"},[o("fa",{attrs:{icon:["fas","times"]}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},128:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutFooter",data:function(){return{fullYear:(new Date).getFullYear()}},computed:{version:function(){return this.$store.state.appVersion}}},l=(o(275),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"site-footer"},[o("div",{staticClass:"grid"},[o("div",{staticClass:"col-2-3"},[o("p",{staticClass:"footer-company-description"},[t._v("\n        © "+t._s(t.fullYear)+" All rights reserved\n      ")])]),t._v(" "),o("div",{staticClass:"col-1-3"},[o("p",{staticClass:"footer-company-description text-right"},[t._v("\n        v"+t._s(t.version)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},129:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutModuleNav",methods:{mainHeight:function(){return(window&&window.innerHeight)-30}}},l=(o(277),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"module-nav",style:{height:t.mainHeight()+"px"}},[t._m(0),t._v(" "),o("ul",{staticClass:"module-features"},[o("li",{staticClass:"module-feature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Overview")])])]),t._v(" "),o("li",{staticClass:"module-feature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")]),t._v(" "),o("span",{staticClass:"feature-expand pointer"},[o("fa",{attrs:{icon:["fas","chevron-up"]}})],1)]),t._v(" "),o("ul",{staticClass:"module-sublist list-unstyled"},[o("li",{staticClass:"module-subfeature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])])]),t._v(" "),o("li",{staticClass:"module-subfeature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])])]),t._v(" "),o("li",{staticClass:"module-subfeature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])])]),t._v(" "),o("li",{staticClass:"module-subfeature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])])])])]),t._v(" "),o("li",{staticClass:"module-feature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")]),t._v(" "),o("span",{staticClass:"feature-expand pointer"},[o("fa",{attrs:{icon:["fas","chevron-right"]}})],1)])]),t._v(" "),o("li",{staticClass:"module-feature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")])])]),t._v(" "),o("li",{staticClass:"module-feature"},[o("a",{staticClass:"feature-link",attrs:{href:""}},[o("span",{staticClass:"feature-icon"},[o("fa",{attrs:{icon:["fas","lightbulb"]}})],1),t._v(" "),o("span",[t._v("Dashboard")]),t._v(" "),o("span",{staticClass:"feature-expand pointer"},[o("fa",{attrs:{icon:["fas","chevron-right"]}})],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"module-nav-inner"},[o("h1",{staticClass:"module-nav-title"},[t._v("Module A")])])}],!1,null,null,null);e.default=component.exports},130:function(t,e,o){"use strict";o.r(e);var n={name:"LayoutSiteNav",components:{Logo:o(131).default},methods:{mainHeight:function(){return(window&&window.innerHeight)-30}}},l=(o(281),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"site-nav",style:{height:t.mainHeight()+"px"}},[o("Logo")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:o(131).default})},131:function(t,e,o){"use strict";o.r(e);o(279);var n=o(10),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"logo",attrs:{src:o(220),alt:"Company"}})}),[],!1,null,null,null);e.default=component.exports},138:function(t,e,o){"use strict";var n=o(1),l=o(215);n.a.use(l.a)},139:function(t,e,o){"use strict";o(55);var n=o(1),l=o(140);n.a.use(l.a),e.a=function(t){var e=t.app,n=t.store;e.i18n=new l.a({locale:n.state.locale,fallbackLocale:"en",messages:{en:o(313)}}),e.i18n.path=function(link){return e.i18n.locale===e.i18n.fallbackLocale?"/".concat(link):"/".concat(e.i18n.locale,"/").concat(link)}}},141:function(t,e,o){"use strict";var n=o(1),l=o(218);n.a.component("BarChart",{extends:l.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},179:function(t,e,o){var content=o(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("82c7a9be",content,!0,{sourceMap:!1})},180:function(t,e,o){var content=o(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("1b957b40",content,!0,{sourceMap:!1})},181:function(t,e,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("79051960",content,!0,{sourceMap:!1})},182:function(t,e,o){var content=o(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("7dcf4d40",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("45889a4c",content,!0,{sourceMap:!1})},184:function(t,e,o){var content=o(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("1930a9a0",content,!0,{sourceMap:!1})},185:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("0af91e56",content,!0,{sourceMap:!1})},186:function(t,e,o){var content=o(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("56b15182",content,!0,{sourceMap:!1})},216:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},l=(o(263),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("div",{staticClass:"loading-page"},[t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading-dots"},[o("h3",[t._v("Loading")]),t._v(" "),o("h3",[o("small",{staticClass:"dot one"},[t._v(".")]),o("small",{staticClass:"dot two"},[t._v(".")]),o("small",{staticClass:"dot three"},[t._v(".")])])])}],!1,null,"3c83b890",null);e.default=component.exports},217:function(t,e,o){"use strict";var n=o(126),l=o(128),r=o(129),c=o(130),d={name:"Default",components:{LayoutActiveView:n.default,LayoutFooter:l.default,LayoutModuleNav:r.default,LayoutSiteNav:c.default}},f=(o(283),o(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-root"},[o("div",{staticClass:"page-wrap"},[o("LayoutSiteNav"),t._v(" "),o("LayoutModuleNav"),t._v(" "),o("LayoutActiveView",[o("nuxt")],1)],1),t._v(" "),o("LayoutFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{LayoutSiteNav:o(130).default,LayoutModuleNav:o(129).default,LayoutActiveView:o(126).default,LayoutFooter:o(128).default})},220:function(t,e,o){t.exports=o.p+"img/logo.5915eb7.png"},222:function(t,e,o){o(223),t.exports=o(224)},263:function(t,e,o){"use strict";o(179)},264:function(t,e,o){var n=o(26)(!1);n.push([t.i,".loading-page[data-v-3c83b890]{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.3);text-align:center;padding-top:430px;font-size:30px;z-index:99}.loading-dots[data-v-3c83b890]{text-align:center;z-index:5;display:inline-block;padding:10px 20px 20px}.loading-dots .dot[data-v-3c83b890]{display:inline;margin-left:.2em;margin-right:.2em;position:relative;top:-.6em;font-size:1.6em;line-height:1em;opacity:0;-webkit-animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite;animation:showHideDot-data-v-3c83b890 2.5s ease-in-out infinite}.loading-dots .dot.one[data-v-3c83b890]{-webkit-animation-delay:.2s;animation-delay:.2s}.loading-dots .dot.two[data-v-3c83b890]{-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dots .dot.three[data-v-3c83b890]{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}@keyframes showHideDot-data-v-3c83b890{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}",""]),t.exports=n},267:function(t,e,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("2998b330",content,!0,{sourceMap:!1})},268:function(t,e,o){var n=o(26)(!1);n.push([t.i,'html{font-family:"Georama",Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#344c84;overflow-x:hidden}@media (max-width:1280px){html{font-size:12px}}*,:after,:before{box-sizing:border-box;margin:0}.container{position:relative;font-weight:400;padding-top:100px;margin:0 auto;display:block;width:100%}.title{display:block;font-size:40px;font-weight:300;letter-spacing:1px;padding:20px 0 10px}.list-unstyled{list-style:none}.btn,.list-unstyled li{display:inline-block}.btn{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:14px 15px 13px;font-size:14px;line-height:1em;background:#344c84;border:1px solid #344c84;color:#fff;text-decoration:none;border-radius:4px;cursor:pointer}@media (max-width:1280px){.btn{font-size:12px}}.btn:hover{opacity:.9}.btn.btn-default,.btn.btn-primary{color:#fff;text-decoration:none}.btn.btn-primary{background:#44b49c;border-color:#44b49c}.btn.btn-toggle{color:#fff;text-decoration:none}.btn.btn-toggle.nuxt-link-exact-active{color:#fff;background:#44b49c;border-color:#44b49c;text-decoration:none}.btn.btn-link,.btn.btn-link.nuxt-link-exact-active{color:#fff;text-decoration:none}.btn.btn-link.disabled{background:#e8e9eb;border-color:#e8e9eb}.btn.btn-link.disabled,.nuxt-link-exact-active{color:#344c84;text-decoration:none}.form-control{font-family:Georama,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;padding:10px;font-size:14px;min-width:200px;width:100%;height:auto}@media (max-width:1280px){.form-control{font-size:12px}}select.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;text-indent:10px;line-height:39px;height:41px}.form-control-lg{min-width:379px;width:100%}.form-control-sm{width:96px;min-width:96px}.pull-left{float:left}.pull-right{float:right}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.clearfix{display:inline-block}* html .clearfix{height:1%}.clearfix{display:block}*{box-sizing:border-box}.grid:after{content:"";display:table;clear:both}[class*=col-]{float:left;padding-right:20px}.grid [class*=col-]:last-of-type{padding-right:0}.col-2-3{width:66.66%}.col-1-3{width:33.33%}.col-1-2{width:50%}.col-1-4{width:25%}.col-1-8{width:12.5%}.col-1-1{width:100%}.col-offset-1-3{margin-left:33.33%}.pointer{cursor:pointer}.inline-block{display:inline-block}.relative{position:relative}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.p-20{padding:20px}.m-b-0{margin-bottom:0!important}.m-b-20{margin-bottom:20px}.m-b-40{margin-bottom:40px}.m-t-5{margin-top:5px}.m-t-10{margin-top:10px}.m-t-20{margin-top:20px}.m-lr-5{margin-left:5px;margin-right:5px}.m-l-10{margin-left:10px}.m-r-10{margin-right:10px}.m-r-20{margin-right:20px}.m-lr-2{margin-left:2px;margin-right:2px}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;left:-9999px}[type=checkbox]:checked+label,[type=checkbox]:not(:checked)+label{position:relative;padding-left:1.95em;cursor:pointer}[type=checkbox]:checked+label:before,[type=checkbox]:not(:checked)+label:before{content:"";position:absolute;left:0;top:0;width:1.25em;height:1.25em;border:2px solid #ccc;background:#fff;border-radius:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1)}[type=checkbox]:checked+label:after,[type=checkbox]:not(:checked)+label:after{content:"\\2713\\0020";position:absolute;top:.15em;left:.22em;font-size:1.3em;line-height:.8;color:#344c84;transition:all .2s;font-family:"Lucida Sans Unicode","Arial Unicode MS",Arial}[type=checkbox]:not(:checked)+label:after{opacity:0;transform:scale(0)}[type=checkbox]:checked+label:after{opacity:1;transform:scale(1)}[type=checkbox]:disabled:checked+label:before,[type=checkbox]:disabled:not(:checked)+label:before{box-shadow:none;border-color:#bbb;background-color:#ddd}[type=checkbox]:disabled:checked+label:after{color:#999}[type=checkbox]:disabled+label{color:#aaa}[type=checkbox]:checked:focus+label:before,[type=checkbox]:not(:checked):focus+label:before{border:2px dotted #344c84}input.ios-toggle{opacity:0;position:absolute}input.ios-toggle+span{position:relative;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.4s ease;height:20px;width:40px;border:1px solid #aaa;border-radius:60px;cursor:pointer;top:3px;margin-right:3px}input.ios-toggle+span:before{content:"";position:absolute;display:block;transition:.2s cubic-bezier(.24,0,.5,1);height:20px;width:41px;top:0;left:0;border-radius:30px}input.ios-toggle+span:after{content:"";position:absolute;display:block;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 0 0 rgba(0,0,0,.04),0 4px 9px rgba(0,0,0,.13),0 3px 3px rgba(0,0,0,.05);transition:.35s cubic-bezier(.54,1.6,.5,1);background:#f5f5f5;height:18px;width:18px;top:1px;left:0;border-radius:60px}input.ios-toggle:checked+span:before{background:#344c84;transition:width .2s cubic-bezier(0,0,0,.1)}input.ios-toggle:checked+span:after{left:22px}pre{display:block;padding:9.5px;margin:0;font-size:13px;line-height:1.4;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}@media (max-width:1280px){pre{font-size:11px}}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{width:100%;max-height:300px;overflow:auto;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;margin-bottom:0}.truncate{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vab{vertical-align:bottom}.violations{color:#cf4747}.warnings{color:#feba49}.ok{color:#2a94a2}.disabled{color:#000;cursor:not-allowed}.w-100{width:100%}.highlight{color:#44b49c;text-decoration:underline}.highlight:hover{text-decoration:none}.highlight-white{color:#fff;text-decoration:underline}.highlight-white:hover{text-decoration:none}.toasted.bubble.success{color:#fff!important;background:#44b49c!important}.toasted.bubble.error{color:#fff!important;background:#cf4747!important}.toasted.bubble.info{color:#fff!important;background:#344c84!important}.toasted.bubble .action{color:#fff!important;text-decoration:underline!important}',""]),t.exports=n},271:function(t,e,o){"use strict";o(180)},272:function(t,e,o){var n=o(26)(!1);n.push([t.i,'.active-tabs{display:block;float:left;width:100%;background:#fff}.active-tab-list{list-style:none;padding:0;float:left}.active-tab{margin:0 0 0 -1px;display:inline-block;background:#fff;padding:0 10px;float:left;border-right:1px solid #ccc;border-left:1px solid #ccc;position:relative}.active-tab-link{text-decoration:none;color:#555;height:30px;line-height:30px;padding:0 5px;display:inline-block}.active-tab.active{background:#f5f5f5;font-weight:700}.active-tab.active:after{content:" ";display:block;width:100%;position:absolute;bottom:-1px;left:0;height:2px;background:#f5f5f5}.active-tab.active .active-tab-link{background:#f5f5f5;font-weight:700;color:#333}.active-tab-icon{color:#777;vertical-align:middle}.active-tab-close{color:#333;height:30px;line-height:30px;display:inline-block;padding:0 5px}',""]),t.exports=n},273:function(t,e,o){"use strict";o(181)},274:function(t,e,o){var n=o(26)(!1);n.push([t.i,".active-view{display:block;float:left;width:calc(100% - 460px);background:#f5f5f5;height:100%;min-height:100%}.module-details{border-top:1px solid #ccc;overflow-y:auto;overflow-x:hidden;width:100%;float:left;padding:10px 20px}.module-details-gap{min-height:1500px}",""]),t.exports=n},275:function(t,e,o){"use strict";o(182)},276:function(t,e,o){var n=o(26)(!1);n.push([t.i,".footer-company-description{margin-top:8px;margin-bottom:0}.site-footer a{color:#fff}.site-footer a:hover{text-decoration:none}",""]),t.exports=n},277:function(t,e,o){"use strict";o(183)},278:function(t,e,o){var n=o(26)(!1);n.push([t.i,".module-nav{display:block;float:left;height:100%;min-height:100%;width:400px;overflow-y:auto;overflow-x:hidden;background:#fff;border-right:1px solid #ccc}.module-nav-title{text-transform:uppercase;margin-top:10px;margin-bottom:20px}.module-nav-inner{padding:20px}.module-features{list-style:none;padding:0;float:left;width:100%}.module-feature{display:inline-block;background:#fff;float:left;border-bottom:1px solid #ccc;position:relative;width:100%}.module-features>.module-feature>.feature-link{text-transform:uppercase;font-weight:700}.module-subfeature{display:inline-block;float:left;position:relative;width:100%}.feature-link{text-decoration:none;color:#555;line-height:30px;padding:10px 20px;display:inline-block;width:100%}.feature-link:hover{background:#f5f5f5}.module-sublist .feature-link{padding-left:40px}.module-sublist{padding:0}.feature-icon{font-size:1.3em;vertical-align:middle}.feature-expand{float:right}",""]),t.exports=n},279:function(t,e,o){"use strict";o(184)},280:function(t,e,o){var n=o(26)(!1);n.push([t.i,".logo{height:48px;width:auto}@media (max-width:991px){.logo{width:auto}}@media (max-width:768px){.logo{width:200px;height:auto}}",""]),t.exports=n},281:function(t,e,o){"use strict";o(185)},282:function(t,e,o){var n=o(26)(!1);n.push([t.i,".site-nav{display:block;float:left;height:100%;min-height:100%;width:60px;overflow-y:auto;overflow-x:hidden;background:#639}",""]),t.exports=n},283:function(t,e,o){"use strict";o(186)},284:function(t,e,o){var n=o(26)(!1);n.push([t.i,'#__layout,#__nuxt,.app-root,body,html{height:100%}.page-wrap{min-height:100%;margin-bottom:-30px;background:#efefef}.page-wrap:after{content:"";display:block}.page-wrap:after,.site-footer{height:30px}.site-footer{padding:0 10px;background:hsla(0,0%,46.7%,.8);color:#fff;position:relative}',""]),t.exports=n},285:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return l})),o.d(e,"mutations",(function(){return r})),o.d(e,"actions",(function(){return c}));o(35);var n=o(286).version,l=function(){return{languages:[{title:"English",code:"en"}],locale:"en",appVersion:n}},r={SET_ERROR:function(t,e){var o=e.type,n=e.error;t["error"+(o.charAt(0).toUpperCase()+o.slice(1))]=n}},c={}},286:function(t){t.exports=JSON.parse('{"name":"admin-area","version":"1.0.0","private":true,"scripts":{"dev":"nuxt","build":"nuxt build","start":"nuxt start","generate":"nuxt generate","lint:fix":"eslint --fix --ext \\".js,.vue\\" --ignore-path .gitignore .","lint:js":"eslint --ext \\".js,.vue\\" --ignore-path .gitignore .","lint":"yarn lint:js"},"dependencies":{"@fortawesome/free-brands-svg-icons":"^5.15.4","@fortawesome/free-regular-svg-icons":"^5.15.4","@fortawesome/free-solid-svg-icons":"^5.15.4","@nuxt/content":"^1.14.0","@nuxtjs/axios":"^5.13.6","@nuxtjs/pwa":"^3.3.5","@nuxtjs/robots":"^2.5.0","@nuxtjs/sitemap":"^2.4.0","@nuxtjs/toast":"^3.3.1","chart.js":"^3.5.0","core-js":"^3.15.1","nuxt":"^2.15.7","nuxt-fontawesome":"^0.4.0","vue-chartjs":"^3.5.1","vue-i18n":"^8.25.0","vue-underscore":"^0.1.4"},"devDependencies":{"@babel/eslint-parser":"^7.14.7","@nuxtjs/eslint-config":"^6.0.1","@nuxtjs/eslint-module":"^3.0.2","eslint":"^7.29.0","eslint-plugin-nuxt":"^2.0.0","eslint-plugin-vue":"^7.12.1"}}')},313:function(t){t.exports=JSON.parse('{"index":{"title":"Main page","description":"Main page"}}')}},[[222,3,1,4]]]);