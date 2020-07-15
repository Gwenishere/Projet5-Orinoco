
   let cardHeader = document.createElement('header');
   let cardHeaderTitle = document.createElement('h1');
   document.body.prepend(cardHeader);
   cardHeader.prepend(cardHeaderTitle);
   cardHeaderTitle.textContent = "Orinoco :" + "     " + "Des meubles d'exception";
   let b = document.body;
   let cardSection = document.createElement('main');
   b.appendChild(cardSection);
   cardSection.classList.add('slideshow-container');
 
 // utilisation d'une fonction then pour exécuter du code, c'est une promesse
 
 fetch ('http://localhost:3000/api/furniture').then(response =>
 response.json()).then(response => {
        
         // pour reprendre plus tard dans for, je détermine les données, leurs noms
 
         let cardDiv = document.createElement('div');
         let cardTitle = [];
         let cardImg = [];
         let cardId = [];
         let cardArticle = [];
 
         cardSection.prepend(cardDiv);
         cardDiv.classList.add('mySlides', 'fade');
         let cardFooter = document.createElement('footer');
         document.body.appendChild(cardFooter);
 
         // boucle pour exécuter et attribuer
         for (var i = 0; i < response.length; i++) {
           // la div n'englobe pas les éléments suivants
           cardTitle.push(document.createElement('h2'));
           cardImg.push(document.createElement('img'));
           cardId.push(document.createElement('figcaption'));
           cardArticle.push(document.createElement('p'));;
           // cardSection[i].appendChild(cardDiv[i]);
 
           cardTitle[i].textContent = response[i].name + ' - ' + response[i].price + ' €';
           cardDiv.appendChild(cardTitle[i]);
           cardImg[i].src = response[i].imageUrl;
           cardDiv.appendChild(cardImg[i]);
           cardId[i].textContent = 'ref article : ' + response[i]._id;
           cardDiv.appendChild(cardId[i]);
           cardArticle[i].textContent = response[i].description;
           cardDiv.appendChild(cardArticle[i]);
 
 // try catch
 
 
 }})
