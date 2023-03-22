import React from 'react'

const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="post-cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </>
  )
}

export default Post