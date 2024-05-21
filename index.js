/* SCROLL BUTTON */
window.addEventListener("scroll", function () {
  var topBtn = document.getElementById("topBtn");
  if (window.scrollY > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

/* HAMBURGUER MENU */
function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}
