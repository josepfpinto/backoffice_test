import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./userPool";
import { useAppSelector, useAppDispatch } from "src/hooks";
import { authStateActions } from "./authStatusSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AccountContext = createContext();

const Account = (props) => {

    // const authStatus = useAppSelector((state) => state.authStatus);
    // const dispatch = useAppDispatch();
    const authStatus = useSelector((state) => state.authStatus);
    const dispatch = useDispatch();


    // function that changes AuthStatus from redux store
    const changeAuthStatus = (newStatus, idToken, accessToken) => {
        const newState = {
            value: newStatus,
            idtoken: idToken,
            accessToken: accessToken,
        };
        dispatch(authStateActions.change(newState));
    };

    /*
    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        changeAuthStatus(false, '', '')
                        reject(err);
                    } else {
                        console.log("SESSION")
                        console.log(session);
                        changeAuthStatus(true, '', '')
                        resolve(session);
                    };
                });
            } else {
                reject();
            };
        });
    }; 
    */

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {   
                onSuccess: (data) => {
                    changeAuthStatus(true, data.idToken.jwtToken, data.accessToken.jwtToken);
                    resolve(data);
                },
                onFailure: (err) => {
                    // changeAuthStatus(false, '', '');
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    // changeAuthStatus(false, '', '');
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
                changeAuthStatus(false, '', '');
                resolve(true);
            } else {
                reject(false);
            };
        })
        

        
    };

    return(
        <AccountContext.Provider value={{ authenticate, logout }}>
            {props.children}
        </AccountContext.Provider>
    )
};

export { Account, AccountContext };