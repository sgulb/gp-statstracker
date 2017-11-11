import React, { Component } from "react";
import players from "./players.json";
import PlayerCard from "./components/PlayerCard";


class App extends Component {
    // Setting this.state.players to the players json array
    state = {
        players
    };

    // Map over this.state.players and render a FriendCard component for each player object
    render() {
        return (
            <div>
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
        );
    }
}

export default App;