import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/brand.png';
import profile from '../assets/images/profile.png';


const Header = () => {
    return(
      <header className="header">
        <img className="header__brand"  src={logo} alt="Logo Superfüds"/>
        <div className="input-container">
          <input className="input" type="text" name="" id="" icon="check-square"/>
          <FontAwesomeIcon className="input-icon" icon="search" />
        </div>
        
        <FontAwesomeIcon className="header__shoppingCart fa-lg" icon="shopping-cart" />

        <div className="flex-container">
          <div>
            <h2 className="header__profile">Saiby Alimentos</h2>
            <div className="flex-container">
              <h3>Mi perfil</h3>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </div>
          <img className="header__profile-image" src={profile} alt=""/>
        </div>
      </header>
    )
}

export default Header;