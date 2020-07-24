let b = document.body;
let pageHeader = document.createElement('header');
let pageHeaderContainer = document.createElement('div');
let pageHeaderElement = document.createElement('div');
let pageHeaderLink = document.createElement('a');
let pageHeaderLogo = document.createElement('img');
let pageHeaderTitle = document.createElement('h1');
let cardSection = document.createElement('main');
let cardSectionTitle = document.createElement('h2');
let pageFooter = document.createElement('footer');
let pageFooterDiv = document.createElement('div');
let pageFooterText = document.createElement('p');
// noeuds
document.body.prepend(pageHeader);
pageHeader.prepend(pageHeaderContainer);
pageHeaderContainer.prepend(pageHeaderElement);
pageHeaderElement.prepend(pageHeaderLink);
pageHeaderLink.prepend(pageHeaderLogo);
pageHeaderElement.append(pageHeaderTitle);
b.appendChild(cardSection);
cardSection.prepend(cardSectionTitle);
document.body.appendChild(pageFooter);
pageFooter.prepend(pageFooterDiv);
pageFooterDiv.prepend(pageFooterText);
// contenu
pageHeaderLogo.src = '../img/banniere.png';
pageHeaderTitle.textContent = "Des meubles d'exception";
cardSectionTitle.textContent = 'Voici le produit que vous avez sélectionné';
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné';
// attribut
pageHeaderLink.setAttribute('href', '../html/main.html');
pageHeaderLogo.setAttribute('alt', 'logo orinoco caddie');
// class
cardSection.className = 'container';
// id
pageHeaderContainer.id = 'titre_principal';
pageHeaderElement.id = 'logo';

fetch ('http://localhost:3000/api/furniture/'+ localStorage.getItem('id')).then(response =>
response.json()).then(response => {

// création des éléments          
         let cardDiv = document.createElement('div');
         let cardTitle = document.createElement('h3');
         let cardImg = document.createElement('img');
         let cardId = document.createElement('figcaption');
         let cardDescription = document.createElement('p');
         let cardList = document.createElement('select');
         let cardListLabel = document.createElement('label');
         let cardListOption = [];
             
 // création des noeuds, arbre 
          cardSection.appendChild(cardDiv);
          cardDiv.appendChild(cardTitle);
          cardDiv.appendChild(cardImg);
          cardDiv.appendChild(cardId);
          cardDiv.appendChild(cardDescription);
          cardDiv.appendChild(cardListLabel);
          cardDiv.appendChild(cardList);

// récupération et insertion des données
         cardTitle.textContent = response.name + ' - ' + response.price/100 + ' € TTC';
         cardImg.src = response.imageUrl;
         cardId.textContent = 'Ref article : ' + response._id;
         cardDescription.textContent = 'Description : ' + response.description;
         cardListLabel.textContent = 'Choisissez un vernis : ' ;
// attribut
         cardImg.setAttribute('alt', 'meuble en bois');
         cardListLabel.setAttribute('for', 'vernis');
// class
         cardDiv.className = 'element';
         cardImg.className = 'photo';

// id
         cardList.id = 'vernis';

// boucle récupère les données du tableau varnish         
         for (let i = 0; i < response.varnish.length; i++) {
                // création de l'élément option            
                   cardListOption.push(document.createElement('option'));
                // création du noeud
                   cardList.appendChild(cardListOption[i]);
                // récupération et insertion des données     
                   cardListOption[i].textContent = response.varnish[i];
                // attributs, récupère le nom du vernis
                   cardListOption[i].setAttribute('value', response.varnish[i]);
         }
// boutons plus moins   avec récupération du prix selon id  et multiplier par le nombre
// local storage cf doc reçue     
// bouton add to cart récup de l'id cf page main
    /*     let buttonAddToCart = response._id;
         AddToCart.addEventListener('click', () => {
         localStorage.setItem('id', buttonAddToCart);
         }) */

})




