$.getJSON("datablobs/entrypage.json", function(json) {
  $.each(json.entryPageItems, function(index, element) {
    if (index == 0) {
      $('#subColumn001').append(
        '<a href="./item.html"><div class = "hoverLay"> <img src="https://archive.org/download/LFAEmigre0006/LFA_Emigre_0006_0001.jpg" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index == 1) {
      $('#subColumn001').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 2 && index < 4) {
      $('#subColumn002').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    // else if (index >= 4 && index < 6) {
    //   $('#subColumn003').append(
    //     '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    // }
    else if (index >= 4 && index < 5) {
      $('#subColumn003').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 6 && index < 8) {
      $('#subColumn004').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 8 && index < 10) {
      $('#subColumn005').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 10 && index < 12) {
      $('#subColumn006').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    // else if (index >= 12 && index < 14) {
    //   $('#subColumn007').append(
    //     '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    // }
    // else if (index >= 14 && index < 16) {
    //   $('#subColumn008').append(
    //     '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    // }
  });
});
