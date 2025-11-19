import React from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import JazzieTable from "../components/JazzieTable/JazzieTable";

const JazzieTableDocs = () => {
  const sampleData = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 22, city: "Chicago" },
    { id: 4, name: "Diana", age: 28, city: "Houston" },
    { id: 5, name: "Eve", age: 35, city: "Miami" },
    { id: 6, name: "Frank", age: 27, city: "Seattle" },
  ];

  const columns = [
    { accessor: "id", header: "ID" },
    { accessor: "name", header: "Name" },
    { accessor: "age", header: "Age" },
    { accessor: "city", header: "City" },
  ];

  const codeExample = `
import JazzieTable from 'components/JazzieTable/JazzieTable';

<JazzieTable
  data={sampleData}
  columns={columns}
  rowsPerPage={5}
/>
`;

  const propsTable = [
    {
      name: "data",
      type: "Array<Object>",
      default: "[]",
      description: "The data array to display in the table."
    },
    {
      name: "columns",
      type: "Array<{ accessor: string, header?: string }>",
      default: "[]",
      description: "Defines the table columns and headers."
    },
    {
      name: "rowsPerPage",
      type: "number",
      default: "5",
      description: "Number of rows to display per page."
    }
  ];

  const tips = [
    "Click on column headers to sort ascending/descending.",
    "If no data is provided, a fallback message will display.",
    "Pagination is automatically handled by the component.",
    "You can customize the number of rows per page using `rowsPerPage`.",
  ];

  return (
    <DocsLayout
      title="JazzieTable Component"
      description="A flexible table component with sorting and pagination."
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      <JazzieTable data={sampleData} columns={columns} rowsPerPage={5} />
    </DocsLayout>
  );
};

export default JazzieTableDocs;
