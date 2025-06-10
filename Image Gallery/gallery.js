// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn button");
  const exploreItems = document.querySelectorAll(".explore-items");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add 'active' to the clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-name");

      exploreItems.forEach(item => {
        const itemCategory = item.getAttribute("data-name").trim();

        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });

  // Show all by default on page load
  document.querySelector('button[data-name="all"]').click();
});
