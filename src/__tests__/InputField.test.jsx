import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../components/InputField/InputField';  

describe('InputField Component', () => {

  it('should render the component with the given label', () => {
    render(<InputField label="Username" value="" onChange={() => {}} />);
    const label = screen.getByText(/username/i); // Searching by label text
    expect(label).toBeInTheDocument();
  });

  it('should not render a label when no label prop is provided', () => {
    render(<InputField value="" onChange={() => {}} />);
    const label = screen.queryByText(/username/i); // Searching by label text
    expect(label).toBeNull();  // Label should not be rendered
  });

  it('should render an input field with the correct type', () => {
    render(<InputField id="password-input" type="password" value="" onChange={() => {}} />);
    const input = screen.getByTestId('input-field');  // Implicitly matches input fields (accessible by default)
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render a text input by default', () => {
    render(<InputField value="" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text'); // Default type should be 'text'
  });

  it('should call the onChange function when the input value changes', () => {
    const handleChange = jest.fn();
    render(<InputField value="test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1); // onChange should be called once
  });

  it('should pass the placeholder text to the input field', () => {
    render(<InputField value="" placeholder="Enter your username" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter your username'); // Placeholder should match the prop
  });

  it('should change the input value correctly', () => {
  const handleChange = jest.fn();
  const { rerender } = render(<InputField value="initial" onChange={handleChange} />);  // Initial value is "initial"
  const input = screen.getByRole('textbox');
  // Simulate user typing
  fireEvent.change(input, { target: { value: 'new input' } });
  // Trigger a re-render after value change
  rerender(<InputField value="new input" onChange={handleChange} />);
  // Now the value should be "new input"
  expect(input.value).toBe('new input'); 
  expect(handleChange).toHaveBeenCalledTimes(1); // Check if the change handler was called
  });


  it('should apply custom styles correctly', () => {
    render(<InputField value="test" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    
    // Check if the input field has correct className applied
    expect(input).toHaveClass('input-field');
  });

  it('should display the label with the correct styling if provided', () => {
    render(<InputField label="Email" value="" onChange={() => {}} />);
    const label = screen.getByText(/email/i);
    expect(label).toHaveClass('input-label'); // Ensure that the label has the right class
  });

});

