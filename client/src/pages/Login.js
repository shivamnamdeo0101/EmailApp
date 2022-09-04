import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "../App.css";
import { useNavigate } from "react-router-dom";
const clientId = "101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();
  const [user_data, setuser_data] = useState({});
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);


  

  const onLoginSuccess = (res) => {
    console.log("Login Su   ccess:", res.profileObj);

    setuser_data(res.profileObj);

    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setuser_data({
      ...user_data,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    fetch("/users/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user_data.email,
          password:user_data.password
        }),
      }).then((res) => {
        if(res.status){
          navigate("/dashboard")
        }else{
          alert("Email and password are incorrect.")
        }
      });
     
  };
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  console.log(user_data);

  return (
    <div className="page">
      <h2>Login </h2>
      <form className="form_page" onSubmit={handleLogin}>
        <div className="form_comp">
          <label>Enter Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={user_data.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form_comp">
          <label>Enter Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={user_data.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form_comp">
          <button type="submit">Login</button>
        </div>

        <div className="form_comp">
          <div className="form_link">
            <p>Don't have any account? </p>
            <a href="/signup">Signup here</a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
