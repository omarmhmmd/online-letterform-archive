// // $('document').ready(function() {
// //   $(document).scroll(function() {
// //     if (document.documentElement.clientHeight +
// //       $(document).scrollTop() >= document.body.offsetHeight) $(document).scrollTop(0);
// //   });
// // });
//
// var myFullpage = new fullpage('#container', {
//   continuousVertical: true,
//   scrollOverflow: false,
//   afterLoad: function(anchorLink, index) {
//     console.log("AFTER LOAD - anchorLink:" + anchorLink + " index:" + index);
//   },
//   onLeave: function(index, nextIndex, direction) {
//     console.log("ONLEAVE - index:" + index + " nextIndex:" + nextIndex + " direction:" + direction);
//
//   },
// });


/**** CODE SOURCED FROM https://dow-smith.com/ ****/
$(document).ready(function(){

	var a = {};

	a.ui = {
		body: $('body'),
		win: $(window)
	},

	a.site = {
		init: function(){
			this.clonePage();
		},

		clonePage: function(){
			var toAppend = $('#container').clone();
			$('.loop').append($('header').clone(), toAppend);
			$(document).scrollTop(1);
			a.site.loopPage();
		},

		loopPage: function(){
			$(document).on('scroll', function(){
				var toTop = a.ui.win.scrollTop();
				if (document.documentElement.clientHeight + toTop >= $(document).height()){
					$(document).scrollTop(0);
				}
			});
		}
	}

	a.site.init();
});
/**** CODE SOURCED FROM https://dow-smith.com/ ****/
