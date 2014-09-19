window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {var gadgets=gadgets||{};
gadgets.log=function(A){gadgets.log.logAtLevel(gadgets.log.INFO,A)
};
gadgets.warn=function(A){gadgets.log.logAtLevel(gadgets.log.WARNING,A)
};
gadgets.error=function(A){gadgets.log.logAtLevel(gadgets.log.ERROR,A)
};
gadgets.setLogLevel=function(A){gadgets.log.logLevelThreshold_=A
};
gadgets.log.logAtLevel=function(C,B){if(C<gadgets.log.logLevelThreshold_||!window.console){return 
}var A=window.console.log;
if(C==gadgets.log.WARNING&&window.console.warn){A=window.console.warn
}else{if(C==gadgets.log.ERROR&&window.console.error){A=window.console.error
}}A(B)
};
gadgets.log.INFO=1;
gadgets.log.WARNING=2;
gadgets.log.ERROR=3;
gadgets.log.NONE=4;
gadgets.log.logLevelThreshold_=gadgets.log.INFO;;
var gadgets=gadgets||{};
gadgets.util=function(){function G(){var L;
var K=document.location.href;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){L=K.substr(I+1)
}else{L=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return L.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(){if(E!==null){return E
}E={};
var L=G();
var O=window.decodeURIComponent?decodeURIComponent:unescape;
for(var J=0,I=L.length;
J<I;
++J){var N=L[J].indexOf("=");
if(N===-1){continue
}var M=L[J].substring(0,N);
var K=L[J].substring(N+1);
K=K.replace(/\+/g," ");
E[M]=O(K)
}return E
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var L={};
for(var K=0,I;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){return I.replace(/&#([0-9]+);/g,B)
}}
}();
gadgets.util.getUrlParameters();;
var gadgets=gadgets||{};
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json={parse:function(B){try{return window.JSON.parse(B)
}catch(A){return false
}},stringify:function(B){try{return window.JSON.stringify(B)
}catch(A){return null
}}}
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.wpm=function(){var A;
return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(B,C){A=C;
var D=function(E){B(gadgets.json.parse(E.data))
};
if(typeof window.addEventListener!="undefined"){window.addEventListener("message",D,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",D)
}}A("..",true);
return true
},setup:function(C,B){if(C===".."){gadgets.rpc.call(C,gadgets.rpc.ACK)
}return true
},call:function(C,F,E){var D=C===".."?window.parent:window.frames[C];
var B=gadgets.rpc.getOrigin(gadgets.rpc.getRelayUrl(C));
if(B){D.postMessage(gadgets.json.stringify(E),B)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin)"+ +", cannot send cross-domain message")
}return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.frameElement=function(){var E="__g2c_rpc";
var B="__c2g_rpc";
var D;
var C;
function A(G,K,J){try{if(K!==".."){var F=window.frameElement;
if(typeof F[E]==="function"){if(typeof F[E][B]!=="function"){F[E][B]=function(L){D(gadgets.json.parse(L))
}
}F[E](gadgets.json.stringify(J));
return 
}}else{var I=document.getElementById(G);
if(typeof I[E]==="function"&&typeof I[E][B]==="function"){I[E][B](gadgets.json.stringify(J));
return 
}}}catch(H){}return true
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(F,G){D=F;
C=G;
return true
},setup:function(J,F){if(J!==".."){try{var I=document.getElementById(J);
I[E]=function(K){D(gadgets.json.parse(K))
}
}catch(H){return false
}}if(J===".."){C("..",true);
var G=function(){window.setTimeout(function(){gadgets.rpc.call(J,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(G)
}return true
},call:function(F,H,G){A(F,H,G)
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.nix=function(){var C="GRPC____NIXVBS_wrapper";
var D="GRPC____NIXVBS_get_wrapper";
var F="GRPC____NIXVBS_handle_message";
var B="GRPC____NIXVBS_create_channel";
var A=10;
var J=500;
var I={};
var H;
var G=0;
function E(){var L=I[".."];
if(L){return 
}if(++G>A){gadgets.warn("Nix transport setup failed, falling back...");
H("..",false);
return 
}if(!L&&window.opener&&"GetAuthToken" in window.opener){L=window.opener;
if(L.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var K=gadgets.rpc.getAuthToken("..");
L.CreateChannel(window[D]("..",K),K);
I[".."]=L;
window.opener=null;
H("..",true);
return 
}}window.setTimeout(function(){E()
},J)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(L,M){H=M;
if(typeof window[D]!=="unknown"){window[F]=function(O){window.setTimeout(function(){L(gadgets.json.parse(O))
},0)
};
window[B]=function(O,Q,P){if(gadgets.rpc.getAuthToken(O)===P){I[O]=Q;
H(O,true)
}};
var K="Class "+C+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+F+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+B+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+D+"(name, auth)\nDim wrap\nSet wrap = New "+C+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+D+" = wrap\nEnd Function";
try{window.execScript(K,"vbscript")
}catch(N){return false
}}return true
},setup:function(O,K){if(O===".."){E();
return true
}try{var M=document.getElementById(O);
var N=window[D](O,K);
M.contentWindow.opener=N
}catch(L){return false
}return true
},call:function(K,N,M){try{if(I[K]){I[K].SendMessage(gadgets.json.stringify(M))
}}catch(L){return false
}return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.rmr=function(){var G=500;
var E=10;
var H={};
var B;
var I;
function K(P,N,O,M){var Q=function(){document.body.appendChild(P);
P.src="about:blank";
if(M){P.onload=function(){L(M)
}
}P.src=N+"#"+O
};
if(document.body){Q()
}else{gadgets.util.registerOnLoadHandler(function(){Q()
})
}}function C(O){if(typeof H[O]==="object"){return 
}var P=document.createElement("iframe");
var M=P.style;
M.position="absolute";
M.top="0px";
M.border="0";
M.opacity="0";
M.width="10px";
M.height="1px";
P.id="rmrtransport-"+O;
P.name=P.id;
var N=gadgets.rpc.getOrigin(gadgets.rpc.getRelayUrl(O))+"/robots.txt";
H[O]={frame:P,receiveWindow:null,relayUri:N,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(O!==".."){K(P,N,A(O))
}D(O)
}function D(N){var P=null;
H[N].searchCounter++;
try{if(N===".."){P=window.parent.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{P=window.frames[N].frames["rmrtransport-.."]
}}catch(O){}var M=false;
if(P){M=F(N,P)
}if(!M){if(H[N].searchCounter>E){return 
}window.setTimeout(function(){D(N)
},G)
}}function J(N,P,T,S){var O=null;
if(T!==".."){O=H[".."]
}else{O=H[N]
}if(O){if(P!==gadgets.rpc.ACK){O.queue.push(S)
}if(O.waiting||(O.queue.length===0&&!(P===gadgets.rpc.ACK&&S&&S.ackAlone===true))){return true
}if(O.queue.length>0){O.waiting=true
}var M=O.relayUri+"#"+A(N);
try{O.frame.contentWindow.location=M;
var Q=O.width==10?20:10;
O.frame.style.width=Q+"px";
O.width=Q
}catch(R){return false
}}return true
}function A(N){var O=H[N];
var M={id:O.sendId};
if(O){M.d=Array.prototype.slice.call(O.queue,0);
M.d.push({s:gadgets.rpc.ACK,id:O.recvId})
}return gadgets.json.stringify(M)
}function L(X){var U=H[X];
var Q=U.receiveWindow.location.hash.substring(1);
var Y=gadgets.json.parse(decodeURIComponent(Q))||{};
var N=Y.d||[];
var O=false;
var T=false;
var V=0;
var M=(U.recvId-Y.id);
for(var P=0;
P<N.length;
++P){var S=N[P];
if(S.s===gadgets.rpc.ACK){I(X,true);
if(U.waiting){T=true
}U.waiting=false;
var R=Math.max(0,S.id-U.sendId);
U.queue.splice(0,R);
U.sendId=Math.max(U.sendId,S.id||0);
continue
}O=true;
if(++V<=M){continue
}++U.recvId;
B(S)
}if(O||(T&&U.queue.length>0)){var W=(X==="..")?gadgets.rpc.RPC_ID:"..";
J(X,gadgets.rpc.ACK,W,{ackAlone:O})
}}function F(P,S){var O=H[P];
try{var N=false;
N="document" in S;
if(!N){return false
}N=typeof S.document=="object";
if(!N){return false
}var R=S.location.href;
if(R==="about:blank"){return false
}}catch(M){return false
}O.receiveWindow=S;
function Q(){L(P)
}if(typeof S.attachEvent==="undefined"){S.onresize=Q
}else{S.attachEvent("onresize",Q)
}if(P===".."){K(O.frame,O.relayUri,A(P),P)
}else{L(P)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(M,N){B=M;
I=N;
return true
},setup:function(O,M){try{C(O)
}catch(N){gadgets.warn("Caught exception setting up RMR: "+N);
return false
}return true
},call:function(M,O,N){return J(M,N.s,O,N)
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.ifpc=function(){var E=[];
var D=0;
var C;
function B(H){var F=[];
for(var I=0,G=H.length;
I<G;
++I){F.push(encodeURIComponent(gadgets.json.stringify(H[I])))
}return F.join("&")
}function A(I){var G;
for(var F=E.length-1;
F>=0;
--F){var J=E[F];
try{if(J&&(J.recyclable||J.readyState==="complete")){J.parentNode.removeChild(J);
if(window.ActiveXObject){E[F]=J=null;
E.splice(F,1)
}else{J.recyclable=false;
G=J;
break
}}}catch(H){}}if(!G){G=document.createElement("iframe");
G.style.border=G.style.width=G.style.height="0px";
G.style.visibility="hidden";
G.style.position="absolute";
G.onload=function(){this.recyclable=true
};
E.push(G)
}G.src=I;
window.setTimeout(function(){document.body.appendChild(G)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(F,G){C=G;
C("..",true);
return true
},setup:function(G,F){C(G,true);
return true
},call:function(F,K,I){var J=gadgets.rpc.getRelayUrl(F);
++D;
if(!J){gadgets.warn("No relay file assigned for IFPC");
return 
}var H=null;
if(I.l){var G=I.a;
H=[J,"#",B([K,D,1,0,B([K,I.s,"","",K].concat(G))])].join("")
}else{H=[J,"#",F,"&",K,"@",D,"&1&0&",encodeURIComponent(gadgets.json.stringify(I))].join("")
}A(H);
return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpc=function(){var P="__cb";
var N="";
var F="__ack";
var M=500;
var G=10;
var B={};
var C={};
var T={};
var H={};
var J=0;
var c={};
var S={};
var D={};
var a={};
var I={};
var R={};
var U=(window.top!==window.self);
var K=window.name;
var b=(function(){function d(e){return function(){gadgets.log("gadgets.rpc."+e+"("+gadgets.json.stringify(Array.prototype.slice.call(arguments))+"): call ignored. [caller: "+document.location+", isGadget: "+U+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:d("init"),setup:d("setup"),call:d("call")}
})();
if(gadgets.util){a=gadgets.util.getUrlParameters()
}H[".."]=a.rpctoken||a.ifpctok||"";
var V=(a.rpc_earlyq==="1");
function A(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function X(j,g){var e=Y;
if(!g){e=b
}I[j]=e;
var d=R[j]||[];
for(var f=0;
f<d.length;
++f){var h=d[f];
h.t=gadgets.rpc.getAuthToken(j);
e.call(j,h.f,h)
}R[j]=[]
}function Q(e){if(e&&typeof e.s==="string"&&typeof e.f==="string"&&e.a instanceof Array){if(H[e.f]){if(H[e.f]!==e.t){throw new Error("Invalid auth token. "+H[e.f]+" vs "+e.t)
}}if(e.s===F){window.setTimeout(function(){X(e.f,true)
},0);
return 
}if(e.c){e.callback=function(f){gadgets.rpc.call(e.f,P,null,e.c,f)
}
}var d=(B[e.s]||B[N]).apply(e,e.a);
if(e.c&&typeof d!=="undefined"){gadgets.rpc.call(e.f,P,null,e.c,d)
}}}function Z(f){if(!f){return""
}f=f.toLowerCase();
if(f.indexOf("//")==0){f=window.location.protocol+":"+f
}if(f.indexOf("http://")!=0&&f.indexOf("https://")!=0){f=window.location.protocol+"://"+f
}var g=f.substring(f.indexOf("://")+3);
var d=g.indexOf("/");
if(d!=-1){g=g.substring(0,d)
}var i=f.substring(0,f.indexOf("://"));
var h="";
var j=g.indexOf(":");
if(j!=-1){var e=g.substring(j+1);
g=g.substring(0,j);
if((i==="http"&&e!=="80")||(i==="https"&&e!=="443")){h=":"+e
}}return i+"://"+g+h
}var Y=A();
B[N]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
B[P]=function(e,d){var f=c[e];
if(f){delete c[e];
f(d)
}};
function L(f,d){if(S[f]===true){return 
}if(typeof S[f]==="undefined"){S[f]=0
}var e=document.getElementById(f);
if(f===".."||e!=null){if(Y.setup(f,d)===true){S[f]=true;
return 
}}if(S[f]!==true&&S[f]++<G){window.setTimeout(function(){L(f,d)
},M)
}else{I[f]=b;
S[f]=true
}}function E(f,i){if(typeof D[f]==="undefined"){D[f]=false;
var h=gadgets.rpc.getRelayUrl(f);
if(Z(h)!==Z(window.location.href)){return false
}var g=null;
if(f===".."){g=window.parent
}else{g=window.frames[f]
}try{D[f]=g.gadgets.rpc.receiveSameDomain
}catch(d){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof D[f]==="function"){D[f](i);
return true
}return false
}if(U&&gadgets.config){function W(f){var h=f?f.rpc:{};
var e=h.parentRelayUrl;
if(e.substring(0,7)!=="http://"&&e.substring(0,8)!=="https://"&&e.substring(0,2)!=="//"){if(typeof a.parent==="string"&&a.parent!==""){if(e.substring(0,1)!=="/"){var d=a.parent.lastIndexOf("/");
e=a.parent.substring(0,d+1)+e
}else{e=Z(a.parent)+e
}}}C[".."]=e;
var g=!!h.useLegacyProtocol;
T[".."]=g;
if(g){Y=gadgets.rpctx.ifpc;
Y.init(Q,X)
}if(Y.setup("..")===false){I[".."]=b
}}var O={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",O,W)
}return{register:function(e,d){if(e===P||e===F){throw new Error("Cannot overwrite callback/ack service")
}if(e===N){throw new Error("Cannot overwrite default service: use registerDefault")
}B[e]=d
},unregister:function(d){if(d===P||d===F){throw new Error("Cannot delete callback/ack service")
}if(d===N){throw new Error("Cannot delete default service: use unregisterDefault")
}delete B[d]
},registerDefault:function(d){B[N]=d
},unregisterDefault:function(){delete B[N]
},forceParentVerifiable:function(){if(!Y.isParentVerifiable()){Y=gadgets.rpctx.ifpc
}},call:function(d,e,j,h){d=d||"..";
var i="..";
if(d===".."){i=K
}++J;
if(j){c[J]=j
}var g={s:e,f:i,c:j?J:0,a:Array.prototype.slice.call(arguments,3),t:H[d],l:T[d]};
if(E(d,g)){return 
}var f=I[d]?I[d]:Y;
if(!f){if(!R[d]){R[d]=[g]
}else{R[d].push(g)
}return 
}if(T[d]){f=gadgets.rpctx.ifpc
}if(f.call(d,i,g)===false){I[d]=b;
Y.call(d,i,g)
}},getRelayUrl:function(e){var d=C[e];
if(d&&d.indexOf("//")==0){d=document.location.protocol+d
}return d
},setRelayUrl:function(e,d,f){C[e]=d;
T[e]=!!f
},setAuthToken:function(d,e){e=e||"";
H[d]=String(e);
L(d,e)
},getAuthToken:function(d){return H[d]
},getRelayChannel:function(){return Y.getCode()
},receive:function(d){if(d.length>4){Q(gadgets.json.parse(decodeURIComponent(d[d.length-1])))
}},receiveSameDomain:function(d){d.a=Array.prototype.slice.call(d.a);
window.setTimeout(function(){Q(d)
},0)
},getOrigin:Z,init:function(){if(Y.init(Q,X)===false){Y=b
}},ACK:F,RPC_ID:K}
}();
gadgets.rpc.init();;
var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www.friendconnect.gmodules.com/gadgets";
var friendconnect_serverVersion = "0.475.4";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
function fca(a){throw a;}var fcb=true,fcc=null,fcd=false,fce=gadgets,fcaa=undefined,fcf=friendconnect_serverBase,fcg=encodeURIComponent,fcba=parseInt,fch=String,fci=window,fcca=setTimeout,fcj=Object,fck=document,fcl=Math;function fcda(a,b){return a.toString=b}function fcea(a,b){return a.length=b}function fcm(a,b){return a.width=b}function fcn(a,b){return a.innerHTML=b}function fco(a,b){return a.height=b}
var fcp="appendChild",fcq="push",fcr="length",fcfa="propertyIsEnumerable",fcga="stringify",fc="prototype",fcha="test",fcs="width",fct="round",fcia="slice",fcu="replace",fcv="document",fcja="data",fcw="split",fcx="getElementById",fcka="offsetWidth",fcy="location",fcz="getUrlParameters",fcA="indexOf",fcla="Dialog",fcB="style",fcma="body",fcC="left",fcD="call",fcE="match",fcF="options",fcna="random",fcG="createElement",fcH="json",fcoa="forEach",fcI="addEventListener",fcJ="bottom",fcK="setAttribute",
fcpa="href",fcL="util",fcqa="maxHeight",fcra="type",fcsa="contains",fcM="apply",fcN="name",fcO="parentNode",fcta="display",fcP="height",fcua="offsetHeight",fcQ="register",fcva="join",fcR="toLowerCase",fcS="right",goog=goog||{},fcT=this,fcxa=function(a,b,c){a=a[fcw](".");c=c||fcT;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[fcr]&&(d=a.shift());)if(!a[fcr]&&fcwa(b))c[d]=b;else c=c[d]?c[d]:(c[d]={})},fcya=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof
fcj)&&fcj[fc].toString[fcD](a)=="[object Array]"||typeof a[fcr]=="number"&&typeof a.splice!="undefined"&&typeof a[fcfa]!="undefined"&&!a[fcfa]("splice"))return"array";if(!(a instanceof fcj)&&(fcj[fc].toString[fcD](a)=="[object Function]"||typeof a[fcD]!="undefined"&&typeof a[fcfa]!="undefined"&&!a[fcfa]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[fcD]=="undefined")return"object";return b},fcwa=function(a){return a!==fcaa},fcza=function(a){var b=fcya(a);return b=="array"||
b=="object"&&typeof a[fcr]=="number"},fcAa=function(a){return typeof a=="string"},fcBa=function(a){a=fcya(a);return a=="object"||a=="array"||a=="function"};"closure_hashCode_"+fcl.floor(fcl[fcna]()*2147483648).toString(36);
var fcU=function(a){var b=fcya(a);if(b=="object"||b=="array"){if(a.clone)return a.clone[fcD](a);b=b=="array"?[]:{};for(var c in a)b[c]=fcU(a[c]);return b}return a},fcV=function(a,b){var c=b||fcT;if(arguments[fcr]>2){var d=Array[fc][fcia][fcD](arguments,2);return function(){var f=Array[fc][fcia][fcD](arguments);Array[fc].unshift[fcM](f,d);return a[fcM](c,f)}}else return function(){return a[fcM](c,arguments)}},fcCa=function(a){var b=Array[fc][fcia][fcD](arguments,1);return function(){var c=Array[fc][fcia][fcD](arguments);
c.unshift[fcM](c,b);return a[fcM](this,c)}},fcDa=function(a,b){for(var c in b)a[c]=b[c]},fcEa=Date.now||function(){return(new Date).getTime()},fcW=function(a,b,c){fcxa(a,b,c)},fcX=function(a,b){function c(){}c.prototype=b[fc];a.hc=b[fc];a.prototype=new c;a[fc].constructor=a};var fcFa=function(a){return a[fcu](/^[\s\xa0]+|[\s\xa0]+$/g,"")},fcGa=function(a,b){a=fch(a)[fcR]();b=fch(b)[fcR]();return a<b?-1:a==b?0:1},fcMa=function(a,b){if(b)return a[fcu](fcHa,"&amp;")[fcu](fcIa,"&lt;")[fcu](fcJa,"&gt;")[fcu](fcKa,"&quot;");else{if(!fcLa[fcha](a))return a;if(a[fcA]("&")!=-1)a=a[fcu](fcHa,"&amp;");if(a[fcA]("<")!=-1)a=a[fcu](fcIa,"&lt;");if(a[fcA](">")!=-1)a=a[fcu](fcJa,"&gt;");if(a[fcA]('"')!=-1)a=a[fcu](fcKa,"&quot;");return a}},fcHa=/&/g,fcIa=/</g,fcJa=/>/g,fcKa=/\"/g,fcLa=
/[&<>\"]/,fcNa=function(a,b){return a[fcA](b)!=-1},fcPa=function(a,b){var c=0;a=fcFa(fch(a))[fcw](".");b=fcFa(fch(b))[fcw](".");for(var d=fcl.max(a[fcr],b[fcr]),f=0;c==0&&f<d;f++){var i=a[f]||"",h=b[f]||"",j=new RegExp("(\\d*)(\\D*)","g"),k=new RegExp("(\\d*)(\\D*)","g");do{var l=j.exec(i)||["","",""],e=k.exec(h)||["","",""];if(l[0][fcr]==0&&e[0][fcr]==0)break;c=l[1][fcr]==0?0:fcba(l[1],10);var g=e[1][fcr]==0?0:fcba(e[1],10);c=fcOa(c,g)||fcOa(l[2][fcr]==0,e[2][fcr]==0)||fcOa(l[2],e[2])}while(c==0)}return c},
fcOa=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};fcEa();var fcY,fcQa,fcRa,fcSa,fcTa,fcUa,fcVa,fcWa,fcXa,fcYa,fcZa=function(){return fcT.navigator?fcT.navigator.userAgent:fcc},fc_a=function(){return fcT.navigator},fc0a=function(){fcUa=fcTa=fcSa=fcRa=fcQa=fcY=fcd;var a;if(a=fcZa()){var b=fc_a();fcY=a[fcA]("Opera")==0;fcQa=!fcY&&a[fcA]("MSIE")!=-1;fcSa=(fcRa=!fcY&&a[fcA]("WebKit")!=-1)&&a[fcA]("Mobile")!=-1;fcUa=(fcTa=!fcY&&!fcRa&&b.product=="Gecko")&&b.vendor=="Camino"}};fc0a();
var fc1a=fcY,fcZ=fcQa,fc2a=fcTa,fc_=fcRa,fc3a=fcSa,fc4a=function(){var a=fc_a();return a&&a.platform||""},fc5a=fc4a(),fc6a=function(){fcVa=fcNa(fc5a,"Mac");fcWa=fcNa(fc5a,"Win");fcXa=fcNa(fc5a,"Linux");fcYa=!!fc_a()&&fcNa(fc_a().appVersion||"","X11")};fc6a();
var fc7a=function(){var a="",b;if(fc1a&&fcT.opera){a=fcT.opera.version;a=typeof a=="function"?a():a}else{if(fc2a)b=/rv\:([^\);]+)(\)|;)/;else if(fcZ)b=/MSIE\s+([^\);]+)(\)|;)/;else if(fc_)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(fcZa()))?a[1]:""}return a},fc8a=fc7a(),fc9a={},fc$a=function(a){return fc9a[a]||(fc9a[a]=fcPa(fc8a,a)>=0)};var fcab=/\s*;\s*/,fcbb=function(a,b,c,d,f){if(/[;=]/[fcha](a))fca(Error('Invalid cookie name "'+a+'"'));if(/;/[fcha](b))fca(Error('Invalid cookie value "'+b+'"'));fcwa(c)||(c=-1);f=f?";domain="+f:"";d=d?";path="+d:"";if(c<0)c="";else if(c==0){c=new Date(1970,1,1);c=";expires="+c.toUTCString()}else{c=new Date((new Date).getTime()+c*1000);c=";expires="+c.toUTCString()}fck.cookie=a+"="+b+f+d+c},fccb=function(a,b){a=a+"=";for(var c=fch(fck.cookie)[fcw](fcab),d=0,f;f=c[d];d++)if(f[fcA](a)==0)return f.substr(a[fcr]);
return b},fcdb=function(a,b,c){var d=fcwa(fccb(a));fcbb(a,"",0,b,c);return d};var fceb=function(a,b,c){if(a[fcA])return a[fcA](b,c);if(Array[fcA])return Array[fcA](a,b,c);for(c=c=c==fcc?0:c<0?fcl.max(0,a[fcr]+c):c;c<a[fcr];c++)if(c in a&&a[c]===b)return c;return-1},fcfb=function(a,b,c){if(a[fcoa])a[fcoa](b,c);else if(Array[fcoa])Array[fcoa](a,b,c);else for(var d=a[fcr],f=fcAa(a)?a[fcw](""):a,i=0;i<d;i++)i in f&&b[fcD](c,f[i],i,a)},fcgb=function(a,b){if(a[fcsa])return a[fcsa](b);return fceb(a,b)>-1},fchb=function(a){if(fcya(a)=="array")return a.concat();else{for(var b=[],c=
0,d=a[fcr];c<d;c++)b[c]=a[c];return b}};var fcib=function(a,b){this.x=fcwa(a)?a:0;this.y=fcwa(b)?b:0};fcib[fc].clone=function(){return new fcib(this.x,this.y)};fcda(fcib[fc],function(){return"("+this.x+", "+this.y+")"});var fc0=function(a,b){fcm(this,a);fco(this,b)};fc0[fc].clone=function(){return new fc0(this[fcs],this[fcP])};fcda(fc0[fc],function(){return"("+this[fcs]+" x "+this[fcP]+")"});fc0[fc].ceil=function(){fcm(this,fcl.ceil(this[fcs]));fco(this,fcl.ceil(this[fcP]));return this};fc0[fc].floor=function(){fcm(this,fcl.floor(this[fcs]));fco(this,fcl.floor(this[fcP]));return this};fc0[fc].round=function(){fcm(this,fcl[fct](this[fcs]));fco(this,fcl[fct](this[fcP]));return this};
fc0[fc].scale=function(a){this.width*=a;this.height*=a;return this};var fcjb=function(a,b,c){for(var d in a)b[fcD](c,a[d],d,a)},fckb=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},fclb=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},fcmb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fcnb=function(a){for(var b,c,d=1;d<arguments[fcr];d++){c=arguments[d];for(b in c)a[b]=c[b];for(var f=0;f<fcmb[fcr];f++){b=fcmb[f];if(fcj[fc].hasOwnProperty[fcD](c,b))a[b]=c[b]}}};var fcob=function(a){return fcAa(a)?fck[fcx](a):a},fcpb=fcob,fcrb=function(a,b,c){return fcqb(fck,a,b,c)},fcqb=function(a,b,c,d){d=d||a;b=b&&b!="*"?b[fcR]():"";if(d.querySelectorAll&&(b||c)&&(!fc_||a.compatMode=="CSS1Compat"||fc$a("528"))){c=b+(c?"."+c:"");return d.querySelectorAll(c)}if(c&&d.getElementsByClassName){a=d.getElementsByClassName(c);if(b){d={};for(var f=0,i=0,h;h=a[i];i++)if(b==h.nodeName[fcR]())d[f++]=h;fcea(d,f);return d}else return a}a=d.getElementsByTagName(b||"*");if(c){d={};for(i=
f=0;h=a[i];i++){b=h.className;if(typeof b[fcw]=="function"&&fcgb(b[fcw](" "),c))d[f++]=h}fcea(d,f);return d}else return a},fctb=function(a,b){fcjb(b,function(c,d){if(d=="style")a[fcB].cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in fcsb)a[fcK](fcsb[d],c);else a[d]=c})},fcsb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},
fcub=function(a){var b=a[fcv];if(fc_&&!fc$a("500")&&!fc3a){if(typeof a.innerHeight=="undefined")a=fci;b=a.innerHeight;var c=a[fcv].documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new fc0(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!fc1a||fc1a&&fc$a("9.50"))?b.documentElement:b[fcma];return new fc0(a.clientWidth,a.clientHeight)},fc1=function(){return fcvb(fck,arguments)},fcvb=function(a,b){var c=b[0],d=b[1];if(fcZ&&d&&(d[fcN]||d[fcra])){c=["<",c];d[fcN]&&c[fcq](' name="',fcMa(d[fcN]),
'"');if(d[fcra]){c[fcq](' type="',fcMa(d[fcra]),'"');d=fcU(d);delete d[fcra]}c[fcq](">");c=c[fcva]("")}var f=a[fcG](c);if(d)if(fcAa(d))f.className=d;else fctb(f,d);if(b[fcr]>2){function i(h){if(h)f[fcp](fcAa(h)?a.createTextNode(h):h)}for(d=2;d<b[fcr];d++){c=b[d];fcza(c)&&!(fcBa(c)&&c.nodeType>0)?fcfb(fcwb(c)?fchb(c):c,i):i(c)}}return f},fcxb=function(a,b){a[fcp](b)},fcyb=function(a){return a&&a[fcO]?a[fcO].removeChild(a):fcc},fczb=function(a,b){var c=b[fcO];c&&c.replaceChild(a,b)},fcAb=fc_&&fc$a("522"),
fcBb=function(a,b){if(typeof a[fcsa]!="undefined"&&!fcAb&&b.nodeType==1)return a==b||a[fcsa](b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[fcO];return b==a},fcwb=function(a){if(a&&typeof a[fcr]=="number")if(fcBa(a))return typeof a.item=="function"||typeof a.item=="string";else if(fcya(a)=="function")return typeof a.item=="function";return fcd},fcCb=function(a){this.Va=a||fcT[fcv]||fck};fcCb[fc].createElement=function(a){return this.Va[fcG](a)};
fcCb[fc].createTextNode=function(a){return this.Va.createTextNode(a)};fcCb[fc].appendChild=fcxb;fcCb[fc].removeNode=fcyb;fcCb[fc].replaceNode=fczb;fcCb[fc].contains=fcBb;var fcDb="StopIteration"in fcT?fcT.StopIteration:Error("StopIteration"),fcEb=function(){};fcEb[fc].next=function(){fca(fcDb)};fcEb[fc].__iterator__=function(){return this};var fc2=function(a){this.h={};this.d=[];var b=arguments[fcr];if(b>1){if(b%2)fca(Error("Uneven number of arguments"));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.Ka(a)};fc2[fc].n=0;fc2[fc].B=0;fc2[fc].ra=function(){return this.n};fc2[fc].X=function(){this.C();for(var a=[],b=0;b<this.d[fcr];b++){var c=this.d[b];a[fcq](this.h[c])}return a};fc2[fc].H=function(){this.C();return this.d.concat()};fc2[fc].Ra=function(a){return fcFb(this.h,a)};
fc2[fc].clear=function(){this.h={};fcea(this.d,0);this.B=this.n=0};fc2[fc].remove=function(a){if(fcFb(this.h,a)){delete this.h[a];this.n--;this.B++;this.d[fcr]>2*this.n&&this.C();return fcb}return fcd};fc2[fc].C=function(){if(this.n!=this.d[fcr]){for(var a=0,b=0;a<this.d[fcr];){var c=this.d[a];if(fcFb(this.h,c))this.d[b++]=c;a++}fcea(this.d,b)}if(this.n!=this.d[fcr]){var d={};for(b=a=0;a<this.d[fcr];){c=this.d[a];if(!fcFb(d,c)){this.d[b++]=c;d[c]=1}a++}fcea(this.d,b)}};
fc2[fc].get=function(a,b){if(fcFb(this.h,a))return this.h[a];return b};fc2[fc].set=function(a,b){if(!fcFb(this.h,a)){this.n++;this.d[fcq](a);this.B++}this.h[a]=b};fc2[fc].Ka=function(a){var b;if(a instanceof fc2){b=a.H();a=a.X()}else{b=fclb(a);a=fckb(a)}for(var c=0;c<b[fcr];c++)this.set(b[c],a[c])};fc2[fc].clone=function(){return new fc2(this)};
fc2[fc].__iterator__=function(a){this.C();var b=0,c=this.d,d=this.h,f=this.B,i=this,h=new fcEb;h.next=function(){for(;1;){if(f!=i.B)fca(Error("The map has changed since the iterator was created"));if(b>=c[fcr])fca(fcDb);var j=c[b++];return a?j:d[j]}};return h};var fcFb=function(a,b){return fcj[fc].hasOwnProperty[fcD](a,b)};var fcGb=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};fcGb[fc].clone=function(){return new fcGb(this.top,this[fcS],this[fcJ],this[fcC])};fcda(fcGb[fc],function(){return"("+this.top+"t, "+this[fcS]+"r, "+this[fcJ]+"b, "+this[fcC]+"l)"});fcGb[fc].contains=function(a){return fcHb(this,a)};fcGb[fc].expand=function(a,b,c,d){if(fcBa(a)){this.top-=a.top;this.right+=a[fcS];this.bottom+=a[fcJ];this.left-=a[fcC]}else{this.top-=a;this.right+=b;this.bottom+=c;this.left-=d}return this};
var fcHb=function(a,b){if(!a||!b)return fcd;if(b instanceof fcGb)return b[fcC]>=a[fcC]&&b[fcS]<=a[fcS]&&b.top>=a.top&&b[fcJ]<=a[fcJ];return b.x>=a[fcC]&&b.x<=a[fcS]&&b.y>=a.top&&b.y<=a[fcJ]};var fcIb=function(a,b,c,d){this.left=a;this.top=b;fcm(this,c);fco(this,d)};fcIb[fc].clone=function(){return new fcIb(this[fcC],this.top,this[fcs],this[fcP])};fcda(fcIb[fc],function(){return"("+this[fcC]+", "+this.top+" - "+this[fcs]+"w x "+this[fcP]+"h)"});fcIb[fc].contains=function(a){return a instanceof fcIb?this[fcC]<=a[fcC]&&this[fcC]+this[fcs]>=a[fcC]+a[fcs]&&this.top<=a.top&&this.top+this[fcP]>=a.top+a[fcP]:a.x>=this[fcC]&&a.x<=this[fcC]+this[fcs]&&a.y>=this.top&&a.y<=this.top+this[fcP]};var fcJb,fcKb,fcLb,fcMb,fcNb,fcOb,fcPb=function(){fcOb=fcNb=fcMb=fcLb=fcKb=fcJb=fcd;var a=fcZa();if(a)if(a[fcA]("Firefox")!=-1)fcJb=fcb;else if(a[fcA]("Camino")!=-1)fcKb=fcb;else if(a[fcA]("iPhone")!=-1||a[fcA]("iPod")!=-1)fcLb=fcb;else if(a[fcA]("Android")!=-1)fcMb=fcb;else if(a[fcA]("Chrome")!=-1)fcNb=fcb;else if(a[fcA]("Safari")!=-1)fcOb=fcb};fcPb();var fcRb=function(a,b,c){fcAa(b)?fcQb(a,c,b):fcjb(b,fcCa(fcQb,a))},fcQb=function(a,b,c){a[fcB][fcSb(c)]=b},fcTb=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a[fcv];if(c.defaultView&&c.defaultView.getComputedStyle)if(a=c.defaultView.getComputedStyle(a,""))return a[b];return fcc},fcUb=function(a,b,c){if(b instanceof fc0){c=b[fcP];b=b[fcs]}else{if(c==fcaa)fca(Error("missing height argument"));c=c}fcm(a[fcB],typeof b=="number"?fcl[fct](b)+"px":b);fco(a[fcB],typeof c=="number"?fcl[fct](c)+"px":
c)},fcVb=function(a){var b=fc1a&&!fc$a("10");if((fcTb(a,"display")||(a.currentStyle?a.currentStyle[fcta]:fcc)||a[fcB][fcta])!="none")return b?new fc0(a[fcka]||a.clientWidth,a[fcua]||a.clientHeight):new fc0(a[fcka],a[fcua]);var c=a[fcB],d=c[fcta],f=c.visibility,i=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";if(b){b=a[fcka]||a.clientWidth;a=a[fcua]||a.clientHeight}else{b=a[fcka];a=a[fcua]}c.display=d;c.position=i;c.visibility=f;return new fc0(b,a)},fcWb={},fcSb=function(a){return fcWb[a]||
(fcWb[a]=fch(a)[fcu](/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},fcXb=function(a,b){a[fcB].display=b?"":"none"};var fcYb={},fcZb={};var fc_b=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fci.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fci.focus&&a.focus()},fc0b=function(a,b){var c=fce[fcL][fcz]().communityId;fce.rpc[fcD](fcc,"signin",fcc,c,a,b)};fcW("goog.peoplesense.util.openPopup",fc_b);fcW("goog.peoplesense.util.finishSignIn",fc0b);var fc3b=function(a,b){var c=fc1b()+"/friendconnect/invite/friends",d=fcg(shindig.auth.getSecurityToken());fc2b(c,d,a,b)},fc2b=function(a,b,c,d){a+="?st="+b;if(c)a+="&customMessage="+fcg(c);if(d)a+="&customInviteUrl="+fcg(d);b=760;if(fcZ)b+=25;fc_b(a,fch(b),"515","friendconnect_invite")};fcW("goog.peoplesense.util.invite",fc3b);fcW("goog.peoplesense.util.inviteFriends",fc2b);var fc1b=function(){return fci.friendconnect_serverBase},fc4b=function(a,b,c){var d=fce[fcL][fcz]().psinvite||"";d=fc1b()+"/friendconnect/signin/home?st="+fcg(shindig.auth.getSecurityToken())+"&psinvite="+fcg(d);if(a)d+="&iframeId="+fcg(a);if(b)d+="&loginProvider="+b;if(c)d+="&subscribeOnSignin=1";fc_b(d)};fc0b=function(a,b){var c=fce[fcL][fcz]().communityId;fce.rpc[fcD](fcc,"signin",fcc,c,a,b)};
var fc5b=function(){var a=fce[fcL][fcz]().communityId;fce.rpc[fcD](fcc,"signout",fcc,a)},fc7b=function(a,b){a=fc1b()+"/friendconnect/settings/edit?st="+fcg(shindig.auth.getSecurityToken())+(a?"&iframeId="+fcg(a):"");if(b)a=a+"&"+b;fc6b(a)},fc8b=function(a){a=fc1b()+"/friendconnect/settings/siteProfile?st="+fcg(a);fc6b(a)},fc6b=function(a){var b=800,c=510;if(fcZ)b+=25;fc_b(a,fch(b),fch(c))},fc9b=function(a,b,c){var d=fcc;if(b=="text"){d=fc1("div",{"class":"gfc-button-text"},fc1("div",{"class":"gfc-icon"},
fc1("a",{href:"javascript:void(0);"},c)));a[fcp](d)}else if(b=="long"||b=="standard"){d=fc1("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc1("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc1("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc1("div",{"class":"gfc-button-base-pos"},fc1("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc1("div",{"class":"gfc-button-base-content"},fc1("div",{"class":"gfc-icon"},c))))));a[fcp](d);
if(b=="standard"){b=fc1("div",{"class":"gfc-footer-msg"},"with Google Friend Connect");a[fcp](fc1("br"));a[fcp](b)}}return d},fc$b=function(a,b){if(!a)fca("google.friendconnect.renderJoinButton: missing options");var c=a[fcB]||"standard",d=a.text;if(c=="standard")d=a.text||"Sign in";else if(c=="text"||c=="long")d=a.text||"Sign in with Friend Connect";var f=a.element;if(!f){f=a.id;if(!f)fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null");f=fcpb(f);if(!f)fca("google.friendconnect.renderSignInButton: element "+
a.id+" not found")}fcn(f,"");a=fc9b(f,c,d);fci[fcI]?a[fcI]("click",b,fcd):a.attachEvent("onclick",b)},fcac=function(a,b){b=b||fcV(fc4b,fcc,fcc,fcc,fcc);fc$b(a,b)},fcbc=function(a,b){fce.rpc[fcD](fcc,"putReloadViewParam",fcc,a,b);var c=fce.views.getParams();c[a]=b};fcW("goog.peoplesense.util.getBaseUrl",fc1b);fcW("goog.peoplesense.util.finishSignIn",fc0b);fcW("goog.peoplesense.util.signout",fc5b);fcW("goog.peoplesense.util.signin",fc4b);fcW("goog.peoplesense.util.editSettings",fc7b);
fcW("goog.peoplesense.util.editSSProfile",fc8b);fcW("goog.peoplesense.util.setStickyViewParamToken",fcbc);fcW("google.friendconnect.renderSignInButton",fcac);fcW("goog.peoplesense.util.userAgent.IE",fcZ);var fccc={},fcdc={},fc3=function(a){this.g=new fc2;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.Ab=(b?b.POSITION:"top")||"top";this.ac={allowAnonymousPost:a.allowAnonymousPost||fcd,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcZ&&!fc$a("7");this.fixedIeSizes=fcZ;fci[fcI]?fci[fcI]("resize",fcV(this.Ca,this),fcd):fci.attachEvent("onresize",fcV(this.Ca,this));this.Qa()};
fc3[fc].Qa=function(){if(!this.site)fca(new Error("Must supply site ID."));if(!this.snippetId)fca(new Error("Must supply a snippet ID."))};fc3[fc].b=10;fc3[fc].ja=1;fc3[fc].m="fc-friendbar-";fc3[fc].p=fc3[fc].m+"outer";fc3[fc].Fa=fc3[fc].p+"-shadow";fc3[fc].render=function(){fck.write(this.Za());var a=fcob(this.snippetId);fcn(a,this.F())};fc3[fc].$a=function(){var a=fcob(this.p);return a=fcVb(a)[fcs]};
fc3[fc].Ca=function(){for(var a=this.g.H(),b=0;b<a[fcr];b++)this.Nb(a[b]);goog&&fcYb&&fcZb&&fcec&&fcfc("resize")};fc3[fc].k=function(){return this.Ab};fc3[fc].c=function(a){return this.m+"shadow-"+a};fc3[fc].V=function(a){return this.m+"menus-"+a};fc3[fc].I=function(a){return this.m+a+"Target"};fc3[fc].T=function(a){return this.m+a+"Drawer"};fc3[fc].va=function(){return this.I("")};fc3[fc].wa=function(){return this.m+"wallpaper"};fc3[fc].sa=function(){return this.T("")};
fc3[fc].Za=function(){var a=fci.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",f=a+"shadow_tl.png",i=a+"shadow_tr.png",h=a+"shadow_br.png";a=a+"shadow_cr.png";var j=function(n,m){return fcZ?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+n+'", sizingMethod="scale");':"background-image: url("+n+");background-repeat: "+m+"; "},k="position:absolute; top:";if(this.k()!="top"){k="position:fixed; bottom:";if(this.absoluteBottom)k="position:absolute; bottom:"}var l=
c;if(this.k()!="top")l=b;var e=0,g=[];g[e++]='<style type="text/css">';if(this.k()!="top"&&this.absoluteBottom)g[e++]="html, body {height: 100%; overflow: auto; };";g[e++]="#"+this.p+" {";g[e++]="background:#E0ECFF;";g[e++]="left:0;";g[e++]="height: "+(fcZ?"35px;":"36px;");if(this.k()!="top"&&this.absoluteBottom)g[e++]="margin-right: 20px;";g[e++]="padding:0;";g[e++]=k+" 0;";g[e++]="width:100%;";g[e++]="z-index:5000;";g[e++]="}";g[e++]="#"+this.Fa+" {";g[e++]=j(l,"repeat-x");g[e++]="left:0;";g[e++]=
"height:"+this.b+"px;";if(this.k()!="top"&&this.absoluteBottom)g[e++]="margin-right: 20px;";g[e++]="padding:0;";g[e++]=k+(fcZ?"35px;":"36px;");g[e++]="width:100%;";g[e++]="z-index:4998;";g[e++]="}";g[e++]="."+this.sa()+" {";g[e++]="display: block;";g[e++]="padding:0;";g[e++]=k+(fcZ?"34px;":"35px;");g[e++]="z-index:4999;";g[e++]="}";g[e++]="."+this.wa()+" {";g[e++]="background: white;";g[e++]="height: 100%;";g[e++]="margin-right: "+this.b+"px;";g[e++]="}";g[e++]="."+this.va()+" {";g[e++]="border: "+
this.ja+"px solid #ccc;";g[e++]="height: 100%;";g[e++]="left: 0;";g[e++]="background-image: url("+fci.friendconnect_imageUrl+"/loading.gif);";g[e++]="background-position: center;";g[e++]="background-repeat: no-repeat;";g[e++]="}";g[e++]="."+this.c("cr")+" {";g[e++]=j(a,"repeat-y");g[e++]="height: 100%;";g[e++]="position:absolute;";g[e++]="right: 0;";g[e++]="top: 0;";g[e++]="width:"+this.b+"px;";g[e++]="}";g[e++]="."+this.c("bl")+" {";g[e++]=j(d,"no-repeat");g[e++]="height: "+this.b+"px;";g[e++]="position:absolute;";
g[e++]="width:"+this.b+"px;";g[e++]="}";g[e++]="."+this.c("tl")+" {";g[e++]=j(f,"no-repeat");g[e++]="height: "+this.b+"px;";g[e++]="position:absolute;";g[e++]="left:0px;";g[e++]="width:"+this.b+"px;";g[e++]="}";g[e++]="."+this.c("bc")+" {";g[e++]=j(c,"repeat-x");g[e++]="height: "+this.b+"px;";g[e++]="left: "+this.b+"px;";g[e++]="position:absolute;";g[e++]="right: "+this.b+"px;";g[e++]="}";g[e++]="."+this.c("tc")+" {";g[e++]=j(b,"repeat-x");g[e++]="height: "+this.b+"px;";g[e++]="left: "+this.b+"px;";
g[e++]="margin-left: "+this.b+"px;";g[e++]="margin-right: "+this.b+"px;";g[e++]="right: "+this.b+"px;";g[e++]="}";g[e++]="."+this.c("br")+" {";g[e++]=j(h,"no-repeat");g[e++]="height: "+this.b+"px;";g[e++]="position:absolute;";g[e++]="right: 0;";g[e++]="width: "+this.b+"px;";g[e++]="}";g[e++]="."+this.c("tr")+" {";g[e++]=j(i,"no-repeat");g[e++]="height: "+this.b+"px;";g[e++]="position:absolute;";g[e++]="right: 0;";g[e++]="top: 0;";g[e++]="width: "+this.b+"px;";g[e++]="}";g[e++]="</style>";return g[fcva]("")};
fc3[fc].F=function(){var a=['<div id="'+this.p+'"></div>','<div id="'+this.Fa+'"></div>','<div id="'+this.V(this.g.ra())+'"></div>'];return a[fcva]("")};fc3[fc].Ta=function(a,b,c,d){if(!this.g.Ra(a)){b=new fc4(this,a,b,c,d);c=this.g.ra();d=fcob(this.V(c));fcn(d,b.F()+'<div id="'+this.V(c+1)+'"></div>');this.g.set(a,b)}};fc3[fc].Z=function(a){(a=this.g.get(a))&&a.drawer&&fcXb(a.drawer,fcd)};fc3[fc].Db=function(a){if(a=this.g.get(a))a.rendered=fcd};
fc3[fc].refresh=function(){for(var a=this.g.H(),b=0;b<a[fcr];b++){var c=a[b];this.Z(c);this.Db(c)}};fc3[fc].xb=function(a){for(var b=this.g.X(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.Zb();break}}};fc3[fc].wb=function(a){for(var b=this.g.X(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.tb();break}}};fc3[fc].Nb=function(a){if((a=this.g.get(a))&&a.drawer&&a.aa()){a.R();a.oa();a.ia()}};
fc3[fc].Yb=function(a,b){var c=this.g.get(a);if(c){if(!c.drawer){c.drawer=fcob(this.T(c[fcN]));c.target=fcob(this.I(c[fcN]));c.sha_bc=fcrb("div",this.k()=="top"?this.c("bc"):this.c("tc"),c.drawer)[0];c.sha_cr=fcrb("div",this.c("cr"),c.drawer)[0]}for(var d=this.g.H(),f=0;f<d[fcr];f++){var i=d[f];a!=this.g.get()&&this.Z(i)}c.R(b);fcXb(c.drawer,fcb);fci.setTimeout(function(){c.ia();c.oa();c.render()},0)}};
var fc4=function(a,b,c,d,f){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=f||{};fco(this,this.skin.HEIGHT||"0");this.url=fci.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcc;this.loaded=this.rendered=fcd;this.R()};
fc4[fc].R=function(a){fcnb(this.constraints,a||{});fcnb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcC]&&this.constraints[fcS]){a=this.bar.$a();var b=this.constraints[fcC],c=this.constraints[fcS];a=a-(b+c);if(a%2){a-=1;this.skin.right+=1}fcm(this.skin,a);delete this.skin[fcC]}};
fc4[fc].ia=function(){if(this.drawer){if(this.skin[fcs]){var a=this.bar.ja,b=this.bar.b,c=fcZ?2:0;fcUb(this.target,this.skin[fcs],"");fcUb(this.sha_bc,this.skin[fcs]-b+2*a-c,"");this.skin.rightShadow?fcUb(this.drawer,this.skin[fcs]+b+2*a-c,""):fcUb(this.drawer,this.skin[fcs]+2*a-c,"")}if(this.skin[fcS])this.drawer[fcB].right=this.skin[fcS]+0+"px"}};
fc4[fc].oa=function(){if(fcZ&&this.drawer){var a=fcVb(this.target),b=a[fcs]-this.bar.b;a=a[fcP];if(b<0)b=0;this.sha_bc&&this.sha_bc[fcB]&&fcUb(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcB]&&fcUb(this.sha_cr,"",a)}};
fc4[fc].F=function(){var a="display:none;",b="position: relative; ",c="",d="",f="",i="",h=!!this.skin.rightShadow;if(!h){c+="display: none; ";f+="display: none; ";d+="right: 0px; ";i+="margin-right: 0px; "}for(var j in this.skin){var k=Number(this.skin[j]);if(h&&fcGa(j,"width")==0)k+=this.b;if(fcGa(j,"height")==0)b+=j+": "+k+"px; ";if(j!="rightShadow"){if(fcGa(j,"height")==0)k+=this.b;if(fcGa(j,"width")==0)k+=2;a+=j+": "+k+"px; "}if(fcZ&&fcGa(j,"width")==0){k-=h?2*this.b:this.b;d+=j+": "+k+"px; "}}if(fcZ&&
(this[fcP]|0)>0){h=(this[fcP]|0)+2;c+="height: "+h+"px; "}h=0;j=[];j[h++]='<div id="'+this.bar.T(this[fcN])+'"class="'+this.bar.sa()+'"style="'+a+'"> ';if(this.bar.k()=="bottom")j[h++]='<div class="'+this.bar.c("tl")+'"></div> <div class="'+this.bar.c("tc")+'"style="'+d+'"></div> <div class="'+this.bar.c("tr")+'"style="'+f+'"></div> ';j[h++]='<div style="'+b+'"> <div class="'+this.bar.wa()+'"style="'+i+'"><div id="'+this.bar.I(this[fcN])+'"class="'+this.bar.va()+'"></div> <div class="'+this.bar.c("cr")+
'"style="'+c+'"></div> </div> </div> ';if(this.bar.k()=="top")j[h++]='<div class="'+this.bar.c("bl")+'"></div> <div class="'+this.bar.c("bc")+'"style="'+d+'"></div> <div class="'+this.bar.c("br")+'"style="'+f+'"></div> ';j[h++]="</div> ";return j[fcva]("")};fc4[fc].Zb=function(){this.rendered=this.aa()};fc4[fc].tb=function(){this.loaded=this.aa()};fc4[fc].aa=function(){return!!this.drawer&&this.drawer[fcB][fcta]!="none"};
fc4[fc].render=function(){if(this.rendered==fcd){var a={};a.url=this.url;a.id=this.bar.I(this[fcN]);a.site=this.bar.site;a["view-params"]=fcU(this.bar.ac);if(this[fcN]=="profile")a["view-params"].profileId="VIEWER";this.skin&&fcnb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcN];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.Ab;fco(a,"1px");if(fccc&&fcdc&&fc5)this.id=fc5.render(a)}};fcW("google.friendconnect.FriendBar",fc3);var fcgc=function(){},fchc=function(){},fcic=function(){};fcX(fcic,fchc);var fcjc=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))this[b]=a[b];if(this.viewParams)for(var c in this.viewParams)if(/^FC_RELOAD_.*$/[fcha](c))this.viewParams[c]=fcc};fcjc[fc].render=function(a){var b=this;if(a){b.$b();this.bb(function(c){fcRb(a,"visibility","hidden");fcn(a,c);b.refresh(a,c);c=function(d){fcRb(d,"visibility","visible")};c=fcCa(c,a);fcca(c,500);b.chrome=a})}};fcjc[fc].bb=function(a){return this.gb(a)};
var fc6=function(a){fcjc[fcD](this,a);this.A="../../"};fcX(fc6,fcjc);fc6[fc].Ia="gfc_iframe_";fc6[fc].Ja="friendconnect";fc6[fc].pa="";fc6[fc].Da=fch(fcl[fct](2147483647*fcl[fcna]()));fc6[fc].Ob="rpc_relay.html";fc6[fc].N=function(a){this.A=a};fc6[fc].$b=function(){return this.pa=fch(fcl[fct](2147483647*fcl[fcna]()))};fc6[fc].U=function(){return this.Ia+this.pa+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc5.qa(this.communityId),d="post",f,i={};i.container=this.Ja;i.mid=this.id;i.nocache=fc5.zb;i.view=this.P;i.parent=fc5.J;if(this.debug)i.debug="1";if(this.specUrl)i.url=this.specUrl;if(this.communityId){f=fce[fcL][fcz]().profileId;i.communityId=this.communityId;var h=fce[fcL][fcz]().psinvite;if(h)i.psinvite=h;if(f)i.profileId=f}i.caller=fckc();i.rpctoken=this.Da;h=fcd;if(fc_||!fc5.ba[this.specUrl]&&this.viewParams){i["view-params"]=fce[fcH][fcga](this.viewParams);
h=fcb}if(this.prefs)i.prefs=fce[fcH][fcga](this.prefs);if(this.viewParams&&this.sendViewParamsToServer)i["view-params"]=fce[fcH][fcga](this.viewParams);if(this.locale)i.locale=this.locale;if(this.secureToken)i.st=this.secureToken;f=this.A+"ifr"+(this.hashData?"&"+this.hashData:"");if(fc5.cc!=1||h||c||this.secureToken){if(c)i.fcauth=c}else d="get";c=this.U();fclc(c,f,d,i,a,b,this.Da)};
var fc7=function(){this.i={};this.J="http://"+fck[fcy].host;this.P="default";this.zb=1;this.gc=0;this.dc="US";this.ec="en";this.fc=2147483647};fcX(fc7,fcgc);fc7[fc].r=fcjc;fc7[fc].t=new fcic;fc7[fc].Ea=function(a){this.zb=a};fc7[fc].na=function(a){this.cc=a};fc7[fc].ua=function(a){return"gadget_"+a};fc7[fc].s=function(a){return this.i[this.ua(a)]};fc7[fc].D=function(a){return new this.r(a)};fc7[fc].La=function(a){a.id=this.hb();this.i[this.ua(a.id)]=a};fc7[fc].yb=0;fc7[fc].hb=function(){return this.yb++};
var fcmc=function(){fc7[fcD](this)};fcX(fcmc,fc7);fcmc[fc].r=fc6;fcmc[fc].M=function(a){a[fcE](/^http[s]?:\/\//)||(a=fck[fcy][fcpa][fcE](/^[^?#]+\//)[0]+a);this.J=a};fcmc[fc].z=function(a){var b=this.t.ta(a);a.render(b)};var fcnc=function(){this.Ya={}};fcX(fcnc,fchc);fcnc[fc].Ma=function(a,b){this.Ya[a]=b;a=fck[fcx](b).className;if(!a&&a[fcr]==0)fck[fcx](b).className="gadgets-gadget-container"};fcnc[fc].ta=function(a){return(a=this.Ya[a.id])?fck[fcx](a):fcc};
var fc8=function(a){fc6[fcD](this,a);a=a||{};this.P=a.view||"profile"};fcX(fc8,fc6);fc8[fc].Pa="canvas.html";fc8[fc].Wa="/friendconnect/embed/";var fckc=function(){var a=fce[fcL][fcz]().canvas=="1"||fce[fcL][fcz]().embed=="1",b=fcc;if(a)b=fce[fcL][fcz]().caller;if(!b){a=fck[fcy];b=a.search[fcu](/([&?]?)psinvite=[^&]*(&?)/,function(c,d,f){return f?d:""});b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b}return b};fc8[fc].Vb=function(a){this.P=a};fc8[fc].Y=function(){return this.P};
fc8[fc].getBodyId=function(){return this.U()+"_body"};
fc8[fc].gb=function(a){var b=(fc5.ba[this.specUrl]||this.A)+this.Ob,c=this.U();fce.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c+'" style="width:100%;';if(this.viewParams.opaque)b+="background-color:white;";b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcP]?' height="'+this[fcP]+'"':"";b+=this[fcs]?' width="'+this[fcs]+'"':"";b+="></iframe>";if(this.showEmbedThis)b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+
this.divId+"'); return false;\">Embed this</a>";b+="</div>";a(b)};
fc8[fc].ab=function(){var a=fckc();a="canvas=1&caller="+fcg(a);var b=fce[fcL][fcz]().psinvite;if(b)a+="&psinvite="+fcg(b);a+="&site="+fcg(this.communityId);b=fcU(this.viewParams);if(b.skin!=fcc)for(var c=["BG_IMAGE","BG_COLOR","FONT_COLOR","BG_POSITION","BG_REPEAT","ANCHOR_COLOR","FONT_FACE","BORDER_COLOR","CONTENT_BG_COLOR","CONTENT_HEADLINE_COLOR","CONTENT_LINK_COLOR","CONTENT_SECONDARY_TEXT_COLOR","CONTENT_SECONDARY_LINK_COLOR","CONTENT_TEXT_COLOR","ENDCAP_BG_COLOR","ENDCAP_LINK_COLOR","ENDCAP_TEXT_COLOR",
"CONTENT_VISITED_LINK_COLOR","ALTERNATE_BG_COLOR"],d=0;d<c[fcr];d++)delete b.skin[c[d]];b=fcg(fce[fcH][fcga](b));b=b[fcu]("\\","%5C");return fc5.J+this.Pa+"?url="+fcg(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].v=function(a){a=a||fcf+this.Wa+this.communityId;return this.cb(a,"embed=1")};fc8[fc].u=function(a){return'<iframe src="'+this.v(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].cb=function(a,b){var c=fcg(fce[fcH][fcga](this.viewParams));c=c[fcu]("\\","%5C");return a+"?url="+fcg(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].kb=function(){var a=fce[fcL][fcz]().canvas=="1"||fce[fcL][fcz]().embed=="1",b=fcc;if(a)(b=fce[fcL][fcz]().caller)||(b="javascript:history.go(-1)");return b};fc8[fc].lb=function(a){var b=fcc;if(a=="canvas")b=this.ab();else if(a=="profile")b=this.kb();return b};
var fc9=function(){fcmc[fcD](this);fce.rpc[fcQ]("signin",this.signin);fce.rpc[fcQ]("signout",this.signout);fce.rpc[fcQ]("resize_iframe",this.Rb);fce.rpc[fcQ]("set_title",this.setTitle);fce.rpc[fcQ]("requestNavigateTo",fcoc);fce.rpc[fcQ]("api_loaded",this.Oa);fce.rpc[fcQ]("createFriendBarMenu",this.Sa);fce.rpc[fcQ]("showFriendBarMenu",this.Xb);fce.rpc[fcQ]("hideFriendBarMenu",this.pb);fce.rpc[fcQ]("putReloadViewParam",this.Bb);fce.rpc[fcQ]("getViewParams",this.Ua);fce.rpc[fcQ]("openLightboxIframe",
fcpc);fce.rpc[fcQ]("showMemberProfile",fcqc);fce.rpc[fcQ]("closeLightboxIframe",fcV(this.q,this));fce.rpc[fcQ]("setLightboxIframeTitle",fcV(this.Sb,this));fce.rpc[fcQ]("refreshAndCloseIframeLightbox",fcV(this.Cb,this));var a=fcrc;a[fcQ]();a.Ha(this,"load",this.nb);a.Ha(this,"start",this.ob);this.A="../../";this.M("");this.Ea(0);this.na(0);this.t=new fcnc;this.apiVersion="0.8";this.openSocialSecurityToken=this.openSocialSiteId=fcc;this.L="";this.ma={};this.sb=fcc;this.rb=fcd;this.vb=this.lastIframeLightboxOpenArguments=
this.lastLightboxCallback=this.lastLightboxDialog=fcc};fcX(fc9,fcmc);fc9[fc].r=fc8;fc9[fc].ba={};
var fcsc=function(a,b){var c=b?b:fci.top;b=c.frames;try{if(c.frameElement.id==a)return c}catch(d){}for(c=0;c<b[fcr];++c){var f=fcsc(a,b[c]);if(f)return f}return fcc},fclc=function(a,b,c,d,f,i,h){var j="gfc_load_"+a;b="<html><head><style type=\"text/css\">body {background:transparent;}</style></head><body><form onsubmit='return false;' style='margin:0;padding:0;' id='"+j+"' method='"+c+"' ' action='"+b+"'>";for(var k in d)b+="<input type='hidden' name='"+k+"' value='' >";b+="</form></body></html>";
c=fcsc(a);var l;try{l=c[fcv]||c.contentWindow[fcv]}catch(e){if(f&&i){fcn(f,"");fcn(f,i);c=fcsc(a);l=c[fcv]||c.contentWindow[fcv]}}h&&fce.rpc.setAuthToken(a,h);l.open();l.write(b);l.close();a=l[fcx](j);for(k in d)a[k].value=d[k];a.submit()};fc9[fc].Xa=function(){var a=fce[fcL][fcz]().fcsite,b=fce[fcL][fcz]().fcprofile;a&&b&&fc5.ha(b,a)};fc9[fc].Qb=function(a,b){this.ba[a]=b};
fc9[fc].K=function(){var a=/Version\/3\..*Safari/;if(a=fc_&&fcZa()[fcE](a))fck[fcy].reload();else{fc5.e!=fcc&&fc5.e.refresh();for(var b in fc5.i){a=fc5.i[b];this.z(a)}if(this.lastIframeLightboxOpenArguments!=fcc){b=this.lastIframeLightboxOpenArguments;this.q();this.ca[fcM](this,b)}}};fc9[fc].M=function(a){a[fcE](/^http[s]?:\/\//)||(a=a&&a[fcr]>0&&a.substring(0,1)=="/"?fck[fcy][fcpa][fcE](/^http[s]?:\/\/[^\/]+\//)[0]+a.substring(1):fck[fcy][fcpa][fcE](/^[^?#]+\//)[0]+a);this.J=a};
fc9[fc].S=function(a){return"fcauth"+a};fc9[fc].W=function(a){return"fcauth"+a+"-s"};fc9[fc].qa=function(a){return a=fccb(this.S(a))||fccb(this.W(a))||this.ma[a]||""};fc9[fc].N=function(a){this.A=a};fc9[fc].Ub=function(a){this.L=a};fc9[fc].D=function(a){a=new this.r(a);a.N(this.A);return a};fc9[fc].Y=function(){return this.P};fc9[fc].Tb=function(a){this.vb=a};var fc$=function(a){return fcba(a[fcE](/_([0-9]+)$/)[1],10)};
fc9[fc].O=function(a,b,c,d,f,i){if(!this.bc){this.Q(fci.friendconnect_serverBase+"/friendconnect/styles/container.css?v="+this.L);this.bc=fcb}var h=fctc(d);if(this.sb!=(h?"rtl":"ltr")){this.Q(fci.friendconnect_serverBase+"/friendconnect/styles/lightbox"+(h?"-rtl":"")+".css?v="+this.L);this.sb=h?"rtl":"ltr"}if(!this.rb){this.Na(fci.friendconnect_serverBase+"/friendconnect/script/lightbox.js?v="+this.L);this.rb=fcb}b=b||0;if(goog.ui&&goog.ui[fcla]){this.q();b=new goog.ui[fcla](fcc,fcb);var j=this;goog.events.listen(b,
goog.ui[fcla].EventType.AFTER_HIDE,function(){j.lastLightboxCallback&&j.lastLightboxCallback();j.la()});b.setDraggable(fcb);b.setDisposeOnHide(fcb);b.setBackgroundElementOpacity(0.5);b.setButtonSet(new goog.ui[fcla].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c;c=b.getDialogElement();f=f||702;fcRb(c,"width",fch(f)+"px");i&&fcRb(c,"height",fch(i)+"px");a(b);b.getDialogElement()[fcB].direction=h?"rtl":"ltr"}else if(b<5){b++;a=fcV(this.O,this,a,b,c,d,f,i);fcca(a,1000)}else{this.la();
fca(Error("lightbox.js failed to load"))}};fc9[fc].q=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=fcc;if(b!=fcc){this.lastLightboxDialog.dispatchEvent(goog.ui[fcla].EventType.AFTER_HIDE);b.dispose();c!=fcc&&c(a)}};fc9[fc].la=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc};fc9[fc].Sb=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};fc9[fc].Cb=function(){this.q();this.K()};
var fcoc=function(a,b){var c=fc$(this.f);c=fc5.s(c);var d=fcU(c.originalParams);if(b){d["view-params"]=d["view-params"]||{};d["view-params"]=b}d.locale=c.locale;if(c.useLightBoxForCanvas){d.presentation=a;this.lastLightboxDialog!=fcc?fc5.q():fc5.Ga(d)}else if((a=c.lb(a))&&fck[fcy][fcpa]!=a)if(fce[fcL][fcz]().embed=="1")try{fci.parent.location=a}catch(f){fci.top.location=a}else fck[fcy].href=a};
fc9[fc].Ga=function(a,b){a=a||{};var c=a.locale,d=fctc(c),f=this;this.q();this.O(function(i){var h=fc1("div",{},fc1("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc1("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));i.getTitleTextElement()[fcp](fc1("div",{id:"gfc-canvas-title",style:"color:#000000;"})),i.getContentElement()[fcp](h);i.setVisible(fcb);h=fcU(a);var j=fcub(fci),k=fcl[fct](j[fcP]*0.7);j={};j.BORDER_COLOR="#cccccc";j.ENDCAP_BG_COLOR="#e0ecff";
j.ENDCAP_TEXT_COLOR="#333333";j.ENDCAP_LINK_COLOR="#0000cc";j.ALTERNATE_BG_COLOR="#ffffff";j.CONTENT_BG_COLOR="#ffffff";j.CONTENT_LINK_COLOR="#0000cc";j.CONTENT_TEXT_COLOR="#333333";j.CONTENT_SECONDARY_LINK_COLOR="#7777cc";j.CONTENT_SECONDARY_TEXT_COLOR="#666666";j.CONTENT_HEADLINE_COLOR="#333333";h.id="gadget-lb-canvas";fco(h,fcl.min(498,k)+"px");h.maxHeight=k;if(h.keepMax){fco(h,k);fcRb(i.getContentElement(),"height",k+35+"px")}h["view-params"]=h["view-params"]||{};h["view-params"].opaque=fcb;h["view-params"].skin=
h["view-params"].skin||{};fcDa(h["view-params"].skin,j);f.render(h);k={};k.id="gadget-signin";k.presentation="canvas";k.site=h.site;k.titleDivId="gfc-canvas-title";k["view-params"]={};k["view-params"].opaque=fcb;k.keepMax=h.keepMax;h=fcU(j);h.ALIGNMENT=d?"left":"right";f.Aa(k,h);i.reposition()},fcaa,b,c)};fc9[fc].Xb=function(a,b){fc5.e!=fcc&&fc5.e.Yb(a,b)};fc9[fc].pb=function(a){fc5.e!=fcc&&fc5.e.Z(a)};
var fcpc=function(a,b,c,d,f,i,h,j,k){var l=this,e=this.f;a=a+(a[fcA]("?")>=0?"&":"?")+"iframeId="+e;fc5.ca(a,b,c,d,f,i,h,j,k,l.callback)};
fc9[fc].ca=function(a,b,c,d,f,i,h,j,k,l){for(var e=[],g=0;g<arguments[fcr]&&g<9;g++)e[fcq](arguments[g]);if(!a[0]=="/")fca(new Error("lightbox iframes must be relative to fc server"));var n=this,m=i?fcU(i):{},p=fch(fcl[fct](2147483647*fcl[fcna]())),o="gfc_lbox_iframe_"+p;fce.rpc.setAuthToken(o,p);if(!b)b=fc5.openSocialSecurityToken;var r=fc5.openSocialSiteId;fc5.O(function(q){n.lastIframeLightboxOpenArguments=e;var t="st="+fcg(b)+"&parent="+fcg(fc5.J)+"&rpctoken="+fcg(p);if(!j){m.iframeId=o;m.iurl=
a;a=fcf+"/friendconnect/lightbox"}var u=d-54,s='<iframe id="'+o;s+='" width="100%" height="'+u+'" frameborder="0" scrolling="auto"></iframe>';q.setContent(s);f&&q.setTitle(f);q.setVisible(fcb);k||(m.fcauth=fc5.qa(r));a+=(a[fcA]("?")>=0?"&":"?")+t+"&communityId="+r;fclc(o,a,"POST",m,fcc,fcc,fcc)},fcc,l,fcc,c,d)};fc9[fc].Ua=function(){var a=fc$(this.f);a=fc5.s(a);return a.viewParams};fc9[fc].Bb=function(a,b){var c=fc$(this.f);c=fc5.s(c);c.viewParams[a]=b};fc9[fc].nb=function(a,b){fc5.e!=fcc&&fc5.e.wb(b)};
fc9[fc].ob=function(a,b){fc5.e!=fcc&&fc5.e.xb(b)};fc9[fc].Sa=function(a,b,c,d){fc5.e!=fcc&&fc5.e.Ta(a,b,c,d)};fc9[fc].z=function(a){var b=this.t.ta(a);a.render(b);this.t.postProcessGadget&&this.t.postProcessGadget(a)};fc9[fc].signout=function(a){fc5.za(fc5.S(a));fc5.za(fc5.W(a));fc5.ma={};fc5.K();return fcd};fc9[fc].za=function(a){var b=fck[fcy].pathname;b=b[fcw]("/");for(var c=0;c<b[fcr];c++){for(var d=new Array(c+1),f=0;f<c+1;f++)d[f]=b[f];fcdb(a,d[fcva]("/")+"/")}};
fc9[fc].Rb=function(a){var b=fck[fcx](this.f);if(b&&a>0)fco(b[fcB],a+"px");if((b=fck[fcx](this.f+"_body"))&&a>0)fco(b[fcB],a+"px");b=fc$(this.f);var c=fc5.s(b);if(c){if((b=fck[fcx](c.divId))&&a>0){if(c[fcqa]&&c[fcqa]<a){a=c[fcqa];b[fcB].overflowY="auto"}fco(b[fcB],a+"px")}!c.keepMax&&c.Y()=="canvas"&&fc5.lastLightboxDialog&&fc5.lastLightboxDialog.reposition()}fcRb(c.chrome,"visibility","visible")};fc9[fc].setTitle=function(a){var b=fc$(this.f);b=fc5.s(b);if(b=b.titleDivId)fcn(fck[fcx](b),fce[fcL].escapeString(a))};
fc9[fc].signin=function(a,b,c){fcbb(fc5.S(a),b,31104000,c);fcbb(fc5.W(a),b,-1,c);fc5.ma[a]=b;fc5.K()};var fcvc=function(a){fc$b(a,fcuc)};fc9[fc].Ib=function(a,b){b&&this.j(b,a);b={};b.url=fcf+"/friendconnect/gadgets/members.xml";this.render(this.o(a,b))};fc9[fc].Kb=function(a,b){b&&this.j(b,a);b={};b.url=fcf+"/friendconnect/gadgets/review.xml";b["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.o(a,b))};
fc9[fc].da=function(a,b){b&&this.j(b,a);b={};b.url=fcf+"/friendconnect/gadgets/wall.xml";b["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.o(a,b))};fc9[fc].Aa=function(a,b){b&&this.j(b,a);b={};b.url=fcf+"/friendconnect/gadgets/signin.xml";fco(b,32);this.render(this.o(a,b))};
fc9[fc].Fb=function(a,b){b&&this.j(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=fcb;a.prefs.hints=fci.google_hints;b={};b.url=fcf+"/friendconnect/gadgets/ads.xml";fco(b,90);this.render(this.o(a,b))};fc9[fc].ga=function(a,b){if(a.id){b&&this.j(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.e=new fc3(a);this.e.render();b={};b.url=fcf+"/friendconnect/gadgets/friendbar.xml";a.id=this.e.p;fco(a,"1");this.render(this.o(a,b))}};fc9[fc].Hb=fc9[fc].ga;
fc9[fc].fa=function(a,b){a=a||{};a.url=fcf+"/friendconnect/gadgets/signin.xml";a.site=a.site||fce[fcL][fcz]().site;fco(a,32);this.ea(a,b)};fc9[fc].Gb=fc9[fc].fa;fc9[fc].Mb=fc9[fc].da;fc9[fc].j=function(a,b){var c=b["view-params"];if(!c){c={};b["view-params"]=c}c.skin=a};fc9[fc].o=function(a,b){var c=this.ya(b,a);if(b["view-params"]){b=b["view-params"];if(a["view-params"])b=this.ya(b,a["view-params"]);c["view-params"]=b}return c};fc9[fc].Jb=function(a,b){b&&this.j(b,a);this.render(a)};
fc9[fc].ya=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)if(typeof c[d]=="undefined")c[d]=a[d];return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.D({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcP],locale:a.locale||this.vb,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||typeof a.useLightBoxForCanvas=="undefined"&&fci.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcqa],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.Vb(a.presentation);this.La(b);this.t.Ma(b.id,a.id);fc5.z(b);return b.id};fc9[fc].Lb=function(a,b){a=a||{};a.presentation="canvas";this.Ba(a,b)};
fc9[fc].Ba=function(a,b,c){a=a||{};a.url=fce[fcL][fcz]().url;a.site=fce[fcL][fcz]().site||a.site;var d=fce[fcL][fcz]()["view-params"];if(d)a["view-params"]=fce[fcH].parse(decodeURIComponent(d));if(c){a["view-params"]=a["view-params"]||{};a["view-params"].useFixedHeight=fcb;fco(a["view-params"],c);b=b||{};b.HEIGHT=fch(c)}this.ea(a,b)};fc9[fc].ea=function(a,b){a=a||{};b&&this.j(b,a);if(fce[fcL][fcz]().canvas=="1")a.presentation="canvas";else if(fce[fcL][fcz]().embed=="1")a.presentation="embed";fc5.render(a)};
fc9[fc].mb=function(){var a=fce[fcL][fcz]().caller;if(a&&fck[fcy][fcpa]!=a&&a[fcr]>8&&(a.substr(0,7)[fcR]()=="http://"||a.substr(0,8)[fcR]()=="https://"))fck[fcy].href=a;else if(a=fce[fcL][fcz]().site)fck[fcy].href=fcf+"/friendconnect/directory/site?id="+a;else fci.history.go(-1)};fc9[fc].w="";fc9[fc].ib=function(){return this.w};fc9[fc].Pb=function(a){this.apiVersion=a};fc9[fc].Q=function(a){var b=fck[fcG]("link");b[fcK]("rel","stylesheet");b[fcK]("type","text/css");b[fcK]("href",a);fck.getElementsByTagName("head")[0][fcp](b)};
fc9[fc].Na=function(a){var b=fck[fcG]("script");b[fcK]("src",a);b[fcK]("type","text/javascript");fck.getElementsByTagName("head")[0][fcp](b)};fc9[fc].ka=function(a){if(fck[fcma])a();else fci[fcI]?fci[fcI]("load",a,fcd):fci.attachEvent("onload",a)};
fc9[fc].$=function(a){if(!a.site)fca("API not loaded, please pass in a 'site'");this.Q(fci.friendconnect_serverBase+"/friendconnect/styles/container.css?v="+this.L);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.ka(fcV(this.xa,this,a,"fc-opensocial-api"))};fc9[fc].ub=fc9[fc].$;fc9[fc].qb=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.xa(b,"gfc-"+a)};
fc9[fc].Eb=function(a){var b={};for(var c in this.i){var d=this.i[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.i=b;(a=fck[fcx]("gfc-"+a))&&a[fcO]&&a[fcO].removeChild&&a[fcO].removeChild(a)};fc9[fc].db=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].jb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcwc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcF][fcr];c++)a[fcF][c].selected&&b[fcq](a[fcF][c].value);c=a.getAttribute("x-max");try{c=1*c}catch(d){c=0}if(c&&b[fcr]>c&&a["x-selected"]){b=a["x-selected"];for(c=0;c<a[fcF][fcr];c++){a[fcF][c].selected=fcd;for(var f=0;f<b[fcr];f++)if(a[fcF][c].value==b[f]){a[fcF][c].selected=fcb;break}}}}else b=a[fcF][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fci.opensocial[fcja]&&fci.opensocial[fcja].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fci[c]&&typeof fci[c]=="function")fci[c](b);else if(a["x-onselect-fn"])a["x-onselect-fn"][fcM](a);else a["x-onselect-fn"]=new Function(c)};
fc9[fc].xa=function(a,b){fci.opensocial.template.Loader.loadContent(this.jb());fci.opensocial.template.Loader.loadContent(this.db());fci.opensocial[fcja].processDocumentMarkup();var c=fck[fcG]("div");c.id=b;fco(c[fcB],"0px");fcm(c[fcB],"0px");c[fcB].position="absolute";c[fcB].visibility="hidden";fck[fcma][fcp](c);b={};b.url=fcf+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fco(b,0);b.id=c.id;b.site=a.site;b["view-params"]=a["view-params"];this.render(b)};
fc9[fc].Oa=function(){fc5.w=this.f;fc5.openSocialSecurityToken=this.a[0];var a=fc5.openSocialSecurityToken;fci.opensocial[fcja].executeRequests();fci.opensocial.template.process();if(fc5.apiLoadedCallback){a=fcCa(fc5.apiLoadedCallback,a);fcca(a,0)}};fc9[fc].G=function(a){var b=fcc;for(var c in this.i)if(this.i[c].divId==a){b=this.i[c];break}return b};fc9[fc].v=function(a,b){a=this.G(a);var c=fcc;if(a)c=a.v(b);return c};fc9[fc].u=function(a,b){a=this.G(a);var c=fcc;if(a)c=a.u(b);return c};
fc9[fc].Wb=function(a,b){this.O(function(c){var d=fck.createTextNode("Copy & paste this code into your site.");c.getContentElement()[fcp](d);c.getContentElement()[fcp](fck[fcG]("br"));d=fc5.u(a,b);var f=fck[fcG]("textarea");fcn(f,d);f[fcK]("style","width:500px;");c.getContentElement()[fcp](f);c.setVisible(fcb)})};
var fcxc=["ar","dv","fa","iw","he","ku","pa","sd","tk","ug","ur","yi"],fctc=function(a){a=a;var b=fcd;if(a){a=a[fcw]("_")[0];b=fcgb(fcxc,a)}else b=(a=fcTb(fck[fcma],"direction"))&&a=="rtl";return b},fcqc=function(a){var b=this,c=fc$(b.f);c=fc5.s(c);fc5.ha(a,c.communityId,b.callback)};fc9[fc].ha=function(a,b,c){b=b||this.openSocialSiteId;a={keepMax:fcb,presentation:"canvas",url:fcf+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};this.Ga(a,c)};
fc9[fc].fb=function(a){var b=fcc;if((a=this.G(a))&&a.secureToken)b=a.secureToken;return b};fc9[fc].eb=function(a){var b=fcc;if((a=this.G(a))&&a.communityId)b=a.communityId;return b};var fcuc=function(a){fc5.w&&fc4b(fc5.w,a)},fcyc=function(){fc5.signout(fc5.openSocialSiteId)},fczc=function(){fc7b(fc5.w)},fcAc=function(a,b){fc3b(a,b)},fcec=function(){this.l={}};fcec[fc].register=function(){fce.rpc[fcQ]("subscribeEventType",fcBc);fce.rpc[fcQ]("publishEvent",fcfc)};
var fcBc=function(a){var b=fcrc;b.l[a]=b.l[a]||[];a=b.l[a];a[a[fcr]]={frameId:this.f}};fcec[fc].Ha=function(a,b,c){var d=this;d.l[b]=d.l[b]||[];b=d.l[b];b[b[fcr]]={container:a,callback:c}};var fcfc=function(a){var b=fcrc,c=0;if(this.f)c=fc$(this.f);b.l[a]=b.l[a]||[];b=b.l[a];for(var d=0;d<b[fcr];d++)b[d].container?b[d].callback[fcD](b[d].container,a,c):fce.rpc[fcD](b[d].frameId,a,fcc,a,c)},fcrc=new fcec,fc5=new fc9;fc5.ka(fc5.Xa);fcW("google.friendconnect.container",fc5);
fcW("google.friendconnect.container.refreshGadgets",fc5.K);fcW("google.friendconnect.container.setParentUrl",fc5.M);fcW("google.friendconnect.container.setServerBase",fc5.N);fcW("google.friendconnect.container.setServerVersion",fc5.Ub);fcW("google.friendconnect.container.createGadget",fc5.D);fcW("google.friendconnect.container.openLightboxIframe",fc5.ca);fcW("google.friendconnect.container.renderGadget",fc5.z);fcW("google.friendconnect.container.render",fc5.render);
fcW("google.friendconnect.container.goBackToSite",fc5.mb);fcW("google.friendconnect.container.renderMembersGadget",fc5.Ib);fcW("google.friendconnect.container.renderReviewGadget",fc5.Kb);fcW("google.friendconnect.container.renderCommentsGadget",fc5.da);fcW("google.friendconnect.container.renderSignInGadget",fc5.Aa);fcW("google.friendconnect.container.renderFriendBar",fc5.Hb);fcW("google.friendconnect.container.renderSocialBar",fc5.ga);
fcW("google.friendconnect.container.renderCanvasSignInGadget",fc5.Gb);fcW("google.friendconnect.container.renderUrlCanvasGadget",fc5.Lb);fcW("google.friendconnect.container.renderEmbedSignInGadget",fc5.fa);fcW("google.friendconnect.container.renderUrlEmbedGadget",fc5.Ba);fcW("google.friendconnect.container.renderEmbedGadget",fc5.ea);fcW("google.friendconnect.container.renderWallGadget",fc5.Mb);fcW("google.friendconnect.container.renderAdsGadget",fc5.Fb);
fcW("google.friendconnect.container.renderOpenSocialGadget",fc5.Jb);fcW("google.friendconnect.container.setNoCache",fc5.Ea);fcW("google.friendconnect.container.enableProxy",fc5.na);fcW("google.friendconnect.container.setDomain",fc5.Qb);fcW("google.friendconnect.container.setLocale",fc5.Tb);fcW("google.friendconnect.container.loadOpenSocialApi",fc5.ub);fcW("google.friendconnect.container.initOpenSocialApi",fc5.$);fcW("google.friendconnect.container.getOpenSocialApiIframeId",fc5.ib);
fcW("google.friendconnect.container.setApiVersion",fc5.Pb);fcW("google.friendconnect.container.getEmbedUrl",fc5.v);fcW("google.friendconnect.container.getEmbedHtml",fc5.u);fcW("google.friendconnect.container.getGadgetSecurityToken",fc5.fb);fcW("google.friendconnect.container.getGadgetCommunityId",fc5.eb);fcW("google.friendconnect.container.showEmbedDialog",fc5.Wb);fcW("google.friendconnect.container.showMemberProfile",fc5.ha);fcW("google.friendconnect.requestSignIn",fcuc);
fcW("google.friendconnect.requestSignOut",fcyc);fcW("google.friendconnect.requestSettings",fczc);fcW("google.friendconnect.requestInvite",fcAc);fcW("google.friendconnect.renderSignInButton",fcvc);fcW("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc5.qb);fcW("google.friendconnect.container.removeOpenSocialApiViaIframe",fc5.Eb);fcW("google.friendconnect.userAgent.WEBKIT",fc_);fcW("google.friendconnect.userAgent.IE",fcZ);fcW("google.friendconnect.PeopleSelectorOnChange",fcwc);
google.friendconnect.container.setServerBase('http://www.friendconnect.gmodules.com/ps/');google.friendconnect.container.setServerVersion('0.475.4');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ads.xml', 'http://t767uouk8skpac15v8ue0n16regb3m2t.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ask.xml', 'http://uofgf6lm45rimd9jp6hn983ul6n2en81.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/content_reveal.xml', 'http://n0mc7q283f00tpk3uifa7sjv4hmrults.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/chat.xml', 'http://4mmefl67as0q39gf1o4pnocubqmdgei0.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/donate.xml', 'http://7v4nflqvq38notsghmcr5a9t6o9g6kn4.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/lamegame.xml', 'http://ffbrstu9puk7qmt45got9mqe5k7ijrs4.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/map.xml', 'http://k0dfp8trn0hi5d2spmo7jmc88n6kr1cc.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'http://k830suiki828goudg9448o6bp0tpu5r3.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/poll.xml', 'http://1ivjd75aqp679vbgohjv74tlhn13rgdu.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'http://iqavu79a908u5vcecp0pq80hhbhkv33b.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/review.xml', 'http://r85jiaoot111joesr8bilfhfeslcc496.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/sample.xml', 'http://785aoao97uti9iqffknjp5e0kn2ljlm4.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6.friendconnect.gmodules.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
