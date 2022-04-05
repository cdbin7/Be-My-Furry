import React from 'react'
import { Session, User } from '../requests'
import logo from '../imgs/3204597_animal_domestic_footstep_pet_wild_icon.png'


export default function SignUpPage(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get('email'),
      address: formData.get('address'),
      password: formData.get('password'),
      password_confirmation: formData.get("password_confirmation")
    }
    User.create(params).then(user => {
      if(user?.id)
        props.onSignUp()
        props.history.push('/')
    })
  }


  return (
    <div className="sign-in-page">
    <form onSubmit={handleSubmit} className="sign-up-container">
    <img className="sign-up-logo" src={logo} alt="logo"/>
      <div>
          <label htmlFor="first_name">First Name</label><br/>
          <input className="sign-up-input" type="text" name="first_name" id="first_name" />   
      </div>
      <div>
          <label htmlFor="last_name">Last Name</label><br/>
          <input className="sign-up-input" type="text" name="last_name" id="last_name" />   
      </div>
      <div>
          <label htmlFor="email">Email</label><br/>
          <input className="sign-up-input" type="text" name="email" id="email" />   
      </div>
      <div>
          <label htmlFor="address">Address</label><br/>
          <input className="sign-up-input" type="text" name="address" id="address" />   
      </div>
      <div>
          <label htmlFor="password">Password</label><br/>
          <input className="sign-up-input" type="password" name="password" id="password" />   
      </div>
      <div>
          <label htmlFor="password_confirmation">Password Confirmation</label><br/>
          <input className="sign-up-input" type="password" name="password_confirmation" id="password_confirmation" />   
      </div>
      <input className="sign-up-submit" type="submit" value="Sign Up" />
    </form>
    </div>
  )
}
