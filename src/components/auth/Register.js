import React, { useState } from 'react'

export default function Register() {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const onRegister = () => {

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
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="name" value={details.name} onChange={onChange} placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" value={details.email} onChange={onChange} placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" name="password" value={details.password} onChange={onChange} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
