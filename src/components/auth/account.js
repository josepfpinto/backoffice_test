import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./userPool";

const AccountContext = createContext();

const Account = (props) => {

    // function that changes AuthStatus from redux store
    // const changeAuthStatus = (newStatus, idToken, accessToken) => {
    //     const newState = {
    //         value: newStatus,
    //         idtoken: idToken,
    //         accessToken: accessToken,
    //     };
    //     dispatch(authStateActions.change(newState));
    // };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {   
                onSuccess: (session) => {
                    resolve();
                },
                onFailure: (err) => {
                    reject(err);
                },
                newPasswordRequired: (data) => {
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
                resolve(true);
            } else {
                reject(false);
            };
        })
    };

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {

                    
                    if (err) {
                        reject(err);
                    } else {
                        var refresh_token = session.getRefreshToken();
                        if (session.isValid()) {
                            user.refreshSession(refresh_token, (err, newSession) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    session = newSession;
                                }
                            });
                        }
                        resolve(session);
                    };
                });
            } else {
                reject();
            };
        });
    }; 

    return(
        <AccountContext.Provider value={{ authenticate, logout, getSession }}>
            {props.children}
        </AccountContext.Provider>
    )
};

export { Account, AccountContext };