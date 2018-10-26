$.getJSON("datablobs/entrypage.json", function(json) {
  $.each(json.entryPageItems, function(index, element) {
      $('#resultsGrid').append(
        '<div class = "results-item colour"> <a target="_blank"href="https://www.google.com/"> <img src="' + element.entryContent.imageURL + '" style="width:100%" > <figcaption> ' + element.title + '</figcaption> </div> </a> ');
  });
});
