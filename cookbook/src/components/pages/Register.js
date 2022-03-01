import React, { useState } from 'react';
import axios from 'axios';


const initialFormValues = {
  username: '',
  password: ''
}

const initialFormErrors = {
  username: '',
  password: ''
}

const Register = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const signUp = () => {
    axios
      .post('URL here', {
        username: formValues.username,
        password: formValues.password
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        err.message
      })
  }

  ///validate form

  const onChange = e => {
    //invoke validate(e.target.name, e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    signUp();
  }

return (
  <form className='form-container-signup' onSubmit={onSubmit}>
    <div className='form-title'>
      <h1>Sign Up</h1>
    </div>
    <div className='errors-container'>
      <div>{formErrors.username}</div>
      <div>{formErrors.password}</div>
    </div>
    <div className='form-group'>
      <input
        name='username'
        type='text'
        placeholder='Username...'
        onChange={onChange}
        required
      />
      <input
        name='password'
        type='text'
        placeholder='Password...'
        onChange={onChange}
        required
      />
    </div>
    <div className='submit'>
      <button className='submit-btn'>Sign Up</button>
      <p>
        Already have an account? <a href='/login'>Login</a>
      </p>
    </div>
  </form>
)
}

export default Register;