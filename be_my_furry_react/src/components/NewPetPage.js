import React, {useState} from 'react'
import NewPetForm from './NewPetForm'


export default function NewPetPage() {
  const [type, setType] = useState('');

  return (
    <>
    <div>
      <button onClick={()=>setType('dog')}>Dog</button>
      |
      <button onClick={()=>setType('cat')}>Cat</button>
    </div>
    {type ? <NewPetForm type={type}/> : null}

    </>
  )
}
