import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/BTU.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">BTU - MOVIES</Link>
                    </div>
                </div>
                <div className="footer__content__copywrite">
                    <p>Created by Demski</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;