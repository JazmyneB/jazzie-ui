import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleDocs from '../docs/ToggleDocs';
import SoftToggle from '../components/SoftToggle/SoftToggle';

// Mock SoftToggle to avoid CSS issues + allow interaction tests
jest.mock('../components/SoftToggle/SoftToggle', () => {
  return jest.fn(({ checked, onChange, size, disabled, variant }) => (
    <button
      data-testid={`toggle-${variant}`}
      disabled={disabled}
      onClick={disabled ? undefined : onChange}
    >
      {variant} - {checked ? 'on' : 'off'} - {size}
    </button>
  ));
});

describe('ToggleDocs Component', () => {
  it('renders the DocsLayout title and description', () => {
    render(<ToggleDocs />);

    expect(screen.getByText('Soft Toggle')).toBeInTheDocument();
    expect(
      screen.getByText(/SoftToggle provides stylish/i)
    ).toBeInTheDocument();
  });

  it('renders all toggle variants', () => {
    render(<ToggleDocs />);

    expect(screen.getByTestId('toggle-rose')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-blush')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-accent')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-neo')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-disabled')).toBeInTheDocument();
  });

  it('toggles state when clicked (interactive toggles)', () => {
    SoftToggle.mockImplementation(({ checked, onChange, variant }) => (
      <button
        data-testid={`toggle-${variant}`}
        onClick={onChange}
      >
        {checked ? 'on' : 'off'}
      </button>
    ));

    render(<ToggleDocs />);

    const roseToggle = screen.getByTestId('toggle-rose');
    expect(roseToggle.textContent).toBe('on');

    fireEvent.click(roseToggle);
    expect(roseToggle.textContent).toBe('off');

    fireEvent.click(roseToggle);
    expect(roseToggle.textContent).toBe('on');
  });

  it('does NOT toggle when disabled', () => {
    SoftToggle.mockImplementation(({ checked, onChange, variant, disabled }) => (
      <button
        data-testid={`toggle-${variant}`}
        disabled={disabled}
        onClick={disabled ? undefined : onChange}
      >
        {checked ? 'on' : 'off'}
      </button>
    ));

    render(<ToggleDocs />);

    const disabledToggle = screen.getByTestId('toggle-disabled');

    // check initial state
    expect(disabledToggle.textContent).toBe('on');

    // clicking should do nothing
    fireEvent.click(disabledToggle);

    expect(disabledToggle.textContent).toBe('on');
  });

  it('displays the props table correctly', () => {
    render(<ToggleDocs />);

    expect(screen.getByText('checked')).toBeInTheDocument();
    expect(screen.getByText('onChange')).toBeInTheDocument();
    expect(screen.getByText('size')).toBeInTheDocument();
    expect(screen.getByText('disabled')).toBeInTheDocument();
    expect(screen.getByText('variant')).toBeInTheDocument();
  });

  it('shows the code example block', () => {
    render(<ToggleDocs />);
    expect(
      screen.getByText(/<SoftToggle checked={true}/i)
    ).toBeInTheDocument();
  });

  it('renders the tips section', () => {
    render(<ToggleDocs />);
    expect(
      screen.getByText(/Use smaller sizes for inline forms/i)
    ).toBeInTheDocument();
  });
});
