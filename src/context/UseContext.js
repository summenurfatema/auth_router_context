import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebae/firebase.config'


const auth = getAuth(app)
export const AuthContext = createContext()
const UseContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'akash' })

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, createUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default UseContext;