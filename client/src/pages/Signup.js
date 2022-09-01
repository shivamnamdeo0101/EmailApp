import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "../App.css";
import { useNavigate } from "react-router-dom";
const clientId =
  "101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com";

function Signup() {

    const navigate = useNavigate();
    const [user_data, setuser_data] = useState({
        password:1234
    });
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setuser_data(res.profileObj)
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const make_req = () => {
    
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

  const handleChange = (e)=>{
    const value = e.target.value;
    setuser_data({
    		...user_data,
    		[e.target.name]: value
  		});
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch("/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user_data.name,
          email: user_data.email,
          password:user_data.password
        }),
      }).then((res) => console.log(res));
      navigate("/dashboard")
  }
  return (
    <div className="page">
      <h2>Sign Up </h2>
      <div className="form_page">
        <div className="form_comp">
          <label>Enter Email</label>
          <input type="email" placeholder="Enter your email" name="email" value={user_data.email} onChange={handleChange}/>
        </div>
        <div className="form_comp">
          <label>Enter Name</label>
          <input type="text" placeholder="Enter your name" name="name" value={user_data.name} onChange={handleChange}/>
        </div>
        <div className="form_comp">
          <label>Enter Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user_data.password}
            onChange={handleChange}
          />
        </div>
        <div className="form_comp">
          <button type="submit" onClick={handleSubmit}>Signup</button>
        </div>
        <div className="form_comp">
          {showloginButton ? (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : null}

          {showlogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </div>
        <div className="form_comp">
          <div className="form_link">
            <p>Already have an account? </p>
            <a href="/">Login here</a>
          </div>
        </div>
      </div>

     
    </div>
  );
}
export default Signup;
