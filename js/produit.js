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
         let cardQuantity = document.createElement('div');
         let quantityText = document.createElement('p');
         let quantityInputs = document.createElement('input');
         let priceElement = document.createElement('div');
         let priceText = document.createElement('p');
         let priceAmount = document.createElement('p');
         let cartButtons = document.createElement('div');
         let addToCartButtons = document.createElement('button');
         let removeCartItemButtons = document.createElement('button');
         let purchaseClicked = document.createElement('a');

    
 // création des noeuds, arbre 
          cardSection.appendChild(cardDiv);
          cardDiv.appendChild(cardTitle);
          cardDiv.appendChild(cardImg);
          cardDiv.appendChild(cardId);
          cardDiv.appendChild(cardDescription);
          cardDiv.appendChild(cardListLabel);
          cardDiv.appendChild(cardList);
          cardDiv.appendChild(cardQuantity);
          cardQuantity.appendChild(quantityText);
          cardQuantity.appendChild(quantityInputs);
          cardDiv.appendChild(priceElement);
          priceElement.appendChild(priceText);
          priceElement.appendChild(priceAmount);
          cardDiv.appendChild(cartButtons);
          cartButtons.appendChild(addToCartButtons);
          cartButtons.appendChild(removeCartItemButtons);
          cardDiv.appendChild(purchaseClicked);

// récupération et insertion des données
         cardTitle.textContent = response.name + ' - ' + response.price/100 + ' € TTC';
         cardImg.src = response.imageUrl;
         cardId.textContent = 'Ref article : ' + response._id;
         cardDescription.textContent = 'Description : ' + response.description;
         cardListLabel.textContent = 'Sélectionnez le vernis : ';
         quantityText.textContent = 'Quantité : ';
         priceText.textContent = 'Montant total : ';
         priceAmount.textContent = response.price/100 + ' €'; 
         addToCartButtons.textContent = 'AJOUTER AU PANIER';
         removeCartItemButtons.textContent = 'ENLEVER DU PANIER';
         purchaseClicked.textContent = 'ACHETER';

    
// attribut
         cardImg.setAttribute('alt', 'meuble en bois');
         cardListLabel.setAttribute('for', 'vernis');
         quantityInputs.setAttribute('type', 'number');
         quantityInputs.setAttribute('value', 1);
         addToCartButtons.setAttribute('value', 'Add');
         removeCartItemButtons.setAttribute('type', 'button');
         purchaseClicked.setAttribute('href', '../html/panier.html');
// class
         cardDiv.className = 'element';
         cardImg.className = 'photo';
         cardQuantity.className = 'quantity';
         quantityInputs.className = 'cart-quantity-input';
         priceAmount.className = 'cart-amount-price';
         cartButtons.className = 'shop-buttons';
         addToCartButtons.className = 'shop-item-button';
         removeCartItemButtons.className = 'btn-danger';
         purchaseClicked.className = 'btn-purchase';

// id
         cardList.id = 'vernis';

         
        addToCartButtons.addEventListener('click', ()=>{addTo();}); //!!!pas ok

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

         function addTo() {
         	let msgAlert = document.createElement('p');
         	msgAlert.textContent = 'le meuble : ' + response.name + ' a été ajouté à votre panier';
         	cardDiv.appendChild(msgAlert);
            priceAmount.textContent = ((response.price/100)*(++quantityInputs.value)) + '€' ;

         }

        function updateCartTotal() {
            for (var i = 0; i < quantityInputs.length; i++) {

                total = total + (response.price * quantityInputs)
            }
            total = Math.round(total * 100) / 100

        }
})


// boutons plus moins   avec récupération du prix selon id  et multiplier par le nombre
// local storage cf doc reçue     
// bouton add to cart récup de l'id cf page main et 
// qui écoutera ce qu'il y a dans input
/*         let buttonAddToCart = response._id;
           addToCartBtn.addEventListener('click', () => {
           localStorage.setItem('id', buttonAddToCart);
           }) */



