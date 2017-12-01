
import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar/navBar";
import "../../css/style.css";
import {Modal, Button, Row, Col, Input, Tab, Tabs} from "react-materialize";
import {LoginForm, RegisterForm} from "../../components/LoginModal";
import {InputForm, FormBtn} from "../../components/AddPlayers";

class Main extends Component {

    state = {
        email: "",
        password: "",
    }

    componentDidMount(){
       this.getTeams
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    registerHandler = (event) => {
        API.registerUser({
            email: this.email,
            password: this.password,
            name: this.name
        })
            .then((res) => {
                    alert("you are registered go login")
            })
    }

    loginHandler = (event) => {
        API.login({
            email: this.email,
            passoword: this.password
        })
            .then( (res) => {
                if (res._id) {
                  window.sessionStorage.setItem("userId", res._id );
                  this.setState({email: "", password: ""});
                }
                else {
                  return "message to please log in using correct user name and password"
                }
        })
    }


                render() {
        return (
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
                                {/*<RegisterForm/>*/}

                                <div>
                                    <div className="input-field">
                                        <Row>
                                            <InputForm
                                                label="email"
                                                type="email"
                                                s={12}
                                                validate
                                                data-error="Please enter a valid email address"
                                                data-success="Valid Email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                            />
                                            <label className="active" for="fName">Email</label>
                                        </Row>
                                    </div>

                                    <Row>
                                        <InputForm
                                            label="password"
                                            type="password"
                                            s={12}
                                            validate
                                            data-error="Please enter a valid email address"
                                            data-success="Valid Email"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                    </Row>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <FormBtn onClick={this.registerHandler}>
                                  Register
                                </FormBtn>
                                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Register</a>
                                <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Nevermind</a>
                            </div>
                        </Tab>
                      </Tabs>
                    </Col>
                </Row>
            </div>
        </div>

        {/*<div className="container oswald-caps">*/}

            {/*<div className="row">*/}
                {/*<div className="input-field col s6">*/}
                    {/*<InputForm name="name"*/}
                               {/*type="text"*/}
                               {/*className="validate"*/}
                               {/*value={this.state.name}*/}
                               {/*onChange={this.handleChange.bind(this)}/>*/}
                    {/*<label className="active" for="name">Name</label>*/}
                {/*</div>*/}

                {/*<div className="input-field col s6">*/}
                    {/*<InputForm name="email"*/}
                               {/*type="email"*/}
                               {/*className="validate"*/}
                               {/*value={this.state.email}*/}
                               {/*onChange={this.handleChange.bind(this)}/>*/}
                    {/*<label className="active" for="email">Email</label>*/}
                {/*</div>*/}

            {/*</div>*/}

            {/*<div className="row">*/}
                {/*<div className="input-field col s6">*/}
                    {/*<InputForm name="password"*/}
                               {/*value={this.state.password}*/}
                               {/*onChange={this.handleChange.bind(this)}*/}
                               {/*id="password"*/}
                               {/*type="text"*/}
                               {/*className="validate"*/}

                    {/*/>*/}
                    {/*<label className="active" for="type">Password</label>*/}
                {/*</div>*/}

                {/*<div className="input-field col s6">*/}
                    {/*<InputForm name="passwordConfirm"*/}
                               {/*value={this.state.passwordConfirm}*/}
                               {/*onChange={this.handleChange.bind(this)}*/}
                               {/*id="type"*/}
                               {/*className="validate"*/}
                    {/*/>*/}
                    {/*<label className="active" for="type">Confirm Password</label>*/}
                {/*</div>*/}

            {/*</div>*/}


            {/*<FormBtn disabled={!(this.state.name && this.state.email)}*/}
                     {/*onClick={this.handleregister.bind(this)}*/}
            {/*>Submit</FormBtn>*/}


        {/*</div>*/}
    </div>

        );
    }
}
export default Main;

