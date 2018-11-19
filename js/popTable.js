$.getJSON("https://raw.githubusercontent.com/omarmhmmd/LFA/master/datablobs/t_lfa_amelia_201810061624.JSON", function(json) {
  $("#tableTitle").html(json.tableName + " by " + json.tableOwnerName);
  $.each(json.tableItems, function(index, element) {
    if (index < 5) {
      $("#topRow").append(
        '<div class = "tablePic"> <img src=' + element.imageURL + '></div>'
      );
    }
    else {
      $("#bottomRow").append(
        '<div class = "tablePic"> <img src=' + element.imageURL + '></div>'
      );
    }
  });
});
