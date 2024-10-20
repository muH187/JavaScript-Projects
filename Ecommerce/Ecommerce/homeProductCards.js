const productContainer = document.querySelector("#productContainer")
const productTemplate = document.querySelector("#productTemplate")

export const showProductContainer = (products) => {
    if(!products) {
        return false
    }

    products.forEach((currentProduct) => {
        const {id, name, category, brand, price, stock, description, image} = currentProduct

        const productClone = document.importNode(productTemplate.content, true)

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)

        productClone.querySelector('.productName').textContent = name
        productClone.querySelector('.category').textContent = category
        productClone.querySelector('.productPrice').textContent = `$${price}`
        productClone.querySelector('.productActualPrice').textContent = `$${price * 2}`
        productClone.querySelector('.productStock').textContent = stock
        productClone.querySelector('.productDescription').textContent = description
        productClone.querySelector('.productImage').src = image
        productClone.querySelector('.productImage').alt = name

        productContainer.append(productClone)

        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock)
        })
    })
}