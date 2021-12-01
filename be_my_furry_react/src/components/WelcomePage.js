import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'

export default function WelcomePage() {
  
  return (
    <>
      <h1>Welcome to Be My Furry!</h1>
      <div>
        <h2>Find the best pet matches on Furry House</h2>
        <Link to='/pets-survey'>Get Started</Link>
      </div>
      
      <div>
        <Link to='/pets-index/0'>Find my dog </Link>
        | 
        <Link to='/pets-index/1'> Find my cat</Link>
      </div>
      
    </>
  )
}
