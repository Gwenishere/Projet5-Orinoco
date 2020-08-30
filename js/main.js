let b = document.body;
let pageHeader = document.createElement('header');
let pageHeaderContainer = document.createElement('div');
let pageHeaderElement = document.createElement('div');
let pageHeaderLink = document.createElement('a');
let pageHeaderLogo = document.createElement('img');
let pageHeaderTitle = document.createElement('h1');
let cardSection = document.createElement('main');
let cartSumUpTitle = document.createElement('h2');
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
cardSection.prepend(cartSumUpTitle);
document.body.appendChild(pageFooter);
pageFooter.prepend(pageFooterDiv);
pageFooterDiv.prepend(pageFooterText);
// contenu
pageHeaderLogo.src = '../img/banniere.png';
pageHeaderTitle.textContent = "Des meubles d'exception";
cartSumUpTitle.textContent = 'Nos meubles sont réalisés à partir de bois issus de forêts gérées durablement';
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
fetch('http://localhost:3000/api/furniture').then(response =>
    response.json()).then(response => {

// pour reprendre plus tard dans for, je détermine les données, leurs noms
    let productDiv = [];
    let productTitle = [];
    let productPicture = [];
    let productId = [];
    let productDescription = [];
    let productPrice = [];
    let productMoreLink = [];
// création des éléments
    for (var i = 0; i < response.length; i++) {
        productDiv.push(document.createElement('div'));
        productTitle.push(document.createElement('h3'));
        productPicture.push(document.createElement('img'));
        productId.push(document.createElement('figcaption'));
        productDescription.push(document.createElement('p'));
        productPrice.push(document.createElement('p'));
        productMoreLink.push(document.createElement('a'));
// noeuds
        cardSection.appendChild(productDiv[i]);
        productDiv[i].appendChild(productTitle[i]);
        productDiv[i].appendChild(productPicture[i]);
        productDiv[i].appendChild(productId[i]);
        productDiv[i].appendChild(productDescription[i]);
        productDiv[i].appendChild(productPrice[i]);
        productDiv[i].appendChild(productMoreLink[i]);
// contenus
        productTitle[i].textContent = response[i].name;
        productPicture[i].src = response[i].imageUrl;
        productId[i].textContent = 'Ref article : ' + response[i]._id;
        productDescription[i].textContent = 'Description : ' + response[i].description;
        productPrice[i].textContent = 'Prix : ' + response[i].price / 100 + ' € TTC';
        productMoreLink[i].textContent = 'Découvrez le meuble';
// attributs
        productPicture[i].setAttribute('alt', 'meuble en bois');
        productMoreLink[i].setAttribute('href', '../html/produit.html');
// class
        productDiv[i].className = 'element';
        productMoreLink[i].className = 'buttonShow';
// click et prends le lien de l'id unique
        let buttonLink = response[i]._id;
        productMoreLink[i].addEventListener('click', () => {
        localStorage.setItem('id', buttonLink);
        })
        myCart = localStorage.getItem('macommande');
    }
})
