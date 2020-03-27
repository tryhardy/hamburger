let bodyContainer = document.body;

// HAMBURGER-MENU
let hamburgerButton = document.querySelector("#hamburger-menu");
let primaryMenu = document.querySelector(".primary-menu");
let primaryMenuLink = document.querySelectorAll(".primary-menu__link");

hamburgerButton.addEventListener("click", function(e) {
  e.preventDefault();
  hamburgerButton.classList.toggle("hamburger-menu--active");
  primaryMenu.classList.toggle("primary-menu--active");
  bodyContainer.classList.toggle("body--active");
//  bodyContainer.style.overflow = "hidden";
});

for( let i = 0; i < primaryMenuLink.length; i++) {
  primaryMenuLink[i].addEventListener("click", function(e) {
    hamburgerButton.classList.toggle("hamburger-menu--active");
    primaryMenu.classList.toggle("primary-menu--active");
    bodyContainer.classList.toggle("body--active");
  });
}


// TEAM-ACCORDEON
let teamItem = document.querySelectorAll(".team__item");

for ( let n = 0; n < teamItem.length; n++) {
  teamItem[n].addEventListener("click", function(e) {
    e.preventDefault(e);
    teamItem.classList.toggle("team__item--active");
  });
}
