import reportWebVitals from '../reportWebVitals.js';

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe('reportWebVitals', () => {
  let mockOnPerfEntry;

  beforeEach(() => {
    mockOnPerfEntry = jest.fn();
  });

  it('should call all web-vitals functions if onPerfEntry is provided', async () => {
    // Arrange
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

    // Act
   reportWebVitals(mockOnPerfEntry);

   await new Promise((resolve) => setTimeout(resolve, 0));


    // Assert
    expect(getCLS).toHaveBeenCalled();
    expect(getFID).toHaveBeenCalled();
    expect(getFCP).toHaveBeenCalled();
    expect(getLCP).toHaveBeenCalled();
    expect(getTTFB).toHaveBeenCalled();
  });

  it('should call all web-vitals functions with onPerfEntry as argument', async () => {
    // Arrange
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

    // Act
    reportWebVitals(mockOnPerfEntry); // Trigger the function with mockOnPerfEntry

    await new Promise((resolve) => setTimeout(resolve, 0));

    // Assert: Check if each function was called with the correct argument
    expect(getCLS).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(getFID).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(getFCP).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(getLCP).toHaveBeenCalledWith(mockOnPerfEntry);
    expect(getTTFB).toHaveBeenCalledWith(mockOnPerfEntry);
  });

  it('should not call web-vitals functions if onPerfEntry is not a function', () => {
    // Arrange
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

    // Act
    reportWebVitals(null);

    // Assert
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });

  it('should not call web-vitals functions if onPerfEntry is not a function (undefined)', () => {
    // Arrange
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');

    // Act
    reportWebVitals(undefined);

    // Assert
    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
});