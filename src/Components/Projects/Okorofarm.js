import React from 'react';
import './Farmer.css';


import Okoro1 from '../../Components/Assets/okoro1.png';
import Okoro2 from '../../Components/Assets/okoro2.png';
import AboutProject from '../../Components/Assets/about-project-img.png';
import Apps from '../Review/Apps';
import Projects from './Projects';
import ProgressBar from '../ProgressBar/ProgressBar';

function Uchefarm() {
    return (
        <div className="farmers-main-div">
            <div className="farmers-div-1">
                <div className="adaobi-profile-left">
                    <img className="adaobi-profile-img" src={Okoro1} alt="" />
                    
                    <div className="adaobi-profile-images">
                        <img className="adaobi-profile-img1" src={Okoro2} alt="" />
                        <img className="adaobi-profile-img2" src={Okoro2} alt="" />
                        <img className="adaobi-profile-img3" src={Okoro2} alt="" />
                    </div>
                </div>
                

                <div className="adaobi-profile-right">
                    <h1 className="adaobi-profile-h1">Okoro Fish Farm</h1>

                    <p className="adaobi-profile-pragraph-text">Mechanized fish farm with dryer for preservation after harvesting</p>

                    <h3 className="adaobi-profile-needed
                    ">Needed: 500000 Naira<p></p><ProgressBar value={38} max={100}/></h3>

                    <h5 className="adaobi-profile-raised">Raised: 300000 Naira</h5>

                    <a className="consultancy-acrotag" href="#consultancy"><button className="profile-fund-project-button">Fund this project</button><span> </span>Offer Consultancy</a>                    
                </div>
            </div>

            <div className="farmer-auxil-div">
                <div className="farmers-prim-div">
                    <h4 className="about-project-text">About Project</h4>

                    <h4 className="updates-text">Updates</h4>

                    <p className="about-projects-paragraph-text">When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support. When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support.</p>

                    <img className="about-project-img" src={AboutProject} alt="" />
                    
                    <div className="project-undered-lists">
                        <ul className="about-project-list">
                            <li>Irigation System</li>
                            <li>2 Tractor</li>
                            <li>3 Plaws</li>
                        </ul>

                        <ul className="about-project-list1">
                            <li>4 Dryers</li>
                            <li>2 Rice per Boiler</li>
                            <li>2 Sealing Machines</li>
                        </ul>
                    </div>
                </div>

                <div className="farmers-sec-div">
                    <h4 className="reviews-text">Reviews</h4>
                    <Apps />
                </div>
            </div>

            <div className="projects-div">
                <h1 className="similar-projects-text">Similar Projects</h1>

                <div className="farmer-projects-div">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Uchefarm;
