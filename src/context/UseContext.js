import React, { createContext } from 'react';

const AuthContext = createContext()

const UseContext = ({ children }) => {
    const user = { displayName: 'Akash' }
    const authInfo = { user: user }
    return (
        <AuthContext.Provider value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;