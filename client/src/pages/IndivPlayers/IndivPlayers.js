import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, CardTitle, Col, Collapsible, CollapsibleItem} from 'react-materialize';
import "../../css/style.css";

import API from "../../utils/API";

import NavBar from "../../components/NavBar/navBar";

class Detail extends Component {
    state = {
        player: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getOnePlayer(this.props.match.params.id)
            .then(res => this.setState({ player: res.data }))
            .catch(err => console.log(err));
    }

   editPlayer = id => {
        API.editPlayer((this.props.match.params.id))
            .then(res => this.loadPlayers())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col s3">
                    </div>
                    <div className="col s6">
                        <Card
                            header={<CardTitle image={this.state.player.playerImage}></CardTitle>}>
                            <div>
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
                                                POSITION: {this.state.player.position}
                                            </h5>
                                        </div>
                                        <div className="center">
                                            <h5>
                                                POINTS: {this.state.player.points}
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

                                <Collapsible>
                                    <CollapsibleItem header='Edit This Player' className="center red-text text-accent-4 oswald-caps">

                                            <div className="row">
                                                <div className="input-field col m6 s12">
                                                    <input name="fName" id="fName" type="text" className="validate" />
                                                    <label for="fName">First Name </label>
                                                </div>
                                                <div className="input-field col m6 s12">
                                                    <input name="lName" id="lName" type="text" className="validate" />
                                                    <label for="lName"> Last Name </label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col m6 s12">
                                                    <input name="jersey" id="jersey" type="text" className="validate" />
                                                    <label for="jersey">Jersey Number</label>
                                                </div>
                                                <div className="input-field col m6 s12">
                                                    <div className="file-field input-field">
                                                        <div className="btn red accent-4">
                                                            <span>image</span>
                                                            <input name="playersImage" type="file" />
                                                        </div>
                                                        <div className="file-path-wrapper">
                                                            <input className="file-path validate" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col m6 s12">
                                                        <input name="position" id="position" type="text" className="validate" />
                                                        <label for="position">Position </label>
                                                    </div>
                                                    <div className="input-field col m6 s12">
                                                        <input name="points" id="points" type="text" className="validate" />
                                                        <label for="points"> Points </label>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                <div className="input-field col m6 s12">
                                                    <input name="assists" id="assists" type="text" className="validate" />
                                                    <label for="assists">assists </label>
                                                </div>
                                                <div className="input-field col m6 s12">
                                                    <input name="rebounds" id="rebounds" type="text" className="validate" />
                                                    <label for="rebounds"> rebounds </label>
                                                </div>
                                            </div>

                                                <div className="row">
                                                    <div className="input-field col m6 s12">
                                                        <input name="steals" id="steals" type="text" className="validate" />
                                                        <label for="steals">steals</label>
                                                    </div>
                                                    <div className="input-field col m6 s12">
                                                        <input name="turnovers" id="turnovers" type="text" className="validate" />
                                                        <label for="turnovers">turnovers</label>
                                                    </div>
                                                </div>

                                                <button>Submit Edit</button>
                                        </div>
                                    </CollapsibleItem>
                                </Collapsible>

                            </div>
                        </Card>
                    </div>
                    <div className="col s3"></div>
                    </div>


                <div>
                    <div className="center">
                        <Link to="/Players" className="oswald-caps">← Back to Players</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
