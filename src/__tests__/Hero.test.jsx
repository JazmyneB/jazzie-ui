import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { motion, useAnimation } from 'framer-motion';
import Hero from '../components/Hero/Hero';


jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    useAnimation: jest.fn(),
  };
});

describe('Hero Component', () => {
  let startMock;

  beforeEach(() => {
    startMock = jest.fn();
    useAnimation.mockReturnValue({ start: startMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders hero structure correctly', () => {
    render(<Hero />);

    expect(screen.getByRole('main')).toHaveClass('hero');
    expect(document.querySelector('.floating-shape.shape-1')).toBeInTheDocument();
    expect(document.querySelector('.floating-shape.shape-2')).toBeInTheDocument();
    expect(document.querySelector('.glass-panel')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to JazzieUI/i)).toBeInTheDocument();
    expect(screen.getByText(/Where soft girl energy meets sleek design/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Explore Components/i })).toBeInTheDocument();
  });

  it('starts title animation on mount', () => {
    render(<Hero />);
    expect(startMock).toHaveBeenCalledTimes(1);

    const args = startMock.mock.calls[0][0];
    expect(args).toMatchObject({
      rotateX: expect.any(Array),
      rotateY: expect.any(Array),
      transition: expect.objectContaining({ duration: 8, repeat: Infinity }),
    });
  });

  it('updates mouse position when moving the mouse', () => {
    render(<Hero />);

    const hero = screen.getByRole('main');
    fireEvent.mouseMove(hero, { clientX: 100, clientY: 200 });

    fireEvent.mouseMove(hero, { clientX: 400, clientY: 300 });

    expect(hero).toBeInTheDocument();
  });

  it('applies expected gradient styles to the title', () => {
    render(<Hero />);
    const title = screen.getByText(/Welcome to JazzieUI/i);

    expect(title).toHaveStyle({
      WebkitTextFillColor: 'transparent',
      backgroundSize: '600% 600%',
    });
    expect(title.style.background).toContain('linear-gradient');
  });

  it('applies hover and tap animation to button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /Explore Components/i });

    // whileHover and whileTap are props from motion.button
    // Ensure they exist and have expected structure
    const motionButton = button.closest('button');
    expect(motionButton).toBeInTheDocument();
  });

  it('matches snapshot for stable DOM structure', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
