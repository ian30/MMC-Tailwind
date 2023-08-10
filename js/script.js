"use strict";
const showAllCatsBtn = document.getElementById("cat_allCats");
const showAction = document.getElementById("cat_action");
const showThrillers = document.getElementById("cat_thrillers");
const showComedy = document.getElementById("cat_comedy");
const showScifi = document.getElementById("cat_scifi");
const showAll = document.getElementById("cat_showAll");
const overlays = document.querySelectorAll(".overlay");
const cover_container = document.getElementsByClassName("cover_container");
const movie_cards = document.getElementsByClassName("movie-card");

//loop thru cover container and show the movie name on hover: (the loop looks weird because the 'getElementsByClassName' is creating
//an object called 'html collection' and that's how you loop thru that.)
Array.from(document.getElementsByClassName("cover_container")).forEach(function (element, index, array) {
  const overlay_child = element.children[0];
  element.addEventListener("mouseenter", () => {
    overlay_child.classList.remove("invisible");
  });
  element.addEventListener("mouseleave", () => {
    overlay_child.classList.add("invisible");
  });
});

showAll.addEventListener("click", () => {
  Array.from(document.getElementsByClassName("movie-card")).forEach(function (element, index, array) {
    element.classList.toggle("hidden");
  });
});

// hide all movie overlays:
overlays.forEach((overlays) => {
  overlays.classList.add("invisible");
});
showAllCatsBtn.addEventListener("click", function () {
  //code
});
showAction.addEventListener("click", () => {
  //get all movies with class "cat_action"
  document.querySelectorAll(".action").addClass("hidden");
});
