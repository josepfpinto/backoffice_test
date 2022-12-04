import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./userPool";
import { useAppSelector, useAppDispatch } from "src/hooks";
import { authStateActions } from "./authStatusSlice";

const AccountContext = createContext();

const Account = (props) => {

    const authStatus = useAppSelector((state) => state.authStatus.value);
    const dispatch = useAppDispatch();

    // function that changes AuthStatus from redux store
    const changeAuthStatus = (newStatus) => {
        const newState = {
            value: newStatus,
        };
        dispatch(authStateActions.change(newState));
    };

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        changeAuthStatus(false)
                        reject(err);
                    } else {
                        console.log("SESSION")
                        console.log(session);
                        changeAuthStatus(true)
                        resolve(session);
                    };
                });
            } else {
                reject();
            };
        });
    };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {   
                onSuccess: (data) => {
                    if (!authStatus) { changeAuthStatus(true); }
                    resolve(data);
                },
                onFailure: (err) => {
                    if (authStatus) { changeAuthStatus(false); }
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    if (authStatus) { changeAuthStatus(false); }
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                },
            });
        });
    };

    const logout = async () => {
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            console.log(user);
            if (user) {
                user.signOut();
                changeAuthStatus(false);
                resolve(true);
            } else {
                reject(false);
            };
        })
        

        
    };

    return(
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    )
};

export { Account, AccountContext };