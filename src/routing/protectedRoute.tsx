import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAppSelector } from "src/hooks";

export default function ProtectedRoute({...routeProps}: RouteProps) {

    const authStatus:boolean = useAppSelector((state) => state.authStatus.value);
    
if(authStatus) {
    return <Route {...routeProps} />;
} else {
    return <Redirect to={{ pathname: "/login" }} />;
}
};