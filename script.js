
// // toggle icon navbar
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    //sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link scroll
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal

// scrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });
// ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-Box, .contact form',{origin:'bottom'});

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let fullMessage = `Name: ${name}%0AEmail: ${email}%0ANumber: ${number}%0ASubject: ${subject}%0AMessage: ${message}`;

  // Replace with your WhatsApp number (with country code, no + sign)
  let phone = "919361091456";  

  window.open(`https://wa.me/${phone}?text=${fullMessage}`, "_blank");
}
