/**
 * Loads a URL and calls a callback function if the resource is loaded
 * successfully.
 * @param    url                    URL to load.
 * @param    callbackFunctionName   The name of the callback function.  The
 *                                  function must accept one parameter, which
 *                                  is an XMLHttpRequest object.  This is
 *                                  the name of the callback function, not a
 *                                  pointer to the function itself.
 */
function makeRequest(url, callbackFunctionName) {
  var http_request = false;
  if (window.XMLHttpRequest) { // Mozilla, Safari,...
    http_request = new XMLHttpRequest();
//    if (http_request.overrideMimeType) {
//      http_request.overrideMimeType('text/xml');
//      // See note below about this line
//    }
  } else if (window.ActiveXObject) { // IE
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!http_request) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  http_request.onreadystatechange = function() { httpDone(callbackFunctionName, http_request); };
  http_request.open('GET', url, true);
  http_request.send(null);
  return true;
}

function httpDone(callbackFunctionName, http_request) {
  if (http_request.readyState == 4) {
    if (http_request.status == 200) {
      eval(callbackFunctionName + "(http_request);");
    } else {
      alert('There was a problem with the request.');
    }
  }
}
