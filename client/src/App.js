import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Players from "./pages/Players";
import Main from "./pages/Main";
// import Teams from "./pages/Teams"


const App = () =>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/players" component={Players} />


                {/*<Route exact path="/teams" component={Teams} />*/}


            </Switch>
        </div>
    </Router>;

export default App;
