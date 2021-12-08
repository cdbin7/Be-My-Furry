import React, {useEffect, useState} from 'react'
import { Shelter } from '../requests';

export default function ShelterIndexPage() {
  const [shelters, setShelters] = useState([]);

  useEffect(()=> {
    refreshShelter();
  }, [])

  const refreshShelter =()=> {
    Shelter.index()
    .then((data) => {
      setShelters(data);
    })
  }

  const handleDelete =(sid) => {
    Shelter.destroy(sid)
      .then(() => {
        refreshShelter()
      })

  }

  return (
    <>
      {shelters.map((e)=> {
        return(
          <div key={e.id}>
            <h1>{e.name}</h1>
            <h3>{e.location}</h3>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}
