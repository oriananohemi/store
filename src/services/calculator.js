export const editCart = (product, action) => {
    return (currentCart) => {
        const newProduct = currentCart.find((element) => element.id === product.id)
        
        if(!newProduct && action === 'increment') {
            return currentCart.concat({...product, quantity: 1})
        }

        return currentCart.reduce((copieCart, item) => {
            if(product.id !== item.id) {
                return copieCart.concat(item)
            }

            switch(action) {
                case "decrement": {
                    if(item.quantity === 1) {
                        return copieCart
                    }

                    return copieCart.concat({...product, quantity: item.quantity -1})
                }
                case "removeProduct": {
                    return copieCart   
                }
                case "increment": {
                    return copieCart.concat({...product, quantity: item.quantity + 1})
                }
                default: {
                    return copieCart.concat(item)
                }
            }
        }, [])
    }
}