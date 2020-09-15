const b = document.body
const cardSection = document.createElement('main')
const sectionTitle = document.createElement('h2')
const pageFooter = document.createElement('footer')
const pageFooterDiv = document.createElement('div')
const pageFooterText = document.createElement('p')
// noeuds
b.appendChild(cardSection)
cardSection.prepend(sectionTitle)
document.body.appendChild(pageFooter)
pageFooter.prepend(pageFooterDiv)
pageFooterDiv.prepend(pageFooterText)
// contenu
sectionTitle.textContent = 'Voici le produit que vous avez sélectionné'
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'
// class
cardSection.className = 'container'
// requete
fetch ('http://localhost:3000/api/furniture/' + localStorage.getItem('id')).then(response =>
  response.json()).then(response => {
// création des éléments
  const productDiv = document.createElement('div')
  const productTitle = document.createElement('h3')
  const productPicture = document.createElement('img')
  const productId = document.createElement('figcaption')
  const productDescription = document.createElement('p')
  const productList = document.createElement('select')
  const productListLabel = document.createElement('label')
  const productListOption = []
  const productQuantity = document.createElement('div')
  const quantityText = document.createElement('p')
  const quantityInputs = document.createElement('input')
  const priceElement = document.createElement('div')
  const priceText = document.createElement('p')
  const priceAmount = document.createElement('p')
  const cartButtons = document.createElement('div')
  const addToCartButton = document.createElement('button')
  const returnButton = document.createElement('a')
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
      localStorage.setItem('nblignecommande',parseInt(localStorage.getItem('nblignecommande'))?parseInt(localStorage.getItem('nblignecommande'))+1:1);
      // -------------PB ajout JSON.stringify ligne ci-dessous est-ce ok ? -----------------------------------
      localStorage.setItem('macommande'+ '' + JSON.stringify(parseInt(localStorage.getItem('nblignecommande'))-1),[response._id,response.name,productList.value,quantityInputs.value,quantityInputs.value*response.price/100]);
      location.href = '../html/panier.html'
    }
    function returnTo () {
      localStorage.setItem('macommande', JSON.stringify[response._id, response.name, productList.value, quantityInputs.value, response.price / 100])
    }
  }
})
