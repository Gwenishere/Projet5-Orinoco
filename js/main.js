const b = document.body
const cardSection = document.createElement('main')
cardSection.className = 'container'
b.appendChild(cardSection)

// Footer
const pageFooter = document.createElement('footer')
const pageFooterDiv = document.createElement('div')
const pageFooterText = document.createElement('p')
document.body.appendChild(pageFooter)
pageFooter.prepend(pageFooterDiv)
pageFooterDiv.prepend(pageFooterText)
pageFooterText.textContent = '💻 Site créé en juillet 2020 par Orinoco - 29 avenue des Peupliers 35510 Cesson-Sévigné'

// utilisation d'une fonction then pour exécuter du code, c'est une promesse
const url = 'http://localhost:3000/api/furniture'
fetch(url).then(response =>
  response.json()).then(response => {
  const productDiv = [] // pour reprendre plus tard dans for, je détermine les données, leurs noms
  const productTitle = []
  const productPicture = []
  const productId = []
  const productDescription = []
  const productPrice = []
  const productMoreLink = []
  for (var i = 0; i < response.length; i++) {
    productDiv.push(document.createElement('div')) // création des éléments
    productTitle.push(document.createElement('h3'))
    productPicture.push(document.createElement('img'))
    productId.push(document.createElement('figcaption'))
    productDescription.push(document.createElement('p'))
    productPrice.push(document.createElement('p'))
    productMoreLink.push(document.createElement('a'))
    cardSection.appendChild(productDiv[i]) // noeuds
    productDiv[i].appendChild(productTitle[i])
    productDiv[i].appendChild(productPicture[i])
    productDiv[i].appendChild(productId[i])
    productDiv[i].appendChild(productDescription[i])
    productDiv[i].appendChild(productPrice[i])
    productDiv[i].appendChild(productMoreLink[i])
    productTitle[i].textContent = response[i].name // contenus
    productPicture[i].src = response[i].imageUrl
    productId[i].textContent = 'Ref article : ' + response[i]._id
    productDescription[i].textContent = 'Description : ' + response[i].description
    productPrice[i].textContent = 'Prix : ' + response[i].price / 100 + ' € TTC'
    productMoreLink[i].textContent = 'Découvrez le meuble'
    productPicture[i].setAttribute('alt', 'meuble en bois') // attributs
    productMoreLink[i].setAttribute('href', '../html/produit.html')
    productDiv[i].className = 'element' // class
    productMoreLink[i].className = 'buttonShow'
    const buttonLink = response[i]._id // click et prends le lien de l'id unique

    productMoreLink[i].addEventListener('click', () => {
    localStorage.setItem('id', buttonLink)
    })

    myCart = localStorage.getItem('macommande')
  }
})
  .catch(function (error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)
  })
