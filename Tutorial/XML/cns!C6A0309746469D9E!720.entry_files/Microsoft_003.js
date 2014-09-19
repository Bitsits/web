// Copyright (c) Microsoft Corporation. All rights reserved.
Microsoft.Live.Core.Loader.onResourceAvailable('microsoft_live_core_channel',function(){
Type.registerNamespace('MLC');MLC.$create_MLCC$A=function(command,parameters){var $o={};$o.command=command;$o.parameters=parameters;return $o;}
MLC.IChannel=function(){};MLC.IChannel.registerInterface('MLC.IChannel');MLC.$create_MLCC$7=function(name){var $o={};$o.$0=name;$o.$1=null;$o.$2=null;return $o;}
MLC.MLCC$0=function(){};MLC.MLCC$0.registerInterface('MLC.MLCC$0');MLC.$create_MLCC$E=function(name,source,origin,message){var $o={};$o.$0=name;$o.$1=source;$o.$2=origin;$o.$3=message;return $o;}
MLC.ChannelType=function(){};MLC.ChannelType.prototype = {html:0,flash:1,direct:2,postMessage:3}
MLC.ChannelType.registerEnum('MLC.ChannelType',false);MLC.MLCC$B=function(callback){this.$0=callback;this.$1=3;this.$2=(50/this.$1);this.$3();}
MLC.MLCC$B.prototype={$0:null,$1:0,$2:0,$3:function(){if(this.$0.invoke()){this.$2*=this.$1;window.setTimeout(ss.Delegate.create(this,this.$3),Math.floor(this.$2));}}}
MLC.MLCC$C=function(name){this.$0=name;}
MLC.MLCC$C.$4=function($p0,$p1){var $0=new MLC.MLCC$C($p0);$0.$D($p1);return $0;}
MLC.MLCC$C.$5=function($p0){var $0=new MLC.MLCC$C($p0);$0.$E();return $0;}
MLC.MLCC$C.get_$7=function(){return MLC.MLCC$C.get_$9();}
MLC.MLCC$C.get_$8=function(){if(!MLC.MLCC$C.get_$9()||window.parent==null){return false;}try{var $0=window.parent.document.domain.toLowerCase();var $1=document.domain.toLowerCase();return $0===$1;}catch($2){return false;}}
MLC.MLCC$C.get_$9=function(){var $0=document.domain.toLowerCase();if($0==='live.com'&&MLC.MLCC$C.get_$A()){return true;}else if($0==='live-int.com'&&!MLC.MLCC$C.get_$A()){return true;}return false;}
MLC.MLCC$C.get_$A=function(){var $0=Microsoft.Live.Core.Loader.get_settings().environment;return ($0==='production')||$0.startsWith('dogfood');}
MLC.MLCC$C.prototype={$0:null,$1:null,add_$2:function($p0){this.$3=ss.Delegate.combine(this.$3,$p0);},remove_$2:function($p0){this.$3=ss.Delegate.remove(this.$3,$p0);},$3:null,add_connected:function($p0){this.add_$2($p0);if(this.get_$B()){$p0.invoke(this,ss.EventArgs.Empty);}},remove_connected:function($p0){this.remove_$2($p0);},add_messageReceived:function($p0){this.$6=ss.Delegate.combine(this.$6,$p0);},remove_messageReceived:function($p0){this.$6=ss.Delegate.remove(this.$6,$p0);},$6:null,sendMessage:function($p0){this.$10();var $0=this.$C();window.setTimeout(ss.Delegate.create(this,function(){
$0.$12($p0);}),1);},get_$B:function(){return (this.$1!=null)&&(this.$1.$1!=null)&&(this.$1.$2!=null);},$C:function(){if(this.$1.$2===this){return this.$1.$1;}else if(this.$1.$1===this){return this.$1.$2;}else{return null;}},$D:function($p0){MLC.MLCC$8.$4($p0,ss.Delegate.create(this,function(){
this.$1=MLC.MLCC$8.$5($p0,this.$0);this.$1.$1=this;this.$F();}));},$E:function(){MLC.MLCC$8.$3();this.$1=MLC.MLCC$8.$5(window.self,this.$0);this.$1.$2=this;this.$F();},$F:function(){if(this.get_$B()){var $0;$0=this.$1.$2;$0.$11();$0=this.$1.$1;$0.$11();}},$10:function(){if(!this.get_$B()){throw Error.invalidOperation('This operation cannot be performed until the channel is connected.');}},$11:function(){if(this.$3!=null){this.$3.invoke(this,ss.EventArgs.Empty);}},$12:function($p0){if(this.$6!=null){this.$6.invoke($p0);}}}
MLC.MLCC$8=function(){}
MLC.MLCC$8.$1=function($p0){try{return $p0['$dcRegistry'];}catch($0){return null;}}
MLC.MLCC$8.$2=function($p0,$p1){$p0['$dcRegistry'] = $p1;}
MLC.MLCC$8.$3=function(){if(MLC.MLCC$8.$1(window.self)==null){MLC.MLCC$8.$2(window.self,{});}}
MLC.MLCC$8.$4=function($p0,$p1){var $0=null;$0=function(){
if(MLC.MLCC$8.$1($p0)!=null){$p1.invoke();}else{window.setTimeout($0,5);}};$0.invoke();}
MLC.MLCC$8.$5=function($p0,$p1){var $0=MLC.MLCC$8.$1($p0);if($0==null){return null;}var $1=$0[$p1];if($1==null){$1=MLC.$create_MLCC$7($p1);$0[$p1]=$1;}return $1;}
MLC.MLCC$9=function(){this.$3=[];this.$4=[];}
MLC.MLCC$9.$8=function($p0,$p1,$p2,$p3){var $0=new MLC.MLCC$9();var $1=new Microsoft.Live.IfmFrame($p0,$p1,$p2,$p3,ss.Delegate.create($0,$0.$D));$0.$6=$1.channel;$0.$C();return $0;}
MLC.MLCC$9.$9=function($p0,$p1,$p2){var $0=new MLC.MLCC$9();var $1=new Microsoft.Live.IfmChannel($p0,$p1,$p2,ss.Delegate.create($0,$0.$D));$0.$6=$1.channel;return $0;}
MLC.MLCC$9.prototype={$3:null,$4:null,$5:0,$6:null,$7:false,add_connected:function($p0){this.$A=ss.Delegate.combine(this.$A,$p0);},remove_connected:function($p0){this.$A=ss.Delegate.remove(this.$A,$p0);},$A:null,add_messageReceived:function($p0){this.$B=ss.Delegate.combine(this.$B,$p0);},remove_messageReceived:function($p0){this.$B=ss.Delegate.remove(this.$B,$p0);},$B:null,$C:function(){var $0=new MLC.MLCC$B(ss.Delegate.create(this,function(){
if(this.$7){return false;}this.$11('$ConnectRequest');return true;}));},$D:function(){var $0=arguments.length;if($0===0){return;}if(this.$B==null){return;}var $1=arguments[0];switch($1){case '$ConnectRequest':this.$11('$Connect');if(!this.$7){this.$11('$ConnectRequest');}break;case '$Connect':this.$E();break;case '$Batch':for(var $2=1;$2<$0;$2++){var $3=arguments[$2];this.$4.enqueue($3);}this.$F();break;default:break;}},$E:function(){if(!this.$7){this.$7=true;if(this.$A!=null){this.$A.invoke(this,ss.EventArgs.Empty);}}},$F:function(){var $0=0;while(this.$4.length>0){var $1=this.$4.dequeue();this.$B.invoke($1);$0++;if($0>5&&this.$4.length>0){window.setTimeout(ss.Delegate.create(this,this.$F),1);break;}}},$10:function(){this.$5=0;this.$12(this.$3);},$11:function($p0){var $0=[];$0.enqueue($p0);this.$12($0);},$12:function($p0){if(this.$6==null){return;}var $0=this.$6.send;if($0==null){return;}$0.apply(this.$6,$p0);},sendMessage:function($p0){if(this.$5===0){this.$5=window.setTimeout(ss.Delegate.create(this,this.$10),1);this.$3.clear();this.$3.enqueue('$Batch');}this.$3.enqueue($p0);}}
MLC.MLCC$D=function(name,uniqueId,allowedDomain,parent){this.$2=String.format('{0}.{1}',name,uniqueId);var $0=Microsoft.Live.Core.Loader.get_settings().messenger.getResourceUrl('Channel.swf');var $1=window.location.hostname.toLowerCase();this.$5=parent;this.$3=new MLC.FlashObject($0,{name:this.$2,isParent:parent,srcDomain:$1,dstDomain:allowedDomain});this.$3.add_initialized(ss.Delegate.create(this,this.$D));this.$3.add_fsCommandReceived(ss.Delegate.create(this,this.$11));}
MLC.MLCC$D.$6=function($p0,$p1,$p2){var $0=new MLC.MLCC$D($p0,$p1,$p2,true);return $0;}
MLC.MLCC$D.$7=function($p0,$p1){var $0=MLC.MLCC$10.$0('WLIFMi');if(String.isNullOrEmpty($0)){throw Error.argument('Window must contain a WLIFMi parameter.');}var $1=new MLC.MLCC$D($p0,$0,$p1,false);return $1;}
MLC.MLCC$D.get_$8=function(){return Microsoft.Live.Core.Loader.isFlashInstalled(8)&&!Microsoft.Live.Core.Loader.get_settings().channel.flashDisabled;}
MLC.MLCC$D.prototype={$2:null,$3:null,$4:false,$5:false,add_connected:function($p0){this.$9=ss.Delegate.combine(this.$9,$p0);},remove_connected:function($p0){this.$9=ss.Delegate.remove(this.$9,$p0);},$9:null,add_messageReceived:function($p0){this.$A=ss.Delegate.combine(this.$A,$p0);},remove_messageReceived:function($p0){this.$A=ss.Delegate.remove(this.$A,$p0);},$A:null,sendMessage:function($p0){this.$C();this.$B($p0);},$B:function($p0){this.$3.setVariable('_root.channel.Variable',$p0);},$C:function(){if(!this.$4){throw Error.invalidOperation('The operation cannot be performed until the channel is connected.');}},$D:function($p0,$p1){if(this.$5){this.$E();}},$E:function(){var $0=new MLC.MLCC$B(ss.Delegate.create(this,function(){
if(this.$4){return false;}this.$B('$ConnectReq');return true;}));},$F:function(){if(!this.$4){this.$4=true;if(this.$9!=null){this.$9.invoke(this,ss.EventArgs.Empty);}}},$10:function($p0){if(this.$A!=null){this.$A.invoke($p0);}},$11:function($p0,$p1){switch($p1.get_value()){case '$ConnectReq':if(!this.$4){this.$B('$ConnectAck');this.$F();}break;case '$ConnectAck':this.$F();break;default:this.$10($p1.get_value());break;}}}
MLC.MLCC$11=function(){}
MLC.MLCC$11.$0=function($p0,$p1,$p2,$p3,$p4,$p5){switch(MLC.MLCC$11.$6()){case 3:var $0=MLC.MLCC$10.$1($p3);var $1=MLC.MLCC$11.$3($p2,$p1,$p3);return MLC.MLCC$12.$B($p0,$0,$1,$p3);case 2:var $2=MLC.MLCC$11.$3($p2,$p1,$p3);return MLC.MLCC$C.$4($p0,$2);case 1:$p2=MLC.MLCC$11.$4($p2,$p1,$p3);var $3=MLC.MLCC$10.$1($p3);var $4=MLC.MLCC$11.$3($p2,$p1,$p3);var $5=$p2.id;return MLC.MLCC$D.$6($p0,$5,$3);case 0:return MLC.MLCC$9.$8($p1,$p3,$p4,$p5);default:return null;}}
MLC.MLCC$11.$1=function($p0,$p1,$p2,$p3){switch(MLC.MLCC$11.$7()){case 3:return MLC.MLCC$12.$D($p0,$p2);case 2:return MLC.MLCC$C.$5($p0);case 1:return MLC.MLCC$D.$7($p0,$p2);case 0:return MLC.MLCC$9.$9($p1,$p2,$p3);default:return null;}}
MLC.MLCC$11.$2=function($p0,$p1,$p2){if(MLC.MLCC$12.get_$E()){var $0=MLC.MLCC$10.$1($p2);return MLC.MLCC$12.$C($p0,$0,$p1,$p2);}else{throw Error.notImplemented();}}
MLC.MLCC$11.$3=function($p0,$p1,$p2){$p0=MLC.MLCC$11.$4($p0,$p1,$p2);if($p0.contentWindow==null){throw Error.invalidOperation('The provided iframe must be attached to the document');}return $p0.contentWindow;}
MLC.MLCC$11.$4=function($p0,$p1,$p2){if($p0==null){$p0=MLC.MLCC$11.$5($p1,$p2);}return $p0;}
MLC.MLCC$11.$5=function($p0,$p1){var $0=document.getElementById($p0);if($0==null){return null;}var $1='ifm'+Math.floor(Math.random()*1024*1024);var $2='WLIFMi='+$1;var $3=($p1.indexOf('#')<0)?'#':'&';var $4=document.createElement('iframe');$4.frameBorder='0';$4.style.width='100%';$4.style.height='100%';$4.src=$p1+$3+$2;$4.id=$1;$0.appendChild($4);return $4;}
MLC.MLCC$11.$6=function(){if(MLC.MLCC$12.get_$E()){return 3;}else if(MLC.MLCC$C.get_$7()){return 2;}else if(MLC.MLCC$D.get_$8()){return 1;}else{return 0;}}
MLC.MLCC$11.$7=function(){if(MLC.MLCC$12.get_$E()){return 3;}else if(MLC.MLCC$C.get_$8()){return 2;}else if(MLC.MLCC$D.get_$8()){return 1;}else{return 0;}}
MLC.MLCC$12=function(name,targetWindow,targetUrl,allowedDomain,connectRequired){MLC.MLCC$12.$1B();this.$5=name;this.$7=targetWindow;this.$8=targetUrl;this.$6=allowedDomain;MLC.MLCC$12.$2.add(this);if(connectRequired){this.$21();}}
MLC.MLCC$12.$B=function($p0,$p1,$p2,$p3){$p3=MLC.MLCC$12.$12($p3);var $0=new MLC.MLCC$12($p0,$p2,$p3,$p1,true);return $0;}
MLC.MLCC$12.$C=function($p0,$p1,$p2,$p3){return MLC.MLCC$12.$B($p0,$p1,$p2,$p3);}
MLC.MLCC$12.$D=function($p0,$p1){var $0=new MLC.MLCC$12($p0,null,null,$p1,false);return $0;}
MLC.MLCC$12.get_$E=function(){return window.postMessage!=null;}
MLC.MLCC$12.$12=function($p0){$p0=$p0||String.Empty;var $0=$p0.indexOf('://');if($0>=0){$0=$p0.indexOf('/',$0+3);if($0>=0){$p0=$p0.substring(0,$0);}}return $p0;}
MLC.MLCC$12.$13=function(){var $0=window.event;if($0==null){return;}var $1=$0.origin;var $2=$0.data;var $3=$0.source;if(!MLC.MLCC$12.$14($1,$2,$3)){return;}var $4=MLC.MLCC$12.$17($2);var $5=MLC.MLCC$12.$18($2);if(String.isNullOrEmpty($4)){return;}MLC.MLCC$12.$4.enqueue(MLC.$create_MLCC$E($4,$3,$1,$5));window.setTimeout(MLC.MLCC$12.$19,1);}
MLC.MLCC$12.$14=function($p0,$p1,$p2){var $0=true;if(String.isNullOrEmpty($p0)){$0=false;}if(String.isNullOrEmpty($p1)){$0=false;}if($p2==null){$0=false;}return $0;}
MLC.MLCC$12.$15=function($p0,$p1){var $0=String.concat('<',$p0,'>',$p1);return $0;}
MLC.MLCC$12.$16=function($p0,$p1){var $0=MLC.MLCC$10.$1($p1);for(var $1=0;$1<MLC.MLCC$12.$2.length;$1++){var $2=MLC.MLCC$12.$2[$1];if(($2.$5===$p0)&&($2.$6===$0)){return $2;}}return null;}
MLC.MLCC$12.$17=function($p0){var $0=String.Empty;if($p0.charAt(0)==='<'){var $1=$p0.indexOf('>');if($1>0){$0=$p0.substring(1,$1);}}return $0;}
MLC.MLCC$12.$18=function($p0){var $0=$p0.indexOf('>');if($0<0){$0=0;}else{$0++;}return $p0.substr($0);}
MLC.MLCC$12.$19=function(){var $0=MLC.MLCC$12.$4.dequeue();MLC.MLCC$12.$1A($0.$0,$0.$1,$0.$2,$0.$3);}
MLC.MLCC$12.$1A=function($p0,$p1,$p2,$p3){var $0=MLC.MLCC$12.$16($p0,$p2);if($0==null){return;}switch($p3){case '@ConnectReq':$0.$1C($p1,$p2);break;case '@ConnectAck':$0.$1D($p1);break;default:$0.$1F($p3);break;}}
MLC.MLCC$12.$1B=function(){if(!MLC.MLCC$12.get_$E()){throw Error.invalidOperation('postMessage is not supported');}}
MLC.MLCC$12.prototype={$5:null,$6:null,$7:null,$8:null,$9:false,$A:false,add_messageReceived:function($p0){this.$F=ss.Delegate.combine(this.$F,$p0);},remove_messageReceived:function($p0){this.$F=ss.Delegate.remove(this.$F,$p0);},$F:null,add_connected:function($p0){this.$10=ss.Delegate.combine(this.$10,$p0);},remove_connected:function($p0){this.$10=ss.Delegate.remove(this.$10,$p0);},$10:null,get_$11:function(){return this.$7;},sendMessage:function($p0){if(this.$A){return;}this.$20();this.$22($p0);},dispose:function(){if(!this.$A){this.$A=true;MLC.MLCC$12.$2.remove(this);}},$1C:function($p0,$p1){if(!this.$9){this.$9=true;this.$7=$p0;this.$8=$p1;this.$22('@ConnectAck');this.$1E();}},$1D:function($p0){if(!this.$9){this.$9=true;this.$7=$p0;this.$1E();}},$1E:function(){if(this.$10!=null){this.$10.invoke(this,ss.EventArgs.Empty);}},$1F:function($p0){if(this.$F!=null){this.$F.invoke($p0);}},$20:function(){if(!this.$9){throw Error.invalidOperation('This operation cannot be performed until the channel is connected.');}},$21:function(){var $0=new MLC.MLCC$B(ss.Delegate.create(this,function(){
if(this.$A||this.$9){return false;}this.$22('@ConnectReq');return true;}));},$22:function($p0){$p0=MLC.MLCC$12.$15(this.$5,$p0);this.$7.postMessage($p0,this.$8);}}
MLC.MLCC$F=function(channelName,targetUrl,callback){this.$3=targetUrl;this.$2=channelName;this.$4=callback;this.$1=Date.get_now().getTime()+60000;this.$5=[];this.$8();}
MLC.MLCC$F.prototype={$1:0,$2:null,$3:null,$4:null,$5:null,$6:null,get_$7:function(){return Date.get_now().getTime()>=this.$1;},$8:function(){var $0=new MLC.MLCC$B(ss.Delegate.create(this,function(){
if(this.$6!=null){return false;}if(this.get_$7()){var $enum1=ss.IEnumerator.getEnumerator(this.$5);while($enum1.moveNext()){var $1_0=$enum1.get_current();$1_0.dispose();$1_0.remove_connected(ss.Delegate.create(this,this.$B));}this.$4.invoke(null);return false;}this.$9();return true;}));},$9:function(){for(var $0=0;$0<window.parent.frames.length;$0++){var $1=window.parent.frames[$0];if(window.self!==$1){this.$A($1);}}},$A:function($p0){var $enum1=ss.IEnumerator.getEnumerator(this.$5);while($enum1.moveNext()){var $1=$enum1.get_current();if($1.get_$11()===$p0){return;}}var $0=MLC.MLCC$11.$2(this.$2,$p0,this.$3);$0.add_connected(ss.Delegate.create(this,this.$B));this.$5.add($0);},$B:function($p0,$p1){var $enum1=ss.IEnumerator.getEnumerator(this.$5);while($enum1.moveNext()){var $0=$enum1.get_current();if($0!==$p0){$0.dispose();}$0.remove_connected(ss.Delegate.create(this,this.$B));}this.$6=MLC.Channel.$3($p0);this.$4.invoke(this.$6);}}
MLC.MLCC$10=function(){}
MLC.MLCC$10.$0=function($p0){var $0=window.location.href;var $1=$0.indexOf('#');if($1<0){throw Error.argumentOutOfRange('No hash fragment found.');}var $2=$0.substr($1+1);var $3=$2.split('&');for(var $4=0;$4<$3.length;$4++){var $5=$3[$4].split('=');if($5.length===2){if($5[0]===$p0){return $5[1];}}}return null;}
MLC.MLCC$10.$1=function($p0){var $0='http://';var $1='https://';if($p0==null||$p0.length===0){return String.Empty;}$p0=$p0.trim().toLowerCase();if($p0.startsWith($0)){$p0=$p0.substr($0.length);}else if($p0.startsWith($1)){$p0=$p0.substr($1.length);}var $2=$p0.indexOf(':');if($2>0){$p0=$p0.substring(0,$2);}$2=$p0.indexOf('/');if($2>0){$p0=$p0.substring(0,$2);}return $p0;}
MLC.Channel=function(interframeChannel){this.$1=[];this.$0=interframeChannel;this.$0.add_messageReceived(ss.Delegate.create(this,this.$5));this.$0.add_connected(ss.Delegate.create(this,this.$6));}
MLC.Channel.getChannelType=function(){return MLC.MLCC$11.$6();}
MLC.Channel.fromParent=function(id,childIframe,childFrameUrl,parentChannelUrl,childChannelUrl,channelName){var $0=MLC.MLCC$11.$0(channelName,id,childIframe,childFrameUrl,parentChannelUrl,childChannelUrl);return new MLC.Channel($0);}
MLC.Channel.fromChild=function(id,allowedDomain,childChannelUrl,channelName){var $0=MLC.MLCC$11.$1(channelName,id,allowedDomain,childChannelUrl);return new MLC.Channel($0);}
MLC.Channel.fromSibling=function(channelName,targetUrl,callback){new MLC.MLCC$F(channelName,targetUrl,callback);}
MLC.Channel.$3=function($p0){var $0=new MLC.Channel($p0);$0.$2=true;return $0;}
MLC.Channel.prototype={$0:null,$1:null,$2:false,add_messageReceived:function(value){this.$4=ss.Delegate.combine(this.$4,value);},remove_messageReceived:function(value){this.$4=ss.Delegate.remove(this.$4,value);},$4:null,sendMessage:function(command,parameters){var $0=MLC.$create_MLCC$A(command,parameters);if(this.$2){this.$9($0);}else{this.$1.enqueue($0);}},$5:function($p0){var $0=MLC.JSON.deserialize($p0);if($0!=null){this.$7(new MLC.ChannelMessageReceivedEventArgs($0.command,$0.parameters));}},$6:function($p0,$p1){if(!this.$2){this.$2=true;this.$8();}},$7:function($p0){if(this.$4!=null){this.$4.invoke(this,$p0);}},$8:function(){while(this.$1.length>0){var $0=this.$1.dequeue();this.$9($0);}},$9:function($p0){var $0=MLC.JSON.serialize($p0);this.$0.sendMessage($0);}}
MLC.ChannelMessageReceivedEventArgs=function(command,parameters){MLC.ChannelMessageReceivedEventArgs.initializeBase(this);this.$1_0=command;this.$1_1=parameters;}
MLC.ChannelMessageReceivedEventArgs.prototype={$1_0:null,$1_1:null,get_command:function(){return this.$1_0;},get_parameters:function(){return this.$1_1;}}
MLC.JSON=function(){}
MLC.JSON.deserialize=function(s){if(String.isNullOrEmpty(s)){return null;}try{return MLC.MLCC$6.$A(s);}catch($0){}return null;}
MLC.JSON.serialize=function(o){if(o==null){return String.Empty;}try{return MLC.MLCC$6.$D(o);}catch($0){}return null;}
MLC.MLCC$6=function(){}
MLC.MLCC$6.$7=function($p0,$p1,$p2){MLC.MLCC$6.$0.add([$p0,$p1,$p2]);}
MLC.MLCC$6.$8=function(){var $enum1=ss.IEnumerator.getEnumerator(MLC.MLCC$6.$0);while($enum1.moveNext()){var $0=$enum1.get_current();($0[0])[$0[1]]=$0[2];}MLC.MLCC$6.$0.clear();}
MLC.MLCC$6.$9=function(){var $0=window.JSON.stringify(undefined);if(!ss.isUndefined($0)&&$0==='undefined'){return true;}return false;}
MLC.MLCC$6.$A=function($p0){if(MLC.MLCC$6.$3){MLC.MLCC$6.$C(Array.prototype,MLC.MLCC$6.$5);MLC.MLCC$6.$C(Object.prototype,MLC.MLCC$6.$6);}try{var $0=window.JSON.parse($p0,MLC.MLCC$6.$1);return $0;}finally{if(MLC.MLCC$6.$3){MLC.MLCC$6.$B(Object.prototype,MLC.MLCC$6.$6);MLC.MLCC$6.$B(Array.prototype,MLC.MLCC$6.$5);}}}
MLC.MLCC$6.$B=function($p0,$p1){var $dict1=$p1;for(var $key2 in $dict1){var $0={key:$key2,value:$dict1[$key2]};$p0[$0.key] = $0.value;}Object.clearKeys($p1);}
MLC.MLCC$6.$C=function($p0,$p1){var $dict1=$p0;for(var $key2 in $dict1){var $0={key:$key2,value:$dict1[$key2]};$p1[$0.key]=$0.value;}var $dict3=$p1;for(var $key4 in $dict3){var $1={key:$key4,value:$dict3[$key4]};delete $p0[$1.key];}}
MLC.MLCC$6.$D=function($p0){var $0=window.JSON.stringify($p0,MLC.MLCC$6.$2);MLC.MLCC$6.$8();return $0;}
MLC.MLCC$6.dateReviver=function($p0,$p1){if($p1!=null){var $0=$p1['$date'];if($0!=null){return new Date($0);}}return $p1;}
MLC.MLCC$6.dateReplacer=function($p0,$p1){var $0=this[$p0];if($0 instanceof Date){var $1={};$1['$date']=($0).getTime();if(MLC.MLCC$6.$4){this[$p0] = $1;MLC.MLCC$6.$7(this,$p0,$0);}return $1;}else if($0===''){return '';}return $p1;}
MLC.FlashObject=function(url,parameters){parameters=parameters||{};if(Object.keyExists(parameters,'id')){throw Error.argument('The parameters dictionary cannot contain a parameter named \'id\'');}var $0=MLC.FlashObject.$5++;this.id=$0.toString();this.$6='FlashObject'+this.id;this.$7=url;this.$8=parameters;this.$8['id']=this.id;MLC.FlashObject.$2[this.id]=this;Microsoft.Live.Core.Loader.onDocumentReady(ss.Delegate.create(this,function(){
this.$E();}));}
MLC.FlashObject.onReady=function(id){var $0=MLC.FlashObject.$2[id];if($0!=null){$0.$13();}}
MLC.FlashObject.trace=function(id,message){var $0=MLC.FlashObject.$2[id];if($0!=null){ss.Debug.trace(String.format('FlashObject[{0}]: {1}',$0.id,message));}}
MLC.FlashObject.$14=function($p0){var $0=new ss.StringBuilder();var $1=true;var $dict1=$p0;for(var $key2 in $dict1){var $2={key:$key2,value:$dict1[$key2]};if(!$1){$0.append('&');}$0.append(encodeURIComponent($2.key));$0.append('=');$0.append(encodeURIComponent($2.value.toString()));$1=false;}return $0.toString();}
MLC.FlashObject.$15=function($p0){var $0=document.createElement('div');$0.style.position='absolute';$0.style.top='-1000px';$0.style.width='300px';$0.style.height='300px';$0.id='FlashContainer'+$p0;document.body.appendChild($0);return $0;}
MLC.FlashObject.$16=function($p0){if(String.isNullOrEmpty($p0)){return $p0;}MLC.FlashObject.$3.lastIndex=0;if(MLC.FlashObject.$3.test($p0)){$p0=$p0.replace(MLC.FlashObject.$3,function($p1_0){
return MLC.FlashObject.$4[$p1_0];});}return $p0;}
MLC.FlashObject.prototype={id:null,$6:null,$7:null,$8:null,$9:false,$A:null,$B:false,add_initialized:function(value){this.$C=ss.Delegate.combine(this.$C,value);},remove_initialized:function(value){this.$C=ss.Delegate.remove(this.$C,value);},$C:null,add_fsCommandReceived:function(value){this.$D=ss.Delegate.combine(this.$D,value);},remove_fsCommandReceived:function(value){this.$D=ss.Delegate.remove(this.$D,value);},$D:null,dispose:function(){if(!this.$B){this.$B=true;delete MLC.FlashObject.$2[this.id];}},invokeMethod:function(name,parameters){this.$11();name=MLC.FlashObject.$16(name);parameters=parameters||new Array(0);var $0=window.__flash__argumentsToXML(parameters,0);var $1=String.concat('<invoke name=\"',name,'\" returntype=\"javascript\">',$0,'</invoke>');var $2=this.$A.CallFunction($1);if($2==null){return null;}return eval($2);},setVariable:function(name,value){this.$11();this.$A.SetVariable(name,value);},$E:function(){var $0=MLC.FlashObject.$15(this.id);this.$F();var $1=MLC.FlashObject.$14(this.$8);var $2='\r\n<object classid=\'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\' codebase=\'https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\' width=\'300\' height=\'300\' id=\'{id}\' name=\'{id}\' type=\'application/x-shockwave-flash\' data=\'{url}\'>\r\n<param name=\'movie\' value=\'{url}\'></param>\r\n<param name=\'allowScriptAccess\' value=\'always\'></param>\r\n<param name=\'FlashVars\' value=\'{variables}\'></param>\r\n<embed play=\'true\' menu=\'false\' swLiveConnect=\'true\' allowScriptAccess=\'always\' type=\'application/x-shockwave-flash\' FlashVars=\'{variables}\' src=\'{url}\' width=\'300\' height=\'300\' name=\'{id}\'></embed>\r\n</object>\r\n';if(Sys.Browser.agent===Sys.Browser.InternetExplorer){$2+='\r\n<script event=\'FSCommand(command, args)\' for=\'{id}\'>{id}_DoFSCommand(command, args)</script>\r\n';}$2=$2.replaceAll('{url}',this.$7);$2=$2.replaceAll('{id}',this.$6);$2=$2.replaceAll('{variables}',$1);$0.innerHTML=$2;},$F:function(){var $0=this.$6+'_DoFSCommand';window[$0] = ss.Delegate.create(this,this.$12);},$10:function(){var $0=ss.Delegate.create(this,function($p1_0){
return MLC.FlashObject.$16($p1_0);});var $1=ss.Delegate.create(this,function($p1_0,$p1_1){
if($p1_0!=null){$p1_0[$p1_1]=null;}});window.__flash__escapeXML = $0;window.__flash__removeCallback = $1;},$11:function(){if(!this.$9){throw Error.invalidOperation('The object must be initialized.');}},$12:function($p0,$p1){if(this.$D!=null){this.$D.invoke(this,new MLC.FSCommandEventArgs($p0,$p1));}},$13:function(){if(!this.$9){this.$9=true;this.$10();if(Sys.Browser.agent===Sys.Browser.Firefox){var $0=document.embeds;this.$A=$0[this.$6];}else{this.$A=document.getElementById(this.$6);}if(this.$C!=null){this.$C.invoke(this,ss.EventArgs.Empty);}}}}
MLC.FSCommandEventArgs=function(name,value){MLC.FSCommandEventArgs.initializeBase(this);this.$1_0=name;this.$1_1=value;}
MLC.FSCommandEventArgs.prototype={$1_0:null,$1_1:null,get_name:function(){return this.$1_0;},get_value:function(){return this.$1_1;}}
MLC.MLCC$B.registerClass('MLC.MLCC$B');MLC.MLCC$C.registerClass('MLC.MLCC$C',null,MLC.MLCC$0);MLC.MLCC$8.registerClass('MLC.MLCC$8');MLC.MLCC$9.registerClass('MLC.MLCC$9',null,MLC.MLCC$0);MLC.MLCC$D.registerClass('MLC.MLCC$D',null,MLC.MLCC$0);MLC.MLCC$11.registerClass('MLC.MLCC$11');MLC.MLCC$12.registerClass('MLC.MLCC$12',null,MLC.MLCC$0,ss.IDisposable);MLC.MLCC$F.registerClass('MLC.MLCC$F');MLC.MLCC$10.registerClass('MLC.MLCC$10');MLC.Channel.registerClass('MLC.Channel',null,MLC.IChannel);MLC.ChannelMessageReceivedEventArgs.registerClass('MLC.ChannelMessageReceivedEventArgs',ss.EventArgs);MLC.JSON.registerClass('MLC.JSON');MLC.MLCC$6.registerClass('MLC.MLCC$6');MLC.FlashObject.registerClass('MLC.FlashObject',null,ss.IDisposable);MLC.FSCommandEventArgs.registerClass('MLC.FSCommandEventArgs',ss.EventArgs);MLC.MLCC$12.$2=null;MLC.MLCC$12.$3=null;MLC.MLCC$12.$4=null;(function(){MLC.MLCC$12.$2=[];MLC.MLCC$12.$3=window.location.hostname.toLowerCase();MLC.MLCC$12.$4=[];window.attachEvent('onmessage',MLC.MLCC$12.$13);})();
MLC.MLCC$6.$0=[];MLC.MLCC$6.$1=null;MLC.MLCC$6.$2=null;MLC.MLCC$6.$3=false;MLC.MLCC$6.$4=false;MLC.MLCC$6.$5={};MLC.MLCC$6.$6={};(function(){if(Sys.Browser.agent===Sys.Browser.InternetExplorer){MLC.MLCC$6.$3=MLC.MLCC$6.$9();}else{MLC.MLCC$6.$4=(Sys.Browser.agent===Sys.Browser.Firefox);}MLC.MLCC$6.$1=MLC.MLCC$6.dateReviver;MLC.MLCC$6.$2=MLC.MLCC$6.dateReplacer;})();
MLC.FlashObject.$2=null;MLC.FlashObject.$3=null;MLC.FlashObject.$4=null;MLC.FlashObject.$5=0;(function(){MLC.FlashObject.$2={};MLC.FlashObject.$3=new RegExp('[\\u0000\\u0009\\u000a\\u000d\\u0020\\u0022\\u0026\\u0027\\u003c\\u003e\\u005c]','g');MLC.FlashObject.$4={'\u0000':'\\0','\t':'\\t','\n':'\\n','\r':'\\r',' ':'\\ ','\"':'&quot;','&':'&amp;','\'':'&apos;','<':'&lt;','>':'&gt;','\\':'\\\\'};})();

// ---- Do not remove this footer ----
// This script was generated using Script# v0.6.0.0 (http://projects.nikhilk.net/ScriptSharp)
// -----------------------------------
});