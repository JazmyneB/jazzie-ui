// AvatarBadgeDocs.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarBadgeDocs from '../docs/AvatarBadgeDocs';
import '@testing-library/jest-dom';

describe('AvatarBadgeDocs', () => {
  it('renders the title', () => {
    render(<AvatarBadgeDocs />);
    expect(screen.getByText('Avatar & Badge')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<AvatarBadgeDocs />);
    expect(screen.getByText(/displays user profile images or initials/i)).toBeInTheDocument();
  });

  it('renders the code snippet', () => {
    render(<AvatarBadgeDocs />);
    expect(screen.getByText(/<Avatar size="sm" initials="AB" status="online" badgeCount={3} \/>/i)).toBeInTheDocument();
  });

  it('renders all props in the props table', () => {
    render(<AvatarBadgeDocs />);
    expect(screen.getByText('size')).toBeInTheDocument();
    expect(screen.getByText('src')).toBeInTheDocument();
    expect(screen.getByText('initials')).toBeInTheDocument();
    expect(screen.getByText('status')).toBeInTheDocument();
    expect(screen.getByText('badgeCount')).toBeInTheDocument();
    expect(screen.getByText('variant')).toBeInTheDocument();
  });

  it('renders the tips section', () => {
    render(<AvatarBadgeDocs />);
    expect(screen.getByText(/Use initials if user image is not available/i)).toBeInTheDocument();
    expect(screen.getByText(/Combine with status indicators/i)).toBeInTheDocument();
    expect(screen.getByText(/Badge counts are useful/i)).toBeInTheDocument();
    expect(screen.getByText(/Gradient and glass variants/i)).toBeInTheDocument();
  });

  it('renders at least one live Avatar example', () => {
    render(<AvatarBadgeDocs />);
    const avatars = screen.getAllByRole('img', { hidden: true }); // our Avatar images might be hidden
    expect(avatars.length).toBeGreaterThanOrEqual(1);
  });
});
