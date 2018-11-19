$.getJSON("https://raw.githubusercontent.com/omarmhmmd/LFA/master/datablobs/entrypage001.JSON", function(json) {

  // POPULATE TEXT IN SEARCH BLOCKS //
  var searchTextH1 = document.getElementsByClassName('searchBlock');
  var searchBlockURLS = document.getElementsByClassName('searchBlockURL');
  console.log(searchBlockURLS);

  $.each(json.entryPageSearches, function(index, element) {
    // console.log(element.entryContent.searchText);
    searchTextH1[index].innerHTML = '<h1 class = "searchText">' + element.entryContent.searchText + '</h1>';
    searchBlockURLS[index].href = element.entryURL;
  });
  // END POPULATE TEXT IN SEARCH BLOCKS //

  // POPULATE TABLES //
  $.getJSON("datablobs/t_lfa_amelia_201810061624.json", function(json) {
    $.each(json.tableItems, function(index, element) {
      if (index < 5) {
        $("#topRow-Entry").append(
          '<div class = "tablePic-Entry"> <img src=' + element.imageURL + '></div>'
        );
      }
      else {
        $("#bottomRow-Entry").append(
          '<div class = "tablePic-Entry"> <img src=' + element.imageURL + '></div>'
        );
      }
    });
  });
  // END POPULATE TABLES

  function populateImages(x, y, z, a) {
    console.log(x);
  }

  // POPULATE IMAGES IN ENTRY GRID //
  $.each(json.entryPageItems, function(index, element) {
    if (index == 0) {
      $('#subColumn001').append(
        '<a href="./item.html"><div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index == 1) {
      $('#subColumn001').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 2 && index < 4) {
      $('#subColumn002').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 4 && index < 6) {
      $('#subColumn003').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 6 && index < 8) {
      $('#subColumn004').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 8 && index < 10) {
      $('#subColumn005').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 10 && index < 12) {
      $('#subColumn006').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 12 && index < 14) {
      $('#subColumn007').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 14 && index < 16) {
      $('#subColumn008').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 16 && index < 18) {
      $('#subColumn009').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 18 && index < 20) {
      $('#subColumn010').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 20 && index < 22) {
      $('#subColumn011').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 22 && index < 24) {
      $('#subColumn012').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 24 && index < 26) {
      $('#subColumn013').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    else if (index >= 26 && index < 28) {
      $('#subColumn014').append(
        '<a href = ' + element.entryURL + '> <div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div></a>');
    }
    // else if (index >= 28 && index < 30) {
    //   $('#subColumn015').append(
    //     '<div class = "hoverLay"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.entryContent.title + '</figcaption> </div>');
    // }
  });
  // END POPULATE IMAGES IN ENTRY GRID //
});
