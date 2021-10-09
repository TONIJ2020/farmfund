import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../Styles/dashboard.css';
import Home from '../../Components/Assets/home_24px.png';
import Transactions from "../../Components/Assets/timeline_24px_outlined.png";
import Projects from "../../Components/Assets/local_florist_24px.png";
import Messages from "../../Components/Assets/sms_24px_outlined.png";
import profileImg from "../../Components/Assets/okoro1.png";
import Adaobi from "../../Components/Assets/adaobi1.png";
import Notifications from "../../Components/Assets/notifications_24px_outlined.png";

export default class FarmerDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...JSON.parse(localStorage.getItem("userData"))
        }
    }

    render() {
        if(localStorage.getItem('userData')){
            return (
                <div className='dashboard-div'>
                    <div className='dashboard-header'>
                        <aside className="dashboard-side-bar">
                            <ul>
                                <li><a href = "/farmerdashboard" className = "side-bar-home"><img src={Home} alt=""/></a></li>
                                <li><a href = "/dashboardTransactions"
                                className = "side-bar-transactions"><img src={Transactions} alt=""/></a></li> 
                                <li><a href = "/dashboardProjects"
                                className = "side-bar-projects"><img src={Projects} alt=""/></a></li>
                                <li><a href = "/dashboardMessages"
                                className = "side-bar-messages"><img src={Messages} alt=""/></a></li>
                                <li><a href = "/dashboardNotifications"
                                className = "side-bar-notifications" ><img src={Notifications} alt=""/></a></li>
                            </ul>
                        </aside>

                        <div className="welcome-message-div">
                            <h1 className="welcome-message">Dashboard</h1>
                            <h2>Home</h2>
                        </div>
                    </div>

                    <div className="farmers-board-column">
                        <h2>Bio Data</h2>

                        <div className="profile-image">
                            <img src={profileImg} alt="" />
                        </div>
                        <div className="bio-data-entry-div">
                            <div className="farmer-bio-data-div">
                                <div className="farmer-data-entries-div" >
                                    <h6>First Name</h6>
                                    <h3>Lambert</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Email</h6>
                                    <h3>nnadi406@gmail.com</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>State of Origin</h6>
                                    <h3>Enugu</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Date of Birth</h6>
                                    <h3>19-07-1998</h3>
                                </div>
                            </div>

                            <div className="farmer-bio-data-div">
                                <div className="farmer-data-entries-div" >
                                    <h6>Last Name</h6>
                                    <h3>Nnadi</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Residential Address</h6>
                                    <h3>No 19 Abubakar Street, Kubwa, Abuja</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>LGA of Origin</h6>
                                    <h3>Igbo-Eze-South</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Sex</h6>
                                    <h3>Male</h3>
                                </div>
                            </div>
                            
                            <div className="farmer-bio-data-div">
                                <div className="farmer-data-entries-div" >
                                    <h6>Middle Name</h6>
                                    <h3>Otiti</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Permanent Home Address</h6>
                                    <h3>No 19 Abubakar Street, Kubwa, Abuja</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>State of Residence</h6>
                                    <h3>Abuja</h3>
                                </div>
                            </div>

                            <div className="farmer-bio-data-div">
                            <div className="farmer-data-entries-div" >
                                <h6>Phone No</h6>
                                <h3>07068497582</h3>
                            </div>
                            <div className="farmer-data-entries-div" >
                                <h6>Marital Status</h6>
                                <h3>Single</h3>
                            </div>
                            <div className="farmer-data-entries-div" >
                                <h6>LGA of Residence</h6>
                                <h3>Bwari Area Council</h3>
                            </div>
                        </div>
                        </div>

                        <div className="edit-group">
                            <input type='edit' 
                            value='Edit' 
                            className='edit' 
                            />
                        </div>
                    </div>

                    <div className="farmers-board-column">
                        <h2>Farm Entries</h2>

                        <div className="farm-images">
                            <div className="farm-image">
                                <img src={Adaobi} alt="" />
                            </div>
                            <div className="farm-image">
                                <img src={Adaobi} alt="" />
                            </div>
                            <div className="farm-image">
                                <img src={Adaobi} alt="" />
                            </div>
                        </div>

                        <div className="bio-data-entry-div">
                            <div className="farmer-bio-data-div">
                                <div className="farmer-data-entries-div" >
                                    <h6>Title of Farm</h6>
                                    <h3>Lamba rice farm</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Fund Needed</h6>
                                    <h3>4000000 Naira</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Brief Description of Farm</h6>
                                    <h3>Enugu</h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Implemets and Items Needed</h6>
                                    <h3><ul>
                                        <li>Weeder</li>
                                        <li>Tractor</li>
                                        <li>Pesticides</li>
                                    </ul></h3>
                                </div>
                                <div className="farmer-data-entries-div" >
                                    <h6>Detailed Description of what you need the fund for and how you plan to utilise it</h6>
                                    <h3>Bla skn sdjkn dksj skdj ksdnk dkjsd skjd sdkjsdu sdkj ksjdk suj ksjndk ksdjn kdjcdm skdu skjdb skudhbf kdfu r ekjf dfkj dfkjn fkd kj dfk fdk f fkf fld fjf kdjfkdjk dkjdf dkjfjk dfkjnkfkdfn dkjf dfkf kjdk fkjd fkdjfd fjkdkjfk dkjnfjkdbf fkdjf dkfjd dfkdfnkf kdj dfkjfkd fbdf kdrheuiie ieurie eiuekrljhsb u tuibt eriub eiurniuelebs uir jeruibej rk erjhikjr eirhrk rnrr ke r  kejnke rekb ibh gkbuhen ur rjr rur eirn reke rj nr eib irjekn</h3>
                                </div>
                            </div>
                        </div>

                        <div className="edit-group">
                            <input type='edit' 
                            value='Edit' 
                            className='edit' 
                            />
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
            Redirect("/farmerprofile")
            );
        }
    }
}
