
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Web Designer","Subhash...","React Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
sr.reveal('.Pro-cards',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})


/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-infos',{delay: 100})
srLeft.reveal('.skill',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.companies',{delay: 100})

srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent the default form submission

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const emailParams = {
    to_email: 'Kumarmehta172@gmail.com',
    from_name: name,
    from_email: email,
    message: message
};

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
});

// animation apply for skill----------

const skillBoxes = document.querySelectorAll(".skill-box");
let index = 0;

// Function to apply zoom effect
function zoomNextSkill() {
    skillBoxes.forEach(box => box.classList.remove("active")); // Remove zoom from all
    skillBoxes[index].classList.add("active"); // Zoom the current skill-box
    index = (index + 1) % skillBoxes.length; // Move to the next box
}

// Apply zoom every 1 second
setInterval(zoomNextSkill, 2000);

// Animation apply for companies------
function comp() {
  const companyLogos = document.querySelectorAll(".companies-logo");
let index = 0;

// Function to apply zoom effect
function zoomNextCompany() {
    companyLogos.forEach(logo => logo.classList.remove("active")); // Remove zoom from all
    companyLogos[index].classList.add("active"); // Zoom the current logo
    index = (index + 1) % companyLogos.length; // Move to the next logo
}

// Apply zoom every 1 second
setInterval(zoomNextCompany, 350);
}
comp();

document.addEventListener('mousemove', (e) => {
  let particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);

  particle.style.top = `${e.clientY}px`;
  particle.style.left = `${e.clientX}px`;

  setTimeout(() => {
      particle.style.opacity = 0;
      setTimeout(() => {
          particle.remove();
      }, 500);
  }, 300);
});

// Chatbox functionality
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const closeChat = document.getElementById('close-chat');

    chatToggle.addEventListener('click', () => {
        chatBox.classList.toggle('visible');
    });

    closeChat.addEventListener('click', () => {
        chatBox.classList.remove('visible');
    });

