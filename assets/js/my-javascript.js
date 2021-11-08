// document.getElementById("jsScroll").scrollIntoView({ behavior: "smooth" });
// window.scrollTo({ top: 0, behavior: "smooth" });
function toggleScrollUpButton() {
  var y = window.scrollY;
  var e = document.getElementById("scroll-to-top");
  if (y >= 200) {
    e.style.transform = "translateY(-30%)";
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
    e.style.transform = "translateY(30%)";
  }
}

window.addEventListener("scroll", toggleScrollUpButton);

var e = document.getElementById("scroll-to-top");
e.addEventListener("click", scrollToTop, false);
