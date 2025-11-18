import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('NavBar Component', () => {
  const links = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  it('renders brand as text when string is passed', () => {
    render(<NavBar brand="JazzieUI" links={links} />);
    expect(screen.getByText('JazzieUI')).toBeInTheDocument();
  });

  it('renders brand as JSX element when passed', () => {
    const BrandComponent = () => <span>Custom Brand</span>;
    render(<NavBar brand={<BrandComponent />} links={links} />);
    expect(screen.getByText('Custom Brand')).toBeInTheDocument();
  });

  it('renders all link buttons', () => {
    render(<NavBar brand="JazzieUI" links={links} />);
    links.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('navigates to correct path when link is clicked', () => {
    render(<NavBar brand="JazzieUI" links={links} />);
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    expect(mockNavigate).toHaveBeenCalledWith('/about');
  });

  it('renders Sign In and Learn More buttons', () => {
    render(<NavBar brand="JazzieUI" links={links} />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});
