import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import Pagination from "../components/Pagination/Pagination";

const PaginationDocs = () => {
  const codeExample = `
import Pagination from 'components/Pagination/Pagination';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
  `;

  const propsTable = [
    {
      name: "currentPage",
      type: "number",
      default: "-",
      description: "The currently active page number."
    },
    {
      name: "totalPages",
      type: "number",
      default: "-",
      description: "Total number of pages available."
    },
    {
      name: "onPageChange",
      type: "(page: number) => void",
      default: "-",
      description: "Callback function invoked when a page is clicked. Receives the new page number."
    }
  ];

  const tips = [
    "Always keep `currentPage` in sync with your state to ensure correct highlighting.",
    "Disable Prev button when on the first page and Next button when on the last page.",
    "The component automatically adds ellipses (...) for long pagination ranges.",
    "You can customize styles via the Pagination.css file for your project theme."
  ];

  // Live example data
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  return (
    <DocsLayout
      title="Pagination Component"
      description="A component for navigating through paginated content with previous, next, and page buttons."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </DocsLayout>
  );
};

export default PaginationDocs;
