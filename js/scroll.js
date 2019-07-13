import  jump  from './jump.module.js';

//global variables
var a = parseInt($('.about-body').css("margin-top"),10);
var w = parseInt($('.work-body').css("margin-top"),10);
window.addEventListener('load', (ev)=>{
	loadingDone();
	
});
//homepage listener
//nav
document.querySelector("#scrolltoinfo").addEventListener("click",()=>{
	scrolltoInfo();
})
// document.querySelector("#homebtn").addEventListener("click",()=>{
// 	scrolltoHome();
// })
document.querySelector(".logo").addEventListener("click",()=>{
	scrolltoHome();
})
document.querySelector("#worksbtn").addEventListener("click",()=>{
	scrolltoWork();
})
function scrolltoInfo(){
	    a= parseInt($('.about-body').css("margin-top"),10);
		jump("#about",{
			offset:-a
		});
}
function scrolltoWork(){
	
	w = parseInt($('.work-body').css("margin-top"),10);
	jump("#works",{
		offset:-w
	});
}
function scrolltoHome(){
		jump("#header");
}
function loadingDone(){
	// console.log("done");
	document.querySelector(".loading").classList.toggle("done");
	document.querySelector("#logoloading").classList.toggle("done");
	jump("#header");
}
//end nav
//About Section///////////////////////////////
//scrollmagic triggers
//about section trigger
var d = 150;
var i = 0;
var controller = new ScrollMagic.Controller()
new ScrollMagic.Scene({triggerElement: "#header",offset:a+250})
					.addTo(controller)
					.setTween(TweenMax.to($("li"),0.5, {css:{color:"white"}, ease:Back.easeOut}))
					//.addIndicators();
new ScrollMagic.Scene({triggerElement: "#header",offset:	a+250})
					.addTo(controller)
					.setTween(TweenMax.to($(".logo_svg"),0.5, {css:{fill:"white"}, ease:Back.easeOut}))

new ScrollMagic.Scene({triggerElement: "#about",offset:-a+250})
					.addTo(controller)
					.setTween(TweenMax.to($("li"),0.5, {css:{color:"#0080FF"}, ease:Back.easeOut}))
					//.addIndicators();
new ScrollMagic.Scene({triggerElement: "#about",offset:-a+250})
					.addTo(controller)
					.setTween(TweenMax.to($(".logo_svg"),0.5, {css:{fill:"#0080FF"}, ease:Back.easeOut}))
					//.addIndicators()
new ScrollMagic.Scene({triggerElement: "#about",duration:d+a,offset:-a})
					.addTo(controller)
				
					.setTween(TweenMax.to(".about-body", 0.5, {transform: "translateX(0)",opacity:"1"}))
					//.addIndicators()
new ScrollMagic.Scene({triggerElement: "#about",offset:-a})
					.addTo(controller)
					.setClassToggle(".about-text", "floatup")
					//.addIndicators()
//work section trigger
new ScrollMagic.Scene({triggerElement: "#works",offset:-w+250})
					.addTo(controller)
					.setTween(TweenMax.to($("li"),0.5, {css:{color:"#D700FF"}, ease:Back.easeOut}))
					//.addIndicators();
new ScrollMagic.Scene({triggerElement: "#works",offset:-w+250})
					.addTo(controller)
					.setTween(TweenMax.to($(".logo_svg"),0.5, {css:{fill:"#D700FF"}, ease:Back.easeOut}))
new ScrollMagic.Scene({triggerElement: "#works",offset:-w+250})
					.addTo(controller)
					.on("enter leave", function (e) {
						loadChart();
					})
				//	.addIndicators()

//end of triggers


//work section
function loadChart(){
	$(function() {
		$('.chart').easyPieChart({
			barColor:"#D700FF",
			scaleColor:false,
			scaleLength:0,
			lineWidth:50,
			size:300
		});
	});
	$('canvas').css("height","");
	$('canvas').css("width","");
}
function playchart(){
	$('.chart').data('easyPieChart').enableAnimation();
}

