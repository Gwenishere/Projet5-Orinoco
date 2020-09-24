const b = document.body

const PageFooter = document.createElement('footer')
const PageFooterDiv = document.createElement('div')
const PageFooterText = document.createElement('p')

document.body.appendChild(PageFooter)
PageFooter.prepend(PageFooterDiv)
PageFooterDiv.prepend(PageFooterText)
PageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

// afficher le message de confirmation à partir du localStorage - PB REVOIR ----

const getClientOrder = JSON.parse(localStorage.getItem('clientOrder'))
const firstName = localStorage.getItem(('clientOrder').firstName)
const orderId = localStorage.getItem(('clientOrder').orderId)
const finalPrice = localStorage.getItem(('clientOrder').price)

document.getElementById('firstName').innerHTML = getClientOrder.firstName
document.getElementById('orderId').innerHTML = getClientOrder.orderId
document.getElementById('priceValue').innerHTML = getClientOrder.price

// console.log(orderId.textContent)
// si pas de numero de commande alors message d'erreur
// mettre la fonction qui englobera le if
document.addEventListener('DOMContentLoaded', () => {
  if (getClientOrder.orderId != undefined && getClientOrder.price > 0) {
    localStorage.clear()
    localStorage.removeItem('orderId')
  } else {
    document.getElementById('thanks').textContent = 'Aïe, formulaire incomplet ou panier vide !'
    document.getElementById('orderId').textContent = 'Oops! Aucun numéro de commande généré'
    document.getElementById('confirmMsg').textContent = 'Veuillez revenir sur la page panier. A tout de suite'
    console.log('le formulaire est incomplet')
  } 
})
