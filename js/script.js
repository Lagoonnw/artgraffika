var link = document.querySelector(".useful__btn-map_style");
var map = document.querySelector(".map-js_style");
 

link.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.add("map-js_style-show");   
 
});


