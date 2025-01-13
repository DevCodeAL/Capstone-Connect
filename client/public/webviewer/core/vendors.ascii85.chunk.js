/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{590:function(ya,ua,n){(function(pa){function oa(h){this.oi=h=h||{};if(Array.isArray(h.table)){var e=[];h.table.forEach(function(a,r){e[a.charCodeAt(0)]=r});h.vua=h.table;h.jra=e}}var na=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ka=
pa.allocUnsafe||function(h){return new pa(h)},ia=function(){return"undefined"===typeof Uint8Array?function(h){return Array(h)}:function(h){return new Uint8Array(h)}}(),fa=String.fromCharCode(0),x=fa+fa+fa+fa,y=na("<~").qF(0),w=na("~>").qF(0),b=function(){var h=Array(85),e;for(e=0;85>e;e++)h[e]=String.fromCharCode(33+e);return h}(),f=function(){var h=Array(256),e;for(e=0;85>e;e++)h[33+e]=e;return h}();fa=ya.exports=new oa;oa.prototype.encode=function(h,e){var a=ia(5),r=h,z=this.oi,aa,ea;"string"===
typeof r?r=na(r,"binary"):r instanceof pa||(r=na(r));e=e||{};if(Array.isArray(e)){h=e;var ba=z.LJ||!1;var ha=z.RU||!1}else h=e.table||z.vua||b,ba=void 0===e.LJ?z.LJ||!1:!!e.LJ,ha=void 0===e.RU?z.RU||!1:!!e.RU;z=0;var ca=Math.ceil(5*r.length/4)+4+(ba?4:0);e=ka(ca);ba&&(z+=e.write("<~",z));var ma=aa=ea=0;for(ca=r.length;ma<ca;ma++){var la=r.SX(ma);ea*=256;ea+=la;aa++;if(!(aa%4)){if(ha&&538976288===ea)z+=e.write("y",z);else if(ea){for(aa=4;0<=aa;aa--)la=ea%85,a[aa]=la,ea=(ea-la)/85;for(aa=0;5>aa;aa++)z+=
e.write(h[a[aa]],z)}else z+=e.write("z",z);aa=ea=0}}if(aa)if(ea){r=4-aa;for(ma=4-aa;0<ma;ma--)ea*=256;for(aa=4;0<=aa;aa--)la=ea%85,a[aa]=la,ea=(ea-la)/85;for(aa=0;5>aa;aa++)z+=e.write(h[a[aa]],z);z-=r}else for(ma=0;ma<aa+1;ma++)z+=e.write(h[0],z);ba&&(z+=e.write("~>",z));return e.slice(0,z)};oa.prototype.decode=function(h,e){var a=this.oi,r=!0,z=!0,aa,ea,ba;e=e||a.jra||f;if(!Array.isArray(e)&&(e=e.table||e,!Array.isArray(e))){var ha=[];Object.keys(e).forEach(function(ja){ha[ja.charCodeAt(0)]=e[ja]});
e=ha}r=!e[122];z=!e[121];h instanceof pa||(h=na(h));ha=0;if(r||z){var ca=0;for(ba=h.length;ca<ba;ca++){var ma=h.SX(ca);r&&122===ma&&ha++;z&&121===ma&&ha++}}var la=0;ba=Math.ceil(4*h.length/5)+4*ha+5;a=ka(ba);if(4<=h.length&&h.qF(0)===y){for(ca=h.length-2;2<ca&&h.qF(ca)!==w;ca--);if(2>=ca)throw Error("Invalid ascii85 string delimiter pair.");h=h.slice(2,ca)}ca=aa=ea=0;for(ba=h.length;ca<ba;ca++)ma=h.SX(ca),r&&122===ma?la+=a.write(x,la):z&&121===ma?la+=a.write("    ",la):void 0!==e[ma]&&(ea*=85,ea+=
e[ma],aa++,aa%5||(la=a.jOa(ea,la),aa=ea=0));if(aa){h=5-aa;for(ca=0;ca<h;ca++)ea*=85,ea+=84;ca=3;for(ba=h-1;ca>ba;ca--)la=a.kOa(ea>>>8*ca&255,la)}return a.slice(0,la)};fa.TPa=new oa({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});fa.dPa=new oa({LJ:!0});fa.uha=oa}).call(this,n(501).Buffer)}}]);}).call(this || window)