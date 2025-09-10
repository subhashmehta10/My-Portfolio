/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  if (!menuBtn) return; // Exit if element doesn't exist

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
  if (!navHeader) return; // Exit if element doesn't exist

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
if (document.querySelector(".typedText")) {
    var typingEffect = new Typed(".typedText", {
      strings: ["Web Designer", "Subhash...", "React Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
}


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
// Note: This requires the ScrollReveal library to be included in your HTML.
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- REVEAL CONFIGURATIONS FOR DIFFERENT SECTIONS -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.Pro-cards', { delay: 300 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-infos', { delay: 100 });
srLeft.reveal('.skill', { delay: 100 });

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
    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (link) { // Check if the link exists before trying to modify it
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);


/* ----- CONTACT FORM SUBMISSION WITH EMAILJS ----- */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const serviceID = 'YOUR_SERVICE_ID'; // IMPORTANT: Replace with your actual EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // IMPORTANT: Replace with your actual EmailJS Template ID

    const emailParams = {
      to_email: 'Kumarmehta172@gmail.com',
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send(serviceID, templateID, emailParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showStatusMessage('Message sent successfully!', 'success');
      }, function(error) {
        console.log('FAILED...', error);
        showStatusMessage('Failed to send message. Please try again.', 'error');
      });
  });
}

function showStatusMessage(message, type) {
    let messageBox = document.createElement('div');
    messageBox.textContent = message;
    messageBox.style.position = 'fixed';
    messageBox.style.bottom = '20px';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translateX(-50%)';
    messageBox.style.padding = '10px 20px';
    messageBox.style.borderRadius = '8px';
    messageBox.style.color = 'white';
    messageBox.style.zIndex = '1000';
    messageBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    messageBox.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545'; // Green for success, Red for error
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.style.transition = 'opacity 0.5s ease';
        messageBox.style.opacity = '0';
        setTimeout(() => messageBox.remove(), 500);
    }, 3000);
}


/* ----- SKILL BOXES ANIMATION ----- */
const skillBoxes = document.querySelectorAll(".skill-box");
if (skillBoxes.length > 0) { // Check if any skill boxes exist
  let skillIndex = 0;

  function zoomNextSkill() {
    skillBoxes.forEach(box => box.classList.remove("active"));
    skillBoxes[skillIndex].classList.add("active");
    skillIndex = (skillIndex + 1) % skillBoxes.length;
  }

  setInterval(zoomNextSkill, 2000);
}

/* ----- COMPANY LOGOS ANIMATION ----- */
function animateCompanies() {
  const companyLogos = document.querySelectorAll(".companies-logo");
  if (companyLogos.length > 0) { // Check if any company logos exist
    let companyIndex = 0;

    function zoomNextCompany() {
        companyLogos.forEach(logo => logo.classList.remove("active"));
        if(companyLogos[companyIndex]) { // Double check the element exists before adding class
            companyLogos[companyIndex].classList.add("active");
        }
        companyIndex = (companyIndex + 1) % companyLogos.length;
    }

    setInterval(zoomNextCompany, 350);
  }
}
animateCompanies();


/* ----- MOUSE MOVE PARTICLE EFFECT ----- */
document.addEventListener('mousemove', (e) => {
  let particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);

  particle.style.top = `${e.clientY + window.scrollY}px`;
  particle.style.left = `${e.clientX}px`;

  setTimeout(() => {
    particle.style.opacity = 0;
    setTimeout(() => {
      particle.remove();
    }, 500);
  }, 300);
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

