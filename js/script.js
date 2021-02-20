  /* Remonter la navbar au top du site */

  const header = document.querySelector("#siteWrapper .header");

  function scrolled(){
    let windowHeight = document.body.clientHeight,
      currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
  }
  
  addEventListener("scroll", scrolled, false);


/* Créer une fonction qui retourne la carte au clic */
const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7"];
cards.map((card) => { 
  const cardArray = document.getElementById(card);
  cardArray.addEventListener("click", function () {
    cardArray.classList.toggle("is-flipped");
  });
});
  
/* Lancer l'audio au clic sur le bouton */



