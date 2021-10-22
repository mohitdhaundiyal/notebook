import React, { useState } from 'react'
import { useHistory } from 'react-router';

export default function Login() {

    const [cred, setCred] = useState({ email: "", password: "" })
    const history = useHistory();

    if (localStorage.getItem('token')) {
        history.push('/home');
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });

        const json = await response.json()
        console.log(json)
        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            history.push('/home');
        }
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    return (
        <div className="d-flex justify-content-center my-4">
            <div className="card col-lg-5 col-md-10 col-12 shadow" style={{ borderRadius: '1rem' }}>
                <div className="card-body">
                    <h4 className="card-title">
                        Login
                    </h4>
                    <hr />
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input type="email" className="form-control" value={cred.email} onChange={onChange} name="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" value={cred.password} onChange={onChange} name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
