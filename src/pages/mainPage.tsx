import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FetchData } from "../api/testApi";
import useConfig from "../components/useConfig";
import logo from "../logo.svg";
import { useAppSelector, useAppDispatch } from "../hooks";

export default function MainPage() {
    const [apiData, setApiData] = useState('');
    const authStatus = useAppSelector((state) => state.authStatus);

    useEffect(() => {
        FetchData(authStatus.idtoken).then((data) => {setApiData(data);})
    }, [])
    

    const { app } = useConfig();

    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {app.TITLE}</h1>
        </header>
        <p className="App-intro">
            {apiData}
        </p>
        <p className="App-intro">
            <Link to="/app/counter">
                <button> Counter </button>
            </Link>
        </p>
        </div>
    );
}