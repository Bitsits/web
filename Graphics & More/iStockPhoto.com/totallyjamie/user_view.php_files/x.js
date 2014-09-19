
function xhrError(xhrReq){var mssg='XHR Error - Code '+xhrReq.status+' ';switch(xhrReq.status){case 301:mssg+='Content Moved';break;case 400:mssg+='Bad Request';break;case 401:mssg+='Unauthorized';break;case 403:mssg+='Forbidden';break;case 404:mssg+='Not Found';break;case 500:mssg+='Internal Server Error';break;case 503:mssg+='Service Unavailable';break;case 504:mssg+='Gateway Timeout';break;case 505:mssg+='HTTP Version Not Supported';break;}
mssg+="\n\nPlease clear your browser's cache,\nreload the page and try your request again.";alert(mssg);}
function PopupWindow(theURL,winName,features){window.open(theURL,winName,features);}
function bodyElement(){return(!window.opera&&document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;}
function getCookie(name){if(document.cookie.length>0){start=document.cookie.indexOf(name+"=")
if(start!=-1){start=start+name.length+1;end=document.cookie.indexOf(";",start);if(end==-1){end=document.cookie.length;}
return unescape(document.cookie.substring(start,end));}}
return'';}
function toggleCustomRadio(formEle,checkedEle){var radios=formEle.elements[checkedEle.name];for(var i=0;i<radios.length;i++){radios[i].checked=(radios[i].id==checkedEle.id?true:false);$(radios[i].id+"Label").className=(radios[i].checked?'radioon':'radiooff');}}
function positionPopup(parentEle,popupEle,relativeLeft,relativeTop){if(parentEle&&popupEle){if(parentEle.id=='SearchBarContainerAdvanced'){var left='15px';var top=relativeTop+'px';parentEle.style.left=left;parentEle.style.top=top;}else{if(parentEle.style.display=='none'){parentEle.style.display='block';var pos=Position.cumulativeOffset(parentEle);parentEle.style.display='none';}else{var pos=Position.cumulativeOffset(parentEle);}
var left=(pos[0]+relativeLeft)+"px";var top=(pos[1]+relativeTop)+"px";popupEle.style.left=left;popupEle.style.top=top;}
if($(popupEle.id+"IFrame")){var iFrame=$(popupEle.id+"IFrame");iFrame.style.left=left;iFrame.style.top=top;}}}
function buildPopupIFrame(popupEle,allBrowsers){if((navigator.appName=="Microsoft Internet Explorer"||allBrowsers)&&popupEle&&!$(popupEle.id+"IFrame")){var iFrame=document.createElement("iframe");iFrame.id=popupEle.id+"IFrame";iFrame.src="blank.html";iFrame.style.display="none";iFrame.style.position="absolute";iFrame.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';document.body.appendChild(iFrame);}}
function togglePopup(popupEle,newState,zIndex){if($(popupEle)){if(newState){newState=(newState=="block"?"block":"none");}else{newState=(popupEle.style.display=="block"?"none":"block");}
popupEle.style.display=newState;var popupIFrame=$(popupEle.id+"IFrame");if(popupIFrame){if(!popupIFrame.style.width){Element.clonePosition(popupIFrame,popupEle);if(zIndex)popupEle.style.zIndex=zIndex;popupIFrame.style.zIndex=popupEle.style.zIndex-1;}
popupIFrame.style.display=newState;}
if(popupEle.identify()==='SearchBarContainerAdvanced'&&newState==='none'){document.getElementsByTagName("body")[0].setStyle({overflow:'auto'});}}}
function fixSafariEncode(fixedString){try{fixedString=decodeURI(escape(fixedString));}
catch(err){}
return fixedString;}
document.observe("dom:loaded",function(){if($("ControlPanelToggle")&&!$("controlPanelLocation1")){$("ControlPanelToggle").observe("click",ControlPanel.lazyLoadControlPanel);}});var ControlPanel={lazyLoadControlPanel:function(){$("ControlPanelToggle").stopObserving("click");LazyLoad.loadJS("/js/ajax_controlpanel.js",function(){ControlPanelAjax.init();},"controlPanel:loaded");if($('SearchBarContainerAdvanced').visible()){$('SearchBarContainerBasic').show();togglePopup($('SearchBarContainerAdvanced'),'none');$('AdvancedSearchLoading').hide();}}};function uv_updateCreditPlan(userID,updateCP){if($("uv_defaultPlan")){var newVal=$F("uv_defaultPlan");if(updateCP&&$("CONTROL_SETTING_DEFAULT_CREDIT_TYPE")){$("CONTROL_SETTING_DEFAULT_CREDIT_TYPE").value=newVal;}
util_updateCreditPlan(userID,newVal);}}
function util_updateCreditPlan(userID,val){var URL="ajax_class_creator.php?ajax_action=save&ajax_class=controlpanel&setting=CONTROL_SETTING_DEFAULT_CREDIT_TYPE&value="+val+"&userID="+userID;var myAjax=new Ajax.Request(URL,{method:'get'});}
function getRealOffsetLeft(element){var offset=0;do{offset+=element['offsetLeft'];element=element.offsetParent;}while(element!=document.body&&element!=null);return offset;}
var LazyLoad={loadJS:function(url,callback,customEvt){var url=url.replace(/[^a-zA-Z0-9.\-_\/]/g,"");if(!url)return;if(navigator.userAgent.match(/MSIE 6.0/)){var llIE=new LazyLoadIE6(url,callback);llIE.load();}
else{if(url.indexOf('/static/')===-1){var script=new Element("script",{type:"text/javascript",src:istock.jsCacheURL+url});}else{var jsPcs=istock.jsCacheURL.split('/');var cacheSerial=(jsPcs[2])?jsPcs[2]:1234;url=url.replace('/js','/'+cacheSerial+'/js');var script=new Element("script",{type:"text/javascript",src:url});}
if(callback&&customEvt){document.stopObserving(customEvt);document.observe(customEvt,callback);}
document.body.appendChild(script);}},loadCSS:function(url){var url=url.replace(/[^a-zA-Z0-9.\-_\/]/g,"");if(!url)return;var head=$$("head")[0];if(url.indexOf('/static/')===-1){var css=new Element("link",{type:"text/css",rel:"stylesheet",href:istock.cssCacheURL+url});}else{var jsPcs=istock.jsCacheURL.split('/');var cacheSerial=(jsPcs[2])?jsPcs[2]:1234;url=url.replace('/css','/'+cacheSerial+'/css');var css=new Element("link",{type:"text/css",rel:"stylesheet",href:url});}
head.appendChild(css);}}
var LazyLoadIE6=Class.create();LazyLoadIE6.prototype={initialize:function(url,callback){this.maxTries=3;this.numTries=0;this.url=url.replace(/[^a-zA-Z0-9.\-_\/]/g,"");this.callback=callback;},load:function(){if(this.url.indexOf('/static/')===-1){var script=new Element("script",{type:"text/javascript",src:istock.jsCacheURL+this.url});}else{var jsPcs=istock.jsCacheURL.split('/');var cacheSerial=(jsPcs[2])?jsPcs[2]:1234;this.url=this.url.replace('/js','/'+cacheSerial+'/js');var script=new Element("script",{type:"text/javascript",src:this.url});}
script.onreadystatechange=function(){if(script.readyState==="loaded"||script.readyState==="complete"){try{this.callback();}catch(e){if(this.maxTries<=this.numTries){return;}
this.numTries++;this.load();}}}.bind(this);document.body.appendChild(script);}}
function enableCaptcha(){$$('#captchaImages img').each(function(id){new Draggable(id,{revert:'failure'});});Droppables.add('answerBox',{accept:'e_draggable',hoverclass:'hover',onDrop:function(element){$('captchaAnswer').value=element.id;$('Plan').value='PlaceOrder';$('StorePaymentInfoForm').submit();}});}
ATTRIBUTE_NODE=2;CDATA_SECTION_NODE=4;COMMENT_NODE=8;DOCUMENT_FRAGMENT_NODE=11;DOCUMENT_NODE=9;DOCUMENT_TYPE_NODE=10;ELEMENT_NODE=1;ENTITY_NODE=6;ENTITY_REFERENCE_NODE=5;NOTATION_NODE=12;PROCESSING_INSTRUCTION_NODE=7;TEXT_NODE=3;UNINITIALIZED=0;LOADING=1;LOADED=2;INTERACTIVE=3;COMPLETE=4;OK=200;NOT_FOUND=404;DOM_VERSION="0.1.2";function encode(s){var l=s.length;var cooked="";for(var i=0;i<l;i++){var c=s.charAt(i);switch(c){case'\'':cooked+="&apos;";break;case'<':cooked+="&lt;";break;case'>':cooked+="&gt;";break;case'&':cooked+="&amp;";break;case"\"":cooked+="&quot;";break;default:if(c>=128){cooked+="&#"+(s.charCodeAt(i))+";";}
break;}}
return cooked;}
function hideAndSeek(target){for(var i=0;i<arguments.length;i++){target=arguments[i];if(isArray(target)){var a=true;for(var i=0;i<target.length;i++){a=a&&hideAndSeek(target[i]);}
return a;}else{var t=get(target);if(!t){return false;}
if(t.style.display==""){t.style.display="none";}else{t.style.display="";}
return true;}}}
function show(target){var t=get(target);if(!t){return false;}
t.style.display="";return true;}
function hide(target){var t=get(target);if(!t){return false;}
t.style.display="none";return true;}
function hideChildren(target,hide){display='';if(arguments.length==1||arguments[1]==true){display='none';}
var t=get(target);if(!t){return false;}
var children=t.childNodes;for(var i=0;i<children.length;i++){if(children[i].nodeType==ELEMENT_NODE){children[i].style.display=display;}}
return true;}
function setText(id,words){var e=get(id);if(!e){return false;}
if(e.nodeType==TEXT_NODE){e.nodeValue=words;}else{while(e.childNodes.length>0){e.removeChild(e.childNodes[0]);}
e.appendChild(text(words));}
return true;}
function inArray(array,element,func){if(!func){func=_argument;}
var l=array.length;for(var i=0;i<l;i++){if(func(array[i])==func(element)){return true;}}
return false;}
function _argument(r){return r;}
function getNextElement(id,name){return nextElement(id,name);}
function nextElement(id,name){var t=get(id);if(!t){return false;}
while(t=t.nextSibling){if(t.nodeType==ELEMENT_NODE){if(!name){return t;}else if(name.toLowerCase()==t.nodeName.toLowerCase()){return t;}}}
return false;}
function reverseChildren(t){var parent=get(t);if(!parent){return false;}
var children=parent.childNodes;var nodes=Array();var count=children.length;for(var i=0;i<count;i++){nodes[i]=children.item(0);parent.removeChild(children[0]);}
for(var i=nodes.length-1;i>=0;i--){parent.appendChild(nodes[i]);}
return true;}
function duplicate(tag,zid){var e=get(tag);if(!e){return false;}
if(e.nodeType==TEXT_NODE){var d=text(e.nodeValue);return d;}else{var d=document.createElement(e.tagName);if(e.attributes.length){attrs=e.attributes;for(var i=0;i<attrs.length;i++){var av=e.getAttribute(attrs[i].nodeName);var a=attrs[i].nodeName;if(a=='id'&&arguments.length==2){var r=new RegExp(":i:","g");av=av.replace(r,zid);}
d.setAttribute(a,av);}}
if(e.hasChildNodes()){var count=e.childNodes.length;for(var i=0;i<count;i++){if(arguments.length==2){var d2=duplicate(e.childNodes[i],zid);}else{var d2=duplicate(e.childNodes[i]);}
d.appendChild(d2);}}}
return d;}
function disable(element,enabled){if(arguments.length==1){enabled=false;}
enable(element,enabled);return true;}
function enable(element,enabled){if(arguments.length==1){enabled=true;}
var e=get(element);if(!e){return false;}
var name=e.tagName.toLowerCase();if(name=="form"){var tags=getByTagName(e,"fieldset");if(tags){for(var i=0;i<tags.length;i++){enable(tags[i],enabled);}}
var tags=getByTagName(e,["input","select","textarea","option"]);if(tags){for(var i=0;i<tags.length;i++){disable(tags[i],enabled);}}}else if(name=="fieldset"){var tags=getByTagName(e,["input","select","textarea","option"]);if(tags){for(var i=0;i<tags.length;i++){enable(tags[i],enabled);}}}else if(name=="input"||name=="select"||name=="textarea"||name=="option"){if(enabled){e.removeAttribute("disabled");}else{e.setAttribute("disabled","disabled");}}
return true;}
function get(id){if(typeof id=="string"){return document.getElementById(id);}else{return id;}}
function getNodeClass(obj){var result=false;if(obj.getAttributeNode("class")!=null){result=obj.getAttributeNode("class").value;}
return result;}
function getByClass(parent,elementName,className){var tag=false;if(arguments.length==1){tag=document;elementName='*';className=arguments[0];}else if(arguments.length==2){tag=document;className=elementName;elementName=parent;}else{tag=get(parent);}
if(!tag){return false;}
var nodes=new Array();var elements=getByTagName(tag,elementName);if(!elements){return false;}
for(var i=0;i<elements.length;i++){var c=getNodeClass(elements[i]);if(c&&inArray(c.split(' '),className)){nodes[nodes.length]=elements[i];}}
return nodes;}
function text(chars){return document.createTextNode(chars);}
function add(parent,child){var p=get(parent);p.appendChild(node(child));}
function snip(child){var c=get(child);if(c){var p=c.parentNode;if(!p){return false;}
p.removeChild(c);}
return c;}
function trimchildren(parent){var p=get(parent);if(!p){return false;}
while(p.hasChildNodes()){var t=p.firstChild;p.removeChild(t);}
return true;}
function getParentNamed(tag,name,level){if(!level){level=1;}
var n=get(tag);if(!n){return false;}
var parent;var count=0;while(parent=n.parentNode){if(parent.nodeName.toLowerCase()==name.toLowerCase()){count++;if(count==level){return parent;}}
n=parent;}
return false;}
function getFirstChildNamed(tag,name){var parent=get(tag);var nodes=getByTagName(parent,name);if(nodes&&nodes.length>0){return nodes[0];}
return false;}
function getByTagName(tag,name){if(arguments.length==1){return document.getElementsByTagName(tag);}else{var t=get(tag);if(!t){return false;}
if(typeof name=="string"){name=new Array(name);}
var tags=new Array();for(var i=0;i<name.length;i++){var result=t.getElementsByTagName(name[i]);for(var j=0;j<result.length;j++){if(result[j]){tags=tags.concat(result[j]);}}}
if(!tags.length){tags=false;}
return tags;}}
function getNodeValue(node){var n=get(node);if(!n){return false;}
if(n.nodeType==TEXT_NODE){return n.nodeValue;}else if(n.nodeType==ELEMENT_NODE&&n.childNodes.length>0){var text='';for(var i=0;i<n.childNodes.length;i++){text+=getNodeValue(n.childNodes[i]);}
return text;}else{return'';}}
function selectAll(select,b){var s=get(select);if(b==null){b=true;}
var options=getByTagName(s,"option");for(var i=0;i<options.length;i++){options[i].selected=b;}}
function countSelected(select){var s=get(select);var count=0;var options=getByTagName(s,"option");if(!options){return 0;}
for(var i=0;i<options.length;i++){if(options[i].selected)count++;}
return count;}
function getSelectedValue(select){var s=get(select);if(!s){return false;}
var count=0;var selected=new Array();var options=getByTagName(s,"option");if(!options){return false;}
var j=0;for(var i=0;i<options.length;i++){if(options[i].selected){selected[j]=options[i].value;j++;}}
if(j>0){return selected;}else{return false;}}
function getSelectedText(select){var s=get(select);if(!s){return false;}
var count=0;var selected=new Array();var options=getByTagName(s,"option");if(!options){return false;}
var j=0;for(var i=0;i<options.length;i++){if(options[i].selected){selected[options[i].value]=options[i].text;j++;}}
if(j>0){return selected;}else{return false;}}
function getSelected(select){return getSelectedText(select);}
function removeOption(select,value){return removeOptionByValue(select,value);}
function clearOptions(select){var s=get(select);if(!s){return false;}
var options=getByTagName(s,"option");for(var i=0;i<s.childNodes.length;i=0){s.removeChild(s.lastChild);}
return true;}
function removeOptionByText(select,text){var s=get(select);if(!s){return false;}
var flag=false;var options=getByTagName(s,"option");for(var i=0;i<options.length;){if(getNodeValue(options[i])==text){s.removeChild(options[i]);flag=true;}else{i++;}}
return flag;}
function removeOptionByValue(select,value){var s=get(select);if(!s){return false;}
var options=getByTagName(s,"option");for(var i=0;i<options.length;i++){if(options[i].value==value){s.removeChild(options[i]);return true;}}
return false;}
function _valueSort(a,b){if(a.value<b.value){return-1;}else if(a.value>b.value){return 1;}else{return 0;}}
function _captionSort(a,b){if(a.text<b.text){return-1;}else if(a.text>b.text){return 1;}else{return 0;}}
function sortOptions(select,f){if(f==null){f=_valueSort;}
var s=get(select);if(!s){return false;}
var options=select.options;if(!options){return false;}
var holder=Array();for(var i=0;i<options.length;i++){holder[i]=options[i];s.removeChild(options[i]);}
holder.sort(f);for(var i=0;i<holder.length;i++){s.appendChild(holder[i]);}
return true;}
function selectOption(s,value){if(arguments.length==1){value=0;}
var select=get(s);if(!select){return false;}
var options=select.options;if(!options){return false;}
for(var i=0;i<options.length;i++){if(options[i].value==value){options[i].selected=true;return true;}}
return false;}
function _getBoxValues(type,f,name){var t=get(f);if(!t){return false;}
var inputs=getByTagName(t,"input");var values=new Array();for(var i=0;i<inputs.length;i++){if(inputs[i].type==type&&inputs[i].checked){if(name){if(inputs[i].name.toUpperCase()==name.toUpperCase()){values.push(inputs[i].value);}}else{values.push(inputs[i].value);}}}
if(values.length==0){return false;}else{return values;}}
function getCheckValues(f,name){return _getBoxValues("checkbox",f,name)}
function getLabelText(id){var input=get(id);if(!input){return false;}
var label;if(id.nodeType==ELEMENT_NODE&&id.nodeName.toLowerCase()=="label"){label=input;}else{label=getParentNamed(input,"label");}
if(!label){return false;}
return getNodeText(label);}
function getNodeText(n){var node=get(n);if(!node){return false;}
var string='';if(node.nodeType==ELEMENT_NODE){var children=node.childNodes;for(var i=0;i<children.length;i++){var t=getNodeText(children[i],trim);string+=t?t:'';}}else if(node.nodeType==TEXT_NODE){string+=node.nodeValue;}else{return'';}
return string;}
function getRadioValue(f,name){var radios=_getBoxValues("radio",f,name);if(radios.length){return radios[0];}else{return false;}}
function getRadioText(f,name){var t=get(f);if(!t){return false;}
var inputs=getByTagName(t,"input");for(var i=0;i<inputs.length;i++){if(inputs[i].type=="radio"&&inputs[i].checked){if(name){if(inputs[i].name.toUpperCase()==name.toUpperCase()){var label=getParentNamed(inputs[i],"label");return getNodeValue(label);}}else{var label=getParentNamed(inputs[i],"label");return getNodeValue(label);}}}
return false;}
function checkBox(f,name,b,value){var t=get(f);if(!t){return false;}
if(arguments.length<3){b=true;}
var inputs=getByTagName(t,"input");for(var i=0;i<inputs.length;i++){var inputType=inputs[i].type.toUpperCase();if(inputType=="RADIO"||inputType=="CHECKBOX"){var inputName=inputs[i].name;if(name.toUpperCase()==inputName.toUpperCase()){if(arguments.length<4||inputs[i].value==value){inputs[i].checked=b;return true;}}}}
return false;}
function a(href,title,c,id,s,onclick,child){var a=_createElement("a",c,id,s,child);a.setAttribute("href",href);a.setAttribute("title",title);if(onclick){a.setAttribute("onclick",onclick);}
return a;}
function img(src,alt,c,id,s,width,height){var img=_createElement("img",c,id,s);img.setAttribute("src",arguments[0]);img.setAttribute("alt",arguments[1]);if(width!=null){img.setAttribute("width",width);}
if(height!=null){img.setAttribute("height",height);}
return img;}
function p(t,c,id,s){return _createElement("p",c,id,s,t);}
function div(c,id,s,child){return _createElement("div",c,id,s,child);}
function span(child,c,id,s){return _createElement("span",c,id,s,child);}
function hr(c,id,s){return _createElement("hr",c,id,s);}
function br(){return document.createElement("br");}
function strong(t,c,id,s){var e=_createElement("strong",c,id,s);if(t!=null){e.appendChild(node(t));}
return e;}
function em(t,c,id,s){var e=_createElement("em",c,id,s);if(t!=null){e.appendChild(node(t));}
return e;}
function pre(t,c,id,s){var e=_createElement("pre",c,id,s);if(t!=null){e.appendChild(node(t));}}
function code(t,c,id,s){var e=_createElement("code",c,id,s);if(t!=null){e.appendChild(node(t));}}
function dfn(t,c,id,s){var e=_createElement("dfn",c,id,s);if(t!=null){e.appendChild(node(t));}}
function cite(t,c,id,s){var e=_createElement("cite",c,id,s);if(t!=null){e.appendChild(node(t));}}
function del(t,cite,datetime,c,id,s){var e=_createElement("del",c,id,s);if(t!=null){e.appendChild(node(t));}}
function ins(t,cite,datetime,c,id,s){var e=_createElement("cite",c,id,s);if(t!=null){e.appendChild(node(t));}}
function blockquote(t,c,id,s){var e=_createElement("quote",c,id,s);if(t!=null){e.appendChild(node(t));}}
function address(t,c,id,s){var e=_createElement("address",c,id,s);if(t!=null){e.appendChild(node(t));}}
function acronym(t,lang,c,id,s){var e=_createElement("address",c,id,s);if(t!=null){e.appendChild(node(t));}
if(lang!=null){e.setAttribute("lang",lang);}}
function abbr(t,lang,c,id,s){var e=_createElement("abbr",c,id,s);if(t!=null){e.appendChild(node(t));}
if(lang!=null){e.setAttribute("lang",lang);}}
function checkbox(name,value,checked,onclick,c,id,s){var c=_createElement("input",c,id,s);c.setAttribute("type","checkbox");c.setAttribute("name",name);if(onclick!=null){c.setAttribute("onclick",onclick);}
if(value!=null){c.setAttribute("value",value);}
if(checked!=null&&checked){c.setAttribute("checked","checked");}
return c;}
function radio(name,value,checked,onclick,c,id,s){var c=_createElement("input",c,id,s);c.setAttribute("type","radio");c.setAttribute("value",value);c.setAttribute("name",name);if(onclick!=null){c.setAttribute("onclick",onclick);}
if(checked!=null&&checked){c.setAttribute("checked","");}
return c;}
function label(t,input,c,id,s){var l=_createElement("label",arguments[2],arguments[3],arguments[4]);l.appendChild(node(t));l.appendChild(node(input));return l;}
function select(c,id,s,onchange,size,multiple){var s=_createElement("select",c,id,s);if(size!=null){s.setAttribute("size",size);}
if(multiple){s.setAttribute("multiple","multiple");}
if(onchange!=null){s.setAttribute("onchange",onchange);}
return s;}
function button(name,value,onclick,c,id,s){var b=_createElement("input",c,id,s);b.setAttribute("type","button");b.setAttribute("name",name);b.setAttribute("value",value);if(onclick!=null){b.setAttribute("onclick",onclick);}
return b;}
function reset(name,value,onclick,c,id,s){var b=_createElement("input",c,id,s);b.setAttribute("type","reset");b.setAttribute("name",name);b.setAttribute("value",value);if(onclick!=null){b.setAttribute("onclick",onclick);}
return b;}
function submit(name,value,onclick,c,id,s){var b=_createElement("input",c,id,s);b.setAttribute("type","submit");b.setAttribute("name",name);b.setAttribute("value",value);if(onclick!=null){b.setAttribute("onclick",onclick);}
return b;}
function option(value,name){var o=_createElement("option");o.appendChild(node(name));o.setAttribute("value",value);return o;}
function fileInput(name,c,id,s){var f=_createElement("input",c,id,s);f.setAttribute("type","file");return f;}
function password(name,value,c,id,s){var p=_createElement("input",c,id,s);p.setAttribute("type","password");if(value!=null){p.setAttribute("value",value);}
return p;}
function hiddenInput(name,value,id){var e=_createElement("input");e.setAttribute("name",name);e.setAttribute("type","hidden");if(value!=null){e.setAttribute("value",value);}
if(id){e.setAttribute("id",id);}
return e;}
function textInput(name,value,maxlength,size,onchange,id){var t=_createElement("input");t.setAttribute("name",name);t.setAttribute("type","text");t.setAttribute("value",(value!=null?value:''));if(maxlength){t.setAttribute("maxlength",maxlength);}
if(size){t.setAttribute("size",size);}
if(onchange){t.setAttribute("onchange",onchange);}
if(id){t.setAttribute("id",id);}
return t;}
function textarea(name,value,rows,cols,c,id,s){var t=_createElement("textarea",c,id,s);t.appendChild(node(value));t.setAttribute("rows",rows);t.setAttribute("cols",cols);return t;}
function table(c,id,s,spacing){var t=_createElement("table",c,id,s);if(spacing!=null){t.setAttribute("cellspacing",spacing);}
return t;}
function tbody(c,id,s){return _createElement("tbody",c,id,s);}
function thead(c,id,s){return _createElement("thead",c,id,s);}
function tfoot(c,id,s){return _createElement("tfoot",c,id,s);}
function tr(c,id,s){return _createElement("tr",c,id,s);}
function td(c,id,s,t){var e=_createElement("td",c,id,s);if(t!=null){e.appendChild(node(t));}
return e;}
function th(c,id,s,t){var e=_createElement("th",c,id,s);if(t!=null){e.appendChild(node(t));}
return e;}
function ol(c,id,s,start){var e=_createElement("ol",c,id,s);if(start!=null){e.setAttribute("start",start);}
return e;}
function dl(c,id,s){var e=_createElement("dl",c,id,s);}
function ul(c,id,s){var e=_createElement("ul",c,id,s);return e;}
function li(child,c,id,s){var l=_createElement("li",c,id,s);l.appendChild(node(child));return l;}
function dt(child,c,id,s){var l=_createElement("dt",c,id,s);l.appendChild(node(child));return l;}
function dd(child,c,id,s){var l=_createElement("dd",c,id,s);l.appendChild(node(child));return l;}
function node(arg){if(typeof(arg)=="string"){return document.createTextNode(arg);}else if(typeof(arg)=="number"){return document.createTextNode(""+arg);}else{return arg;}}
function _createElement(type,c,id,s,child){var e=document.createElement(type);if(arguments[1]!=null){e.setAttribute("class",c);}
if(arguments[2]!=null){e.setAttribute("id",id);}
if(arguments[3]!=null){e.setAttribute("style",s);}
if(arguments[4]!=null){e.appendChild(node(child));}
return e;}
function checkAllBoxes(f,b,name){var form=get(f);if(!form){return false;}
if(arguments.length==1){b=true;name=null;}else if(arguments.length==2){name==null;}
var count=0;var children=getByTagName(form,"input");for(var i=0;i<children.length;i++){if(children[i].type=="checkbox"){if(name){if(children[i].name==name){children[i].checked=b;count++;}}else{children[i].checked=b;count++;}}}
return count;}
function countCheckedBoxes(f,name){var form=get(f);if(!form){return false;}
var count=0;var children=getByTagName(form,"input");for(var i=0;i<children.length;i++){if(children[i].type=="checkbox"&&children[i].checked){if(name){if(children[i].name==name){count++;}}else{count++;}}}
return count;}
function getInputValues(f,name){var form=get(f);if(!form){return false;}
var boxes=new Array();var children=getByTagName(form,"input");for(var i=0;i<children.length;i++){if(name){if(children[i].name==name){boxes.push(children[i].value);}}else{boxes.push(children[i].value);}}
return boxes;}
function getCheckedBoxValues(f,name){var form=get(f);if(!form){return false;}
var boxes=new Array();var children=getByTagName(form,"input");for(var i=0;i<children.length;i++){if(children[i].type=="checkbox"&&children[i].checked){if(name){if(children[i].name==name){boxes.push(children[i].value);}}else{boxes.push(children[i].value);}}}
return boxes;}
function isAlien(a){return isObject(a)&&typeof a.constructor!='function';}
function isArray(obj){return(typeof(obj.length)=="undefined")?false:true;}
function isBoolean(a){return typeof a=='boolean';}
function isEmpty(o){var i,v;if(isObject(o)){for(i in o){v=o[i];if(isUndefined(v)&&isFunction(v)){return false;}}}
return true;}
function isFunction(a){return typeof a=='function';}
function isNull(a){return typeof a=='object'&&!a;}
function isNumber(a){return typeof a=='number'&&isFinite(a);}
function isObject(a){return(a&&typeof a=='object')||isFunction(a);}
function isString(a){return typeof a=='string';}
function isUndefined(a){return typeof a=='undefined';}
ajaxWin={contents:'',json:[],loaded:false,show:function(json){ajaxWin.json=json;ajaxWin.buildContents();if(this.loaded){ajaxWin.activateWindow();}else{Event.observe(window,'load',ajaxWin.activateWindow);}},buildContents:function(){json=ajaxWin.json;ajaxWin.contents='<a onclick="'+(json.cnclFunc?json.cnclFunc:'')+' ajaxWin.cancelWindow(); return false" class="close_btn" title="'+(json.cnclText?json.cnclText:'Cancel')+'" ></a>';ajaxWin.contents+='<div class="hdr" id="ajaxWinHdr">';if(json.title)ajaxWin.contents+=json.title;ajaxWin.contents+='</div>';ajaxWin.contents+='<div id="ajaxWinBody">';if(json.hdrTxt||json.hdrIcon){ajaxWin.contents+='<table class="ndnt">';ajaxWin.contents+='<tr>';if(json.hdrIcon){ajaxWin.contents+='<td class="m"><img src="'+json.hdrIcon+'" alt="" style="padding-right:6px" /></td>';}
ajaxWin.contents+='<td class="m"><strong class="'+json.hdrTxtClass+'">'+json.hdrTxt+'</strong></td>';ajaxWin.contents+='</tr>';ajaxWin.contents+='</table>';}
ajaxWin.contents+=json.cntnt;ajaxWin.contents+='</div>';if(json.footer){ajaxWin.contents+='<div class="clear"></div>';ajaxWin.contents+='<div id="ajaxWinFtr" class="ftr">';ajaxWin.contents+=json.footer;ajaxWin.contents+='</div>';}},activateWindow:function(){json=ajaxWin.json;if(!$('ajaxWin')){new Insertion.After('toolbar','<div id="ajaxWinBG" style="display:none;" ></div>');new Insertion.After('toolbar','<div id="ajaxWin" class="dropshadow" style="display:none;" ><div id = "ajaxWinWrapper">'+ajaxWin.contents+'</div></div>');}else{$('ajaxWin').hide();$('ajaxWinWrapper').update(ajaxWin.contents);}
if(typeof(json.wdth)!='undefined'){$('ajaxWin').style.width=json.wdth+10+'px';}
w=$('ajaxWin').getWidth();h=$('ajaxWin').getHeight();viewportDims=document.viewport.getDimensions();scrollOffsets=document.viewport.getScrollOffsets();if(Prototype.Browser.IE){$('ajaxWinBG').style.width=viewportDims['width']+24+'px';$('ajaxWinBG').style.height=viewportDims['height']+'px';}
$('ajaxWin').style.top=Math.max(0,parseInt((viewportDims['height']/2)-(h/2)+scrollOffsets['top']))+'px';$('ajaxWin').style.left=Math.max(0,parseInt((viewportDims['width']/2)-(w/2)+scrollOffsets['left']))+'px';$('ajaxWinBG').show();$('ajaxWin').show();document.getElementsByTagName("body")[0].setStyle({overflow:'hidden'});draggable=new Draggable('ajaxWin',{handle:'ajaxWinHdr'});if(draggable)$('ajaxWinHdr').setStyle('cursor:move');Event.observe(document,'keypress',function(e){if(e.keyCode==27)ajaxWin.cancelWindow();});document.fire('ajax_widget_window:open');},cancelWindow:function(){if($('ajaxWin'))$('ajaxWin').remove();if($('ajaxWinBG'))$('ajaxWinBG').remove();document.getElementsByTagName("body")[0].setStyle({overflow:'auto'});document.fire('ajax_widget_window:closed');Event.stopObserving(document,'keypress');}}
Event.observe(window,'load',function(){ajaxWin.loaded=true;});try{document.fire('ajax_widget_window:loaded');}catch(e){}
document.observe("dom:loaded",function(){if(window.ajaxWin)ajaxWin.loaded=true;Event.observe(document,'click',cntrlr.obsrv);Event.observe(document,'mouseover',cntrlr.obsrv);Event.observe(document,'mouseout',cntrlr.obsrv);Ajax.Responders.register({onCreate:function(objRequest,transport){objRequest.options.on401=function(){LazyLoad.loadJS("/js/memberName.js",function(){memberName.loadDialogBox()},"memberName:loaded");};}});});cntrlr={evt:'',elm:'',id:'',clss:'',debug:0,positioned:[],mX:0,mY:0,obsrv:function(e){var classes=$w(e.element().className);if(classes[0]&&classes[0].startsWith('e_')){cntrlr.clss=classes[0];cntrlr.setNfo(e);switch(cntrlr.clss){case'e_toggle3':if(e.type=='click'){e.stop();if(cntrlr.elm.tagName=='IMG'){cntrlr.elm=cntrlr.elm.up();cntrlr.id=$(cntrlr.elm).identify();}
cntrlr.toggleNextDiv();}
break;case'e_toggle3':if(e.type=='click'){e.stop();if(cntrlr.elm.tagName=='IMG'){cntrlr.elm=cntrlr.elm.up();cntrlr.id=$(cntrlr.elm).identify();}
cntrlr.toggleNextDiv();}
break;case'e_dropdown':if(cntrlr.id=='languageSelector'){if(e.type=='click'){e.stop();cntrlr.toggleDisplayDrpdownIframe(1);}}else{if(e.type=='mouseover')cntrlr.toggleDisplayDrpdownIframe(1);if(e.type=='mouseout')cntrlr.toggleDisplayDrpdownIframe(0);}
break;case'e_loupe':if(e.type=='mouseover'&&window.showLoupe)showLoupe();else if(e.type=='mouseout'&&window.hideLoupe)hideLoupe();break;case'e_lbAdd':case'e_lbDel':case'e_lbAddAll':if(e.type=='click'){e.stop();if(cntrlr.clss=='e_lbAdd'&&window.lbox)lbox.init('add');else if(cntrlr.clss=='e_lbDel'&&window.lbox)lbox.init('remove');else if(cntrlr.clss=='e_lbAddAll'&&window.lbox)lbox.init('addAll');}
break;case'e_pricePoint':if(e.type=='click'){e.stop();if(window.ajaxPricePoint){ajaxPricePoint.clicked(e.element());}}
break;case'e_popupTitle':if(e.type=='mouseover'&&window.popupTitle)popupTitle.displayPopUp(cntrlr.mX,cntrlr.mY,cntrlr.elm);if(e.type=='mouseout'&&window.popupTitle)popupTitle.hidePopUp(cntrlr.elm);break;case'e_popupTitleAlwaysShow':if(e.type=='mouseover'&&window.popupTitle)popupTitle.displayPopUp(cntrlr.mX,cntrlr.mY,cntrlr.elm);if(e.type=='mouseout'&&window.popupTitle)popupTitle.hidePopUp(cntrlr.elm);break;case'e_keywordsCopySpace':if(e.type=='click'){if(keywordsCopySpace.keywordsCSObj){if((keywordsCopySpace.keywordsCSlist.indexOf(cntrlr.id)!=-1)&&(cntrlr.id.indexOf('ajax_cs_')!=-1)){keywordsCopySpace.changebox(cntrlr.id);}}}
break;case'e_payoutcsv':if(e.type=='click'){$$('.err').each(function(element){element.removeClassName('err');})
var csvFileError=false;if($F('payoutProgram')==""){$('lblpayoutProgram').addClassName('err');csvFileError=true;}
if(!$('singleimage').checked&&!$('subscription').checked){$('lblfileType').addClassName('err');csvFileError=true;}
if($F('partnerProgramFile')==""){$('lblcsvFile').addClassName('err');csvFileError=true;}
if(csvFileError){e.stop();}}
break;case'e_punctumVote':if(e.type=='click'){e.stop();if(window.punctum){e.stop();punctum.vote();}}
break;case'e_punctumCastVote':if(e.type=='click'){e.stop();if(window.punctum){e.stop();punctum.castVote();}}
break;case'e_ajaxWinClose':if(e.type=='click'){e.stop();if(window.ajaxWin){ajaxWin.cancelWindow();}}
break;case'e_ajaxWinCntxtlClose':if(e.type=='click'){e.stop();if(window.ajaxWinCntxtl){ajaxWinCntxtl.cancelWindow();}}
break;case'e_QuickBuy_Init':if(e.type=='click'){cntrlr.initQuickBuy();}
break;case'e_Quicksignup_CreateMembername':if(e.type=='click'){if(typeof this.membernameChanged=='undefined'){this.membernameChanged=false;}
e.stop();if(!this.membernameChanged){LazyLoad.loadJS("/js/memberName.js",function(){memberName.loadDialogBox();memberName.cancelRedirect=true;document.observe(memberName.successEventName,function(e){this.membernameChanged=true;document.observe(memberName.closeWindowEventName,function(e){document.fire('controller:createMembernameSavedClosed');});});},"memberName:loaded");}else{document.fire('controller:createMembernameAlreadySaved');}}
break;case'e_Indemnification':if(e.type=='click'){e.stop();if(window.IndemnificationAjax){IndemnificationAjax.indemnificationAJAX();}}
break;case'e_userStats':if(e.type=='click'){parentElement=cntrlr.elm.up().name;optionValue=cntrlr.elm.value;targetUrl=window.location.href;if(targetUrl.indexOf(parentElement)>0){var displayRegex=new RegExp(parentElement+'=([A-Za-z]*)');targetUrl=targetUrl.replace(displayRegex,parentElement+'='+optionValue);}else{if(targetUrl.indexOf('?')>0){targetUrl+='&';}else{targetUrl+='?';}
targetUrl+=parentElement+'='+optionValue;}
window.location=targetUrl;}
break;}}},initQuickBuy:function(){var qbi={elFile:$$('td.downloadTableFirstChild.pricingRowHighlighted'),elId:null,extendedLicensesSelected:false,fileId:null,fileTypeId:null,aExtLicenses:[],elBoxes:$$("input[name='el[]']"),i:0,ajaxObj:null},qb={abstractFileId:null,concreteTypeId:null,aExtLicenses:[]},qb_str='';if(qbi.elFile.length<=0){qbi.elFile=$$('td.downloadTableFirstChildAudio.pricingRowHighlighted');}
if(qbi.elFile.length>0){qbi.elFile=$(qbi.elFile[0]);qbi.elId=qbi.elFile.identify();qb.abstractFileId=parseInt(qbi.elId.substring(qbi.elId.indexOf('_')+1,qbi.elId.indexOf('~')),10);if(qbi.elId.indexOf('~_')>=0){qb.concreteTypeId=parseInt(qbi.elId.substring(qbi.elId.indexOf('~_')+2,qbi.elId.indexOf('~_')+4),10);}else{qb.concreteTypeId=parseInt(qbi.elId.substring(qbi.elId.lastIndexOf('_')+1),10);}
if($('license_el_'+qb.abstractFileId).checked){for(qbi.i=0;qbi.i<qbi.elBoxes.length;qbi.i+=1){if(qbi.elBoxes[qbi.i].checked){qb.aExtLicenses.push(parseInt($F(qbi.elBoxes[qbi.i]),10));}}}
qb_str=Object.toJSON(qb);qbi.ajaxObj=new Ajax.Request('/cart/basket',{method:'post',parameters:'data='+qb_str,onComplete:function(re){controller='login';if(!window.quickSignupIframeHandler){LazyLoad.loadCSS('/static/css/quicksignup.css');LazyLoad.loadJS("/static/js/quicksignup-bundle.js",function(){quickSignupIframeHandler.loadWindow(controller);},"quickSignUp:loaded");}else{quickSignupIframeHandler.loadWindow(controller);document.fire('quickSignUp:loaded');}}});}},setNfo:function(e){cntrlr.mX=Event.pointerX(e);cntrlr.mY=Event.pointerY(e);cntrlr.elm=e.element();cntrlr.evt=e.type;cntrlr.id=$(cntrlr.elm).identify();if(cntrlr.debug&&window.console){console.log('EVT:'+cntrlr.evt+' - ID:'+cntrlr.id+' - CLASS: '+cntrlr.clss+' - ELM:'+cntrlr.elm);}},toggleDisplay:function(parnt,chldn){var prntElm=$(cntrlr.elm).up(parnt);prntElm.down(chldn).toggle();prntElm.down(chldn).next(chldn).toggle();},toggleDisplayNested:function(parnt,chldn){var childElm=$(cntrlr.elm).up(chldn);var prntElm=childElm.up(parnt);prntElm.down(chldn).toggle();prntElm.down(chldn).next(chldn).toggle();},toggleNextDiv:function(){var trgtImg=$(cntrlr.elm).down('img');var trgtDiv=$(cntrlr.elm).next('div');try{$(trgtImg).toggleClassName('ico_more').toggleClassName('ico_less');Effect.toggle(trgtDiv,'blind',{duration:.3});}catch(e){return;}},toggleDisplayDrpdownIframe:function(toggle){var dropdownID=cntrlr.id+"Dropdown";var iFrameID=cntrlr.id+"Iframe";var isLanguageSelector=(cntrlr.id=='languageSelector')?true:false;if(!$(dropdownID))return;if(toggle&&cntrlr.positioned&&!cntrlr.positioned[cntrlr.id]){if(!$(iFrameID))$('wrapper').insert({bottom:'<iframe id="'+iFrameID+'" style="display:none; z-index:5000; position:absolute; border:0; background:#fff"></iframe>'});var offsetTop=(isLanguageSelector)?0:20;try{if(Prototype.Browser.IE)Element.clonePosition(dropdownID,cntrlr.id,{setWidth:false,setHeight:false,offsetLeft:-3,offsetTop:offsetTop});else Element.clonePosition(dropdownID,cntrlr.id,{setWidth:false,setHeight:false,offsetLeft:0,offsetTop:offsetTop});}catch(e){Element.clonePosition(dropdownID,cntrlr.id,{setWidth:false,setHeight:false,offsetLeft:-3,offsetTop:offsetTop});}
var dw=$(dropdownID).getWidth()+'px';var ddDims=$(dropdownID).getDimensions();$(dropdownID).setStyle({width:ddDims['width']+'px',height:ddDims['height']+'px'});if(Prototype.Browser.IE)Element.clonePosition(iFrameID,cntrlr.id,{setWidth:false,setHeight:false,offsetLeft:0,offsetTop:offsetTop});else Element.clonePosition(iFrameID,cntrlr.id,{setWidth:false,setHeight:false,offsetLeft:0,offsetTop:offsetTop});var ieWidthFix=(Prototype.Browser.IE)?4:5;$(iFrameID).setStyle({width:ddDims['width']+ieWidthFix+'px',height:ddDims['height']+'px'});if(!isLanguageSelector){var ieFixW=(Prototype.Browser.IE)?0:6;var barWidth=$(dropdownID).getWidth()-$(cntrlr.id).getWidth()+ieFixW;$(dropdownID).insert({top:'<div style="float:right; height:0; line-height:0; width:'+barWidth+'px; border-top:solid 3px #f2f2f2; margin-right:-10px; z-index:5000"></div>'});}
cntrlr.positioned[cntrlr.id]=true;}
if(toggle&&!$(dropdownID).visible()){$(dropdownID).show();$(iFrameID).show();Event.observe($(dropdownID),'mouseover',function(){if(!isLanguageSelector)$(cntrlr.id).addClassName('headerTabActive');$(dropdownID).show();$(iFrameID).show();});var mouseOutEvt=(Prototype.Browser.IE)?'mouseleave':'mouseout';Event.observe($(dropdownID),mouseOutEvt,function(ev){if(!isLanguageSelector)$(cntrlr.id).removeClassName('headerTabActive');$(dropdownID).hide();$(iFrameID).hide();});}else if($(dropdownID).visible()){$(dropdownID).hide();$(iFrameID).hide();}}};var popupTitle={popupStaticOffsetLeft:5,popupStaticOffsetTop:5,popUpMaxDisplayTimes:-1,titlesViewed:new Object(),elements:new Object(),displayPopUp:function(cursorXCoord,cursorYCoord,activeElement){var activeElementID=activeElement.identify();if(!popupTitle.elements[activeElementID])popupTitle.elements[activeElementID]=activeElement.getAttribute('title');if(!popupTitle.titlesViewed[activeElementID]){popupTitle.titlesViewed[activeElementID]=1;}else{popupTitle.titlesViewed[activeElementID]+=1;}
activeElement.writeAttribute('title','');if(!$('popUpTitleContainer'))$('wrapper').insert({bottom:'<div id="popUpTitleContainer" style="top:0px;display:none;"></div>'});if(popupTitle.titlesViewed[activeElementID]>popupTitle.popUpMaxDisplayTimes&&popupTitle.popUpMaxDisplayTimes>-1&&activeElement.className!='e_popupTitleAlwaysShow'){return;}else{$('popUpTitleContainer').update("<div>"+popupTitle.elements[activeElement.id]+"</div>");popupTitle.setPopUpPosition(cursorXCoord,cursorYCoord);$('popUpTitleContainer').style.display='';}},hidePopUp:function(activeElement){$('popUpTitleContainer').style.display='none';activeElement.writeAttribute('title',popupTitle.elements[activeElement.id]);if(popupTitle.titlesViewed[activeElement.id]>popupTitle.popUpMaxDisplayTimes&&popupTitle.popUpMaxDisplayTimes>-1&&activeElement.hasClassName('e_popupTitle')){activeElement.removeClassName('e_popupTitle');}},setPopUpPosition:function(cursorXCoord,cursorYCoord){var topOffset=parseInt(cursorYCoord+popupTitle.popupStaticOffsetTop),leftOffset=parseInt(cursorXCoord+popupTitle.popupStaticOffsetLeft);if(parseInt(document.documentElement.clientWidth+document.documentElement.scrollLeft)<parseInt($('popUpTitleContainer').offsetWidth+leftOffset))
{$('popUpTitleContainer').style.left=parseInt(leftOffset-$('popUpTitleContainer').offsetWidth)+'px';}else{$('popUpTitleContainer').style.left=leftOffset+'px';}
if(parseInt(document.documentElement.clientHeight+document.documentElement.scrollTop)<parseInt($('popUpTitleContainer').offsetHeight+topOffset))
{$('popUpTitleContainer').style.top=parseInt(topOffset-$('popUpTitleContainer').offsetHeight)+'px';}else{$('popUpTitleContainer').style.top=topOffset+'px';}}};mum={searchscroll:function(id1,id2){$(id2).toggleClassName('expand');if($(id1).visible()){Effect.SlideUp(id1);}else{Effect.SlideDown(id1);}}}
admin={load_select_widget:function(){$$('.widget_select').each(function(elm){new Autocompleter.SelectBox(elm,{'width':fcuVars.wdth});});},admin_changepayment:function(StoreOrderID,TermPaymentID){var url="ajax_class_creator.php";var params="ajax_action=adminPaymentEdit&ajax_class=multimanage&StoreOrderID="+StoreOrderID+"&TermPaymentID="+TermPaymentID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.edit_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},edit_init_success:function(xhrReq){var json=xhrReq.responseText.evalJSON(true);if(json.reload){location.href="admin_store_payment_info.php?ID="+json.StoreOrderID;}else{ajaxWin.show(json);}},admin_init:function(subID,functiontype){var url="ajax_class_creator.php";var params="ajax_action=adminControl&ajax_class=multimanage&subID="+subID+"&functiontype="+functiontype+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="multiuser_admin.php?id="+subID;},onFailure:admin.xhrError.bind(this)})},sub_lock_activity:function(subID){var url="ajax_class_creator.php";var params="ajax_action=adminLockAccount&ajax_class=multimanage&subid="+subID+"&"+$('ban_change').serialize();$('spinnerdiv').update('<img src="images/loading_small.gif" alt="" />');var myAjax=new Ajax.Request(url,{asynchronous:true,method:"post",parameters:params,onComplete:function(xhrreq){$('spinnerdiv').update('');var json=xhrreq.responseText.evalJSON(true);if(json=='done'){document.location.href="multiuser_account_lock.php?id="+subID;}else{onComplete:ajaxWin.show(json);}},onFailure:admin.xhrError.bind(this)})},locksubuser:function(subID,banValue,reasonValue,lockAdjust){var url="ajax_class_creator.php";var params="ajax_action=adminConfirmLockSubscriptionAccount&ajax_class=multimanage&subID="+subID+"&lockAdjust="+lockAdjust+"&ban_login="+banValue+"&admin_notes="+reasonValue+"";$('spinnerdiv').update('<img src="images/loading_small.gif" alt="" />');var myAjax=new Ajax.Request(url,{asynchronous:true,method:"post",parameters:params,onComplete:function(){$('spinnerdiv').update('');location.href="multiuser_account_lock.php?id="+subID;},onFailure:admin.xhrError.bind(this)})},download_init:function(subID){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=ProcessLimitAdjust&ajax_class=multimanage&subID="+subID+"&"+$('pull_change').serialize()+"&redirect="+redirect;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.download_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},limit_adjust:function(subID){var url="ajax_class_creator.php";var redirect=1;var plantype=$("fixed_"+subID).value;if($("monthly_"+subID).checked){plantype=$("monthly_"+subID).value;}
var params="ajax_action=ProcessLimitAdjust&ajax_class=multimanage&subID="+subID+"&limiter="+$("limiter_"+subID).value+"&type="+plantype+"&redirect="+redirect;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"post",parameters:params,onComplete:admin.limit_adjust_success.bind(this),onFailure:admin.xhrError.bind(this)})},update_topup:function(subid){var url="ajax_class_creator.php";var params="ajax_action=DialogSubAccountTopUp&ajax_class=multimanage&subid="+subid+"";var trgt='p';var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.download_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},update_topuptoggle:function(subid){var url="ajax_class_creator.php";var params="ajax_action=ToggleSubAccountTopUp&ajax_class=multimanage&subid="+subid+"";var trgt='p';var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="multiuser_admin.php?id="+subid;},onFailure:admin.xhrError.bind(this)})},download_init_success:function(xhrReq){var json=xhrReq.responseText.evalJSON(true);if(json.reload)location.href="multiuser_admin.php?id="+json.subID;else ajaxWin.show(json);},limit_adjust_success:function(xhrReq){var json=xhrReq.responseText.evalJSON(true);if(json.reload)location.href="corp_fast_distribute.php";else ajaxWin.show(json);},update_sub_limit:function(subid){var url="ajax_class_creator.php";var params="ajax_action=ProcessSubLimitAdjust&ajax_class=multimanage&subid="+subid+"&"+$('subpull_change').serialize();var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="multiuser_admin.php?id="+subid;},onFailure:admin.xhrError.bind(this)})},write_sub:function(subid,creditPoolListID){var url="ajax_class_creator.php";var params="ajax_action=writePackage&ajax_class=multimanage&subid="+subid+"&creditPoolListID="+creditPoolListID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="multiuser_admin.php?id="+subid;},onFailure:admin.xhrError.bind(this)})},rewrite_sub:function(oldsubID,newsubID,creditPoolListID){var url="ajax_class_creator.php";var params="ajax_action=rewritePackage&ajax_class=multimanage&oldsubID="+oldsubID+"&newsubID="+newsubID+"&creditPoolListID="+creditPoolListID+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="multiuser_admin.php?id="+newsubID;},onFailure:admin.xhrError.bind(this)})},edit_termPayment:function(StoreOrderID,TermPaymentID){var url="ajax_class_creator.php";var Meathod="cheque";if($("wiretransfer").checked)
Meathod="wire";var params="ajax_action=editPayment&ajax_class=multimanage&TermPaymentID="+TermPaymentID+"&StoreOrderID="+StoreOrderID+"&Amount="+$('Amount').value+"&PaymentID="+$('PaymentID').value+"&Meathod="+Meathod+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="corporate_term_payment.php?ID="+StoreOrderID;},onFailure:admin.xhrError.bind(this)})},delete_termPayment:function(StoreOrderID,TermPaymentID){var url="ajax_class_creator.php";var params="ajax_action=deletePayment&ajax_class=multimanage&TermPaymentID="+TermPaymentID+"&StoreOrderID="+StoreOrderID+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="corporate_term_payment.php?ID="+StoreOrderID;},onFailure:admin.xhrError.bind(this)})},switch_distribution:function(subid,type,limiter,redirect){var url="ajax_class_creator.php";var params="ajax_action=switchDistribution&ajax_class=multimanage&subid="+subid+"&type="+type+"&limiter="+limiter+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){if(redirect==1){location.href="corp_fast_distribute.php";}else{location.href="multiuser_admin.php?id="+subid;}},onFailure:admin.xhrError.bind(this)})},set_subscription:function(subid,dateEnd){var url="ajax_class_creator.php";var params="ajax_action=setPackage&ajax_class=multimanage&dateEnd="+dateEnd+"&subid="+subid+"&"+$('set_subaccount').serialize();var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.showDialog.bind(this),onFailure:admin.xhrError.bind(this)})},admin_accountcontrol_init:function(userID,banStatus){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminAccountcontrolInit&ajax_class=multimanage&userID="+userID+"&"+"&banStatus="+banStatus+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.download_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},admin_accountcontrol_set:function(userID,banStatus){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminAccountcontrolSet&ajax_class=multimanage&userID="+userID+"&"+"&banStatus="+banStatus+"";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="/user_admin.php?id="+userID;},onFailure:admin.xhrError.bind(this)})},admin_account_terms_settings:function(userID,termStatus){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminTermsSettings&ajax_class=multimanage&userID="+userID+"&"+"&termStatus="+termStatus;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.download_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},admin_accountterms_set:function(userID,termStatus){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminTermcontrolSet&ajax_class=multimanage&userID="+userID+"&"+"&termStatus="+termStatus;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="/admin_corporate_creditapp_edit.php?userID="+userID;},onFailure:admin.xhrError.bind(this)})},admin_deleteTermPayment:function(userID,storeOrderID,paymentID){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminTermsPaymentDelete&ajax_class=multimanage&userID="+userID+"&"+"&storeOrderID="+storeOrderID+""+"&"+"&paymentID="+paymentID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.download_init_success.bind(this),onFailure:admin.xhrError.bind(this)})},admin_sendInvoice:function(userID,storeOrderID){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminSendInvoiceCorp&ajax_class=multimanage&userID="+userID+"&"+"&storeOrderID="+storeOrderID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:admin.showDialog.bind(this),onFailure:admin.xhrError.bind(this)})},admin_deleteTermPaymentConfirm:function(paymentID,storeOrderID,amount){var url="ajax_class_creator.php";var redirect=0;var params="ajax_action=adminTermDeleteConfirm&ajax_class=multimanage&paymentID="+paymentID+"&"+"&amount="+amount+"&"+"&storeOrderID="+storeOrderID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onComplete:function(){location.href="/corporate_term_payment.php?ID="+storeOrderID;},onFailure:admin.xhrError.bind(this)})},showDialog:function(xhrReq){var json=xhrReq.responseText.evalJSON(true);ajaxWin.show(json);},xhrError:function(){alert(fcuVars.mssg_errXHR);}}
Event.observe(window,'load',function(){});cfaq={load:function(faqdataset){console.log(faqdataset);}}
var AjaxUtil={receiveArray:function(responseText){if(typeof responseText!='string'){return responseText;}
eval('var ret = '+responseText);return ret;},trim:function(str){return str.replace(/^(\s+)?(\S*)(\s+)?$/,'$2');},ltrim:function(str){return str.replace(/^\s*/,'');},rtrim:function(str){return str.replace(/\s*$/,'');},xmldoc2string:function(xmlDocObject){var xmlMod=null;try{var xmlMod=imprt("xml");}catch(e){throw"importing of xml module failed.";}
try{var xmlString=xmlMod.node2XML(xmlDocObject.documentElement);}catch(e){throw e;}
return xmlString;},xmlrpc_extractpayload:function(responseText){var xmlrpcMod=null;try{var xmlrpcMod=imprt("xmlrpc");}catch(e){throw"importing of xmlrpc module failed.";}
try{var xmlPayload=xmlrpcMod.unmarshall(responseText);}catch(e){if(e.constructor==xmlrpcMod.Fault){throw e;}else{alert(e);}}
return xmlPayload;},xmlrpc_formatrequest:function(methodName,methodParameters){var message=new XMLRPCMessage(methodName);message.addParameter(methodParameters);return message.xml();},xmlrpc_receivepayload:function(responseText){try{xmlPayload=this.xmlrpc_extractpayload(responseText);var xmlDoc;try{var xmlDOMParser=new DOMParser();xmlDoc=xmlDOMParser.parseFromString(xmlPayload,"text/xml");}catch(e){try{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async="false";xmlDoc.loadXML(xmlPayload);}catch(e){throw e;}}}catch(e){if(typeof e=='object'&&e.faultCode){throw e;}else{alert(e);}}
return xmlDoc;},requestState:function(req){switch(req.readyState){case 1:case 2:case 3:return true;break;default:return false;break;}},showTimeoutMessage:function(){alert('The request has timed out. Please try again.');},defaultOnFailure:function(){alert('The request has failed.');},isFailure:function(req){if(AjaxFailure.isNotXmlHttpRequest(req)){return true;}
if(AjaxFailure.isHeaderlessContent(req)){this.showTimeoutMessage();return true;}
if(AjaxFailure.isFailureString(req)){return true;}
return false;}}
var AjaxFailure={isHeaderlessContent:function(req){return(req.getResponseHeader('X-Headerless-Content')=='YES'?true:false);},isFailureString:function(req){return(req.responseText=='ajax_fail'?true:false);},isNotXmlHttpRequest:function(req){return(req.responseText?false:true);}}
var NavigationBarAjax=Class.create();NavigationBarAjax.prototype={initialize:function(){this.page=1;this.link='';},setLink:function(link){this.link=link;},getLink:function(page){this.page=parseInt(page);this.link();return true;}};var TabControllerContainer='';var TabControllerAjax={requestTab:function(container,tabID,tabObj){if(!this.canRequest(container,tabID)){return;}
var url='ajax_tabcontroller.php';var params='CacheKey='+container+'_'+tabID+'_'+istock.siteLang+'&ajax_action=GetContent&ContainerName='+container+'&ShowTab='+encodeURIComponent(tabObj)+this.getPageParam(container,tabID);var myAjax=new Ajax.Request
(url,{method:'post',parameters:params,onComplete:this.displayRequestedTab.bind(this),onFailure:this.requestedTabFailed.bind(this)});},canRequest:function(container,tabID){if($(container+"_Loading").style.display=="block"){return false;}
this.hideTabContent(container,TabControllerContainer[container]);this.hideTabName(TabControllerContainer[container]);this.showTabName(tabID);this.showLoading(container);return true;},getPageParam:function(container,tabID){var nav='';try{nav=(eval(container+"_"+tabID+"_"+"nav"));}
catch(er){nav='';}
if(nav!=''){return'&page='+nav.page;}
return'';},displayRequestedTab:function(req){var data=AjaxUtil.receiveArray(req.responseText);if(data.error==1){this.requestedTabFailed(req);return;}
if(!data.reload){this.setOnClick(data.container,data.tabID);}
TabControllerContainer[data.container]=data.tabID;this.hideLoading(data.container);$(data.container+'_'+data.tabID+'_Content').update(data.content);this.showTabContent(data.container,data.tabID);this.ReInitSoundManager(data.tabID);return;},setOnClick:function(container,tabID){$(tabID).onclick=function onclick(event){try{if(Tabs&&Tabs.setParentTab){Tabs.setParentTab(tabID);}}
catch(err){}
TabControllerAjax.toggleTab(container,tabID);}},requestedTabFailed:function(req){this.hideLoading();alert('Error loading tab\'s content. Please try again.');},showTabContent:function(container,id){$(container+"_"+id+"_Content").style.display="block";},hideTabContent:function(container,id){$(container+"_"+id+"_Content").style.display="none";},showTabName:function(id){$(id).className="tabContainer";},hideTabName:function(id){$(id).className="tabContainerOff";},showLoading:function(container){$(container+"_Loading").style.display="block";},hideLoading:function(container){$(container+"_Loading").style.display="none";},toggleTab:function(container,tabID){this.hideTabContent(container,TabControllerContainer[container]);this.hideTabName(TabControllerContainer[container]);this.showTabName(tabID);this.showTabContent(container,tabID);TabControllerContainer[container]=tabID;this.setCookie(container,tabID);return;},setCookie:function(container,tabID){var today=new Date();var expire=new Date();expire.setTime(today.getTime()+3600000*24*30);document.cookie="iStockContainer_"+container+"="+tabID+";path=/"+";expires="+expire.toGMTString()+";domain=.istockphoto.com"+";"},ReInitSoundManager:function(name){if(name=='audioNewestTab'){sm.init();}}}
fcu={load_select_widget:function(){$$('.widget_select').each(function(elm){new Autocompleter.SelectBox(elm,{'width':fcuVars.wdth});});},download_init:function(form_id){sffx=form_id.replace(/fcuForm/,'');cctID=$F('ConcreteTypeID'+sffx);fileID=$F('FileID'+sffx);if(cctID!=0)$('dnldSpinner'+sffx).show();switch(true){case(cctID==0):alert(fcuVars.mssg_errNoSize);break;default:var url="ajax_class_creator.php";var params="ajax_action=GetDialog&ajax_class=filecloseup&FileID="+fileID+"&ConcreteTypeID="+cctID;var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onSuccess:fcu.showDialog.bind(this),on301:fcu.xhrError.bind(this),on400:fcu.xhrError.bind(this),on401:fcu.xhrError.bind(this),on403:fcu.xhrError.bind(this),on404:fcu.xhrError.bind(this),on500:fcu.xhrError.bind(this),on503:fcu.xhrError.bind(this),on504:fcu.xhrError.bind(this),onFailure:fcu.xhrError.bind(this)});break;}},showDialog:function(xhrReq){var json=xhrReq.responseText.evalJSON(true);$('dnldSpinner'+sffx).hide();if(typeof(json.goDownload)!='undefined'){lb.download_init("payg");return;}
ajaxWin.show(json);},xhrError:function(xhrReq){var mssg='XHR Error - Code '+xhrReq.status+' ';switch(xhrReq.status){case 301:mssg+='Content Moved';break;case 400:mssg+='Bad Request';break;case 401:mssg+='Unauthorized';break;case 403:mssg+='Forbidden';break;case 404:mssg+='Not Found';break;case 500:mssg+='Internal Server Error';break;case 503:mssg+='Service Unavailable';break;case 504:mssg+='Gateway Timeout';break;case 505:mssg+='HTTP Version Not Supported';break;}
mssg+="\n\nPlease clear your browser's cache,\nreload the page and try your request again."
alert(mssg);},setDefaultCreditType:function(id){if($('DefaultCreditType_PayAsYouGo')&&$F(id)!='PayAsYouGo')$('DefaultCreditType_PayAsYouGo').checked=false;if($('DefaultCreditType_Subscription')&&$F(id)!='Subscription')$('DefaultCreditType_Subscription').checked=false;util_updateCreditPlan(0,$F(id));},license_init:function(cllctn){fileID=$F('FileID');collection=(cllctn=='sub')?'Subscription':'PayAsYouGo';var url="ajax_class_creator.php";var params="ajax_action=GetDialog&ajax_class=filecloseup&Collection="+collection+"&"+$('frm_'+fileID).serialize();var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onSuccess:lb.showDialog.bind(this),on301:fcu.xhrError.bind(this),on400:fcu.xhrError.bind(this),on401:fcu.xhrError.bind(this),on403:fcu.xhrError.bind(this),on404:fcu.xhrError.bind(this),on500:fcu.xhrError.bind(this),on503:fcu.xhrError.bind(this),on504:fcu.xhrError.bind(this),onFailure:lb.xhrError.bind(this)});},togglePixelsInches:function(elm){if($(elm).hasClassName('dkgrey'))return;$$('span.dims').invoke('toggleClassName','h');['pixels','inches'].each(function(id){$(id).toggleClassName('dkgrey').toggleClassName('no_txt_dec')});},launchCalc:function(){var url="ajax_class_creator.php";var params="ajax_action=PixelCalculator&ajax_class=filecloseup";var myAjax=new Ajax.Request(url,{asynchronous:true,method:"get",parameters:params,onSuccess:lb.showDialog.bind(this),on301:fcu.xhrError.bind(this),on400:fcu.xhrError.bind(this),on401:fcu.xhrError.bind(this),on403:fcu.xhrError.bind(this),on404:fcu.xhrError.bind(this),on500:fcu.xhrError.bind(this),on503:fcu.xhrError.bind(this),on504:fcu.xhrError.bind(this),onFailure:lb.xhrError.bind(this)});},clickAgreeBtn:function(collection){$('agreeBtn').replace('<img src="/images/loading.gif" alt="" />');if(window._gaq){_gaq.push(['_trackPageview','/file_download_approved.php'])}
lb.file_init(collection);}}
try{document.fire("ajax_file_closeup:loaded");}catch(e){}