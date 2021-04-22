import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { getProducts } from '../services/getProducts';

import Cart from './Cart';
import Card from './Card';


const Main = () => {
    const [ products, setProducts ] =  useState([])


    useEffect(() => {
        getProducts().then(product => setProducts(product))
      }, [])

    return(
      <>
      <h1>Descubre</h1>
      <section className="section">
          <div className="section__title-container">
            <h2>Nuevo en SuperFüds</h2>
            <a href="">Ver más</a>
          </div>
        <Carousel
            plugins={[
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 4
                    }
                },
            ]}
            >
            {
                products.map((product) => 
                    <Card 
                        key={product.id}
                        {...product}
                    />)
            }
            </Carousel>
      </section>
      <Cart/>
      </>
    )
}

export default Main;