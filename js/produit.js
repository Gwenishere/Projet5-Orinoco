let b = document.body
let pageHeader = document.createElement('header')
let pageHeaderContainer = document.createElement('div')
let pageHeaderElement = document.createElement('div')
let pageHeaderLink = document.createElement('a')
let pageHeaderLogo = document.createElement('img')
let pageHeaderTitle = document.createElement('h1')
let cardSection = document.createElement('main')
let sectionTitle = document.createElement('h2')
let pageFooter = document.createElement('footer')
let pageFooterDiv = document.createElement('div')
let pageFooterText = document.createElement('p')
// noeuds
document.body.prepend(pageHeader)
pageHeader.prepend(pageHeaderContainer)
pageHeaderContainer.prepend(pageHeaderElement)
pageHeaderElement.prepend(pageHeaderLink)
pageHeaderLink.prepend(pageHeaderLogo)
pageHeaderElement.append(pageHeaderTitle)
b.appendChild(cardSection)
cardSection.prepend(sectionTitle)
document.body.appendChild(pageFooter)
pageFooter.prepend(pageFooterDiv)
pageFooterDiv.prepend(pageFooterText)
// contenu
pageHeaderLogo.src = '../img/banniere.png'
pageHeaderTitle.textContent = "Des meubles d'exception"
sectionTitle.textContent = 'Voici le produit que vous avez sélectionné'
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'
// attribut
pageHeaderLink.setAttribute('href', '../html/main.html')
pageHeaderLogo.setAttribute('alt', 'logo orinoco caddie')
// class
cardSection.className = 'container'
// id
pageHeaderContainer.id = 'titre_principal'
pageHeaderElement.id = 'logo'
// requete
fetch ('http://localhost:3000/api/furniture/' + localStorage.getItem('id')).then(response =>
  response.json()).then(response => {
// création des éléments
  let productDiv = document.createElement('div')
  let productTitle = document.createElement('h3')
  let productPicture = document.createElement('img')
  let productId = document.createElement('figcaption')
  let productDescription = document.createElement('p')
  let productList = document.createElement('select')
  let productListLabel = document.createElement('label')
  let productListOption = []
  let productQuantity = document.createElement('div')
  let quantityText = document.createElement('p')
  let quantityInputs = document.createElement('input')
  let priceElement = document.createElement('div')
  let priceText = document.createElement('p')
  let priceAmount = document.createElement('p')
  let cartButtons = document.createElement('div')
  let addToCartButton = document.createElement('button')
  let returnButton = document.createElement('a')
  // création des noeuds, arbre
  cardSection.appendChild(productDiv)
  productDiv.appendChild(productTitle)
  productDiv.appendChild(productPicture)
  productDiv.appendChild(productId)
  productDiv.appendChild(productDescription)
  productDiv.appendChild(productListLabel)
  productDiv.appendChild(productList)
  productDiv.appendChild(productQuantity)
  productQuantity.appendChild(quantityText)
  productQuantity.appendChild(quantityInputs)
  productDiv.appendChild(priceElement)
  priceElement.appendChild(priceText)
  priceElement.appendChild(priceAmount)
  productDiv.appendChild(cartButtons)
  cartButtons.appendChild(returnButton)
  cartButtons.appendChild(addToCartButton)
  // récupération et insertion des données
  productTitle.textContent = response.name + ' - ' + response.price / 100 + ' € TTC'
  productPicture.src = response.imageUrl
  productId.textContent = 'Ref article : ' + response._id
  productDescription.textContent = 'Description : ' + response.description
  productListLabel.textContent = 'Sélectionnez le vernis : '
  quantityText.textContent = 'Sélectionnez ou inscrire la quantité : '
  priceText.textContent = 'Montant total : '
  priceAmount.textContent = response.price / 100 + ' €'
  returnButton.textContent = "RETOUR A L'ACCUEIL"
  addToCartButton.textContent = ' AJOUTER AU PANIER'
  // attributs
  productPicture.setAttribute('alt', 'meuble en bois')
  productListLabel.setAttribute('for', 'vernis')
  quantityInputs.setAttribute('type', 'number')
  quantityInputs.setAttribute('value', 1)
  quantityInputs.setAttribute('min', 0)
  returnButton.setAttribute('href', '../html/main.html')
  addToCartButton.setAttribute('value', 'Add')
  // class
  productDiv.className = 'element'
  productPicture.className = 'photo'
  productQuantity.className = 'quantity'
  quantityInputs.className = 'cart-quantity-input'
  priceAmount.className = 'cart-amount-price'
  cartButtons.className = 'shop-buttons'
  addToCartButton.className = 'shop-item-button'
  returnButton.className = 'return-landing-page'
  // id
  productList.id = 'vernis'

  // click
  addToCartButton.addEventListener('click', () => { addTo() })
  returnButton.addEventListener('click', () => { returnTo() })
  // boucle récupère les données du tableau varnish
  for (let i = 0; i < response.varnish.length; i++) {
  // création de l'élément option
    productListOption.push(document.createElement('option'))
    // création du noeud
    productList.appendChild(productListOption[i])
    // récupération et insertion des données
    productListOption[i].textContent = response.varnish[i]
    // attributs, récupère le nom du vernis
    productListOption[i].setAttribute('value', response.varnish[i])
    productListOption[i].id = 'type-vernis'
    function setVernis () {
      localStorage.setItem('type-vernis', productList.value)
    }
    vernis.addEventListener('change', setVernis)
    // message et calcul du montant total et local Storage que je vais récupérer dans panier.js
    function addTo () {
      let msgAlert = document.createElement('p')
      msgAlert.textContent = +quantityInputs.value + ' ' + response.name + ' ' + ' ajouté.s à votre panier. Merci !'
      productDiv.appendChild(msgAlert)
      priceAmount.textContent = ((response.price / 100) * (+quantityInputs.value)) + '€'
      localStorage.setItem('nblignecommande', parseInt(localStorage.getItem('nblignecommande'))?parseInt(localStorage.getItem('nblignecommande')) + 1:1)
      localStorage.setItem('macommande' + '' + (parseInt(localStorage.getItem('nblignecommande')) -1), [response._id, response.name, productList.value, quantityInputs.value, quantityInputs.value * response.price / 100])
      location.href = '../html/panier.html'
    }
    function returnTo () {
      localStorage.setItem('macommande', [response._id, response.name, productList.value, quantityInputs.value, response.price / 100])
    }
  }
})
