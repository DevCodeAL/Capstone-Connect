/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{586:function(ya,ua,n){n.r(ua);var pa=n(0),oa=n(1);n.n(oa);var na=n(3),ka=n(199);ya=n(55);var ia=n(122),fa=n(334),x=n(100),y=n(333);n=n(500);var w=window,b=function(){function e(a,r,z){var aa=-1===a.indexOf("?")?"?":"&";switch(r){case x.a.NEVER_CACHE:this.url="".concat(a+aa,"_=").concat(Object(oa.uniqueId)());break;default:this.url=a}this.Of=z;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}e.prototype.start=function(a,r){var z=this,aa=this,ea=this.request,ba;aa.tE=0;a&&Object.keys(a).forEach(function(ha){z.request.setRequestHeader(ha,a[ha])});r&&(this.request.withCredentials=r);this.gN=setInterval(function(){var ha=0===window.document.URL.indexOf("file:///");ha=200===ea.status||
ha&&0===ea.status;if(ea.readyState!==y.b.DONE||ha){try{ea.responseText}catch(ca){return}aa.tE<ea.responseText.length&&(ba=aa.$Fa())&&aa.trigger(e.Events.DATA,[ba]);0===ea.readyState&&(clearInterval(aa.gN),aa.trigger(e.Events.DONE))}else clearInterval(aa.gN),aa.trigger(e.Events.DONE,["Error received return status ".concat(ea.status)])},1E3);this.request.send(null);this.status=y.a.STARTED};e.prototype.$Fa=function(){var a=this.request,r=a.responseText;if(0!==r.length)if(this.tE===r.length)clearInterval(this.gN),
this.trigger(e.Events.DONE);else return r=Math.min(this.tE+3E6,r.length),a=w.s8(a,this.tE,!0,r),this.tE=r,a};e.prototype.abort=function(){clearInterval(this.gN);var a=this;this.request.onreadystatechange=function(){Object(na.i)("StreamingRequest aborted");a.status=y.a.ABORTED;return a.trigger(e.Events.ABORTED)};this.request.abort()};e.prototype.finish=function(){var a=this;this.request.onreadystatechange=function(){a.status=y.a.SUCCESS;return a.trigger(e.Events.DONE)};this.request.abort()};e.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return e}();Object(ya.a)(b);var f;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(f||(f={}));var h=function(e){function a(){var r=e.call(this)||this;r.buffer="";r.state=f.LOCAL_HEADER;r.vZ=4;r.jq=null;r.qz=ka.c;r.cs={};return r}Object(pa.c)(a,e);a.prototype.NFa=function(r){var z;for(r=this.buffer+r;r.length>=this.qz;)switch(this.state){case f.LOCAL_HEADER:this.jq=z=this.eGa(r.slice(0,this.qz));if(z.eA!==
ka.g)throw Error("Wrong signature in local header: ".concat(z.eA));r=r.slice(this.qz);this.state=f.FILE;this.qz=z.CR+z.Ev+z.TC+this.vZ;this.trigger(a.Events.HEADER,[z]);break;case f.FILE:this.jq.name=r.slice(0,this.jq.Ev);this.cs[this.jq.name]=this.jq;z=this.qz-this.vZ;var aa=r.slice(this.jq.Ev+this.jq.TC,z);this.trigger(a.Events.FILE,[this.jq.name,aa,this.jq.XR]);r=r.slice(z);if(r.slice(0,this.vZ)===ka.h)this.state=f.LOCAL_HEADER,this.qz=ka.c;else return this.state=f.CENTRAL_DIR,!0}this.buffer=r;
return!1};a.Events={HEADER:"header",FILE:"file"};return a}(fa.a);Object(ya.a)(h);ya=function(e){function a(r,z,aa,ea,ba){aa=e.call(this,r,aa,ea)||this;aa.url=r;aa.stream=new b(r,z);aa.Re=new h;aa.Sba=window.createPromiseCapability();aa.Gca={};aa.Of=ba;return aa}Object(pa.c)(a,e);a.prototype.AF=function(r){var z=this;this.request([this.Km,this.Oo,this.Jm]);this.stream.addEventListener(b.Events.DATA,function(aa){try{if(z.Re.NFa(aa))return z.stream.finish()}catch(ea){throw z.stream.abort(),z.Nu(ea),
r(ea),ea;}});this.stream.addEventListener(b.Events.DONE,function(aa){z.lFa=!0;z.Sba.resolve();aa&&(z.Nu(aa),r(aa))});this.Re.addEventListener(h.Events.HEADER,Object(oa.bind)(this.Fca,this));this.Re.addEventListener(h.Events.FILE,Object(oa.bind)(this.wGa,this));return this.stream.start(this.Of,this.withCredentials)};a.prototype.l8=function(r){var z=this;this.Sba.promise.then(function(){r(Object.keys(z.Re.cs))})};a.prototype.Vs=function(){return!0};a.prototype.request=function(r){var z=this;this.lFa&&
r.forEach(function(aa){z.Gca[aa]||z.ZMa(aa)})};a.prototype.Fca=function(){};a.prototype.abort=function(){this.stream&&this.stream.abort()};a.prototype.ZMa=function(r){this.trigger(ia.a.Events.PART_READY,[{Nb:r,error:"Requested part not found",Gl:!1,ui:!1}])};a.prototype.wGa=function(r,z,aa){this.Gca[r]=!0;this.trigger(ia.a.Events.PART_READY,[{Nb:r,data:z,Gl:!1,ui:!1,error:null,xe:aa}])};return a}(ia.a);Object(n.a)(ya);Object(n.b)(ya);ua["default"]=ya}}]);}).call(this || window)