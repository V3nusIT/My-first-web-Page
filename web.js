var button = document.getElementById("interactive-button");
button.addEventListener("click", function(){ alert("Belgian Shepherd") } , false);


var x = document.getElementById("myDIV");

// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "";
  this.style.backgroundColor = "lightgray";
}
