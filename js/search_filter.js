/**** SHOW MENU ****/
var show = false;
function showMenu() {
  var x = document.getElementById("menu");
  if (show == false) {
    x.style.display = "block";
    document.getElementById('searchButton').src='svg/X.svg';
    document.getElementById('overlay').style.zIndex = "1";
    show = true;
  }
  else if (show == true ){
    x.style.display = "none";
    document.getElementById('searchButton').src='svg/SearchGlass.svg';
    document.getElementById('overlay').style.zIndex = "-1";
    show = false;
  }

  /**** OVERLAY ****/


}

/**** SHOW ACTIVE STATE OF FILTERS ****/
// Get the container element
var btnContainer = document.getElementById("filters");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
/**** SHOW ACTIVE STATE OF FILTERS ****/

/**** SHOW TAGS ****/
function showTags(filter) {
  var filterTags = "";
  var filterTags = filter;
  var filterTags = filterTags + "Tags";

  var tags = document.getElementById(filterTags);

  if (filterTags == "decadeTags") {
    document.getElementById("decadeTags").style.display = "flex";
    document.getElementById("formatTags").style.display = "none";
    document.getElementById("techTags").style.display = "none";
  } else if (filterTags == "formatTags") {
    document.getElementById("formatTags").style.display = "flex";
    document.getElementById("decadeTags").style.display = "none";
    document.getElementById("techTags").style.display = "none";
  } else if (filterTags == "techTags") {
    document.getElementById("techTags").style.display = "flex";
    document.getElementById("formatTags").style.display = "none";
    document.getElementById("decadeTags").style.display = "none";
  }

  // if (tags.style.display === "flex") {
  //   tags.style.display = "none";
  // }
  // else {
  //   tags.style.display = "flex";
  // }
}
/**** END SHOW TAGS ****/
