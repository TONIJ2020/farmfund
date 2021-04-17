import React from 'react';
import './Footer.css';

import Smooth from '../Assets/smooth.png';
import Support from '../Assets/24hr-support.png';
import Payment from '../Assets/payment-gateway.png';
import FarmFund from '../Assets/farmFund.png';
import Twitter from '../Assets/twitter.png';
import Facebook from '../Assets/facebook.png';
import Feed from '../Assets/feed.png';
import Instagram from '../Assets/instagram.png';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-main-div">
            <div className="footer-prim-div">
                <p className="footer-prim-paragraph-text">Invest or get Investment and full time support to grow and sell your crops</p>

                <Link to="/register"><button className="footer-prim-button">GET STARTED</button></Link>
            </div>

            <div className="footer-sec-div">
                <img src={Smooth} alt="" className="footer-smooth-img" />

                <a className="footer-support-acrotag" href="#support"><img src={Support} alt="" className="footer-support-img" />24hr Support</a>

                <img src={Payment} alt="" className="footer-payment-img" />

                <a className="footer-farmfund-acrotag" href="#farmfund"><img src={FarmFund} alt="" className="footer-farmfund-img" />FarmFund</a>
            </div>

            <hr className="footer-line"/>
            
            <div className="footer-ter-div">
                <div className="who-we-are-div">
                    <h3 className="who-we-are-text">Who We Are</h3>

                    <ul className="who-we-are-list">
                        <li>About</li>
                        <li>Team</li>
                        <li>Work With Us</li>
                    </ul>
                </div>

                <div className="quick-link-div">
                    <h3 className="quick-link-text">Quick Links</h3>

                    <ul className="quick-link-list">
                    <Link to="/login"><li className="list-1">Login</li></Link>
                        <Link to="/register"><li className="list-2">Register</li></Link>
                        <Link to="/farmer"><li className="list-3">Projects</li></Link>
                    </ul>
                </div>

                <div className="contact-div">
                    <h3 className="contact-us-text">Contact Us</h3>

                    <ul className="contact-us-list">
                        <li>+234 706 849 7582</li>
                        <li>+234 803 886 8586</li>
                        <li>contact@farmfund.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-div">
                <div className="footer-social">
                    <img src={Twitter} alt="" className="footer-twitter-img" />

                    <img src={Facebook} alt="" className="footer-facebook-img" />

                    <img src={Feed} alt="" className="footer-feed-img" />

                    <img src={Instagram} alt="" className="footer-instagram-img" />
                </div>

                <p className="copyright-text">COPYRIGHT @ FARM FUND 2021</p>
            </div>
        </div>
    )
};

export default Footer;
