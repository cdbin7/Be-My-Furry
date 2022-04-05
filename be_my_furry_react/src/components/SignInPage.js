import React, {useState} from 'react'
import {Session} from '../requests';
import logo from '../imgs/3204597_animal_domestic_footstep_pet_wild_icon.png'


export default function SignInPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      email: email,
      password: password
    }
    Session.create(params).then(data => {
      if(data.id){
        props.onSignIn()
        props.history.push('/')
      }
    })
  }

  return (
    <div className="sign-in-page">
      <form onSubmit={handleSubmit} className="sign-in-container">
      <img className="sign-in-logo" src={logo} alt="logo"/>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input className="sign-in-input" type="text" name="email" id="email" onChange={event => {
            setEmail(event.currentTarget.value);
          }} /> 
        </div> 
        <div>
          <label htmlFor="password">Password</label><br/>
          <input className="sign-in-input"  type="password" name="password" id="password" onChange={event => {
            setPassword(event.currentTarget.value);
          }} />
        </div>
        
        <input className="sign-in-submit"  type="submit" value="Sign In" />
      </form>
    </div>
  )
}
