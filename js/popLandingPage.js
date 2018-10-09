var arrItems001 = [];
var arrItems002 = [];
var arrItems003 = [];
var arrItems004 = [];

$.getJSON("datablobs/entrypage.json", function(json) {
  $.each(json.entryPageItems, function(index, element) {
    if (index > 0 && index < 8) {
      $('#column001').append('<img src="' + element.entryContent.imageURL + '" style="width:100%">');
    }
    else if (index > 8 && index < 16) {
      $('#column002').append('<img src="' + element.entryContent.imageURL + '" style="width:100%">');
    }
    else if (index > 16 && index < 24) {
      $('#column003').append('<img src="' + element.entryContent.imageURL + '" style="width:100%">');
    }
    else if (index > 24 && index < 32) {
      $('#column004').append('<img src="' + element.entryContent.imageURL + '" style="width:100%">');
    }
  });
});
