import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";  

import Login from "./Login";
// import App from "./App";

function Pages() {

    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <Route exact path="/user" component={App} />  */}
                </Switch>
                
            </Router>
    );

}

export default Pages;