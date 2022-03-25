import React,{useState} from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import PetSurveyForm from './PetSurveyForm'


export default function PetSurveyPage() {
  const [type, setType] = useState('');

  return (
    <div className="pet-survey-page">
      <div>
        <h1 className="survey-header">Let's find your best friend for you!</h1>
        <h2 className="survey-header">Would you like to adopt a dog or a cat?</h2>
        <div className="survey-type-container">
          <button className="survey-type survey-dog" onClick={()=>setType('dog')}>Dog</button>
          <button className="survey-type survey-cat" onClick={()=>setType('cat')}>Cat</button>
        </div>
      </div>
      <div className="surveyFormPage">
        {type ? <PetSurveyForm type={type}/> : null}
      </div>
    </div>
  )
}
