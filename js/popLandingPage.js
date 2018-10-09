var arrItems = []; // THE ARRAY TO STORE JSON ITEMS.
$.getJSON("../data/results.json", function(json) {
  $.each(json.resultsPage, function(index, element) {
    arrItems.push(element.imageURL);
    $('.column').append('<img src="' + element.imageURL+ '" style="width:100%">')
  });
});
