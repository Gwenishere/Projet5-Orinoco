   let b = document.body;
   let cardHeader = document.createElement('header');
   let cardHeaderTitle = document.createElement('a');
   let cardHeaderImg = document.createElement('img');
   let cardSection = document.createElement('main');
   let PageFooter = document.createElement('footer');
   let PageFooterDiv = document.createElement('div');
   let PageFooterText = document.createElement('p');

   b.appendChild(cardSection);
   document.body.prepend(cardHeader);
   cardHeader.prepend(cardHeaderTitle);
   cardHeaderTitle.prepend(cardHeaderImg);
   document.body.appendChild(PageFooter);
   PageFooter.prepend(PageFooterDiv);
   PageFooterDiv.prepend(PageFooterText);
   
   cardHeaderTitle.setAttribute('href', '../html/main.html');
   cardHeaderImg.src = '../img/banniere.png';
   cardSection.className = 'container';
   PageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'
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
         // boucle pour exécuter et attribuer
         // la div englobe les éléments du fichier source
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

           cardImg[i].setAttribute('alt', 'meuble en bois');
           cardClick[i].setAttribute('href', '../html/produit.html');
           cardDiv[i].className = 'element';
           cardClick[i].className = 'button';
          }
  })


