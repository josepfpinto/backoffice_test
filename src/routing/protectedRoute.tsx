import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import Pool from "../components/auth/userPool";

export default function ProtectedRoute({...routeProps}: RouteProps) {

    // Fetching if user is logged in via Pool
    const user = Pool.getCurrentUser();
    
    // Note: everytime we refrech the page or enter the url directly in the browser the redux state resets and we loose the authStatus
    // const authStatus:boolean = useAppSelector((state) => state.authStatus.value);
    
    // if the user is not logged in we rediect him to login
    if(user) {
        return <Route {...routeProps} />;
    } else {
        return <Redirect to={{ pathname: "/login" }} />;
    }
};