var link = document.querySelector(".useful__btn-map_style");
var map = document.querySelector(".map-js_style");
var menuicon = document.querySelector(".header-nav__icon");
var dropmenu = document.querySelector(".drop-down-menu");
var close = document.querySelector(".close-menu");


link.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.add("map-js_style-show");    
});


menuicon.addEventListener("click", function (event) {
  event.preventDefault();
  dropmenu.classList.add("drop-down-menu_style-show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  dropmenu.classList.remove("drop-down-menu_style-show");   
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (dropmenu.classList.contains("drop-down-menu_style-show")) {
      dropmenu.classList.remove("drop-down-menu_style-show");
    }
  }
});


