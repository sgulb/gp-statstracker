import React, { Component } from "react";
import players from "./players.json";
import PlayerCard from "./components/PlayerCard";
import {TeamCard} from "./components/TeamCard";


class App extends Component {
    // Setting this.state.players to the players json array
    // Map over this.state.players and render a FriendCard component for each player object
    render() {
        return (
            <div>
            <TeamCard>
            what the duce

            </TeamCard>
            </div>
        );
    }
}

export default App;