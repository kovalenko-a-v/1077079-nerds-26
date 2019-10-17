var open = document.querySelector(".map-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");

open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    });
