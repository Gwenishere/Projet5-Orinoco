// DOM
const b = document.body

const contact = {}
const products = []
const productList = []
for (let i = 0; i < localStorage.getItem('macommande'); i++) {
  for (let j = 0; j < JSON.parse(localStorage.getItem('macommande' + i))('nblignecommande').length; j++) {
  // ici que mettre pour récupérer et lier?
    productList.push(JSON.parse(localStorage.getItem('macommande' + i))._id)
    console.log(productList)
  }
}

// déclarer somme totale
let finalPrice = 0
// boucles qui récupèrent panier
for (let i = 0; i < localStorage.getItem('nblignecommande'); i++) {
  if (localStorage.getItem('macommande' + i) != undefined) {
    let tableContainer = document.createElement('tr')
    tableContainer.className = 'table-container'
    let tableBody = []
    console.log(localStorage.getItem('macommande'))
    for (let j = 0; j < localStorage.getItem('macommande' + i).split(',').length + 1; j++) { // faire avec parse ou string
      tableBody.push(document.createElement('td'))
      tableBody[j].textContent = localStorage.getItem('macommande' + i).split(',')[j] // faire avec parse
      tableContainer.appendChild(tableBody[j])
 //     console.log(tableBody[j])
    }
    let removeIcon = document.createElement('i')// calcul du montant total de la commande
    tableBody[localStorage.getItem('macommande' + i).split(',').length].appendChild(removeIcon)
    removeIcon.setAttribute('class', 'fas fa-times-circle close')
    removeIcon.setAttribute('aria-hidden', 'true')
    console.log(tableContainer.children)
    // PB le total reste le même
    removeIcon.addEventListener('click', () => {
      console.log('macommande' + i.valueOf)
      localStorage.removeItem('macommande' + i) // PB rapide message d'erreur dans console et nblignecommande pas actualisé
      bodytable.removeChild(bodytable.children[i]) // supprime le DOM de l'article
      location.reload() // actualisation de la page
      finalPrice += parseInt(localStorage.getItem('macommande' + i).split(',')[4]) // re-calcul du montant panier
    })
    finalPrice += parseInt(localStorage.getItem('macommande' + i).split(',')[4]) // faire avec parse ou string
    bodytable.appendChild(tableContainer)
  }
}
displayTotal.textContent = finalPrice
if (finalPrice === 0) {
  alert('votre panier est vide')// si panier vide, alors alert message panier vide
} else {
  console.log('montant total du panier = ' + finalPrice)
  console.log(localStorage)
}
// Formulaire
let orderForm = document.createElement('form')
let formTitle = document.createElement('h2')
let formNameMailTitle = document.createElement('h3')
let formNameCell = document.createElement('div')
let formNameLabel = document.createElement('label')
let lastName = document.createElement('input')
let formFirstnameCell = document.createElement('div')
let formFirstNameLabel = document.createElement('label')
let firstName = document.createElement('input')
let formEmailCell = document.createElement('div')
let formEmailLabel = document.createElement('label')
let email = document.createElement('input')
let formAddressTitle = document.createElement('h3')
let formAddressCell = document.createElement('div')
let formAddressLabel = document.createElement('label')
let address = document.createElement('input')
let formCityCell = document.createElement('div')
let formCityLabel = document.createElement('label')
let city = document.createElement('input')
// bouton valider commande lié au formulaire et tableau
let submitBtn = document.createElement('input')
// bouton supprimer commande lié au tableau ou formulaire ou les deux ?
let cartButtons = document.createElement('div')
let removeCartBtn = document.createElement('button')
// DOM Form
document.body.appendChild(orderForm)
orderForm.prepend(formTitle)
orderForm.appendChild(formNameMailTitle)
orderForm.appendChild(formNameCell)
formNameCell.appendChild(formNameLabel)
formNameCell.appendChild(lastName)
orderForm.appendChild(formFirstnameCell)
formFirstnameCell.appendChild(formFirstNameLabel)
formFirstnameCell.appendChild(firstName)
orderForm.appendChild(formEmailCell)
formEmailCell.appendChild(formEmailLabel)
formEmailCell.appendChild(email)
orderForm.appendChild(formAddressTitle)
orderForm.appendChild(formAddressCell)
formAddressCell.appendChild(formAddressLabel)
formAddressCell.appendChild(address)
orderForm.appendChild(formCityCell)
formCityCell.appendChild(formCityLabel)
formCityCell.appendChild(city)
// DOM bouton
orderForm.appendChild(cartButtons)
cartButtons.appendChild(submitBtn)
cartButtons.appendChild(removeCartBtn)
// Attributs formulaire
orderForm.setAttribute('method', 'post')
orderForm.setAttribute('autocomplete', 'off')
orderForm.setAttribute('name', 'form')
formNameLabel.setAttribute('for', 'name')
lastName.setAttribute('type', 'text')
lastName.setAttribute('name', 'last_name')
lastName.setAttribute('placeholder', '*Nom')
lastName.required = true
formFirstNameLabel.setAttribute('for', 'firstname')
firstName.setAttribute('type', 'text')
firstName.setAttribute('name', 'first_name')
firstName.setAttribute('placeholder', '*Prénom')
firstName.required = true
formEmailLabel.setAttribute('for', 'firstname')
email.setAttribute('type', 'email')
email.setAttribute('name', 'email')
email.setAttribute('placeholder', '*Email')
email.required = true
formAddressLabel.setAttribute('for', 'address')
address.setAttribute('type', 'text')
address.setAttribute('name', 'address')
address.setAttribute('placeholder', '*Adresse')
address.required = true
formCityLabel.setAttribute('for', 'city')
city.setAttribute('type', 'text')
city.setAttribute('name', 'city')
city.setAttribute('placeholder', '*Ville')
city.required = true
// Attributs boutons
removeCartBtn.setAttribute('type', 'button')
removeCartBtn.setAttribute('class', 'btn btn-danger btn-lg')
submitBtn.setAttribute('href', '../html/confirmation.html')
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('value', 'Valider la commande')
// Contenus formulaire et boutons
formTitle.textContent = 'Veuillez compléter le formulaire ci-dessous'
formNameMailTitle.textContent = 'Vos coordonnées : '
formNameLabel.textContent = 'Nom'
formFirstNameLabel.textContent = 'Prénom'
formEmailLabel.textContent = 'Email'
formAddressLabel.textContent = 'Adresse'
formCityLabel.textContent = 'Ville'
formAddressTitle.textContent = 'Votre adresse : '
removeCartBtn.textContent = 'Vider le panier'
orderForm.id = 'orderForm'
lastName.id = 'last_name'
firstName.id = 'first_name'
email.id = 'email'
address.id = 'address'
city.id = 'city'
submitBtn.id = 'order'
// Class
removeCartBtn.className = 'btn-danger'
submitBtn.className = 'btn-purchase'
// Footer
const pageFooter = document.createElement('footer')
const pageFooterDiv = document.createElement('div')
const pageFooterText = document.createElement('p')
document.body.appendChild(pageFooter)
pageFooter.prepend(pageFooterDiv)
pageFooterDiv.prepend(pageFooterText)
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'
// à envoyer vers confirmation si je veux reprendre le prénom
console.log(orderForm.children[3].textContent)
// vérifier si contenu dans formulaire
// PB à faire
// vider panier
removeCartBtn.addEventListener('click', () => {
  localStorage.clear()
  location.reload()
})
// s'exécute après clic sur le bouton valider panier
submitBtn.addEventListener('click', function (event) {
  event.preventDefault()
  const urlApi = 'http://localhost:3000/api/furniture/order'
  let contact = {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    address: address.value,
    city: city.value
  }
  orderToSend = {
    contact: contact, // type de données
    products: productList
  }
  let postFetch = {
    method: 'POST',
    body: JSON.stringify(orderToSend),
    headers: {
      'Content-type': 'application/json'
    }
  }
  fetch(urlApi, postFetch)
    .then(response => response.json())
    .then(function (order) {
      let orderConfirmed = {
        lastName: contact.lastName,
        firstName: contact.firstName,
        price: finalPrice,
        orderId: order.orderId
      }
      let orderStorage = localStorage.setItem('clientOrder', JSON.stringify(orderConfirmed))
      window.location = '../html/confirmation.html'
    })
})