import  jump  from './jump.module.js';
//global variables
var o = parseInt($('.about-body').css("margin-top"),10);
		
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
	scrolltoInfo();
})
function scrolltoInfo(){
		
		jump("#about",{
			offset:-o
		});
}
function scrolltoHome(){
		jump("#header");
}
function loadingDone(){
	console.log("done");
	document.querySelector(".loading").classList.toggle("done");
	document.querySelector("#logoloading").classList.toggle("done");
	jump("#header");
}
//end nav
//About Section///////////////////////////////
//scrollmagic triggers
var d = o+150;
var i = 0;
var controller = new ScrollMagic.Controller()
new ScrollMagic.Scene({triggerElement: "#about",offset:-o+250})
					.addTo(controller)
					.setTween(TweenMax.to($("li"),0.5, {css:{color:"#0080FF"}, ease:Back.easeOut}))
					//.addIndicators();
new ScrollMagic.Scene({triggerElement: "#about",offset:-o+250})
					.addTo(controller)
					.setTween(TweenMax.to($(".logo_svg"),0.5, {css:{fill:"#0080FF"}, ease:Back.easeOut}))
					//.addIndicators()
new ScrollMagic.Scene({triggerElement: "#about",duration:d,offset:-o})
					.addTo(controller)
				
					.setTween(TweenMax.to(".about-body", 0.5, {transform: "translateX(0)",opacity:"1"}))
					//.addIndicators()
new ScrollMagic.Scene({triggerElement: "#about",offset:-o})
					.addTo(controller)
					.setClassToggle(".about-text", "floatup")
					//.addIndicators()
