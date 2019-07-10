import  jump  from './jump.module.js';

	
document.querySelector("#scrolltoinfo").addEventListener("click",()=>{
	scrolltoInfo();
})
	function scrolltoInfo(){
		jump("#about");
	}