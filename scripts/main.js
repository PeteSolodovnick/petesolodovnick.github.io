var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/water.jpeg') {
		myImage.setAttribute('src','images/kulbaba.jpg');	
	} else {
		myImage.setAttribute('src','images/water.jpeg');	
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla love you, ' + myName; 
}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla love you, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
