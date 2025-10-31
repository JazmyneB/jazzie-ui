// App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

jest.mock('./components/NavBar/NavBar', () => ({ brand, links, onLinkClick }) => (
  <div data-testid="navbar">
    <span>{brand}</span>
    {links.map((link, i) => (
      <button key={i} onClick={() => onLinkClick(link)}>
        {link.label}
      </button>
    ))}
  </div>
));

jest.mock('./components/Hero/Hero', () => () => <div data-testid="hero">Hero Section</div>);

jest.mock('./components/Footer/Footer', () => () => <div data-testid="footer">Footer Section</div>);

describe('App Component', () => {
  test('renders App with NavBar, Hero, and Footer', () => {
    render(<App />);

    // Check NavBar
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
    expect(screen.getByText(/🌸 JazzieUI/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Components/i)).toBeInTheDocument();
    expect(screen.getByText(/Docs/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    // Check Hero
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByText(/Hero Section/i)).toBeInTheDocument();

    // Check Footer
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText(/Footer Section/i)).toBeInTheDocument();
  });

  test('NavBar link click triggers callback', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<App />);

    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    expect(consoleSpy).toHaveBeenCalledWith('Clicked Home');

    const docsButton = screen.getByText('Docs');
    fireEvent.click(docsButton);
    expect(consoleSpy).toHaveBeenCalledWith('Clicked Docs');

    consoleSpy.mockRestore();
  });
});
