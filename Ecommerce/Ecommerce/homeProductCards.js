const productContainer = document.querySelector(".productContainer")
const productTemplate = document.querySelector(".productTemplate")

export const showProductContainer = (products) => {
    if(!products) {
        return false
    }

    products.forEach((currentProduct) => {
        const {id, name, category, product, price, stock, description, image} = currentProduct
    })
}