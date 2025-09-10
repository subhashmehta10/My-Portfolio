/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
// Note: This requires the Typed.js library to be included in your HTML.
var typingEffect = new Typed(".typedText", {
  strings: ["Web Designer", "Subhash...", "React Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
// Note: This requires the ScrollReveal library to be included in your HTML.
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- REVEAL CONFIGURATIONS FOR DIFFERENT SECTIONS -- */

// HOME SECTION
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.Pro-cards', { delay: 300 });

// PROJECT BOXES
sr.reveal('.project-box', { interval: 200 });

// HEADINGS
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// Configuration for elements revealing from the left
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-infos', { delay: 100 });
srLeft.reveal('.skill', { delay: 100 });

// Configuration for elements revealing from the right
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.companies', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);


/* ----- CONTACT FORM SUBMISSION WITH EMAILJS ----- */
// Note: This requires the EmailJS library to be included in your HTML.
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // IMPORTANT: Replace with your actual EmailJS Service ID and Template ID
  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';

  const emailParams = {
    to_email: 'Kumarmehta172@gmail.com',
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send(serviceID, templateID, emailParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send the message. Please try again later.');
    });
});

/* ----- SKILL BOXES ANIMATION ----- */
const skillBoxes = document.querySelectorAll(".skill-box");
let skillIndex = 0;

function zoomNextSkill() {
  skillBoxes.forEach(box => box.classList.remove("active"));
  skillBoxes[skillIndex].classList.add("active");
  skillIndex = (skillIndex + 1) % skillBoxes.length;
}

setInterval(zoomNextSkill, 2000);

/* ----- COMPANY LOGOS ANIMATION ----- */
function animateCompanies() {
  const companyLogos = document.querySelectorAll(".companies-logo");
  let companyIndex = 0;

  function zoomNextCompany() {
    companyLogos.forEach(logo => logo.classList.remove("active"));
    companyLogos[companyIndex].classList.add("active");
    companyIndex = (companyIndex + 1) % companyLogos.length;
  }
  
  setInterval(zoomNextCompany, 350);
}
animateCompanies();


/* ----- MOUSE MOVE PARTICLE EFFECT ----- */
document.addEventListener('mousemove', (e) => {
  let particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);

  // Position the particle at the cursor's location
  particle.style.top = `${e.clientY + window.scrollY}px`; // Add scrollY for correct positioning
  particle.style.left = `${e.clientX}px`;

  // Animate and remove the particle
  setTimeout(() => {
    particle.style.opacity = 0;
    setTimeout(() => {
      particle.remove();
    }, 500); // Remove from DOM after fade out
  }, 300); // Start fading out after 300ms
});


/* ----- CHATBOX FUNCTIONALITY ----- */
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');

if (chatToggle && chatBox && closeChat) {
    chatToggle.addEventListener('click', () => {
        chatBox.classList.toggle('visible');
    });
    
    closeChat.addEventListener('click', () => {
        chatBox.classList.remove('visible');
    });
}
