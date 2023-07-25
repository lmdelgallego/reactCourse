import React from 'react'

const GifGrid = ({ category}) => {
  return (
    <>
      <div key={category}>
        <h3>{category}</h3>
        <li>{category}</li>
      </div>
    </>
  )
}

export default GifGrid