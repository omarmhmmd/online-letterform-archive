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

/**** SHOW ACTIVE STATE OF FILTERS ****/
// var btnContainer = document.getElementById("filters");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("filterActive");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" filterActive", "");
//     }
//     this.className += " filterActive";
//   });
// }
/**** END SHOW ACTIVE STATE OF FILTERS ****/









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


/**** STORE TAGS ****/
var clickedD = 0;

function storeDecades() {
  $('#decadeTags>p>button').on('click', function() {
    $(this).toggleClass("TagActive");
    var toggled = $(this).hasClass("TagActive");
    if (toggled == true) {
      clickedD = clickedD + 1;
    } else if (toggled == false) {
      clickedD = clickedD - 1;
    }
    if (clickedD > 0) {
      $('#decade').addClass("filterActive");
    } else if (clickedD == 0) {
      clickedD = 0;
      $('#decade').removeClass("filterActive");
    }
    // console.log('DECADE CLICKED: ' + clickedD);
  });
}

var clickedF = 0;

function storeFormats() {
  $('#formatTags>p>button').on('click', function() {
    $(this).toggleClass("TagActive");
    var toggled = $(this).hasClass("TagActive");
    if (toggled == true) {
      clickedF = clickedF + 1;
    } else if (toggled == false) {
      clickedF = clickedF - 1;
    }
    if (clickedF > 0) {
      $('#format').addClass("filterActive");
    } else if (clickedF == 0) {
      clickedF = 0;
      $('#format').removeClass("filterActive");
    }
    // console.log('FORMAT CLICKED: ' + clickedF);
  });
}

var clickedT = 0;

function storeTechs() {
  $('#techTags>p>button').on('click', function() {
    $(this).toggleClass("TagActive");
    var toggled = $(this).hasClass("TagActive");
    if (toggled == true) {
      clickedT = clickedT + 1;
    } else if (toggled == false) {
      clickedT = clickedT - 1;
    }
    if (clickedT > 0) {
      $('#tech').addClass("filterActive");
    } else if (clickedT == 0) {
      clickedT = 0;
      $('#tech').removeClass("filterActive");
    }
    // console.log('TECH CLICKED: ' + clickedT);
  });
}
/**** END STORE TAGS ****/

function sort(filterChoices) {
  filterChoices_clean = $.map(filterChoices.sort(), function(v, i) {
    filterChoices[i] === filterChoices[i + 1] && (filterChoices[i] = filterChoices[i + 1] = null);
    return filterChoices[i];
  });
}


/**** SELECTED TAGS ****/
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
  }
  else if (id == 'formatTags') {
    formatChoices.push($(this).text());
    sort(formatChoices, formatChoices_sorted);
  }
  else if (id == 'techTags') {
    techChoices.push($(this).text());
    sort(techChoices, techChoices_sorted);
  }
  $('#filterResults').append(
    '<h1>We found 37 <span>' + techChoices.join(', ') + '</span>, ' + '<span>' + formatChoices.join(', ') + '</span> from the <span>' + decadeChoices.join(', ') + '</span></h1>'
  );
});
/**** END SELECTED TAGS ****/

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





// /**** SORT SELECTED TAGS ****/
// var decadeChoices = new Array();
// $('#decadeTags>p>button').click(function() {
//   decadeChoices.push($(this).text());
//   decadeChoices_clean = $.map(decadeChoices.sort(), function(v, i) {
//     decadeChoices[i] === decadeChoices[i + 1] && (decadeChoices[i] = decadeChoices[i + 1] = null);
//     return decadeChoices[i];
//   });
//   console.log("DECADE CHOICES: " + decadeChoices_clean);
// });
//
// var formatChoices = new Array();
// $('#formatTags>p>button').click(function() {
//   formatChoices.push($(this).text());
//   formatChoices_clean = $.map(formatChoices.sort(), function(v, i) {
//     formatChoices[i] === formatChoices[i + 1] && (formatChoices[i] = formatChoices[i + 1] = null);
//     return formatChoices[i];
//   });
//   console.log("FORMAT CHOICES: " + formatChoices_clean);
// });
//
// var techChoices = new Array();
// var techChoices_clean;
// $('#techTags>p>button').click(function() {
//   techChoices.push($(this).text());
//   techChoices_clean = $.map(techChoices.sort(), function(v, i) {
//     techChoices[i] === techChoices[i + 1] && (techChoices[i] = techChoices[i + 1] = null);
//     return techChoices[i];
//   });
//   console.log("TECH CHOICES: " + techChoices_clean);
// });
// /**** END SORT SELECTED TAGS ****/
//
// console.log("TECH CHOICES: " + techChoices);
// $('#filterResults').append(
//   '<h1>We found <span>' + techChoices + '</span><span>s</span></h1>'
// );





// var filterSelected = false;
// $('.Tags>p>button').on('click', function() {
//   filterSelected = true;
//   $(this).toggleClass("TagActive");
// });

// $('#filters>button').on('click', function() {
//      $(this).toggleClass("filterActive");
// });

// $('#decade').click(function() {
//     $('#decadeTags').toggle();
//     document.getElementById("formatTags").style.display = "none";
//     document.getElementById("techTags").style.display = "none";
// });
//
// $('#format').click(function() {
//     $('#formatTags').toggle();
//     document.getElementById("decadeTags").style.display = "none";
//     document.getElementById("techTags").style.display = "none";
// });
//
// $('#tech').click(function() {
//     $('#techTags').toggle();
//     document.getElementById("formatTags").style.display = "none";
//     document.getElementById("decadeTags").style.display = "none";
// });
