import React from "react";
import {Modal, Button, Row, Col, Input, Tab, Tabs} from "react-materialize";
import {LoginForm, RegisterForm} from "../LoginModal";
// import "../css/styles.css";

const LogIn = props => (
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
);

export default LogIn;
