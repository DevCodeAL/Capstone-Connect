/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{580:function(ya,ua,n){n.r(ua);var pa=n(0);ya=n(55);var oa=n(500),na=n(280),ka=n(27),ia=window;n=function(){function fa(x){var y=this;this.wBa=function(w){return w&&("image"===w.type.split("/")[0].toLowerCase()||w.name&&!!w.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=x;this.MBa=new Promise(function(w){return Object(pa.b)(y,void 0,void 0,function(){var b;return Object(pa.d)(this,function(f){switch(f.label){case 0:return this.wBa(this.file)?
[4,Object(na.b)(x)]:[3,2];case 1:b=f.aa(),this.file=ka.q?new Blob([b],{type:x.type}):new File([b],null===x||void 0===x?void 0:x.name,{type:x.type}),f.label=2;case 2:return w(!0),[2]}})})})}fa.prototype.getFileData=function(x){var y=this,w=new FileReader;w.onload=function(b){y.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS,[b.loaded,b.loaded]);x(new Uint8Array(b.target.result))};w.onprogress=function(b){b.lengthComputable&&y.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS,[b.loaded,0<b.total?b.total:0])};
w.readAsArrayBuffer(this.file)};fa.prototype.getFile=function(){return Object(pa.b)(this,void 0,Promise,function(){return Object(pa.d)(this,function(x){switch(x.label){case 0:return[4,this.MBa];case 1:return x.aa(),ia.da.isJSWorker?[2,this.file.path]:[2,this.file]}})})};fa.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return fa}();Object(ya.a)(n);Object(oa.a)(n);Object(oa.b)(n);ua["default"]=n}}]);}).call(this || window)