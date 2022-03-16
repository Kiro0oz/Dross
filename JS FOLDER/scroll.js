let ScrollUp = document.getElementById("scroll_up")

window.onscroll = function () {
  if (window.scrollY >= 500) {
    ScrollUp.style.display = "block";
  } else {
    ScrollUp.style.display = "none";
  }
};

ScrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});