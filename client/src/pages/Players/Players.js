import React, { Component } from "react";
import API from "../../utils/API";
import "../../css/style.css";
import {Card, CardTitle, Col, Row, Input, CardPanel} from 'react-materialize';
// import request from 'superagent';

import NavBar from "../../components/NavBar/navBar";
import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {InputForm, FormBtn} from "../../components/AddPlayers";
import {PlayersList} from "../../components/PlayerCard/PlayersList";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn"


// const CLOUDINARY_UPLOAD_PRESET = 'ww4awdmu';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/brooklee/upload';



class Players extends Component {

    state = {
        players: [],
        lName: "",
        fName: "",
        jersey: "",
        position: ""
    };

    componentDidMount() {
        this.loadPlayers();

    }

    loadPlayers = () => {
        API.getPlayers(this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({players: res.data.player, lName: "", fName: "", jersey: ""})
            })
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
                jersey: this.state.jersey,
                position: this.state.position,
                id: this.props.match.params.id
            })
                .then(res => {
                    this.loadPlayers();
                    this.setState({
                        fName: "",
                        lName: "",
                        jersey: "",
                        position: ""
                    })
                })
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
                <div className="basketball-BG">
                    <NavBar/>

                    <Row className="center-align">
                    {this.state.players.length ? (
                                <div className="card-content">
                                    <PlayersList>
                                        {this.state.players.map(player => (
                                            <PlayersInfo key={player._id}>
                                                <Col s={4}>
                                                <Card
                                                    header={<CardTitle ></CardTitle>} actions={[ <DeleteBtn onClick={() => this.deletePlayer(player._id)} />]}>
                                                    <a className="player-card" href={"/players/" + player._id}>
                                                        <div className="center-align">
                                                            <h4>
                                                                {player.lName +" "}
                                                                {player.fName}
                                                            </h4>
                                                            <h5>
                                                                {player.jersey}
                                                            </h5>
                                                            <h5>
                                                                {player.position}
                                                            </h5>
                                                        </div>
                                                    </a>
                                                </Card>

                                            </Col>

                                            </PlayersInfo>
                                        ))}
                                    </PlayersList>
                                </div>


                    ) : (

                        <h3 className="center">You Dont Have any Players yet Add them to the roster</h3>
                    )}
                    </Row>
                </div>


                <hr/>

                <div className="container oswald-caps">

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="fName" id="fName" type="text" className="validate"
                                       value={this.state.fName}
                                       onChange={this.handleInputChange}/>
                            <label className="active" for="fName">First Name </label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="lName" id="lName" type="text" className="validate"
                                       value={this.state.lName}
                                       onChange={this.handleInputChange}/>
                            <label className="active" for="lName"> Last Name </label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <InputForm name="jersey"
                                       value={this.state.jersey}
                                       onChange={this.handleInputChange}
                                       id="jersey"
                                       type="text"
                                       className="validate"
                            />
                            <label className="active" for="jersey">Jersey</label>
                        </div>

                        <div className="input-field col s6">
                            <InputForm name="position"
                                       value={this.state.position}
                                       onChange={this.handleInputChange}
                                       id="position"
                                       className="validate"
                            />
                            <label className="active" for="position">Position</label>
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

                    {/*<div className="row">*/}
                        {/*<div className="input-field col s6">*/}
                            {/*<InputForm name="points" id="points" type="text" className="validate"*/}
                                       {/*value={this.state.points}*/}
                                       {/*onChange={this.handleInputChange}/>*/}
                            {/*<label className="active" for="fName">Points</label>*/}
                        {/*</div>*/}

                        {/*<div className="input-field col s6">*/}
                            {/*<InputForm name="assists" id="type" type="text" className="validate"*/}
                                       {/*value={this.state.assists}*/}
                                       {/*onChange={this.handleInputChange}/>*/}
                            {/*<label className="active" for="type">Assists</label>*/}
                        {/*</div>*/}

                    {/*</div>*/}

                    {/*<div className="row">*/}
                        {/*<div className="input-field col s6">*/}
                            {/*<InputForm name="rebounds" id="fName" type="text" className="validate"*/}
                                       {/*value={this.state.rebounds}*/}
                                       {/*onChange={this.handleInputChange}/>*/}
                            {/*<label className="active" for="fName">Rebounds</label>*/}
                        {/*</div>*/}

                        {/*<div className="input-field col s6">*/}
                            {/*<InputForm name="steals" id="type" type="text" className="validate"*/}
                                       {/*value={this.state.steals}*/}
                                       {/*onChange={this.handleInputChange}/>*/}
                            {/*<label className="active" for="type">Steals</label>*/}
                        {/*</div>*/}

                    {/*</div>*/}

                    {/*<div className="row">*/}
                        {/*<div className="input-field col s6">*/}
                            {/*<InputForm name="turnovers" id="turnovers" type="text" className="validate"*/}
                                       {/*value={this.state.turnovers}*/}
                                       {/*onChange={this.handleInputChange}/>*/}
                            {/*<label className="active" for="fName">Turnovers</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <FormBtn disabled={!(this.state.fName && this.state.lName)}
                             onClick={this.handleFormSubmit}
                    >Submit Player</FormBtn>


                </div>
            </div>


        );
    }
}
export default Players;