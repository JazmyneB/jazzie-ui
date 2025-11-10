import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JazzieButton from '../components/JazzieButton/JazzieButton';

describe('JazzieButton Component', () => {
  const mockClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button with the correct label', () => {
    render(<JazzieButton label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the default radiant variant when none is provided', () => {
    render(<JazzieButton label="Default" />);
    const button = screen.getByRole('button', { name: /default/i });
    expect(button).toHaveClass('radiant');
  });

  it('applies the correct variant class when specified', () => {
    render(<JazzieButton label="Aurora" variant="aurora" />);
    const button = screen.getByRole('button', { name: /aurora/i });
    expect(button).toHaveClass('aurora');
  });

  it('calls onClick when the button is clicked', () => {
    render(<JazzieButton label="Click" onClick={mockClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    render(<JazzieButton label="Disabled" onClick={mockClick} disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    fireEvent.click(button);
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('applies the disabled attribute correctly', () => {
    render(<JazzieButton label="Disabled" disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('matches snapshot for consistency', () => {
    const { asFragment } = render(<JazzieButton label="Snapshot" variant="soft-blush" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
