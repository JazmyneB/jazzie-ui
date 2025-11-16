import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

describe('Footer component', () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Components', href: '#components' },
    { label: 'Docs', href: '#docs' },
    { label: 'Contact', href: '#contact' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  const socialLinks = {
    instagram: '#instagram',
    twitter: '#twitter',
    github: '#github'
  };

  test('renders logo', () => {
    render(<Footer />);
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent('🌸');
  });

  test('renders Explore and Resources links', () => {
    render(<Footer links={links} />);
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home');
    expect(screen.getByText('Components')).toHaveAttribute('href', '#components');
    expect(screen.getByText('Docs')).toHaveAttribute('href', '#docs');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact');
    expect(screen.getByText('Terms & Conditions')).toHaveAttribute('href', '#terms');
    expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '#privacy');
  });

  test('renders newsletter form', () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText(/your email/i);
    const button = screen.getByRole('button', { name: /subscribe/i });

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
    expect(button).toBeInTheDocument();

    fireEvent.submit(button);
  });

  test('renders bottom text and created by label', () => {
    const customText = '© 2025 Test UI. Crafted with 🌸';
    render(<Footer footerText={customText} />);
    expect(screen.getByText(customText)).toBeInTheDocument();
    expect(screen.getByText(/Created by/i)).toBeInTheDocument();
    expect(screen.getByText(/Jazmyne B./i)).toBeInTheDocument();
  });

  test('renders social icons with correct links', () => {
    render(<Footer socialLinks={socialLinks} />);
    const insta = screen.getByRole('link', { name: /instagram/i });
    const twitter = screen.getByRole('link', { name: /twitter/i });
    const github = screen.getByRole('link', { name: /github/i });

    expect(insta).toHaveAttribute('href', '#instagram');
    expect(twitter).toHaveAttribute('href', '#twitter');
    expect(github).toHaveAttribute('href', '#github');
  });

  test('renders default props if none provided', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 JazzieUI/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
  });
});
