/*
* Live and Let Die
* 
* Requires jquery 1.4.1 +
*
*
* Two plugins: Live and Let Die and Live and Die
*
* Live and Let Die:
* This allows events to be attached before the DOM is ready
* Before DOM has loaded, .live() events are used
* When DOM is ready, .die() removes the .live() events and .bind() is used to bound regular events
*
*
* Live and Die:
* This simply attaches events using .live() and then removes them when the DOM is ready
*
*
* syntax:
* .lald( eventType, [ eventData ], handler(eventObject) )
* .lad( eventType, [ eventData ], handler(eventObject) )
*
* which is just like:
* .bind( eventType, [ eventData ], handler(eventObject) )
* .live( eventType, eventData, handler )
*
* version 0.2
* February 3, 2010
* GK
*/
jQuery.fn.lald=function(c,e,b){var d=this;var a=b?b:e;d.live(c,e,b);$(function(){d.die(c,a);$(d.selector).bind(c,e,b)});return this};jQuery.fn.lad=function(c,e,b){var d=this;var a=b?b:e;d.live(c,e,b);$(function(){d.die(c,a)});return this};
jQuery.cookie=function(k,a,c){if(typeof a!="undefined"){c=c||{};if(a===null){a="";c.expires=-1}var b="";if(c.expires&&(typeof c.expires=="number"||c.expires.toUTCString)){var f;if(typeof c.expires=="number"){f=new Date();f.setTime(f.getTime()+(c.expires*24*60*60*1000))}else{f=c.expires}b="; expires="+f.toUTCString()}var g=c.path?"; path="+(c.path):"";var j=c.domain?"; domain="+(c.domain):"";var m=c.secure?"; secure":"";document.cookie=[k,"=",encodeURIComponent(a),b,g,j,m].join("")}else{var l=null;if(document.cookie&&document.cookie!=""){var h=document.cookie.split(";");for(var d=0;d<h.length;d++){var e=jQuery.trim(h[d]);if(e.substring(0,k.length+1)==(k+"=")){l=decodeURIComponent(e.substring(k.length+1));break}}}return l}};
if(ch9===undefined){var ch9={}}if(ch9.data===undefined){ch9.data={}}if(ch9.functions===undefined){ch9.functions={}}if(ch9.value===undefined){ch9.value={}};
(function(){var f="inactive";var b=".search input.text";var a=".search .bing";var g="";var e=function(h){var i=$(h.target);g=i.val();if(i.hasClass(f)){i.removeClass(f).val("")}};var c=function(h){var i=$(h.target);if(i.val()==""){i.addClass(f).val(i.attr("defaultValue"))}};var d=function(h){$(h.target).parents("form").parent().parent().find(b).focus()};$(b).lald("focus",function(h){e(h)});$(b).lald("blur",function(h){c(h)});$(a).lald("click",function(h){d(h)});$(function(){var h=$(b);if(h.attr("defaultValue")!=h.val()){h.removeClass(f)}})})();if(typeof window.console==="undefined"){window.console={};if(typeof window.console.log==="undefined"){window.console.log=function(a){alert("Console.log:\n"+a)}}}(function(){var g="hasWideFont";var d=13;try{var c=false;var a=$.cookie(g);if(a===null){var b=$("<body><span style=\"padding:0px;font-family:'Calibri','Lucida Grande',Helvetica,Arial,sans-serif;\">M</span></body>").prependTo("html");if(b.width()>d){c=true;$.cookie(g,"true")}else{$.cookie(g,"false")}b.remove()}else{if(a==="true"){c=true}}if(c){$("<link>").appendTo("head").attr({rel:"stylesheet",type:"text/css",href:"/styles/wideFont.css"})}}catch(f){}})();
