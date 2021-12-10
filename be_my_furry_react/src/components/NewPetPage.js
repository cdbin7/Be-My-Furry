import React, {useState} from 'react'
import NewPetForm from './NewPetForm'


export default function NewPetPage() {
  const [type, setType] = useState('');

  return (
    <div className="newPetPage">
      <div className="pet-type-container">
        <button className="survey-type survey-dog" onClick={()=>setType('dog')}>Dog</button>
        <button className="survey-type survey-cat" onClick={()=>setType('cat')}>Cat</button>
      </div>
      <div className="newPetFormPage">
        {type ? <NewPetForm type={type}/> : null}
      </div>
    </div>
  )
}
