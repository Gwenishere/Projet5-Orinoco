
  let cardHeader = document.createElement('header');
  document.body.prepend(cardHeader);
// utilisation d'une fonction then pour exécuter du code, c'est une promesse

fetch ('http://localhost:3000/api/furniture').then(response => response.json()).then(response => {
        // let avec déclaration du nom des données Json ? pour la reprendre dans .lenght ?
        // pour reprendre plus tard dans for, je détermine les données, leurs noms
        let b = document.body; 
        let cardSection = document.createElement('section'); 
        let cardDiv = document.createElement('div');
       //  let cardDiv = []; // 
        let cardTitle = [];
        let cardImg = [];
        let cardId = [];
        let cardArticle = [];

        b.appendChild(cardSection); 
        cardSection.prepend(cardDiv);

        // boucle pour exécuter et attribuer 
        for (var i = 0; i < response.length; i++) { // mettre longueur du type content.lenght
          // la div n'englobe pas les éléments suivants
          // cardDiv.push(document.createElement('div'));
          cardTitle.push(document.createElement('h2')); 
          cardImg.push(document.createElement('img'));
          cardId.push(document.createElement('figcaption')); // juste pour te montrer que j'ai compris le principe
          cardArticle.push(document.createElement('p'));
          // cardDiv[i].textContent = [];
          // cardSection[i].appendChild(cardDiv[i]);
          cardTitle[i].textContent = response[i].name + ' ' + response[i].price + ' euros';
          cardDiv.appendChild(cardTitle[i]);
          cardImg[i].src = response[i].imageUrl;
          cardDiv.appendChild(cardImg[i]);
          cardId[i].textContent = response[i]._id;
          cardDiv.appendChild(cardId[i]);
          cardArticle[i].textContent = response[i].description;
          cardDiv.appendChild(cardArticle[i]);
        }
        let cardFooter = document.createElement('footer');
        document.body.appendChild(cardFooter);
})


// Si pas de réponse, j'exécute la fonction  catch pour attraper l'erreur
fetch('http://localhost:3000/api/furniture').then(response => {
        if (response.ok) {
            response.json()
                .then(console.log);
        } else {
            console.error('server response : ' + response.status);
        }
}).catch(console.error);