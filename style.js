let image = document.querySelectorAll(".popup");
let overlay = document.querySelector(".overlay");
let img = document.querySelector(".popupimg");

image.forEach((item) => {
  item.addEventListener("click", function () {
    img.src = item.src;
    overlay.style.display = "flex";
  });
});
