import React, { useState, useEffect } from 'react';

import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/brand.png';
import profile from '../assets/images/profile.png';


const Header = () => {
  const [navVisible, setNavVisible] = useState(true)
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisible(!navVisible)
  }
    return(
      <header className="header">
        <img className="header__brand" src={logo} alt="Logo Superfüds"/>
        <CSSTransition
        in={!smallScreen || navVisible}
        timeout={350}
        classNames="headerAnimation"
        unmountOnExit
      >
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
            </div>
            <img className="header__profile-image" src={profile} alt=""/>
          </div>
        </div>
          </CSSTransition>
        <FontAwesomeIcon onClick={toggleNav} className="header__responsive-icon fa-lg" icon="bars" />
      </header>
    )
}

export default Header;