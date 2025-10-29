/**
 * @jest-environment jsdom
 */

import React from 'react';

// --- ✅ 1. Define mocks BEFORE importing index.js ---
const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({ render: mockRender }));

jest.mock('react-dom/client', () => ({
  // The default export of the module must be mocked to return { render }
  __esModule: true,
  createRoot: (...args) => mockCreateRoot(...args),
}));

// Mock App so React doesn’t actually render it
jest.mock('../App', () => ({
  __esModule: true,
  default: () => <div>Mocked App</div>,
}));

describe('index.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('should call ReactDOM.createRoot with the root element', () => {
    jest.isolateModules(() => {
      // Import AFTER mocks are defined
      require('../index');
    });

    expect(mockCreateRoot).toHaveBeenCalledTimes(1);
    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('root'));
  });

  it('should render the App component inside React.StrictMode', () => {
    jest.isolateModules(() => {
      require('../index');
    });

    expect(mockRender).toHaveBeenCalledTimes(1);

    // Verify React.StrictMode wraps App
    const renderedTree = mockRender.mock.calls[0][0];
    expect(renderedTree.type).toBe(React.StrictMode);

    // Check that inside StrictMode, App is rendered
    const child = renderedTree.props.children;
    expect(child.type).toBe(require('../App').default);
  });
});


