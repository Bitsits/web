/* This source code is Copyright (c) Vibrant Media 2001-2010 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */ 
$iTXT.js.loader["$iTXT.debug.Util"]=true;$iTXT.debug.Util_Load=function()
{var undefined;$iTXT.debug.Util={ECH_EVENTS_TIME:1,ECH_EVENTS_DUMP:2,ECH_ASSESS_DUMP:4,ECH_TIME_XFER:8,ECH_XPAND_JSON:16,ECH_JSON_DB:32,ECH_ASSESS_DUMP_INPUT:64,ECH_TEXTNODES_DUMP:128,HL_COL_INIT:'#fcb514',HL_COL_SKIP:'blue',HL_COL_EXCLUDE:'red',HL_COL_CONTENT:'green',HL_BORDER_STD:'solid',HL_BORDER_SHORT:'solid',HL_BORDER_UPN:'dotted',HL_RESET:'none',hilite:function(n,c,b,f)
{if($iTXT.debug.CurrentConsole&&!$iTXT.glob.dbgParams.get('itxthln-xx'))
{if(n&&n.nodeType&&$iTXT.core.Util.TEXT_NODE==n.nodeType&&n.parentNode&&$iTXT.core.Util.ELEMENT_NODE==n.parentNode.nodeType&&('string'==typeof c||'string'==typeof b))
{var p=n.parentNode;if(this.HL_RESET==c||this.HL_RESET==b)
{f=true;}
if(!f&&p.itxtHilite)
{return;}
if(!c||'string'!=typeof c)
{c=this.HL_COL_CONTENT;}
if(!b||'string'!=typeof b)
{b=this.HL_BORDER_STD;}
try
{if(this.HL_RESET==c||this.HL_RESET==b)
{p.style.borderWidth=this.HL_RESET;p.style.borderColor=this.HL_RESET;p.style.borderStyle=this.HL_RESET;p.itxtHilite=0;}
else
{p.style.borderWidth='2px';p.style.borderColor=c;p.style.borderStyle=b;p.itxtHilite=1;}}
catch(x)
{}}}},msg:function(msg)
{}};}
$iTXT.js.loader["$iTXT.debug.Console"]=true;$iTXT.debug.Console_Load=function(){var undefined;itxtFeedback=function(msg)
{}
$iTXT.debug.Console=$iTXT.core.Class.create({defaultCategories:["Old","General","Event","UI","Hook","AdLogger","Template","Advert"],categoryHash:null,categoryColours:['purple','brown','blue','green','red','orange','black','lightgreen'],window:null,consoleDocument:null,currentCategory:null,consoleOpen:false,proxyDebugger:false,init:function(_options)
{if(!this.proxyDebugger)
{this.options=$iTXT.core.Util.extend({},_options);this.categoryHash={};try
{var ts=(new Date()).getTime();this.consoleWindw=window.open('','itxtdebugwin','height=300px,width=700px,resizable=yes,scrollbars=yes,status=no');this.consoleDocument=this.consoleWindw.document;}catch(e)
{}
$iTXT.debug.CurrentConsole=this;this._buildConsole();$iTXT.core.$(window).itxtSubscribe("unload",$iTXT.core.Event.bind(this,this.pageUnload));$iTXT.subscribe("$iTXT:initialiser:loaded",$iTXT.core.Event.bind(this,this.initLoaded));}},_buildConsole:function()
{var t=this;window.itxtConsoleReady=function(w)
{t.childWindow=w;}
window.itxtConsoleLoaded=function(w)
{w.loadLibraries($iTXT.debug.Category,$iTXT.js.coreVersion,$iTXT.js.libPath);}
window.itxtConsoleHilite=function(n,b)
{if(n)
{if('string'==typeof n)
{n=document.getElementById(n);}
if(b)
{n.itxtOldBG=n.style.backgroundColor;n.itxtOldBorder=n.style.border;n.style.backgroundColor="yellow";n.style.border="3px solid red";n.scrollIntoView();}
else
{n.style.backgroundColor=n.itxtOldBG||"";n.style.border=n.itxtOldBorder||"";}}}
if(this.consoleDocument.itxtReady)
{this.childWindow=this.consoleDocument.itxtWindow;this.childWindow.newConsole();return;}
this.scriptElement=$iTXT.core.Builder.make("SCRIPT",{src:$iTXT.js.libPath+"debug_window_script.js"},[],this.consoleDocument);var hd=this.consoleDocument.getElementsByTagName('head')[0];hd.appendChild(this.scriptElement);},pageUnload:function()
{},initLoaded:function()
{if($iTXT.glob.dbParams)
{var plist=$iTXT.glob.dbParams.paramHash;for(var pn in plist)
{var pv=plist[pn].v;}}
if($iTXT.glob.params)
{var plist=$iTXT.glob.params.paramHash;for(var pn in plist)
{var pv=plist[pn].v;}}
if($iTXT.glob.dbgParams)
{var plist=$iTXT.glob.dbgParams.paramHash;for(var pn in plist)
{var pv=plist[pn].v;}}},_log:function(logType,logOpts)
{if(this.proxyDebugger)
{}
else
{try{var t=this;if(this.childWindow&&this.childWindow.logDebug)
{try
{this.childWindow.logDebug(logType,logOpts);}
catch(e)
{this.childWindow=undefined;}}
else
{window.setTimeout(function()
{t._log(logType,logOpts);},500);}}catch(e)
{}}}});$iTXT.debug.Log=function(logType,logOpts)
{try
{if(!$iTXT.core.Util.nativeLog(logType,logOpts)&&$iTXT.debug.CurrentConsole)
{$iTXT.debug.CurrentConsole._log(logType,logOpts);}}
catch(x)
{if(window.console&&console.log)
{console.log(x.message);}}}
if(true===document.itxtDebugOn)
{try{new $iTXT.debug.Console();}catch(e){alert('Error Creating Debug Window: '+e);}}}