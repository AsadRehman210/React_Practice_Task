import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/action/UserAction';

const Navbar = () => {
    const token = useSelector(state => state.user.token)
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(logout())

    }

    return (
        <header className='bg-light'>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link text-decoration-none text-primary" to="/">Home</NavLink>
                            </li>
                            {!token ?
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-decoration-none text-primary" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-decoration-none text-primary " to="/signup">Signup</NavLink>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none text-primary" to="/logout" onClick={Logout}>Logout</NavLink>
                                </li>}






                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;
