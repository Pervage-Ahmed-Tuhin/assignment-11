import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import auth from "../../Firebase/firebase.config";


import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

import { GithubAuthProvider } from "firebase/auth";
import axios from "axios";

const GithubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [infoHolder, setInfoHolder] = useState({});
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const LogOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    const GoogleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const GitHUbLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, GithubProvider);
    }

    const UpdateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
            .then(() => {

                // console.log("update successful");
            })
            .catch((error) => {
                // console.log(error);
            });
    }


    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setInfoHolder(currentUser);
            setLoader(false);
            if (currentUser) {
                axios.post('https://food-sharing-server-site.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://food-sharing-server-site.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }

        });
        return () => {
            Unsubscribe();
        }
    }, [user?.email])

    const info = {
        user,
        createUser,
        setInfoHolder,
        UpdateUserProfile,
        LogOutUser,
        loginUser,
        GoogleLogin,
        GitHUbLogin,
        infoHolder,
        loader,
        setUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;