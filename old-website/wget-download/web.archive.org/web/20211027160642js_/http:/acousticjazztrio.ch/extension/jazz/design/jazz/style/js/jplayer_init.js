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
	$('.jp-container').each(function(i, container) {
		var p = '#' + $(container).attr('id');
		var player = $(p).find('.jp-player').first();

		var myControl = {
			progress: $(p).find(".jp-progress-slider").first(),
			volume: $(p).find(".jp-volume-slider").first()
		};

		var myPlayer = $(player).jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					m4a: $(p).attr('data-music-m4a'),
					oga: $(p).attr('data-music-oga')
				});
			},
			play: function() {
				$(this).jPlayer("pauseOthers");
			},
			timeupdate: function(event) {
				myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			swfPath: "../js",
			supplied: "m4a, oga",
			wmode: "window",
			globalVolume: false,
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			keyEnabled: true,
			cssSelectorAncestor: p + " .jp_controls",
		});

		myPlayerData = $(player).data('jPlayer');
		myControl.progress.slider({
			animate: "fast",
			max: 100,
			range: "min",
			step: 0.1,
			value : 0,
			slide: function(event, ui) {
				var sp = myPlayerData.status.seekPercent;
				if(sp > 0) {
					$(player).jPlayer("playHead", ui.value * (100 / sp));
				} else {
					setTimeout(function() {
						myControl.progress.slider("value", 0);
					}, 0);
				}
			}
		});

		myControl.volume.slider({
			animate: "fast",
			max: 1,
			range: "min",
			step: 0.01,
			value : myPlayerData.options.volume,
			slide: function(event, ui) {
				$(player).jPlayer("option", "muted", false);
				$(player).jPlayer("option", "volume", ui.value);
			}
		});
	});
});

}
/*
     FILE ARCHIVED ON 19:02:33 Jan 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:54 Dec 20, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 68.756
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.081
  cdx.remote: 0.061
  esindex: 0.009
  LoadShardBlock: 44.969 (3)
  PetaboxLoader3.datanode: 143.516 (5)
  load_resource: 234.492 (2)
  PetaboxLoader3.resolve: 125.853 (2)
*/