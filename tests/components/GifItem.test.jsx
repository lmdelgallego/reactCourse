import { render } from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';
describe('GifItem', () => {

  const url = 'https://localhost/algo.jpg';
  const title = 'Un titulo';

  test('should be match with snapshot', () => {

    const { container } = render(<GifItem title={ title } url={url} />)
    expect(container).toMatchSnapshot();
  });
});