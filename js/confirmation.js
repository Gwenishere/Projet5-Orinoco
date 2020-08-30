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

//afficher le message de confirmation à partir du localStorage
let finalNumber = sessionStorage.getItem('number');
let finalPrice = sessionStorage.getItem('price');
let firstName = sessionStorage.getItem('firstname');
let thankMess = document.getElementById('username');
let order = document.getElementById('order');
//si pas de numero de commande alors message d'erreur
        if (finalNumber != null){
           thankMess.textContent = firstName;
            order.textContent = 'Votre commande pour un montant de ' + finalPrice + '€ sous le numéro : ' + finalNumber;
            localStorage.clear();
        }else{
            document.getElementById('thanks').textContent = 'Désolés !';
            order.textContent = 'Nous rencontrons un soucis avec votre commande.'
        }