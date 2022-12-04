import React, { useState, useContext } from "react";
import { AccountContext } from "../components/auth/account";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        authenticate(email, password).then((data: any) => {
            console.log("Logged in!: ", data);
            history.push("/");
        }).catch((err: any) => {
            console.error("Failed to login: ", err);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

// josepfpinto@gmail.com
// sZc5^cK%ubpQ_