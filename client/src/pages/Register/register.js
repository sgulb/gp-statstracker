import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input, CardPanel} from 'react-materialize';

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn"



class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', passwordConfirm: '' };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleregister= event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };




    render() {
        return (
            <div>
                <NavBar/>

                <div className="container oswald-caps">

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="name"
                                       type="text"
                                       className="validate"
                                       value={this.state.name}
                                       onChange={this.handleChange.bind(this)}/>
                            <label className="active" for="name">Name</label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="email"
                                       type="email"
                                       className="validate"
                                       value={this.state.email}
                                       onChange={this.handleChange.bind(this)}/>
                            <label className="active" for="email">Email</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="password"
                                       value={this.state.password}
                                       onChange={this.handleChange.bind(this)}
                                       id="password"
                                       type="text"
                                       className="validate"

                            />
                            <label className="active" for="type">Password</label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="passwordConfirm"
                                       value={this.state.passwordConfirm}
                                       onChange={this.handleChange.bind(this)}
                                       id="type"
                                       className="validate"
                            />
                            <label className="active" for="type">Confirm Password</label>
                        </div>

                    </div>


                    <FormBtn disabled={!(this.state.name && this.state.email)}
                             onClick={this.handleregister.bind(this)}
                    >Submit</FormBtn>


                </div>
            </div>

        );
    }
}
export default register;