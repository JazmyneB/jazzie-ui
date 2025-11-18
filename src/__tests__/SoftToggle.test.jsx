import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SoftToggle from '../components/SoftToggle/SoftToggle';

describe('SoftToggle Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders correctly with default props', () => {
    render(<SoftToggle checked={false} onChange={mockOnChange} />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();
  });

  it('renders as checked when the checked prop is true', () => {
    render(<SoftToggle checked={true} onChange={mockOnChange} />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();
  });

  it('calls onChange when clicked', () => {
    render(<SoftToggle checked={false} onChange={mockOnChange} />);
    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
  render(<SoftToggle checked={false} onChange={mockOnChange} disabled />);
  const input = screen.getByRole('checkbox');
  expect(input).toBeDisabled();
  await userEvent.click(input);
  expect(mockOnChange).not.toHaveBeenCalled();
});


  it('applies the correct size classes', () => {
    const { rerender } = render(<SoftToggle checked={false} onChange={mockOnChange} size="sm" />);
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('sm');

    rerender(<SoftToggle checked={false} onChange={mockOnChange} size="md" />);
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('md');

    rerender(<SoftToggle checked={false} onChange={mockOnChange} size="lg" />);
    expect(screen.getByRole('checkbox').parentElement).toHaveClass('lg');
  });

  it('applies the disabled class when disabled', () => {
    render(<SoftToggle checked={false} onChange={mockOnChange} disabled />);
    const label = screen.getByRole('checkbox').parentElement;
    expect(label).toHaveClass('disabled');
  });

  it('matches snapshot', () => {
    const { container } = render(<SoftToggle checked={true} onChange={mockOnChange} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
