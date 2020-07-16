
   let cardHeader = document.createElement('header');
   let cardHeaderTitle = document.createElement('h1');
   document.body.prepend(cardHeader);
   cardHeader.prepend(cardHeaderTitle);
   cardHeaderTitle.textContent = "     " + "Des meubles d'exception";
   let b = document.body;
   let cardSection = document.createElement('main');
   b.appendChild(cardSection);
   cardSection.classList.add('slideshow-container');
   let PageFooter = document.createElement('footer');
   document.body.appendChild(PageFooter);
   let PageFooterDiv = document.createElement('div');
   PageFooter.prepend(PageFooterDiv);
   let PageFooterText = document.createElement('p');
   PageFooterDiv.prepend(PageFooterText);
   PageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'
 // utilisation d'une fonction then pour exécuter du code, c'est une promesse
 
 fetch ('http://localhost:3000/api/furniture').then(response =>
 response.json()).then(response => {
        
         // pour reprendre plus tard dans for, je détermine les données, leurs noms
 
         let cardDiv = document.createElement('div'); //
         let cardTitle = [];
         let cardImg = [];
         let cardId = [];
         let cardDescription = [];
        // let productView = []; // document.createElement('a')

         cardSection.prepend(cardDiv);
 
         // boucle pour exécuter et attribuer
         for (var i = 0; i < response.length; i++) {
            // la div n'englobe pas les éléments suivants, et le a le se multiplie pas
         //  cardDiv.concat(document.createElement('div'));
           cardTitle.push(document.createElement('h2'));
           cardImg.push(document.createElement('img'));
           cardId.push(document.createElement('figcaption'));
           cardDescription.push(document.createElement('p'));;
           // cardDiv.classList.add('mySlides', 'fade');
          // cardDiv[i].childNodes = response[i] ;
           cardTitle[i].textContent = response[i].name + ' - ' + response[i].price/100 + ' € TTC';
           cardDiv.appendChild(cardTitle[i]);
           cardImg[i].src = response[i].imageUrl;
           cardDiv.appendChild(cardImg[i]);
           cardImg[i].setAttribute('alt', 'meuble en bois');
           cardId[i].textContent = 'ref article : ' + response[i]._id;
           cardDiv.appendChild(cardId[i]);
           cardDescription[i].textContent = response[i].description;
           cardDiv.appendChild(cardDescription[i]);
         // productView.textContent = 'En savoir plus';
         //  cardDiv.appendChild(productView);
 // try catch
 
 
 }})
