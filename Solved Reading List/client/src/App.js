import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndividualPlayerCard from "./components/IndividualPlayer/IndividualPlayerCard";
import Main from "./pages/Main";
import Teams from "./pages/Teams";


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/players" component={IndividualPlayerCard} />
                <Route exact path="/teams" component={Teams} />


            </Switch>
        </div>
    </Router>;

export default App;

