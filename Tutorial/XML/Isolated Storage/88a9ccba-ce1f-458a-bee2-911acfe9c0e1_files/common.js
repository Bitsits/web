function ReadCookie(c,a){if(!a)a=";";if(document.cookie.length<1)return"";var b=document.cookie.indexOf(c+"=");if(b<0)return"";var d=document.cookie.indexOf(a,b);return unescape(document.cookie.substring(b+c.length+1,d<0?document.cookie.length:d))}function ReadCommunityInfo(e){var a,c=document.getElementsByName("CommunityInfo");if(!c||c.length<1)a="";else a=c[0].content;var b=a.indexOf(e+"=");if(b<0)return"";var d=a.indexOf(";",b);return unescape(a.substring(b+e.length+1,d<0?a.length:d))}function GetCurrentBrand(){return ReadCommunityInfo("B")}function GetCurrentLocale(){return ReadCommunityInfo("L")}function GetCurrentAppName(){return ReadCommunityInfo("A")}var eventImgs=[],eventImgIdx=0;function TrackEvent(i,c,d,e,g,b){var k=2147483647,m="_TRK_U_8934",j="http://c.microsoft.com/trans_pixel.aspx?TYPE=SSPV&GUID=1F4FC18C-F71E-47fb-8FC9-612F8EE59C61";if(!d)d=GetCurrentAppName();if(!e)e=GetCurrentBrand();var l="&r="+escape(window.location)+"&rnd="+Math.floor(Math.random()*k+1)+"&URI=",a="/eventtrack/?app="+d+"&event="+i+"&brand="+e;a+="&locale="+(g?g:GetCurrentLocale());if(b)a+="&userID="+b+"&signedIn=1";else{b=ReadCookie("muid","&");if(b)a+="&userID="+b+"&signedIn=1"}if(c&&typeof c=="object")for(var h in c)a+="&"+h+"="+c[h];var f=j+l+escape(a);if(document.images){eventImgs[eventImgIdx]=new Image;eventImgs[eventImgIdx].src=f;eventImgIdx++}else document.write('<img border="0" width="1" height="1" src="'+f+'"/>')}function IsNPUser(){return ReadCookie("npu","&")}function RedirectNPUser(a,c){if(!IsNPUser())return true;if(!a)a=window.location.href.toString();else a=a.toString();var b="/Profile/"+GetCurrentLocale()+"/Settings/?nonp=1&referrerurl="+encodeURIComponent(removeQueryString(a,"referrer"));if(c)b+="&cancelUrl="+encodeURIComponent(removeQueryString(removeQueryString(c.toString(),"referrer"),"nonp"));window.location=b;return false}function removeQueryString(a,c){var b=new RegExp("([?|&])"+c+"=.*?(&|$)","i");return a.match(b)?a.replace(b,"$1"):a}