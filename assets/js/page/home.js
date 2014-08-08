define(['jquery', 'greensock'], function($){

(function ($) {
	"use strict";
	$.fn.dModalBox = function(options){

		var config = $.extend({
			width: 500,
			height: 500
		}, options);
		


	    return this.each(function(){
	    	
			var closebtn_overflow_width = config.width,	    	
	    		target_element = '#'+$(this).attr('data-target');

	    	$(this).on('click', function(){

	    		$(target_element+',.box-overlay').fadeIn('fast', function(){

	    			var close_btn_xpos = $(target_element).position().left,
	    				close_btn_ypos = $(target_element).position().top;

					$('.close-btn').show();	   
					$('.close-btn').css({
						'left':close_btn_xpos,
						'top':close_btn_ypos
					});	
					TweenLite.to($('.close-btn'), 0.7, {css:{
						'left': close_btn_xpos+($(target_element).width()+20)
					},
						ease:Quint.easeOut
					});
	    		});

	    		resizeWindow(target_element);

	    		window.onresize = function(){
					resizeWindow(target_element);
				}

	    		return false;

	    	})

	    	var resizeWindow = function(box){

				var offsetH = $(box).height()/2;
				var offsetW = $(box).width()/2;
				var x_pos = (window.innerWidth/2) - (offsetW);
				var y_pos = (window.innerHeight/2) - (offsetH);

				$(box).css({
					'left': x_pos+'px',
					'top': y_pos+'px',
					'width': config.width+'px',
					'height': config.height+'px'
				});

			}

			$('.close-btn').on({
				click: function(){
					$(target_element+',.box-overlay, .close-btn').fadeOut('fast');
				},
				mouseover: function (event) {
					TweenMax.to($(this), 0.7, { rotation:90, ease:Quint.easeOut, force3D:true });				
				},
				mouseout: function (event) {
					TweenMax.to($(this), 0, { rotation:0, force3D:true });	
				}
			})

			resizeWindow(target_element);
			
	    });

	}


}( jQuery ));

$('.click-me-btn').dModalBox({
	width: 500,
	height: 500
});

$('.click-me-btn2').dModalBox({
	width: 300,
	height: 100
});

});