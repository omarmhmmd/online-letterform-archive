$.getJSON("datablobs/resultsTwo.json", function(json) {
  $.each(json.resultsPage, function(index, element) {
      $('#resultsGrid').append(
        '<div class = "results-item colour"> <a target="_blank"href="https://www.google.com/"> <img src="' + element.imageURL + '" style="width:100%" > <figcaption> ' + element.title + '</figcaption> </div> </a> ');
  });
});
