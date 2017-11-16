import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import PlayerCard from "../../components/PlayerCard";
import AddPlayers from "../../components/AddPlayers"
import players from "../../players.json";

 class Players extends Component {
    // Setting this.state.players to the players json array
    state = {
        players
    };

    // Map over this.state.players and render a PlayerCard component for each player object
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.players.map(players => (
                        <PlayerCard
                            id={players.id}
                            key={players.id}
                            image={players.image}
                            name={players.name}
                            position={players.position}
                        />
                    ))}
                </div>
            <AddPlayers />
            </div>


        );
    }
}
export default Players;