let b = document.body;
let pageHeader = document.createElement('header');
let pageHeaderTitle = document.createElement('a');
let pageHeaderImg = document.createElement('img');

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

let cartButtons = document.createElement('div');
let removeCartItemButtons = document.createElement('button');
let submitBtn = document.createElement('input');
// let firstCaseFormular = document.createElement('input');

document.body.prepend(pageHeader);
pageHeader.prepend(pageHeaderTitle);
pageHeaderTitle.prepend(pageHeaderImg);

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

cartButtons.appendChild(removeCartItemButtons);
orderForm.appendChild(submitBtn);

document.body.appendChild(pageFooter);
pageFooter.prepend(pageFooterDiv);
pageFooterDiv.prepend(pageFooterText);

// document.body.appendChild(firstCaseFormular);

pageHeaderTitle.setAttribute('href', '../html/main.html');
orderForm.setAttribute('method', 'post');
orderForm.setAttribute('action', 'fichier.js'); // vers confirmation ou autre ou en trop ?
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

removeCartItemButtons.setAttribute('type', 'button');
submitBtn.setAttribute('href', '../html/confirmation.html');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Valider la commande');
// document.querySelector('input').autofocus = true; pour obligation de zone



formTitle.textContent = 'Veuillez compléter le formulaire ci-dessous';
formNameMailTitle.textContent = 'Vos coordonnées : '
formNameLabel.textContent = 'Nom'
formFirstNameLabel.textContent = 'Prénom'
formEmailLabel.textContent = 'Email'
formAddressLabel.textContent = 'Adresse'
formCityLabel.textContent = 'Ville'
formAddressTitle.textContent = 'Votre adresse : ';
removeCartItemButtons.textContent = 'ENLEVER DU PANIER';


pageHeaderImg.src = '../img/banniere.png';
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné';

orderForm.id = 'orderForm';
lastName.id = 'last_name';
firstName.id = 'first_name';
email.id = 'email';
address.id = 'address';
city.id = 'city';

removeCartItemButtons.className = 'btn-danger';
submitBtn.className = 'btn-purchase';


orderForm.addEventListener('submit', function(e) {
	alert('Nous vous remercions pour votre commande !');
	e.preventDefault();
});




/*function addToBasket() {

    // Check if we already have an array in local storage.
    
    let x = localStorage.getItem("productList");
    
    // If not, create the array.
    
    if (x === null) x = [];
    
    // If so, decode the array.
    
    else x = JSON.parse(x);
    
    // Add our new item.
    
    x.push(objetProduit);
    
    // Encode the array.
    
    x = JSON.stringify(x);
    
    // Add back to LocalStorage.
    
    localStorage.setItem("productList", x);   
    window.open("panier.php");  
    };
     array.find(key => key.value === 'my_item')
*/
/* // formulaire nom prénom adresse ville email

document.getElementById('stockage').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
		var coordonnees = {
			nom:document.getElementById('nom').value,
			prenom:document.getElementById('prenom').value,
			ville:document.getElementById('ville').value,
		};
		localStorage.setItem('coord',JSON.stringify(coordonnees));
		alert("Mémorisation effectuée");
	} else alert("localStorage n'est pas supporté");
};
// Méthode de lecture
document.getElementById('lecture').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
		var coordonnees = JSON.parse(localStorage.getItem('coord'));
		document.getElementById('nom').value = coordonnees.nom;
		document.getElementById('prenom').value = coordonnees.prenom;
		document.getElementById('ville').value = coordonnees.ville;
		alert("Lecture effectuée");
	} else alert("localStorage n'est pas supporté");
};
*/


