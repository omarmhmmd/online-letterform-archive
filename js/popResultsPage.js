$.getJSON("datablobs/results2.json", function(json) {

  $.each(json.resultsPage, function(index, element) {
    $('#resultsGrid').append(
      '<div class="tooltip results-item colour"> <img src=' + element.imageURL + '><span class = "tooltip-span">' + element.title + '</span></div>');
  });
});

$(function() {
  var tooltipSpan = document.getElementsByClassName('tooltip-span');

  window.onmousemove = function(e) {
    for (var i = 0; i < tooltipSpan.length; i++) {
      var x = e.clientX,y = e.clientY;
      tooltipSpan[i].style.top = (y + 15) + 'px';
      tooltipSpan[i].style.left = (x + 15) + 'px';
    }
  };
});
