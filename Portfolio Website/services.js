document.addEventListener("DOMContentLoaded", function() {
  const bounceElements = document.querySelectorAll(".pop-up-bounce");
  
  function handleScroll() {
    bounceElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight - 100;
      
      if (isVisible && !el.classList.contains("show")) {
        el.classList.add("show");
      }
    });
  }
  
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run it once on load in case items are already in view
});