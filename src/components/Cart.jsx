import React, {useMemo}from 'react';

import SweetAlert from 'sweetalert2-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Item from './Item'

const Cart = ({products, decrement, increment, removeItem, clear}) => {
    const total = useMemo(() => products.reduce((acc, item) => acc + (item.price_real * item.quantity), 0), [products])

    const quantity = useMemo(() => products.reduce((acc, item) => acc + item.quantity, 0), [products]) 

    return(
        <section className="cart">
            <div className="cart__goBack">
                <button className="carousel__button fa-lg"><FontAwesomeIcon icon="chevron-left" /></button>
                <h2>Volver a la tienda</h2>
            </div>
            <div className="cart--flex-container">
                <h1 className="title">Carrito de compras</h1>
                <p><span className="details--color"></span>{quantity} items</p>
            </div>
            <div>
                {
                    products.map((item) => 
                        <Item 
                            key={item.id}
                            {...item}
                            decrement={(element) => decrement(element, 'decrement')}
                            increment={(element) => increment(element, 'increment')}
                            removeItem={(element) => removeItem(element, 'removeItem')}
                        />
                    )
                }
            </div>
            <div>
                <h2>Total: {total}</h2>
            </div>
            <div className="flex-container">
                <button className="button--red" onClick={clear}>Vaciar Carrito</button>
                <button className="button--green">Confirmar</button>
            </div>
        </section>
    )
}

export default Cart;