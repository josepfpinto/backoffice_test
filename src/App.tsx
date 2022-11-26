import "./App.css";

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import useConfig from "./components/useConfig";
import MainPage from "./pages/mainPage";
import ErrorPage from "./pages/errorPage";
import TestPage from "./pages/testPage";

/**
 * Our Web Application
 */
export default function App() {
  const { app } = useConfig();
    return (
      <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
