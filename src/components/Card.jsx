import React from 'react';

import ReactTooltip from 'react-tooltip';

const Card = ({id, title, image, sellos, price_real, net_content, units_sf, supplier, add}) => {
    return(
        <article className="card responsive-image">
            <div className="card__upper-session">
                <img className="card__image" src={image} alt=""/>
                <div>
                    {
                        sellos.map((seal) => 
                            <div key={seal.name}>
                                <img data-for='soclose' className="card__seal-image" src={seal.image} data-tip={seal.name} alt={seal.name} />
                                <ReactTooltip 
                                    id='soclose' 
                                    place="right" 
                                    type="dark" 
                                    effect="solid"
                                    backgroundColor="#007580" 
                                    getContent={(dataTip) => <div><span className="tooltip__detail">Producto</span><br/> {dataTip}</div> 
                                }/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="card__bottom-section">
                <div className="card__details-container">
                    <span className="details__brand">{supplier}</span>
                    <span className="details--burble">{net_content}</span>
                </div>
                <h1 className="card__title">{title}</h1>
                <p><b className="details--green">$</b><b>{price_real} </b><span className="details--small">x {units_sf}unids</span></p>
            </div>
            <button className="card__option" onClick={() => add({id, title, image, sellos, price_real, net_content, supplier, units_sf})}>Agregar al carrito</button>
        </article>
    )
}

export default Card;