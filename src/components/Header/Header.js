import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="btn btn-ghost normal-case text-xl" >Awesome Auth</div>

                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;