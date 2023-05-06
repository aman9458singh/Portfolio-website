// toggle navbar section
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sections active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    // sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);

// remove menu icon and togglebar
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

// scrollrevceal
ScrollReveal({
    reset : true,
    delay : 200,
    duration : 1000,
    distance : '100px',
});
ScrollReveal().reveal('.heading , .home-content' , {origin:'top'})
ScrollReveal().reveal('.service-container , .portfolio-box , .contact', {origin:'bottom'})

//  typed js
 const typed = new Typed('.multiple-text',{
    strings : ['Frontend developer'],
    typepeed : 700,
    backSpeed : 50,
    backeDelay : 1000,
    loop : true,
    showCursor : false,
 });

//  paragraph of about page (read more button)
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
//    service-container read more button
  function serviceFunction() {
    var dots = document.getElementById("service-dots");
    var moreText = document.getElementById("service-more");
    var btnText = document.getElementById("service-myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



 
