(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"7jU6":function(t,e,o){"use strict";o.r(e);var i={metaInfo:{titleTemplate:"%s - Snackbar"},data:()=>({open:!1,timeout:5,message:"Hello Snackbar",actionText:"close",actionType:!1,position:"bottom"}),mounted(){this.$nextTick((()=>{this.$refs.slider&&this.$refs.slider.recompute()}))},methods:{actionHandler(){console.log("gg")}}},n=o("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("docs-page",{attrs:{name:"snackbar","demo-count":"1"},scopedSlots:t._u([{key:"hero",fn:function(){return[e("ui-snackbar",{staticClass:"mdc-snackbar--open",scopedSlots:t._u([{key:"action",fn:function({actionClass:o}){return[e("ui-button",{class:o},[t._v("Action")])]}}])},[t._v("\n      Message sent\n      ")])]},proxy:!0}])},[t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("ui-form",{staticClass:"demo-controls"},[e("label",[t._v("Timeout: "+t._s(t.timeout)+"second")]),t._v(" "),e("ui-form-field",[e("ui-slider",{ref:"slider",attrs:{type:"discrete",min:"4",max:"10"},model:{value:t.timeout,callback:function(e){t.timeout=e},expression:"timeout"}})],1),t._v(" "),e("ui-form-field",[e("ui-textfield",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[t._v("Message Text")])],1),t._v(" "),e("ui-form-field",[e("ui-textfield",{model:{value:t.actionText,callback:function(e){t.actionText=e},expression:"actionText"}},[t._v("Action Text")])],1),t._v(" "),e("ui-form-field",[e("ui-checkbox",{attrs:{"input-id":"action-type"},model:{value:t.actionType,callback:function(e){t.actionType=e},expression:"actionType"}}),t._v(" "),e("label",{attrs:{for:"action-type"}},[t._v("Icon Button Action")])],1),t._v(" "),e("ui-form-field",[e("label",[t._v("Position:")]),t._v(" "),t._l(["bottom","center","top"],(function(o){return e("ui-form-field",{key:o},[e("ui-radio",{attrs:{"input-id":`position-${o}`,value:o},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),t._v(" "),e("label",{attrs:{for:`position-${o}`}},[t._v(t._s(o))])],1)}))],2)],1),t._v(" "),e("div",{staticClass:"demo"},[e("ui-button",{attrs:{raised:""},on:{click:function(e){return t.$balmUI.onOpen("open")}}},[t._v("\n        Show Snackbar\n      ")]),t._v(" "),e("ui-snackbar",{attrs:{"timeout-ms":1e3*t.timeout,message:t.message,"action-button-text":t.actionText,"action-type":t.actionType?1:0,position:t.position},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}})],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[1]}})],1)])}),[],!1,null,null,null);e.default=s.exports}}]);