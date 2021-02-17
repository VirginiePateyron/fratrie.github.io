/* Créer une fonction qui retourne la carte au clic */
document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll(".third-content-element-card"), function(card, i, cards){
      card.addEventListener("click", function(e){
        e.currentTarget.classList.toggle("flipped");
      });
    });
  });

  /* Remonter la navbar au top du site */

  const header = document.querySelector("#siteWrapper .header");

  function scrolled(){
    let windowHeight = document.body.clientHeight,
      currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
  }
  
  addEventListener("scroll", scrolled, false);

  
/* Lancer l'audio au clic sur le bouton */
