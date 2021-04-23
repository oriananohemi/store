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
    const defineNumberSlides = (screen) => {
        if (screen < 600) {
            return 1
        } else if (900 > screen && screen > 600) {
            return 2
        } else if (1200 > screen && screen > 900) {
            return 3
        } else if (screen > 1200) {
            return 5
        }
    }

    const [ products, setProducts ] =  useState([])
    const [ items, setItems ] = useState([])
    const [ numberSlides, setNumberSlides ] = useState(defineNumberSlides(window.innerWidth))

    useEffect(() => {
        getProducts().then(product => setProducts(product))
        
        
        const handleResize = (e) => {
            let timeout
            clearTimeout(timeout)
            
            timeout = setTimeout(() => {
                const screen = e.target.outerWidth
                setNumberSlides(defineNumberSlides(screen))
            }, 100)
        }
        window.addEventListener("resize", handleResize)
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
            plugins={[
                'infinite',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: numberSlides
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
            ]}
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