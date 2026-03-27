const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});
