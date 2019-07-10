
	
	var o = 100;
	var off = 0;
	var i = 0;
	var isMobile = false;''
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		off = 200;
		i = 300;
		isMobile = true;
    }
	
	function doOnOrientationChange() {
		if(isMobile){
		switch(window.orientation) {  
		  case -90 || 90:
			i = 0;
			off = 0;
			controllerTriggeragain();
			break; 
		  default:
			i = 300;
			off = 200;
			controllerTriggeragain();
			break; 
		}
		}else{
			i = 0;
			off =0;
			controllerTriggeragain();
		}
	}
	window.addEventListener('orientationchange', doOnOrientationChange);
	
// Initial execution if needed
doOnOrientationChange(); 
	console.log(off,i,o)
	// function controllerTriggeragain(){
	// 	var controller = new ScrollMagic.Controller();
	
	// // build scenes
	// new ScrollMagic.Scene({triggerElement: ".content",duration:o,offset:off})
	// 				.addTo(controller)
	// 				.setTween(TweenMax.to(".logo", 0.5, {transform: "translateX(0)"}))
	// 				//.addIndicators() // add indicators (requires plugin)
					
	// 				new ScrollMagic.Scene({triggerElement: ".content",duration:o,offset:off})
	// 				.addTo(controller)
	// 				.setTween(TweenMax.to("ul", 0.5, {transform: "translateX(0)"}))
	// 				 // add indicators (requires plugin)
	// 				new ScrollMagic.Scene({triggerElement: ".content",duration:o,offset:off})
	// 				.addTo(controller)
	// 				.setTween(TweenMax.to(".divider", 0.01, {opacity:1}))
	// 				 // add indicators (requires plugin)
	// 				new ScrollMagic.Scene({triggerElement: ".content",duration:o,offset:off+i})
	// 				.addTo(controller)
	// 				.setTween(TweenMax.to("nav", 0.001, {background:"#F87C7C"}))
	// 				//.addIndicators()
	// 				 // add indicators (requires plugin)
					
	// }
	// init controller
	
	