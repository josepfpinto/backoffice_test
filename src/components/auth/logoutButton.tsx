import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { AccountContext } from "./account";

const LogoutButton = () => {
    const { getSession, logout } = useContext(AccountContext);
    const history = useHistory();

    const logoutClick = async () => {
        logout().then((value: boolean) => {
            console.log("Logged out!: ", value);
            history.push("/");
        }).catch((data: boolean) => {
            console.error("Failed to logout: ", data);
        });
    };

    return (<div>
        { <button onClick={logoutClick}>Logout</button> }
        </div>
    );
};

export default LogoutButton;