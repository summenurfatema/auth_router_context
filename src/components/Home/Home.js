import React, { useContext } from 'react';
import { AuthContext } from '../../context/UseContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            This is home for{user.displayName}
        </div>
    );
};

export default Home;