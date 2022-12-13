import React from "react";
import Counter from "../components/counter/Counter";
import { Link } from 'react-router-dom';

export default function CounterPage() {
    return (
        <div>
            <div>
                This is a Test page...
            </div>
            <Link to="/app/home">
                <button> Back Home </button>
            </Link>
            <Counter/>
        </div>
    );
}