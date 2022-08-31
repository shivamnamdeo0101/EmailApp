import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();

  return (
    <div>Login
        <button onClick={()=>navigate("/dashboard")}>Navigate</button>
    </div>
  )
}

export default Login