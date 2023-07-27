import PropsTypes from 'prop-types';
import { useState } from "react"

function AddCategory({ onNewCategory }) {

  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 2) return;
    onNewCategory( inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
  onNewCategory: PropsTypes.func.isRequired
}