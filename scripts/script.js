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
  const body = document.querySelector("body");
  const header1 = document.querySelector("h1");
  const header2 = document.querySelector("h2");
  const footer = document.querySelector(".page-footer");
  const pageHeader = document.querySelector(".page-header");
  const hobbies = document.querySelector(".card-cont__hobbies");
  const cardContent = document.querySelector(".static-container__card-cont");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.style.backgroundColor = "var(--gray)";
    body.style.color = "white";
    header1.style.color = "white";
    header2.style.color = "white";
    hobbies.style.color = "var(--slate)";
    footer.style.backgroundColor = "var(--black)";
    cardContent.style.backgroundColor = "var(--black)";
    pageHeader.style.backgroundColor = "var(--black)";
  } else {
    body.classList.add("light-mode");
    body.style.backgroundColor = "white";
    body.style.color = "var(--light-teal)";
    header1.style.color = "var(--light-gray)";
    header2.style.color = "var(--light-gray)";
    hobbies.style.color = "white";
    footer.style.backgroundColor = "var(--light-gray)";
    cardContent.style.backgroundColor = "var(--light-gray)";
    pageHeader.style.backgroundColor = "var(--light-gray)";
  }
}
