import React, {useState,useEffect} from 'react'
import { Pet, Shelter } from '../requests';
import {withRouter} from 'react-router'

const NewPetForm = (props) => {
  const [shelters, setShelters] = useState([])
  const [image, setImage] = useState(null);
  useEffect(() => {
    Shelter.index()
      .then((data) => {
        setShelters(data)
      })
  }, [])

  const createPet = (params) => {
    Pet.create(params)
    .then((pet) => {
      if (pet.id) {
        props.history.push(`/pets/${pet.id}`)
      } else {
        alert('errors');
        console.log(pet);
      } 
    })
  }

      // const baseUrl = "http://localhost:3000/api/v1";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); 

    formData.append("image", image);
    formData.append("is_cat", props.type =='cat' ? true: false);
 
    createPet(formData);
  }
  // }

  const onImageChange = event => {
    setImage(event.target.files[0])
  }


  return (
    <>
    <h1>{props.type =='dog' ? 'Dog' : null}</h1>
    <h1>{props.type =='cat' ? 'Cat' : null}</h1>
    <form onSubmit={handleSubmit} >
      <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />      
      <div>
        <label htmlFor="name">Name</label><br />
        <input type="string" name="name" id="name" /><br />
      </div>
      <div>
        <label htmlFor="age">Age</label><br />
        <input type="integer" name="age" id="age" value="age"/>year old<br />
      </div>
      <div>
        <label htmlFor="gender">Gender</label><br />
        <input type="radio" value="female" name="gender" id="gender1"/>Female<br />
        <input type="radio" value="male" name="gender" id="gender2"/>Male<br />
      </div>
      <div>
        <label htmlFor="size">Size</label><br />
        <input type="radio" value="small" name="size" id="size1"/>Small<br />
        <input type="radio" value="medium" name="size" id="size2"/>Medium<br />
        <input type="radio" value="large" name="size" id="size3"/>Large<br />
      </div>
      <div>
        <label htmlFor="hair">Hair Length</label><br />
        <input type="radio" value="short" name="hair" id="hair1"/>Short<br />
        <input type="radio" value="medium" name="hair" id="hair2"/>Medium<br />
        <input type="radio" value="long" name="hair" id="hair2"/>Long<br />
      </div>
      <div>
        <label htmlFor="personality">Personality</label><br />
        <input type="radio" value="very_friendly" name="personality" id="personality1"/>Very Friendly<br />
        <input type="radio" value="easy_going" name="personality" id="personality2"/>Easy Going<br />
        <input type="radio" value="shy" name="personality" id="personality2"/>Shy<br />
      </div>
      <div>
        <label htmlFor="canLiveWithPets">Can Live With other Pets?</label><br />
        <input type="radio" value="true" name="canLiveWithPets" id="canLiveWithPets1"/>Yes<br />
        <input type="radio" value="false" name="canLiveWithPets" id="canLiveWithPets2"/>No<br />
      </div>

      {
        props.type==='dog'?
        <>
      <div>
        <label htmlFor="activity">Activity</label><br />
        <input type="radio" value="very_active" name="activity" id="activity1"/>Very Active<br />
        <input type="radio" value="active" name="activity" id="activity2"/>Active<br />
        <input type="radio" value="laid_back" name="activity" id="activity3"/>Laid Back<br />
      </div>
      <div>
        <label htmlFor="house_trained">House-trained</label><br />
        <input type="radio" value="true" name="house_trained" id="house_trained1"/>Yes<br />
        <input type="radio" value="false" name="house_trained" id="house_trained2"/>No<br />
      </div>
        </>
        : null
      }
      <div>
        <label htmlFor="special_needs">Special Needs</label><br />
        <input type="radio" value="true"  name="special_needs" id="special_needs1"/>Yes<br />
        <input type="radio" value="false" name="special_needs" id="special_needs2"/>No<br />
      </div>
      <div>
        <label htmlFor="sprayed_neutered">Sprayed/Neutered</label><br />
        <input type="radio" value="true"  name="sprayed_neutered" id="sprayed_neutered1"/>Yes<br />
        <input type="radio" value="false" name="sprayed_neutered" id="sprayed_neutered2"/>No<br />
      </div>
      <div>
        <label htmlFor="vaccinated">Vaccinated</label><br />
        <input type="radio" value="true"  name="vaccinated" id="vaccinated1"/>Yes<br />
        <input type="radio" value="false" name="vaccinated" id="vaccinated2"/>No<br />
      </div>
      <div>
        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" id="description"/><br />
      </div>


      <div>
        <h3>Shelter Name</h3>
        {/* {shelters.map((e)=> {
          return(
            <div key={e.id}>
            <input type="radio" value={e.id} name="shelter" id="shelter"/>
            <label htmlFor="shelter">{e.name}</label><br />
            </div>
              )
        })} */}
        <select name="shelter_id">
          {
            shelters.map(e=>{
              return <option value={e.id}>{e.name}</option>
            })
          }
        </select>
      </div>


      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
    </>
  )
}
export default withRouter(NewPetForm)
