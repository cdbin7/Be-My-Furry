import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import email from '../imgs/email_icon.png'
import phone from '../imgs/211829_telephone_icon.png'
import AuthContext from '../context/auth-context';

export default function WelcomePage(props) {
  console.log(props.currentUser);
 
  
  return (

    <div className="welcomePage">
      {/* <h1>Welcome to Be My Furry!</h1> */}

      <AuthContext.Consumer>
        {context => context.user ? 
      <div className="survey-container">
        <h2 style={{marginBottom:'2'}}>Get personalized pet matches on Furry House</h2>
        <small>Answer a few quick questions to find your future best friend</small><br/>
        <br/><Link className="survey-icon" to='/pets-survey'>Get Started</Link>
      </div>
      :
      <div className="survey-container">
        <h2>Get personalized pet matches on Furry House</h2>
        <Link className="survey-icon" onClick={()=> {alert("Oops! Please sign in first!")}} to='/sign_in'>Get Started</Link>
      </div>
      }
      </AuthContext.Consumer>
      
      <div className="find-container">
        <Link className="find-icon icon-dog" to='/pets-index/0'>Find my dog </Link>
        
        <Link className="find-icon icon-cat" to='/pets-index/1'> Find my cat</Link>
      </div>
      <div className="contact-container">
        <h4 style={{margin: 0}}>Contact</h4>
        <img className="contact-icon" src={email} alt="email"/> info@bemyfurry.com
        <img className="contact-icon" src={phone} alt="email"/> (604)-123-1234
      </div>
    </div>
        )
}
