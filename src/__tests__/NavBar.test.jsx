import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';
import Button from '../components/PrimaryButton/Button';

describe('NavBar Component', () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  it('renders brand as string', () => {
    render(<NavBar brand="MyBrand" links={links} />);
    expect(screen.getByText('MyBrand')).toBeInTheDocument();
  });

  it('renders brand as React node', () => {
    const BrandNode = () => <div data-testid="brand-node">BrandNode</div>;
    render(<NavBar brand={<BrandNode />} links={links} />);
    expect(screen.getByTestId('brand-node')).toBeInTheDocument();
  });

  it('renders correct number of links', () => {
    render(<NavBar brand="Brand" links={links} />);
    const linkButtons = screen.getAllByRole('button', { name: /home|about/i });
    expect(linkButtons).toHaveLength(2);
  });

  it('calls onLinkClick when a link is clicked', () => {
    const onLinkClick = jest.fn();
    render(<NavBar brand="Brand" links={links} onLinkClick={onLinkClick} />);
    fireEvent.click(screen.getByText('Home'));
    expect(onLinkClick).toHaveBeenCalledWith(links[0]);
  });

  it('does not crash if onLinkClick is not provided', () => {
    render(<NavBar brand="Brand" links={links} />);
    fireEvent.click(screen.getByText('Home')); // should not throw
  });

  it('renders right-side buttons', () => {
    render(<NavBar brand="Brand" links={links} />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders navbar structure correctly', () => {
    render(<NavBar brand="Brand" links={links} />);
    expect(screen.getByRole('navigation')).toHaveClass('navbar');
    expect(screen.getByText('Sign In').closest('div')).toHaveClass('navbar-right');
  });

  it('renders with no links', () => {
    render(<NavBar brand="Brand" links={[]} />);
    expect(screen.queryByRole('button', { name: /home|about/i })).toBeNull();
  });
});
