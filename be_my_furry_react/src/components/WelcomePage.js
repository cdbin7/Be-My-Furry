import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome to Be My Furry!</h1>
      <div>
        <h2>Find the best pet matches on Furry House</h2>
        <button>Get Started</button>
      </div>
      <BrowserRouter>
      <div>
        <Link to='/pets'>Find my dog </Link>
        | 
        <Link to='/pets'> Find my cat</Link>
      </div>
      </BrowserRouter>
    </>
  )
}
