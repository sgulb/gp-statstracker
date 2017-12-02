import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input, CardPanel, Button} from 'react-materialize';
import "./style.css";

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";

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
        API.findPassword({
            email: this.state.email
        })
        .then( (res) => {
                this.setState({email:""});
                alert("you are registered go login");
            })
    }

  render(){
        return(
            <div>
                <NavBar/>

              <div className="container oswald-caps">
                    <Input
                        s={8}
                        validate
                        label="Enter the email attached to your account"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                    <FormBtn onClick={this.handleEmailSubmit}>Go!</FormBtn>
                </div>


          </div>
        )
    }
}

export default ForgotPassword;
