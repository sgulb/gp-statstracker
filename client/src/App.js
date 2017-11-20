import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Players from "./pages/Players";
import Main from "./pages/Main";
import AddGame from "./pages/AddGame";
//import Teams from "./pages/Teams";



const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/players/:team" component={Players} />
                <Route exact path="/add-game" component={AddGame} />
                {/*<Route exact path="/teams" component={Teams} />*/}


                {/*<Route exact path="/teams" component={Teams} />*/}


            </Switch>
        </div>
    </Router>;

export default App;
