import React from 'react';

import Okoro1 from '../../Components/Assets/okoro1.png';
import Uche1 from '../../Components/Assets/uche1.png';
import Adaobi1 from '../../Components/Assets/adaobi1.png';
import Okoro2 from '../../Components/Assets/okoro2.png';
import Uche2 from '../../Components/Assets/uche2.png';
import Adaobi2 from '../../Components/Assets/adaobi2.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import '../Styles/Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="projects-div">
            <Link to="/okorofarm"><div className="farmer-div">
                <div>
                    <img src={Okoro1} alt="" />
                </div>
                <div>
                    <h1>Okoro Fish Farm</h1>
                    <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                    <h3>Needed: 500000 Naira<ProgressBar value={60} max={100}/></h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>
            </div></Link>

            <Link to="/uchefarm"><div className="farmer-div" >
                <div>
                    <img src={Uche1} alt="" />
                </div>
                <div>
                    <h1>Uche Cassava Farm</h1>
                    <p>Mechanized cassava farm with dryer and grinder for processing</p>
                    <h3>Needed: 200000 Naira<ProgressBar value={90} max={100}/></h3>
                    <h5>Raised: 180000 Naira</h5>
                </div>
            </div></Link>

            <Link to="/adaobifarm"><div className="farmer-div" >
                <div>
                    <img src={Adaobi1} alt="" />
                </div>
                <div>
                    <h1>Adaobi Rice Farm</h1>
                    <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                    <h3>Needed: 800000 Naira<ProgressBar value={38} max={100}/></h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>
            </div></Link>

            <Link to="/okorofarm"><div className="farmer-div">
                <div>
                    <img src={Okoro2} alt="" />
                </div>
                <div>
                    <h1>Okoro Fish Farm</h1>
                    <p>Mechanized fish farm with dryer for preservation after harvesting</p>
                    <h3>Needed: 500000 Naira<ProgressBar value={60} max={100}/></h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>
            </div></Link>

            <Link to="/adaobifarm"><div className="farmer-div" >
                <div>
                    <img src={Adaobi2} alt="" />
                </div>
                <div>
                    <h1>Adaobi Rice Farm</h1>
                    <p>Mechanized Rice farm with boiler and dryer ready for processing</p>
                    <h3>Needed: 800000 Naira<ProgressBar value={38} max={100}/></h3>
                    <h5>Raised: 300000 Naira</h5>
                </div>
            </div></Link>

            <Link to="/uchefarm"><div className="farmer-div" >
                <div>
                    <img src={Uche2} alt="" />
                </div>
                <div>
                    <h1>Uche Cassava Farm</h1>
                    <p>Mechanized cassava farm with dryer and grinder for processing</p>
                    <h3>Needed: 200000 Naira<ProgressBar value={90} max={100}/></h3>
                    <h5>Raised: 180000 Naira</h5>
                </div>
            </div></Link>
        </div>
    )
}

export default Projects
