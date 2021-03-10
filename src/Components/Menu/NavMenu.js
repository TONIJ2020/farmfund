import React from 'react';

import styled from 'styled-components';
import search from './search.png';

const Ul = styled.div`
    z-index: 2;
    @media only screen and (max-width:374px) {
        flex-flow: column nowrap;
        background-color: #eee;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0px;
        height: 330px;
        width: 170px;
        padding-top: 0px;
        transition: transform 0.3s ease-in-out;

        .navigation-bar-home, 
        .navigation-bar-projects, 
        .navigation-bar-about, 
        .navigation-bar-contact, 
        .navigation-bar-faq, {
            color: #08692F;
            margin-right: 20px;
        }
    }

    @media only screen and (min-width:375px) and (max-width:768px) {
        flex-flow: column nowrap;
        background-color: #eee;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0px;
        height: 330px;
        width: 170px;
        padding-top: 0px;
        transition: transform 0.3s ease-in-out;

        .navigation-bar-home, 
        .navigation-bar-projects, 
        .navigation-bar-about, 
        .navigation-bar-contact, 
        .navigation-bar-faq, {
            color: #08692F;
            margin-right: 20px;
        }
    }
`;

function NavMenu({open}) {
    return (
        <nav className="navigation-bar">
            <Ul open={open} className="navigation-bar-ul">
                <li><a href="/" className="navigation-bar-home">Home</a></li>
                <li><a href="/about" className="navigation-bar-about">About us</a></li>
                <li><a href="/contact" className="navigation-bar-contact">Contact us</a></li>
                <li><a href="/Login" className="navigation-bar-log-in">Log In</a></li>
                <li><a href="/Register"><button className="get-started-button">Get Started</button></a></li>
                <li><img src={search} className="navigation-search-bar" alt="search" /></li>
            </Ul>
        </nav>
    );
}

export default NavMenu;