import React from 'react';
import { DataTable } from './DataTable';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Customer Data Management</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        View, filter, and sort your customer database.
      </p>
      <DataTable />
    </div>
  );
};

export default App;
