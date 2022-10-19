import React, { createContext } from 'react';

export const AuthContext = createContext()
const UseContext = ({ children }) => {
    const user = { displayName: 'akash' };
    const authInfo = { user: user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default UseContext;