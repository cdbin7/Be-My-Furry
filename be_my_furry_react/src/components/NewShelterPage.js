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
    <>
      <h1>Shelter Information</h1>
      <form onSubmit={handleSubmit} createShelter={createShelter}>
      <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <br />
        </div>
        <div>
          <label htmlFor="location">Address</label>
          <input type="text" name="location" id="location" />
          <br />
        </div>
        <div>
          <input type="submit" value="save"/>
        </div>
      </form>
    </>
  )
}
