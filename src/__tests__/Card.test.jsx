import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

describe('Card Component', () => {

  it('renders the card with the given title', () => {
    render(<Card title="Test Title">Card body content</Card>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Card body content')).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<Card>Body without title</Card>);
    const title = screen.queryByRole('heading', { level: 3 });
    expect(title).toBeNull();
  });

  it('applies the correct variant class', () => {
    const { rerender } = render(<Card title="Soft Card" variant="soft" />);
    const container = screen.getByText('Soft Card').closest('.card-container');
    expect(container).toHaveClass('soft');

    rerender(<Card title="Elevated Card" variant="elevated" />);
    expect(container).toHaveClass('elevated');

    rerender(<Card title="Dark Card" variant="dark" />);
    expect(container).toHaveClass('dark');
  });

  it('applies the correct size class', () => {
    const { rerender } = render(<Card title="Small Card" size="sm" />);
    const container = screen.getByText('Small Card').closest('.card-container');
    expect(container).toHaveClass('sm');

    rerender(<Card title="Medium Card" size="md" />);
    expect(container).toHaveClass('md');

    rerender(<Card title="Large Card" size="lg" />);
    expect(container).toHaveClass('lg');
  });

  it('uses default variant and size when not provided', () => {
    render(<Card title="Default Props Card" />);
    const container = screen.getByText('Default Props Card').closest('.card-container');
    expect(container).toHaveClass('soft');
    expect(container).toHaveClass('md');
  });

  it('renders children content inside the card body', () => {
    render(<Card title="Children Test"><p>Inside Content</p></Card>);
    expect(screen.getByText('Inside Content')).toBeInTheDocument();
  });
});
