import React from 'react'
import "../App.css";
import GoogleLogin from 'react-google-login';

const Login = () => {

  const onLoginSuccess = (e)=>{

    console.log(e)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": e.profileObj.name,
  "email": e.profileObj.email,
  "contact": [
    
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/users/signup", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  const onLoginFailure = (e)=>{
      console.log(e)
  }

  return (
    <div className='page'>
          <GoogleLogin
              clientId={"101232111464-m9pm4j1mha6q70pgbhicl067an5062dj.apps.googleusercontent.com"}
              buttonText="Login with Google"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              
            />
    </div>
  )
}

export default Login