import {render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
describe('GifGrid', () => {

  const category = 'One Punch';
  test('should be show loading', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true
    });
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });

  test('should be show items when images are loaded useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    },
    {
      id: '123',
      url: 'https://localhost/cualquier/goku.jpg',
      title: 'GOKU'
    },];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false
    });
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(gifs.length)
  });
});