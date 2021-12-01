import React,{useState} from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import PetSurveyForm from './PetSurveyForm'


export default function PetSurveyPage() {
  const [type, setType] = useState('');

  return (
    <>
    <div>
      <h1>Let's find your best friend for you!</h1>
      <button onClick={()=>setType('dog')}>Dog</button>
      |
      <button onClick={()=>setType('cat')}>Cat</button>
    </div>

    {type ? <PetSurveyForm type={type}/> : null}
    </>
  )
}
