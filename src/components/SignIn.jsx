import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        axios.post("http://localhost:7500/signin", input)
            .then((response) => {

                console.log(response.data);

                if (response.data.status === "success") {

                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userId", response.data.userId);

                    alert("Login Successful");
                    navigate("/create");

                } else {

                    alert(response.data.errorMessage);

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
                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">
                            <h3 className="text-center">User Sign In</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                    placeholder="akk@example.com"
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
                                    placeholder="Password@123"
                                />
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-success"
                                    onClick={readValues}
                                >
                                    SIGN IN
                                </button>
                            </div>

                            <div className="d-grid mt-3">
                                <Link to="/signup" className="btn btn-primary">
                                    NEW USER? SIGN UP
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignIn;