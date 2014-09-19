wikiVersion = {
  getSelectedVersions: function(selected) {
    var boxes = new Array()
    var elements = $('diff_form').elements
    boxes.selected_index = -1

    for(var i = 0; i < elements.length; i++)
      //Check for elements[i].name so we won't pickup <fieldset>s too.
      if(elements[i].name && elements[i].name.match(/^versions\[\]/) && elements[i].checked) {
        if(elements[i] == selected) boxes.selected_index = boxes.length
        boxes.push(elements[i])
      }

    return boxes
  },

  ensureSelectedVersions: function() {
    var boxes = this.getSelectedVersions()
    if(boxes.length == 2) return true
    alert("You must select two versions to diff.")
    return false
  },

  checked: function(checkbox) {
    this.examineCompareButton()
  },

  examineCompareButton: function() {
    var boxes = this.getSelectedVersions()
    $('diff_button').disabled = (boxes.length != 2)
    $('choose_less').style.display = (boxes.length > 2) ? 'block' : 'none';
  }
}
wiki = {
toggleSlideImage: 
  function(parent_id) {
    id = parent_id + '_body';
    image = parent_id + '_image';
    if ($(id).style.display == 'none') {
      new Effect.SlideDown(id);
      $(image).src = '/images/roll-arrow-down.png';
    } else {
      new Effect.SlideUp(id);
      $(image).src = '/images/roll-arrow-right.png';
    }
  },

toggleImage: 
  function(parent_id) {
    id = parent_id + '_body';
    image = parent_id + '_image';
    if ($(id).style.display == 'none') {
	  $(id).style.display = 'block';
      $(image).src = '/images/roll-arrow-down.png';
    } else {
      $(id).style.display = 'none';
      $(image).src = '/images/roll-arrow-right.png';
    }
  }
}
