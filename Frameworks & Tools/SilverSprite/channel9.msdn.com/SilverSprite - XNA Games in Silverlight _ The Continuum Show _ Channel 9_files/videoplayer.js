/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
jQuery.extend({getURLParam:function(f){var d="";var h=window.location.href;var g=false;var b=f+"=";var j=b.length;if(h.indexOf("?")>-1){var e=h.substr(h.indexOf("?")+1);var a=e.split("&");for(var c=0;c<a.length;c++){if(a[c].substr(0,j)==b){var i=a[c].split("=");d=i[1];g=true;break}}}if(g==false){return null}return d}});
jQuery.extend({setURLParam:function(f,k){var o=window.location.protocol;var n=window.location.hostname;var h=window.location.port;var b=window.location.host;var a=window.location.pathname;var m=window.location.hash;var e=window.location.search;var i=/([^&=]+)=?([^&]*)/g;var d={};var c;var p;var g=function(r){return decodeURIComponent(r.replace(/\+/g," "))};if(e){while(c=i.exec(e.substring(1))){d[g(c[1])]=g(c[2])}}var j={};if(jQuery.isPlainObject(f)){j=f}else{if((typeof f==="string")&&(typeof k==="string")){j[f]=k}}for(var q in j){if(j.hasOwnProperty(q)){d[q]=j[q]}}var l=[];l.push(o,"//",b);if(a){l.push(a)}if(!jQuery.isEmptyObject(d)){l.push("?");p=true;for(var q in d){if(d.hasOwnProperty(q)){if(!p){l.push("&")}l.push(encodeURIComponent(q),"=",encodeURIComponent(d[q]));p=false}}}if(m){l.push(m)}return l.join("")}});
//v4.0.50401.0
if (!window.Silverlight) window.Silverlight = {}; Silverlight._silverlightCount = 0; Silverlight.__onSilverlightInstalledCalled = false; Silverlight.fwlinkRoot = "http://go2.microsoft.com/fwlink/?LinkID="; Silverlight.__installationEventFired = false; Silverlight.onGetSilverlight = null; Silverlight.onSilverlightInstalled = function () { window.location.reload(false) }; Silverlight.isInstalled = function (b) { if (b == undefined) b = null; var a = false, m = null; try { var i = null, j = false; if (window.ActiveXObject) try { i = new ActiveXObject("AgControl.AgControl"); if (b === null) a = true; else if (i.IsVersionSupported(b)) a = true; i = null } catch (l) { j = true } else j = true; if (j) { var k = navigator.plugins["Silverlight Plug-In"]; if (k) if (b === null) a = true; else { var h = k.description; if (h === "1.0.30226.2") h = "2.0.30226.2"; var c = h.split("."); while (c.length > 3) c.pop(); while (c.length < 4) c.push(0); var e = b.split("."); while (e.length > 4) e.pop(); var d, g, f = 0; do { d = parseInt(e[f]); g = parseInt(c[f]); f++ } while (f < e.length && d === g); if (d <= g && !isNaN(d)) a = true } } } catch (l) { a = false } return a }; Silverlight.WaitForInstallCompletion = function () { if (!Silverlight.isBrowserRestartRequired && Silverlight.onSilverlightInstalled) { try { navigator.plugins.refresh() } catch (a) { } if (Silverlight.isInstalled(null) && !Silverlight.__onSilverlightInstalledCalled) { Silverlight.onSilverlightInstalled(); Silverlight.__onSilverlightInstalledCalled = true } else setTimeout(Silverlight.WaitForInstallCompletion, 3e3) } }; Silverlight.__startup = function () { navigator.plugins.refresh(); Silverlight.isBrowserRestartRequired = Silverlight.isInstalled(null); if (!Silverlight.isBrowserRestartRequired) { Silverlight.WaitForInstallCompletion(); if (!Silverlight.__installationEventFired) { Silverlight.onInstallRequired(); Silverlight.__installationEventFired = true } } else if (window.navigator.mimeTypes) { var b = navigator.mimeTypes["application/x-silverlight-2"], c = navigator.mimeTypes["application/x-silverlight-2-b2"], d = navigator.mimeTypes["application/x-silverlight-2-b1"], a = d; if (c) a = c; if (!b && (d || c)) { if (!Silverlight.__installationEventFired) { Silverlight.onUpgradeRequired(); Silverlight.__installationEventFired = true } } else if (b && a) if (b.enabledPlugin && a.enabledPlugin) if (b.enabledPlugin.description != a.enabledPlugin.description) if (!Silverlight.__installationEventFired) { Silverlight.onRestartRequired(); Silverlight.__installationEventFired = true } } if (!Silverlight.disableAutoStartup) if (window.removeEventListener) window.removeEventListener("load", Silverlight.__startup, false); else window.detachEvent("onload", Silverlight.__startup) }; if (!Silverlight.disableAutoStartup) if (window.addEventListener) window.addEventListener("load", Silverlight.__startup, false); else window.attachEvent("onload", Silverlight.__startup); Silverlight.createObject = function (m, f, e, k, l, h, j) { var d = {}, a = k, c = l; d.version = a.version; a.source = m; d.alt = a.alt; if (h) a.initParams = h; if (a.isWindowless && !a.windowless) a.windowless = a.isWindowless; if (a.framerate && !a.maxFramerate) a.maxFramerate = a.framerate; if (e && !a.id) a.id = e; delete a.ignoreBrowserVer; delete a.inplaceInstallPrompt; delete a.version; delete a.isWindowless; delete a.framerate; delete a.data; delete a.src; delete a.alt; if (Silverlight.isInstalled(d.version)) { for (var b in c) if (c[b]) { if (b == "onLoad" && typeof c[b] == "function" && c[b].length != 1) { var i = c[b]; c[b] = function (a) { return i(document.getElementById(e), j, a) } } var g = Silverlight.__getHandlerName(c[b]); if (g != null) { a[b] = g; c[b] = null } else throw "typeof events." + b + " must be 'function' or 'string'"; } slPluginHTML = Silverlight.buildHTML(a) } else slPluginHTML = Silverlight.buildPromptHTML(d); if (f) f.innerHTML = slPluginHTML; else return slPluginHTML }; Silverlight.buildHTML = function (a) { var b = []; b.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"'); if (a.id != null) b.push(' id="' + Silverlight.HtmlAttributeEncode(a.id) + '"'); if (a.width != null) b.push(' width="' + a.width + '"'); if (a.height != null) b.push(' height="' + a.height + '"'); b.push(" >"); delete a.id; delete a.width; delete a.height; for (var c in a) if (a[c]) b.push('<param name="' + Silverlight.HtmlAttributeEncode(c) + '" value="' + Silverlight.HtmlAttributeEncode(a[c]) + '" />'); b.push("</object>"); return b.join("") }; Silverlight.createObjectEx = function (b) { var a = b, c = Silverlight.createObject(a.source, a.parentElement, a.id, a.properties, a.events, a.initParams, a.context); if (a.parentElement == null) return c }; Silverlight.buildPromptHTML = function (b) { var a = "", d = Silverlight.fwlinkRoot, c = b.version; if (b.alt) a = b.alt; else { if (!c) c = ""; a = "<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>"; a = a.replace("{1}", c); a = a.replace("{2}", d + "108181") } return a }; Silverlight.getSilverlight = function (e) { if (Silverlight.onGetSilverlight) Silverlight.onGetSilverlight(); var b = "", a = String(e).split("."); if (a.length > 1) { var c = parseInt(a[0]); if (isNaN(c) || c < 2) b = "1.0"; else b = a[0] + "." + a[1] } var d = ""; if (b.match(/^\d+\056\d+$/)) d = "&v=" + b; Silverlight.followFWLink("149156" + d) }; Silverlight.followFWLink = function (a) { top.location = Silverlight.fwlinkRoot + String(a) }; Silverlight.HtmlAttributeEncode = function (c) { var a, b = ""; if (c == null) return null; for (var d = 0; d < c.length; d++) { a = c.charCodeAt(d); if (a > 96 && a < 123 || a > 64 && a < 91 || a > 43 && a < 58 && a != 47 || a == 95) b = b + String.fromCharCode(a); else b = b + "&#" + a + ";" } return b }; Silverlight.default_error_handler = function (e, b) { var d, c = b.ErrorType; d = b.ErrorCode; var a = "\nSilverlight error message     \n"; a += "ErrorCode: " + d + "\n"; a += "ErrorType: " + c + "       \n"; a += "Message: " + b.ErrorMessage + "     \n"; if (c == "ParserError") { a += "XamlFile: " + b.xamlFile + "     \n"; a += "Line: " + b.lineNumber + "     \n"; a += "Position: " + b.charPosition + "     \n" } else if (c == "RuntimeError") { if (b.lineNumber != 0) { a += "Line: " + b.lineNumber + "     \n"; a += "Position: " + b.charPosition + "     \n" } a += "MethodName: " + b.methodName + "     \n" } alert(a) }; Silverlight.__cleanup = function () { for (var a = Silverlight._silverlightCount - 1; a >= 0; a--) window["__slEvent" + a] = null; Silverlight._silverlightCount = 0; if (window.removeEventListener) window.removeEventListener("unload", Silverlight.__cleanup, false); else window.detachEvent("onunload", Silverlight.__cleanup) }; Silverlight.__getHandlerName = function (b) { var a = ""; if (typeof b == "string") a = b; else if (typeof b == "function") { if (Silverlight._silverlightCount == 0) if (window.addEventListener) window.addEventListener("unload", Silverlight.__cleanup, false); else window.attachEvent("onunload", Silverlight.__cleanup); var c = Silverlight._silverlightCount++; a = "__slEvent" + c; window[a] = b } else a = null; return a }; Silverlight.onRequiredVersionAvailable = function () { }; Silverlight.onRestartRequired = function () { }; Silverlight.onUpgradeRequired = function () { }; Silverlight.onInstallRequired = function () { }; Silverlight.IsVersionAvailableOnError = function (d, a) { var b = false; try { if (a.ErrorCode == 8001 && !Silverlight.__installationEventFired) { Silverlight.onUpgradeRequired(); Silverlight.__installationEventFired = true } else if (a.ErrorCode == 8002 && !Silverlight.__installationEventFired) { Silverlight.onRestartRequired(); Silverlight.__installationEventFired = true } else if (a.ErrorCode == 5014 || a.ErrorCode == 2106) { if (Silverlight.__verifySilverlight2UpgradeSuccess(a.getHost())) b = true } else b = true } catch (c) { } return b }; Silverlight.IsVersionAvailableOnLoad = function (b) { var a = false; try { if (Silverlight.__verifySilverlight2UpgradeSuccess(b.getHost())) a = true } catch (c) { } return a }; Silverlight.__verifySilverlight2UpgradeSuccess = function (d) { var c = false, b = "4.0.50401", a = null; try { if (d.IsVersionSupported(b + ".99")) { a = Silverlight.onRequiredVersionAvailable; c = true } else if (d.IsVersionSupported(b + ".0")) a = Silverlight.onRestartRequired; else a = Silverlight.onUpgradeRequired; if (a && !Silverlight.__installationEventFired) { a(); Silverlight.__installationEventFired = true } } catch (e) { } return c }
if(!window.Silverlight){window.Silverlight={}}Silverlight.supportedUserAgent=function(d,k){try{var a=null;if(k){a=k}else{a=window.navigator.userAgent}var h={OS:"Unsupported",Browser:"Unsupported"};if(a.indexOf("Windows NT")>=0||a.indexOf("Mozilla/4.0 (compatible; MSIE 6.0)")>=0){h.OS="Windows"}else{if(a.indexOf("PPC Mac OS X")>=0){h.OS="MacPPC"}else{if(a.indexOf("Intel Mac OS X")>=0){h.OS="MacIntel"}else{if(a.indexOf("Linux")>=0){h.OS="Linux"}}}}if(h.OS!="Unsupported"){if(a.indexOf("MSIE")>=0){if(navigator.userAgent.indexOf("Win64")==-1){if(parseInt(a.split("MSIE")[1])>=6){h.Browser="MSIE"}}}else{if(a.indexOf("Firefox")>=0){var i=a.split("Firefox/")[1].split(".");var l=parseInt(i[0]);if(l>=2){h.Browser="Firefox"}else{var f=parseInt(i[1]);if((l==1)&&(f>=5)){h.Browser="Firefox"}}}else{if(a.indexOf("Chrome")>=0){h.Browser="Chrome"}else{if(a.indexOf("Safari")>=0){var i=a.split("Version/")[1].split(".");var l=parseInt(i[0]);if(h.OS.indexOf("Windows")<0){if(l>=3){h.Browser="Safari"}}else{if(l>=4){h.Browser="Safari"}}}else{if(a.indexOf("Opera")>=0){h.Browser="Opera"}else{if(a.indexOf("Minefield")>=0){var i=a.split("Minefield/")[1].split(".");var l=parseInt(i[0]);if(l>=2){h.Browser="Minefield"}else{var f=parseInt(i[1]);if((l==1)&&(f>=5)){h.Browser="Minefield"}}}else{if(a.indexOf("Gecko")>=0){var j=a.split("Gecko/")[1].substring(0,6);var c=parseInt(j);if(c>200805){h.Browser="Gecko"}}}}}}}}}var g=parseInt(d);var b=(!(h.OS=="Unsupported"||h.Browser=="Unsupported"||(h.OS.indexOf("Mac")>=0&&h.Browser=="MSIE")||(h.OS.indexOf("Mac")>=0&&h.Browser=="Chrome")));if((h.OS.indexOf("Windows")>=0&&h.Browser=="Chrome"&&g<4)){return false}if((h.OS.indexOf("Windows")<0&&h.Browser=="Opera")){return false}if((h.OS=="MacPPC")&&(g>1)){return((b&&(h.OS!="MacPPC")))}if((h.OS=="Linux")&&(g>2)){return((b&&(h.OS!="Linux")))}if(d=="1.0"){return(b&&(a.indexOf("Windows NT 5.0")<0))}else{return(b)}}catch(m){return false}};
ch9.functions.removeplayer=function(){$("#player").remove()};ch9.functions.getseconds=function(g){try{var c=/(?:([\d]{0,2})h)?(?:([\d]{0,2})m)?(?:([\d]{0,2})s)?/i;if(c.test(g)){var d=g.match(c);var b=parseInt(d[1]);b=(isNaN(b))?0:b*3600;var a=parseInt(d[2]);a=(isNaN(a))?0:a*60;var f=parseInt(d[3]);f=(isNaN(f))?0:f;return b+a+f}}catch(h){return 0}};ch9.functions.getminutes=function(f){try{var c=new Date(f*1000);var b=c.getUTCHours();var a=c.getUTCMinutes();var d=c.getUTCSeconds();return b+"h"+a+"m"+d+"s"}catch(g){return""}};ch9.functions.createplayer=function(a,b,c,e){var d="4.0.50826.0";var b=b||"";var c=c||"";ch9.functions.removeplayer();return Silverlight.createObject("/scripts/VideoPlayer.xap?v=3.2",null,"player",{alt:e,background:"#333",minRuntimeVersion:d,version:d,autoUpgrade:"false",windowless:"true"},{},"deferredLoad=true,duration=0,m="+a+",autostart=true,autohide=true,showembed=true,thumbnail="+c+",starttime="+ch9.functions.getseconds(b),"")};ch9.functions.createHtml5player=function(e,a,b,c){var a=a||"";var d={id:c.id||"player",poster:c.poster||b,controls:c.controls===false?false:true,autoplay:c.autoplay===false?false:true,error:c.error};return Html5Player.createObject(e,d,a)};ch9.functions.playvideo=function(m){if(typeof ch9.data.videoInfo!="undefined"){var h=ch9.data.videoInfo.getHtml5Preference();var n=ch9.data.videoInfo.getHtml5Videos();var j=ch9.data.videoInfo.getVideoHref();var l=ch9.data.videoInfo.getPlayer$Holder();var c=ch9.data.videoInfo.getThumbUrl()||"";if(c!=""){c=c.substring(4,c.length-1).replace(/"/g,"").replace(/'/g,"")}l.find("a:first").hide();var f="4.0.50826.0";var g="javascript:Silverlight.getSilverlight('"+f+"');";var b="http://go.microsoft.com/fwlink/?LinkId=108181";var a='<a class="getSilverlight" href="'+g+'"><img src="'+b+'" alt="Install Microsoft Silverlight" /></a>';var d=Silverlight.supportedUserAgent();var k=Html5Player.supportedUserAgent();var e=n.length>0;var i="<p>Doh! Your browser doesn't seem to support Silverlight or HTML5 video or we don't have an HTML5 video for this one.</p>";if(d){i+="<p>You may click the link below to install Silverlight:<br />"+a+"</p>"}if(e){i+='<p>Upgrade to a browser that supports h264 MP4 HTML5 video playback:<br /><a href="http://www.beautyoftheweb.com/">IE9+</a>, <a href="http://www.google.com/chrome/intl/en/landing_chrome.html">Chrome 5+</a>, or <a href="http://www.apple.com/safari/">Safari 4+</a></p>'}i+='<p>Click the link below to open the video in a different video player:<br /><a href="'+j+'">Play video!</a></p>';i='<div class="error">'+i+"</div>";if(h&&k&&e){l.append(ch9.functions.createHtml5player(n,m,c,{error:ch9.functions.createplayer(j,m,c,i)}));return false}if(!h&&k&&e){l.append(ch9.functions.createplayer(j,m,c,ch9.functions.createHtml5player(n,m,c,{error:i})));return false}if(d){l.append(ch9.functions.createplayer(j,m,c,i));return false}l.append(i);return true}return true};ch9.functions.videoSeek=function(a){var b=$("#player");var a=a||"";if(b.length>0){if(b.get(0).Content){b.get(0).Content.player.JumpToPosition(a)}else{b.get(0).currentTime=ch9.functions.getseconds(a)}}};ch9.functions.getVideoPosition=function(c){try{var b=$("#player");var a;if(b.get(0).Content){a=b.get(0).Content.player.GetPosition()}else{a=ch9.functions.getminutes(b.get(0).currentTime)}if(a){return a}else{if(c){return"0h0m0s"}else{return""}}}catch(d){if(c){return"0h0m0s"}else{return""}}};ch9.functions.isVideoPlaying=function(b){try{var c=$("#player");if(c.length>0){if(c.get(0).Content){var f=c.get(0).Content.player.GetState();if((f==="Playing")||(!b&&(f==="Buffering"))){return true}}else{var a=c.get(0).currentTime;if(a>0){return true}}}return false}catch(d){return false}};$(function initjumpto(){var i="currentPosition";var j=function(m){var k=[];k.push("{");var l=true;for(var e in m){if(m.hasOwnProperty(e)){if(!l){k.push(",")}k.push('"',e,'":"',m[e],'"');l=false}}k.push("}");return k.join("")};var f=function(){var e=$.cookie(i);if(!e){e="{}"}return $.parseJSON(e)};var g=function(e){if(($("#player").length==0)&&e){ch9.functions.playvideo(e);if(typeof $.scrollTo!=="undefined"){$(window).scrollTo("h1:first")}}};var a=window.location.href;if(a.indexOf("#time=")>-1){var d=a.substring(a.indexOf("#time=")+6);g(d)}else{try{var c=f();var b=location.pathname;if(($("body").hasClass("entry")||$("body").hasClass("learn"))&&c[b]){g(c[b])}}catch(h){}}$("#entry-body a").each(function(){var e=$(this).attr("href");if(e&&(e.indexOf("#time=")>-1)){$(this).bind("click",function(){var k=e.substring(e.indexOf("#time=")+6);var l=$("#player");if(l.length==0){g(k)}else{ch9.functions.videoSeek(k)}return false})}});$(window).bind("unload",function(){try{var n=ch9.functions.getVideoPosition();var o=ch9.functions.isVideoPlaying();var m=$("body");var l=f();var k=location.pathname;if(n&&o&&(m.hasClass("entry")||m.hasClass("learn"))){l[k]=n}else{delete l[k]}$.cookie(i,j(l))}catch(p){}return true})});
if(Html5Player===undefined){var Html5Player={}}Html5Player.createObject=function(b,c,a){return Html5Player.Tag(b,c,a)};Html5Player.Tag=function(c,d,b){var a=new Array();a.push("<video");if(d.id!=null){a.push(' id="'+d.id+'"')}if(d.poster!=null){a.push(' poster="'+d.poster+'"')}if(d.width!=null){a.push(' width="'+d.width+'"')}if(d.height!=null){a.push(' height="'+d.height+'"')}if(d.controls!=null&&d.controls==true){a.push(" controls")}if(d.preload!=null&&d.preload==true){a.push(" preload")}if(d.autoplay!=null&&d.autoplay==true){a.push(" autoplay")}if(d.loop!=null&&d.loop==true){a.push(" loop")}a.push(' onerror="Html5Player.fallback(this);"');if(b!=""){a.push(" oncanplay=\"ch9.functions.videoSeek('"+b+"');\"")}a.push(">");for(var e=0;e<c.length;e++){a.push('<source src="'+c[e].url+'" />')}if(d.error!=null&&d.error!=""){a.push(d.error)}else{a.push('<div class="error"><p>Doh! Your browser doesn\'t seem to support HTML5 video.<br />You may choose to upgrade to a browser that supports h264 MP4 playback in the video element such as :<br /> <a href="http://www.beautyoftheweb.com/">IE9+</a>, <a href="http://www.google.com/chrome/intl/en/landing_chrome.html">Chrome 5+</a>, or <a href="http://www.apple.com/safari/">Safari 4+</a></p><p>Or click the link below to open the video in a different video player:<br /><a href="'+c[0].url+'">Click to play video!</a></p></div>')}a.push("</video>");return a.join("")};Html5Player.fallback=function(a){if(a.error!=null){while(a.firstChild){if(a.firstChild instanceof HTMLSourceElement){a.removeChild(a.firstChild)}else{a.parentNode.insertBefore(a.firstChild,a)}}a.parentNode.removeChild(a)}};Html5Player.supportedUserAgent=function(f){try{var d=null;if(f){d=f}else{d=window.navigator.userAgent}var c={Browser:"Unknown",Major:0,Minor:0};if(d.indexOf("MSIE")>=0){if(navigator.userAgent.indexOf("Win64")==-1){c.Browser="IE";c.Major=parseInt(d.split("MSIE")[1])}}else{if(d.indexOf("Firefox")>=0){var b=d.split("Firefox/")[1].split(".");c.Browser="Firefox";c.Major=parseInt(b[0]);c.Minor=parseInt(b[1])}else{if(d.indexOf("Chrome")>=0){var b=d.split("Chrome/")[1].split(".");c.Browser="Chrome";c.Major=parseInt(b[0]);c.Minor=parseInt(b[1])}else{if(d.indexOf("Safari")>=0){var b=d.split("Version/")[1].split(".");c.Browser="Safari";c.Major=parseInt(b[0]);c.Minor=parseInt(b[1])}else{if(d.indexOf("Opera")>=0){var b=d.split("Version/")[1].split(".");c.Browser="Opera";c.Major=parseInt(b[0]);c.Minor=parseInt(b[1].substring(0,1))}else{if(d.toLowerCase().indexOf("iphone")>=0||d.toLowerCase().indexOf("ipod")>=0){var b=d.split("Version/")[1].split(".");c.Browser="iPhone";c.Major=parseInt(b[0])}else{if(d.toLowerCase().indexOf("android")>=0){var b=d.split("Version/")[1].split(".");c.Browser="Android";c.Major=parseInt(b[0])}else{if(d.toLowerCase().indexOf("windows phone os")>=0){var b=d.split("IEMobile/")[1].split(".");c.Browser="WP7";c.Major=parseInt(b[0])}}}}}}}}if(c.Browser=="IE"&&c.Major<9){return false}if(c.Browser=="Firefox"&&(c.Major<3||(c.Major==3&&c.Minor<5))){return false}if(c.Browser=="Chrome"&&c.Major<5){return false}if(c.Browser=="Safari"&&c.Major<3){return false}if(c.Browser=="Opera"&&(c.Major<10||(c.Major==10&&c.Minor<5))){return false}if(c.Browser=="iPhone"&&c.Major<3){return false}if(c.Browser=="Android"&&c.Major<2){return false}if(c.Browser=="WP7"&&c.Major<9){return false}return true}catch(a){return false}};
