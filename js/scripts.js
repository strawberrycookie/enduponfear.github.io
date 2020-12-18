var i = 0;
var txt = 'IP address..........obtained, delivered, product arriving in three business days.';
var speed = 35;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function driver() {
  typeWriter();

  setTimeout(showButton, speed*(txt.length + 10));
}
