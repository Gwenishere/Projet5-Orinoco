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