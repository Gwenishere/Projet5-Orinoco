// utilisation d'une fonction then pour exécuter du code, c'est une promesse
fetch ('http://localhost:3000/api/furniture').then(response => response.json()).then(response => {
        // let avec déclaration du nom des données Json ? pour la reprendre dans .lenght ?
        // pour reprendre plus tard dans for, je détermine les données, leurs noms
        let b = document.body; 
        let cardSection = document.createElement('section'); 
        let cardDiv = document.createElement('div'); 
        let cardTitle = [];
        let cardImg = [];
        let cardId = [];
        let cardArticle = [];
        // boucle pour exécuter et attribuer 
        for (var i = 0; i < 5; i++) { // mettre longueur du type content.lenght
          b.prepend(cardSection); 
          cardSection.prepend(cardDiv); // la div n'englobe pas les éléments suivants
          cardTitle.push(document.createElement('h2')); 
          cardImg.push(document.createElement('img'));
          cardId.push(document.createElement('figcaption')); // juste pour te montrer que j'ai compris le principe
          cardArticle.push(document.createElement('p'));
          cardTitle[i].textContent = response[i].name + ' ' + response[i].price + ' euros'
          document.body.firstElementChild.appendChild(cardTitle[i]);
          cardImg[i].src = response[i].imageUrl;
          document.body.firstElementChild.appendChild(cardImg[i]);
          cardId[i].textContent = response[i]._id;
          document.body.firstElementChild.appendChild(cardId[i]);
          cardArticle[i].textContent = response[i].description;
          document.body.firstElementChild.appendChild(cardArticle[i]);
        }
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