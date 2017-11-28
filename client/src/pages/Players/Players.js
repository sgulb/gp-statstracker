import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input} from 'react-materialize';
// import request from 'superagent';

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn"


const CLOUDINARY_UPLOAD_PRESET = 'ww4awdmu';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/brooklee/upload';



class Players extends Component {

     state = {
         players: [],
         lName: "",
         fName: "",
         jersey: ""
     };

     componentDidMount() {
         this.loadPlayers();
     }

     loadPlayers = () => {
         API.getPlayers()
             .then(res =>
                 this.setState({ players: res.data, lName: "", fName: "", jersey: "" })
             )
             .catch(err => console.log(err));
     };

    // Deletes a player from the database with a given id, then reloads players from the db
    deletePlayer = id => {
        API.deletePlayer(id)
            .then(res => this.loadPlayers())
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.addPlayer method to save the player data
    // Then reload players from the database
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.fName && this.state.lName) {
            API.addPlayer({
                fName: this.state.fName,
                lName: this.state.lName,
                jersey: this.state.jersey
            })
                .then(res => this.loadPlayers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
<div>
    <NavBar/>


        {this.state.players.length ? (
            <Row>
        <Col s={3}>
            <div className="card-content">

                    <PlayersList>
                        {this.state.players.map(player => (
                            <PlayersInfo key={player._id}>
                                <a href={"/players/" + player._id}>
                                    <Card className="card player-card small'"
                                          header={<CardTitle ></CardTitle>}>
                                        <div className="card-content">
                                            <h4>
                                                {player.lName +" "}
                                                {player.fName}
                                            </h4>
                                            <p>
                                                {player.jersey}
                                            </p>
                                            <p>
                                                {player.position}
                                            </p>
                                        </div>
                                    </Card>
                                </a>
                                <DeleteBtn onClick={() => this.deletePlayer(player._id)} />
                            </PlayersInfo>
                        ))}
                    </PlayersList>

            </div>
        </Col>
            </Row>
        ) : (
            <h3 className="center">You Dont Have any Players yet Add them to the roster</h3>
        )}


                <div className="container">

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="fName" id="fName" type="text" className="validate"
                                   value={this.state.fName}
                                   onChange={this.handleInputChange}/>
                            <label className="active" for="fName">First Name </label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="lName" id="type" type="text" className="validate"
                                       value={this.state.lName}
                                       onChange={this.handleInputChange}/>
                            <label className="active" for="type"> Last Name </label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="jersey"
                                   value={this.state.jersey}
                                   onChange={this.handleInputChange}
                                       id="type"
                                       className="validate"
                                       placeholder=" "
                            />
                            <label className="active" for="type">Jersey</label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="Position"
                                       value={this.state.position}
                                       onChange={this.handleInputChange}
                                       id="type"
                                       className="validate"
                                       placeholder=" "
                            />
                            <label className="active" for="type">Position</label>
                        </div>


                        {/*<div className="input-field col s6">*/}
                            {/*<div className="file-field input-field">*/}
                                {/*<div className="btn red accent-4">*/}
                                    {/*<span>Image</span>*/}
                                    {/*<InputForm name="playersImage" type="file" />*/}
                                {/*</div>*/}
                                {/*<div className="file-path-wrapper">*/}
                                    {/*<InputForm className="file-path validate" type="text" />*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    </div>
                        <FormBtn disabled={!(this.state.fName && this.state.lName)}
                                 onClick={this.handleFormSubmit}
                        >Submit Player</FormBtn>


                </div>
            </div>


        );
    }
}
export default Players;