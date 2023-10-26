const hamBurger = document.querySelector(".hamBurger");
hamBurger.addEventListener("click", openNavBar);

function openNavBar() {
  let header = document.querySelector("header");
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    header.style.maxHeight = header.scrollHeight + "px";
  } else {
    header.removeAttribute("style");
  }
}
