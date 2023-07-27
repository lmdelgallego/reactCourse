import {render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
describe('GifGrid', () => {

  const category = 'One Punch';
  test('should be show loading', () => {
    render(<GifGrid category={category} />)
    screen.debug();
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });

  test('should be show items when images are loaded useFetchGifs', () => {

  });
});