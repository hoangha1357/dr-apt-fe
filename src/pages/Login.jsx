import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./../assets/img/logo.png";
import { createNotification } from "./../utils/Notification";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username,
            password,
        };
        fetch("https://doctor-apt-service.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "cors",
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                if (data?.message === "Fail") {
                    createNotification("error", "Sai thông tin tài khoản hoặc mật khẩu");
                    return;
                }
                createNotification("success", "Đăng nhập thành công");
                // TODO: put to redux
                console.log(data);
                navigate('/');
            })
            .catch((err) => {
                createNotification("error", "Đăng nhập thất bại");
            });
    };

    return (
        <div className="login-container">
            <div className="backgr">
                <div className="container">
                    <div className="container_left active-left">
                        <div className="image1"></div>
                    </div>
                    <div className="container_right">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <form action="#" className="form" onSubmit={handleLogin}>
                            <div className="form-inner">
                                <div className="welcome">
                                    <h1 className="text">Online Booking</h1>
                                </div>
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        id="username2"
                                        placeholder=" "
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label>UserName</label>
                                </div>
                                <div className="form-group2">
                                    <div className="pass-box">
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder=" "
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label>Password</label>
                                        <div className="eye">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="remember">
                                    <div>
                                        <input type="checkbox" /> <span>Remember me</span>
                                    </div>
                                    <div className="forgot-off">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                            <button className="submit-btn" onClick={handleLogin}>
                                LOGIN
                            </button>
                            <div className="forgot-active">
                                <a href="#">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
