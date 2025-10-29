import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal/Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={mockOnClose} title="Hidden Modal">
        Hidden Content
      </Modal>
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Visible Modal">
        Hello World
      </Modal>
    );
    expect(screen.getByText('Visible Modal')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with default title when no title prop is provided', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        Default Title Content
      </Modal>
    );
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Close Test">
        Close Me
      </Modal>
    );
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders children content correctly', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Child Test">
        <p>Child content goes here</p>
      </Modal>
    );
    expect(screen.getByText('Child content goes here')).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={mockOnClose} variant="soft" />
    );
    const container = screen.getByText('Modal Title').closest('.modal-container');
    expect(container).toHaveClass('soft');

    rerender(<Modal isOpen={true} onClose={mockOnClose} variant="elevated" />);
    expect(container).toHaveClass('elevated');

    rerender(<Modal isOpen={true} onClose={mockOnClose} variant="dark" />);
    expect(container).toHaveClass('dark');
  });

  it('applies default variant "soft" when no variant is provided', () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const container = screen.getByText('Modal Title').closest('.modal-container');
    expect(container).toHaveClass('soft');
  });
});


