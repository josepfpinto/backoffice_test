import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./auth/logoutButton";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/app/home">Home</Link>
                </li>
                <li>
                    <Link to="/app/counter">Counter</Link>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
}