var bo_ns_id = 0;

function startIeFix(){  
    if(isIE()){    
     document.write('<div style="display: none;" id="bo_ns_id_' + bo_ns_id + '">');  
    }
}

function endIeFix(){  
    if(isIE()){    
        document.write('</div>');    
        var theObject = document.getElementById("bo_ns_id_" + bo_ns_id++);    
        if(theObject.firstChild.data){      
            theObject.firstChild.removeAttribute('data');    
        } 
       
        var theParams = theObject.getElementsByTagName("param");    
        var theParamsLength = theParams.length;  
          
        for (var j = 0; j < theParamsLength; j++) {      
            if(theParams[j].name.toLowerCase() == 'flashvars'){        
                var theFlashVars = theParams[j].value;      
            }    
        }  
      
        var theInnnerHTML = theObject.innerHTML;    
        var re = /<param name="FlashVars" value="">/ig;    
        theInnnerHTML = theInnnerHTML.replace(re, "<param name=\"FlashVars\" value=\"" + theFlashVars + "\">");    
        theObject.outerHTML = theInnnerHTML;  
        //alert(theInnnerHTML);
    }
}
function isIE(){  

    var strBrwsr = navigator.userAgent.toLowerCase();  
    if(strBrwsr.indexOf("msie") > -1 && strBrwsr.indexOf("mac") < 0){   
        return true;  
    }
    else
    {    
        return false;  
    }
}