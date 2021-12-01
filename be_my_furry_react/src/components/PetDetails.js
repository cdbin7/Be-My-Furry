import React from 'react'


export default function PetDetails(props) {
  console.log(props);
  return (
    <>
        <img src={props.image} alt="dog" />
        <h2>{props.name}</h2>
        <ul>
          <li>
          {props.age}
          </li>
          <li>
          {props.gender}
          </li>
          <li>
          {props.activity}
          </li>
          <li>
          {props.hair}
          </li>
          <li>
            {props.special_needs}
          </li>
          <li>
            {props.personality}
          </li>
          <li>
            {props.sprayed_neutered}
          </li>
          {
            props.is_cat ? 
              <>
            <li>
              {props.canLiveWithPets}
            </li>
            <li>
              {props.house_trained}
            </li>
            </>
            :
            null
          }
          <li>
            {props.vaccinated}
          </li>
          <li>
            {props.shelter_id}
          </li>

        </ul>
    </>
  )
}
