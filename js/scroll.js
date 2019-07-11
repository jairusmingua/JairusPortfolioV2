import  jump  from './jump.module.js';
window.addEventListener('load', (ev)=>{
	loadingDone();
	
});

document.querySelector("#scrolltoinfo").addEventListener("click",()=>{
	scrolltoInfo();
})
document.querySelector("#homebtn").addEventListener("click",()=>{
	scrolltoHome();
})
document.querySelector(".logo").addEventListener("click",()=>{
	scrolltoHome();
})
document.querySelector("#worksbtn").addEventListener("click",()=>{
	scrolltoInfo();
})
function scrolltoInfo(){
		let o = parseInt($('.about-body').css("margin-top"),10);
		
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