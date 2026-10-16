import axios from "axios";
import { useEffect, useState } from "react";
import {
    FaCalendarAlt,
    FaEnvelope,
    FaEye,
    FaClock,
    FaLeaf,
    FaUser
} from "react-icons/fa";
import { data, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API = "http://localhost:3000/employees";
    const [data,setData] = useState([]);
    const navigate = useNavigate();

    useState(()=>{
        axios.get(API).then((res)=>{
            setData(res.data);
        })
    },[]);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        data.map((element)=>{
            if(element.email==email && element.password==password){
                localStorage.setItem("token",element.id);
                navigate("/");
            }
        })
    }
    return (

        <div className="page-container">
            <div className="login-container container">
                {/* Left Side */}
                <div className="left-panel">
                    <div className="brand">
                        <FaCalendarAlt className="brand-icon" />
                        <div>
                            <h2>LeavePro</h2>
                            <p>Employee Leave Management System</p>
                        </div>
                    </div>

                    <div className="illustration">
                        <div className="sun-circle"></div>
                        <FaClock className="clock-icon" />

                        <div className="calendar-illustration">
                            <div className="calendar-top"></div>
                            <div className="calendar-grid">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <span key={i}></span>
                                ))}
                            </div>
                        </div>

                        <div className="plant">
                            <FaLeaf />
                            <FaLeaf />
                            <FaLeaf />
                        </div>

                        <div className="person">
                            <div className="person-hair"></div>
                            <div className="person-head"></div>
                            <div className="person-body"></div>
                        </div>

                        <div className="laptop"></div>
                        <div className="desk"></div>
                    </div>

                    <div className="left-description">
                        Manage your leaves,
                        <br />
                        track your balance and
                        <br />
                        keep your work-life balance.
                    </div>
                </div>

                {/* Right Side */}
                <div className="right-panel">
                    <div className="welcome-text">
                        <h3>Welcome Back!</h3>
                        <p>Login to your account to continue</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <div className="input-group custom-input">
                                <span className="input-group-text">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group custom-input">
                                <span className="input-group-text">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <span className="input-group-text eye-icon">
                                    <FaEye />
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary login-button"
                        >
                            Login
                        </button>

                        <p className="contact-text">
                            Don't have an account?{" "}
                            <a href="#contact">Contact your HR</a>
                        </p>
                    </form>

                    {/* Demo Accounts */}
                    <div className="demo-box">
                        <div className="demo-heading">Demo Accounts</div>

                        <div className="demo-account">
                            <div className="avatar">
                                <FaUser />
                            </div>
                            <div>
                                <h6>Employee Login</h6>
                                <p>employee@company.com / 123456</p>
                            </div>
                        </div>

                        <div className="demo-account">
                            <div className="avatar">
                                <FaUser />
                            </div>
                            <div>
                                <h6>Manager Login</h6>
                                <p>manager@company.com / 123456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;