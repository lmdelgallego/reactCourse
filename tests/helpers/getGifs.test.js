import { getGifs } from "../../src/helpers/getGifs";

process.env = {
  VITE_GIPHY_API_KEY: 'fake-api-key'
};
mockJson = jest.fn()
global.fetch = jest.fn(() => Promise.resolve({
  json: () => mockJson()
}));

describe('getGifs.test', () => {

  test('should return 10 elements', async () => {
    const resolve = Promise.resolve({
      data: [
        {
          id: 'fake-id',
          title: 'fake-title',
          images: {
            downsized_medium: {
              url: 'fake-url'
            }
          }
        }
      ]
    });

    mockJson.mockReturnValueOnce(resolve);
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

  test('should return 0 elements', async () => {
    const resolve = Promise.resolve({
      data: []
    });
    mockJson.mockReturnValueOnce(resolve);
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});