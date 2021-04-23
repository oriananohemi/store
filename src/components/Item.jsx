import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({title, image, sellos, price_real, net_content, units_sf, supplier, quantity}) => {
    return(
        <article className="item">
            <img className="item__image" src={image} alt=""/>
            <div>
                <h1 className="item__title">{title}</h1>
                <h2 className="item__small">x{units_sf} unids - {net_content} c/u</h2>
                <h3 className="item__color item__small">{supplier}</h3>
            </div>
            <div>
                <button className="item__button-burble fa-lg"><FontAwesomeIcon icon="minus" /></button>
                <span>{quantity}</span>
                <button className="item__button-burble fa-lg"><FontAwesomeIcon icon="plus" /></button>
            </div>
            <p><b className="item__color">$ </b>{price_real * quantity}</p>
            <button className="item__button fa-lg"><FontAwesomeIcon icon="trash-alt" /></button>
        </article>
    )
}

export default Item;