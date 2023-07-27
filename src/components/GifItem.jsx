import PropsTypes from 'prop-types';

export const GifItem = ({ id, title, url  }) => {
  return (
    <div className='card' >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string.isRequired
}