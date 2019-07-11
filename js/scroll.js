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
document.querySelector("#worksbtn").addEventListener("click",()=>{
	scrolltoInfo();
})
function scrolltoInfo(){
		jump("#about",{
			offset:-150
		});
}
function scrolltoHome(){
		jump("#header");
}

function loadingDone(){
	console.log("done");
	document.querySelector(".loading").classList.toggle("done");
	document.querySelector("#logoloading").classList.toggle("done");
	
}