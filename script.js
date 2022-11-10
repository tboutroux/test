// Top Button function
document.addEventListener('DOMContentLoaded', function() { // DOMContentLoad signifie que la page est chargée
    window.onscroll = function() {
      document.getElementById("top-button").className = (window.pageYOffset > 500) ? "top-button" : "";
    };
  });


// NavBar
  let myNav = document.getElementById("myNav");
  let navBarIcon = document.getElementById("nav-bar-icon");
  let closeButton = document.getElementById("closebtn");
  
  navBarIcon.addEventListener('click', function(){ 
      myNav.style.width = "100%";
      navBarIcon.style.display = "none";
  })
  
  closeButton.addEventListener('click', function(){ 
      myNav.style.width = "0%";
      navBarIcon.style.display = "block";
  })

// Modal

// Modal 1

let modalButton1 = document.getElementById('project-1');
let modal1 = document.getElementById('project-card-modal-1');
let span1 = document.getElementById('close-modal-span-1');

modal1.style.visibility = 'hidden';


modalButton1.addEventListener('click', () => {
  modal1.style.visibility = 'visible';
})

span1.addEventListener('click', () => {
  modal1.style.visibility = 'hidden';
})

// Modal 2

let modalButton2 = document.getElementById('project-2');
let modal2 = document.getElementById('project-card-modal-2');
let span2 = document.getElementById('close-modal-span-2');

modal2.style.visibility = 'hidden';

modalButton2.addEventListener('click', () => {
  modal2.style.visibility = 'visible';
})

span2.addEventListener('click', () => {
  modal2.style.visibility = 'hidden';
})

// Modal 3

let modalButton3 = document.getElementById('project-3');
let modal3 = document.getElementById('project-card-modal-3');
let span3 = document.getElementById('close-modal-span-3');

modal3.style.visibility = 'hidden';

modalButton3.addEventListener('click', () => {
  modal3.style.visibility = 'visible';
})

span3.addEventListener('click', () => {
  modal3.style.visibility = 'hidden';
})

// Modal 4

let modalButton4 = document.getElementById('project-4');
let modal4 = document.getElementById('project-card-modal-4');
let span4 = document.getElementById('close-modal-span-4');

modal4.style.visibility = 'hidden';

modalButton4.addEventListener('click', () => {
  modal4.style.visibility = 'visible';
})

span4.addEventListener('click', () => {
  modal4.style.visibility = 'hidden';
})