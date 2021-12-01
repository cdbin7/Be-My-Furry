import React, {useState, useEffect} from 'react'
import { Pet } from '../requests'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton';

export default function PetIndexPage(props) {
  console.log(props);
  const [pets, setPets] = useState([])
 
  useEffect(()=> {
    Pet.index(props.match.params.type)
      .then((data) => {
        // console.log(data);
        setPets(data)
      })
  }, [])





  return (
    <div>
      {pets.map((e)=> {
        return(
          <>
          <img src={e.image} alt="dog" />
          <LikeButton />
          <h1 key={e.id} > <Link to={`/pets/${e.id}`}>{e.name}</Link></h1>
          <h2>{props.handleAge(e.age)} | {e.gender} | {e.size} size </h2>
          </>
        )
      })}
    </div>
  )
}
