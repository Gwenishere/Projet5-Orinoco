const b = document.body;

const PageFooter = document.createElement('footer')
const PageFooterDiv = document.createElement('div')
const PageFooterText = document.createElement('p')

document.body.appendChild(PageFooter)
PageFooter.prepend(PageFooterDiv)
PageFooterDiv.prepend(PageFooterText)
PageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

// afficher le message de confirmation à partir du localStorage - PB REVOIR ----
const finalNumber = localStorage.getItem('orderId')
const finalPrice = localStorage.getItem('price')
const firstName = localStorage.getItem('firstName')
const thankMess = document.getElementById('username')
const order = document.getElementById('orderId')
// si pas de numero de commande alors message d'erreur
if (finalNumber != null) {
  thankMess.textContent = firstName
  order.textContent = 'Votre commande pour un montant de ' + finalPrice + '€ sous le numéro : ' + finalNumber
  localStorage.clear()
} else {
  document.getElementById('thanks').textContent = 'Désolés !'
  order.textContent = 'Nous rencontrons un soucis avec votre commande.'
}