import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebae/firebase.config'


const auth = getAuth(app)
export const AuthContext = createContext()
const UseContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'akash' })
    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // catch user info
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    // logout
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = { user, createUser, signIn, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default UseContext;