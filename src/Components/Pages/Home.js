import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Home1 from '../../Components/Assets/home1.png';
import Home2 from '../../Components/Assets/home2.png';
import Home3 from '../../Components/Assets/home3.png';
import Home4 from '../../Components/Assets/home4.png';
import Ellipse1 from '../../Components/Assets/Ellipse1.png';
import Ellipse2 from '../../Components/Assets/Ellipse2.png';
import Ellipse3 from '../../Components/Assets/Ellipse3.png';
import Ellipse4 from '../../Components/Assets/Ellipse4.png';
import Andrew from '../../Components/Assets/andrew.png';
import Ogbonna from '../../Components/Assets/ogbonna.png';
import BlueHost from '../../Components/Assets/Bluehost.png';
import GoDaddy from '../../Components/Assets/GoDaddy.png';
import Paystack from '../../Components/Assets/paystack.png';
import Google from '../../Components/Assets/Google.png';
import Dots from '../../Components/Assets/spots1.png';
import Dots1 from '../../Components/Assets/spots2.png';
import Projects from '../Projects/Projects';

export default class Home extends Component {

    render() {
        if(this.props.user){
            return (
                <h2>Welcome! {this.props.user.firstName} {this.props.user.lastName} </h2>
            )
        }

        return(
            <div className="container">
                <div className="hero-div">
                    <h1 className="find-the-best-text">Find the best agro investments in Nigeria.</h1>

                    <p className="farm-fund-description-paragraph">Farm Fund is where farmers, investors and agro <br /> conultants meet to collaborate and create amazing products to fight hunger in Nigeria</p>

                    <div className="home-button-div">
                        <Link to="/register"><button className="get-started-button-1">Get Started</button></Link>
                        <Link to="/projects"><a href="/farmer" className="find-farms-acrotag">or Find Farms</a></Link>
                    </div>

                    <div className="home-images">
                        <img src={Home1} alt="" className="home-img-1" />

                        <img src={Home2} alt="" className="home-img-2" />

                        <img src={Home3} alt="" className="home-img-3" />

                        <img src={Home4} alt="" className="home-img-4" />
                    </div>
                </div>

                <h1 className="projects-title-text">Projects</h1>

                <div className="home-projects-div">
                    <Projects />
                </div>

                <div className="testimonials-div">
                    <div className="testimonial-upper">
                        <div className="testimonial-curl1">
                        </div>
                    </div>
                    <h2 className="testimonials-text">Testimonials</h2>
                    <div className="testimonial-div primary-test">
                        <div className="secondary-test">
                            <img src={Ellipse1} alt="" className="home-ellipse-1"/>
                            <img src={Ellipse2} alt="" className="home-ellipse-2"/>
                            <img src={Andrew} alt="" className="home-andrew-img"/>
                            <img src={Ellipse4} alt="" className="home-ellipse-4"/>
                            <img src={Ogbonna} alt="" className="home-ogbonna-img"/>
                            <img src={Ellipse3} alt="" className="home-ellipse-3"/>

                            <h1 className="home-andrew-title-text">Mr. Andrew Ogadinma</h1>
                            <p className="home-andrew-paragraph-text">When i first hard of farm fund i was sceptical cause i had tried out similar services in the past and my experience with them was not pleasant at all. either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. with farm fund i retained full control of my farm and got full time consultancy support.</p>

                            <h1 className="home-ogbonna-title-text">Mr. Ogbona Chukwuemeka</h1>

                            <p className="home-ogbonna-paragraph-text">I had been looking for a safe and reliable way to invest in agriculture around the country when i came across farm fund so i decided to give it a try. Their payment system is so fast and smooth i wasn’t expecting it to be that simple. Invested in one of the farms and was amazed at their farm tracking system. They let you monitor your investment at every stage from purchasing of seedlings to harvesting. The experience was just amazing.</p>
                        </div>
                    </div>                    
                </div>

                <div className="testimonial-lower">
                    <div className="testimonial-curl">
                    
                    </div>
                </div>

                <div className="our-partners-div">
                    <h2 className="our-partners-text">Our Partners</h2>

                    <img src={BlueHost} alt="" className="home-bluehost-img" />

                    <img src={Google} alt="" className="home-google-img" />

                    <img src={Dots1} alt="" className="home-dots1-img" />

                    <img src={Dots} alt="" className="home-dots-img" />

                    <img src={Paystack} alt="" className="home-paystack-img" />

                    <img src={GoDaddy} alt="" className="home-godaddy-img" />
                </div>
            </div>
        )
    }
};