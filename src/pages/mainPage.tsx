import React from "react";
import { Link } from 'react-router-dom';
import useConfig from "../components/useConfig";
import logo from "../logo.svg";

export default function MainPage() {
    const { app } = useConfig();
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {app.TITLE}</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/browser/App.jsx</code> and save to reload.
        </p>
        <p className="App-intro">
            <Link to="/counter">
                <button> Counter </button>
            </Link>
        </p>
        </div>
    );
}