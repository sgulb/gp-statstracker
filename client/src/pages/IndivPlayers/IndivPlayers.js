import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, CardTitle, Col, Collapsible, CollapsibleItem, CardPanel} from 'react-materialize';
import "../../css/style.css";

import API from "../../utils/API";

import NavBar from "../../components/NavBar/navBar";
import EditPlayerBtn from "../../components/Btn/editPlayerBtn";
import {InputForm, FormBtn} from "../../components/AddPlayers";

class Detail extends Component {
    state = {
        player: {},
        playerGameStats: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getOnePlayer(this.props.match.params.id)
            .then(res => this.setState({ player: res.data }))
            .catch(err => console.log(err));
    }


    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleUpdate = event => {
        event.preventDefault();
        if (this.state.fName && this.state.lName) {
            API.editPlayer({
                fName: this.state.fName,
                lName: this.state.lName,
                jersey: this.state.jersey
            })
                .then(res => this.loadPlayers())
                .catch(err => console.log(err));
        }
    };

    editPlayer = id => {
        API.editPlayer((this.props.match.params.id))
            .then(res => this.loadPlayers())
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <NavBar/>
                <div className="row center">
                    <Col s={1} m={3}/>
                    <Col s={10} m={6}>
                        <div
                            header={<CardTitle image={this.state.player.playerImage}></CardTitle>}>
                            <CardPanel>
                                <h3 className="center red-text text-accent-4">
                                    {this.state.player.jersey}
                                </h3>
                                <h3 className="center red-text text-accent-4">
                                    {this.state.player.lName}  {this.state.player.fName}
                                </h3>
                                <Collapsible>
                                    <CollapsibleItem header='DETAILS' className="center red-text text-accent-4 oswald-caps">
                                        <div className="center">
                                            <h5>
                                                POINTS: {this.state.player.PlayerGameStats}
                                            </h5>
                                        </div>
                                        <div className="center">
                                            <h5>
                                                ASSISTS: {this.state.player.assists}
                                            </h5>
                                        </div>
                                        <div className="center">
                                            <h5>
                                                Rebounds: {this.state.player.rebounds}
                                            </h5>
                                        </div>
                                        <div className="center">
                                            <h5>
                                                Steals: {this.state.player.steals}
                                            </h5>
                                        </div>
                                        <div className="center">
                                            <h5>
                                                Turnovers: {this.state.player.turnovers}
                                            </h5>
                                        </div>
                                    </CollapsibleItem>
                                </Collapsible>


                            </CardPanel>
                        </div>
                    </Col>
                    <Col s={1} m={3}/>
                </div>

                    <div className="center">
                        <Link to="/teams" className="oswald-caps">← Back to Teams</Link>
                    </div>

            </div>
        );
    }
}

export default Detail;
