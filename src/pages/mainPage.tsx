import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FetchData } from "../api/testApi";
import useConfig from "../components/useConfig";
import logo from "../logo.svg";
import { AccountContext } from "../components/auth/account";

export default function MainPage() {
    const { getSession } = useContext(AccountContext);
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        getSession().then((session: any) => {
            FetchData(session.idToken.jwtToken).then((data) => {setApiData(data);})
        }).catch((err: any) => {
            console.error("Failed to get session: ", err);
        });

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