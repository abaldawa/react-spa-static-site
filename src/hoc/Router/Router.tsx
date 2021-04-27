import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Navigation} from "../../components/Navigation/Navigation";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Users} from "../../pages/Users/Users";

const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export {Router}