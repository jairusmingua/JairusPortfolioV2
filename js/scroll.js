import  jump  from './jump.module.js';
const player = document.querySelector('lottie-player');
$(window).on("load", function() {
	loadingDone();
 });
document.querySelector("#scrolltoinfo").addEventListener("click",()=>{
	scrolltoInfo();
})
	function scrolltoInfo(){
		jump("#about");
	}

function loadingDone(){
	console.log("done");
	document.querySelector(".loading").classList.toggle("done");
	document.querySelector("lottie-player").classList.toggle("done");
	player.stop();
}