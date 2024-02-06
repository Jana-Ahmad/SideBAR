const sideBarBtn = document.querySelector(".list-btn i");
const closeButton = document.querySelector(".close-button i");

sideBarBtn.addEventListener("click", function () {
  document.querySelector(".side-bar").classList.remove("hidden");
  document.querySelector(".side-bar").classList.add("active");
  document.querySelector("body").classList.add("overly");
});

closeButton.addEventListener("click", function () {
  document.querySelector("body").classList.remove("overly");
  document.querySelector(".side-bar").classList.add("hidden");
});
