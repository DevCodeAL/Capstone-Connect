/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{579:function(ya,ua,n){n.r(ua);var pa=n(0),oa=n(3),na=n(199);ya=n(122);var ka=n(334);n=n(500);var ia=window;ya=function(fa){function x(y,w,b){w=fa.call(this,y,w,b)||this;if(y.name&&"xod"!==y.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!ia.FileReader||!ia.File||!ia.Blob)throw Error("File API is not supported in this browser");w.file=y;w.sJ=[];w.kS=0;return w}Object(pa.c)(x,fa);x.prototype.pW=function(y,
w,b){var f=this,h=new FileReader;h.onloadend=function(e){if(0<f.sJ.length){var a=f.sJ.shift();a.vGa.readAsBinaryString(a.file)}else f.kS--;if(h.error){e=h.error;if(e.code===e.ABORT_ERR){Object(oa.i)("Request for chunk ".concat(w.start,"-").concat(w.stop," was aborted"));return}return b(e)}if(e=h.content||e.target.result)return b(!1,e);Object(oa.i)("No data was returned from FileReader.")};w&&(y=(y.slice||y.webkitSlice||y.mozSlice||y.uRa).call(y,w.start,w.stop));0===f.sJ.length&&50>f.kS?(h.readAsBinaryString(y),
f.kS++):f.sJ.push({vGa:h,file:y});return function(){h.abort()}};x.prototype.lz=function(y){var w=this;w.oJ=!0;var b=na.a;w.pW(w.file,{start:-b,stop:w.file.size},function(f,h){if(f)return Object(oa.i)("Error loading end header: %s ".concat(f)),y(f);if(h.length!==b)throw Error("Zip end header data is wrong size!");w.Re=new ka.a(h);var e=w.Re.E7();w.pW(w.file,e,function(a,r){if(a)return Object(oa.i)("Error loading central directory: %s ".concat(a)),y(a);if(r.length!==e.stop-e.start)throw Error("Zip central directory data is wrong size!");
w.Re.vca(r);w.OR=!0;w.oJ=!1;return y(!1)})})};x.prototype.QX=function(y,w){var b=this,f=b.Gj[y];if(b.Re.c5(y)){var h=b.Re.pD(y),e=b.pW(b.file,h,function(a,r){delete b.Gj[y];if(a)return Object(oa.i)('Error loading part "%s": %s, '.concat(y,", ").concat(a)),w(a);if(r.length!==h.stop-h.start)throw Error("Part data is wrong size!");w(!1,y,r,b.Re.Q9(y))});f.Dfa=!0;f.cancel=e}else w(Error('File not found: "'.concat(y,'"')),y)};return x}(ya.a);Object(n.a)(ya);Object(n.b)(ya);ua["default"]=ya}}]);}).call(this || window)