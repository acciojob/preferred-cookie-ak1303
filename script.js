//your JS code here. If required.
let form = document.getElementsByTagName('form')[0];
let fontColor = document.getElementById('fontcolor');
let fontSize = document.getElementById('fontsize');
if(localStorage.getItem('color')){
	fontColor.value = localStorage.getItem('color');
	fontSize.value = localStorage.getItem('size');
}
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let color = fontColor.value;
	let size = fontSize.value;
	localStorage.setItem('color',color);
	localStorage.setItem('size',size);
	fontColor.value = localStorage.getItem('color');
	fontSize.value = localStorage.getItem('size');
});