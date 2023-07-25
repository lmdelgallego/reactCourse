import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

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
        <ol>
          {
            gifs.map(gif => (
              <li key={gif.id}>
                <h5>{gif.title}</h5>
                <img src={gif.url} alt={gif.title} />
              </li>
            ))
          }
        </ol>
      </div>
    </>
  )
}

export default GifGrid