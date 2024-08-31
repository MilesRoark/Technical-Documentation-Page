function menuToggle() {
  document.getElementById("guidesItems").classList.toggle("show");
}
function menuToggle1() {
  document.getElementById("referenceItems").classList.toggle("show");
}
function menuToggle2() {
  document.getElementById("examplesItems").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".menubtn")) {
    var dropdowns = document.getElementsByClassName("menu__content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
