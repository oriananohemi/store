import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/brand.png';
import profile from '../assets/images/profile.png';


const Header = () => {
  const [navVisible, setNavVisible] = useState(true)

  const toggleNav = () => {
    setNavVisible(!navVisible)
  }
    return(
      <header className="header">
        <img className="header__brand"  src={logo} alt="Logo Superfüds"/>
        {
          navVisible && (
            <div className="header-subcontainer">
              <div className="input-container">
                <input className="input" type="text" icon="check-square" placeholder="Busca marcas y productos..."/>
                <FontAwesomeIcon className="input-icon" icon="search" />
              </div>
              
              <FontAwesomeIcon className="header__shoppingCart fa-lg" icon="shopping-cart" />
    
              <div className="flex-container header__options">
                <div>
                  <h2 className="header__profile">Saiby Alimentos</h2>
                  <div className="flex-container">
                    <h3>Mi perfil</h3>
                    <FontAwesomeIcon icon="chevron-down" />
                  </div>
                  {/* <nav className="header__profile__options">
                    <ul>
                      <li role="list">
                        <a>Mis compras</a>
                      </li>
                      <li role="list">
                        <a>Configuración</a>
                      </li>
                      <li role="list">
                        <a>Cerrar Sesión</a>
                      </li>
                    </ul>
                  </nav> */}
                </div>
                <img className="header__profile-image" src={profile} alt=""/>
              </div>
            </div>
          )
        }
        <FontAwesomeIcon onClick={toggleNav} className="header__responsive-icon fa-lg" icon="bars" />
      </header>
    )
}

export default Header;