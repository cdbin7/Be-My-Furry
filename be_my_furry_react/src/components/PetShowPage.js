import React, {useState, useEffect} from 'react'
import { Pet } from '../requests'
import PetDetails from './PetDetails'

export default function PetShowPage(props) {
  const [pet, setPet] = useState({});

  useEffect(()=> {
    refreshPet();
  }, [])

  const refreshPet = () => {
    Pet.show(props.match.params.id)
    .then((data) => {
      console.log(data);
      setPet(data)
    })
  }


  const {description, name, age, gender, size, activity, hair, special_needs, personality, sprayed_neutered, shelter, canLiveWithPets, house_trained, vaccinated, is_cat} = pet
  return (
    <div className="petShowPageContainer">
      <PetDetails
        image={pet.image}
        name={name}
        age={age}
        gender={gender}
        size={size}
        activity={activity}
        hair={hair}
        special_needs={special_needs}
        personality={personality}
        sprayed_neutered={sprayed_neutered}
        shelter_id={shelter}
        canLiveWithPets={canLiveWithPets}
        house_trained={house_trained}
        vaccinated={vaccinated}
        is_cat={is_cat}
        description={description}
      />
    </div>
  )
}
