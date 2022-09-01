import React, { useEffect, useState } from "react";
import './css/pages.css'
import { useNavigate } from "react-router-dom";
function Login() {
    const uName = "Admin"
    const pass = "1234"
    const [loginUname, setLoginUname] = useState();
    const [loginPass, setLoginPass] = useState();

    const navigate = useNavigate();

    const { localStorage } = window;

    useEffect(() => {
        localStorage.setItem("isAuthenticated", false)
    }, []);

    const checkLogin = () => {
        // alert(loginUname)
        // alert(loginPass)
        const uName = "Admin"
        if (uName === loginUname && pass === loginPass) {
            localStorage.setItem("isAuthenticated", true)
            navigate("/Dashboard")

        } else {
            alert("Invalid")
        }
    }
    return (
        <div className="login">
            <h2 className="loginHeader">Login</h2>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setLoginUname(e.target.value)}
                className="loginInput"
            ></input><br></br>
            <input
                type="text"
                placeholder="Password"
                onChange={(e) => setLoginPass(e.target.value)}
                className="loginInput"
            ></input><br></br>
            <button onClick={checkLogin}
                className="LoginButton">
                Login
            </button>
        </div>
    );
}

export default Login;