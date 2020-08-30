// DOM page et header
let b = document.body;
let pageHeader = document.createElement('header');
let pageHeaderTitle = document.createElement('a');
let pageHeaderImg = document.createElement('img');

let tableStructure = "";
let contact = {};

const tableCart = document.querySelector('#cart-table');
const totalValue = document.querySelector('#total');
// déclarer somme totale
let finalPrice = 0;
// boucles qui récupèrent panier 
for(let i = 0; i < localStorage.getItem('nombrecommande') ; i++){
	if (localStorage.getItem('macommande'+i) != undefined) {
  let tableContainer = document.createElement('tr');
	tableContainer.className = 'table-container';
	let tableBody = [];
	
	for (let j = 0; j < localStorage.getItem('macommande'+i).split(',').length+1 ; j++){
		 tableBody.push(document.createElement('td'));
		 tableBody[j].textContent = localStorage.getItem('macommande'+i).split(',')[j];		
		 tableContainer.appendChild(tableBody[j]);		 
// calcul du montant total de la commande         
	}
	let removeIcon = document.createElement('i');
	tableBody[localStorage.getItem('macommande'+i).split(',').length].appendChild(removeIcon);
	removeIcon.setAttribute('class', 'fas fa-times-circle close');
	removeIcon.setAttribute('aria-hidden', 'true');
	console.log(tableContainer.children);
	removeIcon.addEventListener('click', ()=>{ // PB le total reste le même, le localStorage reste et donc actualiser page remet panier
	  bodytable.removeChild(bodytable.children[i]);
	})
	finalPrice += parseInt(localStorage.getItem('macommande'+i).split(',')[4]);
	bodytable.appendChild(tableContainer);
}
}
displayTotal.textContent = finalPrice;
if (finalPrice === 0){  // si panier vide, alors alert message panier vide
	alert('votre panier est vide');
} else {
console.log('montant total du panier = ' + finalPrice);
}
// Formulaire
let orderForm = document.createElement('form');
let formTitle = document.createElement('h2');
let formNameMailTitle = document.createElement('h3');
let formNameCell = document.createElement('div');
let formNameLabel = document.createElement('label');
let lastName = document.createElement('input');
let formFirstnameCell = document.createElement('div');
let formFirstNameLabel = document.createElement('label');
let firstName = document.createElement('input');
let formEmailCell = document.createElement('div');
let formEmailLabel = document.createElement('label');
let email = document.createElement('input');
let formAddressTitle = document.createElement('h3');
let formAddressCell = document.createElement('div');
let formAddressLabel = document.createElement('label');
let address = document.createElement('input');
let formCityCell = document.createElement('div');
let formCityLabel = document.createElement('label');
let city = document.createElement('input');
let pageFooter = document.createElement('footer');
let pageFooterDiv = document.createElement('div');
let pageFooterText = document.createElement('p');
// bouton valider commande lié au formulaire et tableau
let submitBtn = document.createElement('input');
// bouton supprimer commande lié au tableau ou formulaire ou les deux ?
let cartButtons = document.createElement('div');
let removeCartBtn = document.createElement('button');
// DOM Header
document.body.prepend(pageHeader);
pageHeader.prepend(pageHeaderTitle);
pageHeaderTitle.prepend(pageHeaderImg);
// DOM Form
document.body.appendChild(orderForm);
orderForm.prepend(formTitle);
orderForm.appendChild(formNameMailTitle);
orderForm.appendChild(formNameCell);
formNameCell.appendChild(formNameLabel);
formNameCell.appendChild(lastName);
orderForm.appendChild(formFirstnameCell);
formFirstnameCell.appendChild(formFirstNameLabel);
formFirstnameCell.appendChild(firstName);
orderForm.appendChild(formEmailCell);
formEmailCell.appendChild(formEmailLabel);
formEmailCell.appendChild(email);
orderForm.appendChild(formAddressTitle);
orderForm.appendChild(formAddressCell);
formAddressCell.appendChild(formAddressLabel);
formAddressCell.appendChild(address);
orderForm.appendChild(formCityCell);
formCityCell.appendChild(formCityLabel);
formCityCell.appendChild(city);
// DOM bouton
orderForm.appendChild(cartButtons);
cartButtons.appendChild(submitBtn);
cartButtons.appendChild(removeCartBtn);
// DOM Footer
document.body.appendChild(pageFooter);
pageFooter.prepend(pageFooterDiv);
pageFooterDiv.prepend(pageFooterText);
// Footer contenu
pageHeaderImg.src = '../img/banniere.png';
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné';
// Attributs formulaire
pageHeaderTitle.setAttribute('href', '../html/main.html');
orderForm.setAttribute('method', 'post');
orderForm.setAttribute('autocomplete', 'off');
orderForm.setAttribute('name', 'form');
formNameLabel.setAttribute('for', 'name');
lastName.setAttribute('type', 'text');
lastName.setAttribute('name', 'last_name');
lastName.setAttribute('placeholder', '*Nom');
lastName.required = true;
formFirstNameLabel.setAttribute('for', 'firstname');
firstName.setAttribute('type', 'text');
firstName.setAttribute('name', 'first_name');
firstName.setAttribute('placeholder', '*Prénom');
firstName.required = true;
formEmailLabel.setAttribute('for', 'firstname');
email.setAttribute('type', 'email');
email.setAttribute('name', 'email');
email.setAttribute('placeholder', '*Email');
email.required = true;
formAddressLabel.setAttribute('for', 'address');
address.setAttribute('type', 'text');
address.setAttribute('name', 'address');
address.setAttribute('placeholder', '*Adresse');
address.required = true;
formCityLabel.setAttribute('for', 'city');
city.setAttribute('type', 'text');
city.setAttribute('name', 'city');
city.setAttribute('placeholder', '*Ville');
city.required = true;
// Attributs boutons
removeCartBtn.setAttribute('type', 'button');
removeCartBtn.setAttribute('class', 'btn btn-danger btn-lg')
submitBtn.setAttribute('href', '../html/confirmation.html');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Valider la commande');
// Contenus formulaire et boutons
formTitle.textContent = 'Veuillez compléter le formulaire ci-dessous';
formNameMailTitle.textContent = 'Vos coordonnées : '
formNameLabel.textContent = 'Nom'
formFirstNameLabel.textContent = 'Prénom'
formEmailLabel.textContent = 'Email'
formAddressLabel.textContent = 'Adresse'
formCityLabel.textContent = 'Ville'
formAddressTitle.textContent = 'Votre adresse : ';
removeCartBtn.textContent = 'Vider le panier';
// Id
orderForm.id = 'orderForm';
lastName.id = 'last_name';
firstName.id = 'first_name';
email.id = 'email';
address.id = 'address';
city.id = 'city';
submitBtn.id = 'buy'
// Class
removeCartBtn.className = 'btn-danger';
submitBtn.className = 'btn-purchase';
// vérifier si contenu dans formulaire
if (lastName = ''){
	alert('nom incorrect');
} else {
	console.log('nom OK');
}
if (firstName = ''){
	alert('prénom incorrect');
} else {
	console.log('prénom OK');
}
if (email = ''){
	alert('email incorrect');
} else {
	console.log('email OK');
}
if (address = ''){
	alert('adresse incorrecte');
} else {
	console.log('adresse OK');
}
if (city = ''){
	alert('ville incorrecte');
} else {
	console.log('ville OK');
}
// vider panier
removeCartBtn.addEventListener('click', () => {
	localStorage.clear();
	location.reload();
})
/* s'exécute après clic sur le bouton valider panier */
submitBtn.addEventListener('click', buy, true);
function buy() {
	location.href='../html/confirmation.html'; // PB ne fonctionne pas, envoi pas vers page
	}



// formulaire récupération

// fonctions, écoute, controler formulaire


