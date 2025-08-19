
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}; 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll=() =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height =sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top >= offset && top < offset+height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })

    }
  });


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



}




// ScrollReveal({
//   reset:true,
//   distance:'80px',
//   duration:2000,
//   delay:200
// });
// ScrollReveal().reveal('.home', {origin:'top'});
window.onload = () =>{

const typed = new Typed('.multiple-text', {
  strings: ['Creative Technologist', 'Poet', 'Dancer'],
  typeSpeed:80,
  backSpeed:80,
  backDelay:1000,
  loop:true
});
}


const myquotes = ["The first step of behavior change is awareness- Atomic Habits" ,
"Your habits create your mood, and your mood is a filter through which you experience your life.- 101 Essays That Will Change the Way You Think",
"We teach people how to treat us.”– Phil McGraw",
"Everyone has a chapter that they don't read out loud- Tori Desimone",
"I will never have this version of me again- Rupi Kaur",
"Once you eliminate self doubt you find freedom- Unsure",
"Your priority is your decision maker- Roxie Nafousi",
"The places you go are the people you surround yourself with- Unsure",]

function generate(){
  var rand = Math.floor(Math.random() * 8);
  document.getElementById('quote-generated').innerText=( myquotes[rand]);

}



