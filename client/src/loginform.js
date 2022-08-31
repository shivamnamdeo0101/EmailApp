// import React, { useState } from "react";

// import "./login.css";

// const LoginForm = () => {

//   const[email,setEmail] = useState("");
//   const[password,setPassword] = useState("");
  
//   const[allEntry, setAllEntry] = useState([]);

//   const submitForm = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     const newEntry = { email: email, password: password };
//     setAllEntry([ ...allEntry, newEntry]);
//     console.log(allEntry);
//   }

// return(
//   <>
//   <form action ="" onSubmit={submitForm} >

             
//         <div className="title">Sign In</div>

//         <div className="loginform">
//           <label>Gmail </label>
//           <input type="text" name="email" autoComplete="off"
//           value ={email}
//           onChange={(e) => setEmail(e.target.value)}
//             />
//         </div>

//          <div className="loginform">
//           <label>Password </label>
//           <input type="password" name="password" autoComplete="off"
//            value ={password}
//            onChange={(e) => setPassword(e.target.value)}
//              />
//         </div>

//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//       </>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com";

function LoginForm() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);

        fetch('/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "name":"Sonal Lashlkare",
                "email":"sonal@gmail.com"
            }
           });
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const make_req = ()=>{
        fetch('http://localhost:3001/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "name":"Sonal Lashlkare",
                "email":"sonal@gmail.com"
            }
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
        <div>

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
            }
        </div>
    );
}
export default LoginForm;