import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [usersName , setUsersName] = useState("");
    const [userPhoto , setUserPhoto] = useState("");

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth , googleProvider)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    const handleGithubSignIn = () => {
        setLoading(true);
        signInWithPopup(auth , githubProvider)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    const updateUser = (userName , photo) => {
        setLoading(true);
        setUsersName(userName);
        setUserPhoto(photo);
        return updateProfile(auth.currentUser , {displayName: userName , photoURL: photo});
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , loggedUser => {
            console.log('logged in user inside auth state observer' , loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
             unsubscribe();
        }
    } , [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut,
        usersName,
        userPhoto,
        handleGoogleSignIn,
        handleGithubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;