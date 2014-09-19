// <!--
if (!__dhtml_js) {
function getObjectByID(id) {
  if (document.getElementById) return document.getElementById(id);
  if (document.all)            return document.all[id];
  if (document.layers)         return document[id];
  return null;
}

function getStyleObjectByID(id) {
  if (document.getElementById) {
    var obj = document.getElementById(id);
    return (obj ? obj.style : null);
  } else if (document.all) {
    var obj = document.all[id];
    return (obj ? obj.style : null);
  } else if (document.layers) {
    return document[id];
  }
  return null;
}

function setIDStyleProperty(id, prop, val) {
  var obj;
  obj = getStyleObjectByID(id);
  if (obj) obj[prop] = val;
}

function getIDStyleProperty(id, prop) {
  var obj;
  obj = getStyleObjectByID(id);
  if (obj) {
    return obj[prop];
  } else {
    return null;
  }
}


function scrollTo(id, y) {
  var obj;
  if (dom) { obj = document.getElementById(id); }
  if (ie) { obj = document.all[id]; }
  if (ns4) { obj = document[id]; }
  obj.scrollTop = y;
}

function scrollToBottom(id) {
  scrollTo(id, 100000000);
}

function scrollToTop(id) {
  scrollTo(id, 0);
}

function getRadioValue(formname, radioname) {
  l = document.forms[formname][radioname].length;
  for (i = 0; i < l; i++) {
    if (document.forms[formname][radioname][i].checked) {
      return document.forms[formname][radioname][i].value;
    }
  }
  return null;
}

/**
 * Changes the HTML contained between paired tags.  Usually used to change
 * the contents of a DIV or SPAN with a unique ID.
 * @param   id        ID of tag to change
 * @param   content   HTML to place between the paired tags
 */
function setTagContents(id, content) {
  if (document.getElementById) {
    // if netscape
    document.getElementById(id).innerHTML = content;
  } else {
    document.all[id].innerHTML = content
  }
}

}

var __dhtml_js = true;
// -->
