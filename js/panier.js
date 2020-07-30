let b = document.body;
let cardHeader = document.createElement('header');
let cardHeaderTitle = document.createElement('a');
let cardHeaderImg = document.createElement('img');
let cardSection = document.createElement('main');
let PageFooter = document.createElement('footer');
let PageFooterDiv = document.createElement('div');
let PageFooterText = document.createElement('p');
// let firstCaseFormular = document.createElement('input');

b.appendChild(cardSection);
document.body.prepend(cardHeader);
cardHeader.prepend(cardHeaderTitle);
cardHeaderTitle.prepend(cardHeaderImg);
document.body.appendChild(PageFooter);
PageFooter.prepend(PageFooterDiv);
PageFooterDiv.prepend(PageFooterText);
// document.body.appendChild(firstCaseFormular);

cardHeaderTitle.setAttribute('href', '../html/main.html');
// document.querySelector('input').autofocus = true;
cardHeaderImg.src = '../img/banniere.png';
cardSection.className = 'container';
PageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

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


