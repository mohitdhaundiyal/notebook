import React, { useEffect } from 'react'
import {
    Link, useLocation
} from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();
    useEffect(() => {
    }, [location])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className="navbar-brand mb-0 h1" to="/">iNotebook </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? `active` : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                        {localStorage.getItem('token') ? 'hiii' : ""}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/register' ? `active` : ""}`} aria-current="page" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/login' ? `active` : ""}`} aria-current="page" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}