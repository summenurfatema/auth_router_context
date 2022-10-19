import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleSignOut = () => {
        logOut()
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="btn btn-ghost normal-case text-xl" >Awesome Auth</div>

                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {user?.email && <span>{user.email}</span>}
                    <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                </div>
            </div>
        </div>
    );
};

export default Header;