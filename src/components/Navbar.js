import React, { useEffect } from 'react'
import {
    Link, useLocation
} from "react-router-dom";
import { useHistory } from 'react-router';

export default function Navbar(props) {
    const history = useHistory();

    let location = useLocation();
    useEffect(() => {
    }, [location])

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className="navbar-brand mb-0 h1" to="/">iNotebook </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {!localStorage.getItem('token') ?
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/register' ? `active` : ""}`} aria-current="page" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/login' ? `active` : ""}`} aria-current="page" to="/login">Login</Link>
                                </li>
                            </ul>

                            :
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle p-0" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="img-fluid" src={`https://ui-avatars.com/api/?rounded=true&name=${localStorage.getItem('authName')}`} alt="" width="35" />
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        }

                    </ul>
                </div>
            </div >
        </nav >
    )
}