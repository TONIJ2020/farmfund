import React from 'react';

import Okoro1 from '../../Components/Assets/okoro1.png';
import Uche1 from '../../Components/Assets/uche1.png';
import Adaobi1 from '../../Components/Assets/adaobi1.png';
import Okoro2 from '../../Components/Assets/okoro2.png';
import Uche2 from '../../Components/Assets/uche2.png';
import Adaobi2 from '../../Components/Assets/adaobi2.png';

function Projects() {
    return (
        <div className="projects-div">
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
    )
}

export default Projects
