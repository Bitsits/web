(function(){
var c=window,d=document;function g(a,b){return a.cursor=b}function h(a,b){return a.onmouseover=b}function i(a,b){return a.display=b}var l="appendChild",m="length",o="style",s;
function v(a){this.O=a.adsContainer;this.K=a.nextAdIndex||0;this.z=a.linksContainer;this.b=a.previousLink;this.a=a.nextLink;this.v=a.linkArrowColor;this.q=a.linkActiveBgColor;this.w=a.linkInactiveBgColor;this.G=a.linkActiveCursor;this.H=a.linkInactiveCursor;this.I=a.loading;this.j=a.requestToken;this.fa=a.renderAds;this.S=a.getNextAdRequestUrl;this.ca=a.maxAds;this.U=a.handlerUrl;this.ha=a.requestUrl;this.R=a.formatParams;this.d=a.pages;this.c=0;this.i=false;this.o={};this.n={};this.da=a.nextAdsMessage;
this.ea=a.previousAdsMessage;this.f=a.arrowHeight;this.g=a.arrowWidth;this.l=a.arrowSize;this.P=a.arrowGap;this.Y=a.isRtl;this.X();this.ja();i(this.z[o],"block")}s=v.prototype;s.ba=function(a){this.V();if(a.ads[m]==0){this.j=null;this.c=0;this.A()}else{this.j=a.token&&a.token[m]>0?a.token:null;for(var b=0;b<a.ads[m];++b){a.ads[b].id=this.K;++this.K}this.Z(a.ads)}this.p();this.i=false};s.F=function(){for(var a=0;a<this.d[m];++a)i(this.d[a][o],"none")};s.ka=function(){this.F();i(this.I[o],"")};
s.V=function(){i(this.I[o],"none")};s.B=function(a){if(a==0&&this.c>0)this.aa();else if(a==1&&(this.j||this.c<this.d[m]-1))this.$()};s.C=function(a){i((a==0?this.o:this.n)[2][o],"none");this.p()};s.D=function(a){if(a==0&&this.c>0||a==1&&(this.j||this.c<this.d[m]-1))this.ia(a)};s.Z=function(a){var b=this.fa(this.c,a,this.R);this.d.push(b);this.O[l](b)};s.$=function(){if(!this.i){this.i=true;++this.c;if(this.c==this.d[m]){this.ka();this.ga()}else{this.A();this.p();this.i=false}}};
s.aa=function(){if(!this.i){this.i=true;--this.c;this.A();this.p();this.i=false}};s.A=function(){this.F();i(this.d[this.c][o],"")};s.ga=function(){var a=this.Q();d.getElementsByTagName("head")[0][l](a)};s.Q=function(){var a=this.T(),b=d.createElement("script");b.setAttribute("src",a);return b};s.s=function(a,b){this.u(a);i((a==0?this.o:this.n)[b][o],"block")};s.u=function(a){for(var b=a==0?this.o:this.n,f=0;f<=2;f++)i(b[f][o],"none")};
s.T=function(){return this.S({handlerUrl:this.U,maxAds:this.ca,requestToken:this.j,requestUrl:this.ha})};s.ia=function(a){if(a==0)g(this.b[o],this.b.r);else g(this.a[o],this.a.r);this.s(a,2)};s.M=function(a){if(a==0)g(this.b[o],this.b.m);else g(this.a[o],this.a.m);this.s(a,1)};s.L=function(a){if(a==0)g(this.b[o],this.b.m);else g(this.a[o],this.a.m);this.s(a,0)};
s.p=function(){if(this.c>0){h(this.b,this.b.k);this.o[2][o].display=="none"&&this.L(0)}else{h(this.b,null);this.M(0)}if(this.j||this.c<this.d[m]-1){h(this.a,this.a.k);this.n[2][o].display=="none"&&this.L(1)}else{h(this.a,null);this.M(1)}};
s.ja=function(){this.b.N=this.q;this.b.W=this.w;this.b.e=this;this.b.r=this.G;this.b.m=this.H;this.b.onmousedown=function(){this.e.B(0)};this.b.k=function(){this.e.D(0)};this.b.onmouseout=function(){this.e.C(0)};h(this.b,this.b.k);this.a.N=this.q;this.a.W=this.w;this.a.e=this;this.a.r=this.G;this.a.m=this.H;this.a.onmousedown=function(){this.e.B(1)};this.a.k=function(){this.e.D(1)};this.a.onmouseout=function(){this.e.C(1)};h(this.a,this.a.k);this.p()};
s.h=function(a,b,f,j,p){var k=d.createElement("div"),e="position:absolute;overflow:hidden;left:";e+=a;e+="px;top:";e+=b;e+="px;width:";e+=f;e+="px;height:";e+=j;e+="px;";e+="background-color:";e+=p;k[o].cssText=e;return k};
s.t=function(a,b,f,j){var p;p=f?this.h(0,0,this.g,this.f,a):this.h(0,0,this.g,this.f,b);var k=this.h(1,1,this.g-2,this.f-2,b);p[l](k);var e=this.f/2-1,q=Math.floor((this.g-3-this.l)/2),t,u,r;if(j==0){k[l](this.h(q-1,e-1,2,2,a));t=-2;u=0;r=-1}else{k[l](this.h(q+this.l,e-1,2,2,a));t=-this.l-1;u=this.l-1;r=1}for(var n=0;n<this.l;n++){k[l](this.h(q+n,e+t+r*n,2,2,a));k[l](this.h(q+n,e+u-r*n,2,2,a))}return p};
s.J=function(a,b,f){var j=false;b[1]=this.t(this.v,this.w,j,f);a[l](b[1]);b[0]=this.t(this.v,this.q,j,f);a[l](b[0]);j=true;b[2]=this.t(this.q,this.v,j,f);a[l](b[2])};s.X=function(){var a=0,b=1;if(this.Y){a=1;b=0}this.J(this.b,this.o,a);this.J(this.a,this.n,b);this.a.title=this.da;this.b.title=this.ea;this.z[o].width=2*this.g+this.P+"px";this.z[o].height=this.f+"px";this.b[o].width=this.g+"px";this.b[o].height=this.f+"px";this.a[o].width=this.g+"px";this.a[o].height=this.f+"px";this.u(0);this.u(1)};
if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){for(var b=0;b<this[m];b++)if(this[b]==a)return b;return-1};if(c.sma){c.smaSlotManager=new v(c.sma);c.handleAdsRequestDone=function(a){c.smaSlotManager.ba(a)}};
})();
