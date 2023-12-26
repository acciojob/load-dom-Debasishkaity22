//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(e){
	let body1=document.body;
	body1.innerHTML=``;
	let p1=document.createElement("p");
	p1.textContent="DOM load success";
	body1.appendChild(p1);
})