var MSfullWidth = function () {

    return {
        
        //Master Slider - Full Width
        initMSfullWidth: function () {
		    var slider = new MasterSlider();
		    slider.setup('masterslider' , {
		        width:1024,
		        height:400,
		        fullwidth:true,
		        centerControls:false,
		        speed:18,
		        view:'flow',
				loop: true,
				autoplay: true,
				autoplayDelay:4,
		    });
		    slider.control('arrows');
		    slider.control('bullets' ,{autohide:false});
        },

    };
}();        