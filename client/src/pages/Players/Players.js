import React, { Component } from "react";
import API from "../../utils/API";


import {PlayersInfo} from "../../components/PlayerCard/PlayersInfo";
import {Input, FormBtn} from "../../components/AddPlayers";
import AddPlayers from "../../components/AddPlayers";
import PlayerCard from "../../components/PlayerCard";
import {PlayersList} from "../../components/PlayerCard/PlayersList";


 class Players extends Component {

     state = {
         players: []
     };

     componentDidMount() {
         this.loadPlayers();
     }

     loadPlayers = () => {
         API.getPlayers()
             .then(res => this.setState({ players: res.data }))
             .catch(err => console.log(err));
     };

    // Map over this.state.players and render a PlayerCard component for each player object
    render() {
        return (
<div>
    <div className="row">
    {this.state.players.length ? (
        <PlayersList>
            {this.state.players.map(player => (
                <PlayersInfo key={player._id}>
                    <a href={"/players/" + player._id}>
                        <h4>
                            {player.lName}
                        </h4>
                    </a>
                </PlayersInfo>
            ))}
        </PlayersList>
    ) : (
        <h3>No Results to Display</h3>
    )}
    </div>

            <AddPlayers>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="fName" id="fName" type="text" className="validate" />
                            <label for="fName">First Name </label>
                        </div>
                        <div className="input-field col s6">
                            <Input name="lName" id="lName" type="text" className="validate" />
                            <label for="lName"> Last Name </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <Input name="jersey" id="jersey" type="text" className="validate" />
                            <label for="jersey">Jersey Number</label>
                        </div>
                        <div className="input-field col s6">
                            <div className="file-field input-field">
                                <div className="btn red accent-4">
                                    <span>File</span>
                                    <Input name="playersImage" type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <Input className="file-path validate" type="text" />
                                </div>
                            </div>
                        </div>
                        <FormBtn>Submit Player</FormBtn>
                    </div>

                </div>
            </AddPlayers>
            </div>


        );
    }
}
export default Players;