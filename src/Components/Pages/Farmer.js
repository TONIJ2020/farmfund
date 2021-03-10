import React from 'react';

import Okoro1 from '../../Components/Assets/okoro1.png';
import Uche1 from '../../Components/Assets/uche1.png';
import Adaobi1 from '../../Components/Assets/adaobi1.png';
import Okoro2 from '../../Components/Assets/okoro2.png';
import Uche2 from '../../Components/Assets/uche2.png';
import Adaobi2 from '../../Components/Assets/adaobi2.png';
import AdaobiProfile from '../../Components/Assets/adaobi-profile.png';
import AdaobiIMG from '../../Components/Assets/adaobi-img-1.png';
import AdaobiIMG1 from '../../Components/Assets/adaobi-img-2.png';
import AdaobiIMG2 from '../../Components/Assets/adaobi-img-3.png';
import AboutProject from '../../Components/Assets/about-project-img.png';
import Apps from '../Review/Apps';

function Farmer() {
    return (
        <div className="farmers-main-div">
            <div className="farmers-div-1">
                <img className="adaobi-profile-img" src={AdaobiProfile} alt="" />
                <img className="adaobi-profile-img1" src={AdaobiIMG} alt="" />
                <img className="adaobi-profile-img2" src={AdaobiIMG1} alt="" />
                <img className="adaobi-profile-img3" src={AdaobiIMG2} alt="" />

                <h1 className="adaobi-profile-h1">Adaobi Rice Farm</h1>

                <p className="adaobi-profile-pragraph-text">Mechanized Rice farm with boiler and dryer ready for processing</p>

                <h3 className="adaobi-profile-needed
                ">Needed: 800000 Naira</h3>

                <h5 className="adaobi-profile-raised">Raised: 300000 Naira</h5>

                <button className="profile-fund-project-button">Fund this project</button>

                <a className="consultancy-acrotag" href="#consultancy">Offer Consultancy</a>
            </div>

            <div className="farmers-prim-div">
                <h4 className="about-project-text">About Project</h4>

                <h4 className="updates-text">Updates</h4>

                <p className="about-projects-paragraph-text">When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support. When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support.</p>

                <img className="about-project-img" src={AboutProject} alt="" />

                <ul className="about-project-list">
                    <li>Irigation System</li>
                    <li>1 Tractor</li>
                    <li>2 Plaws</li>
                </ul>

                <ul className="about-project-list1">
                    <li>3 Dryers</li>
                    <li>1 Rice per Boiler</li>
                    <li>Sealing Machine</li>
                </ul>
            </div>

            <div className="farmers-sec-div">
                <h4 className="reviews-text">Reviews</h4>
                <Apps />
            </div>

            <div className="projects-div">
                <h1 className="similar-projects-text">Similar Projects</h1>
                <div className="farmer-div-1">
                    <img src={Okoro1} alt="" />
                    <h1>Okoro Fish Farm</h1>
                    <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                    <h3>Needed: 500000 Naira</h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>

                <div className="farmer-div-2" >
                    <img src={Uche1} alt="" />
                    <h1>Uche Cassava Farm</h1>
                    <p>Mechanized cassava farm with dryer and grinder for processing</p>
                    <h3>Needed: 200000 Naira</h3>
                    <h5>Raised: 180000 Naira</h5>
                </div>

                <div className="farmer-div-3" >
                    <img src={Adaobi1} alt="" />
                    <h1>Adaobi Rice Farm</h1>
                    <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                    <h3>Needed: 800000 Naira</h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>

                <div className="farmer-div-4">
                    <img src={Okoro2} alt="" />
                    <h1>Okoro Fish Farm</h1>
                    <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                    <h3>Needed: 500000 Naira</h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>

                <div className="farmer-div-5" >
                    <img src={Adaobi2} alt="" />
                    <h1>Adaobi Rice Farm</h1>
                    <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                    <h3>Needed: 800000 Naira</h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>

                <div className="farmer-div-6" >
                    <img src={Uche2} alt="" />
                    <h1>Uche Cassava Farm</h1>
                    <p>Mechanized cassava farm with dryer and grinder for processing</p>
                    <h3>Needed: 200000 Naira</h3>
                    <h5>Raised: 180000 Naira</h5>
                </div>
            </div>
        </div>
    )
};

export default Farmer;
