"use strict";
const showAllCatsBtn = document.getElementById("cat_allCats");
const showAction = document.getElementById("cat_action");
const showThrillers = document.getElementById("cat_thrillers");
const showComedy = document.getElementById("cat_comedy");
const showScifi = document.getElementById("cat_scifi");

showAllCategoriesBtn.addEventListener("click", function () {
  alert("shmoop");
});
showAction.addEventListener("click", () => {
  //get all movies with class "cat_action"
  document.querySelectorAll(".action").addClass("hidden");
});
