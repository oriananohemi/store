export const editCart = (product, action) => {
    return (currentCart) => {
        const newProduct = currentCart.find((element) => element.id === product.id)

        if(!newProduct) {
            return currentCart.concat({...product, quantity: 1})
        }
    }
}