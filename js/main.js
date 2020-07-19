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
 // utilisation d'une fonction then pour exécuter du code, c'est une promesse

 fetch ('http://localhost:3000/api/furniture').then(response =>
 response.json()).then(response => {
         // pour reprendre plus tard dans for, je détermine les données, leurs noms
         let cardDiv = [];
         let cardTitle = [];
         let cardImg = [];
         let cardId = [];
         let cardDescription = [];
         let cardClick = []; 
// création des éléments
         for (var i = 0; i < response.length; i++) {
           cardDiv.push(document.createElement('div'));
           cardTitle.push(document.createElement('h2'));
           cardImg.push(document.createElement('img'));
           cardId.push(document.createElement('figcaption'));
           cardDescription.push(document.createElement('p'));
           cardClick.push(document.createElement('a'));

           cardSection.appendChild(cardDiv[i]);
           cardDiv[i].appendChild(cardTitle[i]);
           cardDiv[i].appendChild(cardImg[i]);
           cardDiv[i].appendChild(cardId[i]);
           cardDiv[i].appendChild(cardDescription[i]);
           cardDiv[i].appendChild(cardClick[i]);

           cardTitle[i].textContent = response[i].name + ' - ' + response[i].price/100 + ' € TTC';
           cardImg[i].src = response[i].imageUrl;
           cardId[i].textContent = 'Ref article : ' + response[i]._id;
           cardDescription[i].textContent = 'Description : ' + response[i].description;
           cardClick[i].textContent = 'Découvrez le meuble';

// attribut
           cardImg[i].setAttribute('alt', 'meuble en bois');
           cardClick[i].setAttribute('href', '../html/produit.html?id' + response[i]._id);
//class
           cardDiv[i].className = 'element';
           cardClick[i].className = 'button';
          }
  })


