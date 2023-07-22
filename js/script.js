 /*==================== Toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link =====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== Sticky Navbar =====================*/
    let header = document . querySelector( 'header' ) ;

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link =====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== Scroll reveal =====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .expertise-container, .portfolio-box,.contact form', {orign: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/*==================== typed js =====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Computer Engineer', 'Graphic Designer','Technical Support Engineer' ],
    typeSpeed: 100,
    backSpeed: 100,
    baclDelay: 1000,
    loop: true
});


/*==================== Send Email using Email js =====================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_drmk2qh', 'template_gggu317', '#contact-form', 'ZgFuADcU3hDhqlpOz')
            .then(() => {
                contactMessage.textContent = 'Message sent succesfully.'

                setTimeout (() => {
                    contactMessage.textContent =''
                }, 5000)

                contactForm.reset()
            
            }, () => {
                contactMessage.textContent = 'Message not sent (Service Error).'   
            })    
      }

contactForm.addEventListener('submit', sendEmail)     