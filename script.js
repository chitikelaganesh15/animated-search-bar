const searchBox =
document.querySelector("search-box");
const button = document.querySelector("search-btn");

button.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});