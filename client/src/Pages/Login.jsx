import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';
import Header from "../components/Header";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();

        // Api Ingeration goes here


        // Simple validation
        if (email === "" || password === "") {

            toast.warn('Please fill out both fields.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        } else {
            toast.success('Login Successfull.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigation('/')
        }

    };

    return (
        <>
            <Header />
            <div className="background-image  h-screen flex justify-center items-center flex-col">
                <div className="bg-white p-4 shadow-md rounded-md">
                    <div className="h-80 w-72">
                        <h2 className="text-center font-bold">Login</h2>
                        <form onSubmit={handleLogin} className="flex flex-col space-y-4 mt-16">
                            <div className=" p-2 flex justify-between">
                                <label htmlFor="email" className="me-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="p-2 flex justify-between">
                                <label htmlFor="password" className="me-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Login
                            </button>
                        </form>
                    </div>

                    <div className="register-container">
                        <p>Don't have an account?
                            <a>
                                <Link to="/register">Register here</Link>
                            </a>
                        </p>
                    </div>
                </div>

            </div >
        </>
    );
};