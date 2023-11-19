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
  const view = document.querySelector(".view");
  const header1 = document.querySelector("h1");
  const header2 = document.querySelector("h2");
  const footer = document.querySelector(".page-footer");
  const pageHeader = document.querySelector(".page-header");
  const hobbies = document.querySelector(".card-cont__hobbies");
  const cardContent = document.querySelector(".card-cont");

  if (view.classList.contains("light-mode")) {
    view.classList.remove("light-mode");
    view.style.backgroundColor = "#1c1e1f";
    view.style.color = "white";
    header1.style.color = "white";
    header2.style.color = "white";
    hobbies.style.color = "--slate";
    footer.style.backgroundColor = "#15181b";
    cardContent.style.backgroundColor = "#15181b";
    pageHeader.style.backgroundColor = "#15181b";
  } else {
    view.classList.add("light-mode");
    view.style.backgroundColor = "white";
    view.style.color = "#ccd6f6";
    header1.style.color = "#929292";
    header2.style.color = "#929292";
    hobbies.style.color = "white";
    footer.style.backgroundColor = "#929292";
    cardContent.style.backgroundColor = "#929292";
    pageHeader.style.backgroundColor = "#929292";
  }
}
