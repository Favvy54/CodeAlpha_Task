const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  showTestimonial(currentIndex);
});

// Auto slide every 10 seconds (optional)
setInterval(() => {
  nextBtn.click();
}, 10000);




// Get hamburger and nav elements
        const hamburger = document.getElementById('hamburger');
        const navList = document.getElementById('navList');

        // Toggle menu function
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
        }

        // Add click event to hamburger
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking on a nav link (optional)
        const navLinks = document.querySelectorAll('.list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            });
        });

        // Close menu when clicking outside (optional)
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
        });