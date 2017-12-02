import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Players from "./pages/Players";
import Main from "./pages/Main";
import IndivPlayers from "./pages/IndivPlayers";
import AddGame from "./pages/AddGame";
import Teams from "./pages/Teams";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

//Add auth id users/:id
const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/teams" component={Teams} />
                <Route exact path="/register" component={Register} />

                <Route path="/teams/:id" component={Players} />
                <Route path={"/players/:id"} component={IndivPlayers} />
                <Route exact path="/add-game" component={AddGame} />

                <Route exact path="/forgotpassword" component={ForgotPassword} />


            </Switch>
        </div>
    </Router>;

export default App;
