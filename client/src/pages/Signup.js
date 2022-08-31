import React from 'react'
import "../App.css";

const Signup = () => {
  return (
    <div>
        <form className='form'>
        <div className='form_comp'>
                <label>Name</label>
                <input type="text" placeholder='Enter Name'/>
            </div>
            <div className='form_comp'>
                <label>Email</label>
                <input type="email" placeholder='Enter email'/>
            </div>
            <div className='form_comp'>
                <label>Password</label>
                <input type="password" placeholder='Enter Password'/>
            </div>
            <div className='form_comp'>
                <button>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Signup