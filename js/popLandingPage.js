$.getJSON("datablobs/entrypage.json", function(json) {
  $.each(json.entryPageItems, function(index, element) {
    if (index >= 0 && index < 8) {
      $('#column001').append(
        '<div class = "hoverLay"> <a target="_blank"href="https://www.google.com/"> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' +element.entryContent.title + '</figcaption> </div> </a> ');
      }
    else if (index > 8 && index < 16) {
      $('#column002').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' +element.entryContent.title + '</figcaption> </div>');
      }
    else if (index > 16 && index < 24) {
      $('#column003').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' +element.entryContent.title + '</figcaption> </div>');
      }
    else if (index > 24 && index < 32) {
      $('#column004').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' +element.entryContent.title + '</figcaption> </div>');
      }
  });
});
