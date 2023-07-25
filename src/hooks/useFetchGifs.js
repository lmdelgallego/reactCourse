import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return {
    gifs,
    loading
  }
}