// src/pages/docs/__tests__/NavFooterDocs.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavFooterDocs from '../docs/NavFooterDocs/NavFooterDocs';

describe('NavFooterDocs', () => {
  beforeEach(() => {
    render(<NavFooterDocs />);
  });

  it('renders page title and description', () => {
    expect(screen.getByText(/NavBar & Footer/i)).toBeInTheDocument();
    expect(screen.getByText(/This documentation page covers both NavBar and Footer components/i)).toBeInTheDocument();
  });

  it('renders NavBar example', () => {
    expect(screen.getByText('NavBar Example')).toBeInTheDocument();
    expect(screen.getByText('JazzieUI')).toBeInTheDocument();
  });

  it('renders NavBar code example', () => {
    expect(screen.getByText(/import NavBar from/i)).toBeInTheDocument();
    expect(screen.getByText(/const navLinks =/i)).toBeInTheDocument();
  });

  it('renders NavBar props table', () => {
    expect(screen.getByText(/brand/i)).toBeInTheDocument();
    expect(screen.getByText(/links/i)).toBeInTheDocument();
  });

  it('renders Footer example', () => {
    expect(screen.getByText('Footer Example')).toBeInTheDocument();
    expect(screen.getByText(/© 2025 JazzieUI/i)).toBeInTheDocument();
  });

  it('renders Footer code example', () => {
    expect(screen.getByText(/import Footer from/i)).toBeInTheDocument();
    expect(screen.getByText(/<Footer/i)).toBeInTheDocument();
  });

  it('renders Footer props table', () => {
    expect(screen.getByText(/links/i)).toBeInTheDocument();
    expect(screen.getByText(/socialLinks/i)).toBeInTheDocument();
    expect(screen.getByText(/footerText/i)).toBeInTheDocument();
  });

  it('renders tips section', () => {
    expect(screen.getByText(/Combine NavBar and Footer/i)).toBeInTheDocument();
    expect(screen.getByText(/Keep NavBar links concise/i)).toBeInTheDocument();
  });
});
