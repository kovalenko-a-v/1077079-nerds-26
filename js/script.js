var open = document.querySelector(".map-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");

var form = popup.querySelector(".feedback-form");
var name = popup.querySelector("[name=yourname]");
var mail = popup.querySelector("[name=email]");

open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value ||!mail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });
