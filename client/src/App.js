import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Players from "./pages/Players";
import Main from "./pages/Main";
import IndivPlayers from "./pages/IndivPlayers";
import AddGame from "./pages/AddGame";
import Teams from "./pages/Teams";


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/teams" component={Teams} />

                <Route path="/teams/:id" component={Players} />
                <Route path="/players/:id" component={IndivPlayers} />
                <Route exact path="/add-game" component={AddGame} />


            </Switch>
        </div>
    </Router>;

export default App;
