import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Account } from "../components/auth/account";
import Nav from "../components/nav";
import CounterPage from "../pages/counterPage";
import MainPage from "../pages/mainPage";

export default function AppLayout() {
    
    return (
        <div>
            <Account>
                <Nav />
            <Switch>
                <Route exact path="/app/home">
                    <MainPage />
                </Route>
                <Route exact path="/app/counter">
                    <CounterPage />
                </Route>
            </Switch>
            <Redirect from="/app" to="/app/home" exact />
            </Account>
        </div>
    );
}