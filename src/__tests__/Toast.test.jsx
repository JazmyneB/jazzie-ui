/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Toast from '../components/Toasts/Toast';

// 🪄 Mock Framer Motion to simplify animation layers for testing
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
  };
});

describe('Toast Component', () => {
  jest.useFakeTimers();

  const renderToast = (props = {}) => {
    const defaultProps = {
      message: 'Test Toast Message',
      type: 'info',
      show: true,
      onClose: jest.fn(),
      duration: 1500,
    };
    return render(<Toast {...defaultProps} {...props} />);
  };

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders without crashing when show=true', () => {
    renderToast();
    expect(screen.getByText('Test Toast Message')).toBeInTheDocument();
  });

  it('does not render anything when show=false', () => {
    const { container } = renderToast({ show: false });
    expect(container.firstChild).toBeNull();
  });

  it('renders the correct toast type classes', () => {
    const { rerender } = renderToast({ type: 'info' });
    let toast = screen.getByText('Test Toast Message').closest('.jazzie-toast');
    expect(toast).toHaveClass('info');

    rerender(<Toast message="msg" show type="success" />);
    toast = screen.getByText('msg').closest('.jazzie-toast');
    expect(toast).toHaveClass('success');

    rerender(<Toast message="msg" show type="warning" />);
    toast = screen.getByText('msg').closest('.jazzie-toast');
    expect(toast).toHaveClass('warning');

    rerender(<Toast message="msg" show type="error" />);
    toast = screen.getByText('msg').closest('.jazzie-toast');
    expect(toast).toHaveClass('error');
  });

  it('renders the correct icon based on toast type', () => {
    const { rerender } = renderToast({ type: 'info' });
    expect(document.querySelector('.info-icon')).toBeInTheDocument();

    rerender(<Toast message="msg" show type="success" />);
    expect(document.querySelector('.success-icon')).toBeInTheDocument();

    rerender(<Toast message="msg" show type="warning" />);
    expect(document.querySelector('.warning-icon')).toBeInTheDocument();

    rerender(<Toast message="msg" show type="error" />);
    expect(document.querySelector('.error-icon')).toBeInTheDocument();
  });

  it('calls onClose after the specified duration', () => {
    const onClose = jest.fn();
    renderToast({ duration: 2000, onClose });

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('clears timeout on unmount', () => {
    const clearSpy = jest.spyOn(global, 'clearTimeout');
    const { unmount } = renderToast();
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });

  it('contains necessary structural elements', () => {
    renderToast();
    expect(document.querySelector('.jazzie-toast')).toBeInTheDocument();
    expect(document.querySelector('.toast-card')).toBeInTheDocument();
    expect(document.querySelector('.toast-message')).toBeInTheDocument();
  });

  it('renders the message text correctly', () => {
    renderToast({ message: 'Soft vibes only 🌸' });
    expect(screen.getByText('Soft vibes only 🌸')).toBeInTheDocument();
  });

  it('matches snapshot for stable structure', () => {
    const { asFragment } = renderToast();
    expect(asFragment()).toMatchSnapshot();
  });
});
