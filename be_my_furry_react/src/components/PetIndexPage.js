import React, {useState, useEffect} from 'react'
import { Pet, Survey } from '../requests'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton';

export default function PetIndexPage(props) {
  const [pets, setPets] = useState([])
 
  useEffect(()=> {
    if (props.location?.state) {
      Survey.index(props.location.state.params, props.match.params.type)
      .then((data) => {
        console.log(data);
        setPets(data);
      })
    } else if(props.match?.params.type) {
          Pet.index(props.match.params.type)
      .then((data) => {
        // console.log(data);
        setPets(data)
      })
    }else{
      setPets(props.likes)
    }
    
    },[props.match?.params.type, props.likes])

  //   Pet.index(props.match.params.type)
  //     .then((data) => {
  //       // console.log(data);
  //       setPets(data)
  //     })
  // }, [props.match.params.type])

  const handleAge = (age) => {
    if (age == 0) {
      return 'New Born'
    } else if (age <= 2) {
      return 'Young'
    } else if (age <= 6){
      return 'Adult'
    } else {
      return 'Old'
    } 
  }


  return (
    <div className="petIndexPage">
      {pets.map((e)=> {
        return(
          <div className="card">
            <div key={e.id}>
              <img style={{height:"250px",width:"100%", borderRadius:"10px"}} src={"http://localhost:3000/"+e.image} alt="dog" />
              <div className="pet-index-info-container">
                <div className="petName-likeButton">
                  <h1> <Link className="pet-name" to={`/pets/${e.id}`}>{e.name}</Link>
                  </h1>
                  <LikeButton pet_id={e.id}/>

                </div>
                
                <h2>{handleAge(e.age)} | {e.gender} | {e.size} size </h2>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
