/**** CODE SOURCED FROM https://dow-smith.com/ ****/
$(document).ready(function(){

	var a = {};

  a.settings = {

  },

  a.sizes = {},

	a.ui = {
		body: $('body'),
		win: $(window)
	},

	a.site = {
		init: function(){
      if(a.settings.screenType !== 'touch'){
				this.clonePage();
        console.log("desktop");
			}
      else if(a.settings.screenType == 'touch'){
        console.log('mobile');
      }
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

  a.helpers = {

  	init: function(){
  		this.checkMediaQuery();
  	},

  	checkMediaQuery: function(){
  		if(!$('.media-check').length){$('body').append('<div class="media-check"></div>')}
  		var mediaCheck = $('.media-check').css('text-indent');
  		if(mediaCheck === '10px'){a.sizes.media = 'mobile';}
  		else if(mediaCheck === '20px'){a.sizes.media = 'tablet';}
  		else if(mediaCheck === '30px'){a.sizes.media = 'desktop';}
  		else if(mediaCheck === '40px'){a.sizes.media = 'xl';}
  		else if(mediaCheck === '50px'){a.sizes.media = 'xxl';}
  		else {a.sizes.media = 'unsure';}
  		a.settings.screenType = $('html').hasClass('mobile') || $('html').hasClass('tablet') ? 'touch' : 'mouse';
  	},
	}

	a.helpers.init();
	a.site.init();
});
/**** CODE SOURCED FROM https://dow-smith.com/ ****/
