import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import CardDocs from '../../docs/CardDocs/CardDocs';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe('CardDocs Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders main title', () => {
    render(<CardDocs />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Card Component');
  });

  it("renders description", () => {
  render(<CardDocs />);

  // Grab the DocsLayout container (or the main content wrapper)
  const container = screen.getByText("Card Component").parentElement;

  // Assert that the container's textContent includes the expected description
  expect(container.textContent).toMatch(
    /The Card component in JazzieUI provides a flexible container/i
  );
});




  it('renders live examples of cards', () => {
    render(<CardDocs />);
    expect(screen.getByText('Soft Card')).toBeInTheDocument();
    expect(screen.getByText('Elevated Card')).toBeInTheDocument();
    expect(screen.getByText('Dark Card')).toBeInTheDocument();
  });

  it('renders code example block with copy button', () => {
    render(<CardDocs />);
    const copyButton = screen.getByRole('button', { name: /Copy/i });
    expect(copyButton).toBeInTheDocument();
    expect(screen.getByText(/import React from 'react'/i)).toBeInTheDocument();
  });

  it('copies code to clipboard when copy button is clicked', async () => {
    render(<CardDocs />);
    const copyButton = screen.getByRole('button', { name: /Copy/i });

    fireEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('<Card title="Soft Card"'));

    // Wait for "Copied!" message
    await waitFor(() => {
      expect(copyButton).toHaveTextContent('Copied!');
    });

    // After 2 seconds, should revert back
    jest.useFakeTimers();
    fireEvent.click(copyButton);
    jest.advanceTimersByTime(2000);
    await waitFor(() => {
      expect(copyButton).toHaveTextContent('Copy');
    });
    jest.useRealTimers();
  });

  it("renders props table correctly", () => {
  render(<CardDocs />);
  
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();

  const tbody = table.querySelector("tbody"); // select only tbody

  const propNames = ["title", "children", "variant", "size"];
  propNames.forEach((name) => {
    const cells = within(tbody).getAllByText(name);
    expect(cells.length).toBeGreaterThan(0);
  });

  const descriptions = [
    "Optional title displayed at the top of the card.",
    "Content inside the card.",
    "Visual style of the card.",
    "Size of the card."
  ];
  descriptions.forEach(desc => {
    expect(within(tbody).getByText(desc)).toBeInTheDocument();
  });
});




  it('renders tips section', () => {
    render(<CardDocs />);
    expect(screen.getByText('Tips')).toBeInTheDocument();
    expect(screen.getByText(/Use soft for subtle UI elements/i)).toBeInTheDocument();
    expect(screen.getByText(/Elevated cards are ideal/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark variant works well/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose the size according to the context/i)).toBeInTheDocument();
  });
});
