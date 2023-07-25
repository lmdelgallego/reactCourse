import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { gifs, loading } = useFetchGifs(category)

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