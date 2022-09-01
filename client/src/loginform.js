
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com";

function LoginForm() {

    const [user_data, setuser_data] = useState({});

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
        <div className=''>


                


            
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
export default LoginForm;