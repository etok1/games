document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      filterBtn.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const cards = document.querySelectorAll(".main__allNews-card");
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        const hr = card.nextElementSibling;

        if (category === "all" || category === cardCategory) {
          card.style.display = "flex";
          hr.style.display = "flex";
        } else {
          card.style.display = "none";
          hr.style.display = "none";
        }
      });
    });
  });
});
