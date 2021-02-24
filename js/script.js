/* Créer une fonction qui retourne la carte au clic */
const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8"];
cards.map((card) => { 
  const cardArray = document.getElementById(card);
  cardArray.addEventListener("click", function () {
    cardArray.classList.toggle("is-flipped");
  });
});
  
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* function myFunction() {
  const toggleMenu = document.getElementById("myTopnav");
  if (toggleMenu.className === "topnav") {
    toggleMenu.className += " responsive";
  } else {
    toggleMenu.className = "topnav";
  }
} */

const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  document.body.classList.toggle('no-scroll');
});



