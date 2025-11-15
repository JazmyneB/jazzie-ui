import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock child components to simplify test and focus on App routing
jest.mock('./components/NavBar/NavBar', () => () => <nav data-testid="navbar" />);
jest.mock('./components/Footer/Footer', () => () => <footer data-testid="footer" />);
jest.mock('./components/Hero/Hero', () => () => <div data-testid="hero" />);
jest.mock('./pages/DocsPage/DocsPage', () => () => <div data-testid="docs-page">Docs Page</div>);
jest.mock('./pages/ComponentsPage/ComponentsPage', () => () => <div data-testid="components-page">Components Page</div>);

// Mock react-router-dom for testing routes
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => <div>{element}</div>,
    useNavigate: () => jest.fn(),
  };
});

describe('App Component', () => {
  it('renders NavBar, Footer, and Hero', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders the Home route correctly', () => {
    render(<App />);
    // Check for the placeholder Home page container (the empty div in your code)
    expect(screen.getByText((content, node) => {
      return node?.style?.width === '300px';
    })).toBeInTheDocument();
  });

  it('renders Docs route correctly', () => {
    render(<App />);
    expect(screen.getByTestId('docs-page')).toBeInTheDocument();
  });

  it('renders Components route correctly', () => {
    render(<App />);
    expect(screen.getByTestId('components-page')).toBeInTheDocument();
  });

  it('renders Contact page placeholder', () => {
    render(<App />);
    expect(screen.getByText(/Contact Page Coming Soon!/i)).toBeInTheDocument();
  });
});
