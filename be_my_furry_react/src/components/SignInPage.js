import React, {useState} from 'react'
import {Session} from '../requests';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={event => {
          setEmail(event.currentTarget.value);
        }} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={event => {
          setPassword(event.currentTarget.value);
        }} />
      </div>
      <input type="submit" value="Sign In" />
    </form>
  )
}
