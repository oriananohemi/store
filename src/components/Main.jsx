import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { getProducts } from '../services/getProducts';
import { editCart } from '../services/calculator';


import Cart from './Cart';
import Card from './Card';

const Main = () => {
    const [ products, setProducts ] =  useState([])
    const [ items, setItems ] = useState([])
    const [ cartOpen, toggleCart ] = useState(false)

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
      if (action === 'clear') {
        setItems([])
      } else {
        setItems(editCart(product, action))
      }
    }

    return(
      <>
      <h1 className="title">¡Descubre lo que tenemos para ti!</h1>
      <div className="flex-container">
        <section className="section">
            <div className="section__title-container">
              <h2>Nuevo en SuperFüds</h2>
              <a>Ver más</a>
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
                  },
                  1440: {
                    plugins: [{...plugins[0], options: {...plugins[0].options, numberOfSlides: 4}}, plugins[1]]
                  },
                  1900: {
                    plugins: [{...plugins[0], options: {...plugins[0].options, numberOfSlides: 5}}, plugins[1]]
                  },
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
              <ReactLoading type="Spin" color="#24c36c" height={667} width={375} />
            }
        </section>
        <Cart
          products={items}
          decrement={(element) => cartManager(element, "decrement")}
          increment={(element) => cartManager(element, "increment")}
          removeItem={(element) => cartManager(element, "removeItem")}
          clear={(element) => cartManager(element, "clear")}
        />
      </div>
      </>
    )
}

export default Main;