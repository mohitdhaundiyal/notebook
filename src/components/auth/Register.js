import React, { useState } from 'react'
import { Component } from 'react';
import { useHistory } from 'react-router'

export default function Register() {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    let history = useHistory();

    const onRegister = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: details.name, email: details.email, password: details.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            history.push('/home');
        }
    }

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    return (
        <div className="d-flex justify-content-center my-4">
            <div className="card col-lg-5 col-md-10 col-12 shadow-sm rounded-3">
                <div className="card-body">
                    <h4 className="card-title">
                        Register
                    </h4>
                    <hr />
                    <form onSubmit={onRegister}>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="name" value={details.name} onChange={onChange} placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" value={details.email} onChange={onChange} placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" name="password" value={details.password} onChange={onChange} placeholder="Password" />
                        </div>
                        {/* <div className="mb-3">
                            <input type="password" className="form-control" name="cpassword" value={details.cpassword} onChange={onChange} placeholder="Password" />
                        </div> */}
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
