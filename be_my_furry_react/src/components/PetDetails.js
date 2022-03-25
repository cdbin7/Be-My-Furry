import React from 'react'


export default function PetDetails(props) {
  console.log(props);
  return (
    <>
        <img style={{height:"300px",width:"300px"}} src={"http://localhost:3000/"+props.image} alt="dog" />
        <h2>{props.name}</h2>
        <ul>
          <li>
          Age: {props.age}
          </li>
          <li>
          Size: {props.size}
          </li>
          <li>
          Gender: {props.gender}
          </li>
          <li>
          Hair-length: {props.hair}
          </li>
          <li>
            {props.special_needs ? "Special Needs: Yes" : "Special Needs: No"}
          </li>
          <li>
            Personality: {props.personality}
          </li>
          <li>
            Sprayed/Neutered: {props.sprayed_neutered? "Yes" : "No"}
          </li>
          {
            props.is_cat ? 
            null
            :
            <>
            <li>
              Activity-Level: {props.activity}
            </li>
            <li>
              Can Live with other Pets? : {props.canLiveWithPets? "Yes" : "No"}
            </li>
            <li>
              House Trained: {props.house_trained? "Yes" : "No"}
            </li>
            </>
          }
          <li>
            Vaccinated: {props.vaccinated? "Yes" : "No"}
          </li>
          <li>
            Shelter: {props.shelter_id?.name}
          </li>

        </ul>
    </>
  )
}
