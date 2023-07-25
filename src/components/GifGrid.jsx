import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([])

  async function fetchData() {
    const gifs = await getGifs(category);
    setGifs(gifs);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div key={category}>
        <h3>{category}</h3>
        <div className='card-grid'>
          {gifs.map(gif => (
              <GifItem key={ gif.id } {...gif} />
          ))}
        </div>
      </div>
    </>
  )
}

export default GifGrid