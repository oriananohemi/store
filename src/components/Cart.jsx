import React from 'react';

import SweetAlert from 'sweetalert2-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Item from './Item'

const Cart = ({products, decrement, increment}) => {
    return(
        <section>
            <div className="cart__goBack">
                <button className="carousel__button fa-lg"><FontAwesomeIcon icon="chevron-left" /></button>
                <h2>Volver a la tienda</h2>
            </div>
            <div className="cart--flex-container">
                <h1 className="title">Carrito de compras</h1>
                <p><span className="details--color"></span> items</p>
            </div>
            <div>
                {
                    products.map((item) => 
                        <Item 
                            key={item.id}
                            {...item}
                        />
                    )
                }
            </div>
            <div>
                <button className="button--red">Eliminar</button>
                <button className="button--green">Confirmar</button>
            </div>
        </section>
    )
}

export default Cart;