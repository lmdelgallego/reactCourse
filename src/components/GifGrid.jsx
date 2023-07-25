import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

  useEffect(() => {
    getGifs(category);
  }, [])

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