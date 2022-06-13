let menu = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");
let home = document.querySelector("#home");
let loginbtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let closebtn = document.querySelector(".close-login-form");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

loginbtn.onclick = () => {
  loginForm.classList.add("active");
};
closebtn.onclick = () => {
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};


const sr = ScrollReveal({
distance: "60px",
duration: 2500,
delay: 400,
reset: true,
}); 

sr.reveal('.text',{delay: 200, origin: 'top'});
sr.reveal('.form-container form',{delay: 700, origin: 'left'});
sr.reveal('.heading',{delay: 500, origin: 'top'});
sr.reveal('.ride-container .box',{delay: 500, origin: 'top'});
sr.reveal('.services-container .box',{delay: 500, origin: 'top'});
sr.reveal('.about-container .box',{delay: 500, origin: 'top'});
sr.reveal('.newsletter .box',{delay: 300, origin: 'bottom'});
sr.reveal('.reviews-container ',{delay: 300, origin: 'top'});
