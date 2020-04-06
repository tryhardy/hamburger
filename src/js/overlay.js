/*let reviews = document.querySelector(".review__list").children;

for(i=0; i<reviews.length; i++) {

  let currentItem = reviews[i];
  let btn = currentItem.querySelector(".btn__link");
  let closeBtn = currentItem.querySelector(".close-btn");
  let overlayElement = currentItem.querySelector(".review__content");
  
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    currentItem.classList.add("review__item--overlay");
  });

  closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    reviews[i].classList.remove("review__item--overlay");
  });

  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeBtn.click();
    }
  });
}*/
