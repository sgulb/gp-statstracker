import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input, CardPanel} from 'react-materialize';

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn"



class register extends Component {

    state = {
        email: "",
        password: "",
        name: ""

    }

    componentDidMount(){
        this.loginHandler()
    };



    registerHandler = (event) => {
        event.preventDefault();
        API.registerUser({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
            .then((res) => {
                alert("you are registered go login")
            })
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(name, value)
    };

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

                <div className="container oswald-caps">
                    <Col s={6}>
                        <h3 className="oswald-caps-red">Register</h3>
                        <div className="input-field">
                            <Row>
                                <InputForm
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    label="email"
                                    type="email"
                                    data-error="Please enter a valid email address"
                                    data-success="Valid Email"

                                />
                                <label className="active" for="fName">Email</label>
                            </Row>
                        </div>

                        <div className="input-field">
                            <Row>
                                <InputForm
                                    name="password"
                                    label="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                                <label className="active" for="fName">Password</label>
                            </Row>
                        </div>


                        <div className="input-field">
                            <Row>
                                <InputForm
                                    name="name"
                                    label="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                                <label className="active" for="fName">Name</label>
                            </Row>
                        </div>

                    </Col>


                    <FormBtn
                        disabled={!(this.state.email && this.state.password)}
                        onClick={this.registerHandler}>
                        Register
                    </FormBtn>


                </div>
            </div>

        );
    }
}
export default register;