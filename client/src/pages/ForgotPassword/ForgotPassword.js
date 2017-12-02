import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input, CardPanel, Button, Icon} from 'react-materialize';
import "./style.css";

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import PageHead from "../../components/PageHead/PageHead"

class ForgotPassword extends Component{

		state = {
			email:""
		}

		handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleEmailSubmit = event => {
    	event.preventDefault();

    }

    render(){
    	return(
            <div>
                <NavBar/>
                <h2>Forgot your password?</h2>
                <Card id="card" header={<h5>Enter the email linked to your account so we can send you your password.</h5>}>
	                <div className="container oswald-caps">
	                	<Input  type="email" s={8} validate label="email"/>
	                	<Button><Icon left>email</Icon>Go!</Button>
	                </div>
                </Card>


            </div>
    	)
    }
}

export default ForgotPassword;