/**** SHOW TAGS ****/
function ShowTags(filter) {
  var filterTags = "";
  var filterTags = filter;
  var filterTags = filterTags + "Tags";
  console.log(filter);

  var tags = document.getElementById(filterTags);
  var allTags = document.getElementsByClassName("Tags");

  var y;
  if (filterTags == "decadeTags") {
    document.getElementById("formatTags").style.display = "none";
    document.getElementById("techTags").style.display = "none";
  } else if (filterTags == "formatTags") {
    document.getElementById("decadeTags").style.display = "none";
    document.getElementById("techTags").style.display = "none";
  }
  else if (filterTags == "techTags") {
    document.getElementById("formatTags").style.display = "none";
    document.getElementById("decadeTags").style.display = "none";
  }

  var colorText = document.getElementById(filter);
  if (tags.style.display === "flex") {
    tags.style.display = "none";
  }
  else {
    tags.style.display = "flex";
  }
}
/**** END SHOW TAGS ****/
