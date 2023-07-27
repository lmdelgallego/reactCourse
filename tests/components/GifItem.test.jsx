import { render, screen } from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';
describe('GifItem', () => {

  const url = 'https://localhost/algo.jpg';
  const title = 'Saitama';

  test('should be match with snapshot', () => {
    const { container } = render(<GifItem title={ title } url={url} />)
    expect(container).toMatchSnapshot();
  });

  test('should be have a paragraph with title', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should be have a image with url and alt', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title);
  });
});