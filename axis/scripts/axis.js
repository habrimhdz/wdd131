// Current year
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// Dark Mode 
const button = document.getElementById("toggleDark");
const body = document.body;

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
}

// Hamburger 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
  });
}

// Fade up thingy
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  }, {
    threshold: 0.4
  });

  elements.forEach(el => observer.observe(el));
});

// CONTACT FORM

// Select the Contact Us form specifically
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual page reload

    // Simple HTML5 validation
    if (!contactForm.checkValidity()) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    // Gather form data
    const formData = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      topic: contactForm.topic.value,
      message: contactForm.message.value.trim(),
      consent: contactForm.consent.checked
    };

    // Save data to localStorage (mock submission)
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Reset the form
    contactForm.reset();

    // Show a success message inline instead of alert
    let successMessage = contactForm.querySelector('.success-message');
    if (!successMessage) {
      successMessage = document.createElement('p');
      successMessage.className = 'success-message';
      successMessage.style.color = '#6DD062';
      successMessage.style.fontWeight = 'bold';
      successMessage.style.marginTop = '12px';
      successMessage.textContent = 'Thank you! Your message has been sent.';
      contactForm.appendChild(successMessage);
    } else {
      successMessage.style.display = 'block';
    }

    // Optional: hide message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
}
