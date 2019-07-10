import  jump  from './jump.module.js';
window.addEventListener('load', (ev)=>{
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