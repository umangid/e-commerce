import React, { useEffect, useState } from "react";
import './css/pages.css'
import { useNavigate } from "react-router-dom";
function Login() {
    const uName = "Admin"
    const pass = "1234"

    const [loginUname, setLoginUname] = useState();
    const [loginPass, setLoginPass] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const navigate = useNavigate();

    const { localStorage } = window;

    useEffect(() => {
        localStorage.setItem("isAuthenticated", false)
        setIsButtonDisabled(false)
    }, []);

    const checkLogin = (e) => {
        // alert(loginUname)
        // alert(loginPass)
        e.preventDefault();
        if (uName === loginUname && pass === loginPass) {
            localStorage.setItem("isAuthenticated", true)
            setIsButtonDisabled(true)
            setTimeout(() => {
                navigate("/Dashboard")
            }, 2000)

        } else {
            alert("Invalid")
        }
    }
    return (
        <div className="login">
            <form onSubmit={checkLogin}>
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
                <button disabled={isButtonDisabled}
                    type="submit"
                    className="LoginButton">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;