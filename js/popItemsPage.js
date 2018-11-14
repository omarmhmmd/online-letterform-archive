$.getJSON("datablobs/item_eg1.json", function(json) {
  $("#prevItem").attr("src",json.itemSearch.itemPrev.imageFront);
  $("#theItem").attr("src",json.item.imageFront);
  $("#nextItem").attr("src",json.itemSearch.itemNext.imageFront);

  $("#itemDescription").append('<span class = "title">'+ json.item.title+ ' </span> <p>&nbsp;</p>' + json.item.measurements.height + ' x ' + json.item.measurements.width + '</br>' + json.item.numberImages + ' pages' + '</br>' + json.item.year);
  // $("#itemDescription").append('<span class = "title">'+ json.item.title+ '</br> </span> Four sections in a cardboard box, 11.5 x 17, PART 1 – 16 pages, PART 2 – 32 pages, PART 3 – 16 pages, PART 4 – Letterpress printed fan. Edition of 3,000. Printed at Lompa Printing, Albany, CA, and Alonzo Printing, South San Francisco, CA. Publisher and art director: Rudy VanderLans. Digital type design and typesetting: Zuzana Licko.');

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

    /**** CONTRIBUTORS SECTION ****/
    var contributorsLength;
    function showParsedContributors() {
      $.each(json.item.contributors, function(index, element) {
        if (index >= 0 && index < 6) {
          $("#contributors").append(element + '</br>');
        }
        contributorsLength = index - 6;
      });
      if (contributorsLength > 0) {
        $("#showAllCont").text('+ ' + contributorsLength + ' more');
      }
    }

    function showAllContributors() {
      $.each(json.item.contributors, function(index, element) {
          $("#contributors").append(element + '</br>');
      });
      $("#contributors").append('<button id = "showLessCont"> - ' + contributorsLength + ' less </button></br>');

      $('#showLessCont').on('click',function(){
        $("#contributors").empty();
        showParsedContributors();
      });
    }

    showParsedContributors();

    $('#showAllCont').on('click',function(){
      $("#contributors").empty();
      $("#showAllCont").empty();
      showAllContributors();
    });
    /**** ENDCONTRIBUTORS SECTION ****/

  /**** END COLUMN TWO ****/

  /**** THUMBNAILS ***/
  $.each(json.item.imageURLs, function(index, element) {
    var isLastElement = index == json.item.imageURLs.length -1;

    /**** ZOOM ITEMS ****/
    if (index == 0) {
      $(".zoomItems").append(
        '<div id = "thumb001"><a href = ' + element +'><img src=' + element + '></a></div>'
      );
      $("#filmStrip").append(
        '<img id="firstImg-strip" class = "strip-img" src=' + element + '>'
      );
    }
    else if (isLastElement) {
      $(".zoomItems").append(
        '<div id = "thumb001"><a href = ' + element +'><img src=' + element + '></a></div>'
      );
      $("#filmStrip").append(
        '<img class = "strip-img" src=' + element + '>'
      );
    }
    else {
      $(".zoomItems").append(
        '<div class = "thumbnailPic"><a href = ' + element +'><img src=' + element + '></a></div>'
      );

      $("#filmStrip").append(
        '<img class = "strip-img" src=' + element + '>'
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
          '<div class="thumbnailPic" id = "thumb001"><a href = ' + element +'><img src=' + element + '></a></div>'
        );
      }
      else if (isLastElement) {
        $("#thumbnails").append(
          '<div class="thumbnailPic" id = "thumb001"><a href = ' + element +'><img src=' + element + '></a></div>'
        );
        console.log('last item')
      }
      else {
        $("#thumbnails").append(
          '<div class="thumbnailPic"><a href = ' + element +'><img src=' + element + '></a></div>'
        );
      }
    }
  });
  /**** END THUMBNAILS ****/
});

/**** LIGHTBOX ****/
$(function (){
  // var thumbnails = document.querySelectorAll("#thumbnails div");
  //   for (var i = 0; i < thumbnails.length; i++) {
  //       new Luminous(thumbnails[i]);
  //   }

  $('.thumbnailPic a').fluidbox();
  $('#thumb001 a').fluidbox();
});
/**** END LIGHTBOX ****/
