(()=>{var e={755:()=>{console.log("components")},598:()=>{function e(e){var t=!0,i=!1,s=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function o(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function n(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(i){i.metaKey||i.altKey||i.ctrlKey||(r(e.activeElement)&&o(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(i&&(t=!0),n())}),!0),n(),e.addEventListener("focus",(function(e){var i,s,a;r(e.target)&&(t||(s=(i=e.target).type,"INPUT"===(a=i.tagName)&&l[s]&&!i.readOnly||"TEXTAREA"===a&&!i.readOnly||i.isContentEditable))&&o(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(i=!0,window.clearTimeout(s),s=window.setTimeout((function(){i=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function i(s){var l=t[s];if(void 0!==l)return l.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,i),r.exports}(()=>{"use strict";i(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t=Object.defineProperty,s=(e,i,s)=>(((e,i,s)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s})(e,"symbol"!=typeof i?i+"":i,s),s);const l=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[0-9]+$/,o=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;var n=(e=>(e.Required="required",e.Email="email",e.MinLength="minLength",e.MaxLength="maxLength",e.Password="password",e.Number="number",e.MaxNumber="maxNumber",e.MinNumber="minNumber",e.StrongPassword="strongPassword",e.CustomRegexp="customRegexp",e.MinFilesCount="minFilesCount",e.MaxFilesCount="maxFilesCount",e.Files="files",e))(n||{}),d=(e=>(e.Required="required",e))(d||{}),c=(e=>(e.Label="label",e.LabelArrow="labelArrow",e))(c||{});const u=[{key:n.Required,dict:{en:"The field is required"}},{key:n.Email,dict:{en:"Email has invalid format"}},{key:n.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:n.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:n.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:n.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:n.Number,dict:{en:"Value should be a number"}},{key:n.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:n.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:n.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:n.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:n.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],h=e=>"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then,f=e=>Array.isArray(e)?e.filter((e=>e.length>0)):"string"==typeof e&&e.trim()?[...e.split(" ").filter((e=>e.length>0))]:[],v=e=>e instanceof Element||e instanceof HTMLDocument,m={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1};console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),new class{constructor(e,t,i){s(this,"form",null),s(this,"fields",{}),s(this,"groupFields",{}),s(this,"errors",{}),s(this,"isValid",!1),s(this,"isSubmitted",!1),s(this,"globalConfig",m),s(this,"errorLabels",{}),s(this,"successLabels",{}),s(this,"eventListeners",[]),s(this,"dictLocale",u),s(this,"currentLocale","en"),s(this,"customStyleTags",{}),s(this,"onSuccessCallback"),s(this,"onFailCallback"),s(this,"tooltips",[]),s(this,"lastScrollPosition"),s(this,"isScrollTick"),s(this,"fieldIds",new Map),s(this,"getKeyByFieldSelector",(e=>this.fieldIds.get(e))),s(this,"getFieldSelectorByKey",(e=>{for(const[t,i]of this.fieldIds)if(e===i)return t})),s(this,"setKeyByFieldSelector",(e=>{if(this.fieldIds.has(e))return this.fieldIds.get(e);const t=String(this.fieldIds.size+1);return this.fieldIds.set(e,t),t})),s(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((e=>{e.refresh()}))})),s(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),s(this,"formSubmitHandler",(e=>{e.preventDefault(),this.isSubmitted=!0,this.validateHandler(e)})),s(this,"handleFieldChange",(e=>{let t;for(const i in this.fields)if(this.fields[i].elem===e){t=i;break}t&&this.validateField(t,!0)})),s(this,"handleGroupChange",(e=>{let t,i;for(const s in this.groupFields){const l=this.groupFields[s];if(l.elems.find((t=>t===e))){t=l,i=s;break}}t&&i&&this.validateGroup(i,t)})),s(this,"handlerChange",(e=>{e.target&&(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())})),this.initialize(e,t,i)}initialize(e,t,i){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=m,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en","string"==typeof e){const t=document.querySelector(e);if(!t)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(t)}else{if(!(e instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(e)}if(this.globalConfig={...m,...t},i&&(this.dictLocale=[...i,...u]),this.isTooltip()){const e=document.createElement("style");e.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[c.Label]=document.head.appendChild(e),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,i){var s;const l=null!=i?i:e;let r=null==(s=this.dictLocale.find((e=>e.key===l)))?void 0:s.dict[this.currentLocale];if(r||i&&(r=i),r&&void 0!==t)switch(e){case n.MaxLength:case n.MinLength:case n.MaxNumber:case n.MinNumber:case n.MinFilesCount:case n.MaxFilesCount:r=r.replace(":value",String(t))}return r||i||"Value is incorrect"}getFieldErrorMessage(e,t){const i="function"==typeof e.errorMessage?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,i)}getFieldSuccessMessage(e,t){const i="function"==typeof e?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,i)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,void 0!==t&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,i){i.rule===d.Required&&(t.every((e=>!e.checked))?this.setGroupInvalid(e,i):this.setGroupValid(e,i))}validateFieldRule(e,t,i,s=!1){const d=i.value,c=this.getElemValue(t);var u;if(i.plugin)i.plugin(c,this.fields)||this.setFieldInvalid(e,i);else switch(i.rule){case n.Required:(e=>{let t=e;return"string"==typeof e&&(t=e.trim()),!t})(c)&&this.setFieldInvalid(e,i);break;case n.Email:if("string"!=typeof c){this.setFieldInvalid(e,i);break}u=c,l.test(u)||this.setFieldInvalid(e,i);break;case n.MaxLength:if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;((e,t)=>e.length>t)(c,d)&&this.setFieldInvalid(e,i);break;case n.MinLength:if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;((e,t)=>e.length<t)(c,d)&&this.setFieldInvalid(e,i);break;case n.Password:if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;(e=>o.test(e))(c)||this.setFieldInvalid(e,i);break;case n.StrongPassword:if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;(e=>a.test(e))(c)||this.setFieldInvalid(e,i);break;case n.Number:if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;(e=>r.test(e))(c)||this.setFieldInvalid(e,i);break;case n.MaxNumber:{if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;const t=+c;(Number.isNaN(t)||((e,t)=>e>t)(t,d))&&this.setFieldInvalid(e,i);break}case n.MinNumber:{if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if("string"!=typeof c){this.setFieldInvalid(e,i);break}if(""===c)break;const t=+c;(Number.isNaN(t)||((e,t)=>e<t)(t,d))&&this.setFieldInvalid(e,i);break}case n.CustomRegexp:{if(void 0===d)return console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,i);let t;try{t=new RegExp(d)}catch(t){console.error(`Value for ${i.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,i);break}const s=String(c);""===s||t.test(s)||this.setFieldInvalid(e,i);break}case n.MinFilesCount:if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(Number.isFinite(null==c?void 0:c.length)&&c.length<d){this.setFieldInvalid(e,i);break}break;case n.MaxFilesCount:if(void 0===d){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);break}if("number"!=typeof d){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(Number.isFinite(null==c?void 0:c.length)&&c.length>d){this.setFieldInvalid(e,i);break}break;case n.Files:{if(void 0===d)return console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,i);if("object"!=typeof d)return console.error(`Value for ${i.rule} rule for [${e}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(e,i);const t=d.files;if("object"!=typeof t)return console.error(`Value for ${i.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(e,i);const s=(e,t)=>{const i=Number.isFinite(t.minSize)&&e.size<t.minSize,s=Number.isFinite(t.maxSize)&&e.size>t.maxSize,l=Array.isArray(t.names)&&!t.names.includes(e.name),r=Array.isArray(t.extensions)&&!t.extensions.includes(e.name.split(".")[e.name.split(".").length-1]),o=Array.isArray(t.types)&&!t.types.includes(e.type);return i||s||l||r||o};if("object"==typeof c&&null!==c)for(let l=0,r=c.length;l<r;++l){const r=c.item(l);if(!r){this.setFieldInvalid(e,i);break}if(s(r,t)){this.setFieldInvalid(e,i);break}}break}default:{if("function"!=typeof i.validator)return console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(e,i);const t=i.validator(c,this.fields);if("boolean"!=typeof t&&"function"!=typeof t&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof t){if(!s){this.fields[e].asyncCheckPending=!1;const s=t();return h(s)?s.then((t=>{t||this.setFieldInvalid(e,i)})).catch((()=>{this.setFieldInvalid(e,i)})):(console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(e,i))}this.fields[e].asyncCheckPending=!0}t||this.setFieldInvalid(e,i)}}}validateField(e,t=!1){var i;const s=this.fields[e];s.isValid=!0;const l=[];return[...s.rules].reverse().forEach((i=>{const r=this.validateFieldRule(e,s.elem,i,t);h(r)&&l.push(r)})),s.isValid&&this.setFieldValid(e,null==(i=s.config)?void 0:i.successMessage),Promise.allSettled(l)}revalidateField(e){if("string"!=typeof e&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return t&&this.fields[t]?new Promise((e=>{this.validateField(t,!0).finally((()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t),e(!!this.fields[t].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}validateGroup(e,t){const i=[];return[...t.rules].reverse().forEach((s=>{const l=this.validateGroupRule(e,t.elems,s);h(l)&&i.push(l)})),Promise.allSettled(i)}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout((()=>t.elem.focus()),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise((t=>{const i=[];Object.keys(this.fields).forEach((e=>{const t=this.validateField(e);h(t)&&i.push(t)})),Object.keys(this.groupFields).forEach((e=>{const t=this.groupFields[e],s=this.validateGroup(e,t);h(s)&&i.push(s)})),i.length?Promise.allSettled(i).then((()=>{this.afterSubmitValidation(e),t(!0)})):(this.afterSubmitValidation(e),t(!1))}))}revalidate(){return new Promise((e=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)}))}))}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally((()=>{var t,i;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?null==(t=this.onSuccessCallback)||t.call(this,e):null==(i=this.onFailCallback)||i.call(this,this.fields,this.groupFields)}))}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,i){t.addEventListener(e,i),this.eventListeners.push({type:e,elem:t,func:i})}removeListener(e,t,i){t.removeEventListener(e,i),this.eventListeners=this.eventListeners.filter((i=>i.type!==e||i.elem!==t))}addField(e,t,i){if("string"!=typeof e&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(s="string"==typeof e?this.form.querySelector(e):e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach((e=>{if(!("rule"in e||"validator"in e||"plugin"in e))throw Error("Rules argument must contain at least one rule or validator property.");if(!(e.validator||e.plugin||e.rule&&Object.values(n).includes(e.rule)))throw Error(`Rule should be one of these types: ${Object.values(n).join(", ")}. Provided value: ${e.rule}`)}));const l=this.setKeyByFieldSelector(e);return this.fields[l]={elem:s,rules:t,isValid:void 0,config:i},this.setListeners(s),this.isSubmitted&&this.validate(),this}removeField(e){if("string"!=typeof e&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const i=this.getListenerType(this.fields[t].elem.type);return this.removeListener(i,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return t&&this.groupFields[t]?(this.groupFields[t].elems.forEach((e=>{const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange)})),this.clearErrors(),delete this.groupFields[t],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,t,i,s){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const l=this.form.querySelector(e);if(!l)throw Error(`Group with ${e} selector not found! Please check the group selector.`);const r=l.querySelectorAll("input"),o=Array.from(r).filter((e=>{const t=((e,t)=>{const i=[...t].reverse();for(let t=0,s=i.length;t<s;++t){const s=i[t];for(const t in e){const i=e[t];if(i.groupElem===s)return[t,i]}}return null})(this.groupFields,(e=>{let t=e;const i=[];for(;t;)i.unshift(t),t=t.parentNode;return i})(e));return!t||t[1].elems.find((t=>t!==e))})),a=this.setKeyByFieldSelector(e);return this.groupFields[a]={rules:[{rule:d.Required,errorMessage:t,successMessage:s}],groupElem:l,elems:o,isDirty:!1,isValid:void 0,config:i},r.forEach((e=>{this.setListeners(e)})),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,i;null==(t=this.errorLabels[e])||t.remove(),null==(i=this.successLabels[e])||i.remove()}clearFieldStyle(e){var t,i,s,l;const r=this.fields[e],o=(null==(t=r.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((e=>{r.elem.style[e]=""}));const a=(null==(i=r.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((e=>{r.elem.style[e]=""})),r.elem.classList.remove(...f((null==(s=r.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...f((null==(l=r.config)?void 0:l.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach((e=>this.errorLabels[e].remove())),Object.keys(this.successLabels).forEach((e=>this.successLabels[e].remove()));for(const e in this.fields)this.clearFieldStyle(e);for(const i in this.groupFields){const s=this.groupFields[i],l=(null==(e=s.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(l).forEach((e=>{s.elems.forEach((t=>{var i;t.style[e]="",t.classList.remove(...f((null==(i=s.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}))}));const r=(null==(t=s.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach((e=>{s.elems.forEach((t=>{var i;t.style[e]="",t.classList.remove(...f((null==(i=s.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)"true"!==e[t].getAttribute("data-just-validate-fallback-disabled")&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,i){var s;const{top:l,left:r,width:o,height:a}=e.getBoundingClientRect(),n=t.getBoundingClientRect(),d=i||(null==(s=this.globalConfig.tooltip)?void 0:s.position);switch(d){case"left":t.style.top=l+a/2-n.height/2+"px",t.style.left=r-n.width-5+"px";break;case"top":t.style.top=l-n.height-5+"px",t.style.left=r+o/2-n.width/2+"px";break;case"right":t.style.top=l+a/2-n.height/2+"px",t.style.left=`${r+o+5}px`;break;case"bottom":t.style.top=`${l+a+5}px`,t.style.left=r+o/2-n.width/2+"px"}return t.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,t,i)}}}createErrorLabelElem(e,t,i){const s=document.createElement("div");s.innerHTML=t;const l=this.isTooltip()?null==i?void 0:i.errorLabelStyle:(null==i?void 0:i.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,l),s.classList.add(...f((null==i?void 0:i.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,t,i){if(void 0===t)return null;const s=document.createElement("div");s.innerHTML=t;const l=(null==i?void 0:i.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,l),s.classList.add(...f((null==i?void 0:i.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,t){const i=t||this.globalConfig.errorsContainer;if("string"==typeof i){const t=this.form.querySelector(i);if(t)return t.appendChild(e),!0;console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)}return i instanceof Element?(i.appendChild(e),!0):(void 0!==i&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,i,s){!s&&this.renderErrorsContainer(t,i)||e.appendChild(t)}renderFieldLabel(e,t,i,s){var l,r,o,a,n,d,c;if(s||!this.renderErrorsContainer(t,i))if("checkbox"===e.type||"radio"===e.type){const i=document.querySelector(`label[for="${e.getAttribute("id")}"]`);"label"===(null==(r=null==(l=e.parentElement)?void 0:l.tagName)?void 0:r.toLowerCase())?null==(a=null==(o=e.parentElement)?void 0:o.parentElement)||a.appendChild(t):i?null==(n=i.parentElement)||n.appendChild(t):null==(d=e.parentElement)||d.appendChild(t)}else null==(c=e.parentElement)||c.appendChild(t)}showLabels(e,t){Object.keys(e).forEach(((i,s)=>{const l=e[i],r=this.getKeyByFieldSelector(i);if(!r||!this.fields[r])return void console.error("Field not found. Check the field selector.");const o=this.fields[r];o.isValid=!t,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,l),0===s&&this.globalConfig.focusInvalidField&&setTimeout((()=>o.elem.focus()),0)}))}showErrors(e){if("object"!=typeof e)throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if("object"!=typeof e)throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t){var i,s,l,r,o,a;const n=this.fields[e];if(void 0===n.isValid)return;if(n.isValid){if(!n.asyncCheckPending){const l=this.createSuccessLabelElem(e,void 0!==t?t:n.successMessage,n.config);l&&this.renderFieldLabel(n.elem,l,null==(i=n.config)?void 0:i.errorsContainer,!0),n.elem.classList.add(...f((null==(s=n.config)?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}this.isValid=!1,n.elem.classList.add(...f((null==(l=n.config)?void 0:l.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const d=this.createErrorLabelElem(e,void 0!==t?t:n.errorMessage,n.config);this.renderFieldLabel(n.elem,d,null==(r=n.config)?void 0:r.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(n.elem,d,null==(a=null==(o=n.config)?void 0:o.tooltip)?void 0:a.position))}renderGroupError(e){var t,i,s,l;const r=this.groupFields[e];if(void 0===r.isValid)return;if(r.isValid){r.elems.forEach((e=>{var t,i;Object.assign(e.style,(null==(t=r.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle),e.classList.add(...f((null==(i=r.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}));const i=this.createSuccessLabelElem(e,r.successMessage,r.config);return void(i&&this.renderGroupLabel(r.groupElem,i,null==(t=r.config)?void 0:t.errorsContainer,!0))}this.isValid=!1,r.elems.forEach((e=>{var t,i;Object.assign(e.style,(null==(t=r.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle),e.classList.add(...f((null==(i=r.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}));const o=this.createErrorLabelElem(e,r.errorMessage,r.config);this.renderGroupLabel(r.groupElem,o,null==(i=r.config)?void 0:i.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(r.groupElem,o,null==(l=null==(s=r.config)?void 0:s.tooltip)?void 0:l.position))}renderErrors(e=!1){if(this.isSubmitted||e||this.globalConfig.validateBeforeSubmitting){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach((e=>{this.removeListener(e.type,e.elem,e.func)})),Object.keys(this.customStyleTags).forEach((e=>{this.customStyleTags[e].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){"string"==typeof e||void 0===e?(this.currentLocale=e,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}("#form").addField("#name",[{rule:"required",errorMessage:"Обязательное поле"},{rule:"minLength",value:3,errorMessage:"Минимум 3 буквы"},{rule:"maxLength",value:30,errorMessage:"Максимум 30 букв"}]).addField("#control",[{validator:e=>void 0!==e&&e.length>3,errorMessage:"Неверное контрольное слово"}]).addField("#advanced-usage_password",[{rule:"required",rule:"minLength",value:6,errorMessage:"Пароль должен быть не менее 6 символов "}]).addField("#advanced-usage_repeat-password",[{rule:"required",errorMessage:"Обязательное поле"},{validator:(e,t)=>!t["#advanced-usage_password"]||!t["#advanced-usage_password"].elem||e===t["#advanced-usage_password"].elem.value,errorMessage:"Пароли не совпадают"}]),document.addEventListener("click",(function(e){let t=e.target;if(t.closest('[class*="__viewpass"]')){console.log(t);let e=t.classList.contains("_viewpass-active")?"password":"text";t.parentElement.querySelector("input").setAttribute("type",e),t.classList.toggle("_viewpass-active")}})),i(755)})()})();