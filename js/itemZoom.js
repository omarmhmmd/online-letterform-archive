/**** CHECK ZOOM PAGE STATE ****/
function changeZoomPage(what) {
  if (what == 'zoom') {
    $('.zoomItems').removeClass("zoomItemsGrid").addClass("zoomItemsScroll");
    $("#zoomButton").attr("src","svg/zoomButton.svg");
    $("#gridButton").attr("src","svg/gridButton.svg");
  }
  else if (what == 'grid') {
    $('.zoomItems').removeClass("zoomItemsScroll").addClass("zoomItemsGrid");
    $("#zoomButton").attr("src","svg/grey.svg");
    $("#gridButton").attr("src","svg/red.svg");
  }
}
/**** CHECK ZOOM PAGE STATE ****/
