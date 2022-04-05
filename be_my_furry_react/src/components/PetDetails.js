import React from 'react'


export default function PetDetails(props) {
  console.log(props);
  return (
    <div className="petDetailsContainer">
        <img  style={{height:"300px",width:"500px", borderRadius:'10px', border:'2px solid white'}} src={"http://localhost:3000/"+props.image} alt="dog" />
        <h1>{props.name}</h1><hr/>
        <ul>
          <li>
          <strong>Age: </strong> {props.age}
          </li>
          <li>
          <strong>Size:</strong> {props.size}
          </li>
          <li>
          <strong> Gender: </strong>{props.gender}
          </li>
          <li>
          <strong>Hair-length:</strong> {props.hair}
          </li>
          <li>
          <strong>Special Needs: </strong> {props.special_needs ? "Yes" : "No"}
          </li>
          <li>
          <strong>Personality:</strong>{props.personality}
          </li>
          <li>
          <strong>Sprayed/Neutered:</strong> {props.sprayed_neutered? "Yes" : "No"}
          </li>
          {
            props.is_cat ? 
            null
            :
            <>
            <li>
            <strong>Activity-Level: </strong> {props.activity}
            </li>
            <li>
            <strong>Can Live with other Pets? : </strong> {props.canLiveWithPets? "Yes" : "No"}
            </li>
            <li>
            <strong>House Trained: </strong> {props.house_trained? "Yes" : "No"}
            </li>
            </>
          }
          <li>
          <strong>Vaccinated:</strong> {props.vaccinated? "Yes" : "No"}
          </li>
          <li>
            {props.description? "Description: {props.description}" : ""}
          </li>
          <li>
          <strong>Shelter: </strong>{props.shelter_id?.name} - {props.shelter_id?.location}
          </li>
        </ul>
    </div>
  )
}
