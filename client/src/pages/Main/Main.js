import React from "react";
import NavBar from "../../components/NavBar/navBar";
import "../../css/style.css";
import {Modal, Button, Row, Col, Input, Tab, Tabs} from "react-materialize";
import {LoginForm, RegisterForm} from "../../components/LoginModal";


const Main = () =>
    <div>
        <NavBar/>
        <div className="slider-adjustment">
            <div className="slider fullscreen">
                <ul className="slides">
                    <li>
                        <img src="http://res.cloudinary.com/brooklee/image/upload/v1510618087/PlayersBasketball_y5inhn.jpg" />
                        <div className="caption center-align logo-hero">
                            <img className="logo-hero-size" src="http://res.cloudinary.com/brooklee/image/upload/v1510618073/Logo_tt8muh.svg" />
                        </div>
                    </li>
                    <li>
                        <img src="http://res.cloudinary.com/brooklee/image/upload/v1510618085/basketballplayer_jbv346.jpg" />
                        <div className="caption center-align logo-hero">
                            <img className="logo-hero-size" src="http://res.cloudinary.com/brooklee/image/upload/v1510618073/Logo_tt8muh.svg" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div id="modal1" className="modal">

            <div className="modal-header">
                <Row>
                    <Col s={12}>
                      <Tabs>
                        <Tab title="Login" tabWidth={6} active className="oswald-caps-red">
                            <div className="modal-content red-text text-accent-4">
                                <h4>Login</h4>
                                <LoginForm />
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Login</a>
                                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Nevermind</a>
                            </div>
                        </Tab>
                        <Tab title="Register New User" tabWidth={6} className="oswald-caps-red">
                            <div className="modal-content red-text text-accent-4">
                                <h4>Register New User</h4>
                                <RegisterForm/>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Register</a>
                                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Nevermind</a>
                            </div>
                        </Tab>
                      </Tabs>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

export default Main;