if(isIE=="undefined"){var isIE=false}if(isIE6=="undefined"){var isIE6=false}if(lightbox=="undefined"){var lightbox=0}jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});(function(a){a.fn.pngfix=function(b){var e=this;var c=a.extend({imageFixSrc:false,sizingMethod:false},b);if(!a.browser.msie||(a.browser.msie&&a.browser.version>=7)){return(e)}function d(h,j,k){var g=h.attr("filters");var i="DXImageTransform.Microsoft.AlphaImageLoader";if(g[i]){g[i].enabled=true;g[i].src=j;g[i].sizingMethod=k}else{h.css("filter","progid:"+i+'(enabled="true", sizingMethod="'+k+'", src="'+j+'")')}}function f(g){if(g.css("width")=="auto"&g.css("height")=="auto"){g.css("width",g.attr("offsetWidth")+"px")}}return(e.each(function(){var i=a(this);if(i.attr("tagName").toUpperCase()=="IMG"&&(/\.png/i).test(i.attr("src"))){if(!c.imageFixSrc){i.wrap("<span></span>");var h=i.parent();h.css({height:i.height(),width:i.width(),display:"inline-block"});d(h,i.attr("src"),"scale");i.remove()}else{if((/\.gif/i).test(c.imageFixSrc)){f(i);d(i,i.attr("src"),"image");i.attr("src",c.imageFixSrc)}}}else{var g=new String(i.css("backgroundImage"));var j=g.match(/^url\("(.*)"\)$/);if(j&&j.length){f(i);i.css("backgroundImage","none");var k="crop";if(c.sizingMethod){k=c.sizingMethod}d(i,j[1],k);i.find("a").each(function(){a(this).css("position","relative")})}}}))}})(jQuery);jQuery.fn.fadeIn=function(a,b){return this.animate({opacity:"show"},a,function(){if(jQuery.browser.msie){this.style.removeAttribute("filter")}if(jQuery.isFunction(b)){b()}})};jQuery.fn.fadeOut=function(a,b){return this.animate({opacity:"hide"},a,function(){if(jQuery.browser.msie){this.style.removeAttribute("filter")}if(jQuery.isFunction(b)){b()}})};jQuery.fn.fadeTo=function(a,c,b){return this.animate({opacity:c},a,function(){if(c==1&&jQuery.browser.msie){this.style.removeAttribute("filter")}if(jQuery.isFunction(b)){b()}})};function initTooltips(c){var a=function(){var e=jQuery(".tip",this).css("display","block")[0];var g=jQuery(e).height();var f=e.offsetHeight;var d=f+g;jQuery(".tip",this).stop().css({opacity:0,top:2-f}).animate({opacity:1,top:18-f},250)};var b=function(){var e=this;var f=jQuery(".tip",this).css("display","block")[0];var h=jQuery(f).height();var g=f.offsetHeight;var d=g+h;jQuery(".tip",this).stop().animate({opacity:0,top:10-g},250,function(){f.hiding=false;jQuery(this).css("display","none")})};jQuery(".tip").hover(function(){return false},function(){return true});jQuery(".tiptrigger, .cat-item").hover(function(){var d=this;a.apply(this);if(c.timeout){this.tttimeout=setTimeout(function(){b.apply(d)},c.timeout)}},function(){clearTimeout(this.tttimeout);b.apply(this)})}function webshot(b,a){jQuery(b).each(function(c){jQuery("body").append("<div class='"+a+"' id='"+a+c+"'><p><img src='http://images.websnapr.com/?size=s&amp;url="+jQuery(this).attr("href")+"' /></p></div>");var d=jQuery("#"+a+c);jQuery(this).mouseover(function(){d.css({opacity:0.8,display:"none"}).fadeIn(400)}).mousemove(function(e){d.css({left:e.pageX+15,top:e.pageY+15})}).mouseout(function(){d.fadeOut(400)})})}(function(f){var e,d,c=false,b=new Image,h,g=1,a=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i;f.fn.fancybox=function(j){j=f.extend({},f.fn.fancybox.defaults,j);var r=this;function m(){e=this;d=j;k();return false}function k(){if(c){return}if(f.isFunction(d.callbackOnStart)){d.callbackOnStart()}d.itemArray=[];d.itemCurrent=0;if(j.itemArray.length>0){d.itemArray=j.itemArray}else{var t={};if(!e.rel||e.rel==""){var t={href:e.href,title:e.title};if(f(e).children("img:first").length){t.orig=f(e).children("img:first")}d.itemArray.push(t)}else{var u=f(r).filter("a[rel="+e.rel+"]");var t={};for(var s=0;s<u.length;s++){t={href:u[s].href,title:u[s].title};if(f(u[s]).children("img:first").length){t.orig=f(u[s]).children("img:first")}d.itemArray.push(t)}while(d.itemArray[d.itemCurrent].href!=e.href){d.itemCurrent++}}}if(d.overlayShow){if(isIE6){f("embed, object, select").css("visibility","hidden")}f("#fancyoverlay").css("opacity",0).show().animate({opacity:d.overlayOpacity},166)}n()}function n(){f("#fancyright, #fancyleft, #fancytitle").fadeOut(333);var s=d.itemArray[d.itemCurrent].href;if(s.match(/#/)){var t=window.location.href.split("#")[0];t=s.replace(t,"");t=t.substr(t.indexOf("#"));l('<div id="fancydiv">'+f(t).html()+"</div>",d.frameWidth,d.frameHeight)}else{if(s.match(a)){b=new Image;b.src=s;if(b.complete){q()}else{f.fn.fancybox.showLoading();f(b).unbind().bind("load",function(){f(".fancyloading").hide();q()})}}else{if(s.match("iframe")||e.className.indexOf("iframe")>=0){l('<iframe id="fancyframe" onload="jQuery.fn.fancybox.showIframe()" name="fancyiframe'+Math.round(Math.random()*1000)+'" frameborder="0" hspace="0" src="'+s+'"></iframe>',d.frameWidth,d.frameHeight)}else{f.get(s,function(u){l('<div id="fancyajax">'+u+"</div>",d.frameWidth,d.frameHeight)})}}}}function q(){if(d.imageScale){var t=f.fn.fancybox.getViewport();var v=Math.min(Math.min(t[0]-36,b.width)/b.width,Math.min(t[1]-60,b.height)/b.height);var u=Math.round(v*b.width);var s=Math.round(v*b.height)}else{var u=b.width;var s=b.height}l('<img alt="" id="fancyimg" src="'+b.src+'" />',u,s)}function o(){if((d.itemArray.length-1)>d.itemCurrent){var s=d.itemArray[d.itemCurrent+1].href;if(s.match(a)){objNext=new Image();objNext.src=s}}if(d.itemCurrent>0){var s=d.itemArray[d.itemCurrent-1].href;if(s.match(a)){objNext=new Image();objNext.src=s}}}function l(y,t,A){c=true;var v=d.padding;if(isIE6){f("#fancycontent")[0].style.removeExpression("height");f("#fancycontent")[0].style.removeExpression("width")}if(v>0){t+=v*2;A+=v*2;f("#fancycontent").css({top:v+"px",right:v+"px",bottom:v+"px",left:v+"px",width:"auto",height:"auto"});if(isIE6){f("#fancycontent")[0].style.setExpression("height","(this.parentNode.clientHeight - 20)");f("#fancycontent")[0].style.setExpression("width","(this.parentNode.clientWidth - 20)")}}else{f("#fancycontent").css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"})}if(f("#fancyouter").is(":visible")&&t==f("#fancyouter").width()&&A==f("#fancyouter").height()){f("#fancycontent").fadeOut(99,function(){f("#fancycontent").empty().append(f(y)).fadeIn(99,function(){i()})});return}var z=f.fn.fancybox.getViewport();var u=(t+36)>z[0]?z[2]:(z[2]+Math.round((z[0]-t-36)/2));var C=(A+50)>z[1]?z[3]:(z[3]+Math.round((z[1]-A-50)/2));var B={left:u,top:C,width:t+"px",height:A+"px"};if(f("#fancyouter").is(":visible")){f("#fancycontent").fadeOut(99,function(){f("#fancycontent").empty();f("#fancyouter").animate(B,d.zoomSpeedChange,d.easingChange,function(){f("#fancycontent").append(f(y)).fadeIn(99,function(){i()})})})}else{if(d.zoomSpeedIn>0&&d.itemArray[d.itemCurrent].orig!==undefined){f("#fancycontent").empty().append(f(y));var x=d.itemArray[d.itemCurrent].orig;var s=f.fn.fancybox.getPosition(x);f("#fancyouter").css({left:(s.left-18)+"px",top:(s.top-18)+"px",width:f(x).width(),height:f(x).height()});if(d.zoomOpacity){B.opacity="show"}f("#fancyouter").animate(B,d.zoomSpeedIn,d.easingIn,function(){i()})}else{f("#fancycontent").hide().empty().append(f(y)).show();f("#fancyouter").css(B).fadeIn(99,function(){i()})}}}function p(){if(d.itemCurrent!=0){f("#fancyleft, #fancyleftico").unbind().bind("click",function(s){s.stopPropagation();d.itemCurrent--;n();return false});f("#fancyleft").show()}if(d.itemCurrent!=(d.itemArray.length-1)){f("#fancyright, #fancyrightico").unbind().bind("click",function(s){s.stopPropagation();d.itemCurrent++;n();return false});f("#fancyright").show()}}function i(){p();o();f(document).keydown(function(s){if(s.keyCode==27){f.fn.fancybox.close();f(document).unbind("keydown")}else{if(s.keyCode==37&&d.itemCurrent!=0){d.itemCurrent--;n();f(document).unbind("keydown")}else{if(s.keyCode==39&&d.itemCurrent!=(d.itemArray.length-1)){d.itemCurrent++;n();f(document).unbind("keydown")}}}});if(d.centerOnScroll){f(window).bind("resize scroll",f.fn.fancybox.scrollBox)}else{f("div#fancyouter").css("position","absolute")}if(d.hideOnContentClick){f("#fancywrap").click(f.fn.fancybox.close)}f("#fancyoverlay").bind("click",f.fn.fancybox.close);if(d.itemArray[d.itemCurrent].title!==undefined&&d.itemArray[d.itemCurrent].title.length>0){f("#fancytitle").html(d.itemArray[d.itemCurrent].title);f("#fancytitle").fadeIn(133)}if(d.overlayShow&&isIE6){f("embed, object, select",f("#fancycontent")).css("visibility","visible")}if(f.isFunction(d.callbackOnShow)){d.callbackOnShow()}c=false}return this.unbind("click").click(m)};f.fn.fancybox.scrollBox=function(){var i=f.fn.fancybox.getViewport();f("#fancyouter").css("left",((f("#fancyouter").width()+36)>i[0]?i[2]:i[2]+Math.round((i[0]-f("#fancyouter").width()-36)/2)));f("#fancyouter").css("top",((f("#fancyouter").height()+50)>i[1]?i[3]:i[3]+Math.round((i[1]-f("#fancyouter").height()-50)/2)))};f.fn.fancybox.getNumeric=function(i,j){return parseInt(f.curCSS(i.jquery?i[0]:i,j,true))||0};f.fn.fancybox.getPosition=function(i){var j=i.offset();j.top+=f.fn.fancybox.getNumeric(i,"paddingTop");j.top+=f.fn.fancybox.getNumeric(i,"borderTopWidth");j.left+=f.fn.fancybox.getNumeric(i,"paddingLeft");j.left+=f.fn.fancybox.getNumeric(i,"borderLeftWidth");return j};f.fn.fancybox.showIframe=function(){f(".fancyloading").hide();f("#fancyframe").show()};f.fn.fancybox.getViewport=function(){return[f(window).width(),f(window).height(),f(document).scrollLeft(),f(document).scrollTop()]};f.fn.fancybox.animateLoading=function(){if(!f("#fancyloading").is(":visible")){clearInterval(h);return}g=(g+1)%12};f.fn.fancybox.showLoading=function(){clearInterval(h);var i=f.fn.fancybox.getViewport();f("#fancyloading").css({left:((i[0]-40)/2+i[2]),top:((i[1]-40)/2+i[3])}).show();f("#fancyloading").bind("click",f.fn.fancybox.close);h=setInterval(f.fn.fancybox.animateLoading,66)};f.fn.fancybox.close=function(){c=true;f(b).unbind();f("#fancyoverlay").unbind();if(d.hideOnContentClick){f("#fancywrap").unbind()}f(".fancyloading, #fancyleft, #fancyright, #fancytitle").fadeOut(133);if(d.centerOnScroll){f(window).unbind("resize scroll")}__cleanup=function(){f("#fancyouter").hide();f("#fancyoverlay").fadeOut(133);if(d.centerOnScroll){f(window).unbind("resize scroll")}if(isIE6){f("embed, object, select").css("visibility","visible")}if(f.isFunction(d.callbackOnClose)){d.callbackOnClose()}c=false};if(f("#fancyouter").is(":visible")!==false){if(d.zoomSpeedOut>0&&d.itemArray[d.itemCurrent].orig!==undefined){var j=d.itemArray[d.itemCurrent].orig;var i=f.fn.fancybox.getPosition(j);var k={left:(i.left-18)+"px",top:(i.top-18)+"px",width:f(j).width(),height:f(j).height()};if(d.zoomOpacity){k.opacity="hide"}f("#fancyouter").stop(false,true).animate(k,d.zoomSpeedOut,d.easingOut,__cleanup)}else{f("#fancyouter").stop(false,true).fadeOut(99,__cleanup)}}else{__cleanup()}return false};f.fn.fancybox.build=function(){var i="";i+='<div id="fancyoverlay"></div>';i+='<div id="fancywrap">';i+='<div class="fancyloading" id="fancyloading"><div></div></div>';i+='<div id="fancyouter">';i+='<div id="fancyinner">';i+='<a href="javascript:;" id="fancyleft"><span class="fancyico" id="fancyleftico"></span></a><a href="javascript:;" id="fancyright"><span class="fancyico" id="fancyrightico"></span></a>';i+='<div id="fancycontent"></div>';i+="</div>";i+='<div id="fancytitle"></div>';i+="</div>";i+="</div>";f(i).appendTo("body");if(isIE6){f("#fancyinner").prepend('<iframe class="fancybigIframe" scrolling="no" frameborder="0"></iframe>')}};f.fn.fancybox.defaults={padding:10,imageScale:true,zoomOpacity:true,zoomSpeedIn:0,zoomSpeedOut:0,zoomSpeedChange:300,easingIn:"swing",easingOut:"swing",easingChange:"swing",frameWidth:425,frameHeight:355,overlayShow:true,overlayOpacity:0.3,hideOnContentClick:true,centerOnScroll:true,itemArray:[],callbackOnStart:null,callbackOnShow:null,callbackOnClose:null};f(document).ready(function(){f.fn.fancybox.build()})})(jQuery);function liteboxCallback(){jQuery(".flickrGallery li a").fancybox({zoomSpeedIn:333,zoomSpeedOut:333,zoomSpeedChange:133,easingIn:"easeOutQuart",easingOut:"easeInQuart",overlayShow:true,overlayOpacity:0.75})}(function(a){a.fn.quoteComment=function(b){a.fn.quoteComment.defaults={comment:"li.comment",comment_id:".comment-id",author:".comment-author",source:".comment-body",target:"#comment"};a.fn.appendVal=function(d){return this.each(function(){this.value+=d})};var c=a.extend({},a.fn.quoteComment.defaults,b);return this.each(function(){a(this).click(function(){$c=a(this).parents(c.comment).find(c.source);$author=a(this).parents(c.comment).find(c.author);$cid=a(this).parents(c.comment).find(c.comment_id).attr("href");a(c.target).appendVal('<blockquote>\n<a href="'+$cid+'">\n<strong><em>'+$author.html()+":</em></strong>\n</a>\n "+$c.html()+"</blockquote>");a(c.target).focus();return false})})}})(jQuery);(function(b){b.fn.superfish=function(k){var g=b.fn.superfish,j=g.c,f=b(['<span class="',j.arrowClass,'"> &#187;</span>'].join("")),i=function(){var c=b(this),l=d(c);clearTimeout(l.sfTimer);c.showSuperfishUl().siblings().hideSuperfishUl()},e=function(){var c=b(this),m=d(c),l=g.op;clearTimeout(m.sfTimer);m.sfTimer=setTimeout(function(){l.retainPath=(b.inArray(c[0],l.$path)>-1);c.hideSuperfishUl();if(l.$path.length&&c.parents(["li.",l.hoverClass].join("")).length<1){i.call(l.$path)}},l.delay)},d=function(c){var l=c.parents(["ul.",j.menuClass,":first"].join(""))[0];g.op=g.o[l.serial];return l},h=function(c){c.addClass(j.anchorClass).append(f.clone())};return this.each(function(){var c=this.serial=g.o.length;var m=b.extend({},g.defaults,k);m.$path=b("li."+m.pathClass,this).slice(0,m.pathLevels).each(function(){b(this).addClass([m.hoverClass,j.bcClass].join(" ")).filter("li:has(ul)").removeClass(m.pathClass)});g.o[c]=g.op=m;b("li:has(ul)",this)[(b.fn.hoverIntent&&!m.disableHI)?"hoverIntent":"hover"](i,e).each(function(){if(m.autoArrows){h(b(">a:first-child",this))}}).not("."+j.bcClass).hideSuperfishUl();var l=b("a",this);l.each(function(n){var o=l.eq(n).parents("li");l.eq(n).focus(function(){i.call(o)}).blur(function(){e.call(o)})});m.onInit.call(this)}).each(function(){var c=[j.menuClass];b(this).addClass(c.join(" "))})};var a=b.fn.superfish;a.o=[];a.op={};a.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"arrow"};a.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:333,speed:"normal",autoArrows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};b.fn.extend({hideSuperfishUl:function(){var e=a.op,d=(e.retainPath===true)?e.$path:"";e.retainPath=false;if(isIE){css1={marginTop:20}}else{css1={opacity:0,marginTop:20}}var c=b(["li.",e.hoverClass].join(""),this).add(this).not(d).removeClass(e.hoverClass).find(">ul").animate(css1,150,"swing",function(){b(this).css({display:"none"})});e.onHide.call(c);return this},showSuperfishUl:function(){var d=a.op,c=this.addClass(d.hoverClass).find(">ul:hidden").css("visibility","visible");d.onBeforeShow.call(c);if(isIE){css1={display:"block",marginTop:20};css2={marginTop:0}}else{css1={display:"block",opacity:0,marginTop:20};css2={opacity:1,marginTop:0}}c.css(css1).animate(css2,150,"swing",function(){d.onShow.call(c)});return this}})})(jQuery);jQuery(document).ready(function(){jQuery(".comment .avatar").pngfix();jQuery("h1.logo a img").pngfix();jQuery(".fadeThis, ul#footer-widgets li.widget li").append('<span class="hover"></span>').each(function(){var b=jQuery("> span.hover",this).css("opacity",0);jQuery(this).hover(function(){b.stop().fadeTo(333,1)},function(){b.stop().fadeTo(333,0)})});jQuery("#sidebar ul.menu li li a").mouseover(function(){jQuery(this).animate({marginLeft:"5px"},100)});jQuery("#sidebar ul.menu li li a").mouseout(function(){jQuery(this).animate({marginLeft:"0px"},100)});jQuery("a.toplink").click(function(){jQuery("html").animate({scrollTop:0},"slow")});jQuery("#nav").superfish({autoArrows:true});jQuery("a.quote").quoteComment({comment:"li.comment",comment_id:".comment-id",author:".comment-author",source:".comment-text",target:"#comment"});if(lightbox){jQuery("a[rel='lightbox'], a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png'], a[href$='.JPG'], a[href$='.JPEG'], a[href$='.GIF'], a[href$='.PNG']").fancybox({zoomSpeedIn:333,zoomSpeedOut:333,zoomSpeedChange:133,easingIn:"easeOutQuart",easingOut:"easeInQuart",overlayShow:true,overlayOpacity:0.75})}if(document.all&&!window.opera&&!window.XMLHttpRequest&&jQuery.browser.msie){var a=true}else{var a=false}jQuery.browser.msie6=a;if(!a){initTooltips({timeout:6000})}webshot(".with-tooltip a","tooltip");jQuery(".widget .titlewrap").each(function(){jQuery(this).prependTo(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)});jQuery("#nav").attr("role","navigation");jQuery("#main-content").attr("role","main");jQuery("#sidebar").attr("role","complementary");jQuery("#searchform").attr("role","search")});