
// Fonctionnalité 1 : click sur le footer
document.getElementsByTagName('footer')[0].addEventListener("click", function(){
    console.log("clique");
});


// Fonctionnalité 1bis : compteur de Clic sur le footer
let my_Footer = document.getElementsByTagName('footer')[0];
let my_counter = 0;
my_Footer.addEventListener('click',onFooterClick);

function onFooterClick() {
    my_counter += 1;
    console.log(`clic numéro ${my_counter}`);
};

//____________________________________________________
// Hamburger menu sans la fonction Toggle
// Fonctionnalité 2 : Hamburger menu
/*
let myButton = document.querySelector('button')
let navbarHeader = document.getElementById('navbarHeader');
let navbarHeaderStatus = false;
myButton.addEventListener('click',collapseNavbar);

function collapseNavbar(){
  if (navbarHeaderStatus == false) {
    navbarHeader.classList.remove("collapse");
    navbarHeaderStatus = true
  } else {
    navbarHeader.classList.add("collapse");
    navbarHeaderStatus = false;
  }
}
*/

//___________________________________________
// Fonctionnalité 2
// TOGGLE : fonction qui permet de rajouter une classe 
// si elle n'est pas déjà présente et l'enlever si elle est déjà présente.
//  C'est "toggle". Tu peux l'utiliser ainsi : 
// elementDuDOM.classList.toggle("nomDeLaClasse")

let menuBton = document.getElementById("navbarHeader");
let miniBton = document.getElementsByClassName("navbar-toggler")[0];

	miniBton.addEventListener("click", navbartoggle);

	function navbartoggle() {
  	menuBton.classList.toggle('collapse');
	};

//_________________________________________________
// Fonctionnalité 3
// si on clique sur le bouton "Edit" de la première card,
// le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)

let btn_Edit = document.getElementsByClassName("btn-outline-secondary")[0];
	first_Card = document.getElementsByClassName("card-text")[0];
	console.log(btn_Edit.textContent);
	console.log(first_Card.textContent);

    btn_Edit.addEventListener("click", inRed);
    function inRed() {
    	first_Card.style.color = "red";
    } ;

//___________________________________________
// Fonctionnalité 4 : si on clique sur le bouton "Edit" de la deuxième card,
// le texte de la card va se mettre en vert.
// Si on re-clique dessus, il redevient comme avant ! 

let btn_Edit2 = document.getElementsByClassName("btn-outline-secondary")[1];
let	second_Card = document.getElementsByClassName("card-text")[1];

console.log(btn_Edit2.textContent);
console.log(second_Card.textContent);

btn_Edit2.addEventListener("click", inGreen);

function inGreen() {
		if (second_Card.style.color === 'green') { 
			second_Card.style.color = '' ; 
		} else {
			second_Card.style.color = 'green';
		}
};

//_______________________________________________
// Fonctionnalité 5 : si un utilisateur double clique sur la navbar en haut,
// tout Bootstrap disparaît et la page s'affiche comme si on avait oublié 
// de mettre le CDN qui la relie au fichier CSS.
// Si possible, rends cette fonctionnalité réversible
//(un nouveau double-clic fait tout revenir à la normale).

let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName('link')[0];

console.log(navbar);
console.log(bootstrap);

navbar.addEventListener("dblclick", remove_CDN);

function remove_CDN() {
		if  (bootstrap.rel == "stylesheet") { 
			bootstrap.rel = "styleDisabled";
		} else {
			bootstrap.rel = "stylesheet";
		}
};

//_________________________________________
// FOnctionnalité 6 : si un utilisateur passe sa souris sur le bouton "View"
//  d'une card (n'importe laquelle), celle-ci va se réduire.
// Cela veut dire que le texte disparaît,
// l'image n'apparaîtra qu'à 20 % de sa taille d'origine
// et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let myCards = document.querySelectorAll('.card');
let myViewButtons = document.querySelectorAll('.btn-success');
let isReduced = [];
let myText = document.querySelectorAll('.card-text');
console.log(myCards);
console.log(myViewButtons);

for (let i = 0; i < myViewButtons.length; i++) {
  isReduced[i] = false

  myViewButtons[i].addEventListener('mouseover',function (){
    if (isReduced[i] == false) {
      myCards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
      myCards[i].getElementsByClassName('card-text')[0].classList.add("d-none");
      isReduced[i] = true;
    } else {
      myCards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
      myCards[i].getElementsByClassName('card-text')[0].classList.remove("d-none");
      isReduced[i] = false;
    }
  });

}


//_____________________________
// Fonctionnalié 7  si un utilisateur clique sur le bouton gris ==>,
// la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

let myButtonOrder = document.getElementsByClassName('btn btn-secondary my-2')[0];
console.log(myButtonOrder);

myButtonOrder.addEventListener('click', reorderElements);
function reorderElements (){
  let firstRow = myCards[0].parentNode.parentNode;
  let intermed = myCards[myCards.length - 1].parentNode;
  firstRow.insertBefore(intermed, firstRow.firstChild);
  console.log(myCards);
  console.log(myCards.length);
}
