const bookmarkBtn = document.querySelector(".bookmarkBtn");

bookmarkBtn.addEventListener("click", toggleBookmark);

function toggleBookmark(e) {
  e.preventDefault();
  const text = document.querySelector(".section-head__bookmarkText");
  const btn = e.target;
  btn.classList.toggle("active");
  text.textContent = btn.classList.contains("active")
    ? "Boomarked"
    : "Bookmark";
}
