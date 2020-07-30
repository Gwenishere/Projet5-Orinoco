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
cardSectionTitle.textContent = 'Nos meubles sont réalisés à partir de bois issus de forêts gérées durablement';
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné';
// attribut
pageHeaderLink.setAttribute('href', '../html/main.html');
pageHeaderLogo.setAttribute('alt', 'logo orinoco caddie');
// class
cardSection.className = 'container';
// id
pageHeaderContainer.id = 'titre_principal';
pageHeaderElement.id = 'logo';

   // utilisation d'une fonction then pour exécuter du code, c'est une promesse
 fetch ('http://localhost:3000/api/furniture').then(response =>
 response.json()).then(response => {
 
// pour reprendre plus tard dans for, je détermine les données, leurs noms
         let cardDiv = [];
         let cardTitle = [];
         let cardImg = [];
         let cardId = [];
         let cardDescription = [];
		 let cardPrice = [];
         let cardSeeMoreClick = []; 
// création des éléments
         for (var i = 0; i < response.length; i++) {
           cardDiv.push(document.createElement('div'));
           cardTitle.push(document.createElement('h3'));
           cardImg.push(document.createElement('img'));
           cardId.push(document.createElement('figcaption'));
           cardDescription.push(document.createElement('p'));
		   cardPrice.push(document.createElement('p'));
           cardSeeMoreClick.push(document.createElement('a'));
// noeuds
           cardSection.appendChild(cardDiv[i]);
           cardDiv[i].appendChild(cardTitle[i]);
           cardDiv[i].appendChild(cardImg[i]);
           cardDiv[i].appendChild(cardId[i]);
           cardDiv[i].appendChild(cardDescription[i]);
		   cardDiv[i].appendChild(cardPrice[i]);
           cardDiv[i].appendChild(cardSeeMoreClick[i]);
// contenu
           cardTitle[i].textContent = response[i].name;
           cardImg[i].src = response[i].imageUrl;
           cardId[i].textContent = 'Ref article : ' + response[i]._id;
           cardDescription[i].textContent = 'Description : ' + response[i].description;
		   cardPrice[i].textContent = 'Prix : ' + response[i].price/100 + ' € TTC';
           cardSeeMoreClick[i].textContent = 'Découvrez le meuble';
// attribut
           cardImg[i].setAttribute('alt', 'meuble en bois');
           cardSeeMoreClick[i].setAttribute('href', '../html/produit.html');         
// class
           cardDiv[i].className = 'element';
           cardSeeMoreClick[i].className = 'buttonShow';
// click et prends le lien de l'id unique
           let buttonLink = response[i]._id;
           cardSeeMoreClick[i].addEventListener('click', () => {
           localStorage.setItem('id', buttonLink);
           })
          }
})


