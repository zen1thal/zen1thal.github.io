document
  .getElementById("page-header__hamburger")
  .addEventListener("click", show_menu);
document.getElementById("back_menu").addEventListener("click", hide_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function show_menu() {
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function hide_menu() {
  nav.style.right = "-60vw";
  background_menu.style.display = "none";
}
function switchMode() {
  const body = document.getElementById("body-modes");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
  }
}
