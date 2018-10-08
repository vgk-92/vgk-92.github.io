var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sample1.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/sample1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  /*API called localStorage allows us to store data in the browser and later retrieve it. 
  We use localStorage's setItem() function to create and store a data item called 'name', 
  setting its value to the myName variable which contains the data the user entered. */
  myHeading.textContent = 'Welcome to TCL, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to TCL, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}