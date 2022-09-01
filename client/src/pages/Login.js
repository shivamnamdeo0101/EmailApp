
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "../App.css";

const clientId = "101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);

        fetch('/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "name":"Shivam",
                "email":"shivam@gmail.com"
            }
           });
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const make_req = ()=>{
        fetch('/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name":"Shivam Namdeo",
                "email":"shivam@gmail.com"
            })
           })
           .then(res=>console.log(res))
    }
    const onLoginFailure = (res) => {

       
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className='page'>
            <h2>Login  </h2>
            <form className='form_page'>
                <div className='form_comp'>
                    <label>Enter Email</label>
                    <input type="email" placeholder='Enter your email' name="email"/>
                </div>
                
                <div className='form_comp'>
                    <label>Enter Password</label>
                    <input type="password" placeholder='Enter your password' name="password"/>
                </div>
                <div className='form_comp'>
                    <button>Login</button>
                </div>
                <div className='form_comp'>
                    <div className='form_link'>
                      <p>Don't have any account? </p>
                      <a href="/signup">Signup here</a>
                    </div>
                    
                </div>
            </form>
            
{/*             
            <button onClick={()=>make_req()}>Button</button>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}
        </div>
    );
}
export default Login;