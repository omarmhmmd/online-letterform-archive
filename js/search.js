/**** SHOW MENU W/ OVERLAY ****/
// var show = false;
// function showMenu() {
//   var x = document.getElementById("resultsPage");
//   if (show == false) {
//     x.style.display = "block";
//     document.getElementById('searchButton').src='svg/x2.svg';
//     document.getElementById('entryGrid').style.display = "none";
//     // document.getElementById('overlay').style.zIndex = "1";
//     show = true;
//   }
//   else if (show == true ){
//     x.style.display = "none";
//     document.getElementById('searchButton').src='svg/SearchGlass.svg';
//     document.getElementById('entryGrid').style.display = "flex";
//     // document.getElementById('overlay').style.zIndex = "-1";
//     show = false;
//   }
// }
/**** END SHOW MENU W/ OVERLAY ****/

/**** GET USER INPUT ****/
//creates a listener for when you press a key
window.onkeyup = keyup;
var userInput;
function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  userInput = e.target.value;
  console.log(userInput);
  // if (e.keyCode == 13) {
  //  window.location = "https://letterformarchive.org/" + userInput;
  // }
}
/**** END GET USER INPUT ****/


/**** SHOW TAGS ****/
function showTags(filter) {
  var filterTags = "";
  var filterTags = filter;
  var filterTags = filterTags + "Tags";
  var tagSelected = false;
  $('#' + filter).toggleClass("filterActiveUnderline");
  $('#' + filterTags).toggle();
}
/**** END SHOW TAGS ****/


/**** STORE CLICK STATES ****/
function checkState(tag, clicked) {
  if (clicked > 0) {
    $(tag).addClass("filterActive");
    console.log("Clicked: " + clicked + " red");
  } else if (clicked == 0) {
    $(tag).removeClass("filterActive");
    clicked = 0;
    console.log("Clicked: " + clicked + " black");
  }
}

var decadesClicked = 0;
var formatClicked = 0;
var techClicked = 0;
function checkClicks(toggled,tag) {
  if (tag == '#decade') {
    if (toggled == true) {
      decadesClicked = decadesClicked + 1;
    } else if (toggled == false) {
      decadesClicked = decadesClicked- 1;
    }
    return decadesClicked;
  }
  else if (tag == '#format') {
    if (toggled == true) {
      formatClicked = formatClicked + 1;
    } else if (toggled == false) {
      formatClicked = formatClicked- 1;
    }
    return formatClicked;
  }
  else if (tag == '#tech') {
    if (toggled == true) {
      techClicked = techClicked + 1;
    } else if (toggled == false) {
      techClicked = techClicked- 1;
    }
    return techClicked;
  }
}

$('#decadeTags>p>button').on('click', function() {
  $(this).toggleClass("TagActive");
  var toggled = $(this).hasClass("TagActive");
  checkState('#decade', checkClicks(toggled, '#decade'));
});


$('#formatTags>p>button').on('click', function() {
  $(this).toggleClass("TagActive");
  var toggled = $(this).hasClass("TagActive");
  checkState('#format', checkClicks(toggled, '#format'));
});


$('#techTags>p>button').on('click', function() {
  $(this).toggleClass("TagActive");
  var toggled = $(this).hasClass("TagActive");
  checkState('#tech', checkClicks(toggled, '#tech'));
});

/**** END STORE CLICK STATES ****/


/**** GET USER SELECTED TAGS INTO ARRAY & DISPLAY SELECTIONS ****/
var decadeChoices = new Array();
var decadeChoices_sorted = decadeChoices;
var formatChoices = new Array();
var formatChoices_sorted = formatChoices;
var techChoices = new Array();
var techChoices_sorted = techChoices;
$('.Tags>p>button').click(function() {
  $("#filterResults").text('');
  var id = $(this).closest('div').attr('id');
  if (id == 'decadeTags') {
    decadeChoices.push($(this).text());
    sort(decadeChoices, decadeChoices_sorted);
  } else if (id == 'formatTags') {
    formatChoices.push($(this).text());
    sort(formatChoices, formatChoices_sorted);
  } else if (id == 'techTags') {
    techChoices.push($(this).text());
    sort(techChoices, techChoices_sorted);
  }
  if (decadeChoices.length > 0 || formatChoices.length > 0 || techChoices.length > 0) {
    $('#filterResults').append(
      '<h1>We found ___ <span>' + techChoices.join(', ') + '</span>, ' + '<span>' + formatChoices.join(', ') + '</span> from the <span>' + decadeChoices.join(', ') + '</span></h1>'
    );
  }
});
/**** END GET USER SELECTED TAGS INTO ARRAY & DISPLAY SELECTIONS ****/


/**** SORT ARRAY TO REMOVE DUPLICATE CLICKS ****/
function sort(myArr, newArr) {
  for (var h = 0; h < myArr.length; h++) {
    var curItem = myArr[h];
    var foundCount = 0;
    // search array for item
    for (var i = 0; i < myArr.length; i++) {
      if (myArr[i] == myArr[h])
        foundCount++;
    }
    if (foundCount > 1) {
      // remove repeated item from new array
      for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] == curItem) {
          newArr.splice(j, 1);
          j = j - 1;
        }
      }
    }
  }
}
/**** END SORT ARRAY TO REMOVE DUPLICATE CLICKS ****/
