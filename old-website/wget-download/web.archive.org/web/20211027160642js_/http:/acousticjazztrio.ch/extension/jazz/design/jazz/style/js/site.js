var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
	$('#navigation').css('height', $('#navigation nav').first().height());
	$('#navigation li a').each(function(i, el) {
		var w = $(el).width() + parseInt($(el).css('padding-left').split('px')[0]) + parseInt($(el).css('padding-right').split('px')[0]);
		var l = Math.floor(Math.random() * (980 - w + 1));
		$(el).css({'left': l, 'background-position-x': l * -1});
	});
	$('#navigation nav').fadeOut(0);
	$('section.content:first nav ul li:first a').css('opacity', '0.6');
	
	$('section.content nav').each(function() {
		$(this).find('a').css('color', $(this).css('color'));
	});
	
	$('nav a').click(function(){
		var top = $( $.attr(this, 'href') ).offset().top;
		if ( $.attr(this, 'href') == '#navigation' ) {
			top = 0;
		}
		
	    $('html, body').animate({
	        scrollTop: top
	    }, 800, 'easeInOutExpo');
	    return false;
	});
	
	$(window).on('scroll', function() {
		if ( $(window).scrollTop() >= 25 ) {
			$('#header').addClass('scroll');
		}
		else {
			$('#header').removeClass('scroll');
		}
	});
	
	$('section.content article table').each(function() {
		var columns = $(this).find('tr').first().find('td').length;
		$(this).css({'width': $(this).parents('article').width() + 30, 'margin-left': '-15px', 'margin-right': '-15px'});
		$(this).find('td').css({'padding': '0 15px', 'width': $(this).width() / columns - 30});
	});
	
	$('section.content article i').each(function() {
		$(this).parents('p').first().addClass('small');
	});
	
	var imgLoaded = 0;
	$(imgLoad).each(function(i, el) {
		$('<img />').attr('src', el).load(function() {
			$(this).remove();
			imgLoaded++;
			
			if ( imgLoaded == imgLoad.length ) {
				$('#navigation nav').fadeIn();
			}
		});
	});
});

}
/*
     FILE ARCHIVED ON 10:03:43 Jan 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:53 Dec 20, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 275.589
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.078
  cdx.remote: 0.067
  esindex: 0.011
  LoadShardBlock: 242.075 (3)
  PetaboxLoader3.datanode: 308.013 (5)
  load_resource: 217.048 (2)
  PetaboxLoader3.resolve: 77.786 (2)
*/