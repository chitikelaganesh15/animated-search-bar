const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

if (searchBtn && searchBox) {
  searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}
