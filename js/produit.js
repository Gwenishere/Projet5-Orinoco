let b = document.body;
let pageHeader = document.createElement('header');
let pageHeaderTitle = document.createElement('a');
let pageHeaderImg = document.createElement('img');
let cardSection = document.createElement('main');
let pageFooter = document.createElement('footer');
let pageFooterDiv = document.createElement('div');
let pageFooterText = document.createElement('p');

b.appendChild(cardSection);
document.body.prepend(pageHeader);
pageHeader.prepend(pageHeaderTitle);
pageHeaderTitle.prepend(pageHeaderImg);
document.body.appendChild(pageFooter);
pageFooter.prepend(pageFooterDiv);
pageFooterDiv.prepend(pageFooterText);

pageHeaderTitle.setAttribute('href', '../html/main.html');
pageHeaderImg.src = '../img/banniere.png';
cardSection.className = 'container';
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

fetch ('http://localhost:3000/api/furniture').then(response =>
response.json()).then(response => {
        // pour reprendre plus tard dans for, je détermine les données, leurs noms
        let cardDiv = [];
        let cardTitle = [];
        let cardImg = [];
        let cardId = [];
        let cardDescription = [];
        let cardList = [];
        let cardListOption = [];

// boucle pour exécuter et attribuer
// la div englobe les éléments du fichier source
        for (var i = 0; i < response.length; i++) {
// création des éléments          
          cardDiv.push(document.createElement('div'));
          cardTitle.push(document.createElement('h2'));
          cardImg.push(document.createElement('img'));
          cardId.push(document.createElement('figcaption'));
          cardDescription.push(document.createElement('p'));
          cardList.push(document.createElement('select'));              
 // création des noeuds, arbre 
          cardSection.appendChild(cardDiv[i]);
          cardDiv[i].appendChild(cardTitle[i]);
          cardDiv[i].appendChild(cardImg[i]);
          cardDiv[i].appendChild(cardId[i]);
          cardDiv[i].appendChild(cardDescription[i]);
          cardDiv[i].appendChild(cardList[i]);
// récupération et insertion des données
          cardTitle[i].textContent = response[i].name + ' - ' + response[i].price/100 + ' € TTC';
          cardImg[i].src = response[i].imageUrl;
          cardId[i].textContent = 'Ref article : ' + response[i]._id;
          cardDescription[i].textContent = 'Description : ' + response[i].description;
          cardList[i].textContent = response[i].varnish;
// attributs
          cardImg[i].setAttribute('alt', 'meuble en bois');
// class
          cardDiv[i].className = 'element';


         }
        // const cardList = response[i].varnish; à voir ci-dessous car en fonctionne pas
         for (let j = 0; j < response[i].varnish.length; j++) {
 // création de l'élément option            
           cardListOption.push(document.createElement('option'));
 // création du noeud
           cardList[j].appendChild(cardListOption[j]);
 // récupération et insertion des données       
           cardListOption[j].textContent = cardList[j];
 // attributs
           cardListOption[j].setAttribute('value', 'vernis');
           }
 })



