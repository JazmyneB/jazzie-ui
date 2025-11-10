import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../components/Avatar/Avatar';

describe('Avatar Component', () => {

  it('renders initials when no src is provided', () => {
    render(<Avatar initials="JS" />);
    const initialsEl = screen.getByText('JS');
    expect(initialsEl).toBeInTheDocument();
    expect(initialsEl).toHaveClass('avatar-initials');
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="avatar.png" />);
    const imgEl = screen.getByRole('img', { name: /avatar/i });
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('src', 'avatar.png');
  });

  it('renders the status indicator when status prop is provided', () => {
    const { container } = render(<Avatar initials="JS" status="online" />);
    const statusEl = container.querySelector('.avatar-status');
    expect(statusEl).toBeInTheDocument();
    expect(statusEl).toHaveClass('online');
  });

  it('does not render status indicator when status is not provided', () => {
    render(<Avatar initials="JS" />);
    const statusEl = document.querySelector('.avatar-status');
    expect(statusEl).toBeNull();
  });

  it('renders badge when badgeCount is greater than 0', () => {
    render(<Avatar initials="JS" badgeCount={3} />);
    const badgeEl = screen.getByText('3');
    expect(badgeEl).toBeInTheDocument();
    expect(badgeEl).toHaveClass('avatar-badge');
  });

  it('does not render badge when badgeCount is 0', () => {
    render(<Avatar initials="JS" badgeCount={0} />);
    const badgeEl = document.querySelector('.avatar-badge');
    expect(badgeEl).toBeNull();
  });

  it('applies correct size class', () => {
    render(<Avatar initials="JS" size="lg" />);
    const wrapper = document.querySelector('.avatar-wrapper');
    expect(wrapper).toHaveClass('lg');
  });

  it('applies correct variant class', () => {
    render(<Avatar initials="JS" variant="gradient" />);
    const wrapper = document.querySelector('.avatar-wrapper');
    expect(wrapper).toHaveClass('gradient');
  });

  it('applies default size and variant when not provided', () => {
    render(<Avatar initials="JS" />);
    const wrapper = document.querySelector('.avatar-wrapper');
    expect(wrapper).toHaveClass('md');
    expect(wrapper).toHaveClass('glass');
  });

  it('renders initials fallback if src is empty string', () => {
    render(<Avatar src="" initials="AB" />);
    const initialsEl = screen.getByText('AB');
    expect(initialsEl).toBeInTheDocument();
  });

});
