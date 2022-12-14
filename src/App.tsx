import "./App.css";

import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useConfig from "./components/useConfig";
import AppLayout from "./routing/appLayout";
import ErrorPage from "./pages/errorPage";
import { Account } from "./components/auth/account";
import Login from "./pages/login";
import ProtectedRoute from "./routing/protectedRoute";

// Our Web Application
export default function App() {
  const { app } = useConfig();
  return (        
    <Switch>
      <Route exact path="/login">
        <Account>
          <Login />
        </Account>
      </Route>
      <ProtectedRoute path='/app' component={AppLayout} />
      <Redirect from="/" to="/app" exact />
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
