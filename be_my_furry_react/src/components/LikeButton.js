import React, {useState, useEffect} from 'react'
import {Like} from '../requests'
// import "./styles.css"

export default function LikeButton(props) {
  const [like, setLike] = useState(false)

  useEffect(() => {
    Like.is_liked(props.pet_id).then(data=>{
      // console.log(data);
      if (data.id?.length) {
        setLike(data.id[0].id)
      }
    })
  }, [])
  // console.log(props);

  const createLike =()=>{
    Like.create(props.pet_id)
    .then((data) => {
      if (data.id) {
        setLike(data.id)
      }
  })
  }

  const deleteLike =() => {
    Like.destroy(like)
    .then((data) => {
      setLike(false)
    })
  }

  return (
    <div className="like-button-container">
      <h2 onClick={() => {like ? deleteLike() : createLike()}}>
        {like ? "❤️" : "♡"}
      </h2>
    </div>
  )
}
