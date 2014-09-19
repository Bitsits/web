<!--

// --- Macromedia's functions ------------------------------------------------------------------------------------
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { // modified version
  var i,j=0,x,a=MM_swapImage.arguments;
  if (menuSelected != a[3])
  {
	  document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
  }
}

//--------------------------------------------------------------
// This functions is used for static menus only: Forum
//--------------------------------------------------------------
function changeSwapImage() { //v3.0
  var i,j=0,x,a=changeSwapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//---------------------------------------------------------------------------------------------------------------

function preloadMenu()
{
	
	MM_preloadImages('/images/navBar/navBar_r2_c2_f2.gif',
					'/images/navBar/navBar_r2_c4_f2.gif',
					'/images/navBar/navBar_r2_c6_f2.gif',
					'/images/navBar/navBar_r2_c8_f2.gif',
					'/images/navBar/navBar_r2_c10_f2.gif',
					'/images/navBar/navBar_r2_c12_f2.gif',
					'/images/navBar/navBar_r2_c14_f2.gif',
					'/images/navBar/navBar_r2_c16_f2.gif',
					'/images/navBar/navBar_r2_c18_f2.gif',
					'/images/navBar/navBar_r2_c20_f2.gif',
					'/images/navBar/navBar_r2_c22_f2.gif',
					'/images/navBar/navBar_r2_c2_sel.gif',
					'/images/navBar/navBar_r2_c4_sel.gif',
					'/images/navBar/navBar_r2_c6_sel.gif',
					'/images/navBar/navBar_r2_c8_sel.gif',
					'/images/navBar/navBar_r2_c10_sel.gif',
					'/images/navBar/navBar_r2_c12_sel.gif',
					'/images/navBar/navBar_r2_c14_sel.gif',
					'/images/navBar/navBar_r2_c16_sel.gif',
					'/images/navBar/navBar_r2_c18_sel.gif',
					'/images/navBar/navBar_r2_c20_sel.gif',
					'/images/navBar/navBar_r2_c22_sel.gif'
					);
}

function browserRedirect()
{
  // Check if browser is Netscape 4
  if(document.layers) location = "browserError.html";
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function spammersGoToHell()
{
	var adr = "info"
	var dmn = "gotoandplay.it"
	var fulladr = adr + "@" + dmn
	location.href = "mailto:" + fulladr 
	
}
//-->