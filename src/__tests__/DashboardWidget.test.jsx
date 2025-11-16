import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DashboardWidget from '../components/DashboardWidget/DashboardWidget';

// Mock icon
const MockIcon = () => <span data-testid="icon">💰</span>;

describe('DashboardWidget', () => {

  it('renders the title and value', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$5,000')).toBeInTheDocument();
  });

  it('renders an icon when provided', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" icon={<MockIcon />} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders trend when provided', () => {
    render(
      <DashboardWidget
        title="Revenue"
        value="$5,000"
        trend={{ direction: 'up', percentage: 15 }}
      />
    );
    expect(screen.getByText(/↑ 15%/)).toBeInTheDocument();
  });

  it('renders downward trend correctly', () => {
    render(
      <DashboardWidget
        title="Revenue"
        value="$5,000"
        trend={{ direction: 'down', percentage: 10 }}
      />
    );
    expect(screen.getByText(/↓ 10%/)).toBeInTheDocument();
  });

  it('applies the soft variant class by default', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" />);
    const widget = screen.getByText('Revenue').closest('.dashboard-widget');
    expect(widget).toHaveClass('soft');
  });

  it('applies elevated variant when specified', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" variant="elevated" />);
    const widget = screen.getByText('Revenue').closest('.dashboard-widget');
    expect(widget).toHaveClass('elevated');
  });

  it('applies dark variant when specified', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" variant="dark" />);
    const widget = screen.getByText('Revenue').closest('.dashboard-widget');
    expect(widget).toHaveClass('dark');
  });

  it('renders without trend and icon if not provided', () => {
    render(<DashboardWidget title="Revenue" value="$5,000" />);
    expect(screen.queryByTestId('icon')).toBeNull();
    expect(screen.queryByText(/↑|↓/)).toBeNull();
  });

  it('handles numeric and string values', () => {
    render(<DashboardWidget title="Orders" value={120} />);
    expect(screen.getByText('120')).toBeInTheDocument();
    render(<DashboardWidget title="Revenue" value="$5,000" />);
    expect(screen.getByText('$5,000')).toBeInTheDocument();
  });

});
