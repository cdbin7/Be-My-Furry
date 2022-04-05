import React, {useEffect, useState} from 'react'
import { Shelter } from '../requests';
import shelter from '../imgs/shelter3.jpg'


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
    <div className="shelter-index-page">
      <div className="shelter-header">
        <h1 className="shelter-image">Shelter List</h1>
      </div>
      {/* <img className="shelter-image" src={shelter} alt="shelter"></img> */}
      {shelters.map((e)=> {
        return(
          <div className="shelter-info-container" key={e.id}>
            <h1 style={{marginBottom:0}}>{e.name}</h1>
            <h3>{e.location}</h3>
            <button className="shelterDeleteButton" onClick={()=>handleDelete(e.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
