// JScript File
function Select(objId)
{
   fnDeSelect();
   if (document.selection) 
   {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(objId));
      range.select();
   }
   else if (window.getSelection) 
   {
      var range = document.createRange();
      range.selectNode(document.getElementById(objId));
      window.getSelection().addRange(range);
   }
}
function fnDeSelect() 
{
   if (document.selection)
             document.selection.empty();
   else if (window.getSelection)
              window.getSelection().removeAllRanges();
} 



function Toggle(ElId) 
{ 
    var el = document.getElementById(ElId)
    if (el.style.display=="none") {el.style.display="block";} 
    else {el.style.display="none";} 
} 

function DoubleToggle(ElId, OthId) 
{ 
    var el = document.getElementById(ElId)
    if (el.style.display=="none") {el.style.display="block";} 
    else {el.style.display="none";} 

    var oth = document.getElementById(OthId)
    if (el.style.display=="none") {oth.style.display="block";} 
    else {oth.style.display="none";} 
} 

function RunFeedback(LessonID)
{
    window.open('http://www.directxtutorial.com/feedback/feedback.aspx?'+LessonID, '','dependent=1,directories=0,height=480,width=783,location=0');
}
