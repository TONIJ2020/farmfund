import React from 'react';

import styled from 'styled-components';
import search from './search.png';

const Ul = styled.div `
    z-index: 2;

    @media only screen and (max-width:768px) {
        flex-flow: column nowrap;
        background-color: #eee;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0px;
        right: 0px;
        height: 260px;
        width: 170px;
        padding-top: 0px;
        transition: transform 0.3s ease-in-out;

        .navigation-bar-home, 
        .navigation-bar-dashboard,
        .navigation-bar-project, 
        .navigation-bar-about, 
        .navigation-bar-contact, 
        .navigation-bar-log-in, {
            color: #08692F;
            margin-right: 20px;
            z-index: 2;
        }
    }
`;

class NavMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...JSON.parse(localStorage.getItem("userData"))
        }
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    };

    render() {

        let buttons;

        if (localStorage.getItem('userData')) {
            buttons = ( <Ul open = { this.props.open } className = "navigation-bar-ul">
                <li><a href = "/" className = "navigation-bar-home">Home</a></li>
                <li><a href = "/dashboard"
                className = "navigation-bar-dashboard">Dashboard</a></li> 
                <li><a href = "/"
                className = "navigation-bar-about">About us</a></li>
                <li><a href = "/footer"
                className = "navigation-bar-contact" >Contact us</a></li>
                <li><a href = "/projects"
                className = "navigation-bar-project" >Projects</a></li>
                <li><a href = "/login"
                className = "navigation-bar-log-in"
                onClick = { this.handleLogout }>Logout</a></li>
                <li><a href = "userprofile"
                className = "navigation-bar-log-in"> {this.state.firstName} {this.state.lastName} <span className="profile-img-span"><img src={this.state.profileImg} alt=''/></span></a></li>
                <li><a href="/search"><img src = { search }
                className = "navigation-search-bar"
                alt = "search" /></a></li></
                Ul>
            )
        } else {
            buttons = ( <Ul open = { this.props.open } className = "navigation-bar-ul">
                <li> <a href = "/"
                className = "navigation-bar-home" >Home</a></li>
                <li><a href = "/"
                className = "navigation-bar-about" >About us</a></li>
                <li><a href = "/footer" className = "navigation-bar-contact">Contact us</a></li>
                <li><a href = "/projects" className = "navigation-bar-project">Projects</a></li>
                <li><a href = "/login" className = "navigation-bar-log-in">Login</a></li>
                <li><a href = "/register"><button className = "get-started-button" >Get Started</button></a></li> 
                <li><img src = { search } className = "navigation-search-bar"
                alt = "search"/></li> 
                </Ul>
            )
        }

        return ( 
            <nav className = "navigation-bar"> 
                { buttons } 
            </nav>
        );
    };
}

export default NavMenu;