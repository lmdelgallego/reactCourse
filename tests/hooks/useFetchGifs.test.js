import { renderHook, waitFor, act } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { getGifs } from '../../src/helpers/getGifs'

jest.mock('../../src/helpers/getGifs');

describe('useFetchGifs', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { gifs, loading } = result.current;
    expect(gifs.length).toBe(0);
    expect(loading).toBe(true);
  });

  test('should return an array of images and loading in false', async () => {
    getGifs.mockReturnValue(Promise.resolve([{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }]));

    const { result } = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
      // { timeout: 5000 },
    );

    const { gifs, loading } = result.current;
    expect(gifs.length).toBe(1);
    expect(loading).toBe(false);
  });

});