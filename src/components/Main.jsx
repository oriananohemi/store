import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { getProducts } from '../services/getProducts';
import { editCart } from '../services/calculator';


import Cart from './Cart';
import Card from './Card';
import Loading from './Loading';

const Main = () => {
    const [ products, setProducts ] =  useState([])
    const [ items, setItems ] = useState([])

    const plugins = [
        {
            resolve: slidesToShowPlugin,
            options: {
                numberOfSlides: 4
            }
        },
        {
            resolve: arrowsPlugin,
            options: {
                arrowLeft: <button className="carousel__button fa-lg"><FontAwesomeIcon icon="chevron-left" /></button>,
                arrowRight: <button className="carousel__button fa-lg"><FontAwesomeIcon icon="chevron-right" /></button>,
                addArrowClickHandler: true,
            }
        }
    ]

    useEffect(() => {
        getProducts().then(product => setProducts(product))
    }, [])
    
    const cartManager = (product, action) => {
        setItems(editCart(product, action))
    }

    return(
      <>
      <h1 className="title">Descubre</h1>
      <section className="section">
          <div className="section__title-container">
            <h2>Nuevo en SuperFüds</h2>
            <a href="">Ver más</a>
          </div>
          {
            products.length > 0 ? 
            <Carousel
            plugins={['infinite', ...plugins]}
            breakpoints={{
                640: {
                  plugins: [{...plugins[0], options: {...plugins[0].options, numberOfSlides: 1}}, plugins[1]]
                },
                900: {
                  plugins: [{...plugins[0], options: {...plugins[0].options, numberOfSlides: 2}}, plugins[1]]
                },
                1200: {
                    plugins: [{...plugins[0], options: {...plugins[0].options, numberOfSlides: 3}}, plugins[1]]
                  }
              }}
            >
            {
                products.map((product) => 
                    <Card 
                        key={product.id}
                        {...product}
                        add={(element) => cartManager(element, "increment")}
                    />
                )
            }
            </Carousel>
            :
            <Loading/>
          }
      </section>
      <Cart
        products={items}
        decrement={(element) => editCart(element, "decrement")}
        increment={(element) => editCart(element, "increment")}
      />
      </>
    )
}

export default Main;