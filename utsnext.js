/* search tombol */
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.querySelector(".search-box");
searchToggle.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
  const input = document.getElementById("searchInput");
  if (!searchBox.classList.contains("hidden")) {
    input.focus();
  } else {
    input.value = "";
    filterCards("");
  }
});

/* search filter */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

function filterCards(q) {
  const val = q.trim().toLowerCase();
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(val) ? "block" : "none";
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => filterCards(e.target.value));
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



