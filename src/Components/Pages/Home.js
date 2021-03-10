import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../constants/apiConstants';
import axios from 'axios';
import Home1 from '../../Components/Assets/home1.png';
import Home2 from '../../Components/Assets/home2.png';
import Home3 from '../../Components/Assets/home3.png';
import Home4 from '../../Components/Assets/home4.png';
import Rectangle from '../../Components/Assets/rectangle1.png';
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
import Footer from '../Footer/Footer';
import Projects from './Projects';

function Home(props) {
    useEffect(() => {
        axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })
        .catch(function (error) {
          redirectToLogin()
        });
    })

    function redirectToLogin() {
    props.history.push('/login');
    }

    return(
        <div className="home-div">
            <h1 className="find-the-best-agro-investments-in-nigeria-text">Find the best agro investments in Nigeria.</h1>

            <p className="farm-fund-description-paragraph">Farm Fund is where farmers, investors and agro <br /> conultants meet to collaborate and create amazing products to fight hunger in Nigeria</p>

            <button className="get-started-button-1">Get Started</button>
            <a href="/farms" className="find-farms-acrotag">or Find Farms</a>

            <img src={Home1} alt="" className="home-img-1" />

            <img src={Home2} alt="" className="home-img-2" />

            <img src={Home3} alt="" className="home-img-3" />

            <img src={Home4} alt="" className="home-img-4" />

            <h1 className="projects-title-text">Projects</h1>

            <div className="home-projects-div">
                <Projects />
            </div>

            <div className="testimonials-div">
                <h2 className="testimonials-text">Testimonials</h2>

                <img src={Rectangle} alt="" className="home-img-rectangle-1" />

                <img src={Ellipse1} alt="" className="home-ellipse-1" />

                <img src={Ellipse2} alt="" className="home-ellipse-2" />

                <img src={Ellipse3} alt="" className="home-ellipse-3" />

                <img src={Ellipse4} alt="" className="home-ellipse-4" />

                <img src={Andrew} alt="" className="home-andrew-img" />

                <img src={Ogbonna} alt="" className="home-ogbonna-img" />

                <h1 className="home-andrew-title-text">Mr. Andrew Ogadinma</h1>
                <p className="home-andrew-paragraph-text">When i first hard of farm fund i was sceptical cause i had tried out similar services in the past and my experience with them was not pleasant at all. either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. with farm fund i retained full control of my farm and got full time consultancy support.</p>

                <h1 className="home-ogbonna-title-text">Mr. Ogbona Chukwuemeka</h1>

                <p className="home-ogbonna-paragraph-text">I had been looking for a safe and reliable way to invest in agriculture around the country when i came across farm fund so i decided to give it a try. Their payment system is so fast and smooth i wasn’t expecting it to be that simple. Invested in one of the farms and was amazed at their farm tracking system. They let you monitor your investment at every stage from purchasing of seedlings to harvesting. The experience was just amazing.</p>
            </div>

            <div className="our-partners-div">
                <h2 className="our-partners-text">Our Partners</h2>

                <img src={BlueHost} alt="" className="home-bluehost-img" />

                <img src={Paystack} alt="" className="home-paystack-img" />

                <img src={Google} alt="" className="home-google-img" />

                <img src={GoDaddy} alt="" className="home-godaddy-img" />

                <img src={Dots} alt="" className="home-dots-img" />

                <img src={Dots1} alt="" className="home-dots1-img" />
            </div>
            <Footer />
        </div>
    )
};

export default withRouter(Home);

// function Home() {

//     return (
//         <div className="home-div">
//             <h1 className="find-the-best-agro-investments-in-nigeria-text">Find the best agro investments in Nigeria.</h1>

//             <p className="farm-fund-description-paragraph">Farm Fund is where farmers, investors and agro <br /> conultants meet to collaborate and create amazing products to fight hunger in Nigeria</p>

//             <button className="get-started-button-1">Get Started</button>
//             <a href="/farms" className="find-farms-acrotag">or Find Farms</a>

//             <img src={Home1} alt="" className="home-img-1" />

//             <img src={Home2} alt="" className="home-img-2" />

//             <img src={Home3} alt="" className="home-img-3" />

//             <img src={Home4} alt="" className="home-img-4" />

//             <h1 className="projects-title-text">Projects</h1>

//             <div className="home-projects-div">
//                 <Projects />
//             </div>

//             <div className="testimonials-div">
//                 <h2 className="testimonials-text">Testimonials</h2>

//                 <img src={Rectangle} alt="" className="home-img-rectangle-1" />

//                 <img src={Ellipse1} alt="" className="home-ellipse-1" />

//                 <img src={Ellipse2} alt="" className="home-ellipse-2" />

//                 <img src={Ellipse3} alt="" className="home-ellipse-3" />

//                 <img src={Ellipse4} alt="" className="home-ellipse-4" />

//                 <img src={Andrew} alt="" className="home-andrew-img" />

//                 <img src={Ogbonna} alt="" className="home-ogbonna-img" />

//                 <h1 className="home-andrew-title-text">Mr. Andrew Ogadinma</h1>
//                 <p className="home-andrew-paragraph-text">When i first hard of farm fund i was sceptical cause i had tried out similar services in the past and my experience with them was not pleasant at all. either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. with farm fund i retained full control of my farm and got full time consultancy support.</p>

//                 <h1 className="home-ogbonna-title-text">Mr. Ogbona Chukwuemeka</h1>

//                 <p className="home-ogbonna-paragraph-text">I had been looking for a safe and reliable way to invest in agriculture around the country when i came across farm fund so i decided to give it a try. Their payment system is so fast and smooth i wasn’t expecting it to be that simple. Invested in one of the farms and was amazed at their farm tracking system. They let you monitor your investment at every stage from purchasing of seedlings to harvesting. The experience was just amazing.</p>
//             </div>

//             <div className="our-partners-div">
//                 <h2 className="our-partners-text">Our Partners</h2>

//                 <img src={BlueHost} alt="" className="home-bluehost-img" />

//                 <img src={Paystack} alt="" className="home-paystack-img" />

//                 <img src={Google} alt="" className="home-google-img" />

//                 <img src={GoDaddy} alt="" className="home-godaddy-img" />

//                 <img src={Dots} alt="" className="home-dots-img" />

//                 <img src={Dots1} alt="" className="home-dots1-img" />
//             </div>
//             <Footer />
//         </div>
//     )
// };

// export default Home;