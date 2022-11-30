import React from "react";
import Counter from "src/components/counter/Counter";
import { Link } from 'react-router-dom';

export default function CounterPage() {
    return (
        <div>
            <div>
                This is a Test page...
            </div>
            <Link to="/">
                <button> Back Home </button>
            </Link>
            <Counter/>
        </div>
    );
}