import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/PrimaryButton/Button';

describe('Button Component', () => {
  
  it('renders with default text when no text prop is provided', () => {
    render(<Button onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Primary Button')
  });

  it('renders with custom text when passed as prop', () => {
    render(<Button onClick={() => {}} text="Custom Button Text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Custom Button Text');
  });

  it('renders children content when passed', () => {
    render(
      <Button onClick={() => {}} >
        <span>Child Button</span>
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toContainHTML('<span>Child Button</span>');
  });

  it('applies the correct class based on buttonType prop', () => {
    const { rerender } = render(<Button onClick={() => {}} buttonType="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button primary');
    
    rerender(<Button onClick={() => {}} buttonType="secondary" />);
    expect(button).toHaveClass('button secondary');
    
    rerender(<Button onClick={() => {}} buttonType="tertiary" />);
    expect(button).toHaveClass('button tertiary');
  });

  it('calls onClick function when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when button is disabled', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} disabled={true} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnClick).not.toHaveBeenCalled();
  });

});

