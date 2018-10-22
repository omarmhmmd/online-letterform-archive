$.getJSON("datablobs/item_eg1.json", function(json) {
  $("#prevItem").attr("src",json.itemSearch.itemPrev.imageFront);
  $("#theItem").attr("src",json.item.imageFront);
  $("#nextItem").attr("src",json.itemSearch.itemNext.imageFront);

  $("#itemDescription").append('<span class = "title">'+ json.item.title+ ' </span> <p>&nbsp;</p>' + json.item.measurements.height + ' x ' + json.item.measurements.width + '</br>' + json.item.numberImages + ' pages' + '</br>' + json.item.year);

  /**** COLUMN ONE ****/
  $("#itemTitle").append(json.item.title + '</br>');

  $.each(json.item.formats, function(index, element) {
    $("#workTypes").append(element + '</br>');
  });

  $("#decades").append(json.item.decade + '</br>');

  $.each(json.item.creators, function(index, element) {
    $("#creators").append(element.name + '</br>');
  });

  $.each(json.item.formats, function(index, element) {
    $("#format").append(element + '</br>');
  });

  $.each(json.item.languages, function(index, element) {
    $("#languages").append(element + '</br>');
  });
  /**** END COLUMN ONE ****/

  /**** COLUMN TWO ****/
  $("#country").append(json.item.country + '</br>');

  $("#collections").append(json.item.collection + '</br>');

  var contributorsLength;
  $.each(json.item.contributors, function(index, element) {
    if (index >= 0 && index < 8) {
      $("#contributors").append(element + '</br>');
    }
    contributorsLength = index - 8;
  });
  if (contributorsLength > 0) {
    $("#contributors").append("+ " + contributorsLength + ' more</br>');
  }
  /**** COLUMN TWO ****/

  /**** THUMBNAILS ***/
  $.each(json.item.imageURLs, function(index, element) {
    var isLastElement = index == json.item.imageURLs.length -1;

    /**** ZOOM ITEMS ****/
    if (index == 0) {
      $(".zoomItems").append(
        '<div id = "thumb001"> <img src=' + element + '></div>'
      );
    }
    else if (isLastElement) {
      $(".zoomItems").append(
        '<div id = "thumb001"> <img src=' + element + '></div>'
      );
    }
    else {
      $(".zoomItems").append(
        '<div class = "thumbnailPic"> <img src=' + element + '></div>'
      );
    }
    /**** END ZOOM ITEMS ****/

    if (json.item.imageURLs.length > 9) {
      $('#morePics').css('display', 'flex');
      $('#morePics p').text('+ ' + (json.item.imageURLs.length - 9) + ' more')
    }

    if (index < 9) {
      if (index == 0) {
        $("#thumbnails").append(
          '<div class="thumbnailPic" id = "thumb001"> <img src=' + element + '></div>'
        );
      }
      else if (isLastElement) {
        $("#thumbnails").append(
          '<div class="thumbnailPic" id = "thumb001"> <img src=' + element + '></div>'
        );
        console.log('last item')
      }
      else {
        $("#thumbnails").append(
          '<div class="thumbnailPic"> <img src=' + element + '></div>'
        );
      }
    }
  });
  /**** END THUMBNAILS ****/
});
