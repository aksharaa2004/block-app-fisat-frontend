import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        if (input.password !== input.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        const newInput = {
            name: input.name,
            phone: input.phone,
            email: input.email,
            password: input.password
        };

        axios.post("http://localhost:7500/signup", newInput)
            .then((response) => {

                if (response.data.Status === "Success") {
                    alert("Registered Successfully");

                    setInput({
                        name: "",
                        phone: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    });

                } else {
                    alert(response.data.Status);
                }

            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">User Signup</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={input.password}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={input.confirmPassword}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-success"
                                    onClick={readValues}
                                >
                                    REGISTER
                                </button>
                            </div>

                            <div className="d-grid p-3">
                                <Link to="/" className="btn btn-primary">
                                    GO BACK TO LOGIN
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;