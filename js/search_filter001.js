// $(document).ready(function(){
//   $("#format").click(function(){
//     $("#formatTags").show();
//     $("#decadeTags").hide();
//   });
//   $("#decade").click(function(){
//     $("#decadeTags").show();
//     $("#formatTags").hide();
//   });
// });
//
var created = false;

function ShowTags(filter) {
  created = true;

  if (created == true) {
    $(".formatTags p").html("");
  }

  var filterTags = "";
  var filterTags = filter;
  var filterTags = filterTags + "Tags";

  var tags = document.getElementById(filterTags);
  var colorText = document.getElementById(filter);
  if (tags.style.display === "flex") {
    tags.style.display = "none";
  }
  else {
    tags.style.display = "flex";
  }

  console.log(filter)
  if (filter == "format") {
    var data = [
      {'name':'Book'},
      {'name':'Booklet'},
      {'name':'Brochure'},
      {'name':'Business Card'},
      {'name':'Clipping'},
      {'name':'Greeting Card'},
      {'name':'Label'},
      {'name':'Letter'},
      {'name':'Magazine'},
      {'name':'Poster'},
      {'name':'Print'},
      {'name':'Sketch'},
      {'name':'Textile'},
      {'name':'Type Specimen'}
    ];
  }



  var transform = {'<>':'button','text':'${name}'};
  $('.formatTags p').json2html(data,transform);

}
