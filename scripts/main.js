let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/thanks-see-you-soon-again.png') {
      myImage.setAttribute('src','images/fuck-you.png');
    } else {
      myImage.setAttribute('src','images/thanks-see-you-soon-again.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter a username.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Hello ' + myName + '!';
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back ' + storedName + '!';
  }
  myButton.onclick = function() {
    setUserName();
  }