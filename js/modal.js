// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

// ------ AFFICHAGE MODAL ------ //
// LANCEMENT DES ÉVÉNEMENTS MODAL
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// FORMULAIRE DE LANCEMENT DU MODAL
function launchModal() {
  modalbg.style.display = 'block';
}
// FERMER LE FORMULAIRE MODAL
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

// ------ AFFICHAGE NAV RESPONSABLE ------ //
// MODIFIER  NAV
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}