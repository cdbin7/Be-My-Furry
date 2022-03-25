import React, {useState, useEffect} from 'react'
import { Like } from '../requests'
import PetIndexPage from './PetIndexPage';

export default function LikedPage() {
  const [likes, setLikes] = useState([])

  useEffect(()=> {
    refreshLiked();
  }, [])

  const refreshLiked=(()=> {
    Like.index()
      .then((data) => {
        console.log(data);
        setLikes(data)
      })
  })

  return (
    <div>
      <PetIndexPage likes={likes} />
    </div>
  )
}
