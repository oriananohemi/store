import React from 'react';
import logo from '../assets/images/brand.png';

const Footer = () => {
    return(
        <footer className="footer">
            <img className="footer__brand" src={logo} alt="Logo Superfüds"/>
            <a className="footer__copy" href="https://github.com/oriananohemi" target="_blank">oriananohemi para SuperFüds</a>
        </footer>
    )
}

export default Footer;