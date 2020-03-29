let reviews = document.querySelector(".review__list").children;

for(review of reviews) {
  let btn = review.querySelector(".btn__link");
  let closeBtn = review.querySelector(".close-btn");
  let overlayElement = review.querySelector(".review__content");
  //console.log(btn);
  //console.log(closeBtn);
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    review.classList.add("review__item--overlay");
  });

  closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    review.classList.remove("review__item--overlay");
  });

  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeBtn.click();
    }
  });
}
