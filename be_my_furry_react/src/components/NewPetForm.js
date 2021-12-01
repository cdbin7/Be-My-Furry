import React, {useState} from 'react'
import { Pet } from '../requests';
import {withRouter} from 'react-router'
// import {useForm} from "react-hook-form";

const NewPetForm = (props) => {
  console.log(props);
  

  const createPet = (params) => {
    Pet.create(params)
    .then((pet) => {
      if (pet.id) {
        props.history.push(`/pets/${pet.id}`)
      } else {
        alert('errors');
      } 
    })
  }

      // const baseUrl = "http://localhost:3000/api/v1";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); 
    // formData.append("image",image);
  //   formData.append("name", props.name);
  //   formData.append("age", props.age);
  //   formData.append("gender", props.gender);
  //   formData.append("size", props.size);
  //   formData.append("hair", props.hair);
  //   formData.append("personality", props.personality);
  //   formData.append("canLiveWithPets", props.canLiveWithPets);
  //   formData.append("activity", props.activity);
  //   formData.append("house_trained", props.house_trained);
  //   formData.append("special_needs", props.special_needs);
  //   formData.append("sprayed_neutered", props.sprayed_neutered);
  //   formData.append("vaccinated", props.vaccinated);
  //   formData.append("description", props.description);
  //   formData.append("shelter_id", 1);

  //   console.log(formData);
    
  //   fetch(`${baseUrl}/pets`, {
  //     method: "POST",
  //     body: formData
  //   })
  //   .then(res => res.json())
  //   .then((pet)=> {
  //     props.history.push(`/pets/${pet.id}`)
  //   })
    
  // }
    const params = {
      name: formData.get("name"),
      // image: formData.get("image"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      size: formData.get("size"),
      hair: formData.get("hair"),
      personality: formData.get("personality"),
      canLiveWithPets: formData.get("canLiveWithPets"),
      activity: formData.get("activity"),
      house_trained: formData.get("house_trained"),
      special_needs: formData.get("special_needs"),
      sprayed_neutered: formData.get("sprayed_neutered"),
      vaccinated: formData.get("vaccinated"),
      description: formData.get("description"),
      shelter_id: 1
    }
    console.log(params); 
    createPet(params);
  }
  // }

  // const onImageChange = event => {
  //   setImage(event.target.files[0])
  // }


  return (
    <>
    <h1>{props.type =='dog' ? 'Dog' : null}</h1>
    <h1>{props.type =='cat' ? 'Cat' : null}</h1>
    <form onSubmit={handleSubmit} >
      {/* <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />       */}
      <div>
        <label htmlFor="name">Name</label><br />
        <input type="string" name="name" id="name" /><br />
      </div>
      <div>
        <label htmlFor="age">Age</label><br />
        <input type="integer" name="age" id="age"/>year old<br />
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
        <input type="radio" value="easy" name="personality" id="personality2"/>Easy Going<br />
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
        <label htmlFor="shelter">Shelter Name</label><br />
        <input type="text" name="shelter" id="shelter"/><br />
      </div>


      <div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
    </>
  )
}
export default withRouter(NewPetForm)
