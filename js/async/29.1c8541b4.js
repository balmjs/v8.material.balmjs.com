(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"67l9":function(t,e,i){"use strict";i.r(e);var s=i("DJqZ");const l=[{label:"8px",value:"8px"},{label:"16px",value:"16px"},{label:"24px",value:"24px"},{label:"40px",value:"40px"}],n=[{label:"72px",value:"72px"},{label:"84px",value:"84px"}];var a={metaInfo:{titleTemplate:"%s - Layout Grid"},components:{TopAppToolbar:s.a},data:()=>({gutterOptions:l,widthOptions:n,desktop:{margin:"24px",gutter:"24px",width:"72px"},tablet:{margin:"16px",gutter:"16px",width:"72px"},phone:{margin:"16px",gutter:"16px",width:"72px"},isWideScreen:!1}),mounted(){this.$store.setTheme(),this.initRuler(),window.addEventListener("balmResize",this.initRuler)},beforeDestroy(){window.removeEventListener("balmResize",this.initRuler)},methods:{initRuler(){let t="(phone)";window.innerWidth>=840?t="(desktop)":window.innerWidth>=480&&(t="(tablet)"),this.$refs.ruler&&(this.$refs.ruler.textContent=window.innerWidth+"px "+t),this.isWideScreen=window.innerWidth>=1440}}},o=i("KHd+"),d=Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page--grid-container"},[e("ui-top-app-bar",{attrs:{"content-selector":".demo-content",fixed:""},scopedSlots:t._u([{key:"nav-icon",fn:function({navIconClass:i}){return[e("ui-icon-button",{class:i,attrs:{icon:"arrow_back"},on:{click:function(e){return t.$router.back()}}})]}},{key:"toolbar",fn:function({toolbarItemClass:t}){return[e("top-app-toolbar",{attrs:{"item-class":t}})]}}])},[t._v(" "),e("span",{staticClass:"catalog-title"},[t._v("Layout Grid")])]),t._v(" "),e("docs-page",{staticClass:"demo-content",attrs:{name:"grid","demo-count":"9",apis:["grid","grid-cell","grid-custom"]},scopedSlots:t._u([{key:"hero",fn:function(){return[e("ui-grid",{staticClass:"demo-grid"},[e("ui-grid-cell",{staticClass:"demo-cell"}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:{default:4}}})],1)]},proxy:!0}])},[t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.1 Layout grid (in fluid container)")]),t._v(" "),e("ui-grid",[e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n            Desktop Margin:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("margin","desktop",e)}},model:{value:t.desktop.margin,callback:function(e){t.$set(t.desktop,"margin",e)},expression:"desktop.margin"}}),t._v(" "),e("br"),t._v("Desktop Gutter:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("gutter","desktop",e)}},model:{value:t.desktop.gutter,callback:function(e){t.$set(t.desktop,"gutter",e)},expression:"desktop.gutter"}})],1)]),t._v(" "),e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n            Tablet Margin:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("margin","tablet",e)}},model:{value:t.tablet.margin,callback:function(e){t.$set(t.tablet,"margin",e)},expression:"tablet.margin"}}),t._v(" "),e("br"),t._v("Tablet Gutter:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("gutter","tablet",e)}},model:{value:t.tablet.gutter,callback:function(e){t.$set(t.tablet,"gutter",e)},expression:"tablet.gutter"}})],1)]),t._v(" "),e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n            Phone Margin:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("margin","phone",e)}},model:{value:t.phone.margin,callback:function(e){t.$set(t.phone,"margin",e)},expression:"phone.margin"}}),t._v(" "),e("br"),t._v("Phone Gutter:\n            "),e("ui-select",{attrs:{options:t.gutterOptions},on:{change:function(e){return t.$grid.set("gutter","phone",e)}},model:{value:t.phone.gutter,callback:function(e){t.$set(t.phone,"gutter",e)},expression:"phone.gutter"}})],1)])],1),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n        Grid of default wide (4 columns) items\n      ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid"},[e("ui-grid-cell",{staticClass:"demo-cell"},[t._v("4")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell"},[t._v("4")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell"},[t._v("4")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[1]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("Grid of 1 column wide items")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid"},t._l(12,(function(i){return e("ui-grid-cell",{key:i,staticClass:"demo-cell",attrs:{columns:"1"}},[t._v("\n          1\n        ")])})),1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[2]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("Grid of differently sized items")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid"},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"6"}},[t._v("6")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}},[t._v("4")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"2"}},[t._v("2")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[3]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n        Grid of items with tweaks at different screen sizes\n      ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid"},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:{default:6,tablet:8}}},[t._v("\n          6 (8 tablet)\n        ")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:{default:4,tablet:6}}},[t._v("\n          4 (6 tablet)\n        ")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:{default:2,phone:4}}},[t._v("\n          2 (4 phone)\n        ")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[4]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("Grid nested within parent grid cell")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid"},[e("ui-grid-cell",{staticClass:"demo-parent-cell",attrs:{nested:"",columns:"4"}},[e("ui-grid-cell",{staticClass:"demo-child-cell demo-cell",attrs:{columns:"4"}},[e("span",[t._v("Child 4")])]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-child-cell demo-cell",attrs:{columns:"4"}},[e("span",[t._v("Child 4")])]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-child-cell demo-cell",attrs:{columns:"4"}},[e("span",[t._v("Child 4")])]),t._v(" "),e("span",[t._v("Parent 4")])],1),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}},[t._v("4")]),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}},[t._v("4")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[5]}}),t._v(" "),e("h6",[t._v("Grid with max width")]),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n        Grid with max width (1280px) and center alignment by default\n      ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid max-width"},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}})],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[6]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n        Grid with max width (1280px) and left alignment\n      ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid max-width",attrs:{position:"left"}},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"4"}})],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[7]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("\n        1.2 Fixed column width layout grid (Widescreen Only)\n      ")]),t._v(" "),t.isWideScreen?[e("ui-grid",[e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n              Desktop Column Width:\n              "),e("ui-select",{attrs:{options:t.widthOptions},on:{change:function(e){return t.$grid.set("column-width","desktop",e)}},model:{value:t.desktop.width,callback:function(e){t.$set(t.desktop,"width",e)},expression:"desktop.width"}})],1)]),t._v(" "),e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n              Tablet Column Width:\n              "),e("ui-select",{attrs:{options:t.widthOptions},on:{change:function(e){return t.$grid.set("column-width","tablet",e)}},model:{value:t.tablet.width,callback:function(e){t.$set(t.tablet,"width",e)},expression:"tablet.width"}})],1)]),t._v(" "),e("ui-grid-cell",[e("div",{staticClass:"demo-controls"},[t._v("\n              Phone Column Width:\n              "),e("ui-select",{attrs:{options:t.widthOptions},on:{change:function(e){return t.$grid.set("column-width","phone",e)}},model:{value:t.phone.width,callback:function(e){t.$set(t.phone,"width",e)},expression:"phone.width"}})],1)])],1),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n          Fixed column width layout grid and center alignment by default\n        ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid",attrs:{"fixed-column-width":""}},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}})],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[8]}}),t._v(" "),e("div",{staticClass:"demo-grid-legend"},[t._v("\n          Fixed column width layout grid and right alignment\n        ")]),t._v(" "),e("ui-grid",{staticClass:"demo-grid",attrs:{"fixed-column-width":"",position:"right"}},[e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}}),t._v(" "),e("ui-grid-cell",{staticClass:"demo-cell",attrs:{columns:"1"}})],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[9]}})]:[e("p",[t._v("Your browser is not widescreen(Screen Size >= 1440px).")])],t._v(" "),e("footer",{staticClass:"demo-ruler"},[e("div",{ref:"ruler",attrs:{id:"current"}})])],2)])],1)}),[],!1,null,null,null);e.default=d.exports}}]);