// DOM
const b = document.body

// const contact = {}
const products = []
const productList = []
for (let i = 0; i < localStorage.getItem('macommande'); i++) {
  for (let j = 0; j < JSON.parse(localStorage.getItem('macommande' + i))('nblignecommande').length; j++) {
    productList.push(JSON.parse(localStorage.getItem('macommande' + i))._id)
    console.log(productList)
  }
}
// déclarer somme totale
let finalPrice = 0
// boucles qui récupèrent panier
for (let i = 0; i < localStorage.getItem('nblignecommande'); i++) {
  if (localStorage.getItem('macommande' + i)) {
    const tableContainer = document.createElement('tr')
    tableContainer.className = 'trTableContainer'
    tableContainer.id = 'trtTableContainer'
    const tableBody = []

    for (let j = 0; j < localStorage.getItem('macommande' + i).split(',').length + 1; j++) { // PB faire avec parse ou string
      tableBody.push(document.createElement('td'))
      tableBody[j].textContent = localStorage.getItem('macommande' + i).split(',')[j] // PB faire avec parse
      tableContainer.appendChild(tableBody[j])
      console.log(tableBody[j])
    }
    const removeIcon = document.createElement('i')// calcul du montant total de la commande
    tableBody[localStorage.getItem('macommande' + i).split(',').length].appendChild(removeIcon)
    removeIcon.setAttribute('class', 'fas fa-times-circle close')
    removeIcon.setAttribute('aria-hidden', 'true')
    // si input quantité vide //
    if (localStorage.getItem('macommande' + i).split(',')[3] === '') {
      console.log('Attention, aucune quantité sélectionnée')
    }
    // Test apparition dans panier //
    console.table(tableContainer.textContent)
    removeIcon.addEventListener('click', () => {
      console.log('macommande' + i.valueOf)
      finalPrice -= parseInt(localStorage.getItem('macommande' + i).split(',')[4]) // re-calcul du montant panier
      console.log(finalPrice)
      localStorage.removeItem('macommande' + i) // PB rapide message d'erreur dans console
      bodytable.deleteRow('macommande' + i) // supprime le DOM de l'article PB PB !!!
      location.reload() // actualisation de la page
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
const orderForm = document.createElement('form')
const formTitle = document.createElement('h2')
const formNameMailTitle = document.createElement('h3')
const formNameCell = document.createElement('div')
const formNameLabel = document.createElement('label')
const lastName = document.createElement('input')
const lastNameError = document.createElement('span')
const formFirstnameCell = document.createElement('div')
const formFirstNameLabel = document.createElement('label')
const firstName = document.createElement('input')
const firstNameError = document.createElement('span')
const formEmailCell = document.createElement('div')
const formEmailLabel = document.createElement('label')
const email = document.createElement('input')
const emailError = document.createElement('span')
const formAddressTitle = document.createElement('h3')
const formAddressCell = document.createElement('div')
const formAddressLabel = document.createElement('label')
const address = document.createElement('input')
const addressError = document.createElement('span')
const formCityCell = document.createElement('div')
const formCityLabel = document.createElement('label')
const city = document.createElement('input')
const cityError = document.createElement('span')
// bouton valider commande lié au formulaire et tableau
const submitBtn = document.createElement('button')
const toast = document.getElementById('toast-message')
// bouton supprimer commande
const cartButtons = document.createElement('div')
const removeCartBtn = document.createElement('button')
// DOM Form
document.body.appendChild(orderForm)
orderForm.prepend(formTitle)
orderForm.appendChild(formNameMailTitle)
orderForm.appendChild(formNameCell)
formNameCell.appendChild(formNameLabel)
formNameCell.appendChild(lastName)
formNameCell.appendChild(lastNameError)
orderForm.appendChild(formFirstnameCell)
formFirstnameCell.appendChild(formFirstNameLabel)
formFirstnameCell.appendChild(firstName)
formFirstnameCell.appendChild(firstNameError)
orderForm.appendChild(formEmailCell)
formEmailCell.appendChild(formEmailLabel)
formEmailCell.appendChild(email)
formEmailCell.appendChild(emailError)
orderForm.appendChild(formAddressTitle)
orderForm.appendChild(formAddressCell)
formAddressCell.appendChild(formAddressLabel)
formAddressCell.appendChild(address)
formAddressCell.appendChild(addressError)
orderForm.appendChild(formCityCell)
formCityCell.appendChild(formCityLabel)
formCityCell.appendChild(city)
formCityCell.appendChild(cityError)
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
lastName.setAttribute('minlength', 2)
lastName.required = true
lastNameError.setAttribute('aria-live', 'polite')
formFirstNameLabel.setAttribute('for', 'firstname')
firstName.setAttribute('type', 'text')
firstName.setAttribute('name', 'first_name')
firstName.setAttribute('placeholder', '*Prénom')
firstName.setAttribute('minlength', 2)
firstName.required = true
formEmailLabel.setAttribute('for', 'mail')
email.setAttribute('type', 'email')
email.setAttribute('name', 'email')
email.setAttribute('placeholder', '*Email')
email.required = true
emailError.setAttribute('aria-live', 'polite')
formAddressLabel.setAttribute('for', 'address')
address.setAttribute('type', 'text')
address.setAttribute('name', 'address')
address.setAttribute('placeholder', '*Adresse')
address.required = true
addressError.setAttribute('aria-live', 'polite')
formCityLabel.setAttribute('for', 'city')
city.setAttribute('type', 'text')
city.setAttribute('name', 'city')
city.setAttribute('placeholder', '*Ville')
city.required = true
cityError.setAttribute('aria-live', 'polite')
// Attributs boutons
removeCartBtn.setAttribute('type', 'button')
removeCartBtn.setAttribute('class', 'btn btn-danger btn-lg')
submitBtn.setAttribute('href', '../html/confirmation.html')
submitBtn.setAttribute('type', 'submit')
submitBtn.setAttribute('value', 'Valider la commande')
submitBtn.setAttribute('class', 'btn btn-success btn-lg')
// Contenus formulaire et boutons
formTitle.textContent = 'Veuillez compléter le formulaire ci-dessous'
formNameMailTitle.textContent = 'Vos coordonnées : '
formNameLabel.textContent = 'Nom'
formFirstNameLabel.textContent = 'Prénom'
formEmailLabel.textContent = 'Email'
formAddressLabel.textContent = 'Adresse (espace, sans virgule) '
formCityLabel.textContent = 'Ville'
formAddressTitle.textContent = 'Votre adresse : '
submitBtn.textContent = 'Valider commande'
removeCartBtn.textContent = 'Vider panier'
orderForm.id = 'orderForm'
lastName.id = 'last_name'
firstName.id = 'first_name'
email.id = 'email'
address.id = 'address'
city.id = 'city'
submitBtn.id = 'order'
// Class
orderForm.className = 'needs-validation'
lastName.className = 'form-control'
lastNameError.className = 'error'
firstName.className = 'form-control'
firstNameError.className = 'error'
email.className = 'form-control'
emailError.className = 'error'
address.className = 'form-control'
city.className = 'form-control'

// Footer
const pageFooter = document.createElement('footer')
const pageFooterDiv = document.createElement('div')
const pageFooterText = document.createElement('p')
document.body.appendChild(pageFooter)
pageFooter.prepend(pageFooterDiv)
pageFooterDiv.prepend(pageFooterText)
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

// PB vérifier formulaire
const regexGlobal = /^[a-zA-Z- ]+$/u
const regexEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')
const regexAddress = /^[0-9]{1,5}( [-a-zA-Zàâäéèêëïîôöùûüç ]+)+$/
// Ecoute des valeurs saisies
orderForm.last_name.addEventListener('change', e =>
  testInputForm(
    regexGlobal,
    e.target.value,
    lastName,
    'lastName',
    'Etes-vous sûr ?'
  )
)
orderForm.first_name.addEventListener('change', e =>
  testInputForm(
    regexGlobal,
    e.target.value,
    firstName,
    'firstName',
    'Etes-vous sûr ?'
  )
)
orderForm.email.addEventListener('change', e =>
  testInputForm(
    regexEmail,
    e.target.value,
    email,
    'email',
    'Votre email doit contenir un @, et des lettres'
  )
)
orderForm.address.addEventListener('change', e =>
  testInputForm(
    regexAddress,
    e.target.value,
    address,
    'address',
    'il va falloir être plus précis, svp'
  )
)
orderForm.city.addEventListener('change', e =>
  testInputForm(
    regexGlobal,
    e.target.value,
    city,
    'city',
    'il va falloir être plus précis, svp'
  )
)

const test = {}

const testInputForm = (regex, value, fields, name, errorMessage) => {
  const small = fields.nextElementSibling
  if (regex.test(value) && value !== '' && value.length > 1) {
    small.innerHTML = '\u2714 ' + 'OK!'
    small.classList.remove('text-danger')
    small.classList.add('text-success')
    test[name] = true
  } else {
    small.innerHTML = errorMessage
    small.classList.remove('text-success')
    small.classList.add('text-danger')
    console.log(name + ' : erreur input')
    test[name] = false
  }
}

// vider panier
removeCartBtn.addEventListener('click', () => {
  localStorage.clear()
  location.reload()
})

// s'exécute après clic sur le bouton valider panier
submitBtn.addEventListener('click', function (event) {
  event.preventDefault()

  const urlApi = 'http://localhost:3000/api/furniture/order'
  const contact = {
    lastName: lastName.value,
    firstName: firstName.value,
    email: email.value,
    address: address.value,
    city: city.value
  }
  console.log(typeof (contact))
  console.log('contact:', contact)

  orderToSend = {
    contact: contact, // type de données
    products: productList
  }
  console.log(typeof (orderToSend))
  console.log(orderToSend)

  const postFetch = {
    method: 'POST',
    body: JSON.stringify(orderToSend),
    headers: {
      'Content-type': 'application/json'
    }
  }
  fetch(urlApi, postFetch)
    .then(response => response.json())
    .then(function (order) {
      const orderConfirmed = {
        lastName: contact.lastName,
        firstName: contact.firstName,
        price: finalPrice,
        orderId: order.orderId
      }
      localStorage.setItem('clientOrder', JSON.stringify(orderConfirmed))
      window.location = '../html/confirmation.html'
    }).catch(function (err) { console.log('Erreur fetch: ' + err.message) })
})
