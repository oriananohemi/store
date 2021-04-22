import React from 'react';

const Card = ({title, image, sellos, price_real, net_content, units_sf}) => {
    return(
        <article className="card responsive-image">
            <div className="card__upper-session">
                <img className="card__image" src={image} alt=""/>
                <div>
                    {
                        sellos.map((seal) => 
                            <img className="card__seal-image" key={seal.name} src={seal.image} />
                        )
                    }
                </div>
            </div>
            <div>
                <div className="card__details-container">
                    <span>SuperFüds</span>
                    <span>{net_content}</span>
                </div>
                <h1 className="card__title">{title}</h1>
                <p>${price_real} <span>x {units_sf}unidad</span></p>
            </div>
            <p className="card__option">Agregar al carrito</p>
        </article>
    )
}

export default Card;