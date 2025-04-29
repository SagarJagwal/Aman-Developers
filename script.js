// Simple Testimonial Carousel (Optional - Expand Later)


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      if (idx === i) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  }

  showTestimonial(index);

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 3000);
});



function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    telephone: document.getElementById("telephone").value
  };

  emailjs.send("service_yi49cpj", "template_onslchs", parms)
    .then(function(response) {
      alert("Email Sent Successfully!");
      document.querySelector(".contact-form").reset(); // ✅ Clear the form
    }, function(error) {
      alert("Failed to send email: " + JSON.stringify(error));
    });

  return false; // Prevent page reload if called from onsubmit
}


  function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  }


  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
