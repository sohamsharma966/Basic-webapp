// this will be our login page.
import React from 'react'
import {useState,useEffect} from 'react' // form fields
import {FaSignInAlt} from "react-icons/fa"

function Login() {
  const[formData, setFormData]=useState({ // [formdata, setformdata] is object
    email: "",
    password: "",
  })

  const{email,password}=formData

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
      e.preventDefault()
  }

  return <>
    <section className='heading'>
      <h1>
        <FaSignInAlt />Login
      </h1>
      <p>Login and start setting goals</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input // form field 2
            type="text" 
            className='formControl'
            id='email' 
            name='email' 
            value={email} // the value mention above after const.
            placeholder='Enter email' 
            onChange={onChange} // function onchange()
          />
        </div>
        <div className='form-group'>
          <input // form field 3
            type="text" 
            className='formControl'
            id='password' 
            name='password' 
            value={password} // the value mention above after const.
            placeholder='Enter password' 
            onChange={onChange} // function onchange()
          />
        </div>
        <div className="form-group">
          <button type="submit" className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
}

export default Login