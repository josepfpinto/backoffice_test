import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FetchData } from "src/api/testApi";
import { useAppSelector } from "src/hooks";
import useConfig from "../components/useConfig";
import logo from "../logo.svg";

export default function MainPage() {
    const authStatus = useAppSelector((state) => state.authStatus.value);
    console.log("MainPage")
    console.log(authStatus)

    let helloText = '';
    useEffect(() => {
        FetchData().then((data) => {helloText = data;})
    }, [])
    

    const { app } = useConfig();
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {app.TITLE}</h1>
        </header>
        <p className="App-intro">
            {helloText}
        </p>
        <p className="App-intro">
            <Link to="/app/counter">
                <button> Counter </button>
            </Link>
        </p>
        </div>
    );
}