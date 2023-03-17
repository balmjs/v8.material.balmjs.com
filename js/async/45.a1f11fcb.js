(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{cObN:function(t,e,i){"use strict";i.r(e);const o=[{label:"Filled",value:0},{label:"Outlined",value:1}],l=[{label:"Character counter",value:1},{label:"Leading icon",value:2},{label:"Trailing icon",value:3}],s=[{label:"None",value:0},{label:"Helper text",value:1},{label:"Error text",value:2}];var n={metaInfo:{titleTemplate:"%s - Textfield"},components:{UiTextfieldControls:()=>i.e(11).then(i.bind(null,"Pqms"))},data:()=>({TypeOptions:o,IconOptions:l,AssistiveTextOptions:s,typeOption:0,iconOption:[],assistiveTextOption:0,value1:"",value2:"",controls:{disabled:!1,rtl:!1,required:!1,customColor:!1,helperText:!1,isVisible:!1,hasValidMsg:!1,min:!1,max:!1,unclickable:!1},value:"Pre-filled value",title:"",content:""}),mounted(){}},r=i("KHd+"),a=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("docs-page",{attrs:{name:"textfield",apis:["ui-textfield","textfield","textfield-icon","textfield-helper"],"demo-count":"7"},scopedSlots:t._u([{key:"hero",fn:function(){return[e("div",{staticClass:"hero-demo"},[e("div",[0===t.typeOption?[e("ui-textfield",{attrs:{"input-id":"my-text-field",maxlength:"20","helper-text-id":"my-text-field-helper","with-leading-icon":t.iconOption.includes(2),"with-trailing-icon":t.iconOption.includes(3)},scopedSlots:t._u([t.iconOption.includes(2)?{key:"before",fn:function(){return[e("ui-textfield-icon",[t._v("favorite")])]},proxy:!0}:null,t.iconOption.includes(3)?{key:"after",fn:function(){return[e("ui-textfield-icon",{attrs:{trailing:""}},[t._v("visibility")])]},proxy:!0}:null],null,!0),model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[t._v("\n            Label\n            ")]),t._v(" "),e("ui-textfield-helper",{class:{"show-counter":t.iconOption.includes(1)},attrs:{id:"my-text-field-helper",visible:1===t.assistiveTextOption,"valid-msg":2===t.assistiveTextOption,"with-counter":""},scopedSlots:t._u([{key:"default",fn:function(){return[1===t.assistiveTextOption?e("span",[t._v("Helper message")]):t._e(),t._v(" "),2===t.assistiveTextOption?e("span",[t._v("Error message")]):t._e()]},proxy:!0}],null,!1,2094130923)})]:t._e()],2),t._v(" "),e("div",[1===t.typeOption?[e("ui-textfield",{attrs:{"input-id":"my-text-field-outlined",outlined:"",maxlength:"20","helper-text-id":"my-text-field-outlined-helper","with-leading-icon":t.iconOption.includes(2),"with-trailing-icon":t.iconOption.includes(3)},scopedSlots:t._u([t.iconOption.includes(2)?{key:"before",fn:function(){return[e("ui-textfield-icon",[t._v("favorite")])]},proxy:!0}:null,t.iconOption.includes(3)?{key:"after",fn:function(){return[e("ui-textfield-icon",{attrs:{trailing:""}},[t._v("visibility")])]},proxy:!0}:null],null,!0),model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[t._v("\n            Label\n            ")]),t._v(" "),e("ui-textfield-helper",{class:{"show-counter":t.iconOption.includes(1)},attrs:{id:"my-text-field-outlined-helper",visible:1===t.assistiveTextOption,"valid-msg":2===t.assistiveTextOption,"with-counter":""},scopedSlots:t._u([{key:"default",fn:function(){return[1===t.assistiveTextOption?e("span",[t._v("Helper message")]):t._e(),t._v(" "),2===t.assistiveTextOption?e("span",[t._v("Error message")]):t._e()]},proxy:!0}],null,!1,2094130923)})]:t._e()],2)]),t._v(" "),e("div",{staticClass:"hero-options"},[e("ui-select",{staticClass:"hero-option",attrs:{options:t.TypeOptions},model:{value:t.typeOption,callback:function(e){t.typeOption=e},expression:"typeOption"}},[t._v("\n        Type\n      ")]),t._v(" "),e("div",{staticClass:"hero-option hero-options"},[e("ui-form",{staticClass:"hero-option"},[e("div",[t._v("Options")]),t._v(" "),t._l(t.IconOptions,(function(i){return e("ui-form-field",{key:i.value},[e("ui-checkbox",{attrs:{"input-id":`iconOption${i.value}`,value:i.value},model:{value:t.iconOption,callback:function(e){t.iconOption=e},expression:"iconOption"}}),t._v(" "),e("label",{attrs:{for:`iconOption${i.value}`}},[t._v(t._s(i.label))])],1)}))],2),t._v(" "),e("ui-form",{staticClass:"hero-option"},[e("div",[t._v("Assistive text")]),t._v(" "),t._l(t.AssistiveTextOptions,(function(i){return e("ui-form-field",{key:i.value},[e("ui-radio",{attrs:{"input-id":`textOption${i.value}`,value:i.value},model:{value:t.assistiveTextOption,callback:function(e){t.assistiveTextOption=e},expression:"assistiveTextOption"}}),t._v(" "),e("label",{attrs:{for:`textOption${i.value}`}},[t._v(t._s(i.label))])],1)}))],2)],1)],1)]},proxy:!0}])},[t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("\n      1.1 Full Functionality JS Component (Floating Label, Validation)\n    ")]),t._v(" "),e("div",{staticClass:"demo",attrs:{dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{"helper-text-id":"my-text-field-helper-text",disabled:t.controls.disabled,required:t.controls.required}},[t._v("\n        Email Address\n      ")]),t._v(" "),t.controls.helperText?e("ui-textfield-helper",{attrs:{id:"my-text-field-helper-text",visible:t.controls.isVisible,"valid-msg":t.controls.hasValidMsg}},[t._v("\n        Helper Text (possibly validation message)\n      ")]):t._e()],1),t._v(" "),e("ui-textfield-controls",{attrs:{options:["disabled","rtl","required","customColor","helperText"]},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}}),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[1]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.2 Password field with validation")]),t._v(" "),e("div",{staticClass:"demo"},[e("ui-textfield",{attrs:{"input-type":"password",required:"",pattern:".{8,}","helper-text-id":"pw-validation-msg",attrs:{autocomplete:"current-password"}}},[t._v("\n        Choose password\n      ")]),t._v(" "),e("ui-textfield-helper",{attrs:{id:"pw-validation-msg",visible:"","valid-msg":""}},[t._v("Must be at least 8 characters long")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[2]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.3 Outlined Text Field")]),t._v(" "),e("div",{staticClass:"demo",attrs:{dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{outlined:"","helper-text-id":"name-validation-message",disabled:t.controls.disabled,required:t.controls.required,maxlength:t.controls.max?10:null,minlength:t.controls.min?8:0}},[t._v("\n        Your Name\n      ")]),t._v(" "),e("ui-textfield-helper",{attrs:{id:"name-validation-message","valid-msg":""}},[t._v(t._s(t.controls.min?"Must be at least 8 characters":"Helper Text (possibly validation message)"))])],1),t._v(" "),e("ui-textfield-controls",{attrs:{"id-prefix":"outlined",options:["disabled","rtl","required","customColor","min","max"]},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}}),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[3]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.4 Text Field - Leading/Trailing icons")]),t._v(" "),e("div",{staticClass:"demo demo-with-icon",attrs:{id:"demo-tf-box-leading-wrapper",dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{disabled:t.controls.disabled,required:t.controls.required,minlength:t.controls.min?8:0},scopedSlots:t._u([{key:"before",fn:function(){return[e("ui-textfield-icon",{attrs:{unclickable:t.controls.unclickable}},[t._v("\n            event\n          ")])]},proxy:!0}])},[t._v("\n        Your name\n      ")])],1),t._v(" "),e("div",{staticClass:"demo demo-with-icon",attrs:{id:"demo-tf-box-trailing-wrapper",dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{disabled:t.controls.disabled,required:t.controls.required,minlength:t.controls.min?8:0},scopedSlots:t._u([{key:"after",fn:function(){return[e("ui-textfield-icon",{attrs:{trailing:"",unclickable:t.controls.unclickable}},[t._v("\n            delete\n          ")])]},proxy:!0}])},[t._v("\n        Your name\n        ")])],1),t._v(" "),e("div",{staticClass:"demo demo-with-icon",attrs:{id:"demo-tf-outlined-leading-wrapper",dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{outlined:"","with-leading-icon":"",disabled:t.controls.disabled,required:t.controls.required,minlength:t.controls.min?8:0},scopedSlots:t._u([{key:"before",fn:function({iconClass:t}){return[e("span",{class:t},[e("i",{staticClass:"fa fa-smile-o"})])]}}])},[t._v("\n        Your other name\n      ")])],1),t._v(" "),e("div",{staticClass:"demo demo-with-icon",attrs:{id:"demo-tf-outlined-trailing-wrapper",dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{outlined:"","with-trailing-icon":"",disabled:t.controls.disabled,required:t.controls.required,minlength:t.controls.min?8:0},scopedSlots:t._u([{key:"after",fn:function({iconClass:t}){return[e("span",{class:t},[e("i",{staticClass:"fa fa-close"})])]}}])},[t._v("\n        Your other name\n        ")])],1),t._v(" "),e("ui-textfield-controls",{attrs:{options:["disabled","rtl","required","customColor","min","unclickable"]},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}}),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[4]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.5 Preventing FOUC")]),t._v(" "),e("div",{staticClass:"demo"},[e("ui-textfield",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v("Label floating above")])],1),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[5]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("1.6 Textarea")]),t._v(" "),e("div",{staticClass:"demo",attrs:{dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{"input-type":"textarea",rows:"8",cols:"40",disabled:t.controls.disabled,required:t.controls.required}},[t._v("\n        Textarea Label\n      ")])],1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"demo",attrs:{dir:t.controls.rtl?"rtl":null}},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{outlined:"","input-type":"textarea",rows:"8",cols:"40",disabled:t.controls.disabled,required:t.controls.required}},[t._v("\n        Textarea Label\n      ")])],1),t._v(" "),e("ui-textfield-controls",{attrs:{options:["disabled","rtl","required","customColor"]},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}}),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[6]}})],1),t._v(" "),e("section",{staticClass:"demo-wrapper"},[e("h6",{class:t.$tt("headline6")},[t._v("\n      1.7 Full-Width Text Field and Textarea with counter\n    ")]),t._v(" "),e("div",{staticClass:"demo"},[e("ui-textfield",{class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{fullwidth:"",placeholder:"Subject",maxlength:"40","with-counter":"",disabled:t.controls.disabled,required:t.controls.required},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),e("ui-textfield",{staticClass:"full-width-textarea-example",class:{"demo-text-field-custom-colors":t.controls.customColor},attrs:{"input-type":"textarea",fullwidth:"",placeholder:"Content",rows:"8",maxlength:"140","with-counter":"",disabled:t.controls.disabled,required:t.controls.required},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),e("ui-textfield-controls",{attrs:{options:["disabled","required","customColor"]},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}}),t._v(" "),e("ui-snippet",{attrs:{code:t.$store.demos[7]}})],1)])}),[],!1,null,null,null);e.default=a.exports}}]);