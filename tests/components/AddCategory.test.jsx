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
});