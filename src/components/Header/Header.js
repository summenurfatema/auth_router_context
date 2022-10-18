import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="btn btn-ghost normal-case text-xl" >daisyUI</div>

                <div>
                    <Link to='/home'>Home</Link>
                    <Link to='/login'>Log in</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;