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