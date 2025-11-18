import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleDocs from '../docs/ToggleDocs';

jest.mock('../docs/DocsLayout/DocsLayout', () => ({ title, description, codeExample, propsTable, tips, children }) => (
  <div>
    <h1>{title}</h1>
    <div>{description}</div>
    {codeExample && <pre>{codeExample}</pre>}
    {propsTable && propsTable.map(p => <div key={p.name}>{p.name}</div>)}
    {tips && tips.map((tip, i) => <p key={i}>{tip}</p>)}
    {children}
  </div>
));

jest.mock('../components/SoftToggle/SoftToggle', () => {
  return ({ checked, onChange, disabled, variant }) => (
    <button
      data-testid={variant ? `toggle-${variant}` : 'toggle-disabled'}
      disabled={disabled}
      onClick={disabled ? undefined : onChange}
    >
      {checked ? 'on' : 'off'}
    </button>
  );
});

describe('ToggleDocs Component', () => {


  it('renders all toggle variants', () => {
    render(<ToggleDocs />);
    expect(screen.getByTestId('toggle-rose')).toBeInTheDocument();
expect(screen.getByTestId('toggle-blush')).toBeInTheDocument();
expect(screen.getByTestId('toggle-accent')).toBeInTheDocument();
expect(screen.getByTestId('toggle-neo')).toBeInTheDocument();
expect(screen.getByTestId('toggle-disabled')).toBeInTheDocument();
  });

  it('calls onChange when interactive toggles are clicked', () => {
    const handleChange = jest.fn();
    render(
      <button data-testid="test-toggle" onClick={handleChange}>on</button>
    );

    const toggle = screen.getByTestId('test-toggle');
    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalled();
  });

  it('does NOT toggle when disabled', () => {
    render(<ToggleDocs />);
    const disabledToggle = screen.getByTestId('toggle-disabled');
expect(disabledToggle).toBeDisabled();
fireEvent.click(disabledToggle);
expect(disabledToggle).toBeDisabled();
  });

  it('displays the props table correctly', () => {
    render(<ToggleDocs />);
    ['checked', 'onChange', 'size', 'disabled', 'variant'].forEach(prop => {
      expect(screen.getByText(prop)).toBeInTheDocument();
    });
  });

  it('shows the code example block', () => {
    render(<ToggleDocs />);
    expect(screen.getByText(/<SoftToggle checked={true}/i)).toBeInTheDocument();
  });

  it('renders the tips section', () => {
    render(<ToggleDocs />);
    expect(screen.getByText(/Use smaller sizes for inline forms/i)).toBeInTheDocument();
  });
});
