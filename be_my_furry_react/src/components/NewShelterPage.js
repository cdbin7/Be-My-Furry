import React from 'react'
import {Shelter} from '../requests'

export default function NewShelterPage(props) {
  console.log(props);
  const createShelter = (params) => {
    Shelter.create(params)
      .then((shelter)=> {
        props.history.push(`/shelters`)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      name: formData.get("name"),
      location: formData.get("location")
    }
    console.log(params);
    createShelter(params)
  }

  return (
    <div className="shelter-index-page">
      <h1 className="newShelterForm">Shelter Information</h1>
      <form className="newShelterForm" onSubmit={handleSubmit} createShelter={createShelter}>
      <div>
          <h3 style={{marginBottom:'0'}}><label htmlFor="name">Name</label></h3>
          <input style={{paddingRight:'250px'}} type="text" name="name" id="name" />
          <br />
        </div>
        <div>
          <h3 style={{marginBottom:'0'}}><label htmlFor="location">Address</label></h3>
          <input style={{paddingRight:'250px'}} type="text" name="location" id="location" />
          <br />
        </div>
        <div>
          <input className="shelterSubmit" type="submit" value="save"/>
        </div>
      </form>
    </div>
  )
}
