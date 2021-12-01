import React, {useState} from 'react'
// import "./styles.css"

export default function LikeButton() {
  const [like, setLike] = useState(false)


  return (
    <div className="like">
      <h2 onClick={() => setLike((prevState) => !prevState)}>
        {like ? "❤️" : "♡"}
      </h2>
    </div>
  )
}
