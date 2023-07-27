import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";
describe('AddCategory component', () => {

  test('should be change input text', () => {

    render(<AddCategory onNewCategory={() => { }} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama')
    // screen.debug();

  });
  test('should not be submit', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: '' } })
    fireEvent.submit(form)
    expect(onNewCategory).not.toHaveBeenCalled()
  });
  test('should be submit', () => {
    const onNewCategory = jest.fn()
    const inputValue = 'Saitama';
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    expect(input.value).toBe('');
  });

});