__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined") {
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	
	document.writeln = function(str) { document.write(str + "\n"); };

	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("\n");
var cb = Math.random();
var d = document;
d.write('<script language="JavaScript" type="text/javascript"');
d.write('src="http://optimized-by.rubiconproject.com/a/8030/12966/23854-9.js?cb='+cb+'">');
d.write('<\/scr'+'ipt>');
document.write("<noscript>\n");
document.write("<a href=\"http://helios.gamerdna.com/adlink/5223/1352698/0/154/AdId=883038;BnId=1;itime=264814824;key=key1+key2+key3+key4;nodecode=yes;link=http://optimized-by.rubiconproject.com/t/8030/12966/23854-9.1\"><img src=\"http://optimized-by.rubiconproject.com/a/8030/12966/23854-9.img\" width=\"160\" height=\"600\" border=\"0\"></a>\n");
document.write("</noscript>\n");
function cleanUp() {
	if (typeof __parent.swappedRefs == "undefined") {
		__parent.swappedRefs = new Array();
	}
		
	while (__parent.swappedRefs.length > 0) {
		var ref = __parent.swappedRefs.pop();
		if (ref != "swappedRefs") {
			__parent[ref] = null;
		}
	}
}

if (typeof inFIF != "undefined" && inFIF == true) {
	__parent = window.parent;
	window.onunload = cleanUp;
	cleanUp();

	
	for (var ref in window) {
		if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
					&& ref != "frameElement" && ref != "event" && ref != "swappedRefs" && ref != "onunload") {
			try {__parent[ref] = window[ref]; __parent.swappedRefs.push(ref);} catch (e) {}
		}
	}	
}	




if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}}


