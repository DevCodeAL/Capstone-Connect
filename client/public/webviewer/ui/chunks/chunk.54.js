(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1758:function(e,t,n){var o=n(30),r=n(1759);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const r=t[o];if(0===o)r.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);r.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(r,i);e.exports=r.locals||{}},1759:function(e,t,n){(t=e.exports=n(31)(!1)).push([e.i,".open.AnnotationContentOverlay{visibility:visible}.closed.AnnotationContentOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.AnnotationContentOverlay{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.always-hide{display:none}.AnnotationContentOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);display:flex;flex-direction:column;max-width:215px;padding:8px}.AnnotationContentOverlay .author{font-weight:700}.AnnotationContentOverlay .contents,.AnnotationContentOverlay .replies{margin-top:5px;white-space:pre-wrap}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1923:function(e,t,n){"use strict";n.r(t);n(16),n(18),n(11),n(13),n(8),n(14),n(10),n(9),n(12),n(15),n(20),n(17),n(27),n(28),n(25),n(22),n(34),n(32),n(53),n(23),n(24),n(57),n(54);var o=n(0),r=n.n(o),i=n(6),a=n(396),l=n(4),c=n.n(l),u=n(1),s=n(3),p=n(37),d=n(5),f=n(277);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var O={annotation:c.a.object,overlayPosition:c.a.object,overlayRef:c.a.object},g=function(e){var t=e.annotation,n=e.overlayPosition,o=e.overlayRef,i=w(Object(a.a)(),1)[0],l=t.getField().name;return r.a.createElement("div",{className:"Overlay AnnotationContentOverlay","data-element":d.a.ANNOTATION_CONTENT_OVERLAY,style:m({},n),ref:o},r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bold"}},i("formField.type"),": "),i(function(e){switch(!0){case e instanceof window.Core.Annotations.TextWidgetAnnotation:return"formField.types.text";case e instanceof window.Core.Annotations.SignatureWidgetAnnotation:return"formField.types.signature";case e instanceof window.Core.Annotations.CheckButtonWidgetAnnotation:return"formField.types.checkbox";case e instanceof window.Core.Annotations.ListWidgetAnnotation:return"formField.types.listbox";case e instanceof window.Core.Annotations.ChoiceWidgetAnnotation:return"formField.types.combobox";case e instanceof window.Core.Annotations.RadioButtonWidgetAnnotation:return"formField.types.radio";case e instanceof window.Core.Annotations.PushButtonWidgetAnnotation:return"formField.types.button";default:return}}(t))),r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bold"}},i("formField.formFieldPopup.fieldName"),": "),l))};g.propTypes=O;var A=g,j=(n(1758),n(21));function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var P={annotation:c.a.object,clientXY:c.a.object},k=function(e){var t=e.annotation,n=e.clientXY,l=T(Object(i.e)((function(e){return[s.a.isElementDisabled(e,d.a.ANNOTATION_CONTENT_OVERLAY),s.a.isElementOpen(e,d.a.ANNOTATION_CONTENT_OVERLAY),s.a.getAnnotationContentOverlayHandler(e)]}),i.c),3),c=l[0],y=l[1],b=l[2],m=T(Object(a.a)(),1)[0],h=T(Object(o.useState)({left:-99999,top:-99999}),2),w=h[0],v=h[1],O=null!==b,g=Object(o.useRef)(null),E=null==t?void 0:t.getContents(),C=Object(o.useCallback)((function(e,t,n,o){var r=g.current.getBoundingClientRect();if(n+r.width>window.innerWidth&&(n=e-r.width-20),o+r.height>window.innerHeight&&(o=t-r.height-20),o<=0&&(o=0),window.isApryseWebViewerWebComponent){var i,a=null===(i=Object(j.a)())||void 0===i?void 0:i.host,l=null==a?void 0:a.getBoundingClientRect();l&&(n-=l.left,o-=l.top,n+=a.scrollLeft,o+=a.scrollTop)}return{left:n,top:o}}),[]);Object(o.useEffect)((function(){if(g.current&&t){var e=n.clientX,o=n.clientY,r=C(e,o,e+20,o+20),i=r.left,a=r.top;v({left:i,top:a})}}),[t,n,C]);var N=null==t?void 0:t.getReplies().length,S=O&&t?b(t):null,P=Object(o.useCallback)((function(){return S}),[S]);if(c||p.l||!t)return null;if(O&&y&&void 0!==S)return S?r.a.createElement("div",{className:"Overlay AnnotationContentOverlay","data-element":d.a.ANNOTATION_CONTENT_OVERLAY,style:x({},w),ref:g},r.a.createElement(f.a,{render:P})):null;var k=u.a.getFormFieldCreationManager().isInFormFieldCreationMode();return y&&k&&t instanceof window.Core.Annotations.WidgetAnnotation?r.a.createElement(A,{annotation:t,overlayPosition:w,overlayRef:g}):E&&y?r.a.createElement("div",{className:"Overlay AnnotationContentOverlay","data-element":d.a.ANNOTATION_CONTENT_OVERLAY,style:x({},w),ref:g},r.a.createElement("div",{className:"author"},u.a.getDisplayAuthor(t.Author)),r.a.createElement("div",{className:"contents"},E.length>100?"".concat(E.slice(0,100),"..."):E),N>0&&r.a.createElement("div",{className:"replies"},m("message.annotationReplyCount",{count:N}))):null};k.propTypes=P;var R=k;t.default=R}}]);
//# sourceMappingURL=chunk.54.js.map