$.getJSON("datablobs/entrypage001.json", function(json) {

  // POPULATE TEXT IN SEARCH BLOCKS //
  var searchTextH1 = document.getElementsByClassName('searchText');
  console.log(searchTextH1);

  $.each(json.entryPageSearches, function(index, element) {
    console.log(index);
    // console.log(element.entryContent.searchText);
    searchTextH1[index].innerHTML = element.entryContent.searchText;
  });
  // END POPULATE TEXT IN SEARCH BLOCKS //

  // POPULATE IMAGES IN ENTRY GRID //
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
    else if (index >= 4 && index < 6) {
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
    else if (index >= 12 && index < 14) {
      $('#subColumn007').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 14 && index < 16) {
      $('#subColumn008').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 16 && index < 18) {
      $('#subColumn009').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 18 && index < 20) {
      $('#subColumn010').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 20 && index < 22) {
      $('#subColumn011').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
    else if (index >= 22 && index < 24) {
      $('#subColumn012').append(
        '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    }
  });
  // END POPULATE IMAGES IN ENTRY GRID //
});
