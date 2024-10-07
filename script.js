// Smooth scroll for navigation links and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Form validation for reservation and contact forms
document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.querySelector('#reservations form');
    const contactForm = document.querySelector('#contact form');

    // Reservation form validation
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const name = reservationForm.querySelector('#name');
        const email = reservationForm.querySelector('#email');
        const date = reservationForm.querySelector('#date');
        const time = reservationForm.querySelector('#time');
        const guests = reservationForm.querySelector('#guests');

        if (!name.value) {
            alert("Please enter your name.");
            valid = false;
        } else if (!validateEmail(email.value)) {
            alert("Please enter a valid email.");
            valid = false;
        } else if (!date.value) {
            alert("Please select a date.");
            valid = false;
        } else if (!time.value) {
            alert("Please select a time.");
            valid = false;
        } else if (guests.value <= 0) {
            alert("Please enter a valid number of guests.");
            valid = false;
        }

        if (valid) {
            alert("Reservation successfully made!");
            reservationForm.submit();
        }
    });

    // Contact form validation
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const name = contactForm.querySelector('#contact-name');
        const email = contactForm.querySelector('#contact-email');
        const message = contactForm.querySelector('#contact-message');

        if (!name.value) {
            alert("Please enter your name.");
            valid = false;
        } else if (!validateEmail(email.value)) {
            alert("Please enter a valid email.");
            valid = false;
        } else if (!message.value) {
            alert("Please enter a message.");
            valid = false;
        }

        if (valid) {
            alert("Message successfully sent!");
            contactForm.submit();
        }
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// Lightbox functionality
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightbox.appendChild(lightboxImg);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
