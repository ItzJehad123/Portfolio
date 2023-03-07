var i = 0; // index of the current letter
var txt1 = "Welcome to My Personal Portfolio"; // first text
var txt2 = "created by Denis Stankov"; // second text
var speed = 50; // typing speed in milliseconds

function typeWriter1() {
  if (i < txt1.length) { // if there are more letters to type
    document.getElementById("text").innerHTML += txt1.charAt(i);
    
    i++; // increment the letter index
    setTimeout(typeWriter1, speed); // call the function again after a delay
  } else { // if the first text is finished
    i = 0; // reset the letter index
    document.getElementById("text").innerHTML += "<br>"; // add a line break
    setTimeout(typeWriter2, speed); // call the second function after a delay
  }
}
function typeWriter2() {
  if (i < txt2.length) { // if there are more letters to type
    
    document.getElementById("text2").innerHTML += txt2.charAt(i);
      // type the next letter
    i++; // increment the letter index
    setTimeout(typeWriter2, speed); // call the function again after a delay
  }
}