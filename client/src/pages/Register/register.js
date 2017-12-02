import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Col, Row,} from 'react-materialize';
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar/navBar";
import {InputForm, FormBtn} from "../../components/AddPlayers";




class register extends Component {

    state = {
        data: [],
        email: "",
        password: "",
        name: ""

    }

    componentDidMount(){
        this.loginStart()
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
    };

    loginStart = (event) => {
        API.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    loginHandler = (event) => {
        API.login({
            email: this.state.email,
            password: this.state.password
        })
            .then( (res) => {
                console.log('res.data', res.data);
                this.setState({
                    data: res.data
                })
                if (this.state.data[0]) {
                    this.state.data.map(id => window.sessionStorage.setItem("userId", id._id))
                    this.setState({email: "", password: ""});
                    this.props.history.push('/teams');
                }
                else {
                    alert("your email or password is wrong or you are not registered please try again.")
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
                        <FormBtn
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.registerHandler}>
                            Register
                        </FormBtn>
                    </Col>
                </div>
<hr/>
                <div className="container oswald-caps">
                    <Col s={6}>
                        <h3 className="oswald-caps-red">Login</h3>
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

                        <FormBtn
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.loginHandler}>
                            LogIn
                        </FormBtn>

                    </Col>

                    <Link to="./forgotpassword">
                        Forgot Password?
                    </Link>
                </div>


            </div>

        );
    }
}
export default register;