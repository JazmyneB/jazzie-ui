import React from 'react';
import __mockRender from 'react-dom/client';
import '../index';

// Mock ReactDOM.createRoot properly
const mockRender = jest.fn();

// Mock the App component
jest.mock('../App', () => () => <div>Mocked App</div>);

// Create a fake root element
const mockRootElement = document.createElement('div');
mockRootElement.setAttribute('id', 'root');
document.body.appendChild(mockRootElement);


jest.mock('react-dom/client', () => {
  const mockRender = jest.fn();
  return {
    createRoot: () => ({
      render: mockRender,
    }),
    __mockRender: mockRender, // expose for tests
  };
});

describe('index.js', () => {
  it('calls ReactDOM.createRoot with the root element', () => {
    const { createRoot } = require('react-dom/client');
    expect(createRoot).toBeDefined();
    expect(createRoot(mockRootElement).render).toBe(mockRender);
  });

  it('renders the App component inside React.StrictMode', () => {
    expect(mockRender).toHaveBeenCalledTimes(1);

    const renderCallArg = mockRender.mock.calls[0][0];
    expect(renderCallArg.type).toBe(React.StrictMode);
    const childType = renderCallArg.props.children.type;
    // Check that the App component (mock) is rendered
    expect(childType.name || childType).toBe('App');
  });
});



