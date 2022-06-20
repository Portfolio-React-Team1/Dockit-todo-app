import React from "react";
import './profilesettings.css'
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutus from './aboutus.png'
import changeimage from './changeimage.png'
import changename from './changename.png'
import changepassword from './changepassword.png'
import faq from './faq.png'
import help from './help.png'
import logout from './logout.png'
import nav from './nav.png'
import profile from './profile.png'
import settings from './settings.png'
import supportus from './supportus.png'


const ProfileSettings = () => {

    return (
        <div className="page">
            <Container>


                <div class="grid-container">
                    <div class="item1 grid-container-box1">
                        <header className='text-p'>Profile</header>
                        <p> <img className='profile' src={profile} alt=' Profile Image'></img></p>
                        <br></br>

                        <header className='text-p'>Settings</header>
                        <div class="row-container">
                            <div class="row-container-box1, text-124" > 1
                            </div>
                            <div class="row-container-box2">
                                <p className="text-123">App Settings</p>
                            </div>
                            <div class="row-container-box3, text-125">
                                6
                            </div>


                            <header className='text-p'>Testing</header>


                            <Row>
                                <div class="row-container-box1, text-124" > 1
                                </div>
                                <div class="row-container-box2">
                                    <p className="text-123">App Settings</p>
                                </div>
                                <div class="row-container-box3, text-125">
                                    6
                                </div>


                            </Row>











                        </div>



                    </div>
                    <div class="item2 grid-container-box2">
                        <header className='text'>Change account name</header>
                        <hr></hr>

                    </div>
                    <div class="item6 grid-container-box3">
                        <header className='text'>Change account Password</header>
                        <hr></hr>

                    </div>
                </div>

            </Container>
        </div>

    )
}

export default ProfileSettings