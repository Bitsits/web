// Copyright (c) Microsoft Corporation. All rights reserved.
Microsoft.Live.Core.Loader.onResourceAvailable('messenger_services_configuration',null,function(){
Type.registerNamespace('MSCf');MSCf.F$0=function(identity,configurationUrl){this.$0=identity;this.$1=configurationUrl;}
MSCf.F$0.prototype={$0:null,$1:null,$2:false,$3:null,get_$4:function(){return this.$2;},get_$5:function(){return this.$3;},add_$6:function($p0){this.$7=ss.Delegate.combine(this.$7,$p0);},remove_$6:function($p0){this.$7=ss.Delegate.remove(this.$7,$p0);},$7:null,$8:function(){var $0=new MSCo.HttpRequest(0,this.$1,String.Empty,{},ss.Delegate.create(this,this.$9));$0.execute();},$9:function($p0){if($p0.get_status()===200){this.$3=MSCo.JsonResponseParser.parseConfigurationResponse($p0.get_responseText());if(this.$3!=null){this.$2=true;}}this.$A();},$A:function(){if(this.$7!=null){this.$7.invoke(this,ss.EventArgs.Empty);}}}
MSCf.ConfigurationService=function(identity,configurationUrl){this.$0=identity;this.$1=configurationUrl;this.$2=MC.$create_ConfigurationInfo();}
MSCf.ConfigurationService.prototype={$0:null,$1:null,$2:null,get_current:function(){return this.$2;},add_changed:function(value){this.$3=ss.Delegate.combine(this.$3,value);},remove_changed:function(value){this.$3=ss.Delegate.remove(this.$3,value);},$3:null,loadConfiguration:function(){var $0=new MSCf.F$0(this.$0,this.$1);$0.add_$6(ss.Delegate.create(this,this.$4));$0.$8();},updateConfiguration:function(configuration){this.$2=configuration;},$4:function($p0,$p1){var $0=$p0;if($0.get_$4()){this.$5($0.get_$5());}},$5:function($p0){this.$2=$p0;if(this.$3!=null){this.$3.invoke(this,ss.EventArgs.Empty);}}}
MSCf.F$0.registerClass('MSCf.F$0');MSCf.ConfigurationService.registerClass('MSCf.ConfigurationService',null,MC.IConfigurationService);
// ---- Do not remove this footer ----
// This script was generated using Script# v0.6.0.0 (http://projects.nikhilk.net/ScriptSharp)
// -----------------------------------
});