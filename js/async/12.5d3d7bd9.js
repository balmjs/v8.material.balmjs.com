(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HbX2:function(e,t,s){"use strict";s.r(t);const a=[{label:"Success",value:"success"},{label:"Info",value:"info"},{label:"Warning",value:"warning"},{label:"Error",value:"error"},{label:"Help",value:"help"}];var l={metaInfo:{titleTemplate:"%s - Alert"},data:()=>({StateTypeOptions:a,state:"success",stateOutlined:!1,message:"Message"})},o=s("KHd+"),n=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("docs-page",{attrs:{name:"alert","demo-count":"1","without-css":""},scopedSlots:e._u([{key:"hero",fn:function(){return[t("div",{staticClass:"hero-demo"},[t("ui-alert",{attrs:{state:e.state,"state-outlined":e.stateOutlined}},[e._v(e._s(e.message))])],1),e._v(" "),t("div",{staticClass:"hero-options"},[t("div",{staticClass:"hero-option hero-options"},[t("ui-select",{attrs:{options:e.StateTypeOptions},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[e._v("\n          State Type\n        ")]),e._v(" "),t("ui-form-field",[t("ui-checkbox",{attrs:{"input-id":"state-outlined"},model:{value:e.stateOutlined,callback:function(t){e.stateOutlined=t},expression:"stateOutlined"}}),e._v(" "),t("label",{attrs:{for:"state-outlined"}},[e._v("Outlined State")])],1)],1),e._v(" "),t("ui-textfield",{staticClass:"hero-option",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[e._v("\n        Alert Message\n      ")])],1)]},proxy:!0}])},[e._v(" "),t("section",{staticClass:"demo-wrapper"},[t("div",{staticClass:"demo"},[t("ui-alert",{attrs:{state:"success"}},[e._v("Success Message")]),e._v(" "),t("ui-alert",{attrs:{state:"info"}},[e._v("Info Message")]),e._v(" "),t("ui-alert",{attrs:{state:"warning",closable:""}},[e._v("Warning Message")]),e._v(" "),t("ui-alert",{attrs:{state:"error"}},[e._v("Error Message")])],1),e._v(" "),t("ui-snippet",{attrs:{code:e.$store.demos[1]}})],1)])}),[],!1,null,null,null);t.default=n.exports}}]);