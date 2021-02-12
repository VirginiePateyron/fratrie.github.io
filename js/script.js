/* Créer une fonction qui retourne la carte au clic */
document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll(".third-content-element-card"), function(card, i, cards){
      card.addEventListener("click", function(e){
        e.currentTarget.classList.toggle("flipped");
      });
    });
  });
