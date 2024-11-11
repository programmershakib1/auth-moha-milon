import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const singOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        singInWithGoogle,
        singOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;